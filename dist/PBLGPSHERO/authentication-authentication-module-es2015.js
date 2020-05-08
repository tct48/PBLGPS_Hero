(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthenticationModule {
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _authentication_routing__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _authentication_routing__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRouting"],
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRouting", function() { return AuthenticationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/authentication/components/home/home.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _components_information_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/information/information.component */ "./src/app/authentication/components/information/information.component.ts");
/* harmony import */ var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/resource/resource.component */ "./src/app/authentication/components/resource/resource.component.ts");
/* harmony import */ var _components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resource/content/content.component */ "./src/app/authentication/components/resource/content/content.component.ts");
/* harmony import */ var _components_member_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/member/member.component */ "./src/app/authentication/components/member/member.component.ts");
/* harmony import */ var _components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manage-resource/manage-resource.component */ "./src/app/authentication/components/manage-resource/manage-resource.component.ts");









const RouterLists = [
    { path: '', redirectTo: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Home, pathMatch: 'full' },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Home, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Leaderboard, component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Information, component: _components_information_information_component__WEBPACK_IMPORTED_MODULE_4__["InformationComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Resource, component: _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Content, component: _components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Member, component: _components_member_member_component__WEBPACK_IMPORTED_MODULE_7__["MemberComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].ManageResource, component: _components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_8__["ManageResourceComponent"] }
    // { path: AuthURL.Signin , component:SigninComponent }
];
const AuthenticationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(RouterLists);


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es2015.js.map