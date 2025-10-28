interface StatsGridProps {
  stats: string[];
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  // Group stats in pairs (value, label)
  const statPairs: Array<{ value: string; label: string }> = [];
  for (let i = 0; i < stats.length; i += 2) {
    statPairs.push({
      value: stats[i] || "",
      label: stats[i + 1] || "",
    });
  }

  return (
    <div className="my-12 py-8 bg-muted/30 rounded-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-6">
        {statPairs.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-2">
              {stat.value}
            </div>
            <div className="font-inter text-sm uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
