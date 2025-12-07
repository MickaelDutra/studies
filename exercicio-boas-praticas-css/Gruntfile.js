module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/style/main.css': './build/style/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'build/style/*.scss',
        tasks: ['sass'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['watch']);
  grunt.registerTask('default', ['build']);
};
