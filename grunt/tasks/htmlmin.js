module.exports = {
  default: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      '<%= paths.dist %>/outdated.html': '<%= paths.dist %>/outdated.html.tmp',
      '<%= paths.dist %>/404.html': '<%= paths.dist %>/404.html.tmp',
      '<%= paths.dist %>/500.html': '<%= paths.dist %>/500.html.tmp'
    }
  }
};
