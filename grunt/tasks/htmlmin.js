module.exports = {
  default: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      '<%= paths.dist %>/outdated.html': '<%= paths.dist %>/outdated.html.tmp',
      '<%= paths.dist %>/40x.html': '<%= paths.dist %>/40x.html.tmp',
      '<%= paths.dist %>/50x.html': '<%= paths.dist %>/50x.html.tmp'
    }
  }
};
