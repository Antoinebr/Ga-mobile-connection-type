module.exports = function(grunt){

require('load-grunt-tasks')(grunt);

grunt.initConfig({


    /**
    *
    *   Uglify
    *
    */

    uglify: {
      my_target: {
        files: {
          'build/GaMobileConnectionType.min.js' : ['dev/GaMobileConnectionType-init.js']
        }
      },
    },

     /**
    *
    * Concatenne les js
    *
    */
    concat: {
      fusion: {
        src: ['dev/GaMobileConnectionType.js','dev/init.js'],
        dest: 'dev/GaMobileConnectionType-init.js', // créer un fichier de destination
      },
    },

    /**
    *
    * Listen changes
    *
    */
    watch: {
      scripts: {
        files: ['dev/*.js'],
        tasks: ['concat','uglify'],
        options: {
          spawn: false,
        },
      },
    },



  });


  grunt.registerTask('default', ['watch']);

};