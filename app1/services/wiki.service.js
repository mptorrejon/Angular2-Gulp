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
    var core_1, http_1;
    var WikiService, CompanySearch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
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
                    __metadata('design:paramtypes', [http_1.Jsonp])
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
                    var headers = new http_1.Headers();
                    // headers.append('Authorization' , 'Bearer 5677ecf5dc2ff38d1c1df319d3e6ae32');
                    // headers.append('Access-Control-Allow-Origin' , '*');
                    // headers.append('Content-Type' , 'application/xhtml+xml');
                    // let params = new URLSearchParams();
                    // params.set('name', name);
                    return this.http
                        .get('https://autocomplete.clearbit.com/v1/companies/suggest?query=' + name, { headers: headers });
                    /*HRSA Solr current DB*/
                    // .get('http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*%3A*&version=2.2&start=0&rows=10&indent=on&wt=json', {headers: headers });
                };
                CompanySearch = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
                ], CompanySearch);
                return CompanySearch;
            }());
            exports_1("CompanySearch", CompanySearch);
        }
    }
});
