function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
    /* harmony import */


    var _shared_Service_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/Service/userService/auth/auth.guard */
    "./src/app/shared/Service/userService/auth/auth.guard.ts");
    /* harmony import */


    var _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/layouts/layouts.component */
    "./src/app/components/layouts/layouts.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'map',
      pathMatch: 'full'
    }, {
      path: 'map',
      component: _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
      canActivate: [_shared_Service_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
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


    var _shared_Module_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toaster-container");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_Module_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_4__["ToasterContainerComponent"]],
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/Module/language-translation/language-translation.module */
    "./src/app/shared/Module/language-translation/language-translation.module.ts");
    /* harmony import */


    var _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/Module/toaster/toast.module */
    "./src/app/shared/Module/toaster/toast.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/pages/error/error.component */
    "./src/app/components/pages/error/error.component.ts");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");
    /* harmony import */


    var _shared_Module_preloader_preloader_componentRect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/Module/preloader/preloader.componentRect */
    "./src/app/shared/Module/preloader/preloader.componentRect.ts");
    /* harmony import */


    var _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/layouts/layouts.component */
    "./src/app/components/layouts/layouts.component.ts");
    /* harmony import */


    var _components_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _components_layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _components_layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
    /* harmony import */


    var _components_layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__["LanguageTranslationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_4__["ToastModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _shared_Module_preloader_preloader_componentRect__WEBPACK_IMPORTED_MODULE_11__["PreloaderComponentRect"], _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"], _components_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_13__["SideNavbarComponent"], _components_layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_14__["TopNavbarComponent"], _components_layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_15__["QuickBarComponent"], _components_layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_16__["FootbarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__["LanguageTranslationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_4__["ToastModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _shared_Module_preloader_preloader_componentRect__WEBPACK_IMPORTED_MODULE_11__["PreloaderComponentRect"], _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"], _components_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_13__["SideNavbarComponent"], _components_layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_14__["TopNavbarComponent"], _components_layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_15__["QuickBarComponent"], _components_layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_16__["FootbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_Module_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__["LanguageTranslationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_Module_toaster_toast_module__WEBPACK_IMPORTED_MODULE_4__["ToastModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layouts/footbar/footbar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/layouts/footbar/footbar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FootbarComponent */

  /***/
  function srcAppComponentsLayoutsFootbarFootbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FootbarComponent", function () {
      return FootbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FootbarComponent = /*#__PURE__*/function () {
      function FootbarComponent() {
        _classCallCheck(this, FootbarComponent);
      }

      _createClass(FootbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FootbarComponent;
    }();

    FootbarComponent.ɵfac = function FootbarComponent_Factory(t) {
      return new (t || FootbarComponent)();
    };

    FootbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FootbarComponent,
      selectors: [["app-footbar"]],
      decls: 7,
      vars: 0,
      consts: [[1, "footer", "py-4"], [1, "container"], [1, "copyright"], ["href", "http://www.beian.miit.gov.cn/#/integrated/recordQuery", "target", "_blank"]],
      template: function FootbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA9 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ICP\u4E3B\u4F53\u5907\u6848\u53F7\uFF1A\u8FBDICP\u590720006927\u53F7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 71px;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   .logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding:0px;\r\n}\r\n.ms-img-round[_ngcontent-%COMP%]{ \r\n  width:36px;\r\n  height: 36px;\r\n}\r\n.avatarText[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-weight: 800;\r\n    font-style: oblique;\r\n}\r\n.username[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 10px;\r\n  left: 5px;\r\n  font-size: 16px;\r\n  font-family: cursive;\r\n}\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n.body1[_ngcontent-%COMP%] {\r\n  padding-top: 0px !important;\r\n}\r\n.header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n.ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n.footer[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-size: 0.9rem;\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3RiYXIvZm9vdGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNDO0lBQ0csdUJBQXVCO0FBQzNCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbU1BQW1NO0FBQ3JNIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3RiYXIvZm9vdGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tc24gYSBpbWcge1xyXG4gICAgaGVpZ2h0OiA3MXB4O1xyXG59XHJcbi5zaWRlLW5hdiAubG9nby1zbiBhIHtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4ubXMtaW1nLXJvdW5keyBcclxuICB3aWR0aDozNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG4uYXZhdGFyVGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuLnVzZXJuYW1le1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4gLmxhYmVsTWlkZGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGJvdHRvbTogY2FsYygxMDAlICsgLTI3cHgpO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xyXG59XHJcbi5ib2R5MSB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXIxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjcwOTNiODtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy1jYXJkLWZoe1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FootbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footbar',
          templateUrl: './footbar.component.html',
          styleUrls: ['./footbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layouts/layouts.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/layouts/layouts.component.ts ***!
    \*********************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppComponentsLayoutsLayoutsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layouts"]],
      decls: 6,
      vars: 0,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavbarComponent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_4__["QuickBarComponent"]],
      styles: [".logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 71px;\r\n}\r\n.mousePointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   .logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding:0px;\r\n}\r\n.ms-img-round[_ngcontent-%COMP%]{\r\n  width:36px;\r\n  height: 36px;\r\n}\r\n.avatarText[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-weight: 800;\r\n    font-style: oblique;\r\n}\r\n.username[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 3px;\r\n  left: 5px;\r\n  font-size: 16px;\r\n  font-family: cursive;\r\n}\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n.body1[_ngcontent-%COMP%] {\r\n  padding-top: 0px !important;\r\n}\r\n.header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n.ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQztJQUNHLHVCQUF1QjtBQUMzQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGVBQWU7QUFDZixVQUFVO0FBQ1YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXNuIGEgaW1nIHtcclxuICAgIGhlaWdodDogNzFweDtcclxufVxyXG4ubW91c2VQb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNpZGUtbmF2IC5sb2dvLXNuIGEge1xyXG4gIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5tcy1pbWctcm91bmR7XHJcbiAgd2lkdGg6MzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuLmF2YXRhclRleHR7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbi51c2VybmFtZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4gLmxhYmVsTWlkZGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGJvdHRvbTogY2FsYygxMDAlICsgLTI3cHgpO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xOXB4O1xyXG59XHJcbi5ib2R5MSB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXIxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjcwOTNiODtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy1jYXJkLWZoe1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layouts',
          templateUrl: './layouts.component.html',
          styleUrls: ['./layouts.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layouts/quick-bar/quick-bar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/layouts/quick-bar/quick-bar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: QuickBarComponent */

  /***/
  function srcAppComponentsLayoutsQuickBarQuickBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickBarComponent", function () {
      return QuickBarComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var QuickBarComponent = /*#__PURE__*/function () {
      function QuickBarComponent() {
        _classCallCheck(this, QuickBarComponent);
      }

      _createClass(QuickBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuickBarComponent;
    }();

    QuickBarComponent.ɵfac = function QuickBarComponent_Factory(t) {
      return new (t || QuickBarComponent)();
    };

    QuickBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuickBarComponent,
      selectors: [["app-quick-bar"]],
      decls: 784,
      vars: 0,
      consts: [["id", "ms-quick-bar", 1, "ms-quick-bar", "fixed", "ms-d-block-lg"], ["role", "tablist", 1, "nav", "nav-tabs", "ms-quick-bar-list"], ["role", "presentation", "data-toggle", "tooltip", "data-placement", "left", "title", "Launch To-do-list", "data-title", "To-do-list", 1, "ms-quick-bar-item", "ms-has-qa"], ["href", "#qa-toDo", "aria-controls", "qa-toDo", "role", "tab", "data-toggle", "tab"], [1, "flaticon-list"], ["role", "presentation", "data-toggle", "tooltip", "data-placement", "left", "title", "Launch Reminders", "data-title", "Reminders", 1, "ms-quick-bar-item", "ms-has-qa"], ["href", "#qa-reminder", "aria-controls", "qa-reminder", "role", "tab", "data-toggle", "tab"], [1, "flaticon-bell"], ["role", "presentation", "data-toggle", "tooltip", "data-placement", "left", "title", "Launch Notes", "data-title", "Notes", 1, "ms-quick-bar-item", "ms-has-qa"], ["href", "#qa-notes", "aria-controls", "qa-notes", "role", "tab", "data-toggle", "tab"], [1, "flaticon-pencil"], ["role", "presentation", "data-toggle", "tooltip", "data-placement", "left", "title", "Invite Members", "data-title", "Invite Members", 1, "ms-quick-bar-item", "ms-has-qa"], ["href", "#qa-invite", "aria-controls", "qa-invite", "role", "tab", "data-toggle", "tab"], [1, "flaticon-share-1"], ["role", "presentation", "data-toggle", "tooltip", "data-placement", "left", "title", "Settings", "data-title", "Settings", 1, "ms-quick-bar-item", "ms-has-qa"], ["href", "#qa-settings", "aria-controls", "qa-settings", "role", "tab", "data-toggle", "tab"], [1, "flaticon-gear"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Configure Quick Access", 1, "ms-configure-qa"], ["href", "#"], [1, "flaticon-hammer"], [1, "ms-quick-bar-content"], [1, "ms-quick-bar-header", "clearfix"], [1, "ms-quick-bar-title", "float-left"], ["type", "button", "data-target", "#ms-quick-bar", "data-toggle", "hideQuickBar", "aria-label", "Close", 1, "close", "ms-toggler"], ["aria-hidden", "true"], [1, "ms-quick-bar-body", "tab-content"], ["role", "tabpanel", "id", "qa-chat", 1, "tab-pane"], [1, "ms-quickbar-container", "ms-chat-conversations", "ms-scrollable"], [1, "ms-panel-header"], [1, "ms-chat-header", "justify-content-between"], [1, "ms-chat-user-container", "media", "clearfix"], [1, "ms-chat-status", "ms-status-online", "ms-chat-img", "mr-3", "align-self-center"], ["src", "assets/img/costic/customer-3.jpg", "alt", "people", 1, "ms-img-round"], [1, "media-body", "ms-chat-user-info", "mt-1"], [1, "text-disabled", "fs-12"], [1, "ms-list", "ms-list-flex", "ms-chat-controls"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Call"], [1, "material-icons"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Video Call"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Add to Chat"], [1, "ms-panel-body", "ms-scrollable"], [1, "ms-chat-bubble", "ms-chat-message", "ms-chat-outgoing", "media", "clearfix"], [1, "ms-chat-status", "ms-status-online", "ms-chat-img"], [1, "media-body"], [1, "ms-chat-text"], [1, "ms-chat-time"], [1, "ms-chat-bubble", "ms-chat-message", "media", "ms-chat-incoming", "clearfix"], ["src", "assets/img/costic/customer-5.jpg", "alt", "people", 1, "ms-img-round"], [1, "ms-chat-bubble", "ms-chat-message", "ms-chat-incoming", "media", "clearfix"], [1, "ms-panel-footer", "pt-0"], [1, "ms-chat-textbox"], [1, "ms-list-flex", "mb-0"], [1, "ms-chat-vn"], [1, "ms-chat-input"], ["type", "text", "name", "msg", "placeholder", "Enter Message", "value", ""], [1, "ms-chat-text-controls", "ms-list-flex"], ["role", "tabpanel", "id", "qa-email", 1, "tab-pane"], [1, "ms-quickbar-container", "ms-email-main", "ms-scrollable"], [1, "ms-email-pagination"], [1, "ms-email-pagination-item"], ["routerLink", "/email", 1, "ms-email-pagination-link"], [1, "ms-email-header"], [1, "ms-email-options"], [1, "ms-checkbox-wrap"], ["type", "checkbox", "value", "", 1, "ms-email-check-all"], [1, "ms-checkbox-check"], [1, "dropdown"], ["routerLink", "/email", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "has-chevron"], [1, "dropdown-menu"], [1, "ms-dropdown-list"], ["routerLink", "/email", 1, "media", "p-2"], ["routerLink", "/email", 1, "text-disabled"], [1, "ms-email-content"], [1, "ms-scrollable"], [1, "media", "ms-email", "clearfix"], [1, "ms-email-controls"], ["type", "checkbox", "value", ""], [1, "material-icons", "ms-pin-email"], [1, "ms-email-img", "mr-3"], ["src", "assets/img/costic/customer-1.jpg", "alt", "people", 1, "ms-img-round"], [1, "media-body", "ms-email-details"], [1, "ms-email-sender"], [1, "ms-email-subject"], [1, "ms-email-time"], [1, "ms-email-msg"], ["routerLink", "/email", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "ms-hoverable-dropdown"], [1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/email", 1, "media", "p-2", "ms-pin-email"], [1, "media", "ms-email", "pinned", "clearfix"], ["src", "assets/img/costic/customer-2.jpg", "alt", "people", 1, "ms-img-round"], ["routerLink", "/email"], ["href", "#", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "ms-hoverable-dropdown"], ["href", "#", 1, "media", "p-2"], ["href", "#", 1, "media", "p-2", "ms-pin-email"], ["src", "assets/img/costic/customer-4.jpg", "alt", "people", 1, "ms-img-round"], ["src", "assets/img/costic/customer-6.jpg", "alt", "people", 1, "ms-img-round"], ["src", "assets/img/costic/customer-7.jpg", "alt", "people", 1, "ms-img-round"], ["src", "assets/img/costic/customer-8.jpg", "alt", "people", 1, "ms-img-round"], ["src", "assets/img/costic/customer-9.jpg", "alt", "people", 1, "ms-img-round"], ["role", "tabpanel", "id", "qa-toDo", 1, "tab-pane"], [1, "ms-quickbar-container", "ms-todo-list-container", "ms-scrollable"], [1, "ms-add-task-block"], [1, "form-group", "mx-3", "mt-0", "fs-14", "clearfix"], ["type", "text", "id", "task-block", "name", "todo-block", "placeholder", "Add Task Block", "value", "", 1, "form-control", "fs-14", "float-left"], ["type", "submit", 1, "ms-btn-icon", "bg-primary", "float-right"], [1, "material-icons", "text-disabled"], [1, "ms-todo-list"], [1, "ms-card", "ms-qa-card", "ms-deletable"], [1, "ms-card-header", "clearfix"], [1, "ms-card-title"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Add a Task to this block", 1, "ms-add-task-to-block", "ms-btn-icon", "float-right"], [1, "ms-card-body"], [1, "ms-list", "ms-task-block"], [1, "ms-list-item", "ms-to-do-task", "ms-deletable"], [1, "ms-checkbox-wrap", "ms-todo-complete"], ["type", "submit", 1, "close"], [1, "flaticon-trash", "ms-delete-trigger"], [1, "ms-card-footer", "clearfix"], ["href", "#", 1, "text-disabled", "mr-2"], [1, "flaticon-archive"], ["href", "#", 1, "text-disabled", "ms-delete-trigger", "float-right"], [1, "flaticon-trash"], ["role", "tabpanel", "id", "qa-reminder", 1, "tab-pane"], [1, "ms-quickbar-container", "ms-reminders"], [1, "ms-qa-options"], ["href", "#", "data-toggle", "modal", "data-target", "#reminder-modal"], [1, "ms-quickbar-container", "ms-scrollable"], [1, "material-icons", "fs-14"], [1, "ms-note-editor", "float-right"], ["href", "#", "data-toggle", "modal", "data-target", "#reminder-modal", 1, "text-disabled", "mr-2"], ["href", "#", 1, "text-disabled", "ms-delete-trigger"], ["role", "tabpanel", "id", "qa-notes", 1, "tab-pane"], ["href", "#", "data-toggle", "modal", "data-target", "#notes-modal"], [1, "flaticon-sticky-note"], [1, "flaticon-excel"], [1, "ms-card-header"], [1, "ms-note-members", "clearfix", "mb-0"], [1, "ms-deletable"], ["src", "assets/img/people/people-3.jpg", "alt", "member"], ["src", "assets/img/people/people-5.jpg", "alt", "member"], [1, "dropdown", "float-left"], ["href", "#", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-disabled"], [1, "dropdown-menu-header"], [1, "dropdown-header", "ms-inline", "m-0"], [1, "text-disabled"], [1, "dropdown-divider"], [1, "ms-scrollable", "ms-dropdown-list", "ms-members-list"], [1, "mr-2", "align-self-center"], ["src", "assets/img/people/people-10.jpg", "alt", "people", 1, "ms-img-round"], ["src", "assets/img/people/people-9.jpg", "alt", "people", 1, "ms-img-round"], ["src", "assets/img/people/people-7.jpg", "alt", "people", 1, "ms-img-round"], ["href", "#", "data-toggle", "modal", "data-target", "#notes-modal", 1, "text-disabled", "mr-2"], ["src", "assets/img/people/people-9.jpg", "alt", "member"], ["role", "tabpanel", "id", "qa-invite", 1, "tab-pane"], [1, "ms-quickbar-container", "text-center", "ms-invite-member"], [1, "flaticon-network"], [1, "ms-form-group"], ["type", "text", "placeholder", "Member Email", "name", "invite-email", "value", "", 1, "form-control"], ["type", "submit", "name", "invite-member", 1, "btn", "btn-primary", "w-100"], ["role", "tabpanel", "id", "qa-settings", 1, "tab-pane"], [1, "row"], [1, "col-md-12", "text-left", "mb-5"], [1, "section-title", "bold"], [1, "ms-switch"], ["type", "checkbox", "id", "dark-mode"], [1, "ms-switch-slider", "round"], ["type", "checkbox", "id", "remove-quickbar"], [1, "col-md-12", "text-left"], [1, "ms-directions", "mb-0"]],
      template: function QuickBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Active Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "local_phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "videocam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "person_add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10:33 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "10:33 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget orci ex.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "10:36 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "10:41 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "10:44 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "11:01 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "mic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "tag_faces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "attach_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "camera_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "You have 17 Unread Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ul", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "50-100 of 985");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Select ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "ul", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "local_offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Folders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ul", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "attachment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " 2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "img", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "li", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "img", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "h6", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "[WordPress] New Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "2 Hours ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "Mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "form", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "ul", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "h6", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "Task Block Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "ul", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "li", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "label", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](573, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, " Task to do ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "li", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "label", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](580, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "Task to do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "a", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](588, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, " Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "ul", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "a", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " New Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "Developer Meeting in Block B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "i", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, " Today - 3:45 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "a", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](615, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "Start adding change log to version 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "i", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, " Tomorrow - 12:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "a", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](628, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "ul", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "a", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](637, "i", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, " New Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](641, "i", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, " Export to Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "h6", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "Don't forget to check with the designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis. Etiam at dapibus neque, vel varius metus. Pellentesque eget orci malesuada, venenatis magna et");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "ul", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](653, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](655, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](659, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, " Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "ul", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "li", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "h6", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "span", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "Share With");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "li", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "li", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](670, "img", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "img", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "Raymart Sandiago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "img", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "Heather Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "a", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "h6", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "Perform the required unit tests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis. Etiam at dapibus neque, vel varius metus. Pellentesque eget orci malesuada, venenatis magna et");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "ul", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](702, "img", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](706, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, " Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "ul", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "li", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "h6", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "span", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "Share With");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](713, "li", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "li", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "img", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](723, "img", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "Raymart Sandiago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](729, "img", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "Heather Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "a", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](735, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](738, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](742, "i", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "Invite Team Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "div", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](747, "input", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "button", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "Invite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "div", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "div", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "div", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "h4", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "Customize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "label", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](759, "input", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "span", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "label", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](765, "input", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](766, "span", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, " Remove Quickbar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "div", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "h4", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Keyboard Shortcuts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "p", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "Esc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, " Close Quick Bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "p", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "Alt + (1 -> 6)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, " Open Quick Bar Tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "p", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "Alt + Q");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, " Enable Quick Bar Configure Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9xdWljay1iYXIvcXVpY2stYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quick-bar',
          templateUrl: './quick-bar.component.html',
          styleUrls: ['./quick-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layouts/side-navbar/side-navbar.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/layouts/side-navbar/side-navbar.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SideNavbarComponent */

  /***/
  function srcAppComponentsLayoutsSideNavbarSideNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavbarComponent", function () {
      return SideNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/Service/userService/user.service */
    "./src/app/shared/Service/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var SideNavbarComponent = /*#__PURE__*/function () {
      function SideNavbarComponent(userService) {
        _classCallCheck(this, SideNavbarComponent);

        this.userService = userService;
      }

      _createClass(SideNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('dd');
        }
      }, {
        key: "sidebar_toggle",
        value: function sidebar_toggle() {
          $("#ms-side-nav").toggleClass('ms-aside-open');
          $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
          $(".ms-body").toggleClass('ms-aside-left-open');
        }
      }]);

      return SideNavbarComponent;
    }();

    SideNavbarComponent.ɵfac = function SideNavbarComponent_Factory(t) {
      return new (t || SideNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    SideNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideNavbarComponent,
      selectors: [["app-side-navbar"]],
      decls: 40,
      vars: 28,
      consts: [["id", "ms-side-nav", 1, "side-nav", "fixed", "ms-aside-scrollable", "ms-aside-left"], [1, "logo-sn", "ms-d-block-lg"], ["routerLink", "/", 1, "pl-0", "ml-0", "text-center", "navbar-brand", "mr-0"], ["src", "assets/img/logo.png", "alt", "logo"], [1, "avatarText"], ["id", "side-nav-accordion", 1, "accordion", "ms-main-aside", "fs-14"], [1, "menu-item"], ["href", "", "data-toggle", "collapse", "data-target", "#monitor", "aria-expanded", "false", "aria-controls", "report", 1, "has-chevron"], [1, "fas", "fa", "fa-laptop"], ["id", "monitor", "aria-labelledby", "report", "data-parent", "#side-nav-accordion", 1, "collapse"], ["routerLink", "/map/monitor/vehicle", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/map/monitor/car", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/map/routing", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], [1, "fas", "fa", "fa-plane"], ["routerLink", "/map/replay", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], [1, "fas", "fa", "fa-camera-retro"], ["routerLink", "/map/report", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], [1, "fas", "fa", "fa-clipboard"]],
      template: function SideNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AirflyBird");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_a_click_15_listener() {
            return ctx.sidebar_toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_a_click_19_listener() {
            return ctx.sidebar_toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_a_click_23_listener() {
            return ctx.sidebar_toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_a_click_29_listener() {
            return ctx.sidebar_toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_a_click_35_listener() {
            return ctx.sidebar_toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "Monitor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "city monitor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 15, "car monitor"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 17, "Routing"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 19, "Replay"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 21, "Reports"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 71px;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   .logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding:0px;\r\n}\r\n.avatarText[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-weight: 800;\r\n    font-style: oblique;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL3NpZGUtbmF2YmFyL3NpZGUtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL3NpZGUtbmF2YmFyL3NpZGUtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zbiBhIGltZyB7XHJcbiAgICBoZWlnaHQ6IDcxcHg7XHJcbn1cclxuLnNpZGUtbmF2IC5sb2dvLXNuIGEge1xyXG4gIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5hdmF0YXJUZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-navbar',
          templateUrl: './side-navbar.component.html',
          styleUrls: ['./side-navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layouts/top-navbar/top-navbar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/layouts/top-navbar/top-navbar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TopNavbarComponent */

  /***/
  function srcAppComponentsLayoutsTopNavbarTopNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavbarComponent", function () {
      return TopNavbarComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/Service/userService/user.service */
    "./src/app/shared/Service/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/Module/toaster/toaster.service */
    "./src/app/shared/Module/toaster/toaster.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopNavbarComponent_div_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
      }
    }

    function TopNavbarComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
      }
    }

    function TopNavbarComponent_div_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "password does not math"), " ");
      }
    }

    var TopNavbarComponent = /*#__PURE__*/function () {
      function TopNavbarComponent(userService, router, _formBuilder, toastr, translate) {
        _classCallCheck(this, TopNavbarComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.translate = translate;
        this.defaultImage = "assets/img/error/unknown.jpg";
        this.VDMSURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].VDMSURL;
        this.VDMSAVATARURL = this.VDMSURL + 'assets/img/avatars/';
        this.formData = new FormData();
        this.currentLanguage = "en";
        this.languageName = "English";
        this.LanguageImage = {
          en: "assets/img/country/us-flag.png",
          ch: "assets/img/country/china-flag.png"
        };
      }

      _createClass(TopNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.userService.getToken()['userInfo'];
          this.role = this.userService.getToken()['role'];
          if (this.role == 'agent' || this.role == 'user') this.avatar = this.VDMSAVATARURL + this.user.avatar;else this.avatar = this.VDMSAVATARURL + this.user.photo;
          this.refresh(); // this.checkLogin();
        }
      }, {
        key: "sidebar_toggle",
        value: function sidebar_toggle() {
          $("#ms-side-nav").toggleClass('ms-aside-open');
          $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
          $(".ms-body").toggleClass('ms-aside-left-open');
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this2 = this;

          var checkIfLogin = function checkIfLogin() {
            if (_this2.userService.isLoggedIn() == false) _this2.router.navigateByUrl(_this2.userService.loginURL);
          };

          this.interval = setInterval(checkIfLogin, 5000);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.interval);
        } //LanguageChagePart

      }, {
        key: "changeLang",
        value: function changeLang(language) {
          this.currentLanguage = language;
          if (language == 'en') this.languageName = "English";else if (language == 'ch') this.languageName = "中文";
          localStorage.setItem('language', language);
          this.translate.use(language);
        } //@@@@@UserDropDown part
        //passwordReset

      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "savePassWord",
        value: function savePassWord() {
          var _this3 = this;

          this.userService.postRequest('api/editPassword', this.formGroup.value).subscribe(function (res) {
            _this3.Toaster('success', '', 'success');

            _this3.refresh();
          }, function (err) {
            _this3.refresh();

            _this3.handleError(err);
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var phone = '';
          if (this.role == 'admin') phone = this.user.phone_number;else if (this.role == 'agent') phone = this.user.contact_number;else if (this.role == 'user') phone = this.user.phone;
          var accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{11}$/;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          this.formGroup = this._formBuilder.group({
            phone: [phone],
            previous: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            confirm: [''],
            role: [this.role]
          });
        }
      }, {
        key: "passwordConfirm",
        value: function passwordConfirm() {
          if (this.formGroup.value.password.length > 0 && this.formGroup.value.password != this.formGroup.value.confirm) return false;else if (this.formGroup.value.password.length > 0 && this.formGroup.value.password == this.formGroup.value.confirm) return true;else return true;
        } //logOut

      }, {
        key: "logOut",
        value: function logOut() {
          this.userService.logOut();
        }
      }, {
        key: "getName",
        value: function getName() {
          if ('name' in this.user) return this.user.name;else return this.user.agent_name;
        } //toastr functions

      }, {
        key: "handleError",
        value: function handleError(err) {
          if (err.status == 504) this.Toaster('error', '', 'server is not responsing.', 4000);else this.Toaster('error', '', err.error.message, 1500);
        }
      }, {
        key: "Toaster",
        value: function Toaster(style, msgtopic, msgContent) {
          var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
          this.toastr.show(style, msgtopic, msgContent, time);
        }
      }]);

      return TopNavbarComponent;
    }();

    TopNavbarComponent.ɵfac = function TopNavbarComponent_Factory(t) {
      return new (t || TopNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
    };

    TopNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TopNavbarComponent,
      selectors: [["app-top-navbar"]],
      decls: 99,
      vars: 39,
      consts: [[1, "navbar", "ms-navbar"], [1, "ms-aside-toggler", "ms-toggler", "pl-0", 3, "click"], [1, "ms-toggler-bar", "bg-primary"], [1, "logo-sn", "logo-sm", "ms-d-block-sm"], ["routerLink", "/", 1, "pl-0", "ml-0", "text-center", "navbar-brand", "mr-0"], ["src", "assets/img/logo.png", "alt", "logo"], [1, "avatarText"], ["id", "ms-nav-options", 1, "ms-nav-list", "ms-inline", "mb-0"], [1, "ms-nav-item", "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "mousePointer"], [1, "ms-img-round", 3, "src", "error"], [1, "username"], ["aria-labelledby", "languageDropdown", 1, "dropdown-menu", "dropdown-menu-right", "user-dropdown"], [1, "ms-scrollable", "ms-dropdown-list"], [1, "media", "p-2", "mousePointer", 3, "click"], [1, "ms-chat-img", "mr-2", "align-self-center"], [1, "media-body"], [1, "ms-nav-item", "ms-nav-user", "dropdown"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right", "user-dropdown"], [1, "dropdown-menu-header"], [1, "dropdown-header", "ms-inline", "m-0"], [1, "text-disabled"], [1, "dropdown-divider"], [1, "dropdown-menu-footer"], ["data-toggle", "modal", "data-target", "#modal-password", 1, "media", "fs-14", "p-2", "mousePointer"], [1, "flaticon-security", "mr-2"], [1, "media", "fs-14", "p-2", "mousePointer", 3, "click"], [1, "flaticon-shut-down", "mr-2"], ["data-toggle", "slideDown", "data-target", "#ms-nav-options", 1, "ms-toggler", "ms-d-block-sm", "pr-0", "ms-nav-toggler"], ["id", "modal-password", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body"], [1, "ms-panel"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "password", "placeholder", "", "formControlName", "previous", "minlength", "8", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "password", "placeholder", "", "formControlName", "password", "minlength", "8", "required", "", 1, "form-control"], ["type", "password", "placeholder", "", "formControlName", "confirm", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], [1, "invalid-feedback", 2, "display", "block"]],
      template: function TopNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavbarComponent_Template_div_click_1_listener() {
            return ctx.sidebar_toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "AirflyBird");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function TopNavbarComponent_Template_img_error_13_listener() {
            return ctx.LanguageImage[ctx.currentLanguage] = ctx.defaultImage;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavbarComponent_Template_a_click_18_listener() {
            return ctx.changeLang("en");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function TopNavbarComponent_Template_img_error_20_listener() {
            return ctx.LanguageImage["en"] = ctx.defaultImage;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavbarComponent_Template_a_click_24_listener() {
            return ctx.changeLang("ch");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function TopNavbarComponent_Template_img_error_26_listener() {
            return ctx.LanguageImage["ch"] = ctx.defaultImage;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u4E2D\u6587");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function TopNavbarComponent_Template_img_error_32_listener() {
            return ctx.avatar = ctx.defaultImage;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavbarComponent_Template_a_click_49_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "form", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, TopNavbarComponent_div_77_Template, 3, 3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, TopNavbarComponent_div_84_Template, 3, 3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, TopNavbarComponent_div_91_Template, 3, 3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavbarComponent_Template_button_click_93_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavbarComponent_Template_button_click_96_listener() {
            return ctx.savePassWord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.LanguageImage[ctx.currentLanguage], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.LanguageImage["en"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.LanguageImage["ch"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getName());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 21, "Welcome"), ", ", ctx.getName(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 23, "reset password"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 25, "logout"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 27, "reset password"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 29, "previous password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["previous"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 31, "new password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["password"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 33, "confirm password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordConfirm());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 35, "Close"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid || !ctx.passwordConfirm());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 37, "Save"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: [".logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 71px;\r\n}\r\n.mousePointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   .logo-sn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding:0px;\r\n}\r\n.ms-img-round[_ngcontent-%COMP%]{\r\n  width:36px;\r\n  height: 36px;\r\n}\r\n.avatarText[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-weight: 800;\r\n    font-style: oblique;\r\n}\r\n.username[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 3px;\r\n  left: 5px;\r\n  font-size: 16px;\r\n  font-family: cursive;\r\n}\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n.body1[_ngcontent-%COMP%] {\r\n  padding-top: 0px !important;\r\n}\r\n.header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n.ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL3RvcC1uYXZiYXIvdG9wLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNDO0lBQ0csdUJBQXVCO0FBQzNCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvdG9wLW5hdmJhci90b3AtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zbiBhIGltZyB7XHJcbiAgICBoZWlnaHQ6IDcxcHg7XHJcbn1cclxuLm1vdXNlUG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaWRlLW5hdiAubG9nby1zbiBhIHtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4ubXMtaW1nLXJvdW5ke1xyXG4gIHdpZHRoOjM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcbi5hdmF0YXJUZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG4udXNlcm5hbWV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuIC5sYWJlbE1pZGRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogMjRweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5sZWZ0OiAxMHB4O1xyXG56LWluZGV4OiAxMDAwO1xyXG5mb250LXdlaWdodDogODAwO1xyXG59IFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXBhbmVse1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtY2FyZC1maHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-top-navbar',
          templateUrl: './top-navbar.component.html',
          styleUrls: ['./top-navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_Service_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: src_app_shared_Module_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      }, null);
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
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['']
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
          var _this4 = this;

          this.formGroupP.value.role = this.formGroup.value.role;
          this.userService.postRequest("api/resetPassword", this.formGroupP.value, false).subscribe(function (res) {
            _this4.Toaster('success', '', 'New password is ' + res['result'], 4000);
          }, function (err) {
            _this4.handleError(err);
          });
        }
      }, {
        key: "login",
        value: function login() {
          var loginData = this.formGroup.value;
          var role = this.formGroup.value.role;
          if (role == "admin") this.loginAdmin(loginData);else if (role == "agent") this.loginAgent(loginData);else if (role == "user") this.loginUser(loginData);
        }
      }, {
        key: "loginAdmin",
        value: function loginAdmin(data) {
          var _this5 = this;

          this.userService.postRequest('api/loginAdmin', data, false).subscribe(function (res) {
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
        }
      }, {
        key: "loginAgent",
        value: function loginAgent(data) {
          var _this6 = this;

          this.userService.postRequest('api/loginAgent', data, false).subscribe(function (res) {
            _this6.userService.setToken({
              token: res['token'],
              userInfo: res['userInfo'],
              role: data.role,
              expiresAt: res['expiresAt']
            });

            _this6.Toaster('success', '', 'Welcome');

            _this6.userService.gotoFirstPage();
          }, function (err) {
            _this6.handleError(err);
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(data) {
          var _this7 = this;

          this.userService.postRequest('api/loginUser', data, false).subscribe(function (res) {
            _this7.userService.setToken({
              token: res['token'],
              userInfo: res['userInfo'],
              role: data.role,
              expiresAt: res['expiresAt']
            });

            _this7.Toaster('success', '', 'Welcome');

            _this7.userService.gotoFirstPage();
          }, function (err) {
            _this7.handleError(err);
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
          var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
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
      consts: [[1, "loginWrapper", "clearfix"], [1, "banWrapper", 2, "background", "#262626", "background-image", "url('assets/img/costic/default-login.jpg')", "background-size", "cover"], [1, "loginMain"], ["id", "ms-nav-options", 1, "ms-nav-list", "ms-inline", "mb-0"], [1, "ms-nav-item", "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "media", "p-2", "mousePointer"], [1, "ms-chat-img", "mr-2", "align-self-center"], [1, "ms-img-round", "ms-img-round123", 3, "src"], [1, "media-body"], [1, "username"], ["aria-labelledby", "languageDropdown", 1, "dropdown-menu", "dropdown-menu-right", "user-dropdown"], [1, "ms-scrollable", "ms-dropdown-list"], [1, "media", "p-2", "mousePointer", 3, "click"], [1, "loginWidth"], [1, "loginLogoDiv"], ["href", "http://vdms.aidetecting.com/", 1, "loginLogo"], ["src", "assets/img/logo.png"], ["novalidate", "", 1, "formLogin", "needs-validation", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "ms-list", "d-flex"], [1, "ms-list-item", "pl-0"], [1, "ms-checkbox-wrap"], ["type", "radio", "name", "role", "formControlName", "role", "value", "admin"], [1, "ms-checkbox-check"], [1, "ms-list-item"], ["type", "radio", "name", "role", "formControlName", "role", "value", "agent"], ["type", "radio", "name", "role", "formControlName", "role", "value", "user"], [1, "mb-3"], [1, "input-group", "loginList", "loginListUser"], ["type", "text", "formControlName", "username", 1, "loginText", 3, "placeholder"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "mb-2"], [1, "input-group", "loginList", "loginListPwd"], ["type", "password", "formControlName", "password", "minlength", "8", 1, "loginText", 3, "placeholder"], [1, "loginList"], ["data-toggle", "modal", "data-toggle", "modal", "data-target", "#modal-12"], ["type", "submit", "id", "loginBtn", 1, "loginBtn", 2, "background", "rgb(3, 197, 255)", 3, "value"], [1, "have"], ["href", "http://vdms.aidetecting.com/"], ["id", "modal-12", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-12", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-min"], [1, "modal-content"], [1, "modal-body", "text-center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "flaticon-secure-shield", "d-block"], [1, "formLogin", "needs-validation", 3, "formGroup"], ["myformP", "ngForm"], [1, "ms-form-group", "has-icon"], ["type", "text", "name", "forgot-password", "formControlName", "phone", 1, "form-control", 3, "placeholder"], [1, "material-icons"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], [1, "invalid-feedback", 2, "display", "block"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "phone");

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
  "./src/app/shared/Module/preloader/preloader.componentRect.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/Module/preloader/preloader.componentRect.ts ***!
    \********************************************************************/

  /*! exports provided: PreloaderComponentRect */

  /***/
  function srcAppSharedModulePreloaderPreloaderComponentRectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreloaderComponentRect", function () {
      return PreloaderComponentRect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreloaderComponentRect = /*#__PURE__*/function () {
      function PreloaderComponentRect() {
        _classCallCheck(this, PreloaderComponentRect);
      }

      _createClass(PreloaderComponentRect, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreloaderComponentRect;
    }();

    PreloaderComponentRect.ɵfac = function PreloaderComponentRect_Factory(t) {
      return new (t || PreloaderComponentRect)();
    };

    PreloaderComponentRect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreloaderComponentRect,
      selectors: [["app-preloader-rect"]],
      decls: 11,
      vars: 0,
      consts: [["id", "preloader-wrap"], [1, "spinner", "spinner-9"], [1, "ms-cube", "ms-cube1"], [1, "ms-cube", "ms-cube2"], [1, "ms-cube", "ms-cube3"], [1, "ms-cube", "ms-cube4"], [1, "ms-cube", "ms-cube5"], [1, "ms-cube", "ms-cube6"], [1, "ms-cube", "ms-cube7"], [1, "ms-cube", "ms-cube8"], [1, "ms-cube", "ms-cube9"]],
      template: function PreloaderComponentRect_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloaderComponentRect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preloader-rect',
          template: "\n  <div id=\"preloader-wrap\">\n     <div class=\"spinner spinner-9\">\n        <div class=\"ms-cube ms-cube1\"></div>\n        <div class=\"ms-cube ms-cube2\"></div>\n        <div class=\"ms-cube ms-cube3\"></div>\n        <div class=\"ms-cube ms-cube4\"></div>\n        <div class=\"ms-cube ms-cube5\"></div>\n        <div class=\"ms-cube ms-cube6\"></div>\n        <div class=\"ms-cube ms-cube7\"></div>\n        <div class=\"ms-cube ms-cube8\"></div>\n        <div class=\"ms-cube ms-cube9\"></div>\n      </div>\n  </div>\n  ",
          styles: ['']
        }]
      }], function () {
        return [];
      }, null);
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
  "./src/app/shared/Service/userService/auth/auth.guard.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/Service/userService/auth/auth.guard.ts ***!
    \***************************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedServiceUserServiceAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/shared/Service/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(userService, router) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl(this.userService.loginURL);
            return false;
          }

          return true;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl(this.userService.loginURL);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.loginURL = '/login';
        this.firstPage = 'map/monitor/vehicle';
        this.VDMSURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].VDMSURL;
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
          window.location.href = this.VDMSURL;
        }
      }, {
        key: "gotoFirstPage",
        value: function gotoFirstPage() {
          this.router.navigateByUrl(this.firstPage);
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
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
      apiBaseUrl: 'localhost:3000/',
      VDMSURL: 'http://vdms.aidetecting.com/'
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