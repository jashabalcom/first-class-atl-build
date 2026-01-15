-- Add aspect_ratio column to gallery_projects table
ALTER TABLE public.gallery_projects 
ADD COLUMN IF NOT EXISTS aspect_ratio text DEFAULT '4:3';

-- Add fit_mode column to control cover vs contain
ALTER TABLE public.gallery_projects 
ADD COLUMN IF NOT EXISTS fit_mode text DEFAULT 'cover';