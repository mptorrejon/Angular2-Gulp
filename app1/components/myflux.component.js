System.register(["@angular/core", "../actions/cart.actions", "../store/catalogItems.store"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, cart_actions_1, catalogItems_store_1;
    var MyFlux;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
            },
            function (catalogItems_store_1_1) {
                catalogItems_store_1 = catalogItems_store_1_1;
            }],
        execute: function() {
            MyFlux = (function () {
                function MyFlux(counterActions, counterStore) {
                    this.counter = 0;
                    this.counterActions = counterActions;
                    this.counterStore = counterStore;
                }
                MyFlux.prototype.ngOnInit = function () {
                    var _this = this;
                    this.counter = this.counterStore.getCounter();
                    this.counterStore.subscribe(function () { return _this.counter = _this.counterStore.getCounter(); });
                };
                MyFlux.prototype.ngOnDestroy = function () { };
                MyFlux.prototype.increment = function () {
                    this.counterActions.increment();
                };
                MyFlux.prototype.decrement = function () {
                    this.counterActions.decrement();
                };
                MyFlux.prototype.reset = function () {
                    this.counterActions.reset();
                };
                MyFlux = __decorate([
                    core_1.Component({
                        selector: "flux-arch",
                        providers: [cart_actions_1.CounterActions, catalogItems_store_1.CounterStore],
                        templateUrl: "../templates/myflux.templates.html"
                    }),
                    __param(0, core_1.Inject(cart_actions_1.CounterActions)),
                    __param(1, core_1.Inject(catalogItems_store_1.CounterStore)), 
                    __metadata('design:paramtypes', [cart_actions_1.CounterActions, catalogItems_store_1.CounterStore])
                ], MyFlux);
                return MyFlux;
            }());
            exports_1("MyFlux", MyFlux);
        }
    }
});
