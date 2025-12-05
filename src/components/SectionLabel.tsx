interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className = "" }: SectionLabelProps) => {
  return (
    <span className={`text-xs uppercase tracking-[0.2em] text-accent font-medium ${className}`}>
      {children}
    </span>
  );
};

export default SectionLabel;
