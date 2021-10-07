module.exports = function(grunt) {
 grunt.initConfig({
     concat: {
        gopcss: {
           src: [
              'css/bootstrap.min.css',
		'css/slick.css',
		'css/slick-theme.css',
              'css/style.css',
           ],
           dest: 'css1/all.css'
        },
         
        gopjs: {
           src: [
              'js/jquery.min.js',
		'js/bootstrap.min.js',
		'js/jquery-migrate-1.2.1.min.js',
		'js/slick.js',
		'js/my_soucre.js',
               
           ],
           dest: 'js1/all.js'
        },
     },
     cssmin: {
        nencss: {
           src: 'css1/all.css',
           dest: 'css2/all-min.css'
        },
         
     },
     uglify: {
        nenjs: {
           src: 'js1/all.js',
           dest: 'js2/all.min.js',
        }
     }
 });
 
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 
 grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};