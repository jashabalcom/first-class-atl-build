import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Trash2, Edit, Plus, Upload, X, GripVertical, Images, Layers, FolderUp, ExternalLink, CheckCircle, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { compressImageForUpload, formatFileSize } from '@/lib/image-utils';
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

interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  image_type: 'before' | 'after' | 'gallery';
  display_order: number;
  isUploading?: boolean;
  isUploaded?: boolean;
}

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
  display_mode: 'single' | 'slideshow' | 'before_after' | null;
}

const categories = ['kitchen', 'bathroom', 'basement', 'commercial', 'exterior'];

const displayModeLabels = {
  single: 'Single Image',
  slideshow: 'Slideshow',
  before_after: 'Before & After'
};

interface SortableProjectCardProps {
  project: GalleryProject;
  onEdit: (project: GalleryProject) => void;
  onDelete: (id: string) => void;
  imageCount: number;
}

function SortableProjectCard({ project, onEdit, onDelete, imageCount }: SortableProjectCardProps) {
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

  const displayMode = project.display_mode || 'single';

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
            <div className="flex gap-2 mt-1">
              {project.featured && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Featured</span>
              )}
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded flex items-center gap-1">
                {displayMode === 'slideshow' && <Layers className="w-3 h-3" />}
                {displayMode === 'before_after' && <Images className="w-3 h-3" />}
                {displayModeLabels[displayMode]}
                {imageCount > 0 && ` (${imageCount})`}
              </span>
            </div>
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

export default function AdminGallery() {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [projectImages, setProjectImages] = useState<Record<string, ProjectImage[]>>({});
  const [loading, setLoading] = useState(false);
  const [editingProject, setEditingProject] = useState<GalleryProject | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBulkUploadOpen, setIsBulkUploadOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentProjectImages, setCurrentProjectImages] = useState<ProjectImage[]>([]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [savedProject, setSavedProject] = useState<{ title: string; thumbnail: string } | null>(null);
  const [uploadingImageId, setUploadingImageId] = useState<string | null>(null);
  
  interface BulkUploadItem {
    file: File;
    preview: string;
    projectId: string;
    imageType: 'gallery' | 'before' | 'after';
    uploading: boolean;
    uploaded: boolean;
  }
  const [bulkUploadItems, setBulkUploadItems] = useState<BulkUploadItem[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    description: '',
    before_image_url: '',
    after_image_url: '',
    featured: false,
    display_order: 0,
    display_mode: 'single' as 'single' | 'slideshow' | 'before_after'
  });

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

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
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery_projects')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) {
      toast.error('Failed to fetch projects');
    } else {
      const typedProjects = (data || []).map(p => ({
        ...p,
        display_mode: (p.display_mode as 'single' | 'slideshow' | 'before_after' | null) || 'single'
      })) as GalleryProject[];
      setProjects(typedProjects);
      
      if (data && data.length > 0) {
        const { data: imagesData } = await supabase
          .from('gallery_project_images')
          .select('*')
          .order('display_order', { ascending: true });
        
        if (imagesData) {
          const imagesByProject: Record<string, ProjectImage[]> = {};
          imagesData.forEach((img) => {
            const typedImg: ProjectImage = {
              id: img.id,
              project_id: img.project_id,
              image_url: img.image_url,
              image_type: img.image_type as 'before' | 'after' | 'gallery',
              display_order: img.display_order ?? 0
            };
            if (!imagesByProject[typedImg.project_id]) {
              imagesByProject[typedImg.project_id] = [];
            }
            imagesByProject[typedImg.project_id].push(typedImg);
          });
          setProjectImages(imagesByProject);
        }
      }
    }
    setLoading(false);
  };

  const fetchProjectImages = async (projectId: string) => {
    const { data, error } = await supabase
      .from('gallery_project_images')
      .select('*')
      .eq('project_id', projectId)
      .order('display_order', { ascending: true });
    
    if (!error && data) {
      setCurrentProjectImages(data.map(img => ({
        ...img,
        image_type: img.image_type as 'before' | 'after' | 'gallery',
        display_order: img.display_order ?? 0
      })));
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = projects.findIndex((p) => p.id === active.id);
      const newIndex = projects.findIndex((p) => p.id === over.id);

      const newProjects = arrayMove(projects, oldIndex, newIndex);
      setProjects(newProjects);

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

  const uploadImage = async (file: File, type: string): Promise<string | null> => {
    setUploading(true);
    
    // Compress image before upload
    const originalSize = file.size;
    const compressedFile = await compressImageForUpload(file, {
      maxWidthOrHeight: 2400,
      maxSizeMB: 2,
      quality: 0.85,
    });
    const compressedSize = compressedFile.size;
    
    console.log(`Image compression: ${formatFileSize(originalSize)} → ${formatFileSize(compressedSize)} (${Math.round((1 - compressedSize / originalSize) * 100)}% smaller)`);
    
    const fileExt = compressedFile.name.split('.').pop();
    const fileName = `${Date.now()}-${type}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('gallery-images')
      .upload(filePath, compressedFile);

    if (uploadError) {
      toast.error(`Failed to upload image`);
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

  const handleMultiImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, imageType: 'before' | 'after' | 'gallery') => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const tempId = `temp-${Date.now()}-${i}`;
      
      // Add placeholder with uploading state
      const placeholderImage: ProjectImage = {
        id: tempId,
        project_id: editingProject?.id || '',
        image_url: URL.createObjectURL(file),
        image_type: imageType,
        display_order: currentProjectImages.filter(img => img.image_type === imageType).length + i,
        isUploading: true,
        isUploaded: false
      };
      setCurrentProjectImages(prev => [...prev, placeholderImage]);
      setUploadingImageId(tempId);
      
      const url = await uploadImage(file, `${imageType}-${i}`);
      
      if (url) {
        // Update with actual URL and mark as uploaded
        setCurrentProjectImages(prev => prev.map(img => 
          img.id === tempId 
            ? { ...img, image_url: url, isUploading: false, isUploaded: true }
            : img
        ));
      } else {
        // Remove failed upload
        setCurrentProjectImages(prev => prev.filter(img => img.id !== tempId));
      }
      setUploadingImageId(null);
    }
    toast.success(`✓ ${files.length} image(s) uploaded successfully`);
  };

  const removeMultiImage = (imageId: string) => {
    setCurrentProjectImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleBulkFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newItems: BulkUploadItem[] = Array.from(files).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      projectId: '',
      imageType: 'gallery' as const,
      uploading: false,
      uploaded: false
    }));

    setBulkUploadItems(prev => [...prev, ...newItems]);
  };

  const updateBulkItem = (index: number, updates: Partial<BulkUploadItem>) => {
    setBulkUploadItems(prev => prev.map((item, i) => 
      i === index ? { ...item, ...updates } : item
    ));
  };

  const removeBulkItem = (index: number) => {
    setBulkUploadItems(prev => {
      const item = prev[index];
      if (item?.preview) URL.revokeObjectURL(item.preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const processBulkUpload = async () => {
    const itemsToUpload = bulkUploadItems.filter(item => item.projectId && !item.uploaded);
    
    if (itemsToUpload.length === 0) {
      toast.error('Please assign projects to at least one image');
      return;
    }

    setUploading(true);
    let successCount = 0;

    for (let i = 0; i < bulkUploadItems.length; i++) {
      const item = bulkUploadItems[i];
      if (!item.projectId || item.uploaded) continue;

      updateBulkItem(i, { uploading: true });

      const url = await uploadImage(item.file, `bulk-${i}`);
      
      if (url) {
        const { error } = await supabase
          .from('gallery_project_images')
          .insert({
            project_id: item.projectId,
            image_url: url,
            image_type: item.imageType,
            display_order: 0
          });

        if (!error) {
          const project = projects.find(p => p.id === item.projectId);
          if (project && project.display_mode === 'single') {
            await supabase
              .from('gallery_projects')
              .update({ 
                display_mode: item.imageType === 'gallery' ? 'slideshow' : 'before_after',
                after_image_url: project.after_image_url || url
              })
              .eq('id', item.projectId);
          }
          
          updateBulkItem(i, { uploading: false, uploaded: true });
          successCount++;
        } else {
          updateBulkItem(i, { uploading: false });
        }
      } else {
        updateBulkItem(i, { uploading: false });
      }
    }

    setUploading(false);
    toast.success(`✓ ${successCount} image(s) uploaded — now live on website!`);
    fetchProjects();
  };

  const clearBulkUpload = () => {
    bulkUploadItems.forEach(item => {
      if (item.preview) URL.revokeObjectURL(item.preview);
    });
    setBulkUploadItems([]);
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
      display_order: 0,
      display_mode: 'single'
    });
    setEditingProject(null);
    setCurrentProjectImages([]);
  };

  const openEditDialog = async (project: GalleryProject) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      location: project.location || '',
      description: project.description || '',
      before_image_url: project.before_image_url || '',
      after_image_url: project.after_image_url,
      featured: project.featured || false,
      display_order: project.display_order || 0,
      display_mode: project.display_mode || 'single'
    });
    await fetchProjectImages(project.id);
    setIsDialogOpen(true);
  };

  const openAddDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const needsAfterImage = formData.display_mode === 'single' || 
      (formData.display_mode === 'slideshow' && currentProjectImages.filter(i => i.image_type === 'gallery').length === 0) ||
      (formData.display_mode === 'before_after' && currentProjectImages.filter(i => i.image_type === 'after').length === 0);
    
    if (!formData.title || !formData.category) {
      toast.error('Please fill in required fields (title, category)');
      return;
    }

    if (needsAfterImage && !formData.after_image_url) {
      toast.error('Please add at least one image');
      return;
    }

    setLoading(true);

    const projectData = {
      title: formData.title,
      category: formData.category,
      location: formData.location || null,
      description: formData.description || null,
      before_image_url: formData.before_image_url || null,
      after_image_url: formData.after_image_url || currentProjectImages.find(i => i.image_type === 'after' || i.image_type === 'gallery')?.image_url || '',
      featured: formData.featured,
      display_order: formData.display_order,
      display_mode: formData.display_mode
    };

    let projectId = editingProject?.id;

    if (editingProject) {
      const { error } = await supabase
        .from('gallery_projects')
        .update(projectData)
        .eq('id', editingProject.id);

      if (error) {
        toast.error('Failed to update project');
        setLoading(false);
        return;
      }
    } else {
      const { data, error } = await supabase
        .from('gallery_projects')
        .insert([projectData])
        .select()
        .single();

      if (error || !data) {
        toast.error('Failed to add project');
        setLoading(false);
        return;
      }
      projectId = data.id;
    }

    if (projectId && (formData.display_mode === 'slideshow' || formData.display_mode === 'before_after')) {
      await supabase
        .from('gallery_project_images')
        .delete()
        .eq('project_id', projectId);

      const imagesToInsert = currentProjectImages
        .filter(img => img.image_url)
        .map((img, index) => ({
          project_id: projectId,
          image_url: img.image_url,
          image_type: img.image_type,
          display_order: index
        }));

      if (imagesToInsert.length > 0) {
        await supabase
          .from('gallery_project_images')
          .insert(imagesToInsert);
      }
    }

    // Show success dialog with preview
    const thumbnailUrl = formData.after_image_url || currentProjectImages.find(i => i.image_type === 'after' || i.image_type === 'gallery')?.image_url || '';
    setSavedProject({ title: formData.title, thumbnail: thumbnailUrl });
    setShowSuccessDialog(true);
    setIsDialogOpen(false);
    fetchProjects();
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

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog}>
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
        </Dialog>

        <Dialog open={isBulkUploadOpen} onOpenChange={(open) => {
          setIsBulkUploadOpen(open);
          if (!open) clearBulkUpload();
        }}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setIsBulkUploadOpen(true)}>
              <FolderUp className="w-4 h-4 mr-2" />
              Bulk Upload
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Bulk Upload Images</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleBulkFileSelect}
                    disabled={uploading}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <FolderUp className="w-12 h-12 text-muted-foreground" />
                    <p className="text-muted-foreground">Click to select images</p>
                    <Button type="button" variant="outline" disabled={uploading}>
                      Select Images
                    </Button>
                  </div>
                </label>
              </div>

              {bulkUploadItems.length > 0 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{bulkUploadItems.length} image(s) selected</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={clearBulkUpload} disabled={uploading}>
                        Clear All
                      </Button>
                      <Button size="sm" onClick={processBulkUpload} disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Upload All'}
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-3 max-h-96 overflow-y-auto">
                    {bulkUploadItems.map((item, index) => (
                      <div key={index} className={`flex items-center gap-3 p-3 border rounded-lg ${item.uploaded ? 'bg-green-50 border-green-200' : ''}`}>
                        <img src={item.preview} alt="Preview" className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          <Select
                            value={item.projectId}
                            onValueChange={(value) => updateBulkItem(index, { projectId: value })}
                            disabled={item.uploaded || item.uploading}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select project" />
                            </SelectTrigger>
                            <SelectContent>
                              {projects.map(p => (
                                <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select
                            value={item.imageType}
                            onValueChange={(value: 'gallery' | 'before' | 'after') => updateBulkItem(index, { imageType: value })}
                            disabled={item.uploaded || item.uploading}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gallery">Gallery</SelectItem>
                              <SelectItem value="before">Before</SelectItem>
                              <SelectItem value="after">After</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.uploading && <span className="text-xs text-muted-foreground">Uploading...</span>}
                          {item.uploaded && <span className="text-xs text-green-600">✓ Done</span>}
                          {!item.uploaded && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removeBulkItem(index)}
                              disabled={item.uploading}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <Button variant="outline" onClick={() => window.open('/gallery', '_blank')} className="gap-2">
          <ExternalLink className="w-4 h-4" />
          View Gallery
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                <Label htmlFor="display_mode">Display Mode</Label>
                <Select
                  value={formData.display_mode}
                  onValueChange={(value: 'single' | 'slideshow' | 'before_after') => setFormData(prev => ({ ...prev, display_mode: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Image</SelectItem>
                    <SelectItem value="slideshow">Slideshow</SelectItem>
                    <SelectItem value="before_after">Before & After</SelectItem>
                  </SelectContent>
                </Select>
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

            {formData.display_mode === 'single' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Before Image (Optional)</Label>
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
            )}

            {formData.display_mode === 'slideshow' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    Gallery Images
                    {currentProjectImages.filter(img => img.image_type === 'gallery').length > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {currentProjectImages.filter(img => img.image_type === 'gallery').length} uploaded
                      </Badge>
                    )}
                  </Label>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => handleMultiImageUpload(e, 'gallery')}
                      disabled={uploading}
                    />
                    <Button type="button" variant="outline" size="sm" disabled={uploading} asChild>
                      <span>
                        {uploading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                        {currentProjectImages.filter(img => img.image_type === 'gallery').length > 0 ? 'Add More' : 'Add Images'}
                      </span>
                    </Button>
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {currentProjectImages.filter(img => img.image_type === 'gallery').map((img) => (
                    <div key={img.id} className={`relative rounded-lg overflow-hidden border-2 ${img.isUploaded ? 'border-green-500' : 'border-transparent'}`}>
                      <img src={img.image_url} alt="Gallery" className="w-full h-24 object-cover" />
                      {img.isUploading && (
                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                          <Loader2 className="w-6 h-6 animate-spin text-primary" />
                        </div>
                      )}
                      {img.isUploaded && (
                        <div className="absolute top-1 left-1 bg-green-500 rounded-full p-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 w-5 h-5"
                        onClick={() => removeMultiImage(img.id)}
                        disabled={img.isUploading}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
                {currentProjectImages.filter(img => img.image_type === 'gallery').length === 0 && (
                  <p className="text-sm text-muted-foreground">No images added yet. Click "Add Images" to upload.</p>
                )}
              </div>
            )}

            {formData.display_mode === 'before_after' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Before Images</Label>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={(e) => handleMultiImageUpload(e, 'before')}
                          disabled={uploading}
                        />
                        <Button type="button" variant="outline" size="sm" disabled={uploading} asChild>
                          <span><Upload className="w-4 h-4" /></span>
                        </Button>
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentProjectImages.filter(img => img.image_type === 'before').map((img) => (
                        <div key={img.id} className="relative">
                          <img src={img.image_url} alt="Before" className="w-full h-16 object-cover rounded" />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 w-5 h-5"
                            onClick={() => removeMultiImage(img.id)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>After Images</Label>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={(e) => handleMultiImageUpload(e, 'after')}
                          disabled={uploading}
                        />
                        <Button type="button" variant="outline" size="sm" disabled={uploading} asChild>
                          <span><Upload className="w-4 h-4" /></span>
                        </Button>
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentProjectImages.filter(img => img.image_type === 'after').map((img) => (
                        <div key={img.id} className="relative">
                          <img src={img.image_url} alt="After" className="w-full h-16 object-cover rounded" />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 w-5 h-5"
                            onClick={() => removeMultiImage(img.id)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
              />
              <Label htmlFor="featured">Featured Project</Label>
            </div>

            <div className="flex gap-2 pt-4 border-t mt-4">
              <Button type="submit" disabled={loading || uploading} size="lg" className="flex-1">
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {editingProject ? 'Save Changes' : 'Add Project'}
                  </>
                )}
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
            </div>
            {currentProjectImages.some(img => img.isUploaded) && (
              <p className="text-sm text-green-600 flex items-center gap-1 mt-2">
                <CheckCircle className="w-4 h-4" />
                {currentProjectImages.filter(img => img.isUploaded).length} image(s) ready to save
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog with Live Preview */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-xl">Project Saved Successfully!</DialogTitle>
            <p className="text-muted-foreground">Your changes are now live on the gallery.</p>
            
            {savedProject && (
              <div className="border rounded-lg p-4 bg-muted/30">
                <img 
                  src={savedProject.thumbnail} 
                  alt={savedProject.title}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <p className="font-medium">{savedProject.title}</p>
              </div>
            )}
            
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowSuccessDialog(false)}
              >
                Continue Editing
              </Button>
              <Button 
                className="flex-1 gap-2"
                onClick={() => {
                  window.open('/gallery', '_blank');
                  setShowSuccessDialog(false);
                }}
              >
                <ExternalLink className="w-4 h-4" />
                View Live Gallery
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
                  imageCount={projectImages[project.id]?.length || 0}
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
                    <div className="flex gap-2 mt-1">
                      {project.featured && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Featured</span>
                      )}
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                        {displayModeLabels[project.display_mode || 'single']}
                      </span>
                    </div>
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
  );
}