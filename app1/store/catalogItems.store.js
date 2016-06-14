System.register(["@angular/core", "immutable", "../actions/cart.actions", "../dispatcher/dispatcher"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, immutable_1, cart_actions_1, dispatcher_1;
    var INITIAL_VALUE, CounterStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
            },
            function (dispatcher_1_1) {
                dispatcher_1 = dispatcher_1_1;
            }],
        execute: function() {
            INITIAL_VALUE = 0;
            CounterStore = (function (_super) {
                __extends(CounterStore, _super);
                function CounterStore() {
                    var _this = this;
                    //lets you use all functions/methods from the eventemitter module
                    _super.call(this);
                    this.store = immutable_1.Map({ counter: INITIAL_VALUE });
                    //catches emit calls from dispatcher and applies correct view update
                    dispatcher_1.default.subscribe(function (payload) {
                        //init()
                        var oldStore = _this.store;
                        //applies correct update depending on increment/decrement
                        switch (payload.type) {
                            case cart_actions_1.UPDATE_COUNTER:
                                _this.store = _this.store.update("counter", function (v) { return v + payload.data; });
                                break;
                            case cart_actions_1.RESET_COUNTER:
                                _this.store = _this.store.update("counter", function (value) { return INITIAL_VALUE; });
                                break;
                            default: break;
                        }
                        //quick comparison to check if value has changed
                        console.log(_this.store);
                        console.log(oldStore);
                        if (!_this.store.equals(oldStore)) {
                            _this.emit("changed");
                        }
                    });
                }
                //getter
                CounterStore.prototype.getCounter = function () {
                    return this.store.get("counter");
                };
                return CounterStore;
            }(core_1.EventEmitter));
            exports_1("CounterStore", CounterStore);
        }
    }
});
