import { defineConfig } from "cypress";

export default defineConfig({
  // eslint-disable-next-line unused-imports/no-unused-vars
  // e2e: { setupNodeEvents (on, config) {} },
  e2e: { baseUrl: "http://localhost:8079" },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
