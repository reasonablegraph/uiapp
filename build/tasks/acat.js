'use strict';

module.exports = function(grunt) {


  grunt.registerMultiTask('acat', 'Echos a file to the console.', function () {
  	var process = require('process');
    if (this.data.file) {
        	process.stdout.write((grunt.file.read(this.data.file)));
    }
    if (this.filesSrc) {
          grunt.util._.each(this.filesSrc, function (src) {
          	process.stdout.write(grunt.file.read(src));
          });
    }
  });

}