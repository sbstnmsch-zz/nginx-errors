module.exports = {
  default: {
    files: {
      '<%= paths.dist %>/outdated.html.tmp': [ '<%= paths.src.templates %>/outdated.html' ],
      '<%= paths.dist %>/404.html.tmp': [ '<%= paths.src.templates %>/404.html' ],
      '<%= paths.dist %>/500.html.tmp': [ '<%= paths.src.templates %>/500.html' ]
    },
    options: {
      process: true
    }
  }
};
