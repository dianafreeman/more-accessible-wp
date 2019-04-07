module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'public/js/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'public/more-accessible-wp.css': 'public/css/main.scss' // 'destination': 'source'
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    reserved: ['jQuery']
                }
            },
            my_target: {
                files: {
                    'assets/js/main.min.js': ['assets/js/main.js'],
                    'assets/js/homePage.min.js': ['assets/js/homePage.js'],
                    'assets/js/page.min.js': ['assets/js/page.js'],


                }
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'assets/css/maps/' // ...to the specified directory
                },

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
                ]
            },
            dist: {
                src: 'assets/css/main.css'
            }
        },
        watch: {
            scss: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['Gruntfile.js', 'assets/js/homePage.js', 'assets/js/page.js', 'assets/js/main.js'],
                tasks: ['jshint', 'uglify']

            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-cssnano');




    grunt.registerTask('build', ['postcss']);
    grunt.registerTask('default', ['watch']);
};