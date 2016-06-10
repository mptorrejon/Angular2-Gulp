System.register(["../dispatcher/dispatcher"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dispatcher_1;
    var UPDATE_COUNTER, RESET_COUNTER, CounterActions;
    return {
        setters:[
            function (dispatcher_1_1) {
                dispatcher_1 = dispatcher_1_1;
            }],
        execute: function() {
            //this could be hosted in a different file
            exports_1("UPDATE_COUNTER", UPDATE_COUNTER = "UPDATE_COUNTER");
            exports_1("RESET_COUNTER", RESET_COUNTER = "RESET_COUNTER");
            //delegates actions to the dispatcher instance
            CounterActions = (function () {
                function CounterActions() {
                }
                CounterActions.prototype.increment = function () {
                    this.updateOffsetDispatch(1);
                };
                CounterActions.prototype.decrement = function () {
                    this.updateOffsetDispatch(-1);
                };
                CounterActions.prototype.reset = function () {
                    dispatcher_1.default.emit({
                        type: RESET_COUNTER,
                        data: null
                    });
                };
                CounterActions.prototype.updateOffsetDispatch = function (offset) {
                    dispatcher_1.default.emit({
                        type: UPDATE_COUNTER,
                        data: offset
                    });
                };
                return CounterActions;
            }());
            exports_1("CounterActions", CounterActions);
        }
    }
});
