const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('markdown', value => md.renderInline(value));

    // Copy unaltered original images.
    eleventyConfig.addPassthroughCopy('src/img');

    eleventyConfig.addPassthroughCopy('src/_redirects');

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
