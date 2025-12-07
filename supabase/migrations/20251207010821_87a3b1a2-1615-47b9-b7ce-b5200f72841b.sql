-- Fix gallery_projects RLS policies to require admin role
DROP POLICY IF EXISTS "Authenticated users can insert gallery projects" ON public.gallery_projects;
DROP POLICY IF EXISTS "Authenticated users can update gallery projects" ON public.gallery_projects;
DROP POLICY IF EXISTS "Authenticated users can delete gallery projects" ON public.gallery_projects;

CREATE POLICY "Admins can insert gallery projects" 
ON public.gallery_projects 
FOR INSERT 
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update gallery projects" 
ON public.gallery_projects 
FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete gallery projects" 
ON public.gallery_projects 
FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix gallery_project_images RLS policies to require admin role
DROP POLICY IF EXISTS "Authenticated users can insert gallery project images" ON public.gallery_project_images;
DROP POLICY IF EXISTS "Authenticated users can update gallery project images" ON public.gallery_project_images;
DROP POLICY IF EXISTS "Authenticated users can delete gallery project images" ON public.gallery_project_images;

CREATE POLICY "Admins can insert gallery project images" 
ON public.gallery_project_images 
FOR INSERT 
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update gallery project images" 
ON public.gallery_project_images 
FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete gallery project images" 
ON public.gallery_project_images 
FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));