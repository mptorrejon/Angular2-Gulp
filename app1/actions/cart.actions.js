System.register(['@angular/core', '../dispatcher/dispatcher'], function(exports_1, context_1) {
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
    var core_1, dispatcher_1;
    var ADD_ITEM, injector, cartActions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dispatcher_1_1) {
                dispatcher_1 = dispatcher_1_1;
            }],
        execute: function() {
            ADD_ITEM = 'ADD_ITEM';
            injector = core_1.ReflectiveInjector.resolveAndCreate([
                dispatcher_1.Dispatcher
            ]);
            cartActions = (function () {
                function cartActions() {
                    this.dispatch = injector.get(dispatcher_1.Dispatcher);
                }
                cartActions.prototype.addItem = function (item) {
                    this.dispatch.emit({
                        actionType: ADD_ITEM,
                        item: item
                    });
                };
                cartActions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], cartActions);
                return cartActions;
            }());
            exports_1("cartActions", cartActions);
        }
    }
});
