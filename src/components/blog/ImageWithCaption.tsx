interface ImageWithCaptionProps {
  src: string;
  caption: string;
}

const ImageWithCaption = ({ src, caption }: ImageWithCaptionProps) => {
  return (
    <figure className="my-8 md:my-12">
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-sm overflow-hidden bg-muted">
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 px-4 md:px-0 font-inter text-sm text-muted-foreground italic text-center">
        {caption}
      </figcaption>
    </figure>
  );
};

export default ImageWithCaption;
