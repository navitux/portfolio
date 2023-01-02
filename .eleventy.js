const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = (eleventyConfig) => {
  // Passthrough dirs:
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addWatchTarget("./src/static/");
  // output directory
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    columns: {
      filesize: true, // Use `false` to disable
      benchmark: true, // Use `false` to disable
    }});
  // minifier
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  
  return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
};
