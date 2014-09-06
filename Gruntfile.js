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
      src: ["*.apib"],
      dest: 'dist/built.apib'
    },
    readme:{
        src: ["*.apib"],
        dest: 'Readme.md'
    }
  },
  watch: {
  scripts: {
    files: ['source/*.apib', 'source/*.md'],
    tasks: ['concat'],
    options: {
      spawn: false,
    },
  },
},
  clean: ['dist/*.apib', 'Readme.md']
});
  grunt.registerTask('default', [ 'clean','watch' ]);

}
