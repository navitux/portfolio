module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("src/img");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
