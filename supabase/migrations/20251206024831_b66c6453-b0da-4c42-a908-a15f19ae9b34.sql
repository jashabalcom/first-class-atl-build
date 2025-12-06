-- Create gallery_projects table
CREATE TABLE public.gallery_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('kitchen', 'bathroom', 'basement', 'commercial', 'exterior')),
  location TEXT,
  description TEXT,
  before_image_url TEXT,
  after_image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gallery_projects ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view gallery)
CREATE POLICY "Anyone can view gallery projects"
ON public.gallery_projects
FOR SELECT
USING (true);

-- Authenticated users can manage (for future admin)
CREATE POLICY "Authenticated users can insert gallery projects"
ON public.gallery_projects
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery projects"
ON public.gallery_projects
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete gallery projects"
ON public.gallery_projects
FOR DELETE
TO authenticated
USING (true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery-images', 'gallery-images', true);

-- Storage policies for gallery images
CREATE POLICY "Anyone can view gallery images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'gallery-images');

CREATE POLICY "Authenticated users can upload gallery images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery-images');

CREATE POLICY "Authenticated users can update gallery images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'gallery-images');

CREATE POLICY "Authenticated users can delete gallery images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'gallery-images');