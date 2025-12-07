import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Package, Wrench, FileCheck, Palette, Shield, RefreshCw, Info } from "lucide-react";
import { toast } from "sonner";

const BREAKDOWN_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/budget-breakdown`;

interface BreakdownCategory {
  percentage: number;
  amount: number;
  details: string;
}

interface CostBreakdown {
  materials: BreakdownCategory;
  labor: BreakdownCategory;
  permits: BreakdownCategory;
  design: BreakdownCategory;
  contingency: BreakdownCategory;
}

interface CostBreakdownChartProps {
  projectType: string;
  scope: string;
  finishLevel: string;
  budgetMin: number;
  budgetMax: number;
}

const categoryConfig = {
  materials: {
    label: "Materials",
    icon: Package,
    color: "hsl(var(--primary))",
  },
  labor: {
    label: "Labor",
    icon: Wrench,
    color: "hsl(var(--accent))",
  },
  permits: {
    label: "Permits & Fees",
    icon: FileCheck,
    color: "hsl(210, 70%, 50%)",
  },
  design: {
    label: "Design & Planning",
    icon: Palette,
    color: "hsl(280, 60%, 55%)",
  },
  contingency: {
    label: "Contingency",
    icon: Shield,
    color: "hsl(150, 50%, 45%)",
  },
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export function CostBreakdownChart({
  projectType,
  scope,
  finishLevel,
  budgetMin,
  budgetMax,
}: CostBreakdownChartProps) {
  const [breakdown, setBreakdown] = useState<CostBreakdown | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [animatedIndex, setAnimatedIndex] = useState(-1);

  const fetchBreakdown = async () => {
    setIsLoading(true);
    setBreakdown(null);
    setAnimatedIndex(-1);

    try {
      const response = await fetch(BREAKDOWN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          projectType,
          scope,
          finishLevel,
          budgetMin: budgetMin * 1000,
          budgetMax: budgetMax * 1000,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get breakdown");
      }

      const data = await response.json();
      setBreakdown(data.breakdown);
      setHasLoaded(true);

      // Animate cards staggered
      const categories = Object.keys(categoryConfig);
      categories.forEach((_, index) => {
        setTimeout(() => setAnimatedIndex(index), index * 150);
      });
    } catch (error) {
      console.error("Cost breakdown error:", error);
      toast.error("Couldn't generate breakdown. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Prepare chart data
  const chartData = breakdown
    ? Object.entries(breakdown).map(([key, value]) => ({
        name: categoryConfig[key as keyof typeof categoryConfig].label,
        value: value.percentage,
        amount: value.amount,
        color: categoryConfig[key as keyof typeof categoryConfig].color,
      }))
    : [];

  if (!hasLoaded) {
    return (
      <div className="text-center py-4">
        <Button
          variant="outline"
          onClick={fetchBreakdown}
          disabled={isLoading}
          className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/5"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Analyzing costs...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 text-primary" />
              View AI Cost Breakdown
            </>
          )}
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Card className="p-6 bg-muted/30 border-primary/20">
        <div className="flex flex-col items-center justify-center h-48 gap-3">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <Sparkles className="h-6 w-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            AI is analyzing your project costs...
          </p>
        </div>
      </Card>
    );
  }

  if (!breakdown) return null;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border border-border rounded-lg shadow-lg p-3">
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {data.value}% · {formatCurrency(data.amount)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-4 md:p-6 bg-muted/30 border-primary/20 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">AI Cost Breakdown</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Beta</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={fetchBreakdown}
          className="gap-1 text-xs text-muted-foreground hover:text-foreground h-7 px-2"
        >
          <RefreshCw className="h-3 w-3" />
          Refresh
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Category Cards */}
        <div className="space-y-2">
          {Object.entries(breakdown).map(([key, value], index) => {
            const config = categoryConfig[key as keyof typeof categoryConfig];
            const Icon = config.icon;
            const isVisible = index <= animatedIndex;

            return (
              <div
                key={key}
                className={`flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-background/50 
                  hover:border-primary/30 transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${config.color}20` }}
                >
                  <Icon className="h-4 w-4" style={{ color: config.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-sm text-foreground">{config.label}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {formatCurrency(value.amount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs text-muted-foreground truncate">{value.details}</p>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {value.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 mt-4 p-3 bg-background/50 rounded-lg border border-border/50">
        <Info className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground">
          AI-generated estimate based on typical Atlanta-area projects. Actual costs may vary based on 
          specific materials, site conditions, and current market rates.
        </p>
      </div>
    </Card>
  );
}
