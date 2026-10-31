module.exports = function (eleventyConfig) {
  // Pass through static assets (CSS, JS, images, SVGs)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Collections sorted by order field in frontmatter
  eleventyConfig.addCollection("team", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/team/members/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  eleventyConfig.addCollection("thoughtLeadership", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/thought-leadership/articles/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  eleventyConfig.addCollection("caseStudies", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/case-studies/studies/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  eleventyConfig.addCollection("infographics", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/infographics/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  eleventyConfig.addCollection("pillars", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/pillars/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
     templateFormats: ["md", "njk", "html"]
  };
};
