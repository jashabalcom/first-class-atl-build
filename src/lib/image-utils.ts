import imageCompression from 'browser-image-compression';

/**
 * Generate optimized image URL using Supabase image transformations
 * Supabase Storage supports on-the-fly transformations via URL parameters
 */
export interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'origin';
}

export const getOptimizedImageUrl = (
  url: string,
  options: ImageTransformOptions = {}
): string => {
  if (!url) return url;
  
  // Only transform Supabase storage URLs
  if (!url.includes('supabase.co/storage')) {
    return url;
  }

  const { width, height, quality = 80, format = 'webp' } = options;
  
  // Build transformation parameters
  const params = new URLSearchParams();
  if (width) params.set('width', width.toString());
  if (height) params.set('height', height.toString());
  if (quality) params.set('quality', quality.toString());
  if (format) params.set('format', format);

  // Append params to URL
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
};

/**
 * Preset optimizations for common use cases
 */
export const imagePresets = {
  thumbnail: { width: 600, quality: 75, format: 'webp' as const },
  gallery: { width: 1200, quality: 80, format: 'webp' as const },
  lightbox: { width: 1600, quality: 85, format: 'webp' as const },
  hero: { width: 1920, quality: 85, format: 'webp' as const },
};

/**
 * Compress image before upload using browser-image-compression
 * Significantly reduces upload size and time
 */
export const compressImageForUpload = async (
  file: File,
  options?: {
    maxWidthOrHeight?: number;
    maxSizeMB?: number;
    quality?: number;
  }
): Promise<File> => {
  const {
    maxWidthOrHeight = 2400,
    maxSizeMB = 2,
    quality = 0.85,
  } = options || {};

  try {
    const compressedFile = await imageCompression(file, {
      maxWidthOrHeight,
      maxSizeMB,
      initialQuality: quality,
      useWebWorker: true,
      fileType: 'image/webp', // Convert to WebP for best compression
    });

    // Create a new file with .webp extension if converted
    const newFileName = file.name.replace(/\.[^.]+$/, '.webp');
    return new File([compressedFile], newFileName, { type: 'image/webp' });
  } catch (error) {
    console.error('Image compression failed, using original:', error);
    return file;
  }
};

/**
 * Get file size in human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
