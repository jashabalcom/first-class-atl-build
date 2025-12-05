interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, isLast = false }: ProcessStepProps) => {
  return (
    <div className="relative flex gap-4">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-px h-[calc(100%+2rem)] bg-accent/20" />
      )}
      
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-playfair font-bold text-lg relative z-10">
        {number}
      </div>
      <div className="flex-1 pt-1 pb-8">
        <h3 className="font-playfair font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
