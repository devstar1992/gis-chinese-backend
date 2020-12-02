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
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/error/error.component */ "./src/app/components/pages/error/error.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _shared_Service_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Service/userService/auth/auth.guard */ "./src/app/shared/Service/userService/auth/auth.guard.ts");







const routes = [
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    {
        path: 'map',
        canActivate: [_shared_Service_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | components-map-map-module */ "components-map-map-module").then(__webpack_require__.bind(null, /*! ./components/map/map.module */ "./src/app/components/map/map.module.ts")).then(m => m.MapModule)
    },
    { path: 'login', component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] },
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
/* harmony import */ var _shared_Module_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Module/toaster/toaster-container.component */ "./src/app/shared/Module/toaster/toaster-container.component.ts");







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
        ])], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toaster-container");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_Module_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_4__["ToasterContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Module/language-translation/language-translation.module */ "./src/app/shared/Module/language-translation/language-translation.module.ts");
/* harmony import */ var _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Module/toaster/toast.module */ "./src/app/shared/Module/toaster/toast.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/error/error.component */ "./src/app/components/pages/error/error.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _shared_Module_preloader_preloader_componentRect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/Module/preloader/preloader.componentRect */ "./src/app/shared/Module/preloader/preloader.componentRect.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_2__["LanguageTranslationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_3__["ToastModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
        _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _shared_Module_preloader_preloader_componentRect__WEBPACK_IMPORTED_MODULE_10__["PreloaderComponentRect"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_2__["LanguageTranslationModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_3__["ToastModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
                    _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _shared_Module_preloader_preloader_componentRect__WEBPACK_IMPORTED_MODULE_10__["PreloaderComponentRect"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_2__["LanguageTranslationModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_3__["ToastModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


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

/***/ "./src/app/components/pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/userService/user.service */ "./src/app/shared/Service/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Module/toaster/toaster.service */ "./src/app/shared/Module/toaster/toaster.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LoginComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."));
} }
function LoginComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "at least 8 length"), "");
} }
function LoginComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."));
} }
class LoginComponent {
    constructor(userService, router, _formBuilder, toastr, translate) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.translate = translate;
        this.currentLanguage = "en";
        this.LanguageImage = {
            en: "assets/img/country/us-flag.png",
            ch: "assets/img/country/china-flag.png",
        };
    }
    ngOnInit() {
        this.formGroup = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['agent', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.formGroupP = this._formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['']
        });
    }
    //LanguageChagePart
    changeLang(language) {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        this.translate.use(language);
    }
    passwordReset() {
        this.formGroupP.value.role = this.formGroup.value.role;
        this.userService.postRequest("api/resetPassword", this.formGroupP.value, false).subscribe(res => {
            this.Toaster('success', '', 'New password is ' + res['result'], 4000);
        }, err => {
            this.handleError(err);
        });
    }
    login() {
        const loginData = this.formGroup.value;
        const role = this.formGroup.value.role;
        if (role == "admin")
            this.loginAdmin(loginData);
        else if (role == "agent")
            this.loginAgent(loginData);
        else if (role == "user")
            this.loginUser(loginData);
    }
    loginAdmin(data) {
        this.userService.postRequest('api/loginAdmin', data, false).subscribe(res => {
            this.userService.setToken({
                token: res['token'],
                userInfo: res['userInfo'],
                role: data.role,
                expiresAt: res['expiresAt']
            });
            this.Toaster('success', '', 'Welcome');
            this.userService.gotoFirstPage();
        }, err => {
            this.handleError(err);
        });
    }
    loginAgent(data) {
        this.userService.postRequest('api/loginAgent', data, false).subscribe(res => {
            this.userService.setToken({
                token: res['token'],
                userInfo: res['userInfo'],
                role: data.role,
                expiresAt: res['expiresAt']
            });
            this.Toaster('success', '', 'Welcome');
            this.userService.gotoFirstPage();
        }, err => {
            this.handleError(err);
        });
    }
    loginUser(data) {
        this.userService.postRequest('api/loginUser', data, false).subscribe(res => {
            this.userService.setToken({
                token: res['token'],
                userInfo: res['userInfo'],
                role: data.role,
                expiresAt: res['expiresAt']
            });
            this.Toaster('success', '', 'Welcome');
            this.userService.gotoFirstPage();
        }, err => {
            this.handleError(err);
        });
    }
    //toastr functions
    handleError(err) {
        if (err.status == 504)
            this.Toaster('error', '', 'server is not responsing.', 4000);
        else
            this.Toaster('error', '', err.error.message, 1500);
    }
    Toaster(style, msgtopic, msgContent, time = 2000) {
        this.toastr.show(style, msgtopic, msgContent, time);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 106, vars: 51, consts: [[1, "loginWrapper", "clearfix"], [1, "banWrapper", 2, "background", "#262626", "background-image", "url('assets/img/costic/default-login.jpg')", "background-size", "cover"], [1, "loginMain"], ["id", "ms-nav-options", 1, "ms-nav-list", "ms-inline", "mb-0"], [1, "ms-nav-item", "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "media", "p-2", "mousePointer"], [1, "ms-chat-img", "mr-2", "align-self-center"], [1, "ms-img-round", "ms-img-round123", 3, "src"], [1, "media-body"], [1, "username"], ["aria-labelledby", "languageDropdown", 1, "dropdown-menu", "dropdown-menu-right", "user-dropdown"], [1, "ms-scrollable", "ms-dropdown-list"], [1, "media", "p-2", "mousePointer", 3, "click"], [1, "loginWidth"], [1, "loginLogoDiv"], ["href", "http://vdms.aidetecting.com/", 1, "loginLogo"], ["src", "assets/img/logo.png"], ["novalidate", "", 1, "formLogin", "needs-validation", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "ms-list", "d-flex"], [1, "ms-list-item", "pl-0"], [1, "ms-checkbox-wrap"], ["type", "radio", "name", "role", "formControlName", "role", "value", "admin"], [1, "ms-checkbox-check"], [1, "ms-list-item"], ["type", "radio", "name", "role", "formControlName", "role", "value", "agent"], ["type", "radio", "name", "role", "formControlName", "role", "value", "user"], [1, "mb-3"], [1, "input-group", "loginList", "loginListUser"], ["type", "text", "formControlName", "username", 1, "loginText", 3, "placeholder"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "mb-2"], [1, "input-group", "loginList", "loginListPwd"], ["type", "password", "formControlName", "password", "minlength", "8", 1, "loginText", 3, "placeholder"], [1, "loginList"], ["data-toggle", "modal", "data-toggle", "modal", "data-target", "#modal-12"], ["type", "submit", "id", "loginBtn", 1, "loginBtn", 2, "background", "rgb(3, 197, 255)", 3, "value"], [1, "have"], ["href", "http://vdms.aidetecting.com/"], ["id", "modal-12", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-12", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-min"], [1, "modal-content"], [1, "modal-body", "text-center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "flaticon-secure-shield", "d-block"], [1, "formLogin", "needs-validation", 3, "formGroup"], ["myformP", "ngForm"], [1, "ms-form-group", "has-icon"], ["type", "text", "name", "forgot-password", "formControlName", "phone", 1, "form-control", 3, "placeholder"], [1, "material-icons"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], [1, "invalid-feedback", 2, "display", "block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() { return ctx.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_20_listener() { return ctx.changeLang("ch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Chinese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "IamFlyBird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_32_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, LoginComponent_div_61_Template, 3, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, LoginComponent_div_67_Template, 3, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "form", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, LoginComponent_div_102_Template, 3, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_103_listener() { return ctx.passwordReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.LanguageImage[ctx.currentLanguage], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 23, "Language"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.LanguageImage["en"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.LanguageImage["ch"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 25, "admin"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 27, "agent"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 29, "user"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 31, "phone_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get("username").invalid && (_r0.submitted || ctx.formGroup.get("username").dirty || ctx.formGroup.get("username").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 33, "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get("password").invalid && (_r0.submitted || ctx.formGroup.get("password").dirty || ctx.formGroup.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 35, "ForgotPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 37, "login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 39, "I have not account."), "\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 41, "register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 43, "register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 45, "Enter your phone number to recover your password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroupP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 47, "phone_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroupP.get("phone").invalid && (_r3.submitted || ctx.formGroupP.get("phone").dirty || ctx.formGroupP.get("phone").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroupP.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 49, "reset password"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".ms-img-round123[_ngcontent-%COMP%] {\r\n    width: 23px;\r\n    height: 23px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 23px;\r\n    height: 23px;\r\n}\r\n.ms-nav-list[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 0px;\r\n    cursor: pointer;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n    top: -28px;\r\n    color: #db3c36;\r\n}\r\n.loginWrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-width: 1200px;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    font-size: 14px;\r\n    color: #909090;\r\n}\r\n.clear[_ngcontent-%COMP%], .clearfix[_ngcontent-%COMP%] {\r\n    zoom: 1;\r\n}\r\n.banWrapper[_ngcontent-%COMP%] {\r\n    float: left;\r\n    position: relative;\r\n    width: 60%;\r\n    height: 100%;\r\n    background: #00a7f2;\r\n}\r\n.banContent[_ngcontent-%COMP%]{width: 700px; height: 500px; position: absolute; left: 50%; top: 50%; margin-top: -250px; margin-left: -350px;}\r\n.loginMain[_ngcontent-%COMP%] {\r\n    float: right;\r\n    position: relative;\r\n    width: 40%;\r\n    height: 100%;\r\n    background: #fff;\r\n}\r\n.loginWidth[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    padding-bottom: 30px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 150px;\r\n    margin-left: -250px;\r\n}\r\n.formLogin[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    padding-top: 40px;\r\n    margin: 0 auto;\r\n}\r\n.loginLogoDiv[_ngcontent-%COMP%]{width: 350px; height: 50px; margin: 0 auto;}\r\n.loginLogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display: block; width: auto; height: -webkit-fill-available;display: inline-flex;margin-bottom: 10px;}\r\n.loginLogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{    \r\n    font-family: emoji;\r\n    font-size: 33px;\r\n    font-style: italic;\r\n    color: grey;\r\n}\r\n.loginList[_ngcontent-%COMP%]{position: relative; height: 38px; line-height: 38px; width: 300px; padding: 2px 18px 2px 32px; margin-bottom: 16px; border-bottom: 1px solid #e7e7e7;}\r\n.loginList[_ngcontent-%COMP%]   .loginText[_ngcontent-%COMP%]{height: 24px; line-height: 24px; padding: 7px 0; width: 300px;color: #606060; border: 0 none; padding-bottom: 0px;}\r\n.loginList[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position: absolute;left: 2px; top: 10px; width: 20px; height: 24px; background: url('loginicon.png') no-repeat;}\r\n.loginListUser[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position: -58px -4px;}\r\n.loginListPwd[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position: -28px -3px;}\r\n.loginListCode[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position: -3px -3px;}\r\np.loginList[_ngcontent-%COMP%]{text-align: right; width: 100%; padding: 0; font-size: 13px; margin-bottom:0; height: 16px; line-height: 16px; border: 0 none;}\r\np.loginList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #00BDFF;}\r\n.loginBtn[_ngcontent-%COMP%]{cursor: pointer; width: 100%; height: 46px; line-height: 46px; margin-top: 20px; background: #00BDFF; border-radius: 2px; color: #fff; border: 0 none; letter-spacing:4px; font-size:16px;}\r\n.loginBtn[_ngcontent-%COMP%]:hover{background: #04bff7;}\r\n.have[_ngcontent-%COMP%]{text-align: right; height: 20px; line-height: 20px; padding-top: 16px;}\r\n.have[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height: 20px; padding: 0 10px;background: url('loginicon.png') -52px -37px no-repeat;}\r\n.have[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #00BDFF;}\r\n@media only screen and (max-width: 1360px){\r\n\t.loginLogoDiv[_ngcontent-%COMP%]{width: 290px;}\r\n\t.formLogin[_ngcontent-%COMP%], .tab-wrapper[_ngcontent-%COMP%], .code-wrapper[_ngcontent-%COMP%]{width: 290px;}\r\n\t.loginList[_ngcontent-%COMP%]{width: 240px;}\r\n\t.loginList[_ngcontent-%COMP%]   .loginText[_ngcontent-%COMP%]{width: 240px;}\r\n\t.errorTips[_ngcontent-%COMP%]{left: 295px;}\r\n}\r\n@media only screen and (max-width: 800px){\r\n\t.tab-wrapper[_ngcontent-%COMP%]{width: 230px;}\r\n\t.loginLogoDiv[_ngcontent-%COMP%]{text-align: center; width: 100%;}\r\n\t.loginLogo[_ngcontent-%COMP%]{margin: 0 auto;}\r\n\t.loginWrapper[_ngcontent-%COMP%]{width: 100%; min-width: 100%;}\r\n\t.banWrapper[_ngcontent-%COMP%]{display: none;}\r\n\t.loginMain[_ngcontent-%COMP%]{width: 100%;}\r\n\t.loginWidth[_ngcontent-%COMP%]{width: 100%; left: 0; margin-left: 0;}\r\n\t.errorTips[_ngcontent-%COMP%]{left: 30px; top: auto; bottom: -22px; z-index: 1;}\r\n\r\n\t.formLogin[_ngcontent-%COMP%]{width: 100%; padding: 0 20px; margin-top: 40px; box-sizing: border-box; -webkit-box-sizing: border-box;}\r\n\t.loginList[_ngcontent-%COMP%]{width: 100%; height: 43px; line-height: 43px; box-sizing: border-box; -webkit-box-sizing: border-box;}\r\n\t.loginList[_ngcontent-%COMP%]   .loginText[_ngcontent-%COMP%]{position: relative; top: -3px; height: 42px; line-height: 42px; padding: 7px 0; width: 90%; box-sizing: border-box; -webkit-box-sizing: border-box;}\r\n}\r\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {\r\n\t.section-top[_ngcontent-%COMP%]   .juhe-logo[_ngcontent-%COMP%] {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 195px; height: 50px;\r\n\t\t\tbackground-size: 195px 50px\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQSxZQUFZLFlBQVksRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztBQUUxSDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQSxjQUFjLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO0FBQ3pELGVBQWUsY0FBYyxFQUFFLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwSDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBLFdBQVcsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxnQ0FBZ0MsQ0FBQztBQUNoSyxzQkFBc0IsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQztBQUN4SSxpQkFBaUIsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLDBDQUFzRSxDQUFDO0FBQzVKLHFCQUFxQiwrQkFBK0IsQ0FBQztBQUNyRCxvQkFBb0IsK0JBQStCLENBQUM7QUFDcEQscUJBQXFCLDhCQUE4QixDQUFDO0FBQ3BELFlBQVksaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7QUFDMUksY0FBYyxjQUFjLENBQUM7QUFDN0IsVUFBVSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztBQUNwTSxnQkFBZ0IsbUJBQW1CLENBQUM7QUFDcEMsTUFBTSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7QUFDNUUsUUFBUSxZQUFZLEVBQUUsZUFBZSxDQUFDLHNEQUFrRixDQUFDO0FBQ3pILFFBQVEsY0FBYyxDQUFDO0FBQ3ZCO0NBQ0MsY0FBYyxZQUFZLENBQUM7Q0FDM0Isc0NBQXNDLFlBQVksQ0FBQztDQUNuRCxXQUFXLFlBQVksQ0FBQztDQUN4QixzQkFBc0IsWUFBWSxDQUFDO0NBQ25DLFdBQVcsV0FBVyxDQUFDO0FBQ3hCO0FBR0E7Q0FDQyxhQUFhLFlBQVksQ0FBQztDQUMxQixjQUFjLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztDQUM5QyxXQUFXLGNBQWMsQ0FBQztDQUMxQixjQUFjLFdBQVcsRUFBRSxlQUFlLENBQUM7Q0FDM0MsWUFBWSxhQUFhLENBQUM7Q0FDMUIsV0FBVyxXQUFXLENBQUM7Q0FDdkIsWUFBWSxXQUFXLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQztDQUNqRCxXQUFXLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQzs7Q0FFNUQsV0FBVyxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLDhCQUE4QixDQUFDO0NBQ2xILFdBQVcsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSw4QkFBOEIsQ0FBQztDQUNoSCxzQkFBc0Isa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLDhCQUE4QixDQUFDO0FBQzFLO0FBQ0E7Q0FDQztHQUNFLGNBQWM7R0FDZCxZQUFZLEVBQUUsWUFBWTtHQUMxQjtDQUNGO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXMtaW1nLXJvdW5kMTIzIHtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcbmF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgLm1lZGlhIGltZyB7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIGhlaWdodDogMjNweDtcclxufVxyXG4ubXMtbmF2LWxpc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgdG9wOiAtMjhweDtcclxuICAgIGNvbG9yOiAjZGIzYzM2O1xyXG59XHJcbi5sb2dpbldyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG59XHJcbi5jbGVhciwgLmNsZWFyZml4IHtcclxuICAgIHpvb206IDE7XHJcbn1cclxuLmJhbldyYXBwZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYTdmMjtcclxufVxyXG4uYmFuQ29udGVudHt3aWR0aDogNzAwcHg7IGhlaWdodDogNTAwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTAlOyB0b3A6IDUwJTsgbWFyZ2luLXRvcDogLTI1MHB4OyBtYXJnaW4tbGVmdDogLTM1MHB4O31cclxuXHJcbi5sb2dpbk1haW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxvZ2luV2lkdGgge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxufVxyXG4uZm9ybUxvZ2luIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxvZ2luTG9nb0Rpdnt3aWR0aDogMzUwcHg7IGhlaWdodDogNTBweDsgbWFyZ2luOiAwIGF1dG87fVxyXG4ubG9naW5Mb2dvIGltZ3tkaXNwbGF5OiBibG9jazsgd2lkdGg6IGF1dG87IGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtkaXNwbGF5OiBpbmxpbmUtZmxleDttYXJnaW4tYm90dG9tOiAxMHB4O31cclxuLmxvZ2luTG9nbyBzcGFueyAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBlbW9qaTtcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcbi5sb2dpbkxpc3R7cG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDM4cHg7IGxpbmUtaGVpZ2h0OiAzOHB4OyB3aWR0aDogMzAwcHg7IHBhZGRpbmc6IDJweCAxOHB4IDJweCAzMnB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNzt9XHJcbi5sb2dpbkxpc3QgLmxvZ2luVGV4dHtoZWlnaHQ6IDI0cHg7IGxpbmUtaGVpZ2h0OiAyNHB4OyBwYWRkaW5nOiA3cHggMDsgd2lkdGg6IDMwMHB4O2NvbG9yOiAjNjA2MDYwOyBib3JkZXI6IDAgbm9uZTsgcGFkZGluZy1ib3R0b206IDBweDt9XHJcbi5sb2dpbkxpc3QgbGFiZWx7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDJweDsgdG9wOiAxMHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyNHB4OyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbi9sb2dpbmljb24ucG5nJykgbm8tcmVwZWF0O31cclxuLmxvZ2luTGlzdFVzZXIgbGFiZWx7YmFja2dyb3VuZC1wb3NpdGlvbjogLTU4cHggLTRweDt9XHJcbi5sb2dpbkxpc3RQd2QgbGFiZWx7YmFja2dyb3VuZC1wb3NpdGlvbjogLTI4cHggLTNweDt9XHJcbi5sb2dpbkxpc3RDb2RlIGxhYmVse2JhY2tncm91bmQtcG9zaXRpb246IC0zcHggLTNweDt9XHJcbnAubG9naW5MaXN0e3RleHQtYWxpZ246IHJpZ2h0OyB3aWR0aDogMTAwJTsgcGFkZGluZzogMDsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tYm90dG9tOjA7IGhlaWdodDogMTZweDsgbGluZS1oZWlnaHQ6IDE2cHg7IGJvcmRlcjogMCBub25lO31cclxucC5sb2dpbkxpc3QgYXtjb2xvcjogIzAwQkRGRjt9XHJcbi5sb2dpbkJ0bntjdXJzb3I6IHBvaW50ZXI7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDQ2cHg7IGxpbmUtaGVpZ2h0OiA0NnB4OyBtYXJnaW4tdG9wOiAyMHB4OyBiYWNrZ3JvdW5kOiAjMDBCREZGOyBib3JkZXItcmFkaXVzOiAycHg7IGNvbG9yOiAjZmZmOyBib3JkZXI6IDAgbm9uZTsgbGV0dGVyLXNwYWNpbmc6NHB4OyBmb250LXNpemU6MTZweDt9XHJcbi5sb2dpbkJ0bjpob3ZlcntiYWNrZ3JvdW5kOiAjMDRiZmY3O31cclxuLmhhdmV7dGV4dC1hbGlnbjogcmlnaHQ7IGhlaWdodDogMjBweDsgbGluZS1oZWlnaHQ6IDIwcHg7IHBhZGRpbmctdG9wOiAxNnB4O31cclxuLmhhdmUgaXtoZWlnaHQ6IDIwcHg7IHBhZGRpbmc6IDAgMTBweDtiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbi9sb2dpbmljb24ucG5nJykgLTUycHggLTM3cHggbm8tcmVwZWF0O31cclxuLmhhdmUgYXtjb2xvcjogIzAwQkRGRjt9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2MHB4KXtcclxuXHQubG9naW5Mb2dvRGl2e3dpZHRoOiAyOTBweDt9XHJcblx0LmZvcm1Mb2dpbiwudGFiLXdyYXBwZXIsLmNvZGUtd3JhcHBlcnt3aWR0aDogMjkwcHg7fVxyXG5cdC5sb2dpbkxpc3R7d2lkdGg6IDI0MHB4O31cclxuXHQubG9naW5MaXN0IC5sb2dpblRleHR7d2lkdGg6IDI0MHB4O31cclxuXHQuZXJyb3JUaXBze2xlZnQ6IDI5NXB4O31cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cdC50YWItd3JhcHBlcnt3aWR0aDogMjMwcHg7fVxyXG5cdC5sb2dpbkxvZ29EaXZ7dGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTt9XHJcblx0LmxvZ2luTG9nb3ttYXJnaW46IDAgYXV0bzt9XHJcblx0LmxvZ2luV3JhcHBlcnt3aWR0aDogMTAwJTsgbWluLXdpZHRoOiAxMDAlO31cclxuXHQuYmFuV3JhcHBlcntkaXNwbGF5OiBub25lO31cclxuXHQubG9naW5NYWlue3dpZHRoOiAxMDAlO31cclxuXHQubG9naW5XaWR0aHt3aWR0aDogMTAwJTsgbGVmdDogMDsgbWFyZ2luLWxlZnQ6IDA7fVxyXG5cdC5lcnJvclRpcHN7bGVmdDogMzBweDsgdG9wOiBhdXRvOyBib3R0b206IC0yMnB4OyB6LWluZGV4OiAxO31cclxuXHJcblx0LmZvcm1Mb2dpbnt3aWR0aDogMTAwJTsgcGFkZGluZzogMCAyMHB4OyBtYXJnaW4tdG9wOiA0MHB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cdC5sb2dpbkxpc3R7d2lkdGg6IDEwMCU7IGhlaWdodDogNDNweDsgbGluZS1oZWlnaHQ6IDQzcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblx0LmxvZ2luTGlzdCAubG9naW5UZXh0e3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAtM3B4OyBoZWlnaHQ6IDQycHg7IGxpbmUtaGVpZ2h0OiA0MnB4OyBwYWRkaW5nOiA3cHggMDsgd2lkdGg6IDkwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG5cdC5zZWN0aW9uLXRvcCAuanVoZS1sb2dvIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxOTVweDsgaGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDE5NXB4IDUwcHhcclxuXHR9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/Module/language-translation/language-translation.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/Module/language-translation/language-translation.module.ts ***!
  \***********************************************************************************/
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
        this.translate.setDefaultLang('ch');
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

/***/ "./src/app/shared/Module/preloader/preloader.componentRect.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/Module/preloader/preloader.componentRect.ts ***!
  \********************************************************************/
/*! exports provided: PreloaderComponentRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponentRect", function() { return PreloaderComponentRect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PreloaderComponentRect {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponentRect.ɵfac = function PreloaderComponentRect_Factory(t) { return new (t || PreloaderComponentRect)(); };
PreloaderComponentRect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreloaderComponentRect, selectors: [["app-preloader-rect"]], decls: 11, vars: 0, consts: [["id", "preloader-wrap"], [1, "spinner", "spinner-9"], [1, "ms-cube", "ms-cube1"], [1, "ms-cube", "ms-cube2"], [1, "ms-cube", "ms-cube3"], [1, "ms-cube", "ms-cube4"], [1, "ms-cube", "ms-cube5"], [1, "ms-cube", "ms-cube6"], [1, "ms-cube", "ms-cube7"], [1, "ms-cube", "ms-cube8"], [1, "ms-cube", "ms-cube9"]], template: function PreloaderComponentRect_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloaderComponentRect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preloader-rect',
                template: `
  <div id="preloader-wrap">
     <div class="spinner spinner-9">
        <div class="ms-cube ms-cube1"></div>
        <div class="ms-cube ms-cube2"></div>
        <div class="ms-cube ms-cube3"></div>
        <div class="ms-cube ms-cube4"></div>
        <div class="ms-cube ms-cube5"></div>
        <div class="ms-cube ms-cube6"></div>
        <div class="ms-cube ms-cube7"></div>
        <div class="ms-cube ms-cube8"></div>
        <div class="ms-cube ms-cube9"></div>
      </div>
  </div>
  `,
                styles: ['']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/Module/toaster/toast.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/Module/toaster/toast.module.ts ***!
  \*******************************************************/
/*! exports provided: ToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return ToastModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toaster_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster-container.component */ "./src/app/shared/Module/toaster/toaster-container.component.ts");
/* harmony import */ var _toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.component */ "./src/app/shared/Module/toaster/toaster.component.ts");





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

/***/ "./src/app/shared/Module/toaster/toaster-container.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/Module/toaster/toaster-container.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToasterContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function() { return ToasterContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toaster.service */ "./src/app/shared/Module/toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.component */ "./src/app/shared/Module/toaster/toaster.component.ts");





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

/***/ "./src/app/shared/Module/toaster/toaster.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/Module/toaster/toaster.component.ts ***!
  \************************************************************/
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

/***/ "./src/app/shared/Module/toaster/toaster.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/Module/toaster/toaster.service.ts ***!
  \**********************************************************/
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

/***/ "./src/app/shared/Service/userService/auth/auth.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/Service/userService/auth/auth.guard.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/shared/Service/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl(this.userService.loginURL);
            return false;
        }
        return true;
    }
    canActivateChild(next, state) {
        if (!this.userService.isLoggedIn()) {
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

/***/ "./src/app/shared/Service/userService/user.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/Service/userService/user.service.ts ***!
  \************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginURL = '/login';
        this.VDMSURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].VDMSURL;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
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
    logOut() {
        this.deleteToken();
        this.gotoHome();
    }
    gotoHome() {
        window.location.href = this.VDMSURL;
    }
    gotoFirstPage() {
        this.router.navigateByUrl('/map/monitor');
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
    isLoggedIn() {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
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
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
    apiBaseUrl: 'localhost:3000/',
    VDMSURL: 'http://vdms.aidetecting.com/',
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