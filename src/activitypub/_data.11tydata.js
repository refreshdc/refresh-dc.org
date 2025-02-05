export default {
  eleventyAllowMissingExtension: true,
  eleventyExcludeFromCollections: true,
  layout: "base.11ty.js",
  permalink: ({ page }) => page.filePathStem,
};
