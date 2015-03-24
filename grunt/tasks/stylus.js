/* globals module */
module.exports = {
  all: {
    options: {
      compress: false,
      linenos: false,
      urlfunc: {
        name: 'embedurl',
        limit: 100000,
        paths: [
          '<%= paths.dist %>/svgmin.tmp'
        ]
      }
    },
    files: {
      '<%= paths.dist %>/00-stylus.css.tmp': [
        '<%= paths.src.css %>/main.styl'
      ]
    }
  }
};
