import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fallback injection: ensures the generated Supabase client never receives an
  // undefined URL/key even if env loading is flaky in a given runtime.
  const env = loadEnv(mode, process.cwd(), "");

  const supabaseUrl =
    env.VITE_SUPABASE_URL ||
    env.SUPABASE_URL ||
    // Last-resort fallback (public): prevents blank screen.
    "https://cguzpetufoftdqxwqygh.supabase.co";

  const supabasePublishableKey =
    env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    env.SUPABASE_PUBLISHABLE_KEY ||
    env.SUPABASE_ANON_KEY ||
    // Last-resort fallback (public): prevents blank screen.
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndXpwZXR1Zm9mdGRxeHdxeWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMzQ5NzIsImV4cCI6MjA3OTYxMDk3Mn0.NYZpIbubLZxZRYrZaz6jw3etdLBSnZFN7OJQAx-FRzs";

  const supabaseProjectId =
    env.VITE_SUPABASE_PROJECT_ID ||
    env.SUPABASE_PROJECT_ID ||
    // Last-resort fallback (public): prevents blank screen.
    "cguzpetufoftdqxwqygh";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(supabaseUrl),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(supabasePublishableKey),
      "import.meta.env.VITE_SUPABASE_PROJECT_ID": JSON.stringify(supabaseProjectId),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
