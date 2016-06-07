System.register(['@angular/core', 'ng2-formly', 'ng2-formly/templates'], function(exports_1, context_1) {
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
    var core_1, ng2_formly_1, templates_1;
    var MyForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_formly_1_1) {
                ng2_formly_1 = ng2_formly_1_1;
            },
            function (templates_1_1) {
                templates_1 = templates_1_1;
            }],
        execute: function() {
            MyForm = (function () {
                /*
                    initializes setup for formly-fields
                    In html there should be a data binding key name 'userFields'
                */
                function MyForm(fc) {
                    this.user = {};
                    ['input', 'checkbox', 'radio'].forEach(function (field) {
                        fc.setType({
                            name: field,
                            component: templates_1.TemplateDirectives[field]
                        });
                    });
                    //sets each field already initialized configuration settings
                    this.userFields = [{
                            // INPUT
                            key: 'nameOfPerson',
                            type: 'input',
                            templateOptions: {
                                label: 'Full Name:'
                            }
                        }, {
                            // CHECKBOX
                            type: 'checkbox',
                            key: 'title',
                            templateOptions: {
                                label: 'Agree Terms',
                                description: 'This should be a link for Terms of Use.'
                            }
                        }, {
                            //RADIO
                            type: 'radio',
                            key: 'Select',
                            templateOptions: {
                                options: [{
                                        key: "mr",
                                        value: "Mr."
                                    }, {
                                        key: "mrs",
                                        value: "Mrs"
                                    }],
                                label: "Title",
                                description: "Select a title that suits your description"
                            }
                        }];
                }
                MyForm = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        templateUrl: '../templates/myform.template.html',
                        directives: [ng2_formly_1.FormlyForm],
                        providers: [ng2_formly_1.FormlyConfig, ng2_formly_1.FormlyMessages]
                    }), 
                    __metadata('design:paramtypes', [ng2_formly_1.FormlyConfig])
                ], MyForm);
                return MyForm;
            }());
            exports_1("MyForm", MyForm);
        }
    }
});
