module.exports = {
  all: {
    options: {
      browsers: ['> 1%', 'last 2 versions', 'Explorer >= 9']
    },
    default: {
        expand: true,
        flatten: true
      },
    files: {
        '<%= paths.dist %>/01-autoprefixed.css.tmp': '<%= paths.dist %>/00-stylus.css.tmp'
    }
  }
};
