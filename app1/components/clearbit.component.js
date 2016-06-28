System.register(['@angular/core', '../services/wiki.service'], function(exports_1, context_1) {
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
    var core_1, wiki_service_1;
    var ClearBit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wiki_service_1_1) {
                wiki_service_1 = wiki_service_1_1;
            }],
        execute: function() {
            ClearBit = (function () {
                function ClearBit(cSearch) {
                    this.cSearch = cSearch;
                    this.input = "";
                }
                ClearBit.prototype.getResults = function (name) {
                    this.input = name.target.value;
                    this.cSearch.getCompany(this.input).subscribe(function (data) {
                        // this.mydata = JSON.parse(data._body).results;
                        console.log(data);
                    });
                };
                ClearBit = __decorate([
                    core_1.Component({
                        selector: 'clearbit',
                        template: " <h1>Search for Companies</h1>\n\t\t\t\t<input (keyup)=\"getResults($event)\" placeholder=\"Where do you work?\" />\n\t\t\t\t<div *ngFor=\"let item of mydata | async\" >\n\t\t\t\t</div>\n\t\t\t\t<p>{{name}}</p>\n\t",
                        providers: [wiki_service_1.CompanySearch]
                    }), 
                    __metadata('design:paramtypes', [wiki_service_1.CompanySearch])
                ], ClearBit);
                return ClearBit;
            }());
            exports_1("ClearBit", ClearBit);
        }
    }
});
