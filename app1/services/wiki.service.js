System.register(['@angular/core', '@angular/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var WikiService, CompanySearch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WikiService = (function () {
                function WikiService(/*private http: Http,*/ jsonp) {
                    this.jsonp = jsonp;
                }
                WikiService.prototype.getResults = function (name) {
                    var search = new http_1.URLSearchParams();
                    search.set('action', "opensearch");
                    search.set('search', name); //replace 'ma' for variable
                    search.set('format', 'json');
                    var rs = this.jsonp
                        .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search: search })
                        .map(this.extractData);
                    console.log(rs);
                    return rs;
                };
                //formats response into a json object
                WikiService.prototype.extractData = function (res) {
                    console.log(res);
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
            CompanySearch = (function () {
                function CompanySearch(jsonp, http) {
                    this.jsonp = jsonp;
                    this.http = http;
                }
                CompanySearch.prototype.getCompany = function (name) {
                    var params = new http_1.URLSearchParams();
                    params.set('name', name);
                    var cName = this.jsonp
                        .get('http://localhost:5000/search', { params: params }).toPromise();
                    return cName;
                };
                CompanySearch = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Jsonp, http_1.Http])
                ], CompanySearch);
                return CompanySearch;
            }());
            exports_1("CompanySearch", CompanySearch);
        }
    }
});
