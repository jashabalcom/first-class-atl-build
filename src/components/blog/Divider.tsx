const Divider = () => {
  return (
    <div className="my-12 flex items-center justify-center gap-4">
      <div className="h-px w-20 bg-[hsl(var(--editorial-border))]" />
      <div className="flex gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <div className="h-px w-20 bg-[hsl(var(--editorial-border))]" />
    </div>
  );
};

export default Divider;
