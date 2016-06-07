System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var WikiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            WikiService = (function () {
                function WikiService(/*private http: Http,*/ jsonp) {
                    this.jsonp = jsonp;
                }
                WikiService.prototype.getResults = function (name) {
                    // console.log(name);
                    var search = new http_1.URLSearchParams();
                    search.set('action', "opensearch");
                    search.set('search', name); //replace 'ma' for variable
                    search.set('format', 'json');
                    return this.jsonp
                        .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search: search })
                        .map(this.extractData);
                };
                //formats response into a json object
                WikiService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                WikiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Jsonp])
                ], WikiService);
                return WikiService;
            }());
            exports_1("WikiService", WikiService);
        }
    }
});
