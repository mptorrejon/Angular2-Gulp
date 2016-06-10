// import {Injectable} from '@angular/core';
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dispatcher;
    return {
        setters:[],
        execute: function() {
            Dispatcher = (function () {
                function Dispatcher() {
                }
                // Dispatcher = new EventEmitter();
                // constructor(private Dispatcher:EventEmitter ){}
                Dispatcher.prototype.emit = function (event) {
                    console.log('========================');
                    console.log(event);
                    // console.log( new EventEmitter() );
                };
                return Dispatcher;
            }());
            exports_1("Dispatcher", Dispatcher);
            ;
        }
    }
});
