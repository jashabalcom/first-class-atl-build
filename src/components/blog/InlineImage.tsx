interface InlineImageProps {
  src: string;
  position: "left" | "right";
  width?: string;
}

const InlineImage = ({ src, position, width = "40%" }: InlineImageProps) => {
  return (
    <div
      className={`${position === "left" ? "float-left mr-6" : "float-right ml-6"} mb-6`}
      style={{ width: width }}
    >
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-muted">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default InlineImage;
