export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string
          display_order: number | null
          excerpt: string | null
          featured: boolean | null
          featured_image: string | null
          id: string
          meta_description: string | null
          publish_date: string
          read_time: number
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_date: string | null
        }
        Insert: {
          author?: string
          category: string
          content: string
          created_at?: string
          display_order?: number | null
          excerpt?: string | null
          featured?: boolean | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          publish_date?: string
          read_time?: number
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_date?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          display_order?: number | null
          excerpt?: string | null
          featured?: boolean | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          publish_date?: string
          read_time?: number
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_date?: string | null
        }
        Relationships: []
      }
      gallery_project_images: {
        Row: {
          created_at: string
          display_order: number | null
          id: string
          image_type: string
          image_url: string
          project_id: string
        }
        Insert: {
          created_at?: string
          display_order?: number | null
          id?: string
          image_type?: string
          image_url: string
          project_id: string
        }
        Update: {
          created_at?: string
          display_order?: number | null
          id?: string
          image_type?: string
          image_url?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_project_images_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "gallery_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_projects: {
        Row: {
          after_image_url: string
          before_image_url: string | null
          category: string
          created_at: string
          description: string | null
          display_mode: string | null
          display_order: number | null
          featured: boolean | null
          id: string
          location: string | null
          title: string
        }
        Insert: {
          after_image_url: string
          before_image_url?: string | null
          category: string
          created_at?: string
          description?: string | null
          display_mode?: string | null
          display_order?: number | null
          featured?: boolean | null
          id?: string
          location?: string | null
          title: string
        }
        Update: {
          after_image_url?: string
          before_image_url?: string | null
          category?: string
          created_at?: string
          description?: string | null
          display_mode?: string | null
          display_order?: number | null
          featured?: boolean | null
          id?: string
          location?: string | null
          title?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          business_type: string | null
          city: string | null
          company_name: string | null
          created_at: string
          email: string
          estimated_budget: string | null
          form_source: string
          ghl_contact_id: string | null
          id: string
          message: string | null
          name: string
          phone: string
          project_type: string | null
          square_footage: string | null
          sync_errors: Json | null
          synced_to_ghl: boolean | null
          synced_to_sheets: boolean | null
          timeline: string | null
        }
        Insert: {
          business_type?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string
          email: string
          estimated_budget?: string | null
          form_source: string
          ghl_contact_id?: string | null
          id?: string
          message?: string | null
          name: string
          phone: string
          project_type?: string | null
          square_footage?: string | null
          sync_errors?: Json | null
          synced_to_ghl?: boolean | null
          synced_to_sheets?: boolean | null
          timeline?: string | null
        }
        Update: {
          business_type?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string
          email?: string
          estimated_budget?: string | null
          form_source?: string
          ghl_contact_id?: string | null
          id?: string
          message?: string | null
          name?: string
          phone?: string
          project_type?: string | null
          square_footage?: string | null
          sync_errors?: Json | null
          synced_to_ghl?: boolean | null
          synced_to_sheets?: boolean | null
          timeline?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "sales" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "sales", "user"],
    },
  },
} as const
