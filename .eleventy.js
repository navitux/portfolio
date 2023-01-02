const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");

module.exports = function(eleventyConfig) {
  // Passthrough dirs:
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/static");
  // Plugins
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    // Customize columns
    columns: {
      filesize: true, // Use `false` to disable
      benchmark: true, // Use `false` to disable
    },

    // Will show in yellow if greater than this number of bytes
    warningFileSize: 400 * 1000,
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
