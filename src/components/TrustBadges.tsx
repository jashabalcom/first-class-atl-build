import { ShieldCheck, Award, Star, ThumbsUp } from "lucide-react";

interface TrustBadge {
  name: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface TrustBadgesProps {
  variant?: "light" | "dark";
  className?: string;
}

const TrustBadges = ({ variant = "light", className = "" }: TrustBadgesProps) => {
  const badges: TrustBadge[] = [
    {
      name: "BBB",
      label: "BBB Accredited",
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
          <text x="50%" y="55%" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">
            BBB
          </text>
        </svg>
      ),
      color: "text-blue-600",
    },
    {
      name: "Angi",
      label: "Top Rated on Angi",
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
          <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
          <text x="50%" y="58%" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor">
            ANGI
          </text>
        </svg>
      ),
      color: "text-red-500",
    },
    {
      name: "HomeAdvisor",
      label: "HomeAdvisor Screened",
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
          <path d="M20 4L4 20H10V36H30V20H36L20 4Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="22" r="4" fill="currentColor" />
        </svg>
      ),
      color: "text-orange-500",
    },
    {
      name: "Houzz",
      label: "Best of Houzz",
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
          <rect x="8" y="8" width="10" height="24" fill="currentColor" />
          <rect x="22" y="16" width="10" height="16" fill="currentColor" opacity="0.6" />
        </svg>
      ),
      color: "text-green-600",
    },
  ];

  const bgClass = variant === "dark" 
    ? "bg-card/50 backdrop-blur border-border/50" 
    : "bg-muted/50 border-border";

  const textClass = variant === "dark"
    ? "text-muted-foreground"
    : "text-muted-foreground";

  return (
    <div className={`py-8 ${className}`}>
      <div className="container">
        <p className={`text-center text-xs uppercase tracking-widest mb-6 ${textClass}`}>
          Trusted & Verified
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${bgClass} transition-all duration-300 hover:shadow-md hover:border-accent/30 group`}
            >
              <div className={`${badge.color} transition-transform group-hover:scale-110`}>
                {badge.icon}
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-foreground">{badge.name}</p>
                <p className="text-[10px] text-muted-foreground">{badge.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-accent" />
            <span>DBE/MBE Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-accent" />
            <span>4.9★ Average Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-accent" />
            <span>500+ Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
