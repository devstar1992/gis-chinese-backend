(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin_company-company-module"],{

/***/ "./src/app/components/admin_company/company-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/admin_company/company-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CompanyRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutes", function() { return CompanyRoutes; });
/* harmony import */ var _shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/userService/auth/auth.guard */ "./src/app/shared/userService/auth/auth.guard.ts");
/* harmony import */ var _company_company_user_public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company/company_user_public.component */ "./src/app/components/admin_company/company/company_user_public.component.ts");
/* harmony import */ var _individual_individual_user_public_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./individual/individual_user_public.component */ "./src/app/components/admin_company/individual/individual_user_public.component.ts");



const CompanyRoutes = [{
        path: '',
        children: [
            { path: '', redirectTo: 'company_user', pathMatch: 'full' },
            { path: 'company_user', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['admin'] }, component: _company_company_user_public_component__WEBPACK_IMPORTED_MODULE_1__["CompanyUserPublicComponent"] },
            { path: 'individual_user', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['admin'] }, component: _individual_individual_user_public_component__WEBPACK_IMPORTED_MODULE_2__["IndividualUserPublicComponent"] },
        ]
    }
];


/***/ }),

/***/ "./src/app/components/admin_company/company.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/admin_company/company.module.ts ***!
  \************************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/layouts.module */ "./src/app/components/layouts/layouts.module.ts");
/* harmony import */ var src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Datatable/DataTableModule */ "./src/app/shared/Datatable/DataTableModule.ts");
/* harmony import */ var _company_company_user_public_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company/company_user_public.component */ "./src/app/components/admin_company/company/company_user_public.component.ts");
/* harmony import */ var _individual_individual_user_public_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individual/individual_user_public.component */ "./src/app/components/admin_company/individual/individual_user_public.component.ts");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/components/admin_company/company-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class CompanyModule {
}
CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_company_routing_module__WEBPACK_IMPORTED_MODULE_7__["CompanyRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_company_company_user_public_component__WEBPACK_IMPORTED_MODULE_5__["CompanyUserPublicComponent"],
        _individual_individual_user_public_component__WEBPACK_IMPORTED_MODULE_6__["IndividualUserPublicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
        src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _company_company_user_public_component__WEBPACK_IMPORTED_MODULE_5__["CompanyUserPublicComponent"],
                    _individual_individual_user_public_component__WEBPACK_IMPORTED_MODULE_6__["IndividualUserPublicComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                    src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_company_routing_module__WEBPACK_IMPORTED_MODULE_7__["CompanyRoutes"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/admin_company/company/company_user_public.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin_company/company/company_user_public.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CompanyUserPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUserPublicComponent", function() { return CompanyUserPublicComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/Datatable/DataTable */ "./src/app/shared/Datatable/DataTable.ts");
/* harmony import */ var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/Datatable/DefaultSorter */ "./src/app/shared/Datatable/DefaultSorter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/Datatable/BootstrapPaginator */ "./src/app/shared/Datatable/BootstrapPaginator.ts");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function CompanyUserPublicComponent_ng_container_74_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function CompanyUserPublicComponent_ng_container_74_ng_container_1_Template_img_error_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return item_r16.avatar = ctx_r19.defaultImage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_ng_container_74_ng_container_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.edit(item_r16.id); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_ng_container_74_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.edit(item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_ng_container_74_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.del(item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r16.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.car_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.getDateString(item_r16.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.getDateString(item_r16.available_to));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.status);
} }
function CompanyUserPublicComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompanyUserPublicComponent_ng_container_74_ng_container_1_Template, 22, 7, "ng-container", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r16));
} }
function CompanyUserPublicComponent_div_94_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " number + alphabet >= 11. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompanyUserPublicComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_94_div_6_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "account"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
} }
function CompanyUserPublicComponent_div_95_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
} }
function CompanyUserPublicComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_95_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
} }
function CompanyUserPublicComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "company"));
} }
function CompanyUserPublicComponent_div_97_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_97_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["contact"].invalid);
} }
function CompanyUserPublicComponent_div_98_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_98_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["address"].invalid);
} }
function CompanyUserPublicComponent_div_99_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_99_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "car_number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["car_number"].invalid);
} }
function CompanyUserPublicComponent_div_100_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_100_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.formGroup.controls["phone"].invalid);
} }
function CompanyUserPublicComponent_div_101_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserPublicComponent_div_101_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "mail_box"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.formGroup.controls["mail_box"].invalid);
} }
function CompanyUserPublicComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserPublicComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class CompanyUserPublicComponent {
    constructor(userService, router, _formBuilder, toastr) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.useravatar = 'uploads/avatar/sample-1.jpg';
        this.defaultImage = "assets/img/error/unknown.jpg";
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['username', 'created_at', 'created_by', 'available_to', 'status'];
    }
    ngOnInit() {
        //etc
        this.user = this.userService.getToken()['userInfo'];
        this.refresh();
        this.getItem();
    }
    applyFilter(arr) {
        if (!this.key)
            return true;
        for (let i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
                return true;
            }
        }
        return false;
    }
    add() {
        const useravatar = 'uploads/avatar/sample-' + Math.floor(Math.random() * 9) + '.jpg';
        this.useravatar = useravatar;
        this.addStatus = true;
    }
    edit(id) {
        this.editKey = this.findIndex(id, this.data);
        this.editStatus = true;
        this.formGroup.setValue(this.data[this.editKey]);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
        this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
        this.formGroup.setValue(this.formGroup.value);
    }
    del(id) {
        this.delKey = this.findIndex(id, this.data);
    }
    findIndex(id, datas) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].id === id)
                return i;
        }
        return 0;
    }
    cancel() {
        this.refresh();
    }
    save() {
        if (this.addStatus == true) {
            if (this.fileChange) {
                const ns = this.formGroup.value.username;
                const filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
                ;
                this.formData.append('file', this.fileDish, filename);
                this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(res => {
                    this.formGroup.value.avatar = res['path'];
                    this.addItem();
                }, err => {
                    this.handleError(err);
                });
            }
            else {
                this.formGroup.value.avatar = this.useravatar;
                this.addItem();
            }
        }
        else if (this.editStatus == true) {
            if (this.fileChange) {
                const ns = this.formGroup.value.username;
                const filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
                ;
                this.formData.append('file', this.fileDish, filename);
                this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(res => {
                    this.formGroup.value.avatar = res['path'];
                    this.editItem();
                }, err => {
                    this.handleError(err);
                });
            }
            else {
                this.editItem();
            }
        }
    }
    addItem() {
        this.userService.postRequest("api/company/addCompany", this.formGroup.value).subscribe(res => {
            this.refresh();
            this.getItem();
            this.Toaster('success', '', 'success');
        }, err => {
            this.handleError(err);
        });
    }
    editItem() {
        this.userService.postRequest("api/company/editCompany", this.formGroup.value).subscribe(res => {
            this.refresh();
            this.getItem();
            this.Toaster('success', '', 'success');
        }, err => {
            this.handleError(err);
        });
    }
    deleteItem() {
        this.userService.postRequest("api/company/delCompany", this.data[this.delKey]).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/company/getCompany", this.user).subscribe(res => {
            this.data = res['result'];
        }, err => {
        });
    }
    refresh() {
        this.editStatus = false;
        this.addStatus = false;
        this.formData = new FormData();
        this.fileChange = false;
        this.fileDish = undefined;
        this.fileURL = undefined;
        const accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{11}$/;
        const intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        this.formGroup = this._formBuilder.group({
            id: [''],
            username: ['company1234', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(accountRegex)],
            password: ['12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company: [this.user.company, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            contact: ['trackingcompany@mail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            mail_box: ['johnid123@mail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            phone: ['18654875653', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(intenationalPhone)],
            car_number: ['benz12345'],
            avatar: [''],
            address: ['chonjin 23 street', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            license_number: ['xxxx-xxxx-xxxx', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            tax_number: ['xxxx-xxxx-xxxx', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            bank_account: ['foe234@fkc', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            created_at: [''],
            created_by: [this.user.username],
            available_from: ['2000-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['2000-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['on', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            role: ['admin']
        });
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
    //for file manage
    selectFile(event) {
        this.fileChange = true;
        const mimeType = event.target.files[0].type;
        this.fileDish = event.target.files[0];
        this.reader.readAsDataURL(event.target.files[0]);
        this.reader.onload = (_event) => {
            this.fileURL = this.reader.result;
        };
        event.target.value = "";
    }
    fileButtonClick() {
        document.getElementById('photo').click();
    }
    //for image
    getAvatarSource() {
        let src;
        if (this.fileChange)
            src = this.fileURL;
        else if (this.editStatus)
            src = this.formGroup.value.avatar;
        else
            src = this.useravatar;
        return src;
    }
    //for date
    getDateString(ss) {
        const d = new Date(ss);
        let dmonth = String(d.getMonth());
        let ddate = String(d.getDate());
        if (dmonth.length < 2)
            dmonth = '0' + dmonth;
        if (ddate.length < 2)
            ddate = '0' + ddate;
        return d.getFullYear() + '-' + dmonth + '-' + ddate;
    }
}
CompanyUserPublicComponent.ɵfac = function CompanyUserPublicComponent_Factory(t) { return new (t || CompanyUserPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
CompanyUserPublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompanyUserPublicComponent, selectors: [["app-company-user-public"]], decls: 290, vars: 155, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "car_number"], ["by", "created_at"], ["by", "created_by"], ["by", "available_to"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "col-md-6 mb-2", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "formControlName", "license_number", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "email", "formControlName", "tax_number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "bank_account", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "company", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "contact", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "car_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "address", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "license_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "tax_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "bank_account", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_by", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_from", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_to", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], [1, "avatar_img", 3, "src", "error"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], [1, "col-md-6", "mb-2"], ["type", "text", "formControlName", "password", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "formControlName", "company", "readonly", "", 1, "form-control"], ["type", "email", "formControlName", "contact", "required", "", 1, "form-control"], ["type", "text", "formControlName", "address", "required", "", 1, "form-control"], ["type", "text", "formControlName", "car_number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "phone", "required", "", 1, "form-control"], ["type", "email", "formControlName", "mail_box", "required", "", 1, "form-control"]], template: function CompanyUserPublicComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompanyUserPublicComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_Template_button_click_36_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "table", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "sv-default-sorter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "sv-default-sorter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "sv-default-sorter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "sv-default-sorter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "sv-default-sorter", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "sv-default-sorter", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CompanyUserPublicComponent_ng_container_74_Template, 2, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "sv-bootstrap-paginator", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_Template_img_click_88_listener() { return ctx.fileButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, CompanyUserPublicComponent_div_94_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, CompanyUserPublicComponent_div_95_Template, 7, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, CompanyUserPublicComponent_div_96_Template, 6, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, CompanyUserPublicComponent_div_97_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, CompanyUserPublicComponent_div_98_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CompanyUserPublicComponent_div_99_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CompanyUserPublicComponent_div_100_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, CompanyUserPublicComponent_div_101_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, CompanyUserPublicComponent_div_108_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, CompanyUserPublicComponent_div_115_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, CompanyUserPublicComponent_div_122_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CompanyUserPublicComponent_div_129_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, CompanyUserPublicComponent_div_136_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](147, CompanyUserPublicComponent_div_147_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_Template_button_click_149_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_Template_button_click_152_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](154, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "form", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](174, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](186, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](192, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](198, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](204, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](210, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](216, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](222, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](228, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](234, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](240, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](246, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](252, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](258, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](264, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_Template_button_click_267_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Close");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](278, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](282, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserPublicComponent_Template_button_click_283_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](285, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CompanyUserPublicComponent_Template_input_change_287_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 68, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 70, "User manage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 72, "Company users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 74, "Company users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.data.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 76, "results"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 78, "user name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 80, "car_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 82, "company"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 84, "created_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 86, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 88, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 90, "action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](154, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 92, "Company users"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 94, "register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 96, "license_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["license_number"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](113, 98, "tax_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["tax_number"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](120, 100, "bank_account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["bank_account"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](127, 102, "available_from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](134, 104, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](141, 106, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](151, 108, "Close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](154, 110, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](162, 112, "Company users"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](163, 114, "information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](174, 116, "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](180, 118, "company"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](186, 120, "contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](192, 122, "mail_box"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](198, 124, "phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](204, 126, "car_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](210, 128, "address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](216, 130, "license_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](222, 132, "tax_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](228, 134, "bank_account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](234, 136, "created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](240, 138, "created_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](246, 140, "available_from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](252, 142, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](258, 144, "role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](264, 146, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](278, 148, "Sure"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](282, 150, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](285, 152, "delete"));
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  height:30px;\r\n  width: 30px;\r\n\r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9jb21wYW55L2NvbXBhbnkvY29tcGFueV91c2VyX3B1YmxpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7O0FBRWI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxlQUFlO0FBQ2YsVUFBVTtBQUNWLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7O0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0Isc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZjs7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX2NvbXBhbnkvY29tcGFueS9jb21wYW55X3VzZXJfcHVibGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGQgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYXZhdGFyX2ltZ3tcclxuICBoZWlnaHQ6MzBweDtcclxuICB3aWR0aDogMzBweDtcclxuXHJcbn1cclxuLmxhYmVsTWlkZGxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogMjRweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5sZWZ0OiAxMHB4O1xyXG56LWluZGV4OiAxMDAwO1xyXG5mb250LXdlaWdodDogODAwO1xyXG59ICBcclxuLmZvcm0tY29udHJvbHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG5ib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxucmlnaHQ6IDA7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxubWFyZ2luLWJvdHRvbTogLTE5cHg7XHJcbn1cclxuLmJvZHkxIHtcclxuLyogcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi5oZWFkZXIxe1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbmZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbmZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4ubXMtdXNlci1pbWd7XHJcbm1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy1jYXJkLWZoe1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIHdpZHRoOjkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyUserPublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-company-user-public',
                templateUrl: './company_user_public.component.html',
                styleUrls: ['./company_user_public.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_company/individual/individual_user_public.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin_company/individual/individual_user_public.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IndividualUserPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualUserPublicComponent", function() { return IndividualUserPublicComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/Datatable/DataTable */ "./src/app/shared/Datatable/DataTable.ts");
/* harmony import */ var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/Datatable/DefaultSorter */ "./src/app/shared/Datatable/DefaultSorter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/Datatable/BootstrapPaginator */ "./src/app/shared/Datatable/BootstrapPaginator.ts");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function IndividualUserPublicComponent_ng_container_75_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function IndividualUserPublicComponent_ng_container_75_ng_container_1_Template_img_error_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return item_r12.avatar = ctx_r15.defaultImage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_ng_container_75_ng_container_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.edit(item_r12.id); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_ng_container_75_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.edit(item_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_ng_container_75_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.del(item_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
function IndividualUserPublicComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IndividualUserPublicComponent_ng_container_75_ng_container_1_Template, 22, 7, "ng-container", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r12));
} }
function IndividualUserPublicComponent_div_95_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " number + alphabet >= 11. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndividualUserPublicComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserPublicComponent_div_95_div_6_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "account"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
} }
function IndividualUserPublicComponent_div_96_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
} }
function IndividualUserPublicComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserPublicComponent_div_96_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
} }
function IndividualUserPublicComponent_div_97_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserPublicComponent_div_97_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "realname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls["realname"].invalid);
} }
function IndividualUserPublicComponent_div_98_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserPublicComponent_div_98_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "nickname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["nickname"].invalid);
} }
function IndividualUserPublicComponent_div_99_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserPublicComponent_div_99_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "car_number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["car_number"].invalid);
} }
function IndividualUserPublicComponent_div_100_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserPublicComponent_div_100_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "mail_box"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["mail_box"].invalid);
} }
function IndividualUserPublicComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserPublicComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class IndividualUserPublicComponent {
    constructor(userService, router, _formBuilder, toastr) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.useravatar = 'uploads/avatar/sample-1.jpg';
        this.defaultImage = "assets/img/error/unknown.jpg";
        this.modalStatus = false;
        this.editStatus = false;
        this.addStatus = false;
        this.data = [];
        this.formData = new FormData();
        this.reader = new FileReader();
        this.fileChange = false;
        this.srcCol = ['username', 'created_at', 'created_by', 'available_to', 'status'];
    }
    ngOnInit() {
        //etc
        this.user = this.userService.getToken()['userInfo'];
        this.refresh();
        this.getItem();
    }
    applyFilter(arr) {
        if (!this.key)
            return true;
        for (let i = 0; i < this.srcCol.length; i++) {
            if (String(arr[this.srcCol[i]]).search(this.key) != -1) {
                return true;
            }
        }
        return false;
    }
    add() {
        const useravatar = 'uploads/avatar/sample-' + Math.floor(Math.random() * 9) + '.jpg';
        this.useravatar = useravatar;
        this.addStatus = true;
    }
    edit(id) {
        this.editKey = this.findIndex(id, this.data);
        this.editStatus = true;
        this.formGroup.setValue(this.data[this.editKey]);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
        this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
        this.formGroup.setValue(this.formGroup.value);
    }
    del(id) {
        this.delKey = this.findIndex(id, this.data);
    }
    findIndex(id, datas) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].id === id)
                return i;
        }
        return 0;
    }
    cancel() {
        this.refresh();
    }
    save() {
        if (this.addStatus == true) {
            if (this.fileChange) {
                const ns = this.formGroup.value.username;
                const filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
                ;
                this.formData.append('file', this.fileDish, filename);
                this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(res => {
                    this.formGroup.value.avatar = res['path'];
                    this.addItem();
                }, err => {
                    this.handleError(err);
                });
            }
            else {
                this.formGroup.value.avatar = this.useravatar;
                this.addItem();
            }
        }
        else if (this.editStatus == true) {
            if (this.fileChange) {
                const ns = this.formGroup.value.username;
                const filename = ns + '.' + this.fileDish.name.split('.')[this.fileDish.name.split('.').length - 1];
                ;
                this.formData.append('file', this.fileDish, filename);
                this.userService.postRequest("api/uploadAvatar", this.formData).subscribe(res => {
                    this.formGroup.value.avatar = res['path'];
                    this.editItem();
                }, err => {
                    this.handleError(err);
                });
            }
            else {
                this.editItem();
            }
        }
    }
    addItem() {
        this.formGroup.value.created_by = this.user.username;
        this.userService.postRequest("api/company/addIndividual", {
            user: this.user,
            data: this.formGroup.value
        }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    editItem() {
        this.formGroup.value.created_by = this.user.username;
        this.userService.postRequest("api/company/editIndividual", {
            user: this.user,
            data: this.formGroup.value
        }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    deleteItem() {
        this.userService.postRequest("api/company/delIndividual", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/company/getIndividual", { user: this.user }).subscribe(res => {
            this.data = res['result'];
        }, err => {
        });
    }
    refresh() {
        this.editStatus = false;
        this.addStatus = false;
        this.formData = new FormData();
        this.fileChange = false;
        this.fileDish = undefined;
        this.fileURL = undefined;
        const accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{11}$/;
        const intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        this.formGroup = this._formBuilder.group({
            id: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(accountRegex)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            realname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mail_box: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(intenationalPhone)],
            car_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            avatar: [''],
            created_at: [''],
            created_by: [''],
            available_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            role: ['user'],
        });
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
    //for file manage
    selectFile(event) {
        this.fileChange = true;
        const mimeType = event.target.files[0].type;
        this.fileDish = event.target.files[0];
        this.reader.readAsDataURL(event.target.files[0]);
        this.reader.onload = (_event) => {
            this.fileURL = this.reader.result;
        };
        event.target.value = "";
    }
    fileButtonClick() {
        document.getElementById('photo').click();
    }
    //for image
    getAvatarSource() {
        let src;
        if (this.fileChange)
            src = this.fileURL;
        else if (this.editStatus)
            src = this.formGroup.value.avatar;
        else
            src = this.useravatar;
        return src;
    }
    //for date
    getDateString(ss) {
        const d = new Date(ss);
        let dmonth = String(d.getMonth());
        let ddate = String(d.getDate());
        if (dmonth.length < 2)
            dmonth = '0' + dmonth;
        if (ddate.length < 2)
            ddate = '0' + ddate;
        return d.getFullYear() + '-' + dmonth + '-' + ddate;
    }
}
IndividualUserPublicComponent.ɵfac = function IndividualUserPublicComponent_Factory(t) { return new (t || IndividualUserPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
IndividualUserPublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndividualUserPublicComponent, selectors: [["app-individual-user-public"]], decls: 251, vars: 136, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "car_number"], ["by", "created_at"], ["by", "created_by"], ["by", "available_to"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "col-md-6 mb-2", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "placeholder", "18625399752", "formControlName", "phone", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "realname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "nickname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "car_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_by", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_from", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_to", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], [1, "avatar_img", 3, "src", "error"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "text", "placeholder", "rabbit", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], [1, "col-md-6", "mb-2"], ["type", "text", "formControlName", "password", "placeholder", "", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "placeholder", "john", "formControlName", "realname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "ninja", "formControlName", "nickname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "benz011235", "formControlName", "car_number", "required", "", 1, "form-control"], ["type", "email", "placeholder", "paskal@asking.com", "formControlName", "mail_box", "required", "", 1, "form-control"]], template: function IndividualUserPublicComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IndividualUserPublicComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_Template_button_click_36_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "table", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "sv-default-sorter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "sv-default-sorter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "sv-default-sorter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "sv-default-sorter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "sv-default-sorter", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "sv-default-sorter", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, IndividualUserPublicComponent_ng_container_75_Template, 2, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "sv-bootstrap-paginator", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_Template_img_click_89_listener() { return ctx.fileButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, IndividualUserPublicComponent_div_95_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, IndividualUserPublicComponent_div_96_Template, 7, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, IndividualUserPublicComponent_div_97_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, IndividualUserPublicComponent_div_98_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, IndividualUserPublicComponent_div_99_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, IndividualUserPublicComponent_div_100_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, IndividualUserPublicComponent_div_107_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, IndividualUserPublicComponent_div_118_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, IndividualUserPublicComponent_div_125_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, IndividualUserPublicComponent_div_132_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_Template_button_click_134_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_Template_button_click_137_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](139, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "form", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](183, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](189, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](207, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](213, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](219, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](225, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_Template_button_click_228_listener() { return ctx.cancel(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](239, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](243, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserPublicComponent_Template_button_click_244_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](246, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IndividualUserPublicComponent_Template_input_change_248_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 59, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 61, "User manage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 63, "Individual users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 65, "Individual users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.data.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 67, "results"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 69, "photo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 71, "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 73, "car_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 75, "created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 77, "created_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 79, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 81, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 83, "action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](135, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 85, "Individual users"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 87, "register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](105, 89, "phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["phone"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 91, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](123, 93, "available_from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](130, 95, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](136, 97, "Close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](139, 99, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 101, "Individual users"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](148, 103, "register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](159, 105, "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](165, 107, "realname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](171, 109, "nickname"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](177, 111, "mail_box"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](183, 113, "phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](189, 115, "car_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](195, 117, "created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](201, 119, "created_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](207, 121, "available_from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](213, 123, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](219, 125, "role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](225, 127, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](239, 129, "Sure"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](243, 131, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](246, 133, "delete"));
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    height:30px;\r\n    width: 30px;\r\n\r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9jb21wYW55L2luZGl2aWR1YWwvaW5kaXZpZHVhbF91c2VyX3B1YmxpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7O0VBRWI7O0VBQ0E7SUFDRSx1QkFBdUI7QUFDM0Isa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxlQUFlO0FBQ2YsVUFBVTtBQUNWLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0VBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0VBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9jb21wYW55L2luZGl2aWR1YWwvaW5kaXZpZHVhbF91c2VyX3B1YmxpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgdGQgaXtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAuYXZhdGFyX2ltZ3tcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcblxyXG4gIH1cclxuICAubGFiZWxNaWRkbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6IDI0cHg7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxubGVmdDogMTBweDtcclxuei1pbmRleDogMTAwMDtcclxuZm9udC13ZWlnaHQ6IDgwMDtcclxufSBcclxuLmZvcm0tY29udHJvbHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgYm90dG9tOiBjYWxjKDEwMCUgKyAtMjdweCk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTE5cHg7XHJcbn1cclxuLmJvZHkxIHtcclxuICAvKiBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmhlYWRlcjF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNzA5M2I4O1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy1jYXJkLWZoe1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtdXNlci1pbWd7XHJcbiAgd2lkdGg6OTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndividualUserPublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-individual-user-public',
                templateUrl: './individual_user_public.component.html',
                styleUrls: ['./individual_user_public.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-admin_company-company-module-es2015.js.map