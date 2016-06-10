System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var cartStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // var injector = ReflectiveInjector.resolveAndCreate([
            // 	Dispatcher
            // ]);
            cartStore = (function (_super) {
                __extends(cartStore, _super);
                function cartStore() {
                    _super.apply(this, arguments);
                }
                // dispatch = injector.get(Dispatcher);
                cartStore.prototype.contructor = function () {
                    _super.call(this);
                    disp = new core_1.EventEmitter();
                    // console.log(new EventEmitter());
                    disp.subscribe(function (payload) {
                        console.log('hereeeeeee');
                    });
                };
                return cartStore;
            }(core_1.EventEmitter));
            exports_1("cartStore", cartStore);
        }
    }
});
