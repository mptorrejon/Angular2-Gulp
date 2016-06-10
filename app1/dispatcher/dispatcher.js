System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var dispatcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //dispatcher instance remains the same throughtout the whole app
            dispatcher = new core_1.EventEmitter();
            exports_1("default",dispatcher);
        }
    }
});
