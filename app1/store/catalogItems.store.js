System.register(['../dispatcher/dispatcher'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var dispatcher_1;
    var CartStore;
    return {
        setters:[
            function (dispatcher_1_1) {
                dispatcher_1 = dispatcher_1_1;
            }],
        execute: function() {
            CartStore = (function (_super) {
                __extends(CartStore, _super);
                function CartStore() {
                    _super.call(this);
                    this.cartItems = [];
                }
                CartStore.prototype.addItem = function (catalogItem) {
                    console.log('inside store additem');
                };
                CartStore.prototype.removeItem = function (cartItem) {
                    console.log('inside store removeItem');
                };
                return CartStore;
            }(dispatcher_1.Dispatcher));
            exports_1("CartStore", CartStore);
        }
    }
});
