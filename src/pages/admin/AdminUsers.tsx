import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, RefreshCw, Shield } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import type { Database } from "@/integrations/supabase/types";

type AppRole = Database["public"]["Enums"]["app_role"];

interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

const ROLES: AppRole[] = ["admin", "sales", "user"];

export default function AdminUsers() {
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newUserId, setNewUserId] = useState("");
  const [newRole, setNewRole] = useState<AppRole>("user");

  useEffect(() => {
    fetchUserRoles();
  }, []);

  const fetchUserRoles = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUserRoles(data || []);
    } catch (error: any) {
      toast.error("Failed to fetch user roles: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const addUserRole = async () => {
    if (!newUserId.trim()) {
      toast.error("Please enter a user ID");
      return;
    }

    try {
      // Check if role already exists for this user
      const existing = userRoles.find(
        (ur) => ur.user_id === newUserId && ur.role === newRole
      );
      if (existing) {
        toast.error("This user already has this role");
        return;
      }

      const { error } = await supabase.from("user_roles").insert({
        user_id: newUserId,
        role: newRole,
      });

      if (error) throw error;

      toast.success("Role added successfully");
      setIsDialogOpen(false);
      setNewUserId("");
      setNewRole("user");
      fetchUserRoles();
    } catch (error: any) {
      toast.error("Failed to add role: " + error.message);
    }
  };

  const removeUserRole = async (id: string) => {
    if (!confirm("Are you sure you want to remove this role?")) return;

    try {
      const { error } = await supabase.from("user_roles").delete().eq("id", id);

      if (error) throw error;

      toast.success("Role removed successfully");
      fetchUserRoles();
    } catch (error: any) {
      toast.error("Failed to remove role: " + error.message);
    }
  };

  const getRoleBadgeVariant = (role: AppRole) => {
    switch (role) {
      case "admin":
        return "destructive";
      case "sales":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              User Role Management
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={fetchUserRoles} disabled={loading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Role
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add User Role</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="userId">User ID (UUID)</Label>
                      <Input
                        id="userId"
                        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                        value={newUserId}
                        onChange={(e) => setNewUserId(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Get the user ID from the auth.users table or after they sign up
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <Select value={newRole} onValueChange={(v: AppRole) => setNewRole(v)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {ROLES.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role.charAt(0).toUpperCase() + role.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button onClick={addUserRole} className="flex-1">
                        Add Role
                      </Button>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading...</div>
          ) : userRoles.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No user roles configured yet.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRoles.map((ur) => (
                  <TableRow key={ur.id}>
                    <TableCell className="font-mono text-sm">{ur.user_id}</TableCell>
                    <TableCell>
                      <Badge variant={getRoleBadgeVariant(ur.role)}>
                        {ur.role.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {format(new Date(ur.created_at), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeUserRole(ur.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Role Permissions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="destructive">ADMIN</Badge>
            <span>Full access to all features including user management</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>SALES</Badge>
            <span>View leads (read-only access)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">USER</Badge>
            <span>Basic authenticated user (no admin access)</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}