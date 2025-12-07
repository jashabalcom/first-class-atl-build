-- Fix blog_posts RLS policies to require admin role for modifications
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON public.blog_posts;

CREATE POLICY "Admins can insert blog posts" 
ON public.blog_posts 
FOR INSERT 
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update blog posts" 
ON public.blog_posts 
FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete blog posts" 
ON public.blog_posts 
FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));