System.register(['@angular/common', '@angular/http', '@angular/core', './home.component', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var common_1, http_1, core_1, home_component_1, router_deprecated_1;
    var MyRouter;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            MyRouter = (function () {
                function MyRouter(http) {
                    this.http = http;
                    this.users = [];
                    this.searchTerm = new common_1.Control();
                }
                MyRouter.prototype.getUsers = function () {
                    this.http.get("https://api.github.com/search/users?q=" + this.searchTerm.value)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
                };
                MyRouter = __decorate([
                    core_1.Component({
                        selector: 'my-router',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, home_component_1.Home],
                        template: "\n\t\t<div id=\"sidebar\">\n\t\t\t<h1>Search github users</h1>\n\t\t\t<input [ngFormControl]=\"searchTerm\" placeholder='Search for Users' />\n\t\t\t<button (click)=\"getUsers()\">Get Users</button>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyRouter);
                return MyRouter;
            }());
            exports_1("MyRouter", MyRouter);
        }
    }
});
