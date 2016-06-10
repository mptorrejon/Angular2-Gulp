System.register(['@angular/core', '../dispatcher/dispatcher'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
            cartActions = (function (_super) {
                __extends(cartActions, _super);
                function cartActions() {
                    _super.apply(this, arguments);
                    this.dispatch = injector.get(dispatcher_1.Dispatcher);
                }
                cartActions.prototype.addItem = function (item) {
                    console.log('into cart.actions');
                    console.log(item);
                    this.dispatch.emit({
                        actionType: ADD_ITEM,
                        item: item,
                        name: "Mauricio"
                    });
                };
                return cartActions;
            }(core_1.EventEmitter));
            exports_1("cartActions", cartActions);
        }
    }
});
