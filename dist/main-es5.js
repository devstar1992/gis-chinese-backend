function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/pages/error/error.component */
    "./src/app/components/pages/error/error.component.ts");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/map',
      pathMatch: 'full'
    }, {
      path: 'map',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-map-map-module */
        "components-map-map-module").then(__webpack_require__.bind(null,
        /*! ./components/map/map.module */
        "./src/app/components/map/map.module.ts")).then(function (m) {
          return m.MapModule;
        });
      }
    }, {
      path: 'login',
      component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '**',
      component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_Module_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/Module/preloader/preloader.component */
    "./src/app/shared/Module/preloader/preloader.component.ts");
    /* harmony import */


    var _shared_Module_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/Module/toaster/toaster-container.component */
    "./src/app/shared/Module/toaster/toaster-container.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recallJsFuntions();
        }
      }, {
        key: "recallJsFuntions",
        value: function recallJsFuntions() {
          var _this = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              $('#preloader-wrap').fadeIn('slow');
            }
          });
          this.routerSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"];
          })).subscribe(function (event) {
            $.getScript('assets/js/costic.js');
            $('#preloader').fadeOut('slow');
            _this.location = _this.router.url;

            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
      }])],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-preloader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toaster-container");
        }
      },
      directives: [_shared_Module_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_4__["PreloaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_Module_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
          }]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_Module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/Module/shared.module */
    "./src/app/shared/Module/shared.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/error/error.component */
    "./src/app/components/pages/error/error.component.ts");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_Module_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_Module_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_Module_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/error/error.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/error/error.component.ts ***!
    \***********************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsPagesErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 14,
      vars: 0,
      consts: [[1, "ms-body", "ms-primary-theme"], [1, "body-content", "ms-error-404"], [1, "ms-content-wrapper"], [1, "flaticon-computer"], ["routerLink", "/", 1, "btn", "btn-white"], [1, "material-icons"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/Service/userService/user.service */
    "./src/app/shared/Service/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/Module/toaster/toaster.service */
    "./src/app/shared/Module/toaster/toaster.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."));
      }
    }

    function LoginComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "at least 8 length"), "");
      }
    }

    function LoginComponent_div_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."));
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, router, _formBuilder, toastr, translate) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.translate = translate;
        this.currentLanguage = "en";
        this.LanguageImage = {
          en: "assets/img/country/us-flag.png",
          ch: "assets/img/country/china-flag.png"
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGroup = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['agent', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.formGroupP = this._formBuilder.group({
            name: [''],
            mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: [''],
            message: ['请重设我的密码']
          });
        } //LanguageChagePart

      }, {
        key: "changeLang",
        value: function changeLang(language) {
          this.currentLanguage = language;
          localStorage.setItem('language', language);
          this.translate.use(language);
        }
      }, {
        key: "passwordReset",
        value: function passwordReset() {
          var _this2 = this;

          this.userService.postRequest("api/sendGmail", this.formGroupP.value, false).subscribe(function (res) {
            _this2.Toaster('success', '', 'Your message have sent successfully. Please wait the result.', 2000);
          }, function (err) {
            _this2.handleError(err);
          });
        }
      }, {
        key: "login",
        value: function login() {
          // alert('My skype address is devstar1992@outlook.com.Please do not say about skype word')
          var loginData = this.formGroup.value;
          var role = this.formGroup.value.role;
          if (role == "admin") this.loginAdmin(loginData);else if (role == "agent") this.loginAgent(loginData);else if (role == "user") this.loginUser(loginData);
        }
      }, {
        key: "loginAdmin",
        value: function loginAdmin(data) {
          var _this3 = this;

          this.userService.postRequest('api/loginAdmin', data, false).subscribe(function (res) {
            _this3.userService.setToken({
              token: res['token'],
              userInfo: res['userInfo'],
              role: data.role,
              expiresAt: res['expiresAt']
            });

            _this3.Toaster('success', '', 'Welcome');

            _this3.userService.gotoFirstPage();
          }, function (err) {
            _this3.handleError(err);
          });
        }
      }, {
        key: "loginAgent",
        value: function loginAgent(data) {
          var _this4 = this;

          this.userService.postRequest('api/loginAgent', data, false).subscribe(function (res) {
            _this4.userService.setToken({
              token: res['token'],
              userInfo: res['userInfo'],
              role: data.role,
              expiresAt: res['expiresAt']
            });

            _this4.Toaster('success', '', 'Welcome');

            _this4.userService.gotoFirstPage();
          }, function (err) {
            _this4.handleError(err);
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(data) {
          var _this5 = this;

          this.userService.postRequest('api/loginUser', data, false).subscribe(function (res) {
            _this5.userService.setToken({
              token: res['token'],
              userInfo: res['userInfo'],
              role: data.role,
              expiresAt: res['expiresAt']
            });

            _this5.Toaster('success', '', 'Welcome');

            _this5.userService.gotoFirstPage();
          }, function (err) {
            _this5.handleError(err);
          });
        } //toastr functions

      }, {
        key: "handleError",
        value: function handleError(err) {
          if (err.status == 504) this.Toaster('error', '', 'server is not responsing.', 4000);else this.Toaster('error', '', err.error.message, 1500);
        }
      }, {
        key: "Toaster",
        value: function Toaster(style, msgtopic, msgContent) {
          var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
          this.toastr.show(style, msgtopic, msgContent, time);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 106,
      vars: 51,
      consts: [[1, "loginWrapper", "clearfix"], [1, "banWrapper", 2, "background", "#262626", "background-image", "url('assets/img/costic/default-login.jpg')", "background-size", "cover"], [1, "loginMain"], ["id", "ms-nav-options", 1, "ms-nav-list", "ms-inline", "mb-0"], [1, "ms-nav-item", "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "media", "p-2", "mousePointer"], [1, "ms-chat-img", "mr-2", "align-self-center"], [1, "ms-img-round", "ms-img-round123", 3, "src"], [1, "media-body"], [1, "username"], ["aria-labelledby", "languageDropdown", 1, "dropdown-menu", "dropdown-menu-right", "user-dropdown"], [1, "ms-scrollable", "ms-dropdown-list"], [1, "media", "p-2", "mousePointer", 3, "click"], [1, "loginWidth"], [1, "loginLogoDiv"], ["href", "http://vdms.aidetecting.com/", 1, "loginLogo"], ["src", "assets/img/logo.png"], ["novalidate", "", 1, "formLogin", "needs-validation", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "ms-list", "d-flex"], [1, "ms-list-item", "pl-0"], [1, "ms-checkbox-wrap"], ["type", "radio", "name", "role", "formControlName", "role", "value", "admin"], [1, "ms-checkbox-check"], [1, "ms-list-item"], ["type", "radio", "name", "role", "formControlName", "role", "value", "agent"], ["type", "radio", "name", "role", "formControlName", "role", "value", "user"], [1, "mb-3"], [1, "input-group", "loginList", "loginListUser"], ["type", "text", "formControlName", "username", 1, "loginText", 3, "placeholder"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "mb-2"], [1, "input-group", "loginList", "loginListPwd"], ["type", "password", "formControlName", "password", "minlength", "8", 1, "loginText", 3, "placeholder"], [1, "loginList"], ["data-toggle", "modal", "data-toggle", "modal", "data-target", "#modal-12"], ["type", "submit", "id", "loginBtn", 1, "loginBtn", 2, "background", "rgb(3, 197, 255)", 3, "value"], [1, "have"], ["href", "http://vdms.aidetecting.com/"], ["id", "modal-12", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-12", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-min"], [1, "modal-content"], [1, "modal-body", "text-center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "flaticon-secure-shield", "d-block"], [1, "formLogin", "needs-validation", 3, "formGroup"], ["myformP", "ngForm"], [1, "ms-form-group", "has-icon"], ["type", "email", "name", "forgot-password", "formControlName", "mail", 1, "form-control", 3, "placeholder"], [1, "material-icons"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], [1, "invalid-feedback", 2, "display", "block"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() {
            return ctx.changeLang("en");
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_20_listener() {
            return ctx.changeLang("ch");
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_32_listener() {
            return ctx.login();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\xD7");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, LoginComponent_div_102_Template, 3, 3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_103_listener() {
            return ctx.passwordReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 31, "user name"));

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 45, "Enter your mail to recover your password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroupP);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 47, "mail_box"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroupP.get("mail").invalid && (_r3.submitted || ctx.formGroupP.get("mail").dirty || ctx.formGroupP.get("mail").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroupP.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 49, "reset password"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".ms-img-round123[_ngcontent-%COMP%] {\r\n    width: 23px;\r\n    height: 23px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 23px;\r\n    height: 23px;\r\n}\r\n.ms-nav-list[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 0px;\r\n    cursor: pointer;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n    top: -28px;\r\n    color: #db3c36;\r\n}\r\n.loginWrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-width: 1200px;\r\n    height: 100vh;\r\n    min-height: 500px;\r\n    font-size: 14px;\r\n    color: #909090;\r\n}\r\n.clear[_ngcontent-%COMP%], .clearfix[_ngcontent-%COMP%] {\r\n    zoom: 1;\r\n}\r\n.banWrapper[_ngcontent-%COMP%] {\r\n    float: left;\r\n    position: relative;\r\n    width: 60%;\r\n    height: 100%;\r\n    background: #00a7f2;\r\n}\r\n.banContent[_ngcontent-%COMP%]{width: 700px; height: 500px; position: absolute; left: 50%; top: 50%; margin-top: -250px; margin-left: -350px;}\r\n.loginMain[_ngcontent-%COMP%] {\r\n    float: right;\r\n    position: relative;\r\n    width: 40%;\r\n    height: 100%;\r\n    background: #fff;\r\n}\r\n.loginWidth[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    padding-bottom: 30px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 150px;\r\n    margin-left: -250px;\r\n}\r\n.formLogin[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    padding-top: 40px;\r\n    margin: 0 auto;\r\n}\r\n.loginLogoDiv[_ngcontent-%COMP%]{width: 350px; height: 50px; margin: 0 auto;}\r\n.loginLogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display: block; width: auto; height: -webkit-fill-available;display: inline-flex;margin-bottom: 10px;}\r\n.loginLogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{    \r\n    font-family: emoji;\r\n    font-size: 33px;\r\n    font-style: italic;\r\n    color: grey;\r\n}\r\n.loginList[_ngcontent-%COMP%]{position: relative; height: 38px; line-height: 38px; width: 300px; padding: 2px 18px 2px 32px; margin-bottom: 16px; border-bottom: 1px solid #e7e7e7;}\r\n.loginList[_ngcontent-%COMP%]   .loginText[_ngcontent-%COMP%]{height: 24px; line-height: 24px; padding: 7px 0; width: 300px;color: #606060; border: 0 none; padding-bottom: 0px;}\r\n.loginList[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position: absolute;left: 2px; top: 10px; width: 20px; height: 24px; background: url('loginicon.png') no-repeat;}\r\n.loginListUser[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position: -58px -4px;}\r\n.loginListPwd[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position: -28px -3px;}\r\n.loginListCode[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position: -3px -3px;}\r\np.loginList[_ngcontent-%COMP%]{text-align: right; width: 100%; padding: 0; font-size: 13px; margin-bottom:0; height: 16px; line-height: 16px; border: 0 none;}\r\np.loginList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #00BDFF;}\r\n.loginBtn[_ngcontent-%COMP%]{cursor: pointer; width: 100%; height: 46px; line-height: 46px; margin-top: 20px; background: #00BDFF; border-radius: 2px; color: #fff; border: 0 none; letter-spacing:4px; font-size:16px;}\r\n.loginBtn[_ngcontent-%COMP%]:hover{background: #04bff7;}\r\n.have[_ngcontent-%COMP%]{text-align: right; height: 20px; line-height: 20px; padding-top: 16px;}\r\n.have[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height: 20px; padding: 0 10px;background: url('loginicon.png') -52px -37px no-repeat;}\r\n.have[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #00BDFF;}\r\n@media only screen and (max-width: 1360px){\r\n\t.loginLogoDiv[_ngcontent-%COMP%]{width: 290px;}\r\n\t.formLogin[_ngcontent-%COMP%], .tab-wrapper[_ngcontent-%COMP%], .code-wrapper[_ngcontent-%COMP%]{width: 290px;}\r\n\t.loginList[_ngcontent-%COMP%]{width: 240px;}\r\n\t.loginList[_ngcontent-%COMP%]   .loginText[_ngcontent-%COMP%]{width: 240px;}\r\n\t.errorTips[_ngcontent-%COMP%]{left: 295px;}\r\n}\r\n@media only screen and (max-width: 800px){\r\n\t.tab-wrapper[_ngcontent-%COMP%]{width: 230px;}\r\n\t.loginLogoDiv[_ngcontent-%COMP%]{text-align: center; width: 100%;}\r\n\t.loginLogo[_ngcontent-%COMP%]{margin: 0 auto;}\r\n\t.loginWrapper[_ngcontent-%COMP%]{width: 100%; min-width: 100%;}\r\n\t.banWrapper[_ngcontent-%COMP%]{display: none;}\r\n\t.loginMain[_ngcontent-%COMP%]{width: 100%;}\r\n\t.loginWidth[_ngcontent-%COMP%]{width: 100%; left: 0; margin-left: 0;}\r\n\t.errorTips[_ngcontent-%COMP%]{left: 30px; top: auto; bottom: -22px; z-index: 1;}\r\n\r\n\t.formLogin[_ngcontent-%COMP%]{width: 100%; padding: 0 20px; margin-top: 40px; box-sizing: border-box; -webkit-box-sizing: border-box;}\r\n\t.loginList[_ngcontent-%COMP%]{width: 100%; height: 43px; line-height: 43px; box-sizing: border-box; -webkit-box-sizing: border-box;}\r\n\t.loginList[_ngcontent-%COMP%]   .loginText[_ngcontent-%COMP%]{position: relative; top: -3px; height: 42px; line-height: 42px; padding: 7px 0; width: 90%; box-sizing: border-box; -webkit-box-sizing: border-box;}\r\n}\r\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {\r\n\t.section-top[_ngcontent-%COMP%]   .juhe-logo[_ngcontent-%COMP%] {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 195px; height: 50px;\r\n\t\t\tbackground-size: 195px 50px\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQSxZQUFZLFlBQVksRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztBQUUxSDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQSxjQUFjLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO0FBQ3pELGVBQWUsY0FBYyxFQUFFLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwSDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBLFdBQVcsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxnQ0FBZ0MsQ0FBQztBQUNoSyxzQkFBc0IsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQztBQUN4SSxpQkFBaUIsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLDBDQUFzRSxDQUFDO0FBQzVKLHFCQUFxQiwrQkFBK0IsQ0FBQztBQUNyRCxvQkFBb0IsK0JBQStCLENBQUM7QUFDcEQscUJBQXFCLDhCQUE4QixDQUFDO0FBQ3BELFlBQVksaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7QUFDMUksY0FBYyxjQUFjLENBQUM7QUFDN0IsVUFBVSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztBQUNwTSxnQkFBZ0IsbUJBQW1CLENBQUM7QUFDcEMsTUFBTSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7QUFDNUUsUUFBUSxZQUFZLEVBQUUsZUFBZSxDQUFDLHNEQUFrRixDQUFDO0FBQ3pILFFBQVEsY0FBYyxDQUFDO0FBQ3ZCO0NBQ0MsY0FBYyxZQUFZLENBQUM7Q0FDM0Isc0NBQXNDLFlBQVksQ0FBQztDQUNuRCxXQUFXLFlBQVksQ0FBQztDQUN4QixzQkFBc0IsWUFBWSxDQUFDO0NBQ25DLFdBQVcsV0FBVyxDQUFDO0FBQ3hCO0FBR0E7Q0FDQyxhQUFhLFlBQVksQ0FBQztDQUMxQixjQUFjLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztDQUM5QyxXQUFXLGNBQWMsQ0FBQztDQUMxQixjQUFjLFdBQVcsRUFBRSxlQUFlLENBQUM7Q0FDM0MsWUFBWSxhQUFhLENBQUM7Q0FDMUIsV0FBVyxXQUFXLENBQUM7Q0FDdkIsWUFBWSxXQUFXLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQztDQUNqRCxXQUFXLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQzs7Q0FFNUQsV0FBVyxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLDhCQUE4QixDQUFDO0NBQ2xILFdBQVcsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSw4QkFBOEIsQ0FBQztDQUNoSCxzQkFBc0Isa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLDhCQUE4QixDQUFDO0FBQzFLO0FBQ0E7Q0FDQztHQUNFLGNBQWM7R0FDZCxZQUFZLEVBQUUsWUFBWTtHQUMxQjtDQUNGO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXMtaW1nLXJvdW5kMTIzIHtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcbmF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgLm1lZGlhIGltZyB7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIGhlaWdodDogMjNweDtcclxufVxyXG4ubXMtbmF2LWxpc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgdG9wOiAtMjhweDtcclxuICAgIGNvbG9yOiAjZGIzYzM2O1xyXG59XHJcbi5sb2dpbldyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG59XHJcbi5jbGVhciwgLmNsZWFyZml4IHtcclxuICAgIHpvb206IDE7XHJcbn1cclxuLmJhbldyYXBwZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYTdmMjtcclxufVxyXG4uYmFuQ29udGVudHt3aWR0aDogNzAwcHg7IGhlaWdodDogNTAwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTAlOyB0b3A6IDUwJTsgbWFyZ2luLXRvcDogLTI1MHB4OyBtYXJnaW4tbGVmdDogLTM1MHB4O31cclxuXHJcbi5sb2dpbk1haW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxvZ2luV2lkdGgge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxufVxyXG4uZm9ybUxvZ2luIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxvZ2luTG9nb0Rpdnt3aWR0aDogMzUwcHg7IGhlaWdodDogNTBweDsgbWFyZ2luOiAwIGF1dG87fVxyXG4ubG9naW5Mb2dvIGltZ3tkaXNwbGF5OiBibG9jazsgd2lkdGg6IGF1dG87IGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtkaXNwbGF5OiBpbmxpbmUtZmxleDttYXJnaW4tYm90dG9tOiAxMHB4O31cclxuLmxvZ2luTG9nbyBzcGFueyAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBlbW9qaTtcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcbi5sb2dpbkxpc3R7cG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDM4cHg7IGxpbmUtaGVpZ2h0OiAzOHB4OyB3aWR0aDogMzAwcHg7IHBhZGRpbmc6IDJweCAxOHB4IDJweCAzMnB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNzt9XHJcbi5sb2dpbkxpc3QgLmxvZ2luVGV4dHtoZWlnaHQ6IDI0cHg7IGxpbmUtaGVpZ2h0OiAyNHB4OyBwYWRkaW5nOiA3cHggMDsgd2lkdGg6IDMwMHB4O2NvbG9yOiAjNjA2MDYwOyBib3JkZXI6IDAgbm9uZTsgcGFkZGluZy1ib3R0b206IDBweDt9XHJcbi5sb2dpbkxpc3QgbGFiZWx7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDJweDsgdG9wOiAxMHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyNHB4OyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbi9sb2dpbmljb24ucG5nJykgbm8tcmVwZWF0O31cclxuLmxvZ2luTGlzdFVzZXIgbGFiZWx7YmFja2dyb3VuZC1wb3NpdGlvbjogLTU4cHggLTRweDt9XHJcbi5sb2dpbkxpc3RQd2QgbGFiZWx7YmFja2dyb3VuZC1wb3NpdGlvbjogLTI4cHggLTNweDt9XHJcbi5sb2dpbkxpc3RDb2RlIGxhYmVse2JhY2tncm91bmQtcG9zaXRpb246IC0zcHggLTNweDt9XHJcbnAubG9naW5MaXN0e3RleHQtYWxpZ246IHJpZ2h0OyB3aWR0aDogMTAwJTsgcGFkZGluZzogMDsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tYm90dG9tOjA7IGhlaWdodDogMTZweDsgbGluZS1oZWlnaHQ6IDE2cHg7IGJvcmRlcjogMCBub25lO31cclxucC5sb2dpbkxpc3QgYXtjb2xvcjogIzAwQkRGRjt9XHJcbi5sb2dpbkJ0bntjdXJzb3I6IHBvaW50ZXI7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDQ2cHg7IGxpbmUtaGVpZ2h0OiA0NnB4OyBtYXJnaW4tdG9wOiAyMHB4OyBiYWNrZ3JvdW5kOiAjMDBCREZGOyBib3JkZXItcmFkaXVzOiAycHg7IGNvbG9yOiAjZmZmOyBib3JkZXI6IDAgbm9uZTsgbGV0dGVyLXNwYWNpbmc6NHB4OyBmb250LXNpemU6MTZweDt9XHJcbi5sb2dpbkJ0bjpob3ZlcntiYWNrZ3JvdW5kOiAjMDRiZmY3O31cclxuLmhhdmV7dGV4dC1hbGlnbjogcmlnaHQ7IGhlaWdodDogMjBweDsgbGluZS1oZWlnaHQ6IDIwcHg7IHBhZGRpbmctdG9wOiAxNnB4O31cclxuLmhhdmUgaXtoZWlnaHQ6IDIwcHg7IHBhZGRpbmc6IDAgMTBweDtiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbi9sb2dpbmljb24ucG5nJykgLTUycHggLTM3cHggbm8tcmVwZWF0O31cclxuLmhhdmUgYXtjb2xvcjogIzAwQkRGRjt9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2MHB4KXtcclxuXHQubG9naW5Mb2dvRGl2e3dpZHRoOiAyOTBweDt9XHJcblx0LmZvcm1Mb2dpbiwudGFiLXdyYXBwZXIsLmNvZGUtd3JhcHBlcnt3aWR0aDogMjkwcHg7fVxyXG5cdC5sb2dpbkxpc3R7d2lkdGg6IDI0MHB4O31cclxuXHQubG9naW5MaXN0IC5sb2dpblRleHR7d2lkdGg6IDI0MHB4O31cclxuXHQuZXJyb3JUaXBze2xlZnQ6IDI5NXB4O31cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cdC50YWItd3JhcHBlcnt3aWR0aDogMjMwcHg7fVxyXG5cdC5sb2dpbkxvZ29EaXZ7dGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTt9XHJcblx0LmxvZ2luTG9nb3ttYXJnaW46IDAgYXV0bzt9XHJcblx0LmxvZ2luV3JhcHBlcnt3aWR0aDogMTAwJTsgbWluLXdpZHRoOiAxMDAlO31cclxuXHQuYmFuV3JhcHBlcntkaXNwbGF5OiBub25lO31cclxuXHQubG9naW5NYWlue3dpZHRoOiAxMDAlO31cclxuXHQubG9naW5XaWR0aHt3aWR0aDogMTAwJTsgbGVmdDogMDsgbWFyZ2luLWxlZnQ6IDA7fVxyXG5cdC5lcnJvclRpcHN7bGVmdDogMzBweDsgdG9wOiBhdXRvOyBib3R0b206IC0yMnB4OyB6LWluZGV4OiAxO31cclxuXHJcblx0LmZvcm1Mb2dpbnt3aWR0aDogMTAwJTsgcGFkZGluZzogMCAyMHB4OyBtYXJnaW4tdG9wOiA0MHB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cdC5sb2dpbkxpc3R7d2lkdGg6IDEwMCU7IGhlaWdodDogNDNweDsgbGluZS1oZWlnaHQ6IDQzcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblx0LmxvZ2luTGlzdCAubG9naW5UZXh0e3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAtM3B4OyBoZWlnaHQ6IDQycHg7IGxpbmUtaGVpZ2h0OiA0MnB4OyBwYWRkaW5nOiA3cHggMDsgd2lkdGg6IDkwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG5cdC5zZWN0aW9uLXRvcCAuanVoZS1sb2dvIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxOTVweDsgaGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDE5NXB4IDUwcHhcclxuXHR9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/Datatable/BootstrapPaginator.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/Module/Datatable/BootstrapPaginator.ts ***!
    \***************************************************************/

  /*! exports provided: BootstrapPaginator */

  /***/
  function srcAppSharedModuleDatatableBootstrapPaginatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapPaginator", function () {
      return BootstrapPaginator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _Paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Paginator */
    "./src/app/shared/Module/Datatable/Paginator.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BootstrapPaginator_ul_4_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_4_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage - 4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 4);
      }
    }

    function BootstrapPaginator_ul_4_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_5_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage - 3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 3);
      }
    }

    function BootstrapPaginator_ul_4_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_6_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage - 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 2);
      }
    }

    function BootstrapPaginator_ul_4_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_7_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 1);
      }
    }

    function BootstrapPaginator_ul_4_li_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_11_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 1);
      }
    }

    function BootstrapPaginator_ul_4_li_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_12_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage + 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 2);
      }
    }

    function BootstrapPaginator_ul_4_li_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_13_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage + 3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 3);
      }
    }

    function BootstrapPaginator_ul_4_li_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_li_14_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.activePage + 4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 4);
      }
    }

    function BootstrapPaginator_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_Template_li_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BootstrapPaginator_ul_4_li_4_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BootstrapPaginator_ul_4_li_5_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapPaginator_ul_4_li_6_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BootstrapPaginator_ul_4_li_7_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BootstrapPaginator_ul_4_li_11_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BootstrapPaginator_ul_4_li_12_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BootstrapPaginator_ul_4_li_13_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BootstrapPaginator_ul_4_li_14_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_4_Template_li_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setPage(_r0.lastPage);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.activePage <= 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 4 && _r0.activePage + 1 > _r0.lastPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 3 && _r0.activePage + 2 > _r0.lastPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 1 <= _r0.lastPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 2 <= _r0.lastPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 3 <= _r0.lastPage && _r0.activePage < 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 4 <= _r0.lastPage && _r0.activePage < 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.activePage >= _r0.lastPage);
      }
    }

    function BootstrapPaginator_ul_6_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_6_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var rows_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setRowsOnPage(rows_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rows_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _r0.rowsOnPage === rows_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rows_r31);
      }
    }

    function BootstrapPaginator_ul_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BootstrapPaginator_ul_6_li_1_Template, 3, 3, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.rowsOnPageSet);
      }
    }

    var BootstrapPaginator = /*#__PURE__*/function () {
      function BootstrapPaginator() {
        _classCallCheck(this, BootstrapPaginator);

        this.rowsOnPageSet = [];
        this.minRowsOnPage = 0;
      }

      _createClass(BootstrapPaginator, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.rowsOnPageSet) {
            this.minRowsOnPage = lodash__WEBPACK_IMPORTED_MODULE_1__["min"](this.rowsOnPageSet);
          }
        }
      }]);

      return BootstrapPaginator;
    }();

    BootstrapPaginator.ɵfac = function BootstrapPaginator_Factory(t) {
      return new (t || BootstrapPaginator)();
    };

    BootstrapPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BootstrapPaginator,
      selectors: [["sv-bootstrap-paginator"]],
      inputs: {
        rowsOnPageSet: "rowsOnPageSet",
        svTable: "svTable"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 3,
      consts: [[3, "svTable"], ["p", ""], [1, "row"], [1, "col-md-10"], ["class", "pagination", 4, "ngIf"], [1, "col-md-2", "pull-right", "float-sm-right"], ["class", "pagination pull-right float-sm-right", 4, "ngIf"], [1, "pagination"], [1, "page-item", 3, "click"], [1, "page-link", 2, "cursor", "pointer"], ["class", "page-item", 3, "click", 4, "ngIf"], [1, "page-item", "active"], [1, "pagination", "pull-right", "float-sm-right"], ["class", "page-item", 3, "active", "click", 4, "ngFor", "ngForOf"]],
      template: function BootstrapPaginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sv-paginator", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BootstrapPaginator_ul_4_Template, 18, 13, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapPaginator_ul_6_Template, 2, 1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svTable", ctx.svTable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.dataLength > _r0.rowsOnPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.dataLength > ctx.minRowsOnPage);
        }
      },
      directives: [_Paginator__WEBPACK_IMPORTED_MODULE_2__["Paginator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapPaginator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sv-bootstrap-paginator',
          template: "\n    <sv-paginator #p [svTable]=\"svTable\">\n        <div class=\"row\">\n\n            <div class=\"col-md-10\">\n                <ul class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n                    <li class=\"page-item\" [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">&laquo;</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-4}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-3}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-2}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-1}}</a>\n                    </li>\n                    <li class=\"page-item active\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+1}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+2}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+3}}</a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+4}}</a>\n                    </li>\n                    <li class=\"page-item\" [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">&raquo;</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"col-md-2 pull-right float-sm-right\">\n                <ul class=\"pagination pull-right float-sm-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n                    <li class=\"page-item\" *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                        <a class=\"page-link\" style=\"cursor: pointer\">{{rows}}</a>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </sv-paginator>\n    "
        }]
      }], null, {
        rowsOnPageSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["rowsOnPageSet"]
        }],
        svTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svTable"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/Datatable/DataTable.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/Module/Datatable/DataTable.ts ***!
    \******************************************************/

  /*! exports provided: DataTable */

  /***/
  function srcAppSharedModuleDatatableDataTableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTable", function () {
      return DataTable;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataTable = /*#__PURE__*/function () {
      function DataTable(differs) {
        _classCallCheck(this, DataTable);

        this.differs = differs;
        this.inputData = [];
        this.sortBy = "";
        this.sortOrder = "asc";
        this.sortByChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowsOnPage = 1000;
        this.activePage = 1;
        this.mustRecalculateData = false;
        this.onSortChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.diff = differs.find([]).create(null);
      }

      _createClass(DataTable, [{
        key: "getSort",
        value: function getSort() {
          return {
            sortBy: this.sortBy,
            sortOrder: this.sortOrder
          };
        }
      }, {
        key: "setSort",
        value: function setSort(sortBy, sortOrder) {
          if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](["asc", "desc"], sortOrder) ? sortOrder : "asc";
            this.mustRecalculateData = true;
            this.onSortChange.next({
              sortBy: sortBy,
              sortOrder: sortOrder
            });
            this.sortByChange.emit(this.sortBy);
            this.sortOrderChange.emit(this.sortOrder);
          }
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return {
            activePage: this.activePage,
            rowsOnPage: this.rowsOnPage,
            dataLength: this.inputData.length
          };
        }
      }, {
        key: "setPage",
        value: function setPage(activePage, rowsOnPage) {
          if (this.rowsOnPage !== rowsOnPage || this.activePage !== activePage) {
            this.activePage = this.activePage !== activePage ? activePage : this.calculateNewActivePage(this.rowsOnPage, rowsOnPage);
            this.rowsOnPage = rowsOnPage;
            this.mustRecalculateData = true;
            this.onPageChange.emit({
              activePage: this.activePage,
              rowsOnPage: this.rowsOnPage,
              dataLength: this.inputData ? this.inputData.length : 0
            });
          }
        }
      }, {
        key: "calculateNewActivePage",
        value: function calculateNewActivePage(previousRowsOnPage, currentRowsOnPage) {
          var firstRowOnPage = (this.activePage - 1) * previousRowsOnPage + 1;
          var newActivePage = Math.ceil(firstRowOnPage / currentRowsOnPage);
          return newActivePage;
        }
      }, {
        key: "recalculatePage",
        value: function recalculatePage() {
          var lastPage = Math.ceil(this.inputData.length / this.rowsOnPage);
          this.activePage = lastPage < this.activePage ? lastPage : this.activePage;
          this.activePage = this.activePage || 1;
          this.onPageChange.emit({
            activePage: this.activePage,
            rowsOnPage: this.rowsOnPage,
            dataLength: this.inputData.length
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes["rowsOnPage"]) {
            this.rowsOnPage = changes["rowsOnPage"].previousValue;
            this.setPage(this.activePage, changes["rowsOnPage"].currentValue);
            this.mustRecalculateData = true;
          }

          if (changes["sortBy"] || changes["sortOrder"]) {
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](["asc", "desc"], this.sortOrder)) {
              console.warn("angular2-datatable: value for input svSortOrder must be one of ['asc', 'desc'], but is:", this.sortOrder);
              this.sortOrder = "asc";
            }

            if (this.sortBy) {
              this.onSortChange.next({
                sortBy: this.sortBy,
                sortOrder: this.sortOrder
              });
            }

            this.mustRecalculateData = true;
          }

          if (changes["inputData"]) {
            this.inputData = changes["inputData"].currentValue || [];
            this.recalculatePage();
            this.mustRecalculateData = true;
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var changes = this.diff.diff(this.inputData);

          if (changes) {
            this.recalculatePage();
            this.mustRecalculateData = true;
          }

          if (this.mustRecalculateData) {
            this.fillData();
            this.mustRecalculateData = false;
          }
        }
      }, {
        key: "fillData",
        value: function fillData() {
          this.activePage = this.activePage;
          this.rowsOnPage = this.rowsOnPage;
          var offset = (this.activePage - 1) * this.rowsOnPage;
          var data = this.inputData;
          var sortBy = this.sortBy;

          if (typeof sortBy === 'string' || sortBy instanceof String) {
            data = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](data, this.caseInsensitiveIteratee(sortBy), [this.sortOrder]);
          } else {
            data = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](data, sortBy, [this.sortOrder]);
          }

          data = lodash__WEBPACK_IMPORTED_MODULE_1__["slice"](data, offset, offset + this.rowsOnPage);
          this.data = data;
        }
      }, {
        key: "caseInsensitiveIteratee",
        value: function caseInsensitiveIteratee(sortBy) {
          return function (row) {
            var value = row;

            var _iterator = _createForOfIteratorHelper(sortBy.split('.')),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sortByProperty = _step.value;

                if (value) {
                  value = value[sortByProperty];
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (value && typeof value === 'string' || value instanceof String) {
              return value.toLowerCase();
            }

            return value;
          };
        }
      }]);

      return DataTable;
    }();

    DataTable.ɵfac = function DataTable_Factory(t) {
      return new (t || DataTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]));
    };

    DataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DataTable,
      selectors: [["table", "svData", ""]],
      inputs: {
        inputData: ["svData", "inputData"],
        sortBy: ["svSortBy", "sortBy"],
        sortOrder: ["svSortOrder", "sortOrder"],
        rowsOnPage: ["svRowsOnPage", "rowsOnPage"],
        activePage: ["svActivePage", "activePage"]
      },
      outputs: {
        sortByChange: "svSortByChange",
        sortOrderChange: "svSortOrderChange"
      },
      exportAs: ["svDataTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'table[svData]',
          exportAs: 'svDataTable'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }];
      }, {
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svData"]
        }],
        sortBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svSortBy"]
        }],
        sortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svSortOrder"]
        }],
        sortByChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["svSortByChange"]
        }],
        sortOrderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["svSortOrderChange"]
        }],
        rowsOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svRowsOnPage"]
        }],
        activePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svActivePage"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/Datatable/DataTableModule.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/Module/Datatable/DataTableModule.ts ***!
    \************************************************************/

  /*! exports provided: DataTableModule */

  /***/
  function srcAppSharedModuleDatatableDataTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableModule", function () {
      return DataTableModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./DataTable */
    "./src/app/shared/Module/Datatable/DataTable.ts");
    /* harmony import */


    var _DefaultSorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./DefaultSorter */
    "./src/app/shared/Module/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Paginator */
    "./src/app/shared/Module/Datatable/Paginator.ts");
    /* harmony import */


    var _BootstrapPaginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./BootstrapPaginator */
    "./src/app/shared/Module/Datatable/BootstrapPaginator.ts");

    var DataTableModule = function DataTableModule() {
      _classCallCheck(this, DataTableModule);
    };

    DataTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DataTableModule
    });
    DataTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DataTableModule_Factory(t) {
        return new (t || DataTableModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DataTableModule, {
        declarations: [_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_5__["BootstrapPaginator"], _DataTable__WEBPACK_IMPORTED_MODULE_2__["DataTable"], _DefaultSorter__WEBPACK_IMPORTED_MODULE_3__["DefaultSorter"], _Paginator__WEBPACK_IMPORTED_MODULE_4__["Paginator"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_5__["BootstrapPaginator"], _DataTable__WEBPACK_IMPORTED_MODULE_2__["DataTable"], _DefaultSorter__WEBPACK_IMPORTED_MODULE_3__["DefaultSorter"], _Paginator__WEBPACK_IMPORTED_MODULE_4__["Paginator"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_5__["BootstrapPaginator"], _DataTable__WEBPACK_IMPORTED_MODULE_2__["DataTable"], _DefaultSorter__WEBPACK_IMPORTED_MODULE_3__["DefaultSorter"], _Paginator__WEBPACK_IMPORTED_MODULE_4__["Paginator"]],
          exports: [_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_5__["BootstrapPaginator"], _DataTable__WEBPACK_IMPORTED_MODULE_2__["DataTable"], _DefaultSorter__WEBPACK_IMPORTED_MODULE_3__["DefaultSorter"], _Paginator__WEBPACK_IMPORTED_MODULE_4__["Paginator"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/Datatable/DefaultSorter.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/Module/Datatable/DefaultSorter.ts ***!
    \**********************************************************/

  /*! exports provided: DefaultSorter */

  /***/
  function srcAppSharedModuleDatatableDefaultSorterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultSorter", function () {
      return DefaultSorter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./DataTable */
    "./src/app/shared/Module/Datatable/DataTable.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DefaultSorter_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
      }
    }

    function DefaultSorter_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
      }
    }

    var _c0 = ["*"];

    var DefaultSorter = /*#__PURE__*/function () {
      function DefaultSorter(svTable) {
        _classCallCheck(this, DefaultSorter);

        this.svTable = svTable;
        this.isSortedByMeAsc = false;
        this.isSortedByMeDesc = false;
      }

      _createClass(DefaultSorter, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.svTable.onSortChange.subscribe(function (event) {
            _this6.isSortedByMeAsc = event.sortBy == _this6.sortBy && event.sortOrder == "asc";
            _this6.isSortedByMeDesc = event.sortBy == _this6.sortBy && event.sortOrder == "desc";
          });
        }
      }, {
        key: "sort",
        value: function sort() {
          if (this.isSortedByMeAsc) {
            this.svTable.setSort(this.sortBy, "desc");
          } else {
            this.svTable.setSort(this.sortBy, "asc");
          }
        }
      }]);

      return DefaultSorter;
    }();

    DefaultSorter.ɵfac = function DefaultSorter_Factory(t) {
      return new (t || DefaultSorter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTable__WEBPACK_IMPORTED_MODULE_1__["DataTable"]));
    };

    DefaultSorter.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultSorter,
      selectors: [["sv-default-sorter"]],
      inputs: {
        sortBy: ["by", "sortBy"]
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 2,
      consts: [[1, "text-nowrap", 2, "cursor", "pointer", 3, "click"], ["class", "glyphicon glyphicon-triangle-top fa fa-sort-up", "aria-hidden", "true", 4, "ngIf"], ["class", "glyphicon glyphicon-triangle-bottom fa fa-sort-down", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-triangle-top", "fa", "fa-sort-up"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-triangle-bottom", "fa", "fa-sort-down"]],
      template: function DefaultSorter_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultSorter_Template_a_click_0_listener() {
            return ctx.sort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DefaultSorter_span_2_Template, 1, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DefaultSorter_span_3_Template, 1, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSortedByMeAsc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSortedByMeDesc);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultSorter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sv-default-sorter',
          template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top fa fa-sort-up\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom fa fa-sort-down\" aria-hidden=\"true\"></span>\n        </a>\n    "
        }]
      }], function () {
        return [{
          type: _DataTable__WEBPACK_IMPORTED_MODULE_1__["DataTable"]
        }];
      }, {
        sortBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["by"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/Datatable/Paginator.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/Module/Datatable/Paginator.ts ***!
    \******************************************************/

  /*! exports provided: Paginator */

  /***/
  function srcAppSharedModuleDatatablePaginatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Paginator", function () {
      return Paginator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./DataTable */
    "./src/app/shared/Module/Datatable/DataTable.ts");

    var _c0 = ["*"];

    var Paginator = /*#__PURE__*/function () {
      function Paginator(injectSVTable) {
        var _this7 = this;

        _classCallCheck(this, Paginator);

        this.injectSVTable = injectSVTable;
        this.dataLength = 0;

        this.onPageChangeSubscriber = function (event) {
          _this7.activePage = event.activePage;
          _this7.rowsOnPage = event.rowsOnPage;
          _this7.dataLength = event.dataLength;
          _this7.lastPage = Math.ceil(_this7.dataLength / _this7.rowsOnPage);
        };
      }

      _createClass(Paginator, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.svTable = this.inputSVTable || this.injectSVTable;
          this.onPageChangeSubscriber(this.svTable.getPage());
          this.svTable.onPageChange.subscribe(this.onPageChangeSubscriber);
        }
      }, {
        key: "setPage",
        value: function setPage(pageNumber) {
          this.svTable.setPage(pageNumber, this.rowsOnPage);
        }
      }, {
        key: "setRowsOnPage",
        value: function setRowsOnPage(rowsOnPage) {
          this.svTable.setPage(this.activePage, rowsOnPage);
        }
      }]);

      return Paginator;
    }();

    Paginator.ɵfac = function Paginator_Factory(t) {
      return new (t || Paginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTable__WEBPACK_IMPORTED_MODULE_1__["DataTable"], 8));
    };

    Paginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Paginator,
      selectors: [["sv-paginator"]],
      inputs: {
        inputSVTable: ["svTable", "inputSVTable"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function Paginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Paginator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "sv-paginator",
          template: "<ng-content></ng-content>"
        }]
      }], function () {
        return [{
          type: _DataTable__WEBPACK_IMPORTED_MODULE_1__["DataTable"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        inputSVTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["svTable"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/language-translation/language-translation.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/Module/language-translation/language-translation.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: createTranslateLoader, LanguageTranslationModule */

  /***/
  function srcAppSharedModuleLanguageTranslationLanguageTranslationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageTranslationModule", function () {
      return LanguageTranslationModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
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

    var LanguageTranslationModule = function LanguageTranslationModule(translate) {
      _classCallCheck(this, LanguageTranslationModule);

      this.translate = translate; // Gets Default language from browser if available, otherwise set English ad default

      this.translate.addLangs(['en', 'ch']);
      this.translate.setDefaultLang('ch');
      var browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|ch/) ? browserLang : 'en');
    };

    LanguageTranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LanguageTranslationModule
    });
    LanguageTranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LanguageTranslationModule_Factory(t) {
        return new (t || LanguageTranslationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      },
      imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
        }
      })], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LanguageTranslationModule, {
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LanguageTranslationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
            }
          })],
          exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/preloader/preloader.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/Module/preloader/preloader.component.ts ***!
    \****************************************************************/

  /*! exports provided: PreloaderComponent */

  /***/
  function srcAppSharedModulePreloaderPreloaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function () {
      return PreloaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreloaderComponent = /*#__PURE__*/function () {
      function PreloaderComponent() {
        _classCallCheck(this, PreloaderComponent);
      }

      _createClass(PreloaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreloaderComponent;
    }();

    PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) {
      return new (t || PreloaderComponent)();
    };

    PreloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreloaderComponent,
      selectors: [["app-preloader"]],
      decls: 14,
      vars: 0,
      consts: [["id", "preloader-wrap"], [1, "spinner", "spinner-8"], [1, "ms-circle1", "ms-child"], [1, "ms-circle2", "ms-child"], [1, "ms-circle3", "ms-child"], [1, "ms-circle4", "ms-child"], [1, "ms-circle5", "ms-child"], [1, "ms-circle6", "ms-child"], [1, "ms-circle7", "ms-child"], [1, "ms-circle8", "ms-child"], [1, "ms-circle9", "ms-child"], [1, "ms-circle10", "ms-child"], [1, "ms-circle11", "ms-child"], [1, "ms-circle12", "ms-child"]],
      template: function PreloaderComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9Nb2R1bGUvcHJlbG9hZGVyL3ByZWxvYWRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preloader',
          templateUrl: './preloader.component.html',
          styleUrls: ['./preloader.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/shared.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/Module/shared.module.ts ***!
    \************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Datatable/DataTableModule */
    "./src/app/shared/Module/Datatable/DataTableModule.ts");
    /* harmony import */


    var _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./language-translation/language-translation.module */
    "./src/app/shared/Module/language-translation/language-translation.module.ts");
    /* harmony import */


    var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./preloader/preloader.component */
    "./src/app/shared/Module/preloader/preloader.component.ts");
    /* harmony import */


    var _toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./toaster/toast.module */
    "./src/app/shared/Module/toaster/toast.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], _toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"]],
        imports: [_toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        exports: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"], _toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          declarations: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"]],
          exports: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"], _toaster_toast_module__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/toaster/toast.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/Module/toaster/toast.module.ts ***!
    \*******************************************************/

  /*! exports provided: ToastModule */

  /***/
  function srcAppSharedModuleToasterToastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastModule", function () {
      return ToastModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toaster_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toaster-container.component */
    "./src/app/shared/Module/toaster/toaster-container.component.ts");
    /* harmony import */


    var _toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toaster.component */
    "./src/app/shared/Module/toaster/toaster.component.ts");

    var ToastModule = function ToastModule() {
      _classCallCheck(this, ToastModule);
    };

    ToastModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ToastModule
    });
    ToastModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ToastModule_Factory(t) {
        return new (t || ToastModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToastModule, {
        declarations: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          declarations: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]],
          exports: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToasterContainerComponent"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/toaster/toaster-container.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/Module/toaster/toaster-container.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ToasterContainerComponent */

  /***/
  function srcAppSharedModuleToasterToasterContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function () {
      return ToasterContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toaster.service */
    "./src/app/shared/Module/toaster/toaster.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toaster.component */
    "./src/app/shared/Module/toaster/toaster.component.ts");

    function ToasterContainerComponent_app_toaster_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toaster", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ToasterContainerComponent_app_toaster_0_Template_app_toaster_remove_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.remove($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var toast_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toast", toast_r1)("i", i_r2);
      }
    }

    var ToasterContainerComponent = /*#__PURE__*/function () {
      function ToasterContainerComponent(toaster) {
        _classCallCheck(this, ToasterContainerComponent);

        this.toaster = toaster;
        this.toasts = [];
      }

      _createClass(ToasterContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.toaster.toast$.subscribe(function (toast) {
            _this8.toasts = [toast].concat(_toConsumableArray(_this8.toasts));
            setTimeout(function () {
              return _this8.toasts.pop();
            }, toast.delay || 1000);
          });
        }
      }, {
        key: "remove",
        value: function remove(index) {
          this.toasts = this.toasts.filter(function (v, i) {
            return i !== index;
          }); //this.toasts.splice(index, 1);
        }
      }]);

      return ToasterContainerComponent;
    }();

    ToasterContainerComponent.ɵfac = function ToasterContainerComponent_Factory(t) {
      return new (t || ToasterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]));
    };

    ToasterContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToasterContainerComponent,
      selectors: [["app-toaster-container"]],
      decls: 1,
      vars: 1,
      consts: [[3, "toast", "i", "remove", 4, "ngFor", "ngForOf"], [3, "toast", "i", "remove"]],
      template: function ToasterContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToasterContainerComponent_app_toaster_0_Template, 1, 2, "app-toaster", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toasts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toaster-container',
          template: "\n    <app-toaster *ngFor=\"let toast of toasts; let i=index\"\n      [toast]=\"toast\" [i]=\"i\"\n      (remove)=\"remove($event)\"></app-toaster>\n  ",
          styles: []
        }]
      }], function () {
        return [{
          type: _toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/toaster/toaster.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/Module/toaster/toaster.component.ts ***!
    \************************************************************/

  /*! exports provided: ToasterComponent */

  /***/
  function srcAppSharedModuleToasterToasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterComponent", function () {
      return ToasterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToasterComponent = function ToasterComponent() {
      _classCallCheck(this, ToasterComponent);

      this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    ToasterComponent.ɵfac = function ToasterComponent_Factory(t) {
      return new (t || ToasterComponent)();
    };

    ToasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToasterComponent,
      selectors: [["app-toaster"]],
      inputs: {
        toast: "toast",
        i: "i"
      },
      outputs: {
        remove: "remove"
      },
      decls: 7,
      vars: 7,
      consts: [[1, "toast-heading"], [1, "close", 3, "click"]],
      template: function ToasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToasterComponent_Template_a_click_5_listener() {
            return ctx.remove.emit(ctx.i);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toast toast-", ctx.toast.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("bottom", ctx.i * 100, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toast.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toast.body);
        }
      },
      styles: [".toast[_ngcontent-%COMP%] {\n      position: fixed;\n      right: 0;\n      top: 10px;\n      width: 300px;\n      z-index: 100000000;\n      height: 80px;\n      padding: .75rem 1.25rem;\n      margin-top: 1rem;\n      border: 1px solid transparent;\n      border-radius: .25rem;\n      animation: move 0.3s both;\n    }\n\n    .toast-success[_ngcontent-%COMP%] {\n      color: #155724;\n      background-color: #d4edda;\n      border-color: #c3e6cb;\n    }\n\n    .toast-error[_ngcontent-%COMP%] {\n      color: #721c24;\n      background-color: #f8d7da;\n      border-color: #f5c6cb;\n    }\n\n    .toast-warning[_ngcontent-%COMP%] {\n      color: #856404;\n      background-color: #fff3cd;\n      border-color: #ffeeba;\n    }\n\n    .close[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 7px;\n      right: 10px;\n      font-size: 1.5em;\n      cursor: pointer;\n    }\n\n    .toast-heading[_ngcontent-%COMP%] {\n      margin-top: 10px;\n    }\n\n    @keyframes move {\n      from {\n        transform: translateX(100%);\n      }\n      to {\n        transform: translateX(0);\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toaster',
          template: "\n    <div class=\"toast toast-{{toast.type}}\"\n      [style.bottom.px]=\"i*100\">\n      <h4 class=\"toast-heading\">{{toast.title}}</h4>\n      <p>{{toast.body}}</p>\n      <a class=\"close\" (click)=\"remove.emit(i)\">&times;</a>\n    </div>\n  ",
          styles: ["\n    .toast {\n      position: fixed;\n      right: 0;\n      top: 10px;\n      width: 300px;\n      z-index: 100000000;\n      height: 80px;\n      padding: .75rem 1.25rem;\n      margin-top: 1rem;\n      border: 1px solid transparent;\n      border-radius: .25rem;\n      animation: move 0.3s both;\n    }\n\n    .toast-success {\n      color: #155724;\n      background-color: #d4edda;\n      border-color: #c3e6cb;\n    }\n\n    .toast-error {\n      color: #721c24;\n      background-color: #f8d7da;\n      border-color: #f5c6cb;\n    }\n\n    .toast-warning {\n      color: #856404;\n      background-color: #fff3cd;\n      border-color: #ffeeba;\n    }\n\n    .close {\n      position: absolute;\n      top: 7px;\n      right: 10px;\n      font-size: 1.5em;\n      cursor: pointer;\n    }\n\n    .toast-heading {\n      margin-top: 10px;\n    }\n\n    @keyframes move {\n      from {\n        transform: translateX(100%);\n      }\n      to {\n        transform: translateX(0);\n      }\n  "]
        }]
      }], null, {
        toast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        i: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/Module/toaster/toaster.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/Module/toaster/toaster.service.ts ***!
    \**********************************************************/

  /*! exports provided: ToasterService */

  /***/
  function srcAppSharedModuleToasterToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return ToasterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ToasterService = /*#__PURE__*/function () {
      function ToasterService() {
        _classCallCheck(this, ToasterService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.toast$ = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (toast) {
          return toast !== null;
        }));
      }

      _createClass(ToasterService, [{
        key: "show",
        value: function show(type, title, body, delay) {
          this.subject.next({
            type: type,
            title: title,
            body: body,
            delay: delay
          });
        }
      }]);

      return ToasterService;
    }();

    ToasterService.ɵfac = function ToasterService_Factory(t) {
      return new (t || ToasterService)();
    };

    ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToasterService,
      factory: ToasterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Service/userService/user.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/Service/userService/user.service.ts ***!
    \************************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServiceUserServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.loginURL = '/login';
        this.noAuthHeader = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'NoAuth': 'True'
          })
        };
      } //For login & register


      _createClass(UserService, [{
        key: "postRequest",
        value: function postRequest(URL) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          if (header) return this.http.post(URL, data, this.getHeader());else return this.http.post(URL, data, this.noAuthHeader);
        }
      }, {
        key: "getRequest",
        value: function getRequest(URL) {
          var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (header) return this.http.get(URL, this.getHeader());else return this.http.get(URL, this.noAuthHeader);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.deleteToken();
          this.gotoHome();
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.router.navigateByUrl('http://vdms.aidetecting.com/');
        }
      }, {
        key: "gotoFirstPage",
        value: function gotoFirstPage() {
          this.router.navigateByUrl('/map/monitor');
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', JSON.stringify(token));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return JSON.parse(localStorage.getItem('token'));
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "getUserPayload",
        value: function getUserPayload() {
          var token = this.getToken();

          if (token) {
            var userPayload = atob(token['token'].split('.')[1]);
            return JSON.parse(userPayload);
          } else return null;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var userPayload = this.getUserPayload();
          if (userPayload) return userPayload.exp > Date.now() / 1000;else return false;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          if (!this.getToken()) {
            this.router.navigateByUrl(this.loginURL);
            return;
          } else if (!this.isLoggedIn()) {
            this.router.navigateByUrl(this.loginURL);
            return;
          }

          var header = {
            headers: {
              Authorization: "Bearer ".concat(this.getToken().token)
            },
            user: this.getToken().userInfo
          };
          return header;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Development\Angular\GIS\front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map