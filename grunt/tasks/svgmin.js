module.exports = {
  all: {
    expand: true,
    cwd: "<%= paths.src.images %>",
    src: ["**/*.svg"],
    dest: "<%= paths.dist %>/svgmin.tmp"
  }
}
