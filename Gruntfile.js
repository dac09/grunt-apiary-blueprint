apiary = require('./config.js');

module.exports = function(grunt){
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        env: {
            dev: {
                APIARY_API_KEY: apiary.config.key
            }
        },
        exec: {
            publish: [ 'apiary', 'publish',
                [ '--api-name', apiary.config.name ].join('='),
                [ '--path', 'dist/apiary.apib' ].join('=')
            ].join(' ')
        },
        concat: {
            options: {
                separator: '\n \n',
            },
            dist: {
                src: ["source/*.apib", "source/*.md"],
                dest: 'dist/apiary.apib'
            }
        },
        watch: {
            scripts: {
                files: ['source/*.apib'],
                tasks: ['concat','exec:publish'],
                options: {
                    spawn: false,
                },
            },
        },
        clean: ['dist/*.apib'],
    });
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', [ 'env:dev','clean','watch' ]);

    // Specify the environment to publish to, defaults to dev
    // e.g. grunt publish --env=shared 
    grunt.registerTask('publish', [ 'env:'+(grunt.option("env")||'dev'),'exec:publish' ]);
}
