module.exports = {
  default: {
    files: {
      '<%= paths.dist %>/outdated.html.tmp': [ '<%= paths.src.templates %>/outdated.html' ],
      '<%= paths.dist %>/40x.html.tmp': [ '<%= paths.src.templates %>/40x.html' ],
      '<%= paths.dist %>/50x.html.tmp': [ '<%= paths.src.templates %>/50x.html' ]
    },
    options: {
      process: true
    }
  }
};
