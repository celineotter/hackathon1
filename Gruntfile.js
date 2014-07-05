module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          base: 'client'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};