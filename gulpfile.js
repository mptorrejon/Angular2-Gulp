var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	tslint =  require('gulp-tslint'),
	config = require('./gulp.config')(),
	tsProject = tsc.createProject('tsconfig.json'),
	connect = require('gulp-connect')
	browserSync = require('browser-sync');
	superstatic = require('superstatic');;

gulp.task('compile-ts', function(){

	var sourceFiles = [ config.allTs ];

	var tsResult = gulp
					.src(sourceFiles)

					.pipe(tsc(tsProject));

	return tsResult.js
			.pipe( gulp.dest(config.tsOutputPath) );
});


gulp.task('serve', ['compile-ts'], function(){
	gulp.watch([config.allTs], ['compile-ts']);


	browserSync({
		port: 3001,
		//sets watchers for index.html, js and html files hosted in corresponding folders
		files: ['index.html', 'app1/**/*.js', 'templates/**/*.html'],
		injectChanges: true,
		logFileChanges: false,
		logLevel: 'silent',
		notify: true,
		reloadDelay: 0,
		server:{
			baseDir: ['./'],
			middleware: superstatic({debug: false})
		}
	});

});


gulp.task('serve-test', ['compile-ts-unitTest'], function(){
	gulp.watch([config.unitTests], ['compile-ts-unitTest']);
	browserSync({
		port:3000,
		files: ["./tests/index.html", './tests/unit-tests/*.js', ],
		injectChanges: true, 
		logFileChanges: false,
		logLevel: 'silent',
		notify: true,
		reloadDelay: 0,
		server: {
			baseDir: ['./'],
			index: './tests/index.html',
			middleware: superstatic({debug: false})
		}
	});
});

gulp.task('default', [ 'serve'/*, 'webserver', 'html'*/]);

gulp.task('unit-test', ['serve-test']);
