// Project configuration.

module.exports = function(grunt){
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

grunt.initConfig({
  concat: {
    options: {
      separator: '\n \n',
    },
    dist: {
      src: ["source/*.apib", "source/*.md"],
      dest: 'dist/built.apib'
    }
  },
  watch: {
  scripts: {
    files: ['source/*.apib'],
    tasks: ['concat'],
    options: {
      spawn: false,
    },
  },
},
  clean: ['dist/*.apib'],
});
  grunt.registerTask('default', [ 'clean','watch' ]);

}
