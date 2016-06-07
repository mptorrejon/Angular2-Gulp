System.register(['@angular/core', './searchInput.component', './showResults.component', './myform.component', './mytable.component', './mymodal.component', './myflux.component'], function(exports_1, context_1) {
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
    var core_1, searchInput_component_1, showResults_component_1, myform_component_1, mytable_component_1, mymodal_component_1, myflux_component_1;
    var Body;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (searchInput_component_1_1) {
                searchInput_component_1 = searchInput_component_1_1;
            },
            function (showResults_component_1_1) {
                showResults_component_1 = showResults_component_1_1;
            },
            function (myform_component_1_1) {
                myform_component_1 = myform_component_1_1;
            },
            function (mytable_component_1_1) {
                mytable_component_1 = mytable_component_1_1;
            },
            function (mymodal_component_1_1) {
                mymodal_component_1 = mymodal_component_1_1;
            },
            function (myflux_component_1_1) {
                myflux_component_1 = myflux_component_1_1;
            }],
        execute: function() {
            Body = (function () {
                function Body() {
                }
                Body = __decorate([
                    core_1.Component({
                        selector: 'my-body',
                        templateUrl: '../templates/body.template.html',
                        directives: [
                            searchInput_component_1.SearchInput,
                            showResults_component_1.ShowResults,
                            myform_component_1.MyForm,
                            mytable_component_1.MyTable,
                            mymodal_component_1.MyModal,
                            myflux_component_1.MyFlux
                        ],
                        styles: ["\n\t\t.panel{\n\t\t\tdisplay:inline-block;\n\t\t\tvertical-align: top;\n\t\t\tmargin: 0px 10px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Body);
                return Body;
            }());
            exports_1("Body", Body);
            ;
        }
    }
});
