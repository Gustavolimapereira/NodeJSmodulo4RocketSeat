import {defineConfig} from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: { 
        globals: true,
        environmentMatchGlobs: [["src/http/controllers/**", "prisma"]] },
  });


/*
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: { environmentMatchGlobs: [["src/http/controllers/**", "prisma"]] },
});
*/
