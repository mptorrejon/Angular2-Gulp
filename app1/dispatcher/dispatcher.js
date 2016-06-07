System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Dispatcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Dispatcher = (function () {
                function Dispatcher() {
                    this.listeners = [];
                    this.listeners = [];
                }
                Dispatcher.prototype.emit = function (event) {
                    var _this = this;
                    console.warn('inside dispatcher');
                    console.log('emitting event...');
                    this.listeners.forEach(function (listener) {
                        console.log('looping...');
                        listener(event);
                        console.log(_this.listeners);
                    });
                };
                Dispatcher.prototype.addListener = function (listener) {
                    // this.listeners.push(listener);
                    // return this.listeners.length - 1;
                };
                Dispatcher = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Dispatcher);
                return Dispatcher;
            }());
            exports_1("Dispatcher", Dispatcher);
        }
    }
});
