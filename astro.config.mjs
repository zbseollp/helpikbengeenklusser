import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://helpikbengeenklusser.nl",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
