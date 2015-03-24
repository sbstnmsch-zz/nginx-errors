module.exports = {
  all: {
    files: {
      '<%= paths.dist %>/frontend.min.css.tmp': [
        '<%= paths.dist %>/01-autoprefixed.css.tmp'
      ]
    }
  }
};
