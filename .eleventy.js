const markdownItAttrs = require("markdown-it-attrs");
module.exports = function (eleventyConfig) {
  // Pass through static assets (CSS, JS, images, SVGs)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Collections sorted by order field in frontmatter
  eleventyConfig.addCollection("team", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/team/members/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  eleventyConfig.addCollection("testimonials", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/testimonials/quotes/*.md")
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

eleventyConfig.amendLibrary("md", (mdLib) => {
    // Enable the attributes plugin
    mdLib.use(markdownItAttrs);

    const defaultImageRender =
      mdLib.renderer.rules.image ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

    mdLib.renderer.rules.image = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      
      // Look for a specific class added via markdown-it-attrs
      const classIdx = token.attrIndex("class");
      
      if (classIdx >= 0) {
        const classes = token.attrs[classIdx][1].split(" ");
        
        if (classes.includes("has-wrapper")) {
          // Remove the trigger class so it doesn't pollute the final <img> tag
          token.attrs[classIdx][1] = classes.filter(c => c !== "has-wrapper").join(" ");
          
          // Render the image and wrap it
          const originalImageHtml = defaultImageRender(tokens, idx, options, env, self);
          return `<div class="image-wrapper">${originalImageHtml}</div>`;
        }
      }

      // If no matching class is found, render normally without a <div> wrapper
      return defaultImageRender(tokens, idx, options, env, self);
    };
  });  

  // just in case you use Windows. I pity the pain.
	eleventyConfig.setChokidarConfig({
		usePolling: true,
		interval: 500,
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
