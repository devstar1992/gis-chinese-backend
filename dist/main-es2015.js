(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/userService/auth/auth.guard */ "./src/app/shared/userService/auth/auth.guard.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_default_login_default_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/default-login/default-login.component */ "./src/app/components/pages/default-login/default-login.component.ts");
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/error/error.component */ "./src/app/components/pages/error/error.component.ts");








const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home/:id', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _components_pages_default_login_default_login_component__WEBPACK_IMPORTED_MODULE_4__["DefaultLoginComponent"] },
    {
        path: 'admin', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | components-admin_system-system-module */[__webpack_require__.e("default~components-admin_company-company-module~components-admin_system-system-module~components-map~2d2ea495"), __webpack_require__.e("components-admin_system-system-module")]).then(__webpack_require__.bind(null, /*! ./components/admin_system/system.module */ "./src/app/components/admin_system/system.module.ts")).then(m => m.SystemModule)
    },
    {
        path: 'company', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | components-admin_company-company-module */[__webpack_require__.e("default~components-admin_company-company-module~components-admin_system-system-module~components-map~2d2ea495"), __webpack_require__.e("components-admin_company-company-module")]).then(__webpack_require__.bind(null, /*! ./components/admin_company/company.module */ "./src/app/components/admin_company/company.module.ts")).then(m => m.CompanyModule)
    },
    {
        path: 'map', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | components-map-map-module */[__webpack_require__.e("default~components-admin_company-company-module~components-admin_system-system-module~components-map~2d2ea495"), __webpack_require__.e("components-map-map-module")]).then(__webpack_require__.bind(null, /*! ./components/map/map.module */ "./src/app/components/map/map.module.ts")).then(m => m.MapModule)
    },
    { path: '**', component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ "./src/app/components/layouts/preloader/preloader.component.ts");
/* harmony import */ var _shared_toastrService_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/toastrService/toaster-container.component */ "./src/app/shared/toastrService/toaster-container.component.ts");








class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.recallJsFuntions();
    }
    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                $('#preloader-wrap').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]))
            .subscribe(event => {
            $.getScript('assets/js/costic.js');
            $('#preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
            }
        ])], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-preloader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toaster-container");
    } }, directives: [_components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_4__["PreloaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_toastrService_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
                    }
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_layouts_essential_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layouts/essential.module */ "./src/app/components/layouts/essential.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_toastrService_toast_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/toastrService/toast.module */ "./src/app/shared/toastrService/toast.module.ts");
/* harmony import */ var _shared_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/language-translation/language-translation.module */ "./src/app/shared/language-translation/language-translation.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_default_login_default_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/default-login/default-login.component */ "./src/app/components/pages/default-login/default-login.component.ts");
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/error/error.component */ "./src/app/components/pages/error/error.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_toastrService_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            _shared_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
            _components_layouts_essential_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_pages_default_login_default_login_component__WEBPACK_IMPORTED_MODULE_11__["DefaultLoginComponent"],
        _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _shared_toastrService_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
        _shared_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
        _components_layouts_essential_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_pages_default_login_default_login_component__WEBPACK_IMPORTED_MODULE_11__["DefaultLoginComponent"],
                    _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _shared_toastrService_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
                    _shared_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                    _components_layouts_essential_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/layouts/essential.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/layouts/essential.module.ts ***!
  \********************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader/preloader.component */ "./src/app/components/layouts/preloader/preloader.component.ts");



class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__["PreloaderComponent"]], exports: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__["PreloaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__["PreloaderComponent"],
                ],
                exports: [
                    _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__["PreloaderComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/layouts/preloader/preloader.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/layouts/preloader/preloader.component.ts ***!
  \*********************************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 14, vars: 0, consts: [["id", "preloader-wrap"], [1, "spinner", "spinner-8"], [1, "ms-circle1", "ms-child"], [1, "ms-circle2", "ms-child"], [1, "ms-circle3", "ms-child"], [1, "ms-circle4", "ms-child"], [1, "ms-circle5", "ms-child"], [1, "ms-circle6", "ms-child"], [1, "ms-circle7", "ms-child"], [1, "ms-circle8", "ms-child"], [1, "ms-circle9", "ms-child"], [1, "ms-circle10", "ms-child"], [1, "ms-circle11", "ms-child"], [1, "ms-circle12", "ms-child"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9wcmVsb2FkZXIvcHJlbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preloader',
                templateUrl: './preloader.component.html',
                styleUrls: ['./preloader.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/default-login/default-login.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/default-login/default-login.component.ts ***!
  \***************************************************************************/
/*! exports provided: DefaultLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLoginComponent", function() { return DefaultLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








class DefaultLoginComponent {
    constructor(userService, router, _formBuilder, toastr, translate) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.translate = translate;
    }
    ngOnInit() {
        this.setLang();
        this.formGroup = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    //language Setting
    setLang() {
        const lang = localStorage.getItem('language');
        if (lang) {
            this.translate.use(lang);
        }
    }
    login() {
        // alert('My skype address is devstar1992@outlook.com.Please do not say about skype word')
        if (!this.formGroup.invalid) {
            this.userService.postRequest("api/login", this.formGroup.value, false).subscribe(res => {
                this.userService.setToken({
                    token: res['token'],
                    userInfo: res['userInfo'],
                    expiresAt: res['expiresAt']
                });
                this.Toaster('success', '', 'Welcome');
                this.userService.gotoFirstPage();
            }, err => {
                this.handleError(err);
            });
        }
    }
    //toastr functions
    handleError(err) {
        if (err.status == 504)
            this.Toaster('error', '', 'server is not responsing.', 4000);
        else
            this.Toaster('error', '', err.error.message, 1500);
    }
    Toaster(style, msgtopic, msgContent, time = 1000) {
        this.toastr.show(style, msgtopic, msgContent, time);
    }
}
DefaultLoginComponent.ɵfac = function DefaultLoginComponent_Factory(t) { return new (t || DefaultLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
DefaultLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultLoginComponent, selectors: [["app-default-login"]], decls: 59, vars: 25, consts: [[1, "ms-body", "ms-primary-theme", "ms-logged-out"], [1, "body-content"], [1, "ms-content-wrapper", "ms-auth"], [1, "ms-auth-container"], [1, "ms-auth-col"], [1, "ms-auth-bg"], [1, "ms-auth-form"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "submit"], [1, "mb-3"], ["for", "validationCustom08"], [1, "input-group"], ["type", "text", "formControlName", "username", 1, "form-control"], [1, "invalid-feedback"], [1, "mb-2"], ["for", "validationCustom09"], ["type", "password", "formControlName", "password", "minlength", "8", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-4", "d-block", "w-100"], [1, "mb-0", "mt-3", "text-center"], ["routerLink", "/", 1, "btn-link"], ["id", "modal-12", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-12", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-min"], [1, "modal-content"], [1, "modal-body", "text-center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "flaticon-secure-shield", "d-block"], ["method", "post"], [1, "ms-form-group", "has-icon"], ["type", "text", "placeholder", "Email Address", "name", "forgot-password", "value", "", 1, "form-control"], [1, "material-icons"], ["type", "submit", 1, "btn", "btn-primary", "shadow-none"]], template: function DefaultLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DefaultLoginComponent_Template_form_submit_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Enter your email to recover your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, "Please provide your username and password to continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "user name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "Please provide a valid field."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 17, "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 19, "at least 8 length"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 21, "login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 23, "Go to home"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZGVmYXVsdC1sb2dpbi9kZWZhdWx0LWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default-login',
                templateUrl: './default-login.component.html',
                styleUrls: ['./default-login.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/error/error.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 14, vars: 0, consts: [[1, "ms-body", "ms-primary-theme"], [1, "body-content", "ms-error-404"], [1, "ms-content-wrapper"], [1, "flaticon-computer"], ["routerLink", "/", 1, "btn", "btn-white"], [1, "material-icons"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Oops! Page Not Found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The link you followed may be broken, or the page has been removed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/app/components/pages/home/style.ts");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/preloader/preloader.component */ "./src/app/components/layouts/preloader/preloader.component.ts");











function HomeComponent_app_preloader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-preloader");
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.html, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class HomeComponent {
    constructor(userService, router, route, toastr, sanitizer, translate) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.url = "/home";
        this.navbarClass = "navbar navbar-expand-lg navbar-dark fixed-top";
        this.imailRegex = /^\S+@\S+\.\S+$/;
        this.phoneRegex = /^1[3|4|5|7|8][0-9]{9}$/;
        this.value = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    }
    onClick(targetElement) {
        if ('id' in targetElement && targetElement.id == "logOut") {
            this.userService.deleteToken();
            document.getElementById('logOut').style.display = "none";
            document.getElementById('console').style.display = "none";
            document.getElementById('logIn').style.display = "block";
        }
        else if ('id' in targetElement && targetElement.id == "sendMessageButton") {
            const name = this.value.name;
            const email = this.value.email;
            const phone = this.value.phone;
            const message = this.value.message;
            if (name.length == 0)
                document.getElementById('name_p').innerHTML = "Pleae provide valid name";
            if (!this.imailRegex.test(email))
                document.getElementById('email_p').innerHTML = "Pleae provide valid email";
            if (!this.phoneRegex.test(phone))
                document.getElementById('phone_p').innerHTML = "Pleae provide valid phone number";
            if (message.length == 0)
                document.getElementById('message_p').innerHTML = "Pleae provide valid message";
            if (name.length != 0 && this.imailRegex.test(email) && message.length != 0) {
                this.sendGmail();
            }
        }
        else if ('id' in targetElement && targetElement.id == "console") {
            this.userService.gotoFirstPage();
        }
    }
    handleKeyDown(event) {
        if ('id' in event.target) {
            const id = event.target['id'];
            if (id == 'name' || id == 'message') {
                this.value[id] = event.target['value'];
                if (String(event.target['value']).length > 0)
                    document.getElementById(id + '_p').innerHTML = null;
            }
            else if (id == 'email') {
                this.value[id] = event.target['value'];
                if (this.imailRegex.test(String(event.target['value'])))
                    document.getElementById(id + '_p').innerHTML = null;
            }
            else if (id == 'phone') {
                this.value[id] = event.target['value'];
                if (this.phoneRegex.test(String(event.target['value'])))
                    document.getElementById(id + '_p').innerHTML = null;
            }
        }
    }
    //bottom to top button function
    onScroll(event) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        }
        else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    //Smooth scrollbar move function when navbar clicked
    onAnchorClick() {
        this.route.fragment.subscribe(f => {
            const element = document.querySelector("#" + f);
            if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    sendGmail() {
        this.userService.postRequest('api/sendGmail', this.value, false).subscribe(res => {
            this.showSuccessToaster('success', '', 'success');
        }, err => {
            this.showSuccessToaster('error', '', 'failure');
        });
    }
    showSuccessToaster(style, msgtopic, msgContent) {
        this.toastr.show(style, msgtopic, msgContent);
    }
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.setLang();
        this.router.events.subscribe(s => {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                const tree = this.router.parseUrl(this.router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
                    }
                }
            }
        });
        if (this.route.snapshot.params.id == 'preview') {
            this.html = this.sanitizer.bypassSecurityTrustHtml(this.userService.getLocalSetting() + this.style);
            this.userService.deleteLocalSetting();
        }
        else {
            this.userService.postRequest("api/admin/getSetting", {}, false).subscribe(res => {
                if (res['result'].length > 0) {
                    this.html = this.sanitizer.bypassSecurityTrustHtml(res['result'][0].code + _style__WEBPACK_IMPORTED_MODULE_2__["Style"]);
                    this.timer = setInterval(() => this.setNabar(), 200);
                }
            }, err => {
                this.handleError(err);
            });
        }
    }
    setNabar() {
        if (document.getElementById('logOut') && document.getElementById('console') && document.getElementById('logIn')) {
            if (this.userService.isLoggedIn({}) == true) {
                document.getElementById('logOut').style.display = "block";
                document.getElementById('console').style.display = "block";
                document.getElementById('logIn').style.display = "none";
            }
            else {
                document.getElementById('logIn').style.display = "block";
                document.getElementById('logOut').style.display = "none";
                document.getElementById('console').style.display = "none";
            }
            clearInterval(this.timer);
        }
    }
    setLang() {
        if (localStorage.getItem('language')) {
            this.translate.use(localStorage.getItem('language'));
        }
    }
    //toastr functions
    handleError(err) {
        if (err.status == 504)
            this.Toaster('error', '', 'server is not responsing.', 40000);
        else
            this.Toaster('error', '', err.error.message, 1500);
    }
    Toaster(style, msgtopic, msgContent, time = 1000) {
        this.toastr.show(style, msgtopic, msgContent, time);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("keyup", function HomeComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 2, consts: [[4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["id", "myBtn", "title", "Go to top", 3, "click"], [1, "fas", "fa", "fa-chevron-up"], [3, "innerHTML"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_app_preloader_0_Template, 1, 0, "app-preloader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.html);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.html);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__["PreloaderComponent"]], styles: ["#myBtn[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 30px;\r\n  z-index: 99;\r\n  font-size: 18px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #343a40;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#myBtn[_ngcontent-%COMP%]:hover {\r\n  background-color: #555;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlCdG4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuI215QnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:click', ['$event.target']]
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:keyup', ['$event']]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/home/style.ts":
/*!************************************************!*\
  !*** ./src/app/components/pages/home/style.ts ***!
  \************************************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
const Style = `
<style>
/* Achivements Section */
#achivements {
	padding: 80px 0;
	color: #aaa;
	background: #6f7275; /* Old browsers */
	background: -moz-linear-gradient(top, #6f7275 0%, #31353a 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #6f7275), color-stop(100%, #31353a)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #6f7275 0%, #31353a 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #6f7275 0%, #31353a 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, #6f7275 0%, #31353a 100%); /* IE10+ */
	background: linear-gradient(to bottom, #6f7275 0%, #31353a 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6f7275', endColorstr='#31353a', GradientType=0 ); /* IE6-9 */
}
.achivement-box {
	text-align: center;
	margin: 20px 0;
}
.achivement-box i.fa {
	font-size: 60px;
	color: #F4D03F;
	margin-bottom: 20px;
}
.achivement-box h4 {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color:grey;
}
.achivement-box span.count {
	font-size: 36px;
	font-weight: 700;
	color: #fff;
	display: block;
}
/*old*/
.modal-max{
  width: 100%;
  padding: 0px;
  margin: 0px;
  height: auto;
  max-width: inherit;
}
#logOut{
  cursor:pointer;
  display:none;
}
#logIn{
  cursor:pointer;
  display:none;
}
#console{
  cursor:pointer;
  display:none;
}
@charset "UTF-8";
/*!
* Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2020 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #fed136;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #fed136;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #fed136;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #fed136;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #e6b301;
  text-decoration: underline;
}

a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type=radio],
input[type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  line-height: 1.2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-fluid1 {
  width: 100%;
  height: 300px;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container,
.container-fluid,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col-xl,
.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,
.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,
.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,
.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,
.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
  position: relative;
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.3333333333%;
}

.offset-2 {
  margin-left: 16.6666666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.3333333333%;
}

.offset-5 {
  margin-left: 41.6666666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.3333333333%;
}

.offset-8 {
  margin-left: 66.6666666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.3333333333%;
}

.offset-11 {
  margin-left: 91.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-sm-first {
    order: -1;
  }

  .order-sm-last {
    order: 13;
  }

  .order-sm-0 {
    order: 0;
  }

  .order-sm-1 {
    order: 1;
  }

  .order-sm-2 {
    order: 2;
  }

  .order-sm-3 {
    order: 3;
  }

  .order-sm-4 {
    order: 4;
  }

  .order-sm-5 {
    order: 5;
  }

  .order-sm-6 {
    order: 6;
  }

  .order-sm-7 {
    order: 7;
  }

  .order-sm-8 {
    order: 8;
  }

  .order-sm-9 {
    order: 9;
  }

  .order-sm-10 {
    order: 10;
  }

  .order-sm-11 {
    order: 11;
  }

  .order-sm-12 {
    order: 12;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.3333333333%;
  }

  .offset-sm-2 {
    margin-left: 16.6666666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.3333333333%;
  }

  .offset-sm-5 {
    margin-left: 41.6666666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.3333333333%;
  }

  .offset-sm-8 {
    margin-left: 66.6666666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.3333333333%;
  }

  .offset-sm-11 {
    margin-left: 91.6666666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-md-first {
    order: -1;
  }

  .order-md-last {
    order: 13;
  }

  .order-md-0 {
    order: 0;
  }

  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  .order-md-3 {
    order: 3;
  }

  .order-md-4 {
    order: 4;
  }

  .order-md-5 {
    order: 5;
  }

  .order-md-6 {
    order: 6;
  }

  .order-md-7 {
    order: 7;
  }

  .order-md-8 {
    order: 8;
  }

  .order-md-9 {
    order: 9;
  }

  .order-md-10 {
    order: 10;
  }

  .order-md-11 {
    order: 11;
  }

  .order-md-12 {
    order: 12;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.3333333333%;
  }

  .offset-md-2 {
    margin-left: 16.6666666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.3333333333%;
  }

  .offset-md-5 {
    margin-left: 41.6666666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.3333333333%;
  }

  .offset-md-8 {
    margin-left: 66.6666666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.3333333333%;
  }

  .offset-md-11 {
    margin-left: 91.6666666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-lg-first {
    order: -1;
  }

  .order-lg-last {
    order: 13;
  }

  .order-lg-0 {
    order: 0;
  }

  .order-lg-1 {
    order: 1;
  }

  .order-lg-2 {
    order: 2;
  }

  .order-lg-3 {
    order: 3;
  }

  .order-lg-4 {
    order: 4;
  }

  .order-lg-5 {
    order: 5;
  }

  .order-lg-6 {
    order: 6;
  }

  .order-lg-7 {
    order: 7;
  }

  .order-lg-8 {
    order: 8;
  }

  .order-lg-9 {
    order: 9;
  }

  .order-lg-10 {
    order: 10;
  }

  .order-lg-11 {
    order: 11;
  }

  .order-lg-12 {
    order: 12;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.3333333333%;
  }

  .offset-lg-2 {
    margin-left: 16.6666666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.3333333333%;
  }

  .offset-lg-5 {
    margin-left: 41.6666666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.3333333333%;
  }

  .offset-lg-8 {
    margin-left: 66.6666666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.3333333333%;
  }

  .offset-lg-11 {
    margin-left: 91.6666666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-xl-first {
    order: -1;
  }

  .order-xl-last {
    order: 13;
  }

  .order-xl-0 {
    order: 0;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }

  .order-xl-3 {
    order: 3;
  }

  .order-xl-4 {
    order: 4;
  }

  .order-xl-5 {
    order: 5;
  }

  .order-xl-6 {
    order: 6;
  }

  .order-xl-7 {
    order: 7;
  }

  .order-xl-8 {
    order: 8;
  }

  .order-xl-9 {
    order: 9;
  }

  .order-xl-10 {
    order: 10;
  }

  .order-xl-11 {
    order: 11;
  }

  .order-xl-12 {
    order: 12;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.3333333333%;
  }

  .offset-xl-2 {
    margin-left: 16.6666666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.3333333333%;
  }

  .offset-xl-5 {
    margin-left: 41.6666666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.3333333333%;
  }

  .offset-xl-8 {
    margin-left: 66.6666666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.3333333333%;
  }

  .offset-xl-11 {
    margin-left: 91.6666666667%;
  }
}
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}
.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}
.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary > th,
.table-primary > td {
  background-color: #fff2c7;
}
.table-primary th,
.table-primary td,
.table-primary thead th,
.table-primary tbody + tbody {
  border-color: #fee796;
}

.table-hover .table-primary:hover {
  background-color: #ffecae;
}
.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #ffecae;
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: #d6d8db;
}
.table-secondary th,
.table-secondary td,
.table-secondary thead th,
.table-secondary tbody + tbody {
  border-color: #b3b7bb;
}

.table-hover .table-secondary:hover {
  background-color: #c8cbcf;
}
.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
  background-color: #c8cbcf;
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #c3e6cb;
}
.table-success th,
.table-success td,
.table-success thead th,
.table-success tbody + tbody {
  border-color: #8fd19e;
}

.table-hover .table-success:hover {
  background-color: #b1dfbb;
}
.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #b1dfbb;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #bee5eb;
}
.table-info th,
.table-info td,
.table-info thead th,
.table-info tbody + tbody {
  border-color: #86cfda;
}

.table-hover .table-info:hover {
  background-color: #abdde5;
}
.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #abdde5;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #fff2c7;
}
.table-warning th,
.table-warning td,
.table-warning thead th,
.table-warning tbody + tbody {
  border-color: #fee796;
}

.table-hover .table-warning:hover {
  background-color: #ffecae;
}
.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #ffecae;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f5c6cb;
}
.table-danger th,
.table-danger td,
.table-danger thead th,
.table-danger tbody + tbody {
  border-color: #ed969e;
}

.table-hover .table-danger:hover {
  background-color: #f1b0b7;
}
.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #f1b0b7;
}

.table-light,
.table-light > th,
.table-light > td {
  background-color: #fdfdfe;
}
.table-light th,
.table-light td,
.table-light thead th,
.table-light tbody + tbody {
  border-color: #fbfcfc;
}

.table-hover .table-light:hover {
  background-color: #ececf6;
}
.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
  background-color: #ececf6;
}

.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c6c8ca;
}
.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
  border-color: #95999c;
}

.table-hover .table-dark:hover {
  background-color: #b9bbbe;
}
.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
  background-color: #b9bbbe;
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}
.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}
.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}
.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #454d55;
}
.table-dark.table-bordered {
  border: 0;
}
.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}
.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-sm > .table-bordered {
    border: 0;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-md > .table-bordered {
    border: 0;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-lg > .table-bordered {
    border: 0;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-xl > .table-bordered {
    border: 0;
  }
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.table-responsive > .table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ffeeb5;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

input[type=date].form-control,
input[type=time].form-control,
input[type=datetime-local].form-control,
input[type=month].form-control {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

select.form-control[size], select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.form-row > .col,
.form-row > [class*=col-] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}
.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #28a745;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(40, 167, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #28a745;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:valid, .custom-select.is-valid {
  border-color: #28a745;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #28a745;
}
.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
  color: #28a745;
}
.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
  border-color: #28a745;
}
.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
  border-color: #34ce57;
  background-color: #34ce57;
}
.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #28a745;
}

.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
  border-color: #28a745;
}
.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:invalid, .custom-select.is-invalid {
  border-color: #dc3545;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}
.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
  color: #dc3545;
}
.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
  border-color: #dc3545;
}
.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
  border-color: #e4606d;
  background-color: #e4606d;
}
.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #dc3545;
}

.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
  border-color: #dc3545;
}
.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.form-inline .form-check {
  width: 100%;
}
@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-plaintext {
    display: inline-block;
  }
  .form-inline .input-group,
.form-inline .custom-select {
    width: auto;
  }
  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }
  .form-inline .form-check-input {
    position: relative;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }
  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }
  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
  text-decoration: none;
}
.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.btn.disabled, .btn:disabled {
  opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-primary:hover {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
}
.btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}
.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #fec503;
  border-color: #f3bd01;
}
.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}
.btn-secondary:focus, .btn-secondary.focus {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}
.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
.btn-success:focus, .btn-success.focus {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}
.btn-success.disabled, .btn-success:disabled {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}
.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}
.btn-info:focus, .btn-info.focus {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
}
.btn-info.disabled, .btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}
.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
}

.btn-warning {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-warning:hover {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
}
.btn-warning:focus, .btn-warning.focus {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}
.btn-warning.disabled, .btn-warning:disabled {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #fec503;
  border-color: #f3bd01;
}
.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}
.btn-danger:focus, .btn-danger.focus {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
}
.btn-danger.disabled, .btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}
.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}
.btn-light:focus, .btn-light.focus {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}
.btn-light.disabled, .btn-light:disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}
.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}
.btn-dark:focus, .btn-dark.focus {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}
.btn-dark.disabled, .btn-dark:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}
.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.btn-outline-primary {
  color: #fed136;
  border-color: #fed136;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-outline-primary:focus, .btn-outline-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.5);
}
.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #fed136;
  background-color: transparent;
}
.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.5);
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}
.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-outline-success:focus, .btn-outline-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}
.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent;
}
.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
}
.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
.btn-outline-info:focus, .btn-outline-info.focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}
.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent;
}
.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-warning {
  color: #fed136;
  border-color: #fed136;
}
.btn-outline-warning:hover {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-outline-warning:focus, .btn-outline-warning.focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.5);
}
.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #fed136;
  background-color: transparent;
}
.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.5);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:focus, .btn-outline-danger.focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}
.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:focus, .btn-outline-light.focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light.disabled, .btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}
.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-dark {
  color: #343a40;
  border-color: #343a40;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.btn-outline-dark:focus, .btn-outline-dark.focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}
.btn-outline-dark.disabled, .btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent;
}
.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #fed136;
  text-decoration: none;
}
.btn-link:hover {
  color: #e6b301;
  text-decoration: underline;
}
.btn-link:focus, .btn-link.focus {
  text-decoration: underline;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type=submit].btn-block,
input[type=reset].btn-block,
input[type=button].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropleft .dropdown-toggle::after {
  display: none;
}
.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^=top], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #fed136;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
  z-index: 1;
}
.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0;
}
.btn-group-toggle > .btn input[type=radio],
.btn-group-toggle > .btn input[type=checkbox],
.btn-group-toggle > .btn-group > .btn input[type=radio],
.btn-group-toggle > .btn-group > .btn input[type=checkbox] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-control-plaintext,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}
.input-group > .form-control + .form-control,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .custom-file,
.input-group > .form-control-plaintext + .form-control,
.input-group > .form-control-plaintext + .custom-select,
.input-group > .form-control-plaintext + .custom-file,
.input-group > .custom-select + .form-control,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .custom-file,
.input-group > .custom-file + .form-control,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .custom-file {
  margin-left: -1px;
}
.input-group > .form-control:focus,
.input-group > .custom-select:focus,
.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
  z-index: 3;
}
.input-group > .custom-file .custom-file-input:focus {
  z-index: 4;
}
.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .custom-file {
  display: flex;
  align-items: center;
}
.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: flex;
}
.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}
.input-group-prepend .btn:focus,
.input-group-append .btn:focus {
  z-index: 3;
}
.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .input-group-text,
.input-group-prepend .input-group-text + .btn,
.input-group-append .btn + .btn,
.input-group-append .btn + .input-group-text,
.input-group-append .input-group-text + .input-group-text,
.input-group-append .input-group-text + .btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.input-group-text input[type=radio],
.input-group-text input[type=checkbox] {
  margin-top: 0;
}

.input-group-lg > .form-control:not(textarea),
.input-group-lg > .custom-select {
  height: calc(1.5em + 1rem + 2px);
}

.input-group-lg > .form-control,
.input-group-lg > .custom-select,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control:not(textarea),
.input-group-sm > .custom-select {
  height: calc(1.5em + 0.5rem + 2px);
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.input-group-lg > .custom-select,
.input-group-sm > .custom-select {
  padding-right: 1.75rem;
}

.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.25rem;
  opacity: 0;
}
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #fed136;
  background-color: #fed136;
}
.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #ffeeb5;
}
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  color: #fff;
  background-color: #fffae8;
  border-color: #fffae8;
}
.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {
  color: #6c757d;
}
.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}
.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: #adb5bd solid 1px;
}
.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: no-repeat 50%/50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
  border-color: #fed136;
  background-color: #fed136;
}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(254, 209, 54, 0.5);
}
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
  background-color: rgba(254, 209, 54, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(254, 209, 54, 0.5);
}

.custom-switch {
  padding-left: 2.25rem;
}
.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: 0.5rem;
}
.custom-switch .custom-control-label::after {
  top: calc(0.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: 0.5rem;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .custom-switch .custom-control-label::after {
    transition: none;
  }
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #fff;
  transform: translateX(0.75rem);
}
.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(254, 209, 54, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.custom-select:focus {
  border-color: #ffeeb5;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}
.custom-select[multiple], .custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}
.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}
.custom-select::-ms-expand {
  display: none;
}
.custom-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.custom-select-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.custom-select-lg {
  height: calc(1.5em + 1rem + 2px);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 0;
}
.custom-file-input:focus ~ .custom-file-label {
  border-color: #ffeeb5;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.custom-file-input[disabled] ~ .custom-file-label, .custom-file-input:disabled ~ .custom-file-label {
  background-color: #e9ecef;
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse";
}
.custom-file-input ~ .custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.75rem);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-range {
  width: 100%;
  height: 1.4rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.custom-range:focus {
  outline: none;
}
.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}
.custom-range::-moz-focus-outer {
  border: 0;
}
.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #fed136;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
          appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.custom-range::-webkit-slider-thumb:active {
  background-color: #fffae8;
}
.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #fed136;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
       appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.custom-range::-moz-range-thumb:active {
  background-color: #fffae8;
}
.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  background-color: #fed136;
  border: 0;
  border-radius: 1rem;
  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    -ms-transition: none;
    transition: none;
  }
}
.custom-range::-ms-thumb:active {
  background-color: #fffae8;
}
.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
}
.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}
.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}
.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}
.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}
.custom-range:disabled::-moz-range-track {
  cursor: default;
}
.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .custom-control-label::before,
.custom-file-label,
.custom-select {
    transition: none;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.nav-link:hover, .nav-link:focus {
  text-decoration: none;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-item {
  margin-bottom: -1px;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #fed136;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
.navbar .container,
.navbar .container-fluid,
.navbar .container-sm,
.navbar .container-md,
.navbar .container-lg,
.navbar .container-xl {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.navbar-toggler:hover, .navbar-toggler:focus {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

@media (max-width: 575.98px) {
  .navbar-expand-sm > .container,
.navbar-expand-sm > .container-fluid,
.navbar-expand-sm > .container-sm,
.navbar-expand-sm > .container-md,
.navbar-expand-sm > .container-lg,
.navbar-expand-sm > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm > .container,
.navbar-expand-sm > .container-fluid,
.navbar-expand-sm > .container-sm,
.navbar-expand-sm > .container-md,
.navbar-expand-sm > .container-lg,
.navbar-expand-sm > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (max-width: 767.98px) {
  .navbar-expand-md > .container,
.navbar-expand-md > .container-fluid,
.navbar-expand-md > .container-sm,
.navbar-expand-md > .container-md,
.navbar-expand-md > .container-lg,
.navbar-expand-md > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md > .container,
.navbar-expand-md > .container-fluid,
.navbar-expand-md > .container-sm,
.navbar-expand-md > .container-md,
.navbar-expand-md > .container-lg,
.navbar-expand-md > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (max-width: 991.98px) {
  .navbar-expand-lg > .container,
.navbar-expand-lg > .container-fluid,
.navbar-expand-lg > .container-sm,
.navbar-expand-lg > .container-md,
.navbar-expand-lg > .container-lg,
.navbar-expand-lg > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg > .container,
.navbar-expand-lg > .container-fluid,
.navbar-expand-lg > .container-sm,
.navbar-expand-lg > .container-md,
.navbar-expand-lg > .container-lg,
.navbar-expand-lg > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container,
.navbar-expand-xl > .container-fluid,
.navbar-expand-xl > .container-sm,
.navbar-expand-xl > .container-md,
.navbar-expand-xl > .container-lg,
.navbar-expand-xl > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl > .container,
.navbar-expand-xl > .container-fluid,
.navbar-expand-xl > .container-sm,
.navbar-expand-xl > .container-md,
.navbar-expand-xl > .container-lg,
.navbar-expand-xl > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.navbar-expand > .container,
.navbar-expand > .container-fluid,
.navbar-expand > .container-sm,
.navbar-expand > .container-md,
.navbar-expand > .container-lg,
.navbar-expand > .container-xl {
  padding-right: 0;
  padding-left: 0;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand > .container,
.navbar-expand > .container-fluid,
.navbar-expand > .container-sm,
.navbar-expand > .container-md,
.navbar-expand > .container-lg,
.navbar-expand > .container-xl {
  flex-wrap: nowrap;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}
.navbar-light .navbar-text a {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}
.navbar-dark .navbar-text a {
  color: #fff;
}
.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  flex-shrink: 0;
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-deck .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
  }
  .card-deck .card {
    flex: 1 0 0%;
    margin-right: 0.75rem;
    margin-bottom: 0;
    margin-left: 0.75rem;
  }
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.card-columns .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-columns {
    -moz-column-count: 3;
         column-count: 3;
    -moz-column-gap: 1.25rem;
         column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.accordion {
  overflow-anchor: none;
}
.accordion > .card {
  overflow: hidden;
}
.accordion > .card:not(:last-of-type) {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.accordion > .card:not(:first-of-type) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.accordion > .card > .card-header {
  border-radius: 0;
  margin-bottom: -1px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.breadcrumb-item {
  display: flex;
}
.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}
.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}
.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}
.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #fed136;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.page-link:hover {
  z-index: 2;
  color: #e6b301;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.25);
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}
a.badge:hover, a.badge:focus {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #fed136;
}
a.badge-primary:hover, a.badge-primary:focus {
  color: #fff;
  background-color: #fec503;
}
a.badge-primary:focus, a.badge-primary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.5);
}

.badge-secondary {
  color: #fff;
  background-color: #6c757d;
}
a.badge-secondary:hover, a.badge-secondary:focus {
  color: #fff;
  background-color: #545b62;
}
a.badge-secondary:focus, a.badge-secondary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}
a.badge-success:hover, a.badge-success:focus {
  color: #fff;
  background-color: #1e7e34;
}
a.badge-success:focus, a.badge-success.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}
a.badge-info:hover, a.badge-info:focus {
  color: #fff;
  background-color: #117a8b;
}
a.badge-info:focus, a.badge-info.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.badge-warning {
  color: #fff;
  background-color: #fed136;
}
a.badge-warning:hover, a.badge-warning:focus {
  color: #fff;
  background-color: #fec503;
}
a.badge-warning:focus, a.badge-warning.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 54, 0.5);
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}
a.badge-danger:hover, a.badge-danger:focus {
  color: #fff;
  background-color: #bd2130;
}
a.badge-danger:focus, a.badge-danger.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}
a.badge-light:hover, a.badge-light:focus {
  color: #212529;
  background-color: #dae0e5;
}
a.badge-light:focus, a.badge-light.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.badge-dark {
  color: #fff;
  background-color: #343a40;
}
a.badge-dark:hover, a.badge-dark:focus {
  color: #fff;
  background-color: #1d2124;
}
a.badge-dark:focus, a.badge-dark.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}
@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}
.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #846d1c;
  background-color: #fff6d7;
  border-color: #fff2c7;
}
.alert-primary hr {
  border-top-color: #ffecae;
}
.alert-primary .alert-link {
  color: #5a4a13;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}
.alert-secondary hr {
  border-top-color: #c8cbcf;
}
.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-success hr {
  border-top-color: #b1dfbb;
}
.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
.alert-info hr {
  border-top-color: #abdde5;
}
.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #846d1c;
  background-color: #fff6d7;
  border-color: #fff2c7;
}
.alert-warning hr {
  border-top-color: #ffecae;
}
.alert-warning .alert-link {
  color: #5a4a13;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.alert-danger hr {
  border-top-color: #f1b0b7;
}
.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light hr {
  border-top-color: #ececf6;
}
.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}
.alert-dark hr {
  border-top-color: #b9bbbe;
}
.alert-dark .alert-link {
  color: #040505;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #fed136;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
          animation: progress-bar-stripes 1s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
            animation: none;
  }
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #846d1c;
  background-color: #fff2c7;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #846d1c;
  background-color: #ffecae;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #846d1c;
  border-color: #846d1c;
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #383d41;
  background-color: #c8cbcf;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41;
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #155724;
  background-color: #b1dfbb;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #155724;
  border-color: #155724;
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #0c5460;
  background-color: #abdde5;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460;
}

.list-group-item-warning {
  color: #846d1c;
  background-color: #fff2c7;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #846d1c;
  background-color: #ffecae;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #846d1c;
  border-color: #846d1c;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #721c24;
  background-color: #f1b0b7;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #818182;
  background-color: #ececf6;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #818182;
  border-color: #818182;
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #1b1e21;
  background-color: #b9bbbe;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.close:hover {
  color: #000;
  text-decoration: none;
}
.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {
  opacity: 0.75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}

a.close.disabled {
  pointer-events: none;
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[x-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=top] .arrow {
  bottom: 0;
}
.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=top] .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-right, .bs-tooltip-auto[x-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=right] .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=right] .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=bottom] .arrow {
  top: 0;
}
.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=bottom] .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-left, .bs-tooltip-auto[x-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=left] .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=left] .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
}
.popover .arrow::before, .popover .arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top, .bs-popover-auto[x-placement^=top] {
  margin-bottom: 0.5rem;
}
.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=top] > .arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=top] > .arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-right, .bs-popover-auto[x-placement^=right] {
  margin-left: 0.5rem;
}
.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=right] > .arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}
.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=right] > .arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=right] > .arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom, .bs-popover-auto[x-placement^=bottom] {
  margin-top: 0.5rem;
}
.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=bottom] > .arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=bottom] > .arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-left, .bs-popover-auto[x-placement^=left] {
  margin-right: 0.5rem;
}
.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=left] > .arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}
.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=left] > .arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=left] > .arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 0.5rem 0.75rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50%/100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
          animation: spinner-border 0.75s linear infinite;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: spinner-grow 0.75s linear infinite;
          animation: spinner-grow 0.75s linear infinite;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg-primary {
  background-color: #fed136 !important;
}

a.bg-primary:hover, a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
  background-color: #fec503 !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

a.bg-secondary:hover, a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #545b62 !important;
}

.bg-success {
  background-color: #28a745 !important;
}

a.bg-success:hover, a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #1e7e34 !important;
}

.bg-info {
  background-color: #17a2b8 !important;
}

a.bg-info:hover, a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #117a8b !important;
}

.bg-warning {
  background-color: #fed136 !important;
}

a.bg-warning:hover, a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #fec503 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

a.bg-danger:hover, a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #bd2130 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #dae0e5 !important;
}

.bg-dark {
  background-color: #343a40 !important;
}

a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #1d2124 !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-right {
  border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-left {
  border-left: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #fed136 !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #28a745 !important;
}

.border-info {
  border-color: #17a2b8 !important;
}

.border-warning {
  border-color: #fed136 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #343a40 !important;
}

.border-white {
  border-color: #fff !important;
}

.rounded-sm {
  border-radius: 0.2rem !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-lg {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.embed-responsive::before {
  display: block;
  content: "";
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.8571428571%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}
.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }

  .float-sm-right {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }
}
@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }

  .float-md-right {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }
}
@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }

  .float-lg-right {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }

  .float-xl-right {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }
}
.user-select-all {
  -webkit-user-select: all !important;
     -moz-user-select: all !important;
      -ms-user-select: all !important;
          user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
     -moz-user-select: auto !important;
      -ms-user-select: auto !important;
          user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
      -ms-user-select: none !important;
          user-select: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }

  .mt-sm-0,
.my-sm-0 {
    margin-top: 0 !important;
  }

  .mr-sm-0,
.mx-sm-0 {
    margin-right: 0 !important;
  }

  .mb-sm-0,
.my-sm-0 {
    margin-bottom: 0 !important;
  }

  .ml-sm-0,
.mx-sm-0 {
    margin-left: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .mt-sm-1,
.my-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mr-sm-1,
.mx-sm-1 {
    margin-right: 0.25rem !important;
  }

  .mb-sm-1,
.my-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-sm-1,
.mx-sm-1 {
    margin-left: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .mt-sm-2,
.my-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mr-sm-2,
.mx-sm-2 {
    margin-right: 0.5rem !important;
  }

  .mb-sm-2,
.my-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-sm-2,
.mx-sm-2 {
    margin-left: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .mt-sm-3,
.my-sm-3 {
    margin-top: 1rem !important;
  }

  .mr-sm-3,
.mx-sm-3 {
    margin-right: 1rem !important;
  }

  .mb-sm-3,
.my-sm-3 {
    margin-bottom: 1rem !important;
  }

  .ml-sm-3,
.mx-sm-3 {
    margin-left: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .mt-sm-4,
.my-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mr-sm-4,
.mx-sm-4 {
    margin-right: 1.5rem !important;
  }

  .mb-sm-4,
.my-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-sm-4,
.mx-sm-4 {
    margin-left: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .mt-sm-5,
.my-sm-5 {
    margin-top: 3rem !important;
  }

  .mr-sm-5,
.mx-sm-5 {
    margin-right: 3rem !important;
  }

  .mb-sm-5,
.my-sm-5 {
    margin-bottom: 3rem !important;
  }

  .ml-sm-5,
.mx-sm-5 {
    margin-left: 3rem !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .pt-sm-0,
.py-sm-0 {
    padding-top: 0 !important;
  }

  .pr-sm-0,
.px-sm-0 {
    padding-right: 0 !important;
  }

  .pb-sm-0,
.py-sm-0 {
    padding-bottom: 0 !important;
  }

  .pl-sm-0,
.px-sm-0 {
    padding-left: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .pt-sm-1,
.py-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pr-sm-1,
.px-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pb-sm-1,
.py-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-sm-1,
.px-sm-1 {
    padding-left: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .pt-sm-2,
.py-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pr-sm-2,
.px-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pb-sm-2,
.py-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-sm-2,
.px-sm-2 {
    padding-left: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .pt-sm-3,
.py-sm-3 {
    padding-top: 1rem !important;
  }

  .pr-sm-3,
.px-sm-3 {
    padding-right: 1rem !important;
  }

  .pb-sm-3,
.py-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pl-sm-3,
.px-sm-3 {
    padding-left: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .pt-sm-4,
.py-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pr-sm-4,
.px-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pb-sm-4,
.py-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-sm-4,
.px-sm-4 {
    padding-left: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .pt-sm-5,
.py-sm-5 {
    padding-top: 3rem !important;
  }

  .pr-sm-5,
.px-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-5,
.py-sm-5 {
    padding-bottom: 3rem !important;
  }

  .pl-sm-5,
.px-sm-5 {
    padding-left: 3rem !important;
  }

  .m-sm-n1 {
    margin: -0.25rem !important;
  }

  .mt-sm-n1,
.my-sm-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-sm-n1,
.mx-sm-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-sm-n1,
.my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-sm-n1,
.mx-sm-n1 {
    margin-left: -0.25rem !important;
  }

  .m-sm-n2 {
    margin: -0.5rem !important;
  }

  .mt-sm-n2,
.my-sm-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-sm-n2,
.mx-sm-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-sm-n2,
.my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-sm-n2,
.mx-sm-n2 {
    margin-left: -0.5rem !important;
  }

  .m-sm-n3 {
    margin: -1rem !important;
  }

  .mt-sm-n3,
.my-sm-n3 {
    margin-top: -1rem !important;
  }

  .mr-sm-n3,
.mx-sm-n3 {
    margin-right: -1rem !important;
  }

  .mb-sm-n3,
.my-sm-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-sm-n3,
.mx-sm-n3 {
    margin-left: -1rem !important;
  }

  .m-sm-n4 {
    margin: -1.5rem !important;
  }

  .mt-sm-n4,
.my-sm-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-sm-n4,
.mx-sm-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-sm-n4,
.my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-sm-n4,
.mx-sm-n4 {
    margin-left: -1.5rem !important;
  }

  .m-sm-n5 {
    margin: -3rem !important;
  }

  .mt-sm-n5,
.my-sm-n5 {
    margin-top: -3rem !important;
  }

  .mr-sm-n5,
.mx-sm-n5 {
    margin-right: -3rem !important;
  }

  .mb-sm-n5,
.my-sm-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-sm-n5,
.mx-sm-n5 {
    margin-left: -3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mt-sm-auto,
.my-sm-auto {
    margin-top: auto !important;
  }

  .mr-sm-auto,
.mx-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-auto,
.my-sm-auto {
    margin-bottom: auto !important;
  }

  .ml-sm-auto,
.mx-sm-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }

  .mt-md-0,
.my-md-0 {
    margin-top: 0 !important;
  }

  .mr-md-0,
.mx-md-0 {
    margin-right: 0 !important;
  }

  .mb-md-0,
.my-md-0 {
    margin-bottom: 0 !important;
  }

  .ml-md-0,
.mx-md-0 {
    margin-left: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .mt-md-1,
.my-md-1 {
    margin-top: 0.25rem !important;
  }

  .mr-md-1,
.mx-md-1 {
    margin-right: 0.25rem !important;
  }

  .mb-md-1,
.my-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-md-1,
.mx-md-1 {
    margin-left: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .mt-md-2,
.my-md-2 {
    margin-top: 0.5rem !important;
  }

  .mr-md-2,
.mx-md-2 {
    margin-right: 0.5rem !important;
  }

  .mb-md-2,
.my-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-md-2,
.mx-md-2 {
    margin-left: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .mt-md-3,
.my-md-3 {
    margin-top: 1rem !important;
  }

  .mr-md-3,
.mx-md-3 {
    margin-right: 1rem !important;
  }

  .mb-md-3,
.my-md-3 {
    margin-bottom: 1rem !important;
  }

  .ml-md-3,
.mx-md-3 {
    margin-left: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .mt-md-4,
.my-md-4 {
    margin-top: 1.5rem !important;
  }

  .mr-md-4,
.mx-md-4 {
    margin-right: 1.5rem !important;
  }

  .mb-md-4,
.my-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-md-4,
.mx-md-4 {
    margin-left: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .mt-md-5,
.my-md-5 {
    margin-top: 3rem !important;
  }

  .mr-md-5,
.mx-md-5 {
    margin-right: 3rem !important;
  }

  .mb-md-5,
.my-md-5 {
    margin-bottom: 3rem !important;
  }

  .ml-md-5,
.mx-md-5 {
    margin-left: 3rem !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .pt-md-0,
.py-md-0 {
    padding-top: 0 !important;
  }

  .pr-md-0,
.px-md-0 {
    padding-right: 0 !important;
  }

  .pb-md-0,
.py-md-0 {
    padding-bottom: 0 !important;
  }

  .pl-md-0,
.px-md-0 {
    padding-left: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .pt-md-1,
.py-md-1 {
    padding-top: 0.25rem !important;
  }

  .pr-md-1,
.px-md-1 {
    padding-right: 0.25rem !important;
  }

  .pb-md-1,
.py-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-md-1,
.px-md-1 {
    padding-left: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .pt-md-2,
.py-md-2 {
    padding-top: 0.5rem !important;
  }

  .pr-md-2,
.px-md-2 {
    padding-right: 0.5rem !important;
  }

  .pb-md-2,
.py-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-md-2,
.px-md-2 {
    padding-left: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .pt-md-3,
.py-md-3 {
    padding-top: 1rem !important;
  }

  .pr-md-3,
.px-md-3 {
    padding-right: 1rem !important;
  }

  .pb-md-3,
.py-md-3 {
    padding-bottom: 1rem !important;
  }

  .pl-md-3,
.px-md-3 {
    padding-left: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .pt-md-4,
.py-md-4 {
    padding-top: 1.5rem !important;
  }

  .pr-md-4,
.px-md-4 {
    padding-right: 1.5rem !important;
  }

  .pb-md-4,
.py-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-md-4,
.px-md-4 {
    padding-left: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .pt-md-5,
.py-md-5 {
    padding-top: 3rem !important;
  }

  .pr-md-5,
.px-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-5,
.py-md-5 {
    padding-bottom: 3rem !important;
  }

  .pl-md-5,
.px-md-5 {
    padding-left: 3rem !important;
  }

  .m-md-n1 {
    margin: -0.25rem !important;
  }

  .mt-md-n1,
.my-md-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-md-n1,
.mx-md-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-md-n1,
.my-md-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-md-n1,
.mx-md-n1 {
    margin-left: -0.25rem !important;
  }

  .m-md-n2 {
    margin: -0.5rem !important;
  }

  .mt-md-n2,
.my-md-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-md-n2,
.mx-md-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-md-n2,
.my-md-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-md-n2,
.mx-md-n2 {
    margin-left: -0.5rem !important;
  }

  .m-md-n3 {
    margin: -1rem !important;
  }

  .mt-md-n3,
.my-md-n3 {
    margin-top: -1rem !important;
  }

  .mr-md-n3,
.mx-md-n3 {
    margin-right: -1rem !important;
  }

  .mb-md-n3,
.my-md-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-md-n3,
.mx-md-n3 {
    margin-left: -1rem !important;
  }

  .m-md-n4 {
    margin: -1.5rem !important;
  }

  .mt-md-n4,
.my-md-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-md-n4,
.mx-md-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-md-n4,
.my-md-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-md-n4,
.mx-md-n4 {
    margin-left: -1.5rem !important;
  }

  .m-md-n5 {
    margin: -3rem !important;
  }

  .mt-md-n5,
.my-md-n5 {
    margin-top: -3rem !important;
  }

  .mr-md-n5,
.mx-md-n5 {
    margin-right: -3rem !important;
  }

  .mb-md-n5,
.my-md-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-md-n5,
.mx-md-n5 {
    margin-left: -3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mt-md-auto,
.my-md-auto {
    margin-top: auto !important;
  }

  .mr-md-auto,
.mx-md-auto {
    margin-right: auto !important;
  }

  .mb-md-auto,
.my-md-auto {
    margin-bottom: auto !important;
  }

  .ml-md-auto,
.mx-md-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }

  .mt-lg-0,
.my-lg-0 {
    margin-top: 0 !important;
  }

  .mr-lg-0,
.mx-lg-0 {
    margin-right: 0 !important;
  }

  .mb-lg-0,
.my-lg-0 {
    margin-bottom: 0 !important;
  }

  .ml-lg-0,
.mx-lg-0 {
    margin-left: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .mt-lg-1,
.my-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mr-lg-1,
.mx-lg-1 {
    margin-right: 0.25rem !important;
  }

  .mb-lg-1,
.my-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-lg-1,
.mx-lg-1 {
    margin-left: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .mt-lg-2,
.my-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mr-lg-2,
.mx-lg-2 {
    margin-right: 0.5rem !important;
  }

  .mb-lg-2,
.my-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-lg-2,
.mx-lg-2 {
    margin-left: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .mt-lg-3,
.my-lg-3 {
    margin-top: 1rem !important;
  }

  .mr-lg-3,
.mx-lg-3 {
    margin-right: 1rem !important;
  }

  .mb-lg-3,
.my-lg-3 {
    margin-bottom: 1rem !important;
  }

  .ml-lg-3,
.mx-lg-3 {
    margin-left: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .mt-lg-4,
.my-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mr-lg-4,
.mx-lg-4 {
    margin-right: 1.5rem !important;
  }

  .mb-lg-4,
.my-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-lg-4,
.mx-lg-4 {
    margin-left: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .mt-lg-5,
.my-lg-5 {
    margin-top: 3rem !important;
  }

  .mr-lg-5,
.mx-lg-5 {
    margin-right: 3rem !important;
  }

  .mb-lg-5,
.my-lg-5 {
    margin-bottom: 3rem !important;
  }

  .ml-lg-5,
.mx-lg-5 {
    margin-left: 3rem !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .pt-lg-0,
.py-lg-0 {
    padding-top: 0 !important;
  }

  .pr-lg-0,
.px-lg-0 {
    padding-right: 0 !important;
  }

  .pb-lg-0,
.py-lg-0 {
    padding-bottom: 0 !important;
  }

  .pl-lg-0,
.px-lg-0 {
    padding-left: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .pt-lg-1,
.py-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pr-lg-1,
.px-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pb-lg-1,
.py-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-lg-1,
.px-lg-1 {
    padding-left: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .pt-lg-2,
.py-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pr-lg-2,
.px-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pb-lg-2,
.py-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-lg-2,
.px-lg-2 {
    padding-left: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .pt-lg-3,
.py-lg-3 {
    padding-top: 1rem !important;
  }

  .pr-lg-3,
.px-lg-3 {
    padding-right: 1rem !important;
  }

  .pb-lg-3,
.py-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pl-lg-3,
.px-lg-3 {
    padding-left: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .pt-lg-4,
.py-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pr-lg-4,
.px-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pb-lg-4,
.py-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-lg-4,
.px-lg-4 {
    padding-left: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .pt-lg-5,
.py-lg-5 {
    padding-top: 3rem !important;
  }

  .pr-lg-5,
.px-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-5,
.py-lg-5 {
    padding-bottom: 3rem !important;
  }

  .pl-lg-5,
.px-lg-5 {
    padding-left: 3rem !important;
  }

  .m-lg-n1 {
    margin: -0.25rem !important;
  }

  .mt-lg-n1,
.my-lg-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-lg-n1,
.mx-lg-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-lg-n1,
.my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-lg-n1,
.mx-lg-n1 {
    margin-left: -0.25rem !important;
  }

  .m-lg-n2 {
    margin: -0.5rem !important;
  }

  .mt-lg-n2,
.my-lg-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-lg-n2,
.mx-lg-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-lg-n2,
.my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-lg-n2,
.mx-lg-n2 {
    margin-left: -0.5rem !important;
  }

  .m-lg-n3 {
    margin: -1rem !important;
  }

  .mt-lg-n3,
.my-lg-n3 {
    margin-top: -1rem !important;
  }

  .mr-lg-n3,
.mx-lg-n3 {
    margin-right: -1rem !important;
  }

  .mb-lg-n3,
.my-lg-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-lg-n3,
.mx-lg-n3 {
    margin-left: -1rem !important;
  }

  .m-lg-n4 {
    margin: -1.5rem !important;
  }

  .mt-lg-n4,
.my-lg-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-lg-n4,
.mx-lg-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-lg-n4,
.my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-lg-n4,
.mx-lg-n4 {
    margin-left: -1.5rem !important;
  }

  .m-lg-n5 {
    margin: -3rem !important;
  }

  .mt-lg-n5,
.my-lg-n5 {
    margin-top: -3rem !important;
  }

  .mr-lg-n5,
.mx-lg-n5 {
    margin-right: -3rem !important;
  }

  .mb-lg-n5,
.my-lg-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-lg-n5,
.mx-lg-n5 {
    margin-left: -3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mt-lg-auto,
.my-lg-auto {
    margin-top: auto !important;
  }

  .mr-lg-auto,
.mx-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-auto,
.my-lg-auto {
    margin-bottom: auto !important;
  }

  .ml-lg-auto,
.mx-lg-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }

  .mt-xl-0,
.my-xl-0 {
    margin-top: 0 !important;
  }

  .mr-xl-0,
.mx-xl-0 {
    margin-right: 0 !important;
  }

  .mb-xl-0,
.my-xl-0 {
    margin-bottom: 0 !important;
  }

  .ml-xl-0,
.mx-xl-0 {
    margin-left: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .mt-xl-1,
.my-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mr-xl-1,
.mx-xl-1 {
    margin-right: 0.25rem !important;
  }

  .mb-xl-1,
.my-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-xl-1,
.mx-xl-1 {
    margin-left: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .mt-xl-2,
.my-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mr-xl-2,
.mx-xl-2 {
    margin-right: 0.5rem !important;
  }

  .mb-xl-2,
.my-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-xl-2,
.mx-xl-2 {
    margin-left: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .mt-xl-3,
.my-xl-3 {
    margin-top: 1rem !important;
  }

  .mr-xl-3,
.mx-xl-3 {
    margin-right: 1rem !important;
  }

  .mb-xl-3,
.my-xl-3 {
    margin-bottom: 1rem !important;
  }

  .ml-xl-3,
.mx-xl-3 {
    margin-left: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .mt-xl-4,
.my-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mr-xl-4,
.mx-xl-4 {
    margin-right: 1.5rem !important;
  }

  .mb-xl-4,
.my-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-xl-4,
.mx-xl-4 {
    margin-left: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .mt-xl-5,
.my-xl-5 {
    margin-top: 3rem !important;
  }

  .mr-xl-5,
.mx-xl-5 {
    margin-right: 3rem !important;
  }

  .mb-xl-5,
.my-xl-5 {
    margin-bottom: 3rem !important;
  }

  .ml-xl-5,
.mx-xl-5 {
    margin-left: 3rem !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .pt-xl-0,
.py-xl-0 {
    padding-top: 0 !important;
  }

  .pr-xl-0,
.px-xl-0 {
    padding-right: 0 !important;
  }

  .pb-xl-0,
.py-xl-0 {
    padding-bottom: 0 !important;
  }

  .pl-xl-0,
.px-xl-0 {
    padding-left: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .pt-xl-1,
.py-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pr-xl-1,
.px-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pb-xl-1,
.py-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-xl-1,
.px-xl-1 {
    padding-left: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .pt-xl-2,
.py-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pr-xl-2,
.px-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pb-xl-2,
.py-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-xl-2,
.px-xl-2 {
    padding-left: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .pt-xl-3,
.py-xl-3 {
    padding-top: 1rem !important;
  }

  .pr-xl-3,
.px-xl-3 {
    padding-right: 1rem !important;
  }

  .pb-xl-3,
.py-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pl-xl-3,
.px-xl-3 {
    padding-left: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .pt-xl-4,
.py-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pr-xl-4,
.px-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pb-xl-4,
.py-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-xl-4,
.px-xl-4 {
    padding-left: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .pt-xl-5,
.py-xl-5 {
    padding-top: 3rem !important;
  }

  .pr-xl-5,
.px-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-5,
.py-xl-5 {
    padding-bottom: 3rem !important;
  }

  .pl-xl-5,
.px-xl-5 {
    padding-left: 3rem !important;
  }

  .m-xl-n1 {
    margin: -0.25rem !important;
  }

  .mt-xl-n1,
.my-xl-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-xl-n1,
.mx-xl-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-xl-n1,
.my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-xl-n1,
.mx-xl-n1 {
    margin-left: -0.25rem !important;
  }

  .m-xl-n2 {
    margin: -0.5rem !important;
  }

  .mt-xl-n2,
.my-xl-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-xl-n2,
.mx-xl-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-xl-n2,
.my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-xl-n2,
.mx-xl-n2 {
    margin-left: -0.5rem !important;
  }

  .m-xl-n3 {
    margin: -1rem !important;
  }

  .mt-xl-n3,
.my-xl-n3 {
    margin-top: -1rem !important;
  }

  .mr-xl-n3,
.mx-xl-n3 {
    margin-right: -1rem !important;
  }

  .mb-xl-n3,
.my-xl-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-xl-n3,
.mx-xl-n3 {
    margin-left: -1rem !important;
  }

  .m-xl-n4 {
    margin: -1.5rem !important;
  }

  .mt-xl-n4,
.my-xl-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-xl-n4,
.mx-xl-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-xl-n4,
.my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-xl-n4,
.mx-xl-n4 {
    margin-left: -1.5rem !important;
  }

  .m-xl-n5 {
    margin: -3rem !important;
  }

  .mt-xl-n5,
.my-xl-n5 {
    margin-top: -3rem !important;
  }

  .mr-xl-n5,
.mx-xl-n5 {
    margin-right: -3rem !important;
  }

  .mb-xl-n5,
.my-xl-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-xl-n5,
.mx-xl-n5 {
    margin-left: -3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mt-xl-auto,
.my-xl-auto {
    margin-top: auto !important;
  }

  .mr-xl-auto,
.mx-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-auto,
.my-xl-auto {
    margin-bottom: auto !important;
  }

  .ml-xl-auto,
.mx-xl-auto {
    margin-left: auto !important;
  }
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }

  .text-md-right {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }

  .text-lg-right {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }

  .text-xl-right {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #fff !important;
}

.text-primary {
  color: #fed136 !important;
}

a.text-primary:hover, a.text-primary:focus {
  color: #e6b301 !important;
}

.text-secondary {
  color: #6c757d !important;
}

a.text-secondary:hover, a.text-secondary:focus {
  color: #494f54 !important;
}

.text-success {
  color: #28a745 !important;
}

a.text-success:hover, a.text-success:focus {
  color: #19692c !important;
}

.text-info {
  color: #17a2b8 !important;
}

a.text-info:hover, a.text-info:focus {
  color: #0f6674 !important;
}

.text-warning {
  color: #fed136 !important;
}

a.text-warning:hover, a.text-warning:focus {
  color: #e6b301 !important;
}

.text-danger {
  color: #dc3545 !important;
}

a.text-danger:hover, a.text-danger:focus {
  color: #a71d2a !important;
}

.text-light {
  color: #f8f9fa !important;
}

a.text-light:hover, a.text-light:focus {
  color: #cbd3da !important;
}

.text-dark {
  color: #343a40 !important;
}

a.text-dark:hover, a.text-dark:focus {
  color: #121416 !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  word-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media print {
  *,
*::before,
*::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  abbr[title]::after {
    content: " (" attr(title) ")";
  }

  pre {
    white-space: pre-wrap !important;
  }

  pre,
blockquote {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
img {
    page-break-inside: avoid;
  }

  p,
h2,
h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
h3 {
    page-break-after: avoid;
  }

  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }

  .container {
    min-width: 992px !important;
  }

  .navbar {
    display: none;
  }

  .badge {
    border: 1px solid #000;
  }

  .table {
    border-collapse: collapse !important;
  }
  .table td,
.table th {
    background-color: #fff !important;
  }

  .table-bordered th,
.table-bordered td {
    border: 1px solid #dee2e6 !important;
  }

  .table-dark {
    color: inherit;
  }
  .table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
    border-color: #dee2e6;
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6;
  }
}
body {
  overflow-x: hidden;
}

p {
  line-height: 1.75;
}

.page-section {
  padding: 6rem 0;
}
.page-section h2.section-heading {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.page-section h3.section-subheading {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  section {
    padding: 9rem 0;
  }
}
::-moz-selection {
  background: #fed136;
  text-shadow: none;
}

::selection {
  background: #fed136;
  text-shadow: none;
}

img::-moz-selection {
  background: transparent;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

.btn-xl {
  padding: 1.25rem 2.5rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 700;
}

.btn-social {
  height: 2.5rem;
  width: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 100%;
}

#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #212529;
}
#mainNav .navbar-toggler {
  padding: 0.75rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.75rem;
  color: #fff;
  text-transform: uppercase;
  background-color: #fed136;
  border: 0;
}
#mainNav .navbar-brand {
  color: #fed136;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  letter-spacing: 0.0625em;
  text-transform: uppercase;
}
#mainNav .navbar-brand img {
  height: 1.5rem;
}
#mainNav .navbar-nav .nav-item .nav-link {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.95rem;
  color: #fff;
  letter-spacing: 0.0625em;
}
#mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {
  color: #fed136;
}

@media (min-width: 992px) {
  #mainNav {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: none;
    background-color: #212529;
    transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
  }
  #mainNav .navbar-brand {
    font-size: 1.5em;
    transition: font-size 0.3s ease-in-out;
  }
  #mainNav .navbar-brand img {
    height: 2rem;
    transition: height 0.3s ease-in-out;
  }
  #mainNav.navbar-shrink {
    /* padding-top: 1rem;
    padding-bottom: 1rem; */
    padding-top: 0rem;
    padding-bottom: 0rem;
    background-color: #212529;
  }
  #mainNav.navbar-shrink .navbar-brand {
    font-size: 1.25em;
  }
  #mainNav.navbar-shrink .navbar-brand svg,
#mainNav.navbar-shrink .navbar-brand img {
    height: 1.5rem;
  }
  #mainNav .navbar-nav .nav-item {
    margin-right: 1rem;
  }
  #mainNav .navbar-nav .nav-item:last-child {
    margin-right: 0;
  }
}
header.masthead {
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: #fff;
  /* background-image: url("../../../../assets/img/header-bg.jpg"); */
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}
header.masthead .masthead-subheading {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
header.masthead .masthead-heading {
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 2rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 17rem;
    padding-bottom: 12.5rem;
  }
  header.masthead .masthead-subheading {
    font-size: 2.25rem;
    font-style: italic;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
  header.masthead .masthead-heading {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
}
#portfolio .portfolio-item {
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
}
#portfolio .portfolio-item .portfolio-link {
  position: relative;
  display: block;
  margin: 0 auto;
}
#portfolio .portfolio-item .portfolio-link .portfolio-hover {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(254, 209, 54, 0.9);
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease-in-out 0.25s;
}
#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
  font-size: 1.25rem;
  color: white;
}
#portfolio .portfolio-item .portfolio-link:hover .portfolio-hover {
  opacity: 1;
}
#portfolio .portfolio-item .portfolio-caption {
  padding: 1.5rem;
  text-align: center;
  background-color: #fff;
}
#portfolio .portfolio-item .portfolio-caption .portfolio-caption-heading {
  font-size: 1.5rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  margin-bottom: 0;
}
#portfolio .portfolio-item .portfolio-caption .portfolio-caption-subheading {
  font-style: italic;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.portfolio-modal .modal-dialog {
  margin: 1rem;
  max-width: 100vw;
}
.portfolio-modal .modal-content {
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;
}
.portfolio-modal .modal-content h2 {
  font-size: 3rem;
  line-height: 3rem;
}
.portfolio-modal .modal-content p.item-intro {
  font-style: italic;
  margin-bottom: 2rem;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.portfolio-modal .modal-content p {
  margin-bottom: 2rem;
}
.portfolio-modal .modal-content ul.list-inline {
  margin-bottom: 2rem;
}
.portfolio-modal .modal-content img {
  margin-bottom: 2rem;
}
.portfolio-modal .close-modal {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: transparent;
}
.portfolio-modal .close-modal:hover {
  opacity: 0.3;
}

.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  content: "";
  background-color: #e9ecef;
}
.timeline > li {
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
}
.timeline > li:after, .timeline > li:before {
  display: table;
  content: " ";
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline-panel {
  position: relative;
  float: right;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline-image {
  position: absolute;
  z-index: 100;
  left: 0;
  width: 80px;
  height: 80px;
  margin-left: 0;
  text-align: center;
  color: white;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #fed136;
}
.timeline > li .timeline-image h4 {
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 0;
}
.timeline .timeline-heading h4 {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline-heading h4.subheading {
  text-transform: none;
}
.timeline .timeline-body > ul,
.timeline .timeline-body > p {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    min-height: 100px;
    margin-bottom: 100px;
  }
  .timeline > li .timeline-panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline-image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline-image h4 {
    font-size: 13px;
    line-height: 18px;
    margin-top: 16px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}
@media (min-width: 992px) {
  .timeline > li {
    min-height: 150px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4 {
    font-size: 18px;
    line-height: 26px;
    margin-top: 30px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 20px 20px;
  }
}
@media (min-width: 1200px) {
  .timeline > li {
    min-height: 170px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px 100px;
  }
  .timeline > li .timeline-image {
    width: 170px;
    height: 170px;
    margin-left: -85px;
  }
  .timeline > li .timeline-image h4 {
    margin-top: 40px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 100px 20px 20px;
  }
}
.team-member {
  margin-bottom: 3rem;
  text-align: center;
}
.team-member img {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
}
.team-member h4 {
  margin-top: 1.5rem;
  margin-bottom: 0;
}

section#contact {
  background-color: #212529;
  background-image: url("../../../../../assets/img/map-image.png");
  background-repeat: no-repeat;
  background-position: center;
}
section#contact .section-heading {
  color: #fff;
}
section#contact form#contactForm .form-group {
  margin-bottom: 1.5rem;
}
section#contact form#contactForm .form-group input,
section#contact form#contactForm .form-group textarea {
  padding: 1.25rem;
}
section#contact form#contactForm .form-group input.form-control {
  height: auto;
}
section#contact form#contactForm .form-group-textarea {
  height: 94%;
}
section#contact form#contactForm .form-group-textarea textarea {
  height: 97%;
min-height: 8rem;
}
section#contact form#contactForm p.help-block {
  margin: 0;
}
section#contact form#contactForm .form-control:focus {
  border-color: #fed136;
  box-shadow: none;
}
section#contact form#contactForm ::-webkit-input-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
section#contact form#contactForm :-moz-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
section#contact form#contactForm ::-moz-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
section#contact form#contactForm :-ms-input-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}

.footer {
  text-align: center;
  font-size: 0.9rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
#about {
  padding: 80px 0;
  color: #444;
  background: #f4d03f;
  background: -moz-linear-gradient(top, #f4d03f 70%, #c3a632 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(70%, #f4d03f), color-stop(100%, #c3a632));
  background: -webkit-linear-gradient(top, #f4d03f 70%, #c3a632 100%);
  background: -o-linear-gradient(top, #f4d03f 70%, #c3a632 100%);
  background: -ms-linear-gradient(top, #f4d03f 70%, #c3a632 100%);
  background: linear-gradient(to bottom, #f4d03f 70%, #c3a632 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f4d03f', endColorstr='#c3a632', GradientType=0 );
}
#about .about-text {
  margin-left: 10px;
}
#about .padding-left {
  padding-left: 50px;
}
#about i.fa {
  float: left;
  display: block;
  margin-right: 15px;
  color: #fff;
  font-size: 24px;
  text-shadow: 0 0 1px #666;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right !important;
}
.btn {
  min-width: auto;
}
.letfDiv{
  float: right;
}
.letfDiv a{
  margin-top: 0px;
} 
.logoImg {
  vertical-align: middle;
  border-style: none;
  width: 70px;
  height: 70px;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
</style>
`;


/***/ }),

/***/ "./src/app/shared/language-translation/language-translation.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/language-translation/language-translation.module.ts ***!
  \****************************************************************************/
/*! exports provided: createTranslateLoader, LanguageTranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageTranslationModule", function() { return LanguageTranslationModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/**
 * This module is used to language translations.
 * The translations are saved in a json file in /src/app/assets/i18n directory
 * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
 */


// import ngx-translate and the http loader




// ngx-translate - required for AOT compilation
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class LanguageTranslationModule {
    constructor(translate) {
        this.translate = translate;
        // Gets Default language from browser if available, otherwise set English ad default
        this.translate.addLangs(['en', 'ch']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|ch/) ? browserLang : 'en');
    }
}
LanguageTranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LanguageTranslationModule });
LanguageTranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LanguageTranslationModule_Factory(t) { return new (t || LanguageTranslationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                }
            })
        ],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LanguageTranslationModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LanguageTranslationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                            useFactory: createTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                        }
                    })
                ],
                exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/toastrService/toast.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/toastrService/toast.module.ts ***!
  \******************************************************/
/*! exports provided: ToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return ToastModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toaster_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster-container.component */ "./src/app/shared/toastrService/toaster-container.component.ts");
/* harmony import */ var _toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.component */ "./src/app/shared/toastrService/toaster.component.ts");





class ToastModule {
}
ToastModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ToastModule });
ToastModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ToastModule_Factory(t) { return new (t || ToastModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToastModule, { declarations: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]],
                exports: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/toastrService/toaster-container.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/toastrService/toaster-container.component.ts ***!
  \*********************************************************************/
/*! exports provided: ToasterContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function() { return ToasterContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.component */ "./src/app/shared/toastrService/toaster.component.ts");





function ToasterContainerComponent_app_toaster_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toaster", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ToasterContainerComponent_app_toaster_0_Template_app_toaster_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toast", toast_r1)("i", i_r2);
} }
class ToasterContainerComponent {
    constructor(toaster) {
        this.toaster = toaster;
        this.toasts = [];
    }
    ngOnInit() {
        this.toaster.toast$
            .subscribe(toast => {
            this.toasts = [toast, ...this.toasts];
            setTimeout(() => this.toasts.pop(), toast.delay || 1000);
        });
    }
    remove(index) {
        this.toasts = this.toasts.filter((v, i) => i !== index);
        //this.toasts.splice(index, 1);
    }
}
ToasterContainerComponent.ɵfac = function ToasterContainerComponent_Factory(t) { return new (t || ToasterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"])); };
ToasterContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToasterContainerComponent, selectors: [["app-toaster-container"]], decls: 1, vars: 1, consts: [[3, "toast", "i", "remove", 4, "ngFor", "ngForOf"], [3, "toast", "i", "remove"]], template: function ToasterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToasterContainerComponent_app_toaster_0_Template, 1, 2, "app-toaster", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toaster-container',
                template: `
    <app-toaster *ngFor="let toast of toasts; let i=index"
      [toast]="toast" [i]="i"
      (remove)="remove($event)"></app-toaster>
  `,
                styles: []
            }]
    }], function () { return [{ type: _toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/toastrService/toaster.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/toastrService/toaster.component.ts ***!
  \***********************************************************/
/*! exports provided: ToasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterComponent", function() { return ToasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToasterComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ToasterComponent.ɵfac = function ToasterComponent_Factory(t) { return new (t || ToasterComponent)(); };
ToasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToasterComponent, selectors: [["app-toaster"]], inputs: { toast: "toast", i: "i" }, outputs: { remove: "remove" }, decls: 7, vars: 7, consts: [[1, "toast-heading"], [1, "close", 3, "click"]], template: function ToasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToasterComponent_Template_a_click_5_listener() { return ctx.remove.emit(ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toast toast-", ctx.toast.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("bottom", ctx.i * 100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toast.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toast.body);
    } }, styles: [".toast[_ngcontent-%COMP%] {\n      position: fixed;\n      right: 0;\n      top: 10px;\n      width: 300px;\n      z-index: 100000000;\n      height: 80px;\n      padding: .75rem 1.25rem;\n      margin-top: 1rem;\n      border: 1px solid transparent;\n      border-radius: .25rem;\n      animation: move 0.3s both;\n    }\n\n    .toast-success[_ngcontent-%COMP%] {\n      color: #155724;\n      background-color: #d4edda;\n      border-color: #c3e6cb;\n    }\n\n    .toast-error[_ngcontent-%COMP%] {\n      color: #721c24;\n      background-color: #f8d7da;\n      border-color: #f5c6cb;\n    }\n\n    .toast-warning[_ngcontent-%COMP%] {\n      color: #856404;\n      background-color: #fff3cd;\n      border-color: #ffeeba;\n    }\n\n    .close[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 7px;\n      right: 10px;\n      font-size: 1.5em;\n      cursor: pointer;\n    }\n\n    .toast-heading[_ngcontent-%COMP%] {\n      margin-top: 10px;\n    }\n\n    @keyframes move {\n      from {\n        transform: translateX(100%);\n      }\n      to {\n        transform: translateX(0);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toaster',
                template: `
    <div class="toast toast-{{toast.type}}"
      [style.bottom.px]="i*100">
      <h4 class="toast-heading">{{toast.title}}</h4>
      <p>{{toast.body}}</p>
      <a class="close" (click)="remove.emit(i)">&times;</a>
    </div>
  `,
                styles: [`
    .toast {
      position: fixed;
      right: 0;
      top: 10px;
      width: 300px;
      z-index: 100000000;
      height: 80px;
      padding: .75rem 1.25rem;
      margin-top: 1rem;
      border: 1px solid transparent;
      border-radius: .25rem;
      animation: move 0.3s both;
    }

    .toast-success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    .toast-error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }

    .toast-warning {
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
    }

    .close {
      position: absolute;
      top: 7px;
      right: 10px;
      font-size: 1.5em;
      cursor: pointer;
    }

    .toast-heading {
      margin-top: 10px;
    }

    @keyframes move {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
  `]
            }]
    }], null, { toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], i: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/toastrService/toaster.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/toastrService/toaster.service.ts ***!
  \*********************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class ToasterService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.toast$ = this.subject.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(toast => toast !== null));
    }
    show(type, title, body, delay) {
        this.subject.next({ type, title, body, delay });
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/userService/auth/auth.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/userService/auth/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.userService.isLoggedIn(next.data)) {
            this.router.navigateByUrl(this.userService.loginURL);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/userService/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/userService/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginURL = '/login';
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    //for preview landing page setting
    setLocalSetting(data) {
        localStorage.setItem('data', JSON.stringify(data));
    }
    getLocalSetting() {
        return JSON.parse(localStorage.getItem('data'));
    }
    deleteLocalSetting() {
        localStorage.removeItem('data');
    }
    //For login & register
    postRequest(URL, data = {}, header = true) {
        if (header)
            return this.http.post(URL, data, this.getHeader());
        else
            return this.http.post(URL, data, this.noAuthHeader);
    }
    getRequest(URL, header = false) {
        if (header)
            return this.http.get(URL, this.getHeader());
        else
            return this.http.get(URL, this.noAuthHeader);
    }
    gotoFirstPage() {
        var token = this.getToken();
        if (token) {
            const role = this.getToken().userInfo.role;
            if (role == 'super' || role == 'system')
                this.router.navigateByUrl('admin');
            else if (role == 'admin')
                this.router.navigateByUrl('company');
            else
                this.router.navigateByUrl('map');
        }
        else {
            this.router.navigateByUrl('');
        }
    }
    setToken(token) {
        localStorage.setItem('token', JSON.stringify(token));
    }
    getToken() {
        return JSON.parse(localStorage.getItem('token'));
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    getUserPayload() {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token['token'].split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    }
    isLoggedIn(data = {}) {
        var userPayload = this.getUserPayload();
        if (userPayload) {
            const role = this.getToken().userInfo.role;
            if (data.role == undefined)
                return userPayload.exp > Date.now() / 1000;
            else if (data.role.indexOf(role) != -1)
                return userPayload.exp > Date.now() / 1000;
        }
        else
            return false;
    }
    getHeader() {
        if (!this.getToken()) {
            this.router.navigateByUrl(this.loginURL);
            return;
        }
        else if (!this.isLoggedIn()) {
            this.router.navigateByUrl(this.loginURL);
            return;
        }
        const header = { headers: { Authorization: `Bearer ${this.getToken().token}` }, user: this.getToken().userInfo };
        return header;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'localhost:3000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Angular\GIS\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map