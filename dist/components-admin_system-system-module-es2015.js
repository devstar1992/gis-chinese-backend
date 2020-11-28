(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin_system-system-module"],{

/***/ "./src/app/components/admin_system/company/company_user.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin_system/company/company_user.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUserComponent", function() { return CompanyUserComponent; });
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
















function CompanyUserComponent_ng_container_74_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function CompanyUserComponent_ng_container_74_ng_container_1_Template_img_error_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return item_r16.avatar = ctx_r19.defaultImage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_ng_container_74_ng_container_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.edit(item_r16.id); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_ng_container_74_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.edit(item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_ng_container_74_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.del(item_r16.id); });
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
function CompanyUserComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompanyUserComponent_ng_container_74_ng_container_1_Template, 22, 7, "ng-container", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r16));
} }
function CompanyUserComponent_div_94_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " number + alphabet >= 11. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompanyUserComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_94_div_6_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "account"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
} }
function CompanyUserComponent_div_95_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
} }
function CompanyUserComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_95_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
} }
function CompanyUserComponent_div_96_Template(rf, ctx) { if (rf & 1) {
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
function CompanyUserComponent_div_97_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_97_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["contact"].invalid);
} }
function CompanyUserComponent_div_98_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_98_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["address"].invalid);
} }
function CompanyUserComponent_div_99_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_99_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "car_number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["car_number"].invalid);
} }
function CompanyUserComponent_div_100_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_100_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.formGroup.controls["phone"].invalid);
} }
function CompanyUserComponent_div_101_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyUserComponent_div_101_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "mail_box"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.formGroup.controls["mail_box"].invalid);
} }
function CompanyUserComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CompanyUserComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class CompanyUserComponent {
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
        this.userService.postRequest("api/admin/addCompany", {
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
        this.userService.postRequest("api/admin/editCompany", {
            user: this.user,
            data: this.formGroup.value
        }).subscribe(res => {
            this.refresh();
            this.getItem();
            this.Toaster('success', '', 'success');
        }, err => {
            this.handleError(err);
        });
    }
    deleteItem() {
        this.userService.postRequest("api/admin/delCompany", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/admin/getCompany", { user: this.user }).subscribe(res => {
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
CompanyUserComponent.ɵfac = function CompanyUserComponent_Factory(t) { return new (t || CompanyUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
CompanyUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompanyUserComponent, selectors: [["app-company-user"]], decls: 290, vars: 155, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "car_number"], ["by", "created_at"], ["by", "created_by"], ["by", "available_to"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "col-md-6 mb-2", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "formControlName", "license_number", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "email", "formControlName", "tax_number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "bank_account", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "company", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "contact", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "car_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "address", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "license_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "tax_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "bank_account", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_by", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_from", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_to", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], [1, "avatar_img", 3, "src", "error"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], [1, "col-md-6", "mb-2"], ["type", "text", "formControlName", "password", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "formControlName", "company", "readonly", "", 1, "form-control"], ["type", "email", "formControlName", "contact", "required", "", 1, "form-control"], ["type", "text", "formControlName", "address", "required", "", 1, "form-control"], ["type", "text", "formControlName", "car_number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "phone", "required", "", 1, "form-control"], ["type", "email", "formControlName", "mail_box", "required", "", 1, "form-control"]], template: function CompanyUserComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompanyUserComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_36_listener() { return ctx.add(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CompanyUserComponent_ng_container_74_Template, 2, 1, "ng-container", 30);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_img_click_88_listener() { return ctx.fileButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, CompanyUserComponent_div_94_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, CompanyUserComponent_div_95_Template, 7, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, CompanyUserComponent_div_96_Template, 6, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, CompanyUserComponent_div_97_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, CompanyUserComponent_div_98_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CompanyUserComponent_div_99_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CompanyUserComponent_div_100_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, CompanyUserComponent_div_101_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, CompanyUserComponent_div_108_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, CompanyUserComponent_div_115_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, CompanyUserComponent_div_122_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CompanyUserComponent_div_129_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, CompanyUserComponent_div_136_Template, 3, 3, "div", 50);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](147, CompanyUserComponent_div_147_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_149_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_152_listener() { return ctx.save(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_267_listener() { return ctx.cancel(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyUserComponent_Template_button_click_283_listener() { return ctx.deleteItem(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CompanyUserComponent_Template_input_change_287_listener($event) { return ctx.selectFile($event); });
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
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  height:30px;\r\n  width: 30px;\r\n\r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vY29tcGFueS9jb21wYW55X3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXOztBQUViOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vY29tcGFueS9jb21wYW55X3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG50ZCBpe1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5hdmF0YXJfaW1ne1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG5cclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gIFxyXG4uZm9ybS1jb250cm9se1xyXG53aWR0aDogMTAwJTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbmJvdHRvbTogY2FsYygxMDAlICsgLTI3cHgpO1xyXG5yaWdodDogMDtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG5tYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4vKiBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmhlYWRlcjF7XHJcbmJhY2tncm91bmQtY29sb3I6ICNkYjcwOTNiODtcclxuZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxubWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuLm1zLXBhbmVse1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtdXNlci1pbWd7XHJcbiAgd2lkdGg6OTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-company-user',
                templateUrl: './company_user.component.html',
                styleUrls: ['./company_user.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/device/camera_register/camera_register.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin_system/device/camera_register/camera_register.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CameraRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraRegisterComponent", function() { return CameraRegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/Datatable/DataTable */ "./src/app/shared/Datatable/DataTable.ts");
/* harmony import */ var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/Datatable/DefaultSorter */ "./src/app/shared/Datatable/DefaultSorter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/Datatable/BootstrapPaginator */ "./src/app/shared/Datatable/BootstrapPaginator.ts");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function CameraRegisterComponent_ng_container_76_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_ng_container_76_ng_container_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.edit(item_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_ng_container_76_ng_container_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.del(item_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
function CameraRegisterComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraRegisterComponent_ng_container_76_ng_container_1_Template, 21, 8, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r5));
} }
function CameraRegisterComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraRegisterComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraRegisterComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class CameraRegisterComponent {
    constructor(userService, router, _formBuilder, toastr) {
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
    ngOnInit() {
        //etc
        this.user = this.userService.getToken()['userInfo'];
        this.refresh();
        this.getItem();
    }
    add() {
        this.addStatus = true;
    }
    edit(id) {
        this.editStatus = true;
        const key = this.findIndex(id, this.data);
        this.formGroup.setValue(this.data[key]);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.delivery_date = this.getDateString(this.formGroup.value.delivery_date);
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
            this.addItem();
        }
        else if (this.editStatus == true) {
            this.editItem();
        }
    }
    addItem() {
        this.formGroup.value.created_by = this.user.username;
        this.formGroup.value.assign_status = 'off';
        this.formGroup.value.run_status = 'off';
        this.userService.postRequest("api/admin/addCameraRegister", {
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
        this.userService.postRequest("api/admin/editCameraRegister", {
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
        this.userService.postRequest("api/admin/delCameraRegister", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/admin/getCameraRegister", { user: this.user }).subscribe(res => {
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
        const intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        this.formGroup = this._formBuilder.group({
            id: [''],
            camera_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            created_at: [''],
            created_by: [''],
            delivery_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            assign_status: [''],
            run_status: [''],
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
        document.getElementById('photo').innerHTML = null;
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
            src = "assets/img/people/avatar.jpg";
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
CameraRegisterComponent.ɵfac = function CameraRegisterComponent_Factory(t) { return new (t || CameraRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
CameraRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraRegisterComponent, selectors: [["app-camera-register"]], decls: 143, vars: 78, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "camera_id"], ["by", "model"], ["by", "delivery_date"], ["by", "created_at"], ["by", "created_by"], ["by", "assign_status"], ["by", "run_status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "placeholder", "c12553", "formControlName", "camera_id", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "col-md-12", "mb-2"], ["type", "text", "formControlName", "model", "placeholder", "#dkcenc", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "delivery_date", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "hidden", "click"], [1, "fas", "fa", "fa-trash"], [1, "invalid-feedback", 2, "display", "block"]], template: function CameraRegisterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CameraRegisterComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_36_listener() { return ctx.add(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sv-default-sorter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "sv-default-sorter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sv-default-sorter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "sv-default-sorter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "sv-default-sorter", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "sv-default-sorter", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "sv-default-sorter", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CameraRegisterComponent_ng_container_76_Template, 2, 1, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "sv-bootstrap-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CameraRegisterComponent_div_100_Template, 3, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, CameraRegisterComponent_div_107_Template, 3, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, CameraRegisterComponent_div_114_Template, 3, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_116_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_119_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](121, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraRegisterComponent_Template_button_click_136_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CameraRegisterComponent_Template_input_change_140_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 33, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 35, "Device manage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 37, "Camera register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 39, "Camera register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.data.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 41, "results"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 43, "camera_id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 45, "model"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 47, "delivery_date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 49, "created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 51, "created_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 53, "assign_status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 55, "run_status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 57, "action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 59, "Camera register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 61, "camera_id"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["camera_id"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](105, 63, "model"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["model"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 65, "delivery_date"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["delivery_date"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 67, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](121, 69, "Save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](131, 71, "Sure"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](135, 73, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](138, 75, "delete"));
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    \r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  padding-top: 0px !important;\r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vZGV2aWNlL2NhbWVyYV9yZWdpc3Rlci9jYW1lcmFfcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTs7RUFFQTs7RUFDQTtJQUNFLHVCQUF1QjtBQUMzQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGVBQWU7QUFDZixVQUFVO0FBQ1YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7RUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5fc3lzdGVtL2RldmljZS9jYW1lcmFfcmVnaXN0ZXIvY2FtZXJhX3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ZCBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5hdmF0YXJfaW1ne1xyXG4gICAgXHJcbiAgfVxyXG4gIC5sYWJlbE1pZGRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogMjRweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5sZWZ0OiAxMHB4O1xyXG56LWluZGV4OiAxMDAwO1xyXG5mb250LXdlaWdodDogODAwO1xyXG59IFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-camera-register',
                templateUrl: './camera_register.component.html',
                styleUrls: ['./camera_register.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CameraUserCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraUserCompanyComponent", function() { return CameraUserCompanyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/Datatable/DataTable */ "./src/app/shared/Datatable/DataTable.ts");
/* harmony import */ var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/Datatable/DefaultSorter */ "./src/app/shared/Datatable/DefaultSorter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/Datatable/BootstrapPaginator */ "./src/app/shared/Datatable/BootstrapPaginator.ts");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function CameraUserCompanyComponent_ng_container_72_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_72_ng_container_1_ng_container_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stop(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CameraUserCompanyComponent_ng_container_72_ng_container_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_72_ng_container_1_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.start(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CameraUserCompanyComponent_ng_container_72_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CameraUserCompanyComponent_ng_container_72_ng_container_1_ng_container_15_Template, 3, 0, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CameraUserCompanyComponent_ng_container_72_ng_container_1_ng_container_16_Template, 3, 0, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_72_ng_container_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.edit(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_ng_container_72_ng_container_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.del(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
function CameraUserCompanyComponent_ng_container_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraUserCompanyComponent_ng_container_72_ng_container_1_Template, 21, 8, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r9));
} }
function CameraUserCompanyComponent_option_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r26.camera_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.camera_id, " ");
} }
function CameraUserCompanyComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserCompanyComponent_option_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r27.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.company);
} }
function CameraUserCompanyComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserCompanyComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserCompanyComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserCompanyComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class CameraUserCompanyComponent {
    constructor(userService, router, _formBuilder, toastr) {
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
    ngOnInit() {
        //etc
        this.user = this.userService.getToken()['userInfo'];
        this.refresh();
        this.getItem();
    }
    add() {
        this.addStatus = true;
    }
    edit(id) {
        this.editStatus = true;
        const key = this.findIndex(id, this.data);
        this.formGroup.setValue(this.data[key]);
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
            this.addItem();
        }
        else if (this.editStatus == true) {
            // this.formGroup.value.car_number=this.findVehicleNumber(this.formGroup.value.username,this.userlists);
            this.editItem();
        }
    }
    start(id) {
        const key = this.findIndex(id, this.data);
        this.editStatus = true;
        this.formGroup.setValue(this.data[key]);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
        this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
        this.formGroup.value.status = 'on';
        this.formGroup.setValue(this.formGroup.value);
        this.editItem();
    }
    stop(id) {
        const key = this.findIndex(id, this.data);
        this.editStatus = true;
        this.formGroup.setValue(this.data[key]);
        console.log(this.formGroup.value);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
        this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
        this.formGroup.value.status = 'off';
        // this.formGroup.setValue(this.formGroup.value);
        this.editItem();
    }
    addItem() {
        this.formGroup.value.created_by = this.user.username;
        this.formGroup.value.car_number = this.findVehicleNumber(this.formGroup.value.username, this.userlists);
        this.userService.postRequest("api/admin/addCameraUserCompany", {
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
        this.userService.postRequest("api/admin/editCameraUserCompany", {
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
        this.userService.postRequest("api/admin/delCameraUserCompany", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/admin/getCameraUserCompany", { user: this.user }).subscribe(res => {
            this.data = res['result'];
            this.cameralist = res['cameralist'];
            this.userlists = this.getUnique(res['userlist']);
        }, err => {
        });
    }
    getUnique(arr) {
        const temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (this.existKey(temp, arr[i].company))
                temp.push(arr[i]);
        }
        return temp;
    }
    existKey(arr, key) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].company === key)
                return false;
        }
        return true;
    }
    findVehicleNumber(key, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].username === key)
                return arr[i].car_number;
        }
        return null;
    }
    refresh() {
        this.editStatus = false;
        this.addStatus = false;
        this.formData = new FormData();
        this.fileChange = false;
        this.fileDish = undefined;
        this.fileURL = undefined;
        const intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        this.formGroup = this._formBuilder.group({
            id: [''],
            camera_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car_number: [''],
            created_at: [''],
            created_by: [''],
            available_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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
        document.getElementById('photo').innerHTML = null;
    }
    fileButtonClick() {
        document.getElementById('photo').click();
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
CameraUserCompanyComponent.ɵfac = function CameraUserCompanyComponent_Factory(t) { return new (t || CameraUserCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
CameraUserCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraUserCompanyComponent, selectors: [["app-camera-user-company"]], decls: 161, vars: 85, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "camera_id"], ["by", "company"], ["by", "available_to"], ["by", "created_at"], ["by", "created_by"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "list", "id-camera", "placeholder", "c000001", "formControlName", "camera_id", "required", "", 1, "form-control"], ["id", "id-camera"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "col-md-12", "mb-2"], ["type", "text", "list", "id-user", "formControlName", "company", "placeholder", "account", "required", "", 1, "form-control"], ["id", "id-user"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "placeholder", "on/off", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fa", "fa-power-off"], [3, "value"], [1, "invalid-feedback", 2, "display", "block"]], template: function CameraUserCompanyComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CameraUserCompanyComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_36_listener() { return ctx.add(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sv-default-sorter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "sv-default-sorter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sv-default-sorter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "sv-default-sorter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "sv-default-sorter", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "sv-default-sorter", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, CameraUserCompanyComponent_ng_container_72_Template, 2, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "sv-bootstrap-paginator", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "form", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "datalist", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, CameraUserCompanyComponent_option_97_Template, 2, 2, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, CameraUserCompanyComponent_div_98_Template, 3, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "datalist", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, CameraUserCompanyComponent_option_106_Template, 2, 2, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, CameraUserCompanyComponent_div_107_Template, 3, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, CameraUserCompanyComponent_div_114_Template, 3, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, CameraUserCompanyComponent_div_121_Template, 3, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "select", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, CameraUserCompanyComponent_div_132_Template, 3, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_134_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_137_listener() { return ctx.save(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserCompanyComponent_Template_button_click_154_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CameraUserCompanyComponent_Template_input_change_158_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 38, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 40, "Device manage"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 42, "Camera assign for company"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 44, "Camera assign for company"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.data.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 46, "results"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 48, "camera_id"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 50, "company"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 52, "available_to"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 54, "created_at"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 56, "created_by"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 58, "status"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 60, "action"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](84, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 62, "Camera assign for company"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 64, "camera_id"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cameralist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["camera_id"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](103, 66, "company"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userlists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["company"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 68, "available_from"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](119, 70, "available_to"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](126, 72, "status"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](136, 74, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](139, 76, "Save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](149, 78, "Sure"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](153, 80, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](156, 82, "delete"));
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\npadding-top: 0px !important;\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vZGV2aWNlL2NhbWVyYV91c2VyX2NvbXBhbnkvY2FtZXJhX3VzZXJfY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBOztBQUVBOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX3N5c3RlbS9kZXZpY2UvY2FtZXJhX3VzZXJfY29tcGFueS9jYW1lcmFfdXNlcl9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGQgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYXZhdGFyX2ltZ3tcclxuICBcclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gXHJcbi5mb3JtLWNvbnRyb2x7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuYm90dG9tOiBjYWxjKDEwMCUgKyAtMjdweCk7XHJcbnJpZ2h0OiAwO1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbm1hcmdpbi1ib3R0b206IC0xOXB4O1xyXG59XHJcbi5ib2R5MSB7XHJcbnBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RiNzA5M2I4O1xyXG5mb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG5tYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtY2FyZC1maHtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraUserCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-camera-user-company',
                templateUrl: './camera_user_company.component.html',
                styleUrls: ['./camera_user_company.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CameraUserIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraUserIndividualComponent", function() { return CameraUserIndividualComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/Datatable/DataTable */ "./src/app/shared/Datatable/DataTable.ts");
/* harmony import */ var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/Datatable/DefaultSorter */ "./src/app/shared/Datatable/DefaultSorter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/Datatable/BootstrapPaginator */ "./src/app/shared/Datatable/BootstrapPaginator.ts");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function CameraUserIndividualComponent_ng_container_76_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_76_ng_container_1_ng_container_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stop(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CameraUserIndividualComponent_ng_container_76_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_76_ng_container_1_ng_container_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.start(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CameraUserIndividualComponent_ng_container_76_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CameraUserIndividualComponent_ng_container_76_ng_container_1_ng_container_17_Template, 3, 0, "ng-container", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CameraUserIndividualComponent_ng_container_76_ng_container_1_ng_container_18_Template, 3, 0, "ng-container", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_76_ng_container_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.edit(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_ng_container_76_ng_container_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.del(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
function CameraUserIndividualComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraUserIndividualComponent_ng_container_76_ng_container_1_Template, 23, 9, "ng-container", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r9));
} }
function CameraUserIndividualComponent_option_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r26.camera_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.camera_id, " ");
} }
function CameraUserIndividualComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserIndividualComponent_option_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r27.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r27.username, " ");
} }
function CameraUserIndividualComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserIndividualComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserIndividualComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function CameraUserIndividualComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class CameraUserIndividualComponent {
    constructor(userService, router, _formBuilder, toastr) {
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
    ngOnInit() {
        //etc
        this.user = this.userService.getToken()['userInfo'];
        this.refresh();
        this.getItem();
    }
    add() {
        this.addStatus = true;
    }
    edit(id) {
        this.editStatus = true;
        const key = this.findIndex(id, this.data);
        this.formGroup.setValue(this.data[key]);
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
            this.addItem();
        }
        else if (this.editStatus == true) {
            this.formGroup.value.car_number = this.findVehicleNumber(this.formGroup.value.username, this.userlists);
            this.editItem();
        }
    }
    start(id) {
        const key = this.findIndex(id, this.data);
        this.editStatus = true;
        this.formGroup.setValue(this.data[key]);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
        this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
        this.formGroup.value.status = 'on';
        this.formGroup.setValue(this.formGroup.value);
        this.editItem();
    }
    stop(id) {
        const key = this.findIndex(id, this.data);
        this.editStatus = true;
        this.formGroup.setValue(this.data[key]);
        this.formGroup.value.created_at = this.getDateString(this.formGroup.value.created_at);
        this.formGroup.value.available_from = this.getDateString(this.formGroup.value.available_from);
        this.formGroup.value.available_to = this.getDateString(this.formGroup.value.available_to);
        this.formGroup.value.status = 'off';
        // this.formGroup.setValue(this.formGroup.value);
        this.editItem();
    }
    addItem() {
        this.formGroup.value.created_by = this.user.username;
        this.formGroup.value.car_number = this.findVehicleNumber(this.formGroup.value.username, this.userlists);
        this.userService.postRequest("api/company/addCameraUserIndividual", {
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
        this.userService.postRequest("api/company/editCameraUserIndividual", {
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
        this.userService.postRequest("api/company/delCameraUserIndividual", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/company/getCameraUserIndividual", { user: this.user }).subscribe(res => {
            this.data = res['result'];
            this.cameralist = res['cameralist'];
            this.userlists = res['userlist'];
        }, err => {
        });
    }
    findVehicleNumber(key, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].username === key)
                return arr[i].car_number;
        }
        return null;
    }
    refresh() {
        this.editStatus = false;
        this.addStatus = false;
        this.formData = new FormData();
        this.fileChange = false;
        this.fileDish = undefined;
        this.fileURL = undefined;
        const intenationalPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        this.formGroup = this._formBuilder.group({
            id: [''],
            camera_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car_number: [''],
            created_at: [''],
            created_by: [''],
            available_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            available_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(dateRegex)],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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
        document.getElementById('photo').innerHTML = null;
    }
    fileButtonClick() {
        document.getElementById('photo').click();
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
CameraUserIndividualComponent.ɵfac = function CameraUserIndividualComponent_Factory(t) { return new (t || CameraUserIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
CameraUserIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraUserIndividualComponent, selectors: [["app-camera-user-individual"]], decls: 165, vars: 88, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "camera_id"], ["by", "username"], ["by", "car_number"], ["by", "available_to"], ["by", "created_at"], ["by", "created_by"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], [1, "ms-card-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], [1, "col-md-12", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "list", "id-camera", "placeholder", "c000001", "formControlName", "camera_id", "required", "", 1, "form-control"], ["id", "id-camera"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "col-md-12", "mb-2"], ["type", "text", "list", "id-user", "formControlName", "username", "placeholder", "account", "required", "", 1, "form-control"], ["id", "id-user"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], ["type", "text", "placeholder", "on/off", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fa", "fa-power-off"], [3, "value"], [1, "invalid-feedback", 2, "display", "block"]], template: function CameraUserIndividualComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CameraUserIndividualComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_36_listener() { return ctx.add(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sv-default-sorter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "sv-default-sorter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sv-default-sorter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "sv-default-sorter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "sv-default-sorter", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "sv-default-sorter", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "sv-default-sorter", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CameraUserIndividualComponent_ng_container_76_Template, 2, 1, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "sv-bootstrap-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "datalist", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, CameraUserIndividualComponent_option_101_Template, 2, 2, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, CameraUserIndividualComponent_div_102_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "datalist", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, CameraUserIndividualComponent_option_110_Template, 2, 2, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, CameraUserIndividualComponent_div_111_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CameraUserIndividualComponent_div_118_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, CameraUserIndividualComponent_div_125_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, CameraUserIndividualComponent_div_136_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_138_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_141_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](143, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraUserIndividualComponent_Template_button_click_158_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CameraUserIndividualComponent_Template_input_change_162_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 39, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 41, "Device manage"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 43, "Camera assign for individual"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 45, "Camera assign for individual"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.data.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 47, "results"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 49, "camera_id"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 51, "account"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 53, "car_number"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 55, "available_to"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 57, "created_at"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 59, "created_by"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 61, "status"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 63, "action"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](87, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 65, "Camera assign for individual"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 67, "camera_id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cameralist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["camera_id"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](107, 69, "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userlists);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["username"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](116, 71, "available_from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_from"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](123, 73, "available_to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["available_to"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](130, 75, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](140, 77, "Close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](143, 79, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](153, 81, "Sure"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](157, 83, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](160, 85, "delete"));
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n\r\n.avatar_img[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\nbottom: calc(100% + -27px);\r\nright: 0;\r\ntext-align: right;\r\nposition: absolute;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\nmargin-bottom: -19px;\r\n}\r\n\r\n.body1[_ngcontent-%COMP%] {\r\npadding-top: 0px !important;\r\n}\r\n\r\n.header1[_ngcontent-%COMP%]{\r\nbackground-color: #db7093b8;\r\nfont-family: monospace;\r\nfont-size: 23px;\r\n}\r\n\r\n.ms-user-img[_ngcontent-%COMP%]{\r\nmargin-top: -20px;\r\n}\r\n\r\n.ms-panel[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.ms-card-fh[_ngcontent-%COMP%]{\r\nmargin-bottom: 0px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vZGV2aWNlL2NhbWVyYV91c2VyX2luZGl2aWR1YWwvY2FtZXJhX3VzZXJfaW5kaXZpZHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBOztBQUVBOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX3N5c3RlbS9kZXZpY2UvY2FtZXJhX3VzZXJfaW5kaXZpZHVhbC9jYW1lcmFfdXNlcl9pbmRpdmlkdWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGQgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uYXZhdGFyX2ltZ3tcclxuICBcclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gXHJcbi5mb3JtLWNvbnRyb2x7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuYm90dG9tOiBjYWxjKDEwMCUgKyAtMjdweCk7XHJcbnJpZ2h0OiAwO1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbm1hcmdpbi1ib3R0b206IC0xOXB4O1xyXG59XHJcbi5ib2R5MSB7XHJcbnBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyMXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RiNzA5M2I4O1xyXG5mb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG5tYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4ubXMtcGFuZWx7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubXMtY2FyZC1maHtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraUserIndividualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-camera-user-individual',
                templateUrl: './camera_user_individual.component.html',
                styleUrls: ['./camera_user_individual.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/individual/individual_user.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin_system/individual/individual_user.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndividualUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualUserComponent", function() { return IndividualUserComponent; });
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
















function IndividualUserComponent_ng_container_75_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function IndividualUserComponent_ng_container_75_ng_container_1_Template_img_error_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return item_r12.avatar = ctx_r15.defaultImage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_ng_container_75_ng_container_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.edit(item_r12.id); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_ng_container_75_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.edit(item_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_ng_container_75_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.del(item_r12.id); });
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
function IndividualUserComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IndividualUserComponent_ng_container_75_ng_container_1_Template, 22, 7, "ng-container", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r12));
} }
function IndividualUserComponent_div_95_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " number + alphabet >= 11. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndividualUserComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserComponent_div_95_div_6_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "account"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
} }
function IndividualUserComponent_div_96_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
} }
function IndividualUserComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserComponent_div_96_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
} }
function IndividualUserComponent_div_97_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserComponent_div_97_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "realname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls["realname"].invalid);
} }
function IndividualUserComponent_div_98_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserComponent_div_98_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "nickname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["nickname"].invalid);
} }
function IndividualUserComponent_div_99_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserComponent_div_99_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "car_number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["car_number"].invalid);
} }
function IndividualUserComponent_div_100_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IndividualUserComponent_div_100_div_6_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "mail_box"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["mail_box"].invalid);
} }
function IndividualUserComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function IndividualUserComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class IndividualUserComponent {
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
        this.userService.postRequest("api/admin/addCameraUserIndividual", {
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
        this.userService.postRequest("api/admin/editCameraUserIndividual", {
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
        this.userService.postRequest("api/admin/delCameraUserIndividual", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/admin/getCameraUserIndividual", { user: this.user }).subscribe(res => {
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
IndividualUserComponent.ɵfac = function IndividualUserComponent_Factory(t) { return new (t || IndividualUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
IndividualUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndividualUserComponent, selectors: [["app-individual-user"]], decls: 251, vars: 136, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "car_number"], ["by", "created_at"], ["by", "created_by"], ["by", "available_to"], ["by", "status"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "col-md-6 mb-2", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "placeholder", "18625399752", "formControlName", "phone", "required", "", 1, "form-control"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_from", "required", "", 1, "form-control"], ["type", "text", "placeholder", "YYYY-MM-DD", "formControlName", "available_to", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "realname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "nickname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "car_number", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_by", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_from", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "available_to", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], [1, "avatar_img", 3, "src", "error"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "text", "placeholder", "rabbit", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], [1, "col-md-6", "mb-2"], ["type", "text", "formControlName", "password", "placeholder", "", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "placeholder", "john", "formControlName", "realname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "ninja", "formControlName", "nickname", "required", "", 1, "form-control"], ["type", "text", "placeholder", "benz011235", "formControlName", "car_number", "required", "", 1, "form-control"], ["type", "email", "placeholder", "paskal@asking.com", "formControlName", "mail_box", "required", "", 1, "form-control"]], template: function IndividualUserComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IndividualUserComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_36_listener() { return ctx.add(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, IndividualUserComponent_ng_container_75_Template, 2, 1, "ng-container", 30);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_img_click_89_listener() { return ctx.fileButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, IndividualUserComponent_div_95_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, IndividualUserComponent_div_96_Template, 7, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, IndividualUserComponent_div_97_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, IndividualUserComponent_div_98_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, IndividualUserComponent_div_99_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, IndividualUserComponent_div_100_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, IndividualUserComponent_div_107_Template, 3, 3, "div", 50);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, IndividualUserComponent_div_118_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, IndividualUserComponent_div_125_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, IndividualUserComponent_div_132_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_134_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_137_listener() { return ctx.save(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_228_listener() { return ctx.cancel(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndividualUserComponent_Template_button_click_244_listener() { return ctx.deleteItem(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IndividualUserComponent_Template_input_change_248_listener($event) { return ctx.selectFile($event); });
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
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    height:30px;\r\n    width: 30px;\r\n\r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vaW5kaXZpZHVhbC9pbmRpdmlkdWFsX3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXOztFQUViOztFQUNBO0lBQ0UsdUJBQXVCO0FBQzNCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsZUFBZTtBQUNmLFVBQVU7QUFDVixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztFQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztFQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5fc3lzdGVtL2luZGl2aWR1YWwvaW5kaXZpZHVhbF91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ZCBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5hdmF0YXJfaW1ne1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuXHJcbiAgfVxyXG4gIC5sYWJlbE1pZGRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogMjRweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5sZWZ0OiAxMHB4O1xyXG56LWluZGV4OiAxMDAwO1xyXG5mb250LXdlaWdodDogODAwO1xyXG59IFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIC8qIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgKi9cclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxuICB3aWR0aDo5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndividualUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-individual-user',
                templateUrl: './individual_user.component.html',
                styleUrls: ['./individual_user.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/setting/setting.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin_system/setting/setting.component.ts ***!
  \**********************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function SettingComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "URL->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_div_35_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \"", ctx_r0.imgURL, "\" ");
} }
function SettingComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "Please upload image and use url."), " ");
} }
const _c0 = function () { return ["/home", "preview"]; };
class SettingComponent {
    constructor(userService, router, route, _formBuilder, toastr, sanitized) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.sanitized = sanitized;
        this.url = "/admin/setting";
        this.prefix = 'uploads/page/';
    }
    ngOnInit() {
        this.user = this.userService.getToken()['userInfo'];
        this.getItem();
    }
    getItem() {
        this.userService.postRequest("api/admin/getSetting").subscribe(res => {
            if (res['result'].length > 0)
                this.data = res['result'][0]['code'];
        }, err => {
            this.handleError(err);
        });
    }
    saveCode() {
        this.userService.deleteLocalSetting();
        this.userService.postRequest("api/admin/updateSetting", { code: this.data }).subscribe(res => {
            this.handleSuccess();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    preview() {
        this.userService.setLocalSetting(this.data);
    }
    //when img click
    fileButtonClick() {
        document.getElementById('photo').click();
    }
    //when input file ok button click
    selectFile(event) {
        let reader = new FileReader();
        let ff = new FormData();
        const file = event.target.files[0];
        const filename = String(Date.now()) + '.' + file.name.split('.')[file.name.split('.').length - 1];
        ff.append('file', file, filename);
        this.userService.postRequest("api/admin/settingUpload", ff).subscribe(res => {
            this.handleSuccess();
            this.imgURL = "/uploads/page/" + filename;
        }, err => {
            this.handleError(err);
        });
    }
    //delete Image
    deleteImage() {
        this.userService.postRequest('api/deleteFile', { path: this.imgURL }).subscribe(res => {
            this.imgURL = undefined;
        }, err => {
            this.handleError(err);
        });
    }
    putInMiddle(arr, key, member) {
        const temp = [];
        for (let i = 0; i < key; i++)
            temp.push(arr[i]);
        temp.push(member);
        for (let i = key; i < arr.length; i++)
            temp.push(arr[i]);
        return temp;
    }
    //Toastr functions
    handleError(err) {
        if (err.status == 504)
            this.Toaster('error', '', 'server is not responsing.', 4000);
        else
            this.Toaster('error', '', err.error.message, 1500);
    }
    handleSuccess() {
        this.Toaster('success', '', 'success');
    }
    Toaster(style, msgtopic, msgContent, time = 1000) {
        this.toastr.show(style, msgtopic, msgContent, time);
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 43, vars: 14, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header", "row"], [1, "col-md-6"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-check"], ["type", "button", "target", "_blank", 1, "ms-btn-icon", "btn-pill", "btn-primary", "float-right", 3, "routerLink", "click"], [1, "fas", "fa", "fa-desktop"], [1, "ms-panel-body", "row"], [1, "col-xl-2", "col-sm-2"], ["type", "button", 1, "btn", "btn-success", "has-icon", "brnwithalert", 3, "click"], [1, "fas", "fa", "fa-upload"], [1, "col-xl-10", "col-sm-10"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [1, "ms-panel-body"], ["rows", "40", 1, "form-control", 3, "ngModel", "ngModelChange"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], ["role", "alert", 1, "alert", "alert-success"], [1, "fas", "fa", "fa-times", "deleteI", 3, "click"], ["role", "alert", 1, "alert", "alert-info"], [1, "fas", "fa", "fa-comments"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_25_listener() { return ctx.saveCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_a_click_27_listener() { return ctx.preview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_31_listener() { return ctx.fileButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "upload image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SettingComponent_div_35_Template, 6, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SettingComponent_div_36_Template, 4, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_40_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, "Landing page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 11, "Landing page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data);
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_6__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_9__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_10__["QuickBarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".brnwithalert[_ngcontent-%COMP%]{\r\n    height: 48px;\r\n    margin-top: 1px;\r\n}\r\n.deleteI[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    float: right;\r\n    font-size: 22px;\r\n    color: darkred;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5fc3lzdGVtL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJybndpdGhhbGVydHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4uZGVsZXRlSXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setting',
                templateUrl: './setting.component.html',
                styleUrls: ['./setting.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/system-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/admin_system/system-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SystemRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutes", function() { return SystemRoutes; });
/* harmony import */ var _shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/userService/auth/auth.guard */ "./src/app/shared/userService/auth/auth.guard.ts");
/* harmony import */ var _company_company_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company/company_user.component */ "./src/app/components/admin_system/company/company_user.component.ts");
/* harmony import */ var _system_system_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system/system_user.component */ "./src/app/components/admin_system/system/system_user.component.ts");
/* harmony import */ var _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./individual/individual_user.component */ "./src/app/components/admin_system/individual/individual_user.component.ts");
/* harmony import */ var _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device/camera_register/camera_register.component */ "./src/app/components/admin_system/device/camera_register/camera_register.component.ts");
/* harmony import */ var _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device/camera_user_company/camera_user_company.component */ "./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts");
/* harmony import */ var _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device/camera_user_individual/camera_user_individual.component */ "./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/components/admin_system/setting/setting.component.ts");








const SystemRoutes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'setting', pathMatch: 'full' },
            { path: 'system_user', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super'] }, component: _system_system_user_component__WEBPACK_IMPORTED_MODULE_2__["SystemUserComponent"] },
            { path: 'setting', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super', 'system'] }, component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"] },
            { path: 'company_user', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super', 'system'] }, component: _company_company_user_component__WEBPACK_IMPORTED_MODULE_1__["CompanyUserComponent"] },
            { path: 'individual_user', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super', 'system'] }, component: _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_3__["IndividualUserComponent"] },
            { path: 'camera_register', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super', 'system'] }, component: _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_4__["CameraRegisterComponent"] },
            { path: 'camera_user_individual', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super', 'system'] }, component: _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_6__["CameraUserIndividualComponent"] },
            { path: 'camera_user_company', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], data: { role: ['super', 'system'] }, component: _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_5__["CameraUserCompanyComponent"] },
        ]
    },
];


/***/ }),

/***/ "./src/app/components/admin_system/system.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/admin_system/system.module.ts ***!
  \**********************************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_company_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company_user.component */ "./src/app/components/admin_system/company/company_user.component.ts");
/* harmony import */ var _system_system_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system/system_user.component */ "./src/app/components/admin_system/system/system_user.component.ts");
/* harmony import */ var _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individual/individual_user.component */ "./src/app/components/admin_system/individual/individual_user.component.ts");
/* harmony import */ var _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device/camera_register/camera_register.component */ "./src/app/components/admin_system/device/camera_register/camera_register.component.ts");
/* harmony import */ var _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device/camera_user_company/camera_user_company.component */ "./src/app/components/admin_system/device/camera_user_company/camera_user_company.component.ts");
/* harmony import */ var _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device/camera_user_individual/camera_user_individual.component */ "./src/app/components/admin_system/device/camera_user_individual/camera_user_individual.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/components/admin_system/setting/setting.component.ts");
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system-routing.module */ "./src/app/components/admin_system/system-routing.module.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/layouts.module */ "./src/app/components/layouts/layouts.module.ts");
/* harmony import */ var src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/Datatable/DataTableModule */ "./src/app/shared/Datatable/DataTableModule.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















class SystemModule {
}
SystemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SystemModule });
SystemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SystemModule_Factory(t) { return new (t || SystemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_system_routing_module__WEBPACK_IMPORTED_MODULE_10__["SystemRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SystemModule, { declarations: [_company_company_user_component__WEBPACK_IMPORTED_MODULE_3__["CompanyUserComponent"],
        _system_system_user_component__WEBPACK_IMPORTED_MODULE_4__["SystemUserComponent"],
        _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_5__["IndividualUserComponent"],
        _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_6__["CameraRegisterComponent"],
        _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_7__["CameraUserCompanyComponent"],
        _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_8__["CameraUserIndividualComponent"],
        _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
        src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _company_company_user_component__WEBPACK_IMPORTED_MODULE_3__["CompanyUserComponent"],
                    _system_system_user_component__WEBPACK_IMPORTED_MODULE_4__["SystemUserComponent"],
                    _individual_individual_user_component__WEBPACK_IMPORTED_MODULE_5__["IndividualUserComponent"],
                    _device_camera_register_camera_register_component__WEBPACK_IMPORTED_MODULE_6__["CameraRegisterComponent"],
                    _device_camera_user_company_camera_user_company_component__WEBPACK_IMPORTED_MODULE_7__["CameraUserCompanyComponent"],
                    _device_camera_user_individual_camera_user_individual_component__WEBPACK_IMPORTED_MODULE_8__["CameraUserIndividualComponent"],
                    _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                    src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_system_routing_module__WEBPACK_IMPORTED_MODULE_10__["SystemRoutes"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/admin_system/system/system_user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin_system/system/system_user.component.ts ***!
  \*************************************************************************/
/*! exports provided: SystemUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemUserComponent", function() { return SystemUserComponent; });
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
















function SystemUserComponent_ng_container_67_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_ng_container_67_ng_container_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.edit(item_r10.id); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_ng_container_67_ng_container_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.edit(item_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_ng_container_67_ng_container_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.del(item_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
function SystemUserComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemUserComponent_ng_container_67_ng_container_1_Template, 18, 5, "ng-container", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.applyFilter(item_r10));
} }
function SystemUserComponent_div_87_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Number+Alphbet=11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SystemUserComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SystemUserComponent_div_87_div_6_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "account"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["username"].invalid);
} }
function SystemUserComponent_div_88_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "at least 8 length"), " ");
} }
function SystemUserComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SystemUserComponent_div_88_div_6_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["password"].invalid);
} }
function SystemUserComponent_div_89_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function SystemUserComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SystemUserComponent_div_89_div_6_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "realname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls["realname"].invalid);
} }
function SystemUserComponent_div_90_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function SystemUserComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SystemUserComponent_div_90_div_6_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "nickname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.controls["nickname"].invalid);
} }
function SystemUserComponent_div_91_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function SystemUserComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SystemUserComponent_div_91_div_6_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "mail_box"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls["mail_box"].invalid);
} }
function SystemUserComponent_div_92_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function SystemUserComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SystemUserComponent_div_92_div_6_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.controls["phone"].invalid);
} }
function SystemUserComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
function SystemUserComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Please provide a valid field."), " ");
} }
const _c0 = function () { return [5, 10, 25]; };
class SystemUserComponent {
    constructor(userService, router, _formBuilder, toastr) {
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
        this.userService.postRequest("api/admin/addSystemUser", {
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
        this.userService.postRequest("api/admin/editSystemUser", {
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
        this.userService.postRequest("api/admin/addSystemUser", { user: this.user, data: this.data[this.delKey] }).subscribe(res => {
            this.Toaster('success', '', 'success');
            this.refresh();
            this.getItem();
        }, err => {
            this.handleError(err);
        });
    }
    getItem() {
        this.userService.postRequest("api/admin/getSystemUser", { user: this.user }).subscribe(res => {
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
            status: ['on', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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
SystemUserComponent.ɵfac = function SystemUserComponent_Factory(t) { return new (t || SystemUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
SystemUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemUserComponent, selectors: [["app-system-user"]], decls: 210, vars: 113, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "fas", "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "col-md-6", "col-sm-6", "row"], [2, "text-align", "left", "width", "50%", "padding", "8px"], [2, "text-align", "right", "width", "50%", "padding", "8px"], [2, "width", "50%"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", "float-right", 3, "click"], [1, "fas", "fa", "fa-plus"], [1, "ms-panel-body"], [1, "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "username"], ["by", "created_at"], ["by", "status"], ["by", "role"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "rowsOnPageSet"], ["id", "modal-1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-1", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, ""], [1, "ms-card", "ms-widget", "ms-profile-widget", "ms-card-fh"], [1, "ms-panel-header", "header1"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 2, "cursor", "pointer", 3, "src", "click"], [1, "ms-card-body"], [1, "ms-panel-body", "body1"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-row"], ["class", "col-md-6 mb-3", 4, "ngIf"], [1, "col-md-6", "mb-3"], [1, "input-group"], [1, "labelMiddle"], ["type", "text", "formControlName", "role", "required", "", 1, "form-control"], ["value", "system"], ["value", "super"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "text", "formControlName", "status", "required", "", 1, "form-control"], ["value", "on"], ["value", "off"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "disabled", "click"], ["id", "modal-2", "tabindex", "-2", "role", "dialog", "aria-labelledby", "modal-2", 1, "modal", "fade"], ["alt", "avatar", 1, "ms-img-large", "ms-img-round", "ms-user-img", 3, "src"], [3, "formGroup"], ["type", "text", "placeholder", "", "formControlName", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "realname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "nickname", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "mail_box", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "created_at", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "role", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "status", 1, "form-control"], ["id", "modal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-del", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-max"], [1, "modal-body"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "shadow-none", 3, "click"], ["hidden", ""], ["id", "photo", "type", "file", "name", "photo", "value", "upload", 3, "change"], [4, "ngIf"], ["alt", "avatar", 1, "avatar_img", 3, "src"], ["data-toggle", "modal", "data-target", "#modal-2", 2, "cursor", "pointer", "color", "darkcyan", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-1", 1, "ms-btn-icon", "btn-pill", "btn-success", 3, "click"], [1, "fas", "fa", "fa-edit"], ["type", "button", "data-toggle", "modal", "data-target", "#modal-del", 1, "ms-btn-icon", "btn-pill", "btn-danger", 3, "click"], [1, "fas", "fa", "fa-trash"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control"], [1, "invalid-feedback", 2, "display", "block"], ["type", "text", "formControlName", "password", "minlength", "8", "required", "", 1, "form-control"], ["type", "text", "formControlName", "realname", "required", "", 1, "form-control"], ["type", "text", "formControlName", "nickname", "required", "", 1, "form-control"], ["type", "email", "formControlName", "mail_box", "required", "", 1, "form-control"], ["type", "text", "formControlName", "phone", "required", "", 1, "form-control"]], template: function SystemUserComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemUserComponent_Template_input_ngModelChange_34_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_36_listener() { return ctx.add(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, SystemUserComponent_ng_container_67_Template, 2, 1, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "sv-bootstrap-paginator", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_img_click_81_listener() { return ctx.fileButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "form", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, SystemUserComponent_div_87_Template, 7, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, SystemUserComponent_div_88_Template, 7, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, SystemUserComponent_div_89_Template, 7, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, SystemUserComponent_div_90_Template, 7, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, SystemUserComponent_div_91_Template, 7, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, SystemUserComponent_div_92_Template, 7, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "select", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "system");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "super");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, SystemUserComponent_div_103_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, SystemUserComponent_div_114_Template, 3, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_116_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_119_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](121, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "form", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](183, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_186_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](188, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](198, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](202, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemUserComponent_Template_button_click_203_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](205, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SystemUserComponent_Template_input_change_207_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 50, "Home"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 52, "User manage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 54, "System users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 56, "System users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.data.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 58, "results"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svData", ctx.data)("svRowsOnPage", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 60, "photo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 62, "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 64, "created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 66, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 68, "role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 70, "action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](112, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 72, "System users"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 74, "register"), " ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 76, "role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["role"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](108, 78, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["status"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 80, "Close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](121, 82, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](129, 84, "System users"), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](130, 86, "information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getAvatarSource(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](141, 88, "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 90, "realname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](153, 92, "nickname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](159, 94, "mail_box"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](165, 96, "phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](171, 98, "created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](177, 100, "role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](183, 102, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](188, 104, "Close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](198, 106, "Sure"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](202, 108, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](205, 110, "delete"));
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_6__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_8__["DefaultSorter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_10__["BootstrapPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_11__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_12__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .avatar_img[_ngcontent-%COMP%]{\r\n    height:30px;\r\n    width: 30px;\r\n\r\n  }\r\n  \r\n  .labelMiddle[_ngcontent-%COMP%]{\r\n    background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n  \r\n  .invalid-feedback[_ngcontent-%COMP%] {\r\n  bottom: calc(100% + -27px);\r\n  right: 0;\r\n  text-align: right;\r\n  position: absolute;\r\n}\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: -19px;\r\n}\r\n  \r\n  .body1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  \r\n  .header1[_ngcontent-%COMP%]{\r\n  background-color: #db7093b8;\r\n  font-family: monospace;\r\n  font-size: 23px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n  \r\n  .ms-panel[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-card-fh[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  .ms-user-img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbl9zeXN0ZW0vc3lzdGVtL3N5c3RlbV91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVzs7RUFFYjs7RUFDQTtJQUNFLHVCQUF1QjtBQUMzQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGVBQWU7QUFDZixVQUFVO0FBQ1YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7RUFDQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluX3N5c3RlbS9zeXN0ZW0vc3lzdGVtX3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIHRkIGl7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLmF2YXRhcl9pbWd7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG5cclxuICB9XHJcbiAgLmxhYmVsTWlkZGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gIFxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBib3R0b206IGNhbGMoMTAwJSArIC0yN3B4KTtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTlweDtcclxufVxyXG4uYm9keTEge1xyXG4gIC8qIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgKi9cclxufVxyXG4uaGVhZGVyMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDkzYjg7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1zLXVzZXItaW1ne1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5tcy1wYW5lbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1zLWNhcmQtZmh7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tcy11c2VyLWltZ3tcclxuICB3aWR0aDo5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-system-user',
                templateUrl: './system_user.component.html',
                styleUrls: ['./system_user.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-admin_system-system-module-es2015.js.map