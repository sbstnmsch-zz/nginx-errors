module.exports = {
  default: {
    files: [
      { '<%= paths.dist %>/custom-errors.conf': '<%= paths.src.config %>/custom-errors.conf' }
    ]
  }
};
