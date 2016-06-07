System.register(['@angular/core', '../services/wiki.service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, wiki_service_1, http_1;
    var CountClicks, InputDetector, SearchInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wiki_service_1_1) {
                wiki_service_1 = wiki_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CountClicks = (function () {
                function CountClicks() {
                    this.numberOfClicks = 0;
                }
                CountClicks.prototype.onClick = function (btn) {
                    console.log('button', btn, "number of clicks: " + this.numberOfClicks++);
                };
                __decorate([
                    core_1.HostListener('click', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], CountClicks.prototype, "onClick", null);
                CountClicks = __decorate([
                    core_1.Directive({
                        selector: 'button[counting]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CountClicks);
                return CountClicks;
            }());
            InputDetector = (function () {
                function InputDetector() {
                }
                // @hotlistener takes two parameters
                //	+ the event to bind it
                //	+ the value to pass to the fucntion
                InputDetector.prototype.keyUp = function (val) {
                    console.log("Text entered: " + val);
                };
                __decorate([
                    core_1.HostListener('keyup', ['$event.target.value']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], InputDetector.prototype, "keyUp", null);
                InputDetector = __decorate([
                    core_1.Directive({
                        selector: '[myinput]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputDetector);
                return InputDetector;
            }());
            SearchInput = (function () {
                function SearchInput(wikiservice) {
                    var _this = this;
                    this.wikiservice = wikiservice;
                    this.inputValue = "";
                    this.getValue = function (value) {
                        _this.inputValue = value.target.value;
                        value = _this.wikiservice.getResults(_this.inputValue).subscribe(function (resp) {
                            // console.log( resp );
                        });
                    };
                }
                SearchInput = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        templateUrl: '../templates/myInput.template.html',
                        directives: [CountClicks, InputDetector],
                        providers: [wiki_service_1.WikiService, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [wiki_service_1.WikiService])
                ], SearchInput);
                return SearchInput;
            }());
            exports_1("SearchInput", SearchInput);
        }
    }
});
