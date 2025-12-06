import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Trash2, Edit, Plus, Lock, LogOut, Upload, X, GripVertical } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const ADMIN_PASSWORD = 'mla2024admin'; // Simple password protection

interface GalleryProject {
  id: string;
  title: string;
  category: string;
  location: string | null;
  description: string | null;
  before_image_url: string | null;
  after_image_url: string;
  featured: boolean | null;
  display_order: number | null;
}

const categories = [
  'Kitchen Remodel',
  'Bathroom Remodel',
  'Basement Finishing',
  'Commercial',
  'Deck & Outdoor',
  'Flooring',
  'Full Renovation',
  'Painting'
];

interface SortableProjectCardProps {
  project: GalleryProject;
  onEdit: (project: GalleryProject) => void;
  onDelete: (id: string) => void;
}

function SortableProjectCard({ project, onEdit, onDelete }: SortableProjectCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card ref={setNodeRef} style={style} className={isDragging ? 'shadow-lg' : ''}>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <button
            className="cursor-grab active:cursor-grabbing touch-none p-1 text-muted-foreground hover:text-foreground"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="w-5 h-5" />
          </button>
          <img
            src={project.after_image_url}
            alt={project.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              {project.category} {project.location && `• ${project.location}`}
            </p>
            {project.featured && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Featured</span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => onEdit(project)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="destructive" size="icon" onClick={() => onDelete(project.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingProject, setEditingProject] = useState<GalleryProject | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    description: '',
    before_image_url: '',
    after_image_url: '',
    featured: false,
    display_order: 0
  });

  const navigate = useNavigate();

  // Get category counts for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [projects, activeCategory]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_authenticated');
    if (saved === 'true') {
      setIsAuthenticated(true);
      fetchProjects();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      fetchProjects();
      toast.success('Access granted');
    } else {
      toast.error('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery_projects')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) {
      toast.error('Failed to fetch projects');
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = projects.findIndex((p) => p.id === active.id);
      const newIndex = projects.findIndex((p) => p.id === over.id);

      const newProjects = arrayMove(projects, oldIndex, newIndex);
      setProjects(newProjects);

      // Update display_order in database
      const updates = newProjects.map((project, index) => ({
        id: project.id,
        display_order: index,
      }));

      for (const update of updates) {
        await supabase
          .from('gallery_projects')
          .update({ display_order: update.display_order })
          .eq('id', update.id);
      }

      toast.success('Order updated');
    }
  };

  const uploadImage = async (file: File, type: 'before' | 'after'): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${type}.${fileExt}`;
    const filePath = `${fileName}`;

    setUploading(true);
    const { error: uploadError } = await supabase.storage
      .from('gallery-images')
      .upload(filePath, file);

    if (uploadError) {
      toast.error(`Failed to upload ${type} image`);
      setUploading(false);
      return null;
    }

    const { data } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(filePath);

    setUploading(false);
    return data.publicUrl;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await uploadImage(file, type);
    if (url) {
      if (type === 'before') {
        setFormData(prev => ({ ...prev, before_image_url: url }));
      } else {
        setFormData(prev => ({ ...prev, after_image_url: url }));
      }
      toast.success(`${type === 'before' ? 'Before' : 'After'} image uploaded`);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      location: '',
      description: '',
      before_image_url: '',
      after_image_url: '',
      featured: false,
      display_order: 0
    });
    setEditingProject(null);
  };

  const openEditDialog = (project: GalleryProject) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      location: project.location || '',
      description: project.description || '',
      before_image_url: project.before_image_url || '',
      after_image_url: project.after_image_url,
      featured: project.featured || false,
      display_order: project.display_order || 0
    });
    setIsDialogOpen(true);
  };

  const openAddDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.after_image_url) {
      toast.error('Please fill in required fields (title, category, after image)');
      return;
    }

    setLoading(true);

    const projectData = {
      title: formData.title,
      category: formData.category,
      location: formData.location || null,
      description: formData.description || null,
      before_image_url: formData.before_image_url || null,
      after_image_url: formData.after_image_url,
      featured: formData.featured,
      display_order: formData.display_order
    };

    if (editingProject) {
      const { error } = await supabase
        .from('gallery_projects')
        .update(projectData)
        .eq('id', editingProject.id);

      if (error) {
        toast.error('Failed to update project');
      } else {
        toast.success('Project updated');
        setIsDialogOpen(false);
        fetchProjects();
      }
    } else {
      const { error } = await supabase
        .from('gallery_projects')
        .insert([projectData]);

      if (error) {
        toast.error('Failed to add project');
      } else {
        toast.success('Project added');
        setIsDialogOpen(false);
        fetchProjects();
      }
    }

    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    const { error } = await supabase
      .from('gallery_projects')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete project');
    } else {
      toast.success('Project deleted');
      fetchProjects();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 mx-auto text-primary mb-4" />
            <CardTitle>Gallery Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Access Admin Panel
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={() => navigate('/')}>
                Back to Site
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Gallery Admin</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/gallery')}>
              View Gallery
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="mb-6">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Project title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g., Buckhead, Atlanta"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Project description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Before Image</Label>
                  <div className="flex gap-2">
                    <Input
                      value={formData.before_image_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, before_image_url: e.target.value }))}
                      placeholder="URL or upload"
                      className="flex-1"
                    />
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, 'before')}
                        disabled={uploading}
                      />
                      <Button type="button" variant="outline" size="icon" disabled={uploading} asChild>
                        <span><Upload className="w-4 h-4" /></span>
                      </Button>
                    </label>
                  </div>
                  {formData.before_image_url && (
                    <div className="relative">
                      <img src={formData.before_image_url} alt="Before preview" className="w-full h-24 object-cover rounded" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 w-6 h-6"
                        onClick={() => setFormData(prev => ({ ...prev, before_image_url: '' }))}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>After Image *</Label>
                  <div className="flex gap-2">
                    <Input
                      value={formData.after_image_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, after_image_url: e.target.value }))}
                      placeholder="URL or upload"
                      className="flex-1"
                      required
                    />
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, 'after')}
                        disabled={uploading}
                      />
                      <Button type="button" variant="outline" size="icon" disabled={uploading} asChild>
                        <span><Upload className="w-4 h-4" /></span>
                      </Button>
                    </label>
                  </div>
                  {formData.after_image_url && (
                    <div className="relative">
                      <img src={formData.after_image_url} alt="After preview" className="w-full h-24 object-cover rounded" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 w-6 h-6"
                        onClick={() => setFormData(prev => ({ ...prev, after_image_url: '' }))}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" disabled={loading || uploading}>
                  {editingProject ? 'Update Project' : 'Add Project'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Category Filter Tabs */}
        <div className="mb-6">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex-wrap h-auto gap-1 bg-muted/50 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                All
                <Badge variant="secondary" className="ml-2 text-xs">{categoryCounts.all || 0}</Badge>
              </TabsTrigger>
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat}
                  {categoryCounts[cat] && (
                    <Badge variant="secondary" className="ml-2 text-xs">{categoryCounts[cat]}</Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {activeCategory === 'all' 
            ? 'Drag and drop projects to reorder them in the gallery.'
            : `Showing ${filteredProjects.length} ${activeCategory} project${filteredProjects.length !== 1 ? 's' : ''}.`
          }
        </p>

        {loading && !projects.length ? (
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        ) : activeCategory === 'all' ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={projects.map(p => p.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="grid gap-4">
                {projects.map((project) => (
                  <SortableProjectCard
                    key={project.id}
                    project={project}
                    onEdit={openEditDialog}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        ) : (
          <div className="grid gap-4">
            {filteredProjects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.after_image_url}
                      alt={project.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category} {project.location && `• ${project.location}`}
                      </p>
                      {project.featured && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Featured</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => openEditDialog(project)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(project.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            {activeCategory === 'all' 
              ? 'No projects yet. Add your first project!'
              : `No ${activeCategory} projects found.`
            }
          </div>
        )}
      </div>
    </div>
  );
}
