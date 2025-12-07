-- Fix gallery-images storage bucket policies to require admin role
DROP POLICY IF EXISTS "Anyone can upload gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can update gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete gallery images" ON storage.objects;

CREATE POLICY "Admins can upload gallery images" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (
  bucket_id = 'gallery-images' AND 
  has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update gallery images" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (
  bucket_id = 'gallery-images' AND 
  has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete gallery images" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (
  bucket_id = 'gallery-images' AND 
  has_role(auth.uid(), 'admin'::app_role)
);