-- Add new categories column as text array
ALTER TABLE gallery_projects 
ADD COLUMN categories text[] DEFAULT '{}';

-- Migrate existing data: copy single category to array
UPDATE gallery_projects 
SET categories = ARRAY[category] 
WHERE category IS NOT NULL AND categories = '{}';