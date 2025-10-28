interface InlineImageProps {
  src: string;
  alt?: string;
  position: "left" | "right";
  width?: string;
}

const InlineImage = ({ src, alt = "", position, width = "40%" }: InlineImageProps) => {
  return (
    <div
      className={`w-full mb-6 ${position === "left" ? "md:float-left md:mr-6 md:w-[40%]" : "md:float-right md:ml-6 md:w-[40%]"}`}
      style={{ maxWidth: width }}
    >
      <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-sm overflow-hidden bg-muted">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default InlineImage;
