import eleventyPluginLiquid from "@jgarber/eleventy-plugin-liquid";
import eleventyPluginMarkdown from "@jgarber/eleventy-plugin-markdown";
import eleventyPluginRoutes from "@jgarber/eleventy-plugin-routes";
import eleventyPluginWebfinger from "@jgarber/eleventy-plugin-webfinger";

import markdownItAttrs from "markdown-it-attrs";

import manifest from "./src/manifest.webmanifest.json" with { type: "json" };

export default function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData("app", manifest);

  // Configuration
  eleventyConfig.setDataFileBaseName("_data");

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_{headers,redirects}")
    .addPassthroughCopy("./src/*.{ico,txt}")
    .addPassthroughCopy("./src/assets")
    .addPassthroughCopy({
      "./src/manifest.webmanifest.json": "manifest.webmanifest",
    });

  // Plugins
  eleventyConfig.addPlugin(eleventyPluginLiquid);
  eleventyConfig.addPlugin(eleventyPluginRoutes);
  eleventyConfig.addPlugin(eleventyPluginWebfinger);

  eleventyConfig.addPlugin(eleventyPluginMarkdown, {
    plugins: [markdownItAttrs],
  });
}

export const config = {
  dir: {
    input: "./src",
  },
};
