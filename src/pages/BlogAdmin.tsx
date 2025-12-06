import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, LogOut, Eye, Image, Save, FileText, Bold, Italic, Quote, List, Link2 } from "lucide-react";
import { blogCategories } from "@/data/blogPosts";
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  author: string;
  publish_date: string;
  updated_date: string | null;
  category: string;
  tags: string[];
  featured_image: string | null;
  read_time: number;
  featured: boolean | null;
  meta_description: string | null;
  status: string;
  display_order: number | null;
  created_at: string;
}

const ADMIN_PASSWORD = "mla2024admin";

const BlogAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "First Class Construction Team",
    category: "Kitchen Remodeling",
    tags: "",
    featured_image: "",
    read_time: 5,
    meta_description: "",
    status: "draft",
    featured: false,
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("blogAdminAuth");
    if (saved === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching posts",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("blogAdminAuth", "true");
      toast({ title: "Login successful" });
    } else {
      toast({
        title: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("blogAdminAuth");
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "First Class Construction Team",
      category: "Kitchen Remodeling",
      tags: "",
      featured_image: "",
      read_time: 5,
      meta_description: "",
      status: "draft",
      featured: false,
    });
    setEditingPost(null);
    setPreviewMode(false);
  };

  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags?.join(", ") || "",
      featured_image: post.featured_image || "",
      read_time: post.read_time,
      meta_description: post.meta_description || "",
      status: post.status,
      featured: post.featured || false,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const postData = {
      title: formData.title,
      slug: formData.slug || generateSlug(formData.title),
      excerpt: formData.excerpt || null,
      content: formData.content,
      author: formData.author,
      category: formData.category,
      tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
      featured_image: formData.featured_image || null,
      read_time: formData.read_time,
      meta_description: formData.meta_description || null,
      status: formData.status,
      featured: formData.featured,
      updated_date: new Date().toISOString().split("T")[0],
    };

    try {
      if (editingPost) {
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", editingPost.id);
        if (error) throw error;
        toast({ title: "Post updated successfully" });
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert([{ ...postData, display_order: posts.length }]);
        if (error) throw error;
        toast({ title: "Post created successfully" });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error saving post",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);
      if (error) throw error;
      toast({ title: "Post deleted" });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error deleting post",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `blog-${Date.now()}.${fileExt}`;
    const filePath = `blog/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from("gallery-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("gallery-images")
        .getPublicUrl(filePath);

      setFormData({ ...formData, featured_image: data.publicUrl });
      toast({ title: "Image uploaded" });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const insertShortcode = (shortcode: string) => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    let insertion = "";

    switch (shortcode) {
      case "dropcap":
        insertion = `[dropcap]${selectedText || "X"}[/dropcap]`;
        break;
      case "callout":
        insertion = `[callout type="tip"]${selectedText || "Your tip here"}[/callout]`;
        break;
      case "pullquote":
        insertion = `[pullquote]${selectedText || "Your quote here"}[/pullquote]`;
        break;
      case "divider":
        insertion = `\n[divider]***[/divider]\n`;
        break;
      case "stats":
        insertion = `[stats]Value1|Label1|Value2|Label2|Value3|Label3[/stats]`;
        break;
      case "image":
        insertion = `[image:URL|Caption goes here]`;
        break;
      case "bold":
        insertion = `**${selectedText || "bold text"}**`;
        break;
      case "italic":
        insertion = `*${selectedText || "italic text"}*`;
        break;
      case "heading":
        insertion = `\n## ${selectedText || "Heading"}\n`;
        break;
      case "list":
        insertion = `\n- Item 1\n- Item 2\n- Item 3\n`;
        break;
      case "link":
        insertion = `[${selectedText || "Link text"}](URL)`;
        break;
      default:
        return;
    }

    const newContent =
      formData.content.substring(0, start) +
      insertion +
      formData.content.substring(end);
    setFormData({ ...formData, content: newContent });
  };

  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center font-playfair">Blog Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="font-playfair text-2xl font-bold">Blog Admin</h1>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                resetForm();
                setIsDialogOpen(true);
              }}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              New Post
            </Button>
            <Button variant="outline" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All ({posts.length})
          </Button>
          {blogCategories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            return (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat} ({count})
              </Button>
            );
          })}
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No posts yet. Create your first post!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                {post.featured_image && (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={post.status === "published" ? "default" : "secondary"}>
                      {post.status}
                    </Badge>
                    {post.featured && <Badge variant="outline">Featured</Badge>}
                  </div>
                  <h3 className="font-playfair text-lg font-bold mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{post.category}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(post)}
                      className="flex-1 gap-1"
                    >
                      <Edit2 className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`/blog/${post.slug}`, "_blank")}
                      className="gap-1"
                    >
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                      className="gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl">
              {editingPost ? "Edit Post" : "New Post"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      title: e.target.value,
                      slug: formData.slug || generateSlug(e.target.value),
                    });
                  }}
                  placeholder="Post title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Slug *</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="url-friendly-slug"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(v) => setFormData({ ...formData, category: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {blogCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Author</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Read Time (minutes)</Label>
                <Input
                  type="number"
                  min={1}
                  value={formData.read_time}
                  onChange={(e) =>
                    setFormData({ ...formData, read_time: parseInt(e.target.value) || 5 })
                  }
                />
              </div>
            </div>

            {/* Featured Image */}
            <div className="space-y-2">
              <Label>Featured Image</Label>
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <Input
                    value={formData.featured_image}
                    onChange={(e) =>
                      setFormData({ ...formData, featured_image: e.target.value })
                    }
                    placeholder="Image URL or upload"
                  />
                </div>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Button type="button" variant="outline" className="gap-2">
                    <Image className="h-4 w-4" />
                    Upload
                  </Button>
                </div>
              </div>
              {formData.featured_image && (
                <img
                  src={formData.featured_image}
                  alt="Preview"
                  className="h-32 object-cover rounded mt-2"
                />
              )}
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <Label>Excerpt</Label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief summary for preview cards"
                rows={2}
              />
            </div>

            {/* Content Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Content (Markdown) *</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="gap-2"
                >
                  <Eye className="h-4 w-4" />
                  {previewMode ? "Edit" : "Preview"}
                </Button>
              </div>

              {/* Shortcode Toolbar */}
              {!previewMode && (
                <div className="flex flex-wrap gap-1 p-2 bg-muted rounded-t border border-b-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("bold")}
                    title="Bold"
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("italic")}
                    title="Italic"
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("heading")}
                    title="Heading"
                  >
                    H2
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("list")}
                    title="List"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("link")}
                    title="Link"
                  >
                    <Link2 className="h-4 w-4" />
                  </Button>
                  <span className="border-l mx-2" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("dropcap")}
                    title="Drop Cap"
                  >
                    Drop Cap
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("callout")}
                    title="Callout"
                  >
                    Callout
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("pullquote")}
                    title="Pull Quote"
                  >
                    <Quote className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("stats")}
                    title="Stats Grid"
                  >
                    Stats
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("divider")}
                    title="Divider"
                  >
                    ---
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertShortcode("image")}
                    title="Image"
                  >
                    <Image className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {previewMode ? (
                <div className="border rounded-b p-6 min-h-[300px] bg-card prose prose-lg max-w-none">
                  <BlogContentRenderer content={formData.content} />
                </div>
              ) : (
                <Textarea
                  id="content-editor"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your post content in Markdown..."
                  rows={15}
                  className="font-mono text-sm rounded-t-none"
                  required
                />
              )}
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Tags (comma-separated)</Label>
              <Input
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="kitchen, remodeling, atlanta"
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-2">
              <Label>Meta Description (SEO)</Label>
              <Textarea
                value={formData.meta_description}
                onChange={(e) =>
                  setFormData({ ...formData, meta_description: e.target.value })
                }
                placeholder="SEO-friendly description (160 chars max)"
                rows={2}
                maxLength={160}
              />
              <p className="text-xs text-muted-foreground">
                {formData.meta_description.length}/160 characters
              </p>
            </div>

            {/* Status & Featured */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(v) => setFormData({ ...formData, status: v })}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(v) => setFormData({ ...formData, featured: v })}
                />
                <Label htmlFor="featured">Featured Post</Label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 justify-end pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading} className="gap-2">
                <Save className="h-4 w-4" />
                {editingPost ? "Update Post" : "Create Post"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogAdmin;
