module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {

            build: {
                options: {
                    'banner': '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
                    'compress': true
                },
                files: {
                    'css/main.min.css': ['less/freelancer.less']
                }
            }
        },
        
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less:build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:build']);
};