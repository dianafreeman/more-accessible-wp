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
                    'public/more-accessible-wp-public.css': 'public/css/*.scss' // 'destination': 'source'
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
                    'public/js/more-accessible-wp-public.min.js': ['assets/js/more-accessible-wp-public.js']


                }
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                },

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({ browsers: 'last 2 versions' }) // add vendor prefixes
                ]
            },
            dist: {
                src: 'public/more-accessible-wp-public.css'
            }
        },
        watch: {
            scss: {
                files: ['more-accessible-wp/public/css/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['Gruntfile.js', 'more-accessible-wp/public/js/*.js'],
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