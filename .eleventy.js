const pluginNavigation = require("@11ty/eleventy-navigation");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
  config.setDataDeepMerge(true);

  // Plugins
  config.addPlugin(pluginNavigation);

  // Returns work items, sorted by display order
  config.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/work/*.md')
    ).filter(x => x.data.featured);
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/css");
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};