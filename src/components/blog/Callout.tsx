import { Info, AlertCircle, CheckCircle, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  type?: "info" | "warning" | "success" | "tip";
}

const Callout = ({ children, type = "tip" }: CalloutProps) => {
  const styles = {
    info: {
      bg: "bg-blue-50/50 dark:bg-blue-950/20",
      border: "border-l-4 border-blue-500",
      icon: Info,
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    warning: {
      bg: "bg-amber-50/50 dark:bg-amber-950/20",
      border: "border-l-4 border-amber-500",
      icon: AlertCircle,
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    success: {
      bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
      border: "border-l-4 border-emerald-500",
      icon: CheckCircle,
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    tip: {
      bg: "bg-accent/5",
      border: "border-l-4 border-accent",
      icon: Lightbulb,
      iconColor: "text-accent",
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} p-6 my-8 rounded-r-lg`}>
      <div className="flex gap-4">
        <Icon className={`h-6 w-6 flex-shrink-0 ${style.iconColor}`} />
        <div className="font-inter text-base leading-[1.7] text-foreground/90">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Callout;
