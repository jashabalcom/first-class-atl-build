import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { Loader2, LayoutDashboard, Images, FileText, Users, Contact, LogOut, Menu, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import AdminOverview from "./AdminOverview";
import AdminGallery from "./AdminGallery";
import AdminBlog from "./AdminBlog";
import AdminLeads from "./AdminLeads";
import AdminUsers from "./AdminUsers";

type AdminTab = "overview" | "gallery" | "blog" | "leads" | "users";

const navItems = [
  { id: "overview" as AdminTab, label: "Dashboard", icon: LayoutDashboard },
  { id: "gallery" as AdminTab, label: "Gallery", icon: Images },
  { id: "blog" as AdminTab, label: "Blog", icon: FileText },
  { id: "leads" as AdminTab, label: "Leads", icon: Contact },
  { id: "users" as AdminTab, label: "Users", icon: Users },
];

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/auth");
        } else {
          // Defer role check with setTimeout to avoid deadlock
          setTimeout(() => {
            checkAdminRole(session.user.id);
          }, 0);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        setLoading(false);
        navigate("/auth");
      } else {
        checkAdminRole(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();

      if (error) {
        console.error("Error checking admin role:", error);
        toast.error("Failed to verify admin access");
        setLoading(false);
        return;
      }

      if (data) {
        setIsAdmin(true);
      } else {
        toast.error("You don't have admin access");
        navigate("/");
      }
    } catch (err) {
      console.error("Role check error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Access denied. Admin role required.</p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className={cn(
        "border-r bg-card transition-all duration-300 flex flex-col",
        sidebarCollapsed ? "w-16" : "w-64"
      )}>
        {/* Header */}
        <div className="h-16 border-b flex items-center justify-between px-4">
          {!sidebarCollapsed && (
            <h1 className="font-playfair text-lg font-bold">Admin Panel</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="ml-auto"
          >
            {sidebarCollapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-2 border-t">
          <button
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            )}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="h-16 border-b bg-card flex items-center px-6">
          <h2 className="font-playfair text-xl font-semibold capitalize">{activeTab}</h2>
          <div className="ml-auto text-sm text-muted-foreground">
            {user?.email}
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === "overview" && <AdminOverview />}
          {activeTab === "gallery" && <AdminGallery />}
          {activeTab === "blog" && <AdminBlog />}
          {activeTab === "leads" && <AdminLeads />}
          {activeTab === "users" && <AdminUsers />}
        </div>
      </main>
    </div>
  );
}