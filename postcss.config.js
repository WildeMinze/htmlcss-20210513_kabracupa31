module.exports = {
  syntax: 'postcss-scss',
  map: {
    inline: true,
  },
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('postcss-strip-inline-comments'),
    require('postcss-each'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
