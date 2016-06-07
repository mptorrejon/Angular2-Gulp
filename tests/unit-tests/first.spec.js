/// <reference path="../../typings/globals/es6-shim/index.d.ts" />
System.register(['../../app1/components/myapp.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var myapp_component_1;
    return {
        setters:[
            function (myapp_component_1_1) {
                myapp_component_1 = myapp_component_1_1;
            }],
        execute: function() {
            describe('null is not equal to undefined', function () {
                var app;
                beforeEach(function () {
                    console.log(myapp_component_1.App);
                });
                console.log(app);
                it('should say hello', function () {
                    console.log(myapp_component_1.App);
                    expect(_this.app.hello == "Hello").toBe(true);
                });
            });
            window.onload();
        }
    }
});
