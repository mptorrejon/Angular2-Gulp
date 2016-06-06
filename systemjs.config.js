/*
  This file is broken down into three main parts
  part1: map, tells the loaders where modules are located
  part2: packages, tell loader how to load packages, using main and default extension
  ***FIND OUT***
  * I still do not know why packages and packageNames are divided into two different arrays,
    if the foreach function is gonna concatenate them and add the object for file location
  part3: config paths are wrapped in an object to be passed to the System.config()
*/

(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
    '@angular2-material/core': 'node_modules/@angular2-material/core',
    '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
    '@angular2-material/button': 'node_modules/@angular2-material/button',
    '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle',
    '@angular2-material/card': 'node_modules/@angular2-material/card',
    '@angular2-material/input': 'node_modules/@angular2-material/input',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    '@angular': 'node_modules/@angular',
    'ng2-formly': 'node_modules/ng2-formly/lib',
    'angular2-datatable': 'node_modules/angular2-datatable',
    'lodash': 'node_modules/lodash/lodash.js',
    'ng2-modal': 'node_modules/ng2-bs3-modal/src/ng2-bs3-modal/ng2-bs3-modal.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    //this could be refactored in a forEach loop=======================
    '@angular2-material/core': { main: 'core.js', defaultExtension: 'js'},
    '@angular2-material/checkbox': { main: 'checkbox.js', defaultExtension: 'js'},
    '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
    '@angular2-material/progress-circle': { main: 'progress-circle.js', defaultExtension: 'js'},
    '@angular2-material/card': { main: 'card.js', defaultExtension: 'js'},
    '@angular2-material/input': { main: 'input.js', defaultExtension: 'js'},
    '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js'},
    //=================================================================
    'app1': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'symbol-observable': { main: 'index.js', defaultExtension: 'js' },
    //this could be refactored using a foreach loop=====================
    '@angular/common': { main: 'index.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'index.js', defaultExtension: 'js' },
    '@angular/core': { main: 'index.js', defaultExtension: 'js' },
    '@angular/http': { main: 'index.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
    '@angular/router': { main: 'index.js', defaultExtension: 'js' },
    'ng2-formly': { main: 'core.js', defaultExtension: 'js' },
    // 'ng2-formly/template': {main: 'template.js', defaultExtension: 'js'}
    //================================================================
    'angular2-datatable': {main: 'datatables.js', defaultExtension: 'js'},
    'lodash': { defaultExtension:'js'},
    'ng2-modal': { defaultExtension: 'js' }
  };
  /*IS THIS REALLY NECESSARY? IF SO, WHY CANT i JUST DO IT LIKE THE ABOVE...*/
  /*var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
  ];
  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });*/

  var config = {
    map: map,
    packages: packages
  }
  // console.log(packages);
  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);