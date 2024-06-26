import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tulza.github.io/UntitledWeb/",
  plugins: [react(), tsconfigPaths()],
});
