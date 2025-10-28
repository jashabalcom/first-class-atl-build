import { Trophy, Users, Shield, Calendar } from "lucide-react";

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
              <div 
                key={index}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
