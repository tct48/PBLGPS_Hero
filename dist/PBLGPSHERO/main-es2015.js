(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication-authentication-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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



class AppComponent {
    constructor() {
        this.title = 'PBLGPSHERO';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _share_shareds_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./share/shareds.module */ "./src/app/share/shareds.module.ts");
/* harmony import */ var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/haha/haha.component */ "./src/app/components/haha/haha.component.ts");
/* harmony import */ var _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication/components/home/home.component */ "./src/app/authentication/components/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authentication/components/leaderboard/leaderboard.component */ "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authentication/components/information/information.component */ "./src/app/authentication/components/information/information.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentication/components/resource/resource.component */ "./src/app/authentication/components/resource/resource.component.ts");
/* harmony import */ var _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication/components/resource/content/content.component */ "./src/app/authentication/components/resource/content/content.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







// RECOMMENDED

// RECOMMENDED

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRouting"],
            _share_shareds_module__WEBPACK_IMPORTED_MODULE_11__["SharedsModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(),
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_12__["HahaComponent"],
        _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_15__["LeaderboardComponent"],
        _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_18__["ResourceComponent"],
        _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_16__["InformationComponent"],
        _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_19__["ContentComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_11__["SharedsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                    _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                    _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_12__["HahaComponent"],
                    _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_15__["LeaderboardComponent"],
                    _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_18__["ResourceComponent"],
                    _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_16__["InformationComponent"],
                    _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_19__["ContentComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRouting"],
                    _share_shareds_module__WEBPACK_IMPORTED_MODULE_11__["SharedsModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(),
                    ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.url */ "./src/app/app.url.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/haha/haha.component */ "./src/app/components/haha/haha.component.ts");






const RouterLists = [
    { path: '', redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login, pathMatch: 'full' },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login, component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Home, component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Register, component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Haha, component: _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_5__["HahaComponent"] },
    {
        path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, loadChildren: './authentication/authentication.module#AuthenticationModule',
    }
];
const AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(RouterLists);


/***/ }),

/***/ "./src/app/app.url.ts":
/*!****************************!*\
  !*** ./src/app/app.url.ts ***!
  \****************************/
/*! exports provided: AppURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppURL", function() { return AppURL; });
const AppURL = {
    Login: 'signin',
    Register: 'signup',
    Home: 'homepage',
    Authen: 'auth',
    Haha: 'haha',
};


/***/ }),

/***/ "./src/app/authentication/authentication.url.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/authentication.url.ts ***!
  \******************************************************/
/*! exports provided: AuthURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthURL", function() { return AuthURL; });
const AuthURL = {
    Home: 'home',
    Leaderboard: 'leaderboard',
    Information: 'information',
    Resource: 'resource',
    Content: 'content'
};


/***/ }),

/***/ "./src/app/authentication/components/home/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/components/home/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");






class HomeComponent {
    constructor(alert, authen, account) {
        this.alert = alert;
        this.authen = authen;
        this.account = account;
        this.account.getUserLogin(this.authen.getAuthenticated())
            .then(result => {
            this.UserLogin = result;
        });
    }
    ngOnInit() {
    }
    onClickPreTest() {
        this.alert.notify("Okay");
    }
    onClickPrPS() {
        this.alert.showWarning("", "กรุณาทำแบบฝึกหัดก่อน");
    }
    hover(image) {
        if (image.id == "button1") {
            return image.setAttribute('src', '../../../../assets/image/01-2.gif');
        }
        return image.setAttribute('src', '../../../../assets/image/02-2.gif');
    }
    unhover(image) {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 0, consts: [[1, "header-hover"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-down"], [1, "row", "my-3"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body", "text-center"], [3, "click"], ["id", "button1", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/01.png", 2, "cursor", "pointer"], [1, "card-footer"], [1, "card-text"], ["id", "button2", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/02.png"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E40\u0E21\u0E19\u0E39\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Pre-Test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() { return ctx.onClickPreTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " PrPs Test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_20_listener() { return ctx.onClickPrPS(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__["AuthContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/information/information.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/authentication/components/information/information.component.ts ***!
  \********************************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
















function InformationComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 37);
} }
function InformationComponent_img_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
class InformationComponent {
    constructor(authen, account, alert, router, builder, member, level_service) {
        this.authen = authen;
        this.account = account;
        this.alert = alert;
        this.router = router;
        this.builder = builder;
        this.member = member;
        this.level_service = level_service;
        this.html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;
        if (!this.UserLogin)
            this.initialLoadUserLogin();
        this.inititalCreateFormData();
        this.initialLoadUpdateFormData();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.member.updateMember(this.UserLogin._id, this.form.value)
            .then(result => {
            this.alert.success(result.message);
        });
    }
    onTestCal() {
        return this.level = this.level_service.calculateLevel(this.exp);
    }
    onOpenScore(title) {
        var score = Math.floor(Math.random() * 101);
        return this.alert.showScore(title, score);
    }
    // โหลด UserLogin
    initialLoadUserLogin() {
        var data = this.authen.getAuthenticated();
        if (!data) {
            return;
        }
        this.account.getUserLogin(this.authen.getAuthenticated())
            .then(userLogin => {
            this.UserLogin = userLogin;
            if (!userLogin.exp) {
                this.exp = 0;
            }
            this.level = this.exp / 100;
            if (this.level <= 0) {
                this.level = 1;
            }
        })
            .catch(err => {
            this.alert.notify(err.message);
            this.authen.clearAuthenticated();
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
        });
    }
    // โหลด ฟอร์ม
    inititalCreateFormData() {
        this.form = this.builder.group({
            sid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    initialLoadUpdateFormData() {
        // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
        this.account.getUserLogin(this.authen.getAuthenticated())
            .then(result => {
            this.form.controls['email'].setValue(result.email);
            this.form.controls['phone'].setValue(result.phone);
            this.form.controls['firstname'].setValue(result.firstname);
            this.form.controls['sid'].setValue(result.sid);
            this.form.controls['lastname'].setValue(result.lastname);
        });
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"])); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]])], decls: 99, vars: 5, consts: [["src", "../../../../assets/image/Crown4.png"], [1, "row", "py-4"], [1, "col-lg-2"], [1, "jumbotron", "text-center", 2, "padding", "8px 16px", "margin", "0 0 8px 0"], [1, "mt-1", "pl-2", "pr-2", 2, "border", "1px solid lightgray", "border-radius", "5px"], [2, "list-style", "none", "padding-left", "0"], [1, "py-2"], [3, "click"], [1, "col-lg-7", 2, "padding-right", "8px"], [1, "row"], [1, "col-md-3"], ["class", "avatar-image", "src", "../../../../assets/image/no-image.png", 4, "ngIf"], ["class", "avatar-image", "src", "UserLogin.image", 4, "ngIf"], [1, "col-md-9"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "text", "formControlName", "firstname", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", 1, "form-control"], ["type", "text", "formControlName", "lastname", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", 1, "form-control", "mt-2"], ["type", "text", "formControlName", "phone", "placeholder", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23", 1, "form-control"], ["type", "text", "formControlName", "email", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"], [1, "col-md-3", "mt-4", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "mt-4", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E40\u0E25\u0E40\u0E27\u0E25", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], [1, "col-lg-3", "jumbotron", "text-center", "py-4", 2, "border", "1px solid white", "background-color", "rgb(209, 209, 209)", "border-radius", "15px"], [1, "show-badge"], ["href", "", "tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19 Device \u0E40\u0E01\u0E34\u0E19 80 %"], ["src", "../../../../assets/image/badge/badge-device.png"], ["href", "", "tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E01\u0E32\u0E23 Monitor \u0E40\u0E01\u0E34\u0E19 80 %"], ["src", "../../../../assets/image/badge/badge-monitor.png"], ["href", "", "tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E40\u0E01\u0E34\u0E19 80 %"], ["src", "../../../../assets/image/badge/badge-overview.png"], ["src", "../../../../assets/image/no-image.png", 1, "avatar-image"], ["src", "UserLogin.image", 1, "avatar-image"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_12_listener() { return ctx.onOpenScore("Pre-test"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Pre-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_15_listener() { return ctx.onOpenScore("PrPS Test"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "PrPS Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_18_listener() { return ctx.onOpenScore("Stage"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_21_listener() { return ctx.onOpenScore("Quiz"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_24_listener() { return ctx.onOpenScore("Quest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Quest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_27_listener() { return ctx.onOpenScore("Badges"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_30_listener() { return ctx.onOpenScore("Attendance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_33_listener() { return ctx.onOpenScore("Resource"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_36_listener() { return ctx.onOpenScore("Workshop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Workshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_39_listener() { return ctx.onOpenScore("Guild"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Guild");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_42_listener() { return ctx.onOpenScore("PoPS Test"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "PoPS Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_45_listener() { return ctx.onOpenScore("Post-test"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Post-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, InformationComponent_img_50_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, InformationComponent_img_51_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function InformationComponent_Template_form_submit_53_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " \u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "(Experience) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InformationComponent_Template_input_ngModelChange_79_listener($event) { return ctx.exp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " \u0E23\u0E30\u0E14\u0E31\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "(Level) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InformationComponent_Template_input_ngModelChange_86_listener($event) { return ctx.level = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_button_click_87_listener() { return ctx.onTestCal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E04\u0E33\u0E19\u0E27\u0E13 Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E15\u0E23\u0E32\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.image == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.exp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-information',
                templateUrl: './information.component.html',
                styleUrls: ['./information.component.css'],
                providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]]
            }]
    }], function () { return [{ type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] }, { type: _services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/leaderboard/leaderboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/authentication/components/leaderboard/leaderboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/member.service */ "./src/app/share/services/member.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LeaderboardComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r2 + 1, ".", data_r1.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.crown_image[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.exp + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.exp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.badge.length);
} }
class LeaderboardComponent {
    constructor(authen, account, member) {
        this.authen = authen;
        this.account = account;
        this.member = member;
        this.crown_image = [
            "../../../../assets/image/Crown4.png",
            "../../../../assets/image/Crown3.png",
            "../../../../assets/image/Crown2.png",
            "../../../../assets/image/Crown5.png",
            "../../../../assets/image/Crown5.png"
        ];
        if (!this.UserLogin) {
            this.loadUserLogin();
        }
        this.loadTopPlayer();
    }
    ngOnInit() {
    }
    loadUserLogin() {
        this.account.getUserLogin(this.authen.getAuthenticated())
            .then(result => {
            this.UserLogin = result;
        });
    }
    loadTopPlayer() {
        this.member.getTopPlayer()
            .then(result => {
            this.Leaderboard = result.items;
        });
    }
}
LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) { return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_1__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"])); };
LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderboardComponent, selectors: [["app-leaderboard"]], decls: 19, vars: 1, consts: [["src", "../../../../assets/image/Crown4.png"], [1, "lead"], [1, "leaderboard"], [2, "font-family", "'Press Start 2P', cursive", "color", "white", "text-shadow", "black"], ["cellpadding", "0", "cellspacing", "0", 2, "width", "100%"], [2, "font-size", "small", "font-weight", "bold"], ["class", "data", "style", "font-size:smaller;", 4, "ngFor", "ngForOf"], [1, "data", 2, "font-size", "smaller"], [2, "text-align", "left"], [3, "src"]], template: function LeaderboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E19\u0E33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Leaderboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LeaderboardComponent_tr_18_Template, 10, 6, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Leaderboard);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leaderboard',
                templateUrl: './leaderboard.component.html',
                styleUrls: ['./leaderboard.component.css']
            }]
    }], function () { return [{ type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_1__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/resource/content/content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/authentication/components/resource/content/content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");




const _c0 = function () { return ["/auth/resource"]; };
class ContentComponent {
    constructor(activateRouter) {
        this.activateRouter = activateRouter;
        this.activateRouter.queryParams.forEach(params => {
            this.item = params.item;
        });
    }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 29, vars: 4, consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-5"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "mt-2", "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium", 2, "text-indent", "20px", "text-align", "justify"], [1, "col-md-7"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E23\u0E39\u0E49\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49\u0E44\u0E14\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0E21\u0E35\u0E01\u0E34\u0E08\u0E19\u0E34\u0E2A\u0E31\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E15\u0E48\u0E2D\u0E1E\u0E48\u0E27\u0E07 \u0E2A\u0E37\u0E48\u0E2D\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/resource/resource.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/resource/resource.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");






class ResourceComponent {
    constructor(router) {
        this.router = router;
        this.item = ["หน่วยที่ 00", "หน่วยที่ 01", "หน่วยที่ 02", "หน่วยที่ 03", "หน่วยที่ 04", "หน่วยที่ 05", "หน่วยที่ 06", "หน่วยที่ 07", "หน่วยที่ 08", "หน่วยที่ 09", "หน่วยที่ 10", "หน่วยที่ 11", "หน่วยที่ 12"];
    }
    ngOnInit() {
    }
    openContent(item) {
        this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Content], { queryParams: { item } });
    }
}
ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["app-resource"]], decls: 54, vars: 0, consts: [[1, "row", "my-4"], [1, "col-md-5"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "col-md-7"], [1, "row"], [1, "col-md-6"], [1, "action-button", "shadow", "animate", "button-blue", 2, "text-decoration", "none", "width", "100%", 3, "click"], [1, "action-button", "shadow", "animate", "button-red", 2, "text-decoration", "none", "width", "100%", 3, "click"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E23\u0E39\u0E49\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49\u0E44\u0E14\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0E21\u0E35\u0E01\u0E34\u0E08\u0E19\u0E34\u0E2A\u0E31\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_19_listener() { return ctx.openContent(ctx.item[1]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_22_listener() { return ctx.openContent(ctx.item[7]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_25_listener() { return ctx.openContent(ctx.item[2]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_28_listener() { return ctx.openContent(ctx.item[8]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_31_listener() { return ctx.openContent(ctx.item[3]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_34_listener() { return ctx.openContent(ctx.item[9]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_37_listener() { return ctx.openContent(ctx.item[4]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_40_listener() { return ctx.openContent(ctx.item[10]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_43_listener() { return ctx.openContent(ctx.item[5]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_46_listener() { return ctx.openContent(ctx.item[11]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_49_listener() { return ctx.openContent(ctx.item[6]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_Template_button_click_52_listener() { return ctx.openContent(ctx.item[12]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__["AuthContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource',
                templateUrl: './resource.component.html',
                styleUrls: ['./resource.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/level.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/services/level.service.ts ***!
  \**********************************************************/
/*! exports provided: LevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelService", function() { return LevelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");




class LevelService {
    constructor(http, account) {
        this.http = http;
        this.account = account;
    }
    calculateLevel(exp) {
        var level;
        if (exp > 0 && exp < 30) {
            level = 1;
        }
        else if (exp < 50) {
            level = 2;
        }
        else if (exp < 100) {
            level = 3;
        }
        else if (exp < 130) {
            level = 4;
        }
        else if (exp < 150) {
            level = 5;
        }
        else if (exp < 200) {
            level = 6;
        }
        else if (exp < 230) {
            level = 7;
        }
        else if (exp < 250) {
            level = 8;
        }
        else if (exp < 300) {
            level = 9;
        }
        else if (exp < 330) {
            level = 10;
        }
        else if (exp < 350) {
            level = 11;
        }
        else if (exp < 400) {
            level = 12;
        }
        else if (exp < 430) {
            level = 13;
        }
        else if (exp < 450) {
            level = 14;
        }
        else if (exp < 500) {
            level = 15;
        }
        else if (exp < 530) {
            level = 16;
        }
        else if (exp < 550) {
            level = 17;
        }
        else if (exp < 600) {
            level = 18;
        }
        else if (exp < 630) {
            level = 19;
        }
        else if (exp < 650) {
            level = 20;
        }
        else if (exp < 700) {
            level = 21;
        }
        else if (exp < 730) {
            level = 22;
        }
        else if (exp < 750) {
            level = 23;
        }
        else if (exp < 800) {
            level = 24;
        }
        else if (exp < 830) {
            level = 25;
        }
        else if (exp < 850) {
            level = 26;
        }
        else if (exp < 900) {
            level = 27;
        }
        else if (exp < 930) {
            level = 28;
        }
        else if (exp < 950) {
            level = 29;
        }
        else if (exp < 1000) {
            level = 30;
        }
        else if (exp >= 1000) {
            level = 31;
        }
        return level;
    }
}
LevelService.ɵfac = function LevelService_Factory(t) { return new (t || LevelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
LevelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LevelService, factory: LevelService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/member.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/services/member.service.ts ***!
  \***********************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");




class MemberService {
    constructor(http, authen) {
        this.http = http;
        this.authen = authen;
    }
    // service แก้ไขสมาชิก
    updateMember(uid, model) {
        return this.http.requestPatch(`user/${uid}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/haha/haha.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/haha/haha.component.ts ***!
  \***************************************************/
/*! exports provided: HahaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HahaComponent", function() { return HahaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");



class HahaComponent {
    constructor() { }
    ngOnInit() {
    }
}
HahaComponent.ɵfac = function HahaComponent_Factory(t) { return new (t || HahaComponent)(); };
HahaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HahaComponent, selectors: [["app-haha"]], decls: 3, vars: 0, template: function HahaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "haha works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__["AuthContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFoYS9oYWhhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HahaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-haha',
                templateUrl: './haha.component.html',
                styleUrls: ['./haha.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");




const _c0 = function () { return ["/homepage"]; };
const _c1 = function () { return ["/signup"]; };
const _c2 = function () { return ["/signin"]; };
class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 59, vars: 6, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app-content", "container"], [1, "row"], [1, "col-md-12"], [1, "tile"], [1, "text-center", "py-5", "bg-dark", "text-white"], [1, "lead"], [1, "text-center", "py-2"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First custom content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Nulla vitae elit libero, a pharetra augue mollis interdum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Second custom content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Second slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Nulla vitae elit libero, a pharetra augue mollis interdum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Third custom content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Third slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Nulla vitae elit libero, a pharetra augue mollis interdum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");











const _c0 = function () { return ["/homepage"]; };
const _c1 = function () { return ["/signup"]; };
const _c2 = function () { return ["/signin"]; };
class SigninComponent {
    constructor(builder, alert, router, authen, account, activateRoute, _snackBar) {
        this.builder = builder;
        this.alert = alert;
        this.router = router;
        this.authen = authen;
        this.account = account;
        this.activateRoute = activateRoute;
        this._snackBar = _snackBar;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"];
        //ย้อนกลับไปหน้า LOGIN กรณี Redirect
        this.activateRoute.params.forEach(params => {
            this.returnURL = params.returnURL || `/${src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen}/${src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home}`;
        });
        this.redirectPage();
        this.alert.announce("อัพเดท &nbsp; <span style='color:orange'> 6 พค 2020, 10:30:37 PM</span>", "1) แก้คำนวณ Level <br>2) แหล่งการเรียนรู้ (โครง)");
        this.createFormData();
    }
    ngOnInit() {
    }
    createFormData() {
        this.form = this.builder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    redirectPage() {
        var data = this.authen.getAuthenticated();
        if (data) {
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
        }
    }
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify("กรุณากรอกข้อมูลให้ถูกต้อง");
        }
        this.account.onLogin(this.form.value)
            .then(res => {
            // เก็บ AccessToken
            this.authen.setAuthenticated(res.accessToken);
            this.alert.success("ยินดีต้อนรับเข้าสู่ระบบ");
            this.router.navigateByUrl(this.returnURL);
        })
            .catch(err => {
            this.alert.notify(err.message);
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 48, vars: 9, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app", "sidebar-mini", "rtl"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "username", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"], [3, "routerLink"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "main", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PBLGPS-LMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_33_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Username :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css'],
                providers: []
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/validator.service */ "./src/app/share/services/validator.service.ts");









const _c0 = function () { return ["/homepage"]; };
const _c1 = function () { return ["/signup"]; };
const _c2 = function () { return ["/signin"]; };
class SignupComponent {
    // c_password:string;
    constructor(builder, alert, account, router, validator) {
        this.builder = builder;
        this.alert = alert;
        this.account = account;
        this.router = router;
        this.validator = validator;
        this.createFormData();
    }
    ngOnInit() {
    }
    createFormData() {
        this.form = this.builder.group({
            sid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validator.isPassword]],
            c_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validator.comparePassword('password')]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            picture: ['']
        });
    }
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
        }
        this.account.onRegister(this.form.value)
            .then(() => {
            this.alert.success("สมัครสมาชิกเรียบร้อยแล้ว!");
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Login]);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 72, vars: 7, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "firstname", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "lastname", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "username", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", "type", "password", 1, "form-control"], ["formControlName", "c_password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", "type", "password", 1, "form-control"], ["formControlName", "phone", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "email", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "picture", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0E22\u0E39\u0E0B\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E21 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });
SignupComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupComponent, factory: SignupComponent.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authen.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/authen.service.ts ***!
  \********************************************/
/*! exports provided: AuthenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenService", function() { return AuthenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthenService {
    constructor() {
        this.accessKey = 'accessToken';
    }
    setAuthenticated(accessToken) {
        localStorage.setItem(this.accessKey, accessToken);
    }
    getAuthenticated() {
        return localStorage.getItem(this.accessKey);
    }
    clearAuthenticated() {
        localStorage.removeItem(this.accessKey);
    }
}
AuthenService.ɵfac = function AuthenService_Factory(t) { return new (t || AuthenService)(); };
AuthenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenService, factory: AuthenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class HttpService {
    constructor(http) {
        this.http = http;
        this.address = "https://backend-pblgps.herokuapp.com/";
    }
    //Request GET method
    requestGet(url, accessToken) {
        return this.http.get(`${this.address}${url}`, {
            headers: this.appendHeaders(accessToken)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => this.handelError(err)));
    }
    // ส่งข้อมูลแบบ Post method
    requestPost(url, body, file) {
        return this.http
            .post(`${this.address}${url}`, body, file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => this.handelError(err)));
    }
    //Request Patch method
    requestPatch(url, accessToken, model) {
        return this.http
            .patch(`${this.address}${url}`, model, {
            headers: this.appendHeaders(accessToken)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => this.handelError(err)));
    }
    //Request Delete method
    requestDelete(url, id) {
        return this.http
            .delete(`${this.address}${url}` + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => this.handelError(err)));
    }
    // ปรับแต่ง Error ใหม่
    handelError(errResponse) {
        errResponse['Message'] = errResponse.message;
        if (errResponse.error && errResponse.error.message)
            errResponse['Message'] = errResponse.error.message;
        throw errResponse;
    }
    // เพิ่ม header
    appendHeaders(accessToken) {
        const headers = {};
        if (accessToken)
            headers['Authorization'] = `Bearer ${accessToken}`;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/share/components/auth-content/auth-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/share/components/auth-content/auth-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContentComponent", function() { return AuthContentComponent; });
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/share/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/share/components/footer/footer.component.ts");










function AuthContentComponent_marquee_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "marquee");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A PBLGPS-LMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.UserLogin.firstname, " ", ctx_r0.UserLogin.lastname, "");
} }
const _c0 = ["*"];
class AuthContentComponent {
    constructor(account, authen, alert, router) {
        this.account = account;
        this.authen = authen;
        this.alert = alert;
        this.router = router;
        if (!this.UserLogin) {
            this.initialLoadUserLogin();
        }
    }
    ngOnInit() {
    }
    initialLoadUserLogin() {
        var data = this.authen.getAuthenticated();
        if (!data) {
            return;
        }
        this.account.getUserLogin(this.authen.getAuthenticated())
            .then(userLogin => {
            this.UserLogin = userLogin;
        })
            .catch(err => {
            this.alert.notify(err.message);
            this.authen.clearAuthenticated();
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
        });
    }
}
AuthContentComponent.ɵfac = function AuthContentComponent_Factory(t) { return new (t || AuthContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthContentComponent, selectors: [["app-auth-content"]], ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[1, "container", "px-5", "py-4", "ng-content"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o"], [2, "color", "orangered"]], template: function AuthContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AuthContentComponent_marquee_3_Template, 6, 2, "marquee", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvYXV0aC1jb250ZW50L2F1dGgtY29udGVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auth-content',
                templateUrl: './auth-content.component.html',
                styleUrls: ['./auth-content.component.css']
            }]
    }], function () { return [{ type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/share/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.Data = new Date();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "main-footer", "py-2", 2, "border-top", "1px solid darkgray"], [1, "pull-right", "hidden-xs"], [2, "margin-right", "30px"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Copyright \u00A9 2020-2029 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ratchapol Kladchuen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/share/components/nav-bar/nav-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/share/components/nav-bar/nav-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function () { return ["/auth/home"]; };
const _c1 = function () { return ["/auth/resource"]; };
const _c2 = function () { return ["/auth/leaderboard"]; };
const _c3 = function () { return ["/auth/information"]; };
function NavBarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E14\u0E48\u0E32\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(STAGE) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(QUEST)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(QUIZ)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(RESOURCE)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E19\u0E33");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(LEADERBOARD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(INFORMATION)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0E41\u0E19\u0E30\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "(GUIDE)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
class NavBarComponent {
    constructor(account, authen, router, alert) {
        this.account = account;
        this.authen = authen;
        this.router = router;
        this.alert = alert;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"];
        this.UserLogin = {};
        if (!this.UserLogin) {
            this.initialLoadUserLogin();
        }
        this.UserLogin = this.account.UserLogin;
    }
    ngOnInit() {
    }
    initialLoadUserLogin() {
        var data = this.authen.getAuthenticated();
        if (!data) {
            return;
        }
        this.account.getUserLogin(this.authen.getAuthenticated())
            .then(userLogin => {
            this.UserLogin = userLogin;
            this.login = 1;
        })
            .catch(err => {
            this.alert.notify(err.message);
            this.authen.clearAuthenticated();
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login]);
        });
    }
    onLogout() {
        this.authen.clearAuthenticated();
        this.account.onLogout();
        this.login = null;
        this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 19, vars: 1, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [1, "app-nav"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", "aria-label", "Open Profile Menu", 1, "app-nav__item"], [1, "fa", "fa-sort-desc", "fa-lg"], [1, "dropdown-menu", "settings-menu", "dropdown-menu-right"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out", "fa-lg"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav text-center", 4, "ngIf"], [1, "navbar-nav", "text-center"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home", "fa-lg"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4"], [1, "sr-only"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4", 3, "routerLink"], ["href", "#", 1, "nav-item", "nav-link", "px-4"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_9_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavBarComponent_div_18_Template, 35, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "student");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/share/services/account.service.ts":
/*!***************************************************!*\
  !*** ./src/app/share/services/account.service.ts ***!
  \***************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");





class AccountService {
    constructor(http, alert, authen) {
        this.http = http;
        this.alert = alert;
        this.authen = authen;
        this.UserLogin = {};
    }
    // Set ข้อมูล User และ Return UserLogin
    setUserLogin(UserLogin) {
        this.UserLogin._id = UserLogin._id;
        this.UserLogin.firstname = UserLogin.firstname;
        this.UserLogin.lastname = UserLogin.lastname;
        this.UserLogin.username = UserLogin.username;
        this.UserLogin.password = UserLogin.password;
        this.UserLogin.email = UserLogin.email;
        this.UserLogin.phone = UserLogin.phone;
        this.UserLogin.image = UserLogin.image;
        this.UserLogin.sid = UserLogin.sid;
        this.UserLogin.role = UserLogin.role;
        return this.UserLogin;
    }
    getUserLogin(accessToken) {
        return this.http.requestGet('user/data', accessToken)
            .toPromise()
            .then(result => this.setUserLogin(result));
    }
    getAllUser(accessToken) {
        return (this.http.requestGet('user/', accessToken)
            .toPromise());
    }
    onLogin(model) {
        return this.http.requestPost('user/login', model)
            .toPromise();
    }
    onLogout() {
        this.alert.notify("ขอบคุณที่ใช้งาน");
    }
    onRegister(model) {
        return this.http.requestPost('user/signup', model)
            .toPromise();
    }
    onChangePassword(accessToken, model) {
        return this.http.requestPatch('user/change_password', accessToken, model)
            .toPromise();
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/share/services/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/share/services/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");




class AlertService {
    constructor() { }
    notify(message, title = 'Error!', type = 'error') {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: 'ยืนยัน',
        });
    }
    success(message, title = 'Success!', type = 'success') {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: type,
        });
    }
    something_wrong(message = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง') {
        this.notify(message);
    }
    showScore(title = "No data", score = 0) {
        let timerInterval;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            html: "Your score is " + score,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            onClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }
    showWarning(title = "คำเตือน", text = "กรุณาตรวจสอบข้อมูลให้ถูกต้อง") {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    announce(title = "หัวข้อ", text = "ข้อความ") {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            html: text,
            imageUrl: 'http://www.npa-account.com/images/blog5800262.jpg',
            imageWidth: 390,
            imageHeight: 240,
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/share/services/member.service.ts":
/*!**************************************************!*\
  !*** ./src/app/share/services/member.service.ts ***!
  \**************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");




class MemberService {
    constructor(http, authen) {
        this.http = http;
        this.authen = authen;
    }
    signUp(form) {
        var obj = {
            _id: "6102041520131",
            firstname: "6102041520131",
            lastname: "6102041520131",
            username: "6102041520131",
            password: "6102041520131",
            c_password: "6102041520131",
            phone: "6102041520131",
            email: "6102041520131",
            picture: "6102041520131",
        };
        this.member.push(1);
    }
    showMember() {
        return this.member;
    }
    getTopPlayer() {
        return this.http.requestGet('user/leaderboard', this.authen.getAuthenticated())
            .toPromise();
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/share/services/validator.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/share/services/validator.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsService", function() { return ValidatorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidatorsService {
    // สร้าง validate เอง โดยเช็ค รหัสผ่านและยืนยันรหัสผ่านให้เหมือนกัน
    comparePassword(passwordField) {
        return function (confirm_password) {
            if (!confirm_password.parent)
                return;
            const password = confirm_password.parent.get(passwordField);
            const passwordSubscripe = password.valueChanges.subscribe(() => {
                confirm_password.updateValueAndValidity();
                passwordSubscripe.unsubscribe();
            });
            if (confirm_password.value === password.value)
                return;
            return { compare: true };
        };
    }
    // ตรวจสอบ password pattern เป็น A-z 0-9, 6-15 ตัว
    isPassword(password) {
        if (password.value == '')
            return;
        if (/^[A-z0-9]{6,15}$/.test(password.value))
            return;
        return { password: true };
    }
}
ValidatorsService.ɵfac = function ValidatorsService_Factory(t) { return new (t || ValidatorsService)(); };
ValidatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidatorsService, factory: ValidatorsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidatorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/share/shareds.module.ts":
/*!*****************************************!*\
  !*** ./src/app/share/shareds.module.ts ***!
  \*****************************************/
/*! exports provided: SharedsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedsModule", function() { return SharedsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/share/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/share/components/footer/footer.component.ts");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/member.service */ "./src/app/share/services/member.service.ts");
/* harmony import */ var _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validator.service */ "./src/app/share/services/validator.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");












class SharedsModule {
}
SharedsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedsModule });
SharedsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedsModule_Factory(t) { return new (t || SharedsModule)(); }, providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_9__["ValidatorsService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedsModule, { declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]], exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
                ],
                exports: [
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]
                ],
                providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_9__["ValidatorsService"]],
            }]
    }], null, null); })();


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
    production: false
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

module.exports = __webpack_require__(/*! D:\ketar\PBLGPS_Hero\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map