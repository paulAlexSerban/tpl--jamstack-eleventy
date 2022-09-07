const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

const nodeEnv = process.env.NODE_ENV || "development";

module.exports = function (eleventyConfig) {
  // pass through static files
  eleventyConfig.addPassthroughCopy("source/static");
  eleventyConfig.addPassthroughCopy("source/projects");

  // bug fix: necessary to merge tags from front matter and .json
  eleventyConfig.setDataDeepMerge(true);

  // only process .md, .html and .ejs files
  eleventyConfig.setTemplateFormats(["ejs", "md"]);

  // plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  if(nodeEnv === "production") {
    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  }

  return {
    dir: {
      input: "source",
      output: "dist",
      includes: "library",
      layouts: "system",
      data: "../dist"
    },

    // use EJS as processing engine
    dataTemplateEngine: "ejs",
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs",
  };
};
