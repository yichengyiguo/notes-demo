(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-javascript-javascript-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web/javascript/javascript.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/javascript/javascript.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <ul>\n        <li><a routerLink=\"/javascript/temporary\" routerLinkActive=\"active\">Temporary notes</a></li>\n    </ul>\n</div>\n<div>\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/web/javascript/temporary/temporary.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web/javascript/temporary/temporary.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>temporary works!</p>\n");

/***/ }),

/***/ "./src/app/web/javascript/javascript.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/web/javascript/javascript.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi9qYXZhc2NyaXB0L2phdmFzY3JpcHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/web/javascript/javascript.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web/javascript/javascript.component.ts ***!
  \********************************************************/
/*! exports provided: JavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptComponent", function() { return JavascriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JavascriptComponent = class JavascriptComponent {
    constructor() { }
    ngOnInit() {
    }
};
JavascriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-javascript',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./javascript.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web/javascript/javascript.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./javascript.component.scss */ "./src/app/web/javascript/javascript.component.scss")).default]
    })
], JavascriptComponent);



/***/ }),

/***/ "./src/app/web/javascript/javascript.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/web/javascript/javascript.module.ts ***!
  \*****************************************************/
/*! exports provided: JavascriptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptModule", function() { return JavascriptModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _javascript_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript.component */ "./src/app/web/javascript/javascript.component.ts");
/* harmony import */ var _temporary_temporary_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./temporary/temporary.module */ "./src/app/web/javascript/temporary/temporary.module.ts");
/* harmony import */ var _temporary_temporary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./temporary/temporary.component */ "./src/app/web/javascript/temporary/temporary.component.ts");






const routes = [
    {
        path: '',
        component: _javascript_component__WEBPACK_IMPORTED_MODULE_3__["JavascriptComponent"],
        children: [
            { path: 'temporary', component: _temporary_temporary_component__WEBPACK_IMPORTED_MODULE_5__["TemporaryComponent"] },
            { path: '**', redirectTo: '', pathMatch: 'prefix' }
        ]
    },
];
let JavascriptModule = class JavascriptModule {
};
JavascriptModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_javascript_component__WEBPACK_IMPORTED_MODULE_3__["JavascriptComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _temporary_temporary_module__WEBPACK_IMPORTED_MODULE_4__["TemporaryModule"]
        ]
    })
], JavascriptModule);



/***/ }),

/***/ "./src/app/web/javascript/temporary/temporary.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/web/javascript/temporary/temporary.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi9qYXZhc2NyaXB0L3RlbXBvcmFyeS90ZW1wb3JhcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/web/javascript/temporary/temporary.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/web/javascript/temporary/temporary.component.ts ***!
  \*****************************************************************/
/*! exports provided: TemporaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporaryComponent", function() { return TemporaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TemporaryComponent = class TemporaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
TemporaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temporary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./temporary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/web/javascript/temporary/temporary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./temporary.component.scss */ "./src/app/web/javascript/temporary/temporary.component.scss")).default]
    })
], TemporaryComponent);



/***/ }),

/***/ "./src/app/web/javascript/temporary/temporary.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/web/javascript/temporary/temporary.module.ts ***!
  \**************************************************************/
/*! exports provided: TemporaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporaryModule", function() { return TemporaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _temporary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temporary.component */ "./src/app/web/javascript/temporary/temporary.component.ts");



let TemporaryModule = class TemporaryModule {
};
TemporaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_temporary_component__WEBPACK_IMPORTED_MODULE_2__["TemporaryComponent"]],
        exports: [
            _temporary_component__WEBPACK_IMPORTED_MODULE_2__["TemporaryComponent"]
        ]
    })
], TemporaryModule);



/***/ })

}]);
//# sourceMappingURL=web-javascript-javascript-module-es2015.js.map