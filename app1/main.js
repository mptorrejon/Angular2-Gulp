System.register(['@angular/core', '@angular/platform-browser-dynamic', '@angular/http', './components/app.component', 'ng2-formly', '@angular/router-deprecated', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, http_1, app_component_1, ng2_formly_1, router_deprecated_1, common_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (ng2_formly_1_1) {
                ng2_formly_1 = ng2_formly_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //this resembles angular.module('name', [dependencies])...
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                http_1.JSONP_PROVIDERS,
                ng2_formly_1.FormlyProviders,
                router_deprecated_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]);
        }
    }
});
