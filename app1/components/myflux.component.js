System.register(['@angular/core', '../actions/cart.actions'], function(exports_1, context_1) {
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
    var core_1, cart_actions_1;
    var catalogItems, MyFlux;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
            }],
        execute: function() {
            catalogItems = [
                { id: 1, title: 'Item #1', cost: 1 },
                { id: 2, title: 'Item #2', cost: 2 },
                { id: 3, title: 'Item #3', cost: 3 }
            ];
            MyFlux = (function () {
                function MyFlux(action) {
                    this.action = action;
                }
                MyFlux.prototype.addToCart = function () {
                    console.log('adding new item...');
                    this.action.addItem('new item');
                };
                MyFlux = __decorate([
                    core_1.Component({
                        selector: 'flux-arch',
                        templateUrl: '../templates/myflux.templates.html',
                        providers: [cart_actions_1.cartActions]
                    }), 
                    __metadata('design:paramtypes', [cart_actions_1.cartActions])
                ], MyFlux);
                return MyFlux;
            }());
            exports_1("MyFlux", MyFlux);
        }
    }
});
