import dotenv from "dotenv";

dotenv.config();

import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { verifyDownloadTasks } from "cy-verify-downloads";
// import { polyfillNode } from "esbuild-plugin-polyfill-node";


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  
  on('task', verifyDownloadTasks);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    specPattern: ["./cypress/ui/e2e/features/*.feature", "./cypress/api/e2e/features/*.feature"],
    setupNodeEvents,
    env: {
      UI_BASE_URL: process.env.UI_BASE_URL,
      UI_USERNAME: process.env.UI_USERNAME,
      UI_PASSWORD: process.env.UI_PASSWORD,
      API_BASE_URL: process.env.API_BASE_URL,
      API_ADMIN_USERNAME: process.env.API_ADMIN_USERNAME,
      API_ADMIN_PASSWORD: process.env.API_ADMIN_PASSWORD,
      API_USER_USERNAME: process.env.API_USER_USERNAME,
      API_USER_PASSWORD: process.env.API_USER_PASSWORD,
    },
  },
});
