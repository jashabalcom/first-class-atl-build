import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Images, FileText, Contact, Users } from "lucide-react";

interface Stats {
  projects: number;
  posts: number;
  leads: number;
  users: number;
}

export default function AdminOverview() {
  const [stats, setStats] = useState<Stats>({ projects: 0, posts: 0, leads: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [projectsRes, postsRes, leadsRes, usersRes] = await Promise.all([
        supabase.from("gallery_projects").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("leads").select("id", { count: "exact", head: true }),
        supabase.from("user_roles").select("id", { count: "exact", head: true }),
      ]);

      setStats({
        projects: projectsRes.count || 0,
        posts: postsRes.count || 0,
        leads: leadsRes.count || 0,
        users: usersRes.count || 0,
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: "Gallery Projects", value: stats.projects, icon: Images, color: "text-blue-500" },
    { label: "Blog Posts", value: stats.posts, icon: FileText, color: "text-green-500" },
    { label: "Leads", value: stats.leads, icon: Contact, color: "text-amber-500" },
    { label: "Users", value: stats.users, icon: Users, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {loading ? "..." : stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>Use the sidebar navigation to manage your:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Gallery</strong> - Add, edit, and organize project photos</li>
            <li><strong>Blog</strong> - Create and publish blog posts</li>
            <li><strong>Leads</strong> - View and export contact form submissions</li>
            <li><strong>Users</strong> - Manage user roles and permissions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}