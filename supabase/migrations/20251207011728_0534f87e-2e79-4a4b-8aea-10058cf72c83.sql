-- Fix blog_posts SELECT policy to restrict draft viewing to admins only
DROP POLICY IF EXISTS "Authenticated users can view all blog posts" ON public.blog_posts;

-- Admins can view all posts (including drafts)
CREATE POLICY "Admins can view all blog posts" 
ON public.blog_posts 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));