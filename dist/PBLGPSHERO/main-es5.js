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
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./authentication/authentication.module": ["./src/app/authentication/authentication.module.ts", "authentication-authentication-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'PBLGPSHERO';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
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


    var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _share_shareds_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./share/shareds.module */
    "./src/app/share/shareds.module.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/haha/haha.component */
    "./src/app/components/haha/haha.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./authentication/components/home/home.component */
    "./src/app/authentication/components/home/home.component.ts");
    /* harmony import */


    var _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./authentication/components/member/member.component */
    "./src/app/authentication/components/member/member.component.ts");
    /* harmony import */


    var _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./authentication/components/resource/resource.component */
    "./src/app/authentication/components/resource/resource.component.ts");
    /* harmony import */


    var _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./authentication/components/resource/content/content.component */
    "./src/app/authentication/components/resource/content/content.component.ts");
    /* harmony import */


    var _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./authentication/components/leaderboard/leaderboard.component */
    "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./authentication/components/information/information.component */
    "./src/app/authentication/components/information/information.component.ts");
    /* harmony import */


    var _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./authentication/components/manage-resource/manage-resource.component */
    "./src/app/authentication/components/manage-resource/manage-resource.component.ts");
    /* harmony import */


    var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/pipes/date-ago.pipe */
    "./src/app/services/pipes/date-ago.pipe.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // common
    // module
    // component
    // pipe


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_5__["SharedsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__["TypeaheadModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_25__["DateAgoPipe"], _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_14__["HahaComponent"], _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_19__["MemberComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__["HomepageComponent"], _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_21__["ContentComponent"], _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_20__["ResourceComponent"], _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_23__["InformationComponent"], _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_22__["LeaderboardComponent"], _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_24__["ManageResourceComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_5__["SharedsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__["TypeaheadModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_25__["DateAgoPipe"], _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_14__["HahaComponent"], _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_19__["MemberComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__["HomepageComponent"], _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_21__["ContentComponent"], _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_20__["ResourceComponent"], _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_23__["InformationComponent"], _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_22__["LeaderboardComponent"], _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_24__["ManageResourceComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_5__["SharedsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__["TypeaheadModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRouting */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouting", function () {
      return AppRouting;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/haha/haha.component */
    "./src/app/components/haha/haha.component.ts");

    var RouterLists = [{
      path: '',
      redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login,
      pathMatch: 'full'
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login,
      component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Home,
      component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Register,
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Haha,
      component: _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_5__["HahaComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen,
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }];

    var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(RouterLists);
    /***/

  },

  /***/
  "./src/app/app.url.ts":
  /*!****************************!*\
    !*** ./src/app/app.url.ts ***!
    \****************************/

  /*! exports provided: AppURL */

  /***/
  function srcAppAppUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppURL", function () {
      return AppURL;
    });

    var AppURL = {
      Login: 'signin',
      Register: 'signup',
      Home: 'homepage',
      Authen: 'auth',
      Haha: 'haha'
    };
    /***/
  },

  /***/
  "./src/app/authentication/authentication.url.ts":
  /*!******************************************************!*\
    !*** ./src/app/authentication/authentication.url.ts ***!
    \******************************************************/

  /*! exports provided: AuthURL */

  /***/
  function srcAppAuthenticationAuthenticationUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthURL", function () {
      return AuthURL;
    });

    var AuthURL = {
      Home: 'home',
      Leaderboard: 'leaderboard',
      Information: 'information',
      Resource: 'resource',
      Content: 'content',
      Member: 'member',
      ManageResource: 'manage-resource',
      Signin: 'signin'
    };
    /***/
  },

  /***/
  "./src/app/authentication/components/home/home.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/authentication/components/home/home.component.ts ***!
    \******************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppAuthenticationComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(alert, authen, account) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.alert = alert;
        this.authen = authen;
        this.account = account;
        this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
          _this.UserLogin = result;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickPreTest",
        value: function onClickPreTest() {
          this.alert.notify("Okay");
        }
      }, {
        key: "onClickPrPS",
        value: function onClickPrPS() {
          this.alert.showWarning("", "กรุณาทำแบบฝึกหัดก่อน");
        }
      }, {
        key: "hover",
        value: function hover(image) {
          if (image.id == "button1") {
            return image.setAttribute('src', '../../../../assets/image/01-2.gif');
          }

          return image.setAttribute('src', '../../../../assets/image/02-2.gif');
        }
      }, {
        key: "unhover",
        value: function unhover(image) {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 25,
      vars: 0,
      consts: [[1, "header-hover"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-down"], [1, "row", "my-3"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body", "text-center"], [3, "click"], ["id", "button1", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/01.png", 2, "cursor", "pointer"], [1, "card-footer"], [1, "card-text"], ["id", "button2", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/02.png"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() {
            return ctx.onClickPreTest();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_20_listener() {
            return ctx.onClickPrPS();
          });

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
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_4__["AuthContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/information/information.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/authentication/components/information/information.component.ts ***!
    \********************************************************************************/

  /*! exports provided: InformationComponent */

  /***/
  function srcAppAuthenticationComponentsInformationInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformationComponent", function () {
      return InformationComponent;
    });
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var _services_level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/level.service */
    "./src/app/authentication/services/level.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");

    var _c0 = function _c0() {
      return ["/auth/member"];
    };

    function InformationComponent_nav_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07 & \u0E41\u0E01\u0E49\u0E44\u0E02");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function InformationComponent_img_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
      }
    }

    function InformationComponent_img_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
      }
    }

    var InformationComponent = /*#__PURE__*/function () {
      function InformationComponent(authen, account, alert, router, builder, member, level_service, activateRouter) {
        var _this2 = this;

        _classCallCheck(this, InformationComponent);

        this.authen = authen;
        this.account = account;
        this.alert = alert;
        this.router = router;
        this.builder = builder;
        this.member = member;
        this.level_service = level_service;
        this.activateRouter = activateRouter;
        this.html = "<span class=\"btn-block btn-danger well-sm\">Never trust not sanitized HTML!!!</span>";
        this.activateRouter.queryParams.forEach(function (params) {
          _this2.mem_id = params.item;
        });
        if (!this.UserLogin) this.initialLoadUserLogin();
        this.inititalCreateFormData();
        this.initialLoadUpdateFormData();
      }

      _createClass(InformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          if (this.mem_id) {
            return this.member.updateMember(this.mem_id, this.form.value).then(function (result) {
              _this3.alert.success(result.message);
            });
          }

          this.member.updateMember(this.UserLogin._id, this.form.value).then(function (result) {
            _this3.alert.success(result.message);
          });
        }
      }, {
        key: "onTestCal",
        value: function onTestCal() {
          return this.level = this.level_service.calculateLevel(this.exp);
        }
      }, {
        key: "onOpenScore",
        value: function onOpenScore(title) {
          var score = Math.floor(Math.random() * 101);
          return this.alert.showScore(title, score);
        } // โหลด UserLogin

      }, {
        key: "initialLoadUserLogin",
        value: function initialLoadUserLogin() {
          var _this4 = this;

          var data = this.authen.getAuthenticated();

          if (!data) {
            return;
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (userLogin) {
            _this4.UserLogin = userLogin;
          })["catch"](function (err) {
            _this4.alert.notify(err.message);

            _this4.authen.clearAuthenticated();

            _this4.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
          });
        } // โหลด ฟอร์ม

      }, {
        key: "inititalCreateFormData",
        value: function inititalCreateFormData() {
          this.form = this.builder.group({
            sid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "initialLoadUpdateFormData",
        value: function initialLoadUpdateFormData() {
          var _this5 = this;

          // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
          if (this.mem_id) {
            return this.account.getUserByID(this.mem_id, this.authen.getAuthenticated()).then(function (result) {
              // console.log(result);
              _this5.form.controls['email'].setValue(result.items[0].email);

              _this5.form.controls['phone'].setValue(result.items[0].phone);

              _this5.form.controls['firstname'].setValue(result.items[0].firstname);

              _this5.form.controls['sid'].setValue(result.items[0].sid);

              _this5.form.controls['lastname'].setValue(result.items[0].lastname);

              _this5.exp = result.items[0].exp;
              _this5.level = _this5.level_service.calculateLevel(_this5.exp);
            });
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
            _this5.form.controls['email'].setValue(result.email);

            _this5.form.controls['phone'].setValue(result.phone);

            _this5.form.controls['firstname'].setValue(result.firstname);

            _this5.form.controls['sid'].setValue(result.sid);

            _this5.form.controls['lastname'].setValue(result.lastname);

            _this5.exp = result.exp;
            _this5.level = _this5.level_service.calculateLevel(_this5.exp);
          });
        }
      }]);

      return InformationComponent;
    }();

    InformationComponent.ɵfac = function InformationComponent_Factory(t) {
      return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InformationComponent,
      selectors: [["app-information"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]])],
      decls: 101,
      vars: 6,
      consts: [[1, "col-md-12"], ["class", "breadcrumb", 4, "ngIf"], ["src", "../../../../assets/image/Crown4.png"], [1, "row", "py-4"], [1, "col-lg-2"], [1, "jumbotron", "text-center", 2, "padding", "8px 16px", "margin", "0 0 8px 0"], [1, "mt-1", "pl-2", "pr-2", 2, "border", "1px solid lightgray", "border-radius", "5px"], [2, "list-style", "none", "padding-left", "0"], [1, "py-2"], [3, "click"], [1, "col-lg-7", 2, "padding-right", "8px"], [1, "row"], [1, "col-md-3"], ["class", "avatar-image", "src", "../../../../assets/image/no-image.png", 4, "ngIf"], ["class", "avatar-image", "src", "UserLogin.image", 4, "ngIf"], [1, "col-md-9"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "text", "formControlName", "firstname", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", 1, "form-control"], ["type", "text", "formControlName", "lastname", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", 1, "form-control", "mt-2"], ["type", "text", "formControlName", "phone", "placeholder", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23", 1, "form-control"], ["type", "text", "formControlName", "email", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"], [1, "col-md-3", "mt-4", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "mt-4", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C", 1, "form-control", 3, "value", "valueChange"], [1, "col-md-3", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E40\u0E25\u0E40\u0E27\u0E25", 1, "form-control", 3, "value", "valueChange"], [1, "btn", "btn-danger", 3, "click"], [1, "col-lg-3", "jumbotron", "text-center", "py-4", 2, "border", "1px solid white", "background-color", "rgb(209, 209, 209)", "border-radius", "15px"], [1, "show-badge"], ["href", "", "tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19 Device \u0E40\u0E01\u0E34\u0E19 80 %"], ["src", "../../../../assets/image/badge/badge-device.png"], ["href", "", "tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E01\u0E32\u0E23 Monitor \u0E40\u0E01\u0E34\u0E19 80 %"], ["src", "../../../../assets/image/badge/badge-monitor.png"], ["href", "", "tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E40\u0E01\u0E34\u0E19 80 %"], ["src", "../../../../assets/image/badge/badge-overview.png"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["src", "../../../../assets/image/no-image.png", 1, "avatar-image"], ["src", "UserLogin.image", 1, "avatar-image"]],
      template: function InformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InformationComponent_nav_2_Template, 5, 2, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_14_listener() {
            return ctx.onOpenScore("Pre-test");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pre-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_17_listener() {
            return ctx.onOpenScore("PrPS Test");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "PrPS Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_20_listener() {
            return ctx.onOpenScore("Stage");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Stage");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_23_listener() {
            return ctx.onOpenScore("Quiz");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_26_listener() {
            return ctx.onOpenScore("Quest");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Quest");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_29_listener() {
            return ctx.onOpenScore("Badges");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Badges");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_32_listener() {
            return ctx.onOpenScore("Attendance");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Attendance");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_35_listener() {
            return ctx.onOpenScore("Resource");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Resource");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_38_listener() {
            return ctx.onOpenScore("Workshop");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Workshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_41_listener() {
            return ctx.onOpenScore("Guild");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Guild");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_44_listener() {
            return ctx.onOpenScore("PoPS Test");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "PoPS Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_47_listener() {
            return ctx.onOpenScore("Post-test");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Post-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, InformationComponent_img_52_Template, 1, 0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, InformationComponent_img_53_Template, 1, 0, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function InformationComponent_Template_form_submit_55_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " \u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "(Experience) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function InformationComponent_Template_input_valueChange_81_listener($event) {
            return ctx.exp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " \u0E23\u0E30\u0E14\u0E31\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "(Level) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function InformationComponent_Template_input_valueChange_88_listener($event) {
            return ctx.level = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_button_click_89_listener() {
            return ctx.onTestCal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E04\u0E33\u0E19\u0E27\u0E13 Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E15\u0E23\u0E32\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mem_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.image == undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.exp);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.level);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-information',
          templateUrl: './information.component.html',
          styleUrls: ['./information.component.css'],
          providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]]
        }]
      }], function () {
        return [{
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }, {
          type: _services_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/leaderboard/leaderboard.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/authentication/components/leaderboard/leaderboard.component.ts ***!
    \********************************************************************************/

  /*! exports provided: LeaderboardComponent */

  /***/
  function srcAppAuthenticationComponentsLeaderboardLeaderboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function () {
      return LeaderboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_level_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/level.service */
    "./src/app/authentication/services/level.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/share/services/member.service */
    "./src/app/share/services/member.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LeaderboardComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r2 + 1, ".", data_r1.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.crown_image[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calLevel(data_r1.exp));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.exp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.badge.length);
      }
    }

    var LeaderboardComponent = /*#__PURE__*/function () {
      function LeaderboardComponent(authen, account, member, level) {
        _classCallCheck(this, LeaderboardComponent);

        this.authen = authen;
        this.account = account;
        this.member = member;
        this.level = level;
        this.crown_image = ["../../../../assets/image/Crown4.png", "../../../../assets/image/Crown3.png", "../../../../assets/image/Crown2.png", "../../../../assets/image/Crown5.png", "../../../../assets/image/Crown5.png"];

        if (!this.UserLogin) {
          this.loadUserLogin();
        }

        this.loadTopPlayer();
      }

      _createClass(LeaderboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadUserLogin",
        value: function loadUserLogin() {
          var _this6 = this;

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
            _this6.UserLogin = result;
          });
        }
      }, {
        key: "loadTopPlayer",
        value: function loadTopPlayer() {
          var _this7 = this;

          this.member.getTopPlayer().then(function (result) {
            _this7.Leaderboard = result.items;
          });
        }
      }, {
        key: "calLevel",
        value: function calLevel(exp) {
          return this.level.calculateLevel(exp);
        }
      }]);

      return LeaderboardComponent;
    }();

    LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) {
      return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]));
    };

    LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeaderboardComponent,
      selectors: [["app-leaderboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]])],
      decls: 19,
      vars: 1,
      consts: [["src", "../../../../assets/image/Crown4.png"], [1, "lead"], [1, "leaderboard"], [2, "font-family", "'Press Start 2P', cursive", "color", "white", "text-shadow", "black"], ["cellpadding", "0", "cellspacing", "0", 2, "width", "100%"], [2, "font-size", "small", "font-weight", "bold"], ["class", "data", "style", "font-size:smaller;", 4, "ngFor", "ngForOf"], [1, "data", 2, "font-size", "smaller"], [2, "text-align", "left"], [3, "src"]],
      template: function LeaderboardComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Leaderboard);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-leaderboard',
          templateUrl: './leaderboard.component.html',
          styleUrls: ['./leaderboard.component.css'],
          providers: [_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]]
        }]
      }], function () {
        return [{
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
        }, {
          type: _services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/manage-resource/manage-resource.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/authentication/components/manage-resource/manage-resource.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ManageResourceComponent */

  /***/
  function srcAppAuthenticationComponentsManageResourceManageResourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageResourceComponent", function () {
      return ManageResourceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");

    var ManageResourceComponent = /*#__PURE__*/function () {
      function ManageResourceComponent() {
        _classCallCheck(this, ManageResourceComponent);

        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
      }

      _createClass(ManageResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPreview",
        value: function onPreview() {
          console.log(this.data);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {}
      }, {
        key: "onChange",
        value: function onChange(_ref) {
          var _this8 = this;

          var editor = _ref.editor;
          var data = editor.getData();
          setTimeout(function () {
            _this8.data = data;
          }, 1000); // console.log( data );
        }
      }]);

      return ManageResourceComponent;
    }();

    ManageResourceComponent.ɵfac = function ManageResourceComponent_Factory(t) {
      return new (t || ManageResourceComponent)();
    };

    ManageResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageResourceComponent,
      selectors: [["app-manage-resource"]],
      decls: 80,
      vars: 3,
      consts: [[1, "row", "py-4"], [1, "col-md-12"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap"], [1, "col-md-9", "py-3"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 01", 1, "form-control"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#profile", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "contact-tab", "data-toggle", "tab", "href", "#contact", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active", "py-3"], [1, "mt-2"], ["for", "ccnumber"], ["id", "ccnumber", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF", 1, "form-control"], ["id", "ccnumber", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) ./assets/pdf/document.pdf", 1, "form-control"], [1, "form-group", "col-md-12"], ["for", "ccmonth"], ["data", "<p>:: \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 ::</p><ul><li>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C</li></ul>", 3, "editor", "change"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", "py-3"], ["for", "url"], ["id", "url", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) https://www.youtube.com/watch?v=C7DO2o7HZa8", 1, "form-control"], ["id", "contact", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], [1, "col-md-3", "py-3"], [1, "btn", "btn-primary", "col-md-12", 3, "click"], [1, "btn", "btn-success", "col-md-12", "my-2", 3, "click"]],
      template: function ManageResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 & \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "VDO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ckeditor", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManageResourceComponent_Template_ckeditor_change_48_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0E04\u0E25\u0E34\u0E1B\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ckeditor", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManageResourceComponent_Template_ckeditor_change_63_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E40\u0E27\u0E47\u0E1A (Hypertext)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ckeditor", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManageResourceComponent_Template_ckeditor_change_70_listener($event) {
            return ctx.onChange($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageResourceComponent_Template_button_click_76_listener() {
            return ctx.onPreview();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageResourceComponent_Template_button_click_78_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWFuYWdlLXJlc291cmNlL21hbmFnZS1yZXNvdXJjZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manage-resource',
          templateUrl: './manage-resource.component.html',
          styleUrls: ['./manage-resource.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/member/member.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/authentication/components/member/member.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MemberComponent */

  /***/
  function srcAppAuthenticationComponentsMemberMemberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberComponent", function () {
      return MemberComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var _services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/level.service */
    "./src/app/authentication/services/level.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2/src/sweetalert2.scss */
    "./node_modules/sweetalert2/src/sweetalert2.scss");
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../services/pipes/date-ago.pipe */
    "./src/app/services/pipes/date-ago.pipe.ts");

    function MemberComponent_tr_27_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.calNextLevel(data_r2.exp), "1.2-2"), " %");
      }
    }

    function MemberComponent_tr_27_strong_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dateAgo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, data_r2.activity));
      }
    }

    function MemberComponent_tr_27_strong_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MemberComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " lvl: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "progressbar", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MemberComponent_tr_27_span_25_Template, 3, 4, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MemberComponent_tr_27_strong_29_Template, 3, 3, "strong", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MemberComponent_tr_27_strong_30_Template, 2, 0, "strong", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var data_r2 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.openMember(data_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var data_r2 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.openMember(data_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var data_r2 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onDeleteClick(data_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r2.firstname, " ", data_r2.lastname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", data_r2.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calLevel(data_r2.exp));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, ctx_r0.calNextLevel(data_r2.exp), "1.2-2"), "/100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calNextLevel(data_r2.exp));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.calNextLevel(data_r2.exp) > 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.activity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r2.activity);
      }
    }

    function MemberComponent_pagination_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function MemberComponent_pagination_29_Template_pagination_pageChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.pageChanged($event);
        })("ngModelChange", function MemberComponent_pagination_29_Template_pagination_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.cp = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsPerPage", ctx_r1.option.lp)("ngModel", ctx_r1.cp)("totalItems", ctx_r1.total_items);
      }
    }

    var MemberComponent = /*#__PURE__*/function () {
      function MemberComponent(http, authen, account, alert, member, level, router) {
        _classCallCheck(this, MemberComponent);

        this.http = http;
        this.authen = authen;
        this.account = account;
        this.alert = alert;
        this.member = member;
        this.level = level;
        this.router = router;
        this.option = {
          sp: 0,
          lp: 5,
          keySearch: null,
          valueData: null
        };
        this.UserLogin = this.account.UserLogin;
        this.onLoadMember();
      }

      _createClass(MemberComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoadMember",
        value: function onLoadMember() {
          var _this9 = this;

          this.member.loadMember(this.option).then(function (result) {
            _this9.total_items = result.total_items;
            _this9.items = result.items;
            _this9.size_pagination = Math.round(Number(_this9.total_items) / Number(_this9.option.lp));
            _this9.cp = Number(_this9.option.sp) + 1;
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.option.sp = event.page - 1;
          this.onLoadMember();
        }
      }, {
        key: "calLevel",
        value: function calLevel(exp) {
          return this.level.calculateLevel(exp);
        }
      }, {
        key: "calNextLevel",
        value: function calNextLevel(exp) {
          return this.level.calExpLeftToNextLevel(exp);
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var _this10 = this;

          if (!this.searchText) {
            this.onLoadMember();
          }

          this.option.sp = 0;
          this.option.valueData = this.searchText;
          this.member.loadMember(this.option).then(function (result) {
            _this10.total_items = result.total_items;
            _this10.items = result.items;
            _this10.size_pagination = Math.round(Number(_this10.total_items) / Number(_this10.option.lp));
            _this10.cp = Number(_this10.option.sp) + 1;
          });
        } // click eye

      }, {
        key: "openMember",
        value: function openMember(item) {
          this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_5__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_6__["AuthURL"].Information], {
            queryParams: {
              item: item
            }
          });
        }
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(_id) {
          var _this11 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'แจ้งเตือน',
            text: 'คุณต้องการจะลบข้อมูลใช่หรือไม่',
            icon: 'danger',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่, ลบเดี๋ยวนี้'
          }).then(function (result) {
            if (result.value) {
              _this11.member.deleteMember(_id).then(function () {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'ข้อมูลดังกล่าวถูกลบเรียบร้อยแล้ว', 'success');
                _this11.option.valueData = null;
                _this11.option.sp = 0;

                _this11.onLoadMember();
              })["catch"](function (err) {
                _this11.alert.notify(err);
              });
            }
          });
        }
      }]);

      return MemberComponent;
    }();

    MemberComponent.ɵfac = function MemberComponent_Factory(t) {
      return new (t || MemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
    };

    MemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberComponent,
      selectors: [["app-member"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]])],
      decls: 30,
      vars: 4,
      consts: [[1, "row", "py-4"], [2, "display", "block", "width", "100%"], ["aria-hidden", "true", 1, "fa", "fa-id-card-o"], [1, "col-md-12", "my-3"], [1, "input-group"], ["id", "input2-group2", "name", "input2-group2", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C, \u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07, \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", "table-responsive-sm", "table-hover", "table-outline", "mb-0"], [1, "thead-light"], [1, "text-center"], [1, "icon-people"], [4, "ngFor", "ngForOf"], ["directionLinks", "true", "previousText", "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", "nextText", "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B", 3, "itemsPerPage", "ngModel", "totalItems", "pageChanged", "ngModelChange", 4, "ngIf"], [1, "avatar"], ["src", "../../../../assets/image/no-image.png", 2, "max-width", "36px", "height", "36px", "border-radius", "50em"], [1, "avatar-status", "badge-danger"], [1, "small", "text-muted"], [1, "clearfix"], [1, "float-left"], [1, "float-right"], [1, "text-muted"], ["max", "100", "type", "warning", "striped", "true", "animate", "true", 3, "value"], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["btnRadioGroup", "", 1, "btn-group"], ["btnRadio", "A", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-eye"], ["btnRadio", "B", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-pencil-square-o"], ["btnRadio", "C", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-trash"], [1, "text-danger"], ["directionLinks", "true", "previousText", "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", "nextText", "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B", 3, "itemsPerPage", "ngModel", "totalItems", "pageChanged", "ngModelChange"]],
      template: function MemberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberComponent_Template_button_click_12_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E04\u0E49\u0E19\u0E2B\u0E32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MemberComponent_tr_27_Template, 39, 12, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MemberComponent_pagination_29_Template, 1, 3, "pagination", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E34\u0E49\u0E19 ", ctx.total_items, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total_items);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_12__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["DateAgoPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member',
          templateUrl: './member.component.html',
          styleUrls: ['./member.component.css'],
          providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]]
        }]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]
        }, {
          type: _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/resource/content/content.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/authentication/components/resource/content/content.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppAuthenticationComponentsResourceContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authentication/services/resource.service */
    "./src/app/authentication/services/resource.service.ts");
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/authentication/authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/authentication/services/quiz.service */
    "./src/app/authentication/services/quiz.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ContentComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.name);
      }
    }

    function ContentComponent_h1_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.item.name);
      }
    }

    function ContentComponent_ul_30_li_1_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.text);
      }
    }

    function ContentComponent_ul_30_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentComponent_ul_30_li_1_ul_2_Template, 3, 1, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r7.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r7.text);
      }
    }

    function ContentComponent_ul_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentComponent_ul_30_li_1_Template, 3, 2, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.item.title);
      }
    }

    function ContentComponent_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.startQuiz(ctx_r10.item._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContentComponent_button_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContentComponent_div_33_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r12.quiz_item.items[0]._id)("value", data_r13.point);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r13.answer);
      }
    }

    function ContentComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContentComponent_div_33_div_6_Template, 5, 3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_div_33_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 1 \u0E08\u0E32\u0E01 ", ctx_r5.quiz_item.total_items, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.quiz_item.items[0].question);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.quiz_item.items[0].choice);
      }
    }

    var _c0 = function _c0() {
      return ["/auth/resource"];
    };

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(activateRouter, resource, router, alert, quiz) {
        var _this12 = this;

        _classCallCheck(this, ContentComponent);

        this.activateRouter = activateRouter;
        this.resource = resource;
        this.router = router;
        this.alert = alert;
        this.quiz = quiz;
        this.isCollapsed = false;
        this.activateRouter.queryParams.forEach(function (params) {
          _this12.chapter_id = params.item;
        });
        this.resource.onShowOneChapter(this.chapter_id).then(function (result) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return result.item[0];

                  case 2:
                    this.item = _context.sent;

                    if (!this.item) {
                      this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Resource]);
                      this.alert.something_wrong("เกิดข้อผิดพลาก");
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startQuiz",
        value: function startQuiz(id) {
          var _this13 = this;

          if (this.isCollapsed == false) {
            this.isCollapsed = true;
          }

          this.quiz.getAllQuiz(id).then(function (result) {
            _this13.quiz_item = result;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]])],
      decls: 34,
      vars: 11,
      consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 1, "col-md-5", "my-3", 3, "collapse", "isAnimated"], [1, "well", "well-lg", "card", "card-block", "card-header"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "mt-2", "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium", 2, "text-indent", "20px", "text-align", "justify"], [1, "col-md-7", "my-3"], [4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-seccondary", "disabled", "", 4, "ngIf"], ["class", "col-md-5", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], ["disabled", "", 1, "btn", "btn-seccondary"], [1, "col-md-5"], [1, "badge", "badge-dark", 2, "font-size", "smaller"], [1, "my-3", 2, "font-weight", "bold"], ["class", "input-group my-1", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "input-group", "my-1"], [1, "input-group-prepend", "pointer"], [1, "input-group-text"], ["type", "radio", "aria-label", "Radio button for following text input", 3, "name", "value"], ["type", "text", "readonly", "", "aria-label", "Text input with radio button", 1, "form-control", "pointer", 3, "value"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContentComponent_li_6_Template, 2, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_7_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ol", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0E23\u0E39\u0E49\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49\u0E44\u0E14\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0E21\u0E35\u0E01\u0E34\u0E08\u0E19\u0E34\u0E2A\u0E31\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " \u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E15\u0E48\u0E2D\u0E1E\u0E48\u0E27\u0E07 \u0E2A\u0E37\u0E48\u0E2D\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ContentComponent_h1_29_Template, 2, 1, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ContentComponent_ul_30_Template, 2, 1, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ContentComponent_button_31_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ContentComponent_button_32_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ContentComponent_div_33_Template, 9, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.isCollapsed)("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.quiz) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.quiz) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCollapsed == true && ctx.quiz_item);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_8__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css'],
          providers: [src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/resource/resource.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/authentication/components/resource/resource.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ResourceComponent */

  /***/
  function srcAppAuthenticationComponentsResourceResourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceComponent", function () {
      return ResourceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/resource.service */
    "./src/app/authentication/services/resource.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResourceComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceComponent_div_22_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var data_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.openContent(data_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
      }
    }

    var ResourceComponent = /*#__PURE__*/function () {
      function ResourceComponent(router, resource) {
        var _this14 = this;

        _classCallCheck(this, ResourceComponent);

        this.router = router;
        this.resource = resource; // โหลดหน่วยที่

        this.resource.onShowAllChapter().then(function (result) {
          _this14.items = result.items;
        });
      }

      _createClass(ResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openContent",
        value: function openContent(item) {
          this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Content], {
            queryParams: {
              item: item
            }
          });
        }
      }]);

      return ResourceComponent;
    }();

    ResourceComponent.ɵfac = function ResourceComponent_Factory(t) {
      return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]));
    };

    ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceComponent,
      selectors: [["app-resource"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])],
      decls: 23,
      vars: 1,
      consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-5"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "col-md-7"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "action-button", "shadow", "animate", "button-blue", 2, "text-decoration", "none", "width", "100%", 3, "click"]],
      template: function ResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0E23\u0E39\u0E49\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49\u0E44\u0E14\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0E21\u0E35\u0E01\u0E34\u0E08\u0E19\u0E34\u0E2A\u0E31\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ResourceComponent_div_22_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource',
          templateUrl: './resource.component.html',
          styleUrls: ['./resource.component.css'],
          providers: [_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/services/level.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authentication/services/level.service.ts ***!
    \**********************************************************/

  /*! exports provided: LevelService */

  /***/
  function srcAppAuthenticationServicesLevelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevelService", function () {
      return LevelService;
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


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");

    var LevelService = /*#__PURE__*/function () {
      function LevelService(http, account) {
        _classCallCheck(this, LevelService);

        this.http = http;
        this.account = account;
      }

      _createClass(LevelService, [{
        key: "calculateLevel",
        value: function calculateLevel(exp) {
          var level;

          if (exp || exp == 0) {
            if (exp < 30) {
              level = 1;
            } else if (exp < 50) {
              level = 2;
            } else if (exp < 100) {
              level = 3;
            } else if (exp < 130) {
              level = 4;
            } else if (exp < 150) {
              level = 5;
            } else if (exp < 200) {
              level = 6;
            } else if (exp < 230) {
              level = 7;
            } else if (exp < 250) {
              level = 8;
            } else if (exp < 300) {
              level = 9;
            } else if (exp < 330) {
              level = 10;
            } else if (exp < 350) {
              level = 11;
            } else if (exp < 400) {
              level = 12;
            } else if (exp < 430) {
              level = 13;
            } else if (exp < 450) {
              level = 14;
            } else if (exp < 500) {
              level = 15;
            } else if (exp < 530) {
              level = 16;
            } else if (exp < 550) {
              level = 17;
            } else if (exp < 600) {
              level = 18;
            } else if (exp < 630) {
              level = 19;
            } else if (exp < 650) {
              level = 20;
            } else if (exp < 700) {
              level = 21;
            } else if (exp < 730) {
              level = 22;
            } else if (exp < 750) {
              level = 23;
            } else if (exp < 800) {
              level = 24;
            } else if (exp < 830) {
              level = 25;
            } else if (exp < 850) {
              level = 26;
            } else if (exp < 900) {
              level = 27;
            } else if (exp < 930) {
              level = 28;
            } else if (exp < 950) {
              level = 29;
            } else if (exp < 1000) {
              level = 30;
            } else if (exp >= 1000) {
              level = 31;
            }
          }

          return level;
        }
      }, {
        key: "calExpLeftToNextLevel",
        value: function calExpLeftToNextLevel(exp) {
          var level;

          if (exp || exp == 0) {
            if (exp < 30) {
              level = exp * 100 / 30;
            } else if (exp < 50) {
              level = exp * 100 / 50;
            } else if (exp < 100) {
              level = exp * 100 / 100;
            } else if (exp < 130) {
              level = exp * 100 / 130;
            } else if (exp < 150) {
              level = exp * 100 / 150;
            } else if (exp < 200) {
              level = exp * 100 / 200;
            } else if (exp < 230) {
              level = exp * 100 / 230;
            } else if (exp < 250) {
              level = exp * 100 / 250;
            } else if (exp < 300) {
              level = exp * 100 / 300;
            } else if (exp < 330) {
              level = exp * 100 / 330;
            } else if (exp < 350) {
              level = exp * 100 / 350;
            } else if (exp < 400) {
              level = exp * 100 / 400;
            } else if (exp < 430) {
              level = exp * 100 / 430;
            } else if (exp < 450) {
              level = exp * 100 / 450;
            } else if (exp < 500) {
              level = exp * 100 / 500;
            } else if (exp < 530) {
              level = exp * 100 / 530;
            } else if (exp < 550) {
              level = exp * 100 / 550;
            } else if (exp < 600) {
              level = exp * 100 / 600;
            } else if (exp < 630) {
              level = exp * 100 / 630;
            } else if (exp < 650) {
              level = exp * 100 / 650;
            } else if (exp < 700) {
              level = exp * 100 / 700;
            } else if (exp < 730) {
              level = exp * 100 / 730;
            } else if (exp < 750) {
              level = exp * 100 / 750;
            } else if (exp < 800) {
              level = exp * 100 / 800;
            } else if (exp < 830) {
              level = exp * 100 / 830;
            } else if (exp < 850) {
              level = exp * 100 / 850;
            } else if (exp < 900) {
              level = exp * 100 / 900;
            } else if (exp < 930) {
              level = exp * 100 / 930;
            } else if (exp < 950) {
              level = exp * 100 / 950;
            } else if (exp < 1000) {
              level = exp * 100 / 1000;
            } else if (exp >= 1000) {
              level = exp * 100 / 1000;
            }
          }

          return level;
        }
      }]);

      return LevelService;
    }();

    LevelService.ɵfac = function LevelService_Factory(t) {
      return new (t || LevelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    LevelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LevelService,
      factory: LevelService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/services/member.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/authentication/services/member.service.ts ***!
    \***********************************************************/

  /*! exports provided: MemberService */

  /***/
  function srcAppAuthenticationServicesMemberServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberService", function () {
      return MemberService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");

    var MemberService = /*#__PURE__*/function () {
      function MemberService(http, authen) {
        _classCallCheck(this, MemberService);

        this.http = http;
        this.authen = authen;
      } // service แก้ไขสมาชิก


      _createClass(MemberService, [{
        key: "updateMember",
        value: function updateMember(uid, model) {
          return this.http.requestPatch("user/".concat(uid), this.authen.getAuthenticated(), model).toPromise();
        }
      }, {
        key: "loadMember",
        value: function loadMember(option) {
          if (option.valueData) {
            return this.http.requestGet("user/search?sp=".concat(option.sp, "&lp=").concat(option.lp, "&search=").concat(option.valueData), this.authen.getAuthenticated()).toPromise();
          }

          return this.http.requestGet("user?sp=".concat(option.sp, "&lp=").concat(option.lp), this.authen.getAuthenticated()).toPromise();
        }
      }, {
        key: "deleteMember",
        value: function deleteMember(_id) {
          return this.http.requestDelete("user/".concat(_id), this.authen.getAuthenticated()).toPromise();
        }
      }]);

      return MemberService;
    }();

    MemberService.ɵfac = function MemberService_Factory(t) {
      return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]));
    };

    MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberService,
      factory: MemberService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/services/quiz.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/services/quiz.service.ts ***!
    \*********************************************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppAuthenticationServicesQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");

    var QuizService = /*#__PURE__*/function () {
      function QuizService(http, authen) {
        _classCallCheck(this, QuizService);

        this.http = http;
        this.authen = authen;
      }

      _createClass(QuizService, [{
        key: "getAllQuiz",
        value: function getAllQuiz(ref) {
          return this.http.requestGet("quiz/".concat(ref), this.authen.getAuthenticated()).toPromise();
        }
      }]);

      return QuizService;
    }();

    QuizService.ɵfac = function QuizService_Factory(t) {
      return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]));
    };

    QuizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QuizService,
      factory: QuizService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/services/resource.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentication/services/resource.service.ts ***!
    \*************************************************************/

  /*! exports provided: ResourceService */

  /***/
  function srcAppAuthenticationServicesResourceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceService", function () {
      return ResourceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");

    var ResourceService = /*#__PURE__*/function () {
      function ResourceService(http, authen) {
        _classCallCheck(this, ResourceService);

        this.http = http;
        this.authen = authen;
      }

      _createClass(ResourceService, [{
        key: "onShowAllChapter",
        value: function onShowAllChapter() {
          return this.http.requestGet('chapter', this.authen.getAuthenticated()).toPromise();
        }
      }, {
        key: "onShowOneChapter",
        value: function onShowOneChapter(_id) {
          return this.http.requestGet("chapter/".concat(_id), this.authen.getAuthenticated()).toPromise();
        }
      }]);

      return ResourceService;
    }();

    ResourceService.ɵfac = function ResourceService_Factory(t) {
      return new (t || ResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]));
    };

    ResourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResourceService,
      factory: ResourceService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/haha/haha.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/haha/haha.component.ts ***!
    \***************************************************/

  /*! exports provided: HahaComponent */

  /***/
  function srcAppComponentsHahaHahaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HahaComponent", function () {
      return HahaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");

    var HahaComponent = /*#__PURE__*/function () {
      function HahaComponent() {
        _classCallCheck(this, HahaComponent);
      }

      _createClass(HahaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HahaComponent;
    }();

    HahaComponent.ɵfac = function HahaComponent_Factory(t) {
      return new (t || HahaComponent)();
    };

    HahaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HahaComponent,
      selectors: [["app-haha"]],
      decls: 3,
      vars: 0,
      template: function HahaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "haha works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__["AuthContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFoYS9oYWhhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HahaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-haha',
          templateUrl: './haha.component.html',
          styleUrls: ['./haha.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/homepage/homepage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/homepage/homepage.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppComponentsHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
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


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

    var _c0 = function _c0() {
      return ["/homepage"];
    };

    var _c1 = function _c1() {
      return ["/signup"];
    };

    var _c2 = function _c2() {
      return ["/signin"];
    };

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 59,
      vars: 6,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app-content", "container"], [1, "row"], [1, "col-md-12"], [1, "tile"], [1, "text-center", "py-5", "bg-dark", "text-white"], [1, "lead"], [1, "text-center", "py-2"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signin/signin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signin/signin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppComponentsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/authentication/authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var _c0 = function _c0() {
      return ["/homepage"];
    };

    var _c1 = function _c1() {
      return ["/signup"];
    };

    var _c2 = function _c2() {
      return ["/signin"];
    };

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(builder, alert, router, authen, account, activateRoute, _snackBar) {
        var _this15 = this;

        _classCallCheck(this, SigninComponent);

        this.builder = builder;
        this.alert = alert;
        this.router = router;
        this.authen = authen;
        this.account = account;
        this.activateRoute = activateRoute;
        this._snackBar = _snackBar;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"]; //ย้อนกลับไปหน้า LOGIN กรณี Redirect

        this.activateRoute.params.forEach(function (params) {
          _this15.returnURL = params.returnURL || "/".concat(src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, "/").concat(src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home);
        });
        this.redirectPage();
        this.alert.announce("อัพเดท &nbsp; <span style='color:orange'> 7 พค 2020, 23:52:51 PM</span>", "1) ดึงข้อมูลแบบฝึกหัด (แหล่งการเรียนรู้) <br>2) เพิ่มแหล่งการเรียนรู้ <br>3) เพิ่ม Admin เพิ่มแหล่งการเรียนรู้ (ยังไม่เปิด)");
        this.createFormData();
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createFormData",
        value: function createFormData() {
          this.form = this.builder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "redirectPage",
        value: function redirectPage() {
          var data = this.authen.getAuthenticated();

          if (data) {
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          if (this.form.invalid) {
            return this.alert.notify("กรุณากรอกข้อมูลให้ถูกต้อง");
          }

          this.account.onLogin(this.form.value).then(function (res) {
            // เก็บ AccessToken
            _this16.authen.setAuthenticated(res.accessToken);

            _this16.alert.success("ยินดีต้อนรับเข้าสู่ระบบ");

            _this16.router.navigateByUrl(_this16.returnURL);
          })["catch"](function (err) {
            _this16.alert.notify(err.message);
          });
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])],
      decls: 48,
      vars: 9,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app", "sidebar-mini", "rtl"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "username", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"], [3, "routerLink"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_33_listener() {
            return ctx.onSubmit();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.css'],
          providers: []
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/share/services/validator.service */
    "./src/app/share/services/validator.service.ts");

    var _c0 = function _c0() {
      return ["/homepage"];
    };

    var _c1 = function _c1() {
      return ["/signup"];
    };

    var _c2 = function _c2() {
      return ["/signin"];
    };

    var SignupComponent = /*#__PURE__*/function () {
      // c_password:string;
      function SignupComponent(builder, alert, account, router, validator) {
        _classCallCheck(this, SignupComponent);

        this.builder = builder;
        this.alert = alert;
        this.account = account;
        this.router = router;
        this.validator = validator;
        this.createFormData();
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createFormData",
        value: function createFormData() {
          this.form = this.builder.group({
            sid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validator.isPassword]],
            // c_password: ['',[Validators.required, this.validator.comparePassword('password')]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            picture: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ครบถ้วน!');
          } // return console.log(this.form.value);


          this.account.onRegister(this.form.value).then(function () {
            _this17.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');

            setTimeout(function () {
              //<<<---    using ()=> syntax
              _this17.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Login]);
            }, 3000);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 68,
      vars: 7,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "firstname", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "lastname", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "username", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", "type", "password", 1, "form-control"], ["formControlName", "phone", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "email", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "picture", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_32_listener() {
            return ctx.onSubmit();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    SignupComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignupComponent,
      factory: SignupComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authen.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/authen.service.ts ***!
    \********************************************/

  /*! exports provided: AuthenService */

  /***/
  function srcAppServicesAuthenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenService", function () {
      return AuthenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthenService = /*#__PURE__*/function () {
      function AuthenService() {
        _classCallCheck(this, AuthenService);

        this.accessKey = 'accessToken';
      }

      _createClass(AuthenService, [{
        key: "setAuthenticated",
        value: function setAuthenticated(accessToken) {
          localStorage.setItem(this.accessKey, accessToken);
        }
      }, {
        key: "getAuthenticated",
        value: function getAuthenticated() {
          return localStorage.getItem(this.accessKey);
        }
      }, {
        key: "clearAuthenticated",
        value: function clearAuthenticated() {
          localStorage.removeItem(this.accessKey);
        }
      }]);

      return AuthenService;
    }();

    AuthenService.ɵfac = function AuthenService_Factory(t) {
      return new (t || AuthenService)();
    };

    AuthenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenService,
      factory: AuthenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenService, [{
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
  "./src/app/services/http.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/http.service.ts ***!
    \******************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.address = "https://backend-pblgps.herokuapp.com/";
      } //Request GET method


      _createClass(HttpService, [{
        key: "requestGet",
        value: function requestGet(url, accessToken) {
          var _this18 = this;

          return this.http.get("".concat(this.address).concat(url), {
            headers: this.appendHeaders(accessToken)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this18.handelError(err);
          }));
        } // ส่งข้อมูลแบบ Post method

      }, {
        key: "requestPost",
        value: function requestPost(url, body, file) {
          var _this19 = this;

          return this.http.post("".concat(this.address).concat(url), body, file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this19.handelError(err);
          }));
        } //Request Patch method

      }, {
        key: "requestPatch",
        value: function requestPatch(url, accessToken, model) {
          var _this20 = this;

          return this.http.patch("".concat(this.address).concat(url), model, {
            headers: this.appendHeaders(accessToken)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this20.handelError(err);
          }));
        } //Request Delete method

      }, {
        key: "requestDelete",
        value: function requestDelete(url, accessToken) {
          var _this21 = this;

          return this.http["delete"]("".concat(this.address).concat(url), {
            headers: this.appendHeaders(accessToken)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this21.handelError(err);
          }));
        } // ปรับแต่ง Error ใหม่

      }, {
        key: "handelError",
        value: function handelError(errResponse) {
          errResponse['Message'] = errResponse.message;
          if (errResponse.error && errResponse.error.message) errResponse['Message'] = errResponse.error.message;
          throw errResponse;
        } // เพิ่ม header

      }, {
        key: "appendHeaders",
        value: function appendHeaders(accessToken) {
          var headers = {};
          if (accessToken) headers['Authorization'] = "Bearer ".concat(accessToken);
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pipes/date-ago.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/pipes/date-ago.pipe.ts ***!
    \*************************************************/

  /*! exports provided: DateAgoPipe */

  /***/
  function srcAppServicesPipesDateAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
      return DateAgoPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateAgoPipe = /*#__PURE__*/function () {
      function DateAgoPipe() {
        _classCallCheck(this, DateAgoPipe);
      }

      _createClass(DateAgoPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (value) {
            var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
              return 'Just now';
            var intervals = {
              'year': 31536000,
              'month': 2592000,
              'week': 604800,
              'day': 86400,
              'hour': 3600,
              'minute': 60,
              'second': 1
            };
            var counter;

            for (var i in intervals) {
              counter = Math.floor(seconds / intervals[i]);
              if (counter > 0) if (counter === 1) {
                return counter + ' ' + i + ' ago'; // singular (1 day ago)
              } else {
                return counter + ' ' + i + 's ago'; // plural (2 days ago)
              }
            }
          }

          return value;
        }
      }]);

      return DateAgoPipe;
    }();

    DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) {
      return new (t || DateAgoPipe)();
    };

    DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "dateAgo",
      type: DateAgoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'dateAgo',
          pure: true
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/components/auth-content/auth-content.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/share/components/auth-content/auth-content.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AuthContentComponent */

  /***/
  function srcAppShareComponentsAuthContentAuthContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthContentComponent", function () {
      return AuthContentComponent;
    });
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/share/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/share/components/footer/footer.component.ts");

    function AuthContentComponent_marquee_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "marquee");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A PBLGPS-LMS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.UserLogin.firstname, " ", ctx_r0.UserLogin.lastname, "");
      }
    }

    var _c0 = ["*"];

    var AuthContentComponent = /*#__PURE__*/function () {
      function AuthContentComponent(account, authen, alert, router) {
        _classCallCheck(this, AuthContentComponent);

        this.account = account;
        this.authen = authen;
        this.alert = alert;
        this.router = router;

        if (!this.UserLogin) {
          this.initialLoadUserLogin();
        }
      }

      _createClass(AuthContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initialLoadUserLogin",
        value: function initialLoadUserLogin() {
          var _this22 = this;

          var data = this.authen.getAuthenticated();

          if (!data) {
            return;
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (userLogin) {
            _this22.UserLogin = userLogin;
          })["catch"](function (err) {
            _this22.alert.notify(err.message);

            _this22.authen.clearAuthenticated();

            _this22.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
          });
        }
      }]);

      return AuthContentComponent;
    }();

    AuthContentComponent.ɵfac = function AuthContentComponent_Factory(t) {
      return new (t || AuthContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AuthContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AuthContentComponent,
      selectors: [["app-auth-content"]],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 1,
      consts: [[1, "container", "px-5", "py-4", "ng-content"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o"], [2, "color", "orangered"]],
      template: function AuthContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AuthContentComponent_marquee_3_Template, 6, 2, "marquee", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvYXV0aC1jb250ZW50L2F1dGgtY29udGVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-auth-content',
          templateUrl: './auth-content.component.html',
          styleUrls: ['./auth-content.component.css']
        }]
      }], function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/components/footer/footer.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/share/components/footer/footer.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppShareComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.Data = new Date();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 11,
      vars: 0,
      consts: [[1, "main-footer", "py-2", 2, "border-top", "1px solid darkgray"], [1, "pull-right", "hidden-xs"], [2, "margin-right", "30px"], ["href", "#"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Copyright \xA9 2020-2029 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ratchapol Kladchuen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/components/nav-bar/nav-bar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/share/components/nav-bar/nav-bar.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppShareComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authentication/authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/auth/home"];
    };

    var _c1 = function _c1() {
      return ["/auth/resource"];
    };

    var _c2 = function _c2() {
      return ["/auth/leaderboard"];
    };

    var _c3 = function _c3() {
      return ["/auth/information"];
    };

    function NavBarComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
      }
    }

    var _c4 = function _c4() {
      return ["/auth/member"];
    };

    var _c5 = function _c5() {
      return ["/auth/manage-resource"];
    };

    function NavBarComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25&\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
      }
    }

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(account, authen, router, alert) {
        _classCallCheck(this, NavBarComponent);

        this.account = account;
        this.authen = authen;
        this.router = router;
        this.alert = alert;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"];
        this.UserLogin = {};
        this.initialLoadUserLogin();
        this.UserLogin = this.account.UserLogin; // if(!this.account.UserLogin){
        //   // this.router.navigateByUrl('https://phd-ajratchpon.herokuapp.com/signin');
        //   this.router.navigate(['/', AppURL.Login]);
        // }
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initialLoadUserLogin",
        value: function initialLoadUserLogin() {
          var _this23 = this;

          var data = this.authen.getAuthenticated();

          if (!data) {
            return;
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (userLogin) {
            _this23.UserLogin = userLogin;
            _this23.login = 1;
          })["catch"](function (err) {
            _this23.alert.notify(err.message);

            _this23.authen.clearAuthenticated();

            _this23.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login]);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authen.clearAuthenticated();
          this.account.onLogout();
          this.login = null;
          this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login]);
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 20,
      vars: 2,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [1, "app-nav"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", "aria-label", "Open Profile Menu", 1, "app-nav__item"], [1, "fa", "fa-sort-desc", "fa-lg"], [1, "dropdown-menu", "settings-menu", "dropdown-menu-right"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out", "fa-lg"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav text-center", 4, "ngIf"], [1, "navbar-nav", "text-center"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home", "fa-lg"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4"], [1, "sr-only"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4", 3, "routerLink"], ["href", "#", 1, "nav-item", "nav-link", "px-4"], [1, "fa", "fa-address-card"], [1, "fa", "fa-graduation-cap"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_9_listener() {
            return ctx.onLogout();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavBarComponent_div_19_Template, 13, 6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "admin");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css']
        }]
      }], function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/services/account.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/share/services/account.service.ts ***!
    \***************************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppShareServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(http, alert, authen) {
        _classCallCheck(this, AccountService);

        this.http = http;
        this.alert = alert;
        this.authen = authen;
        this.UserLogin = {};
      } // Set ข้อมูล User และ Return UserLogin


      _createClass(AccountService, [{
        key: "setUserLogin",
        value: function setUserLogin(UserLogin) {
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
      }, {
        key: "getUserLogin",
        value: function getUserLogin(accessToken) {
          var _this24 = this;

          return this.http.requestGet('user/data', accessToken).toPromise().then(function (result) {
            return _this24.setUserLogin(result);
          });
        }
      }, {
        key: "getUserByID",
        value: function getUserByID(_id, accessToken) {
          return this.http.requestGet("user/userid/".concat(_id), accessToken).toPromise();
        }
      }, {
        key: "getAllUser",
        value: function getAllUser(accessToken) {
          return this.http.requestGet('user/', accessToken).toPromise();
        }
      }, {
        key: "onLogin",
        value: function onLogin(model) {
          return this.http.requestPost('user/login', model).toPromise();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.alert.notify("ขอบคุณที่ใช้งาน");
        }
      }, {
        key: "onRegister",
        value: function onRegister(model) {
          return this.http.requestPost('user/signup', model).toPromise();
        }
      }, {
        key: "onChangePassword",
        value: function onChangePassword(accessToken, model) {
          return this.http.requestPatch('user/change_password', accessToken, model).toPromise();
        }
      }]);

      return AccountService;
    }();

    AccountService.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]));
    };

    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/services/alert.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/share/services/alert.service.ts ***!
    \*************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppShareServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2/src/sweetalert2.scss */
    "./node_modules/sweetalert2/src/sweetalert2.scss");

    var AlertService = /*#__PURE__*/function () {
      function AlertService() {
        _classCallCheck(this, AlertService);
      }

      _createClass(AlertService, [{
        key: "notify",
        value: function notify(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error!';
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'error';
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: 'ยืนยัน'
          });
        }
      }, {
        key: "success",
        value: function success(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Success!';
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: type
          });
        }
      }, {
        key: "something_wrong",
        value: function something_wrong() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';
          this.notify(message);
        }
      }, {
        key: "showScore",
        value: function showScore() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "No data";
          var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var timerInterval;
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            html: "Your score is " + score,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            onClose: function onClose() {
              clearInterval(timerInterval);
            }
          }).then(function (result) {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
        }
      }, {
        key: "showWarning",
        value: function showWarning() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "คำเตือน";
          var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "กรุณาตรวจสอบข้อมูลให้ถูกต้อง";
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: text,
            icon: 'danger',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
        }
      }, {
        key: "announce",
        value: function announce() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "หัวข้อ";
          var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ข้อความ";
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            html: text,
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/281856448671146419/530EBDE21052E60163E2D890F1F78AA154F13F01/',
            imageWidth: 390,
            imageHeight: 240,
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false
          });
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)();
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
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
  "./src/app/share/services/member.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/share/services/member.service.ts ***!
    \**************************************************/

  /*! exports provided: MemberService */

  /***/
  function srcAppShareServicesMemberServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberService", function () {
      return MemberService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");

    var MemberService = /*#__PURE__*/function () {
      function MemberService(http, authen) {
        _classCallCheck(this, MemberService);

        this.http = http;
        this.authen = authen;
      }

      _createClass(MemberService, [{
        key: "signUp",
        value: function signUp(form) {
          var obj = {
            _id: "6102041520131",
            firstname: "6102041520131",
            lastname: "6102041520131",
            username: "6102041520131",
            password: "6102041520131",
            c_password: "6102041520131",
            phone: "6102041520131",
            email: "6102041520131",
            picture: "6102041520131"
          };
          this.member.push(1);
        }
      }, {
        key: "showMember",
        value: function showMember() {
          return this.member;
        }
      }, {
        key: "getTopPlayer",
        value: function getTopPlayer() {
          return this.http.requestGet('user/leaderboard', this.authen.getAuthenticated()).toPromise();
        }
      }]);

      return MemberService;
    }();

    MemberService.ɵfac = function MemberService_Factory(t) {
      return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]));
    };

    MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberService,
      factory: MemberService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/services/validator.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/share/services/validator.service.ts ***!
    \*****************************************************/

  /*! exports provided: ValidatorsService */

  /***/
  function srcAppShareServicesValidatorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidatorsService", function () {
      return ValidatorsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidatorsService = /*#__PURE__*/function () {
      function ValidatorsService() {
        _classCallCheck(this, ValidatorsService);
      }

      _createClass(ValidatorsService, [{
        key: "comparePassword",
        // สร้าง validate เอง โดยเช็ค รหัสผ่านและยืนยันรหัสผ่านให้เหมือนกัน
        value: function comparePassword(passwordField) {
          return function (confirm_password) {
            if (!confirm_password.parent) return;
            var password = confirm_password.parent.get(passwordField);
            var passwordSubscripe = password.valueChanges.subscribe(function () {
              confirm_password.updateValueAndValidity();
              passwordSubscripe.unsubscribe();
            });
            if (confirm_password.value === password.value) return;
            return {
              compare: true
            };
          };
        } // ตรวจสอบ password pattern เป็น A-z 0-9, 6-15 ตัว

      }, {
        key: "isPassword",
        value: function isPassword(password) {
          if (password.value == '') return;
          if (/^[A-z0-9]{6,15}$/.test(password.value)) return;
          return {
            password: true
          };
        }
      }]);

      return ValidatorsService;
    }();

    ValidatorsService.ɵfac = function ValidatorsService_Factory(t) {
      return new (t || ValidatorsService)();
    };

    ValidatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidatorsService,
      factory: ValidatorsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidatorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/share/shareds.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/share/shareds.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedsModule */

  /***/
  function srcAppShareSharedsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedsModule", function () {
      return SharedsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/share/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/share/components/footer/footer.component.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/member.service */
    "./src/app/share/services/member.service.ts");
    /* harmony import */


    var _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_validator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/validator.service */
    "./src/app/share/services/validator.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SharedsModule = function SharedsModule() {
      _classCallCheck(this, SharedsModule);
    };

    SharedsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedsModule
    });
    SharedsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedsModule_Factory(t) {
        return new (t || SharedsModule)();
      },
      providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_9__["ValidatorsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedsModule, {
        declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]],
        exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]],
          exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"]],
          providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_9__["ValidatorsService"]]
        }]
      }], null, null);
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
    /*! D:\ketar\PBLGPS_Hero\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map