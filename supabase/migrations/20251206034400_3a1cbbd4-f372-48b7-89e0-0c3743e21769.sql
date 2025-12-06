-- Create a table for multiple project images
CREATE TABLE public.gallery_project_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.gallery_projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_type TEXT NOT NULL DEFAULT 'gallery', -- 'before', 'after', or 'gallery' (for slideshow)
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gallery_project_images ENABLE ROW LEVEL SECURITY;

-- Create policies matching the parent table
CREATE POLICY "Anyone can view gallery project images"
ON public.gallery_project_images
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert gallery project images"
ON public.gallery_project_images
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery project images"
ON public.gallery_project_images
FOR UPDATE
USING (true);

CREATE POLICY "Authenticated users can delete gallery project images"
ON public.gallery_project_images
FOR DELETE
USING (true);

-- Add index for faster lookups
CREATE INDEX idx_gallery_project_images_project_id ON public.gallery_project_images(project_id);

-- Add a display_mode column to gallery_projects to indicate slideshow vs before/after
ALTER TABLE public.gallery_projects 
ADD COLUMN display_mode TEXT DEFAULT 'single' CHECK (display_mode IN ('single', 'slideshow', 'before_after'));