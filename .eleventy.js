const dayjs = require('dayjs')
const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const formatDate = (date, format) => dayjs(date).format(format);

module.exports = (eleventyConfig) => {
  // Passthrough dirs:
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addWatchTarget("./src/static/");
  // output directory plugin
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    columns: {
      filesize: true, // Use `false` to disable
      benchmark: true, // Use `false` to disable
    }});
  // minifier
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  // date filter
  eleventyConfig.addFilter('formatDate', formatDate);
  
  return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
};
