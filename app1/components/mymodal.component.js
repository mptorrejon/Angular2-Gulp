System.register(['@angular/core', 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1;
    var MyModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            MyModal = (function () {
                function MyModal() {
                    this.name = "Mauricio.";
                }
                MyModal.prototype.close = function () {
                    console.log('closing...');
                    this.modal.close();
                };
                MyModal.prototype.open = function () {
                    console.log('opening...');
                    this.modal.open();
                };
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
                ], MyModal.prototype, "modal", void 0);
                MyModal = __decorate([
                    core_1.Component({
                        selector: 'my-modal',
                        templateUrl: '../templates/mymodal.templates.html',
                        directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyModal);
                return MyModal;
            }());
            exports_1("MyModal", MyModal);
        }
    }
});
