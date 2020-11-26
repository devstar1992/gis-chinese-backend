function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin_system-system-module"], {
  /***/
  "./src/app/components/admin_system/company/company_user.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/admin_system/company/company_user.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CompanyUserComponent */

  /***/
  function srcAppComponentsAdmin_systemCompanyCompany_userComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyUserComponent", function () {
      return CompanyUserComponent;
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


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/Datatable/DataTable */
    "./src/app/shared/Datatable/DataTable.ts");
    /* harmony import */


    var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/Datatable/DefaultSorter */
    "./src/app/shared/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/Datatable/BootstrapPaginator */
    "./src/app/shared/Datatable/BootstrapPaginator.ts");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function CompanyUserComponent_ng_container_64_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_ng_container_64_ng_container_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.edit(item_r15.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_ng_container_64_ng_container_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.edit(item_r15.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_ng_container_64_ng_container_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.del(item_r15.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r15.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.car_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.getDateString(item_r15.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.created_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.getDateString(item_r15.available_to));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.status);
      }
    }

    function CompanyUserComponent_ng_container_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompanyUserComponent_ng_container_64_ng_container_1_Template, 22, 7, "ng-container", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r15));
      }
    }

    function CompanyUserComponent_div_82_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " number + alphabet = 11. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_82_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
      }
    }

    function CompanyUserComponent_div_83_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " valid password over 8 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_83_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
      }
    }

    function CompanyUserComponent_div_84_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid company. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "company");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_84_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls["company"].invalid);
      }
    }

    function CompanyUserComponent_div_85_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid contact. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_85_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["contact"].invalid);
      }
    }

    function CompanyUserComponent_div_86_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_86_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["address"].invalid);
      }
    }

    function CompanyUserComponent_div_87_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid phone. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_87_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["phone"].invalid);
      }
    }

    function CompanyUserComponent_div_88_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid mail_box. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompanyUserComponent_div_88_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.formGroup.controls["mail_box"].invalid);
      }
    }

    function CompanyUserComponent_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid license_number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid tax_number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_106_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid bank_account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid date. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid date. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompanyUserComponent_div_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid status. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var CompanyUserComponent = /*#__PURE__*/function () {
      function CompanyUserComponent(userService, router, _formBuilder, toastr) {
        _classCallCheck(this, CompanyUserComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.useravatar = 'uploads/avatar/sample-1.jpg';
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['username', 'created_at', 'created_by', 'available_to', 'status'];
      }

      _createClass(CompanyUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //etc
          this.user = this.userService.getToken()['userInfo'];
          this.refresh();
          this.getItem();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(arr) {
          if (!this.key) return true;

          for (var i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "add",
        value: function add() {
          var useravatar = 'uploads/avatar/sample-' + Math.floor(Math.random() * 9) + '.jpg';
          this.useravatar = useravatar;
          this.addStatus = true;
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.editKey = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[this.editKey]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.setValue(this.formGroup.value);
        }
      }, {
        key: "del",
        value: function del(id) {
          this.delKey = this.findIndex(id, this.data);
        }
      }, {
        key: "findIndex",
        value: function findIndex(id, datas) {
          for (var i = 0; i < datas.length; i++) {
            if (datas[i].id === id) return i;
          }

          return 0;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;

          if (this.addStatus == true) {
            if (this.fileChange) {
              var ns = this.formGroup.value.username;
              var filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
              ;
              this.formData.append('file', this.fileDish, filename);
              this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(function (res) {
                _this.formGroup.value.avatar = res['path'];

                _this.addItem();
              }, function (err) {
                _this.handleError(err);
              });
            } else {
              this.formGroup.value.avatar = this.useravatar;
              this.addItem();
            }
          } else if (this.editStatus == true) {
            if (this.fileChange) {
              var _ns = this.formGroup.value.username;

              var _filename = _ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];

              ;
              this.formData.append('file', this.fileDish, _filename);
              this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(function (res) {
                _this.formGroup.value.avatar = res['path'];

                _this.editItem();
              }, function (err) {
                _this.handleError(err);
              });
            } else {
              this.editItem();
            }
          }
        }
      }, {
        key: "addItem",
        value: function addItem() {
          var _this2 = this;

          this.formGroup.value.created_by = this.user.username;
          this.userService.postRequest("api/admin/addCompany", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this2.Toaster('success', '', 'success');

            _this2.refresh();

            _this2.getItem();
          }, function (err) {
            _this2.handleError(err);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          var _this3 = this;

          this.formGroup.value.created_by = this.user.username;
          this.userService.postRequest("api/admin/editCompany", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this3.refresh();

            _this3.getItem();

            _this3.Toaster('success', '', 'success');
          }, function (err) {
            _this3.handleError(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this4 = this;

          this.userService.postRequest("api/admin/delCompany", {
            user: this.user,
            data: this.data[this.delKey]
          }).subscribe(function (res) {
            _this4.Toaster('success', '', 'success');

            _this4.refresh();

            _this4.getItem();
          }, function (err) {
            _this4.handleError(err);
          });
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this5 = this;

          this.userService.postRequest("api/admin/getCompany", {
            user: this.user
          }).subscribe(function (res) {
            _this5.data = res['result'];
          }, function (err) {});
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.editStatus = false;
          this.addStatus = false;
          this.formData = new FormData();
          this.fileChange = false;
          this.fileDish = undefined;
          this.fileURL = undefined;
          var accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{11}$/;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          this.formGroup = this._formBuilder.group({
            id: [''],
            username: ['company1234', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(accountRegex)],
            password: ['12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company: ['trackingcompany', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            contact: ['trackingcompany@mail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            mail_box: ['johnid123@mail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            phone: ['18654875653', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(intenationalPhone)],
            car_number: [''],
            avatar: [''],
            address: ['chonjin 23 street', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            license_number: ['xxxx-xxxx-xxxx', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            tax_number: ['xxxx-xxxx-xxxx', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            bank_account: ['foe234@fkc', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            created_at: [''],
            created_by: [''],
            available_from: ['2000-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['2000-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['on', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            role: ['admin']
          });
        } //for file manage

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this6 = this;

          this.fileChange = true;
          var mimeType = event.target.files[0].type;
          this.fileDish = event.target.files[0];
          this.reader.readAsDataURL(event.target.files[0]);

          this.reader.onload = function (_event) {
            _this6.fileURL = _this6.reader.result;
          };

          event.target.value = "";
        }
      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //for image

      }, {
        key: "getAvatarSource",
        value: function getAvatarSource() {
          var src;
          if (this.fileChange) src = this.fileURL;else if (this.editStatus) src = this.formGroup.value.avatar;else src = this.useravatar;
          return src;
        } //for date

      }, {
        key: "getDateString",
        value: function getDateString(ss) {
          var d = new Date(ss);
          var dmonth = String(d.getMonth());
          var ddate = String(d.getDate());
          if (dmonth.length < 2) dmonth = '0' + dmonth;
          if (ddate.length < 2) ddate = '0' + ddate;
          return d.getFullYear() + '-' + dmonth + '-' + ddate;
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

      return CompanyUserComponent;
    }();

    CompanyUserComponent.ɵfac = function CompanyUserComponent_Factory(t) {
      return new (t || CompanyUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]));
    };

    CompanyUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompanyUserComponent,
      selectors: [["app-company-user"]],
      decls: 248,
      vars: 25,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-3"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled", 2, "right", "48px"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "car_number"], ["by", "created_at"], ["by", "created_by"], ["by", "available_to"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "col-md-6 mb-2", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "formControlName", "license_number", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "email", "formControlName", "tax_number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "bank_account", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "company", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "contact", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "car_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "address", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "license_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "tax_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "bank_account", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_by", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_from", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_to", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["alt", "avatar", 1, "avatar_img", 3, "src"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "flaticon-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "flaticon-trash"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], [1, "col-md-6", "mb-2"], ["type", "text", "formControlName", "password", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "formControlName", "company", "required", "", 1, "form-control"], ["type", "email", "formControlName", "contact", "required", "", 1, "form-control"], ["type", "text", "formControlName", "address", "required", "", 1, "form-control"], ["type", "text", "formControlName", "phone", "required", "", 1, "form-control"], ["type", "email", "formControlName", "mail_box", "required", "", 1, "form-control"]],
      template: function CompanyUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Company user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Company user List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompanyUserComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_32_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "sv-default-sorter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "sv-default-sorter", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "car_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "sv-default-sorter", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sv-default-sorter", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "sv-default-sorter", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "sv-default-sorter", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CompanyUserComponent_ng_container_64_Template, 2, 1, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "sv-bootstrap-paginator", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Company user register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_img_click_76_listener() {
            return ctx.fileButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, CompanyUserComponent_div_82_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CompanyUserComponent_div_83_Template, 6, 1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, CompanyUserComponent_div_84_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, CompanyUserComponent_div_85_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CompanyUserComponent_div_86_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CompanyUserComponent_div_87_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, CompanyUserComponent_div_88_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "license_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, CompanyUserComponent_div_94_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "tax_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CompanyUserComponent_div_100_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "bank_account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, CompanyUserComponent_div_106_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "available_from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, CompanyUserComponent_div_112_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CompanyUserComponent_div_118_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "select", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, CompanyUserComponent_div_128_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_130_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_132_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Save");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " Company user information ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "form", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "mail_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "car_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "license_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "tax_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "bank_account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "available_from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_228_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Close");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Are You Sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_242_listener() {
            return ctx.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CompanyUserComponent_Template_input_change_245_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.length, "\xA0results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["license_number"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["tax_number"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["bank_account"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  height:30px;\r\n  width: 30px;\r\n\r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vY29tcGFueS9jb21wYW55X3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXOztBQUViOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vY29tcGFueS9jb21wYW55X3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG50ZCBpe1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5hdmF0YXJfaW1ne1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG5cclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gIFxyXG4uZm9ybS1jb250cm9se1xyXG53aWR0aDogMTAwJTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbmJvdHRvbTogY2FsYygxMDAlICsgLTI3cHgpO1xyXG5yaWdodDogMDtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG5tYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4vKiBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmhlYWRlcjF7XHJcbmJhY2tncm91bmQtY29sb3I6ICNkYjcwOTNiODtcclxuZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxubWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuLm1zLXBhbmVse1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtdXNlci1pbWd7XHJcbiAgd2lkdGg6OTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-company-user',
          templateUrl: './company_user.component.html',
          styleUrls: ['./company_user.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/device/camera_register/camera_register.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/admin_system/device/camera_register/camera_register.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CameraRegisterComponent */

  /***/
  function srcAppComponentsAdmin_systemDeviceCamera_registerCamera_registerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraRegisterComponent", function () {
      return CameraRegisterComponent;
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


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/Datatable/DataTable */
    "./src/app/shared/Datatable/DataTable.ts");
    /* harmony import */


    var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/Datatable/DefaultSorter */
    "./src/app/shared/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/Datatable/BootstrapPaginator */
    "./src/app/shared/Datatable/BootstrapPaginator.ts");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function CameraRegisterComponent_ng_container_65_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_ng_container_65_ng_container_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.edit(item_r5.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_ng_container_65_ng_container_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.del(item_r5.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.camera_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.model);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.getDateString(item_r5.delivery_date));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.getDateString(item_r5.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.created_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.assign_status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.run_status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", item_r5.assign_status == "on");
      }
    }

    function CameraRegisterComponent_ng_container_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraRegisterComponent_ng_container_65_ng_container_1_Template, 21, 8, "ng-container", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r5));
      }
    }

    function CameraRegisterComponent_div_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid camera_id. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraRegisterComponent_div_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid model. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraRegisterComponent_div_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid date. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var CameraRegisterComponent = /*#__PURE__*/function () {
      function CameraRegisterComponent(userService, router, _formBuilder, toastr) {
        _classCallCheck(this, CameraRegisterComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['camera_id', 'model', 'delivery_date', 'created_at', 'created_by', 'assign_status', 'run_status'];
      }

      _createClass(CameraRegisterComponent, [{
        key: "applyFilter",
        value: function applyFilter(arr) {
          if (!this.key) return true;

          for (var i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //etc
          this.user = this.userService.getToken()['userInfo'];
          this.refresh();
          this.getItem();
        }
      }, {
        key: "add",
        value: function add() {
          this.addStatus = true;
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.editStatus = true;
          var key = this.findIndex(id, this.data);
          this.formGroup.setValue(this.data[key]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.delivery_date = this.getDateString(this.formGroup.value.delivery_date);
          this.formGroup.setValue(this.formGroup.value);
        }
      }, {
        key: "del",
        value: function del(id) {
          this.delKey = this.findIndex(id, this.data);
        }
      }, {
        key: "findIndex",
        value: function findIndex(id, datas) {
          for (var i = 0; i < datas.length; i++) {
            if (datas[i].id === id) return i;
          }

          return 0;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "save",
        value: function save() {
          if (this.addStatus == true) {
            this.addItem();
          } else if (this.editStatus == true) {
            this.editItem();
          }
        }
      }, {
        key: "addItem",
        value: function addItem() {
          var _this7 = this;

          this.formGroup.value.created_by = this.user.username;
          this.formGroup.value.assign_status = 'off';
          this.formGroup.value.run_status = 'off';
          this.userService.postRequest("api/admin/addCameraRegister", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this7.Toaster('success', '', 'success');

            _this7.refresh();

            _this7.getItem();
          }, function (err) {
            _this7.handleError(err);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          var _this8 = this;

          this.userService.postRequest("api/admin/editCameraRegister", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this8.Toaster('success', '', 'success');

            _this8.refresh();

            _this8.getItem();
          }, function (err) {
            _this8.handleError(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this9 = this;

          this.userService.postRequest("api/admin/delCameraRegister", {
            user: this.user,
            data: this.data[this.delKey]
          }).subscribe(function (res) {
            _this9.Toaster('success', '', 'success');

            _this9.refresh();

            _this9.getItem();
          }, function (err) {
            _this9.handleError(err);
          });
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this10 = this;

          this.userService.postRequest("api/admin/getCameraRegister", {
            user: this.user
          }).subscribe(function (res) {
            _this10.data = res['result'];
          }, function (err) {});
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.editStatus = false;
          this.addStatus = false;
          this.formData = new FormData();
          this.fileChange = false;
          this.fileDish = undefined;
          this.fileURL = undefined;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          this.formGroup = this._formBuilder.group({
            id: [''],
            camera_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            created_at: [''],
            created_by: [''],
            delivery_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            assign_status: [''],
            run_status: ['']
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
        } //for file manage

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this11 = this;

          this.fileChange = true;
          var mimeType = event.target.files[0].type;
          this.fileDish = event.target.files[0];
          this.reader.readAsDataURL(event.target.files[0]);

          this.reader.onload = function (_event) {
            _this11.fileURL = _this11.reader.result;
          };

          document.getElementById('photo').innerHTML = null;
        }
      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //for image

      }, {
        key: "getAvatarSource",
        value: function getAvatarSource() {
          var src;
          if (this.fileChange) src = this.fileURL;else if (this.editStatus) src = this.formGroup.value.avatar;else src = "assets/img/people/avatar.jpg";
          return src;
        } //for date

      }, {
        key: "getDateString",
        value: function getDateString(ss) {
          var d = new Date(ss);
          var dmonth = String(d.getMonth());
          var ddate = String(d.getDate());
          if (dmonth.length < 2) dmonth = '0' + dmonth;
          if (ddate.length < 2) ddate = '0' + ddate;
          return d.getFullYear() + '-' + dmonth + '-' + ddate;
        }
      }]);

      return CameraRegisterComponent;
    }();

    CameraRegisterComponent.ɵfac = function CameraRegisterComponent_Factory(t) {
      return new (t || CameraRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]));
    };

    CameraRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CameraRegisterComponent,
      selectors: [["app-camera-register"]],
      decls: 123,
      vars: 12,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-3"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled", 2, "right", "48px"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "camera_id"], ["by", "model"], ["by", "delivery_date"], ["by", "created_at"], ["by", "created_by"], ["by", "assign_status"], ["by", "run_status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "placeholder", "c12553", "formControlName", "camera_id", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "col-md-12", "mb-2"], ["type", "text", "formControlName", "model", "placeholder", "#dkcenc", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "delivery_date", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "flaticon-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "hidden", "click"], [1, "flaticon-trash"], [1, "invalid-feedback", 2, "display", "block"]],
      template: function CameraRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Device");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Camera register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Camera register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CameraRegisterComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_32_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "sv-default-sorter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "camera_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sv-default-sorter", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "model");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "sv-default-sorter", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "delivery_date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "sv-default-sorter", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "sv-default-sorter", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "sv-default-sorter", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "assign_status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "sv-default-sorter", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "run_status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CameraRegisterComponent_ng_container_65_Template, 2, 1, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "sv-bootstrap-paginator", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Camera register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "camera_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CameraRegisterComponent_div_87_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "model");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, CameraRegisterComponent_div_93_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "delivery_date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CameraRegisterComponent_div_99_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_101_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_103_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Save");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Are You Sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_117_listener() {
            return ctx.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CameraRegisterComponent_Template_input_change_120_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.length, "\xA0results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["camera_id"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["model"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["delivery_date"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    \r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  padding-top: 0px !important;\r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vZGV2aWNlL2NhbWVyYV9yZWdpc3Rlci9jYW1lcmFfcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTs7RUFFQTs7RUFDQTtJQUNFLHVCQUF1QjtBQUMzQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGVBQWU7QUFDZixVQUFVO0FBQ1YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7RUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5fc3lzdGVtL2RldmljZS9jYW1lcmFfcmVnaXN0ZXIvY2FtZXJhX3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ZCBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5hdmF0YXJfaW1ne1xyXG4gICAgXHJcbiAgfVxyXG4gIC5sYWJlbE1pZGRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogMjRweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5sZWZ0OiAxMHB4O1xyXG56LWluZGV4OiAxMDAwO1xyXG5mb250LXdlaWdodDogODAwO1xyXG59IFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-camera-register',
          templateUrl: './camera_register.component.html',
          styleUrls: ['./camera_register.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: CameraUserCompanyComponent */

  /***/
  function srcAppComponentsAdmin_systemDeviceCamera_user_companyCamera_user_companyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraUserCompanyComponent", function () {
      return CameraUserCompanyComponent;
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


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/Datatable/DataTable */
    "./src/app/shared/Datatable/DataTable.ts");
    /* harmony import */


    var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/Datatable/DefaultSorter */
    "./src/app/shared/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/Datatable/BootstrapPaginator */
    "./src/app/shared/Datatable/BootstrapPaginator.ts");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function CameraUserCompanyComponent_ng_container_62_ng_container_1_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_62_ng_container_1_ng_container_15_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.stop(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function CameraUserCompanyComponent_ng_container_62_ng_container_1_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_62_ng_container_1_ng_container_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.start(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function CameraUserCompanyComponent_ng_container_62_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CameraUserCompanyComponent_ng_container_62_ng_container_1_ng_container_15_Template, 3, 0, "ng-container", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CameraUserCompanyComponent_ng_container_62_ng_container_1_ng_container_16_Template, 3, 0, "ng-container", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_62_ng_container_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.edit(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_62_ng_container_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.del(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.camera_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getDateString(item_r9.available_to));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getDateString(item_r9.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.created_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.status == "on");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.status == "off");
      }
    }

    function CameraUserCompanyComponent_ng_container_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraUserCompanyComponent_ng_container_62_ng_container_1_Template, 21, 8, "ng-container", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r9));
      }
    }

    function CameraUserCompanyComponent_option_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r26.camera_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26.camera_id);
      }
    }

    function CameraUserCompanyComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid camera_id. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserCompanyComponent_option_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r27.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.company);
      }
    }

    function CameraUserCompanyComponent_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid company. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserCompanyComponent_div_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid available_from. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserCompanyComponent_div_106_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid available_to. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserCompanyComponent_div_116_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid status. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var CameraUserCompanyComponent = /*#__PURE__*/function () {
      function CameraUserCompanyComponent(userService, router, _formBuilder, toastr) {
        _classCallCheck(this, CameraUserCompanyComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        this.cameralist = [];
        this.userlists = [];
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['camera_id', 'username', 'available_to', 'created_at', 'created_by', 'status'];
      }

      _createClass(CameraUserCompanyComponent, [{
        key: "applyFilter",
        value: function applyFilter(arr) {
          if (!this.key) return true;

          for (var i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //etc
          this.user = this.userService.getToken()['userInfo'];
          this.refresh();
          this.getItem();
        }
      }, {
        key: "add",
        value: function add() {
          this.addStatus = true;
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.editStatus = true;
          var key = this.findIndex(id, this.data);
          this.formGroup.setValue(this.data[key]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.setValue(this.formGroup.value);
        }
      }, {
        key: "del",
        value: function del(id) {
          this.delKey = this.findIndex(id, this.data);
        }
      }, {
        key: "findIndex",
        value: function findIndex(id, datas) {
          for (var i = 0; i < datas.length; i++) {
            if (datas[i].id === id) return i;
          }

          return 0;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "save",
        value: function save() {
          if (this.addStatus == true) {
            this.addItem();
          } else if (this.editStatus == true) {
            // this.formGroup.value.car_number=this.findVehicleNumber(this.formGroup.value.username,this.userlists);
            this.editItem();
          }
        }
      }, {
        key: "start",
        value: function start(id) {
          var key = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[key]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.value.status = 'on';
          this.formGroup.setValue(this.formGroup.value);
          this.editItem();
        }
      }, {
        key: "stop",
        value: function stop(id) {
          var key = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[key]);
          console.log(this.formGroup.value);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.value.status = 'off'; // this.formGroup.setValue(this.formGroup.value);

          this.editItem();
        }
      }, {
        key: "addItem",
        value: function addItem() {
          var _this12 = this;

          this.formGroup.value.created_by = this.user.username;
          this.formGroup.value.car_number = this.findVehicleNumber(this.formGroup.value.username, this.userlists);
          this.userService.postRequest("api/admin/addCameraUserCompany", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this12.Toaster('success', '', 'success');

            _this12.refresh();

            _this12.getItem();
          }, function (err) {
            _this12.handleError(err);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          var _this13 = this;

          this.userService.postRequest("api/admin/editCameraUserCompany", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this13.Toaster('success', '', 'success');

            _this13.refresh();

            _this13.getItem();
          }, function (err) {
            _this13.handleError(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this14 = this;

          this.userService.postRequest("api/admin/delCameraUserCompany", {
            user: this.user,
            data: this.data[this.delKey]
          }).subscribe(function (res) {
            _this14.Toaster('success', '', 'success');

            _this14.refresh();

            _this14.getItem();
          }, function (err) {
            _this14.handleError(err);
          });
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this15 = this;

          this.userService.postRequest("api/admin/getCameraUserCompany", {
            user: this.user
          }).subscribe(function (res) {
            _this15.data = res['result'];
            _this15.cameralist = res['cameralist'];
            _this15.userlists = _this15.getUnique(res['userlist']);
          }, function (err) {});
        }
      }, {
        key: "getUnique",
        value: function getUnique(arr) {
          var temp = [];

          for (var i = 0; i < arr.length; i++) {
            if (this.existKey(temp, arr[i].company)) temp.push(arr[i]);
          }

          return temp;
        }
      }, {
        key: "existKey",
        value: function existKey(arr, key) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].company === key) return false;
          }

          return true;
        }
      }, {
        key: "findVehicleNumber",
        value: function findVehicleNumber(key, arr) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].username === key) return arr[i].car_number;
          }

          return null;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.editStatus = false;
          this.addStatus = false;
          this.formData = new FormData();
          this.fileChange = false;
          this.fileDish = undefined;
          this.fileURL = undefined;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          this.formGroup = this._formBuilder.group({
            id: [''],
            camera_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car_number: [''],
            created_at: [''],
            created_by: [''],
            available_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
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
        } //for file manage

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this16 = this;

          this.fileChange = true;
          var mimeType = event.target.files[0].type;
          this.fileDish = event.target.files[0];
          this.reader.readAsDataURL(event.target.files[0]);

          this.reader.onload = function (_event) {
            _this16.fileURL = _this16.reader.result;
          };

          document.getElementById('photo').innerHTML = null;
        }
      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //for date

      }, {
        key: "getDateString",
        value: function getDateString(ss) {
          var d = new Date(ss);
          var dmonth = String(d.getMonth());
          var ddate = String(d.getDate());
          if (dmonth.length < 2) dmonth = '0' + dmonth;
          if (ddate.length < 2) ddate = '0' + ddate;
          return d.getFullYear() + '-' + dmonth + '-' + ddate;
        }
      }]);

      return CameraUserCompanyComponent;
    }();

    CameraUserCompanyComponent.ɵfac = function CameraUserCompanyComponent_Factory(t) {
      return new (t || CameraUserCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]));
    };

    CameraUserCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CameraUserCompanyComponent,
      selectors: [["app-camera-user-company"]],
      decls: 140,
      vars: 16,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-3"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled", 2, "right", "48px"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "camera_id"], ["by", "company"], ["by", "available_to"], ["by", "created_at"], ["by", "created_by"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "list", "id-camera", "placeholder", "c000001", "formControlName", "camera_id", "required", "", 1, "form-control"], ["id", "id-camera"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "col-md-12", "mb-2"], ["type", "text", "list", "id-user", "formControlName", "company", "placeholder", "account", "required", "", 1, "form-control"], ["id", "id-user"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "placeholder", "on/off", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "flaticon-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "flaticon-trash"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fa", "fa-power-off"], [3, "value"], [1, "invalid-feedback", 2, "display", "block"]],
      template: function CameraUserCompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Device manage");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Camera User Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Camera user Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CameraUserCompanyComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_32_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "sv-default-sorter", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "camera_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sv-default-sorter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "sv-default-sorter", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "sv-default-sorter", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "sv-default-sorter", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "sv-default-sorter", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, CameraUserCompanyComponent_ng_container_62_Template, 2, 1, "ng-container", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "sv-bootstrap-paginator", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Camera assign for Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "form", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "camera_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "datalist", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, CameraUserCompanyComponent_option_85_Template, 2, 2, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CameraUserCompanyComponent_div_86_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "datalist", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, CameraUserCompanyComponent_option_93_Template, 2, 2, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, CameraUserCompanyComponent_div_94_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "available_from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CameraUserCompanyComponent_div_100_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, CameraUserCompanyComponent_div_106_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, CameraUserCompanyComponent_div_116_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_118_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_120_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Save");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Are You Sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_134_listener() {
            return ctx.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CameraUserCompanyComponent_Template_input_change_137_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.length, "\xA0results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cameralist);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["camera_id"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userlists);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["company"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\npadding-top: 0px !important;\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vZGV2aWNlL2NhbWVyYV91c2VyX2NvbXBhbnkvY2FtZXJhX3VzZXJfY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBOztBQUVBOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX3N5c3RlbS9kZXZpY2UvY2FtZXJhX3VzZXJfY29tcGFueS9jYW1lcmFfdXNlcl9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGQgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYXZhdGFyX2ltZ3tcclxuICBcclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gXHJcbi5mb3JtLWNvbnRyb2x7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuYm90dG9tOiBjYWxjKDEwMCUgKyAtMjdweCk7XHJcbnJpZ2h0OiAwO1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbm1hcmdpbi1ib3R0b206IC0xOXB4O1xyXG59XHJcbi5ib2R5MSB7XHJcbnBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RiNzA5M2I4O1xyXG5mb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG5tYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtY2FyZC1maHtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraUserCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-camera-user-company',
          templateUrl: './camera_user_company.component.html',
          styleUrls: ['./camera_user_company.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: CameraUserIndividualComponent */

  /***/
  function srcAppComponentsAdmin_systemDeviceCamera_user_individualCamera_user_individualComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraUserIndividualComponent", function () {
      return CameraUserIndividualComponent;
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


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/Datatable/DataTable */
    "./src/app/shared/Datatable/DataTable.ts");
    /* harmony import */


    var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/Datatable/DefaultSorter */
    "./src/app/shared/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/Datatable/BootstrapPaginator */
    "./src/app/shared/Datatable/BootstrapPaginator.ts");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function CameraUserIndividualComponent_ng_container_65_ng_container_1_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_65_ng_container_1_ng_container_17_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.stop(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function CameraUserIndividualComponent_ng_container_65_ng_container_1_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_65_ng_container_1_ng_container_18_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.start(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function CameraUserIndividualComponent_ng_container_65_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CameraUserIndividualComponent_ng_container_65_ng_container_1_ng_container_17_Template, 3, 0, "ng-container", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CameraUserIndividualComponent_ng_container_65_ng_container_1_ng_container_18_Template, 3, 0, "ng-container", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_65_ng_container_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.edit(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_65_ng_container_1_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.del(item_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.camera_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.car_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getDateString(item_r9.available_to));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getDateString(item_r9.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.created_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.status == "on");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.status == "off");
      }
    }

    function CameraUserIndividualComponent_ng_container_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraUserIndividualComponent_ng_container_65_ng_container_1_Template, 23, 9, "ng-container", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r9));
      }
    }

    function CameraUserIndividualComponent_option_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r26.camera_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26.camera_id);
      }
    }

    function CameraUserIndividualComponent_div_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid camera_id. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserIndividualComponent_option_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r27.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.username);
      }
    }

    function CameraUserIndividualComponent_div_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid account. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserIndividualComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid available_from. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserIndividualComponent_div_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid available_to. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CameraUserIndividualComponent_div_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid status. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var CameraUserIndividualComponent = /*#__PURE__*/function () {
      function CameraUserIndividualComponent(userService, router, _formBuilder, toastr) {
        _classCallCheck(this, CameraUserIndividualComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        this.cameralist = [];
        this.userlists = [];
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['camera_id', 'username', 'available_to', 'created_at', 'created_by', 'status'];
      }

      _createClass(CameraUserIndividualComponent, [{
        key: "applyFilter",
        value: function applyFilter(arr) {
          if (!this.key) return true;

          for (var i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //etc
          this.user = this.userService.getToken()['userInfo'];
          this.refresh();
          this.getItem();
        }
      }, {
        key: "add",
        value: function add() {
          this.addStatus = true;
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.editStatus = true;
          var key = this.findIndex(id, this.data);
          this.formGroup.setValue(this.data[key]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.setValue(this.formGroup.value);
        }
      }, {
        key: "del",
        value: function del(id) {
          this.delKey = this.findIndex(id, this.data);
        }
      }, {
        key: "findIndex",
        value: function findIndex(id, datas) {
          for (var i = 0; i < datas.length; i++) {
            if (datas[i].id === id) return i;
          }

          return 0;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "save",
        value: function save() {
          if (this.addStatus == true) {
            this.addItem();
          } else if (this.editStatus == true) {
            this.formGroup.value.car_number = this.findVehicleNumber(this.formGroup.value.username, this.userlists);
            this.editItem();
          }
        }
      }, {
        key: "start",
        value: function start(id) {
          var key = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[key]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.value.status = 'on';
          this.formGroup.setValue(this.formGroup.value);
          this.editItem();
        }
      }, {
        key: "stop",
        value: function stop(id) {
          var key = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[key]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.value.status = 'off'; // this.formGroup.setValue(this.formGroup.value);

          this.editItem();
        }
      }, {
        key: "addItem",
        value: function addItem() {
          var _this17 = this;

          this.formGroup.value.created_by = this.user.username;
          this.formGroup.value.car_number = this.findVehicleNumber(this.formGroup.value.username, this.userlists);
          this.userService.postRequest("api/company/addCameraUserIndividual", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this17.Toaster('success', '', 'success');

            _this17.refresh();

            _this17.getItem();
          }, function (err) {
            _this17.handleError(err);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          var _this18 = this;

          this.userService.postRequest("api/company/editCameraUserIndividual", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this18.Toaster('success', '', 'success');

            _this18.refresh();

            _this18.getItem();
          }, function (err) {
            _this18.handleError(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this19 = this;

          this.userService.postRequest("api/company/delCameraUserIndividual", {
            user: this.user,
            data: this.data[this.delKey]
          }).subscribe(function (res) {
            _this19.Toaster('success', '', 'success');

            _this19.refresh();

            _this19.getItem();
          }, function (err) {
            _this19.handleError(err);
          });
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this20 = this;

          this.userService.postRequest("api/company/getCameraUserIndividual", {
            user: this.user
          }).subscribe(function (res) {
            _this20.data = res['result'];
            _this20.cameralist = res['cameralist'];
            _this20.userlists = res['userlist'];
          }, function (err) {});
        }
      }, {
        key: "findVehicleNumber",
        value: function findVehicleNumber(key, arr) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].username === key) return arr[i].car_number;
          }

          return null;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.editStatus = false;
          this.addStatus = false;
          this.formData = new FormData();
          this.fileChange = false;
          this.fileDish = undefined;
          this.fileURL = undefined;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          this.formGroup = this._formBuilder.group({
            id: [''],
            camera_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car_number: [''],
            created_at: [''],
            created_by: [''],
            available_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
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
        } //for file manage

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this21 = this;

          this.fileChange = true;
          var mimeType = event.target.files[0].type;
          this.fileDish = event.target.files[0];
          this.reader.readAsDataURL(event.target.files[0]);

          this.reader.onload = function (_event) {
            _this21.fileURL = _this21.reader.result;
          };

          document.getElementById('photo').innerHTML = null;
        }
      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //for date

      }, {
        key: "getDateString",
        value: function getDateString(ss) {
          var d = new Date(ss);
          var dmonth = String(d.getMonth());
          var ddate = String(d.getDate());
          if (dmonth.length < 2) dmonth = '0' + dmonth;
          if (ddate.length < 2) ddate = '0' + ddate;
          return d.getFullYear() + '-' + dmonth + '-' + ddate;
        }
      }]);

      return CameraUserIndividualComponent;
    }();

    CameraUserIndividualComponent.ɵfac = function CameraUserIndividualComponent_Factory(t) {
      return new (t || CameraUserIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]));
    };

    CameraUserIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CameraUserIndividualComponent,
      selectors: [["app-camera-user-individual"]],
      decls: 143,
      vars: 16,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-3"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled", 2, "right", "48px"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "camera_id"], ["by", "username"], ["by", "car_number"], ["by", "available_to"], ["by", "created_at"], ["by", "created_by"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "list", "id-camera", "placeholder", "c000001", "formControlName", "camera_id", "required", "", 1, "form-control"], ["id", "id-camera"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "col-md-12", "mb-2"], ["type", "text", "list", "id-user", "formControlName", "username", "placeholder", "account", "required", "", 1, "form-control"], ["id", "id-user"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "placeholder", "on/off", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "flaticon-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "flaticon-trash"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fa", "fa-power-off"], [3, "value"], [1, "invalid-feedback", 2, "display", "block"]],
      template: function CameraUserIndividualComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Device manage");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Camera user individual");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Camera user individual");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CameraUserIndividualComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_32_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "sv-default-sorter", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "camera_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sv-default-sorter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "sv-default-sorter", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "car_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "sv-default-sorter", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "sv-default-sorter", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "sv-default-sorter", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "sv-default-sorter", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CameraUserIndividualComponent_ng_container_65_Template, 2, 1, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "sv-bootstrap-paginator", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Camera assign for Individual Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "camera_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "datalist", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, CameraUserIndividualComponent_option_88_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, CameraUserIndividualComponent_div_89_Template, 2, 0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "datalist", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, CameraUserIndividualComponent_option_96_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, CameraUserIndividualComponent_div_97_Template, 2, 0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "available_from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, CameraUserIndividualComponent_div_103_Template, 2, 0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, CameraUserIndividualComponent_div_109_Template, 2, 0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, CameraUserIndividualComponent_div_119_Template, 2, 0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_121_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_123_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Save");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Are You Sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_137_listener() {
            return ctx.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CameraUserIndividualComponent_Template_input_change_140_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.length, "\xA0results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cameralist);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["camera_id"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userlists);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["username"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\npadding-top: 0px !important;\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vZGV2aWNlL2NhbWVyYV91c2VyX2luZGl2aWR1YWwvY2FtZXJhX3VzZXJfaW5kaXZpZHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBOztBQUVBOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX3N5c3RlbS9kZXZpY2UvY2FtZXJhX3VzZXJfaW5kaXZpZHVhbC9jYW1lcmFfdXNlcl9pbmRpdmlkdWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGQgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYXZhdGFyX2ltZ3tcclxuICBcclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gXHJcbi5mb3JtLWNvbnRyb2x7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuYm90dG9tOiBjYWxjKDEwMCUgKyAtMjdweCk7XHJcbnJpZ2h0OiAwO1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbm1hcmdpbi1ib3R0b206IC0xOXB4O1xyXG59XHJcbi5ib2R5MSB7XHJcbnBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RiNzA5M2I4O1xyXG5mb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG5tYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtY2FyZC1maHtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraUserIndividualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-camera-user-individual',
          templateUrl: './camera_user_individual.component.html',
          styleUrls: ['./camera_user_individual.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/individual/individual_user.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/admin_system/individual/individual_user.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: IndividualUserComponent */

  /***/
  function srcAppComponentsAdmin_systemIndividualIndividual_userComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualUserComponent", function () {
      return IndividualUserComponent;
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


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/Datatable/DataTable */
    "./src/app/shared/Datatable/DataTable.ts");
    /* harmony import */


    var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/Datatable/DefaultSorter */
    "./src/app/shared/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/Datatable/BootstrapPaginator */
    "./src/app/shared/Datatable/BootstrapPaginator.ts");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function IndividualUserComponent_ng_container_64_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_ng_container_64_ng_container_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.edit(item_r12.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_ng_container_64_ng_container_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.edit(item_r12.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_ng_container_64_ng_container_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.del(item_r12.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r12.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.car_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.getDateString(item_r12.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.created_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.getDateString(item_r12.available_to));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.status);
      }
    }

    function IndividualUserComponent_ng_container_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IndividualUserComponent_ng_container_64_ng_container_1_Template, 22, 7, "ng-container", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r12));
      }
    }

    function IndividualUserComponent_div_82_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " number + alphabet >= 11. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndividualUserComponent_div_82_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
      }
    }

    function IndividualUserComponent_div_83_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " valid password over 8 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndividualUserComponent_div_83_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
      }
    }

    function IndividualUserComponent_div_84_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid realname. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "realname");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndividualUserComponent_div_84_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls["realname"].invalid);
      }
    }

    function IndividualUserComponent_div_85_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid nickname. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "nickname");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndividualUserComponent_div_85_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["nickname"].invalid);
      }
    }

    function IndividualUserComponent_div_86_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid car_number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "car_number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndividualUserComponent_div_86_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["car_number"].invalid);
      }
    }

    function IndividualUserComponent_div_87_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid mail_box. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndividualUserComponent_div_87_div_5_Template, 2, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["mail_box"].invalid);
      }
    }

    function IndividualUserComponent_div_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid phone. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid status. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid date. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IndividualUserComponent_div_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid date. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var IndividualUserComponent = /*#__PURE__*/function () {
      function IndividualUserComponent(userService, router, _formBuilder, toastr) {
        _classCallCheck(this, IndividualUserComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.useravatar = 'uploads/avatar/sample-1.jpg';
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['username', 'created_at', 'created_by', 'available_to', 'status'];
      }

      _createClass(IndividualUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //etc
          this.user = this.userService.getToken()['userInfo'];
          this.refresh();
          this.getItem();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(arr) {
          if (!this.key) return true;

          for (var i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "add",
        value: function add() {
          var useravatar = 'uploads/avatar/sample-' + Math.floor(Math.random() * 9) + '.jpg';
          this.useravatar = useravatar;
          this.addStatus = true;
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.editKey = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[this.editKey]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
          this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
          this.formGroup.setValue(this.formGroup.value);
        }
      }, {
        key: "del",
        value: function del(id) {
          this.delKey = this.findIndex(id, this.data);
        }
      }, {
        key: "findIndex",
        value: function findIndex(id, datas) {
          for (var i = 0; i < datas.length; i++) {
            if (datas[i].id === id) return i;
          }

          return 0;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "save",
        value: function save() {
          var _this22 = this;

          if (this.addStatus == true) {
            if (this.fileChange) {
              var ns = this.formGroup.value.username;
              var filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
              ;
              this.formData.append('file', this.fileDish, filename);
              this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(function (res) {
                _this22.formGroup.value.avatar = res['path'];

                _this22.addItem();
              }, function (err) {
                _this22.handleError(err);
              });
            } else {
              this.formGroup.value.avatar = this.useravatar;
              this.addItem();
            }
          } else if (this.editStatus == true) {
            if (this.fileChange) {
              var _ns2 = this.formGroup.value.username;

              var _filename2 = _ns2 + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];

              ;
              this.formData.append('file', this.fileDish, _filename2);
              this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(function (res) {
                _this22.formGroup.value.avatar = res['path'];

                _this22.editItem();
              }, function (err) {
                _this22.handleError(err);
              });
            } else {
              this.editItem();
            }
          }
        }
      }, {
        key: "addItem",
        value: function addItem() {
          var _this23 = this;

          this.formGroup.value.created_by = this.user.username;
          this.userService.postRequest("api/admin/addCameraUserIndividual", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this23.Toaster('success', '', 'success');

            _this23.refresh();

            _this23.getItem();
          }, function (err) {
            _this23.handleError(err);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          var _this24 = this;

          this.formGroup.value.created_by = this.user.username;
          this.userService.postRequest("api/admin/editCameraUserIndividual", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this24.Toaster('success', '', 'success');

            _this24.refresh();

            _this24.getItem();
          }, function (err) {
            _this24.handleError(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this25 = this;

          this.userService.postRequest("api/admin/delCameraUserIndividual", {
            user: this.user,
            data: this.data[this.delKey]
          }).subscribe(function (res) {
            _this25.Toaster('success', '', 'success');

            _this25.refresh();

            _this25.getItem();
          }, function (err) {
            _this25.handleError(err);
          });
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this26 = this;

          this.userService.postRequest("api/admin/getCameraUserIndividual", {
            user: this.user
          }).subscribe(function (res) {
            _this26.data = res['result'];
          }, function (err) {});
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.editStatus = false;
          this.addStatus = false;
          this.formData = new FormData();
          this.fileChange = false;
          this.fileDish = undefined;
          this.fileURL = undefined;
          var accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{11}$/;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          this.formGroup = this._formBuilder.group({
            id: [''],
            username: ['individual1', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(accountRegex)],
            password: ['12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            realname: ['jagickin', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            nickname: ['ninja', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mail_box: ['tyfhgi@mail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            phone: ['18654875653', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(intenationalPhone)],
            car_number: ['benz133', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            avatar: [''],
            created_at: [''],
            created_by: [''],
            available_from: ['2020-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['2020-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['on', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            role: ['user']
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
        } //for file manage

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this27 = this;

          this.fileChange = true;
          var mimeType = event.target.files[0].type;
          this.fileDish = event.target.files[0];
          this.reader.readAsDataURL(event.target.files[0]);

          this.reader.onload = function (_event) {
            _this27.fileURL = _this27.reader.result;
          };

          event.target.value = "";
        }
      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //for image

      }, {
        key: "getAvatarSource",
        value: function getAvatarSource() {
          var src;
          if (this.fileChange) src = this.fileURL;else if (this.editStatus) src = this.formGroup.value.avatar;else src = this.useravatar;
          return src;
        } //for date

      }, {
        key: "getDateString",
        value: function getDateString(ss) {
          var d = new Date(ss);
          var dmonth = String(d.getMonth());
          var ddate = String(d.getDate());
          if (dmonth.length < 2) dmonth = '0' + dmonth;
          if (ddate.length < 2) ddate = '0' + ddate;
          return d.getFullYear() + '-' + dmonth + '-' + ddate;
        }
      }]);

      return IndividualUserComponent;
    }();

    IndividualUserComponent.ɵfac = function IndividualUserComponent_Factory(t) {
      return new (t || IndividualUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]));
    };

    IndividualUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IndividualUserComponent,
      selectors: [["app-individual-user"]],
      decls: 215,
      vars: 22,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-3"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled", 2, "right", "48px"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "car_number"], ["by", "created_at"], ["by", "created_by"], ["by", "available_to"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "col-md-6 mb-2", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "placeholder", "18625399752", "formControlName", "phone", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "realname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "nickname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "car_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_by", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_from", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_to", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["alt", "avatar", 1, "avatar_img", 3, "src"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "flaticon-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "flaticon-trash"], ["type", "text", "placeholder", "rabbit", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], [1, "col-md-6", "mb-2"], ["type", "text", "formControlName", "password", "placeholder", "", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "placeholder", "john", "formControlName", "realname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "ninja", "formControlName", "nickname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "benz011235", "formControlName", "car_number", "required", "", 1, "form-control"], ["type", "email", "placeholder", "paskal@asking.com", "formControlName", "mail_box", "required", "", 1, "form-control"]],
      template: function IndividualUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Individual user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Individual user List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IndividualUserComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_32_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "sv-default-sorter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "sv-default-sorter", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "car_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "sv-default-sorter", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sv-default-sorter", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "sv-default-sorter", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "sv-default-sorter", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, IndividualUserComponent_ng_container_64_Template, 2, 1, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "sv-bootstrap-paginator", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Individual user register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_img_click_76_listener() {
            return ctx.fileButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, IndividualUserComponent_div_82_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, IndividualUserComponent_div_83_Template, 6, 1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, IndividualUserComponent_div_84_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, IndividualUserComponent_div_85_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, IndividualUserComponent_div_86_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, IndividualUserComponent_div_87_Template, 6, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, IndividualUserComponent_div_93_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, IndividualUserComponent_div_103_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "available_from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, IndividualUserComponent_div_109_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, IndividualUserComponent_div_115_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_117_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_119_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Save");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " Individual user information ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "form", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "realname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "nickname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "mail_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "car_number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "created_by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "available_from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "available_to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_195_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Close");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Are You Sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_209_listener() {
            return ctx.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IndividualUserComponent_Template_input_change_212_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.length, "\xA0results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["phone"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    height:30px;\r\n    width: 30px;\r\n\r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vaW5kaXZpZHVhbC9pbmRpdmlkdWFsX3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXOztFQUViOztFQUNBO0lBQ0UsdUJBQXVCO0FBQzNCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztFQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztFQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5fc3lzdGVtL2luZGl2aWR1YWwvaW5kaXZpZHVhbF91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ZCBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5hdmF0YXJfaW1ne1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuXHJcbiAgfVxyXG4gIC5sYWJlbE1pZGRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogMjRweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5sZWZ0OiAxMHB4O1xyXG56LWluZGV4OiAxMDAwO1xyXG5mb250LXdlaWdodDogODAwO1xyXG59IFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIC8qIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgKi9cclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxuICB3aWR0aDo5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndividualUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-individual-user',
          templateUrl: './individual_user.component.html',
          styleUrls: ['./individual_user.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/setting/setting.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/admin_system/setting/setting.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SettingComponent */

  /***/
  function srcAppComponentsAdmin_systemSettingSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
      return SettingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function SettingComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "URL->");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_div_33_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \"", ctx_r0.imgURL, "\" ");
      }
    }

    function SettingComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please upload for first image and use url. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/home", "preview"];
    };

    var SettingComponent = /*#__PURE__*/function () {
      function SettingComponent(userService, router, route, _formBuilder, toastr, sanitized) {
        _classCallCheck(this, SettingComponent);

        this.userService = userService;
        this.router = router;
        this.route = route;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.sanitized = sanitized;
        this.url = "/admin/setting";
        this.prefix = 'uploads/page/';
      }

      _createClass(SettingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.userService.getToken()['userInfo'];
          this.getItem();
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this28 = this;

          this.userService.postRequest("api/admin/getSetting").subscribe(function (res) {
            if (res['result'].length > 0) _this28.data = res['result'][0]['code'];
          }, function (err) {
            _this28.handleError(err);
          });
        }
      }, {
        key: "saveCode",
        value: function saveCode() {
          var _this29 = this;

          this.userService.deleteLocalSetting();
          this.userService.postRequest("api/admin/updateSetting", {
            code: this.data
          }).subscribe(function (res) {
            _this29.handleSuccess();

            _this29.getItem();
          }, function (err) {
            _this29.handleError(err);
          });
        }
      }, {
        key: "preview",
        value: function preview() {
          this.userService.setLocalSetting(this.data);
        } //when img click

      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //when input file ok button click

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this30 = this;

          var reader = new FileReader();
          var ff = new FormData();
          var file = event.target.files[0];
          var filename = String(Date.now()) + '.' + file.name.split('.')[file.name.split('.').length - 1];
          ff.append('file', file, filename);
          this.userService.postRequest("api/admin/settingUpload", ff).subscribe(function (res) {
            _this30.handleSuccess();

            _this30.imgURL = "/uploads/page/" + filename;
          }, function (err) {
            _this30.handleError(err);
          });
        } //delete Image

      }, {
        key: "deleteImage",
        value: function deleteImage() {
          var _this31 = this;

          this.userService.postRequest('api/deleteFile', {
            path: this.imgURL
          }).subscribe(function (res) {
            _this31.imgURL = undefined;
          }, function (err) {
            _this31.handleError(err);
          });
        }
      }, {
        key: "putInMiddle",
        value: function putInMiddle(arr, key, member) {
          var temp = [];

          for (var i = 0; i < key; i++) {
            temp.push(arr[i]);
          }

          temp.push(member);

          for (var _i = key; _i < arr.length; _i++) {
            temp.push(arr[_i]);
          }

          return temp;
        } //Toastr functions

      }, {
        key: "handleError",
        value: function handleError(err) {
          if (err.status == 504) this.Toaster('error', '', 'server is not responsing.', 4000);else this.Toaster('error', '', err.error.message, 1500);
        }
      }, {
        key: "handleSuccess",
        value: function handleSuccess() {
          this.Toaster('success', '', 'success');
        }
      }, {
        key: "Toaster",
        value: function Toaster(style, msgtopic, msgContent) {
          var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
          this.toastr.show(style, msgtopic, msgContent, time);
        }
      }]);

      return SettingComponent;
    }();

    SettingComponent.ɵfac = function SettingComponent_Factory(t) {
      return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
    };

    SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingComponent,
      selectors: [["app-setting"]],
      decls: 41,
      vars: 5,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header", "row"], [1, "col-md-6"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-check"], ["type", "button", "target", "_blank", 1, "ms-btn-icon", "btn-pill", "btn-primary", "float-right", 3, "routerLink", "click"], [1, "fas", "fa", "fa-desktop"], [1, "ms-panel-body", "row"], [1, "col-xl-2", "col-sm-2"], ["type", "button", 1, "btn", "btn-success", "has-icon", "brnwithalert", 3, "click"], [1, "fas", "fa", "fa-upload"], [1, "col-xl-10", "col-sm-10"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [1, "ms-panel-body"], ["rows", "40", 1, "form-control", 3, "ngModel", "ngModelChange"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], ["role", "alert", 1, "alert", "alert-success"], [1, "fas", "fa", "fa-times", "deleteI", 3, "click"], ["role", "alert", 1, "alert", "alert-info"], [1, "fas", "fa", "fa-comments"]],
      template: function SettingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Setting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Setting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_23_listener() {
            return ctx.saveCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_25_listener() {
            return ctx.preview();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_29_listener() {
            return ctx.fileButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "upload image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SettingComponent_div_33_Template, 6, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SettingComponent_div_34_Template, 3, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_textarea_ngModelChange_36_listener($event) {
            return ctx.data = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_38_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_6__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_9__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_10__["QuickBarComponent"]],
      styles: [".brnwithalert[_ngcontent-%COMP%]{\r\n    height: 48px;\r\n    margin-top: 1px;\r\n}\r\n.deleteI[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    float: right;\r\n    font-size: 22px;\r\n    color: darkred;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5fc3lzdGVtL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJybndpdGhhbGVydHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4uZGVsZXRlSXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setting',
          templateUrl: './setting.component.html',
          styleUrls: ['./setting.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/system-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/admin_system/system-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: SystemRoutes */

  /***/
  function srcAppComponentsAdmin_systemSystemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemRoutes", function () {
      return SystemRoutes;
    });
    /* harmony import */


    var _shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shared/userService/auth/auth.guard */
    "./src/app/shared/userService/auth/auth.guard.ts");
    /* harmony import */


    var _company_company_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./company/company_user.component */
    "./src/app/components/admin_system/company/company_user.component.ts");
    /* harmony import */


    var _system_system_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./system/system_user.component */
    "./src/app/components/admin_system/system/system_user.component.ts");
    /* harmony import */


    var _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./individual/individual_user.component */
    "./src/app/components/admin_system/individual/individual_user.component.ts");
    /* harmony import */


    var _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./device/camera_register/camera_register.component */
    "./src/app/components/admin_system/device/camera_register/camera_register.component.ts");
    /* harmony import */


    var _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device/camera_user_company/camera_user_company.component */
    "./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts");
    /* harmony import */


    var _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device/camera_user_individual/camera_user_individual.component */
    "./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts");
    /* harmony import */


    var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./setting/setting.component */
    "./src/app/components/admin_system/setting/setting.component.ts");

    var SystemRoutes = [{
      path: '',
      children: [{
        path: '',
        redirectTo: 'setting',
        pathMatch: 'full'
      }, {
        path: 'system_user',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super']
        },
        component: _system_system_user_component__WEBPACK_IMPORTED_MODULE_2__["SystemUserComponent"]
      }, {
        path: 'setting',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super', 'system']
        },
        component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"]
      }, {
        path: 'company_user',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super', 'system']
        },
        component: _company_company_user_component__WEBPACK_IMPORTED_MODULE_1__["CompanyUserComponent"]
      }, {
        path: 'individual_user',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super', 'system']
        },
        component: _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_3__["IndividualUserComponent"]
      }, {
        path: 'camera_register',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super', 'system']
        },
        component: _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_4__["CameraRegisterComponent"]
      }, {
        path: 'camera_user_individual',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super', 'system']
        },
        component: _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_6__["CameraUserIndividualComponent"]
      }, {
        path: 'camera_user_company',
        canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
          role: ['super', 'system']
        },
        component: _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_5__["CameraUserCompanyComponent"]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/components/admin_system/system.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/admin_system/system.module.ts ***!
    \**********************************************************/

  /*! exports provided: SystemModule */

  /***/
  function srcAppComponentsAdmin_systemSystemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemModule", function () {
      return SystemModule;
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


    var _company_company_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company/company_user.component */
    "./src/app/components/admin_system/company/company_user.component.ts");
    /* harmony import */


    var _system_system_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./system/system_user.component */
    "./src/app/components/admin_system/system/system_user.component.ts");
    /* harmony import */


    var _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./individual/individual_user.component */
    "./src/app/components/admin_system/individual/individual_user.component.ts");
    /* harmony import */


    var _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device/camera_register/camera_register.component */
    "./src/app/components/admin_system/device/camera_register/camera_register.component.ts");
    /* harmony import */


    var _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./device/camera_user_company/camera_user_company.component */
    "./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts");
    /* harmony import */


    var _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./device/camera_user_individual/camera_user_individual.component */
    "./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts");
    /* harmony import */


    var _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./setting/setting.component */
    "./src/app/components/admin_system/setting/setting.component.ts");
    /* harmony import */


    var _system_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./system-routing.module */
    "./src/app/components/admin_system/system-routing.module.ts");
    /* harmony import */


    var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../layouts/layouts.module */
    "./src/app/components/layouts/layouts.module.ts");
    /* harmony import */


    var src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/Datatable/DataTableModule */
    "./src/app/shared/Datatable/DataTableModule.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SystemModule = function SystemModule() {
      _classCallCheck(this, SystemModule);
    };

    SystemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SystemModule
    });
    SystemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SystemModule_Factory(t) {
        return new (t || SystemModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"], src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_system_routing_module__WEBPACK_IMPORTED_MODULE_10__["SystemRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SystemModule, {
        declarations: [_company_company_user_component__WEBPACK_IMPORTED_MODULE_3__["CompanyUserComponent"], _system_system_user_component__WEBPACK_IMPORTED_MODULE_4__["SystemUserComponent"], _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_5__["IndividualUserComponent"], _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_6__["CameraRegisterComponent"], _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_7__["CameraUserCompanyComponent"], _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_8__["CameraUserIndividualComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"], src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_company_company_user_component__WEBPACK_IMPORTED_MODULE_3__["CompanyUserComponent"], _system_system_user_component__WEBPACK_IMPORTED_MODULE_4__["SystemUserComponent"], _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_5__["IndividualUserComponent"], _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_6__["CameraRegisterComponent"], _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_7__["CameraUserCompanyComponent"], _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_8__["CameraUserIndividualComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"], src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_system_routing_module__WEBPACK_IMPORTED_MODULE_10__["SystemRoutes"])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin_system/system/system_user.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/admin_system/system/system_user.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SystemUserComponent */

  /***/
  function srcAppComponentsAdmin_systemSystemSystem_userComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemUserComponent", function () {
      return SystemUserComponent;
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


    var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/userService/user.service */
    "./src/app/shared/userService/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/toastrService/toaster.service */
    "./src/app/shared/toastrService/toaster.service.ts");
    /* harmony import */


    var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../layouts/side-navbar/side-navbar.component */
    "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
    /* harmony import */


    var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../layouts/top-navbar/top-navbar.component */
    "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/Datatable/DataTable */
    "./src/app/shared/Datatable/DataTable.ts");
    /* harmony import */


    var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/Datatable/DefaultSorter */
    "./src/app/shared/Datatable/DefaultSorter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/Datatable/BootstrapPaginator */
    "./src/app/shared/Datatable/BootstrapPaginator.ts");
    /* harmony import */


    var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../layouts/footbar/footbar.component */
    "./src/app/components/layouts/footbar/footbar.component.ts");
    /* harmony import */


    var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../layouts/quick-bar/quick-bar.component */
    "./src/app/components/layouts/quick-bar/quick-bar.component.ts");

    function SystemUserComponent_ng_container_58_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_ng_container_58_ng_container_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.edit(item_r10.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_ng_container_58_ng_container_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.edit(item_r10.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_ng_container_58_ng_container_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.del(item_r10.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r10.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.getDateString(item_r10.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.role);
      }
    }

    function SystemUserComponent_ng_container_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemUserComponent_ng_container_58_ng_container_1_Template, 18, 5, "ng-container", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r10));
      }
    }

    function SystemUserComponent_div_76_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Number+Alphbet=11 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemUserComponent_div_76_div_5_Template, 2, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
      }
    }

    function SystemUserComponent_div_77_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " password at least 8 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemUserComponent_div_77_div_5_Template, 2, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
      }
    }

    function SystemUserComponent_div_78_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid realname. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "realname");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemUserComponent_div_78_div_5_Template, 2, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls["realname"].invalid);
      }
    }

    function SystemUserComponent_div_79_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid nickname. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "nickname");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemUserComponent_div_79_div_5_Template, 2, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["nickname"].invalid);
      }
    }

    function SystemUserComponent_div_80_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid mail_box. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemUserComponent_div_80_div_5_Template, 2, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["mail_box"].invalid);
      }
    }

    function SystemUserComponent_div_81_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid phone. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemUserComponent_div_81_div_5_Template, 2, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["phone"].invalid);
      }
    }

    function SystemUserComponent_div_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid role. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SystemUserComponent_div_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid status. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var SystemUserComponent = /*#__PURE__*/function () {
      function SystemUserComponent(userService, router, _formBuilder, toastr) {
        _classCallCheck(this, SystemUserComponent);

        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.useravatar = 'uploads/avatar/sample-1.jpg';
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['username', 'created_at', 'status', 'role'];
      }

      _createClass(SystemUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //etc
          this.user = this.userService.getToken()['userInfo'];
          this.refresh();
          this.getItem();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(arr) {
          if (!this.key) return true;

          for (var i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "add",
        value: function add() {
          var useravatar = 'uploads/avatar/sample-' + Math.floor(Math.random() * 9) + '.jpg';
          this.useravatar = useravatar;
          this.addStatus = true;
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.editKey = this.findIndex(id, this.data);
          this.editStatus = true;
          this.formGroup.setValue(this.data[this.editKey]);
          this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
          this.formGroup.setValue(this.formGroup.value);
        }
      }, {
        key: "del",
        value: function del(id) {
          this.delKey = this.findIndex(id, this.data);
        }
      }, {
        key: "findIndex",
        value: function findIndex(id, datas) {
          for (var i = 0; i < datas.length; i++) {
            if (datas[i].id === id) return i;
          }

          return 0;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.refresh();
        }
      }, {
        key: "save",
        value: function save() {
          var _this32 = this;

          if (this.addStatus == true) {
            if (this.fileChange) {
              var ns = this.formGroup.value.username;
              var filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
              ;
              this.formData.append('file', this.fileDish, filename);
              this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(function (res) {
                _this32.formGroup.value.avatar = res['path'];

                _this32.addItem();
              }, function (err) {
                _this32.handleError(err);
              });
            } else {
              this.formGroup.value.avatar = this.useravatar;
              this.addItem();
            }
          } else if (this.editStatus == true) {
            if (this.fileChange) {
              var _ns3 = this.formGroup.value.username;

              var _filename3 = _ns3 + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];

              ;
              this.formData.append('file', this.fileDish, _filename3);
              this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(function (res) {
                _this32.formGroup.value.avatar = res['path'];

                _this32.editItem();
              }, function (err) {
                _this32.handleError(err);
              });
            } else {
              this.editItem();
            }
          }
        }
      }, {
        key: "addItem",
        value: function addItem() {
          var _this33 = this;

          this.userService.postRequest("api/admin/addSystemUser", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this33.Toaster('success', '', 'success');

            _this33.refresh();

            _this33.getItem();
          }, function (err) {
            _this33.handleError(err);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          var _this34 = this;

          this.userService.postRequest("api/admin/editSystemUser", {
            user: this.user,
            data: this.formGroup.value
          }).subscribe(function (res) {
            _this34.Toaster('success', '', 'success');

            _this34.refresh();

            _this34.getItem();
          }, function (err) {
            _this34.handleError(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          var _this35 = this;

          this.userService.postRequest("api/admin/addSystemUser", {
            user: this.user,
            data: this.data[this.delKey]
          }).subscribe(function (res) {
            _this35.Toaster('success', '', 'success');

            _this35.refresh();

            _this35.getItem();
          }, function (err) {
            _this35.handleError(err);
          });
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this36 = this;

          this.userService.postRequest("api/admin/getSystemUser", {
            user: this.user
          }).subscribe(function (res) {
            _this36.data = res['result'];
          }, function (err) {});
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.editStatus = false;
          this.addStatus = false;
          this.formData = new FormData();
          this.fileChange = false;
          this.fileDish = undefined;
          this.fileURL = undefined;
          var accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{11}$/;
          var intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
          this.formGroup = this._formBuilder.group({
            id: [''],
            username: ['system12345', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(accountRegex)],
            password: ['12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            realname: ['jhon', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            nickname: ['ninja', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mail_box: ['jhon@mail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            phone: ['18654875653', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(intenationalPhone)],
            avatar: [''],
            created_at: [''],
            role: ['system', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            status: ['on', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
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
        } //for file manage

      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this37 = this;

          this.fileChange = true;
          var mimeType = event.target.files[0].type;
          this.fileDish = event.target.files[0];
          this.reader.readAsDataURL(event.target.files[0]);

          this.reader.onload = function (_event) {
            _this37.fileURL = _this37.reader.result;
          };

          event.target.value = "";
        }
      }, {
        key: "fileButtonClick",
        value: function fileButtonClick() {
          document.getElementById('photo').click();
        } //for image

      }, {
        key: "getAvatarSource",
        value: function getAvatarSource() {
          var src;
          if (this.fileChange) src = this.fileURL;else if (this.editStatus) src = this.formGroup.value.avatar;else src = this.useravatar;
          return src;
        } //for date

      }, {
        key: "getDateString",
        value: function getDateString(ss) {
          var d = new Date(ss);
          var dmonth = String(d.getMonth());
          var ddate = String(d.getDate());
          if (dmonth.length < 2) dmonth = '0' + dmonth;
          if (ddate.length < 2) ddate = '0' + ddate;
          return d.getFullYear() + '-' + dmonth + '-' + ddate;
        }
      }]);

      return SystemUserComponent;
    }();

    SystemUserComponent.ɵfac = function SystemUserComponent_Factory(t) {
      return new (t || SystemUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]));
    };

    SystemUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SystemUserComponent,
      selectors: [["app-system-user"]],
      decls: 181,
      vars: 20,
      consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-3"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled", 2, "right", "48px"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "created_at"], ["by", "status"], ["by", "role"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "placeholder", "", "formControlName", "role", "required", "", 1, "form-control"], ["value", "system"], ["value", "super"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "realname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "nickname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["alt", "avatar", 1, "avatar_img", 3, "src"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "flaticon-pencil"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "flaticon-trash"], ["type", "text", "placeholder", "apple", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], ["type", "text", "formControlName", "password", "placeholder", "*******", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Jhon.kk", "formControlName", "realname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "ninja", "formControlName", "nickname", "required", "", 1, "form-control"], ["type", "email", "placeholder", "paskal@mail.com", "formControlName", "mail_box", "required", "", 1, "form-control"], ["type", "text", "placeholder", "18625399752", "formControlName", "phone", "required", "", 1, "form-control"]],
      template: function SystemUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "System user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "System user List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemUserComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_32_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "sv-default-sorter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "sv-default-sorter", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "sv-default-sorter", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sv-default-sorter", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, SystemUserComponent_ng_container_58_Template, 2, 1, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "sv-bootstrap-paginator", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " System user register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_img_click_70_listener() {
            return ctx.fileButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "form", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, SystemUserComponent_div_76_Template, 6, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, SystemUserComponent_div_77_Template, 6, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, SystemUserComponent_div_78_Template, 6, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, SystemUserComponent_div_79_Template, 6, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, SystemUserComponent_div_80_Template, 6, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, SystemUserComponent_div_81_Template, 6, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "system");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "super");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, SystemUserComponent_div_91_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "select", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, SystemUserComponent_div_101_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_103_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_105_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Save");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " System user information ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "form", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "realname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "nickname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "mail_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "created_at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_161_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Close");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Are You Sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_175_listener() {
            return ctx.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SystemUserComponent_Template_input_change_178_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "app-footbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "app-quick-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.length, "\xA0results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["role"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    height:30px;\r\n    width: 30px;\r\n\r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vc3lzdGVtL3N5c3RlbV91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVzs7RUFFYjs7RUFDQTtJQUNFLHVCQUF1QjtBQUMzQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGVBQWU7QUFDZixVQUFVO0FBQ1YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7RUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX3N5c3RlbS9zeXN0ZW0vc3lzdGVtX3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIHRkIGl7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLmF2YXRhcl9pbWd7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG5cclxuICB9XHJcbiAgLmxhYmVsTWlkZGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gIFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIC8qIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgKi9cclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxuICB3aWR0aDo5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-system-user',
          templateUrl: './system_user.component.html',
          styleUrls: ['./system_user.component.css']
        }]
      }], function () {
        return [{
          type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-admin_system-system-module-es5.js.map