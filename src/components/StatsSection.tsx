import { Trophy, Users, Shield, Calendar } from "lucide-react";
import StatsCounter from "./StatsCounter";

const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      value: "20+",
      label: "Years in Business",
    },
    {
      icon: Users,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: Trophy,
      value: "100%",
      label: "Licensed & Insured",
    },
    {
      icon: Shield,
      value: "DBE/MBE",
      label: "Certified",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatsCounter
                key={index}
                value={stat.value}
                label={stat.label}
                icon={<Icon className="h-8 w-8 text-accent" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
