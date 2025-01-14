export default {
  eleventyAllowMissingExtension: true,
  layout: false,
  permalink: ({ page }) => page.filePathStem,
};
