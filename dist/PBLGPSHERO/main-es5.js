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
      "./authentication/authentication.module": "./src/app/authentication/authentication.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
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

      this.title = 'PBLGPS-HERO';
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


    var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-pdf-viewer */
    "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./share/shareds.module */
    "./src/app/share/shareds.module.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var cloudinary_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! cloudinary-core */
    "./node_modules/cloudinary-core/cloudinary-core.js");
    /* harmony import */


    var cloudinary_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/haha/haha.component */
    "./src/app/components/haha/haha.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./authentication/components/home/home.component */
    "./src/app/authentication/components/home/home.component.ts");
    /* harmony import */


    var _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./authentication/components/member/member.component */
    "./src/app/authentication/components/member/member.component.ts");
    /* harmony import */


    var _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./authentication/components/resource/resource.component */
    "./src/app/authentication/components/resource/resource.component.ts");
    /* harmony import */


    var _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./authentication/components/resource/content/content.component */
    "./src/app/authentication/components/resource/content/content.component.ts");
    /* harmony import */


    var _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./authentication/components/leaderboard/leaderboard.component */
    "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./authentication/components/information/information.component */
    "./src/app/authentication/components/information/information.component.ts");
    /* harmony import */


    var _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./authentication/components/manage-resource/manage-resource.component */
    "./src/app/authentication/components/manage-resource/manage-resource.component.ts");
    /* harmony import */


    var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @cloudinary/angular-5.x */
    "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");
    /* harmony import */


    var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./services/pipes/date-ago.pipe */
    "./src/app/services/pipes/date-ago.pipe.ts");
    /* harmony import */


    var _services_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/pipes/youtube.pipe */
    "./src/app/services/pipes/youtube.pipe.ts");
    /* harmony import */


    var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./authentication/authentication.module */
    "./src/app/authentication/authentication.module.ts");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var _authentication_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./authentication/components/quiz/quiz.component */
    "./src/app/authentication/components/quiz/quiz.component.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _authentication_components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./authentication/components/exercise/exercise.component */
    "./src/app/authentication/components/exercise/exercise.component.ts");
    /* harmony import */


    var _authentication_components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./authentication/components/sub-menu/sub-menu.component */
    "./src/app/authentication/components/sub-menu/sub-menu.component.ts");
    /* harmony import */


    var _authentication_components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./authentication/components/member/classroom/classroom.component */
    "./src/app/authentication/components/member/classroom/classroom.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
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
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_31__["AuthenticationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressbarModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(), _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_28__["CloudinaryModule"].forRoot({
        Cloudinary: cloudinary_core__WEBPACK_IMPORTED_MODULE_15__["Cloudinary"]
      }, {
        cloud_name: 'hgflnfcwf'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_services_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_30__["Youtube"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_29__["DateAgoPipe"], _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_17__["HahaComponent"], _authentication_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_33__["QuizComponent"], _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_22__["MemberComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"], _authentication_components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_36__["SubMenuComponent"], _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_24__["ContentComponent"], _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_23__["ResourceComponent"], _authentication_components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_35__["ExerciseComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_20__["HomepageComponent"], _authentication_components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_37__["ClassroomComponent"], _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_26__["InformationComponent"], _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_25__["LeaderboardComponent"], _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_27__["ManageResourceComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_38__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_31__["AuthenticationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressbarModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_28__["CloudinaryModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_services_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_30__["Youtube"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_29__["DateAgoPipe"], _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_17__["HahaComponent"], _authentication_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_33__["QuizComponent"], _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_22__["MemberComponent"], _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"], _authentication_components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_36__["SubMenuComponent"], _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_24__["ContentComponent"], _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_23__["ResourceComponent"], _authentication_components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_35__["ExerciseComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_20__["HomepageComponent"], _authentication_components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_37__["ClassroomComponent"], _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_26__["InformationComponent"], _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_25__["LeaderboardComponent"], _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_27__["ManageResourceComponent"]],
          imports: [_app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_31__["AuthenticationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressbarModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(), _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_28__["CloudinaryModule"].forRoot({
            Cloudinary: cloudinary_core__WEBPACK_IMPORTED_MODULE_15__["Cloudinary"]
          }, {
            cloud_name: 'hgflnfcwf'
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
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


    var _app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/haha/haha.component */
    "./src/app/components/haha/haha.component.ts");
    /* harmony import */


    var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");

    var RouterLists = [{
      path: '',
      redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login,
      pathMatch: 'full'
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login,
      component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Home,
      component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Register,
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Haha,
      component: _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_2__["HahaComponent"]
    }, {
      path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen,
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }];

    var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(RouterLists);
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
      Haha: 'haha',
      Authen: 'auth',
      Login: 'signin',
      Home: 'homepage',
      Register: 'signup'
    };
    /***/
  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
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


    var _authentication_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.routing */
    "./src/app/authentication/authentication.routing.ts");
    /* harmony import */


    var _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../share/shareds.module */
    "./src/app/share/shareds.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationModule
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__["SharedsModule"], _authentication_routing__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRouting"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__["SharedsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__["SharedsModule"], _authentication_routing__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRouting"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication.routing.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authentication/authentication.routing.ts ***!
    \**********************************************************/

  /*! exports provided: AuthenticationRouting */

  /***/
  function srcAppAuthenticationAuthenticationRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRouting", function () {
      return AuthenticationRouting;
    });
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/authentication/components/home/home.component.ts");
    /* harmony import */


    var _components_member_member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/member/member.component */
    "./src/app/authentication/components/member/member.component.ts");
    /* harmony import */


    var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/resource/resource.component */
    "./src/app/authentication/components/resource/resource.component.ts");
    /* harmony import */


    var _components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/resource/content/content.component */
    "./src/app/authentication/components/resource/content/content.component.ts");
    /* harmony import */


    var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/leaderboard/leaderboard.component */
    "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _components_information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/information/information.component */
    "./src/app/authentication/components/information/information.component.ts");
    /* harmony import */


    var _components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/manage-resource/manage-resource.component */
    "./src/app/authentication/components/manage-resource/manage-resource.component.ts");
    /* harmony import */


    var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/quiz/quiz.component */
    "./src/app/authentication/components/quiz/quiz.component.ts");
    /* harmony import */


    var _app_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/exercise/exercise.component */
    "./src/app/authentication/components/exercise/exercise.component.ts");
    /* harmony import */


    var _components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/sub-menu/sub-menu.component */
    "./src/app/authentication/components/sub-menu/sub-menu.component.ts");
    /* harmony import */


    var _components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/member/classroom/classroom.component */
    "./src/app/authentication/components/member/classroom/classroom.component.ts");

    var RouterLists = [{
      path: '',
      redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_10__["AppURL"].Login,
      pathMatch: 'full'
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Home,
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Leaderboard,
      component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__["LeaderboardComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Information,
      component: _components_information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Resource,
      component: _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_4__["ResourceComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Content,
      component: _components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Member,
      component: _components_member_member_component__WEBPACK_IMPORTED_MODULE_3__["MemberComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Quiz,
      component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__["QuizComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].ManageResource,
      component: _components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_8__["ManageResourceComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Exercise,
      component: _components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_11__["ExerciseComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Menu,
      component: _components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_12__["SubMenuComponent"]
    }, {
      path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Classroom,
      component: _components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_13__["ClassroomComponent"]
    } // { path: AuthURL.Signin , component:SigninComponent }
    ];

    var AuthenticationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(RouterLists);
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
      Signin: 'signin',
      Member: 'member',
      Content: 'content',
      Resource: 'resource',
      Leaderboard: 'leaderboard',
      Information: 'information',
      ManageResource: 'manage-resource',
      Exercise: 'exercise',
      Quiz: 'quiz',
      Menu: 'menu',
      Classroom: 'classroom'
    };
    /***/
  },

  /***/
  "./src/app/authentication/components/exercise/exercise.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/authentication/components/exercise/exercise.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ExerciseComponent */

  /***/
  function srcAppAuthenticationComponentsExerciseExerciseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExerciseComponent", function () {
      return ExerciseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/quiz.service */
    "./src/app/authentication/services/quiz.service.ts");
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _services_grade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/grade.service */
    "./src/app/authentication/services/grade.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");

    function ExerciseComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A ", ctx_r0.item.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E2D\u0E14\u0E04\u0E25\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 ", ctx_r0.item.detail, " ");
      }
    }

    function ExerciseComponent_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0E04\u0E33\u0E0A\u0E35\u0E49\u0E41\u0E08\u0E07 : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E41\u0E1A\u0E1A 4 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r1.total_items, " \u0E02\u0E49\u0E2D");
      }
    }

    function ExerciseComponent_div_9_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_div_9_div_6_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var data_r7 = ctx.$implicit;
          var j_r8 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.choose(data_r7.correct, ctx_r9.index, j_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r7 = ctx.$implicit;
        var j_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.onSelect(ctx_r6.index, j_r8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r7.name);
      }
    }

    function ExerciseComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExerciseComponent_div_9_div_6_Template, 5, 2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.item.choice[ctx_r2.index].question, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.item.choice[ctx_r2.index].answer);
      }
    }

    function ExerciseComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onPreviousExercise();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " << \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExerciseComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onNextExercise();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E15\u0E48\u0E2D\u0E44\u0E1B >>");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExerciseComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ExerciseComponent = /*#__PURE__*/function () {
      function ExerciseComponent(activateRouter, alert, quiz, account, router, grade, authen) {
        var _this = this;

        _classCallCheck(this, ExerciseComponent);

        this.activateRouter = activateRouter;
        this.alert = alert;
        this.quiz = quiz;
        this.account = account;
        this.router = router;
        this.grade = grade;
        this.authen = authen;
        this.index = 0;
        this.your_answer = [];
        this.activateRouter.queryParams.forEach(function (params) {
          _this._id = params.id;
        });
        this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
          // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
          _this.grade.getScoreExercise(_this._id).then(function (result) {
            if (result.total_items > 0) {
              _this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + result.item.score);

              _this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
            }
          });
        }); // โหลดข้อมูลแบบฝึกหัด

        this.quiz.getAllQuiz(this._id).then(function (result) {
          _this.item = result.items;
          _this.total_items = result.total_items;

          if (!_this.item) {
            _this.alert.something_wrong();

            _this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
          } // console.log(result);

        })["catch"](function () {
          _this.alert.something_wrong();

          _this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
        });
      }

      _createClass(ExerciseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "choose",
        value: function choose(score, index, j) {
          this.your_answer[index] = {
            select: j,
            score: score
          };
        }
      }, {
        key: "onSelect",
        value: function onSelect(index, j) {
          // index = ข้อ
          if (this.your_answer[index]) {
            if (this.your_answer[index].select == j) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.total_score = 0; // Array of numbers

          for (var i = 0; i < this.total_items; i++) {
            this.total_score += this.your_answer[i].score;
          }

          var obj = {
            ref: this._id,
            name: this.item.name,
            score: this.total_score,
            user: this.account.UserLogin._id
          };
          this.grade.addScoreExercise(obj).then(function () {
            _this2.alert.success('คะแนน PRE-TEST ของคุณ คือ ' + _this2.total_score);

            _this2.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
          });
        }
      }, {
        key: "onNextExercise",
        value: function onNextExercise() {
          if (this.index == this.total_items - 1) {
            return;
          }

          this.index += 1;
        }
      }, {
        key: "onPreviousExercise",
        value: function onPreviousExercise() {
          if (this.index == 0) {
            return;
          }

          this.index -= 1;
        }
      }]);

      return ExerciseComponent;
    }();

    ExerciseComponent.ɵfac = function ExerciseComponent_Factory(t) {
      return new (t || ExerciseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]));
    };

    ExerciseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExerciseComponent,
      selectors: [["app-exercise"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]])],
      decls: 18,
      vars: 11,
      consts: [["class", "border-aqua border-bottom mb-4", 4, "ngIf"], [1, "text-center"], [4, "ngIf"], [1, "row"], [1, "col-md-10"], ["class", "card my-4 text-black", "style", "border:1px solid rgb(90,156,255);border-left: 10px solid rgb(90, 156, 255);", 4, "ngIf"], [1, "col-md-2", "mt-4"], ["max", "2", "type", "success", "striped", "true", "animate", "true", 3, "value"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary button-next", 3, "click", 4, "ngIf"], ["class", "btn btn-primary button-next ml-2", "style", "border:1px solid darkgreen;background-color: rgb(44, 194, 94);", 3, "click", 4, "ngIf"], [1, "border-aqua", "border-bottom", "mb-4"], [1, "container"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], [1, "card", "my-4", "text-black", 2, "border", "1px solid rgb(90,156,255)", "border-left", "10px solid rgb(90, 156, 255)"], [1, "card-header"], [2, "font-size", "x-large", "margin", "0px"], [1, "card-body"], ["class", "input-group mb-2", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "radio", "value", "data.correct", "name", "item.choice[index]._id", "aria-label", "Radio button for following text input", 3, "checked", "click"], ["type", "text", "aria-label", "Text input with radio button", "readonly", "true", 1, "form-control", 3, "value"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "button-next", 3, "click"], [1, "btn", "btn-primary", "button-next", "ml-2", 2, "border", "1px solid darkgreen", "background-color", "rgb(44, 194, 94)", 3, "click"]],
      template: function ExerciseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExerciseComponent_div_1_Template, 7, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExerciseComponent_p_6_Template, 4, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExerciseComponent_div_9_Template, 7, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "progressbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExerciseComponent_button_14_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExerciseComponent_button_16_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExerciseComponent_button_17_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item == null ? null : ctx.item.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 ", ctx.index + 1, "/2 | page ", ctx.index + 1, "/", ctx.total_items, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.your_answer.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index != ctx.total_items - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.your_answer.length == ctx.total_items);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvZXhlcmNpc2UvZXhlcmNpc2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exercise',
          templateUrl: './exercise.component.html',
          styleUrls: ['./exercise.component.css'],
          providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]
        }];
      }, null);
    })();
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _services_grade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/grade.service */
    "./src/app/authentication/services/grade.service.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(alert, authen, account, sanitizer, router, grade) {
        var _this3 = this;

        _classCallCheck(this, HomeComponent);

        this.alert = alert;
        this.authen = authen;
        this.account = account;
        this.sanitizer = sanitizer;
        this.router = router;
        this.grade = grade;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://edpuzzle.com/embed/assignments/5ebe9cbb40d77c3f106af0f4/watch");
        this.status = 0;
        this.preTest = 0;
        this.prpsTest = 0;
        this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
          _this3.UserLogin = result;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickPreTest",
        value: function onClickPreTest(id) {
          var _this4 = this;

          if (this.status == 1 || this.status == 2) {
            this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
            return;
          } // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้


          this.grade.getScoreExercise('PRE-TEST').then(function (result) {
            if (result.total_items > 0) {
              _this4.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + result.item.score);

              _this4.status = 1;
              _this4.preTest = result.item.score;
              return;
            } else {
              _this4.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Exercise], {
                queryParams: {
                  id: id
                }
              });
            }
          });
          this.status = 1;
        }
      }, {
        key: "onClickPrPS",
        value: function onClickPrPS(id) {
          var _this5 = this;

          if (this.status == 2) {
            return this.alert.notify('ขณะนี้ระบบยังไม่เปิดการใช้งานแบบประเมินทักษะการแก้ปัญหา', 'แจ้งเตือน', 'warning');
          } else if (this.status == 3) {
            return this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!');
          } else if (this.status == 4) {
            return this.alert.success('คะแนน "ประเมินทักษะการแก้ปัญหา" ของคุณคือ ' + this.prpsTest);
          } // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้


          this.grade.getScoreExercise('PRPS-TEST').then(function (result) {
            if (result.total_items == 0) {
              _this5.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Exercise], {
                queryParams: {
                  id: id
                }
              });

              _this5.status = 3;
              return;
            } else {
              _this5.alert.success('คะแนน "ประเมินทักษะการแก้ปัญหา" ของคุณคือ ' + result.item.score);

              _this5.status = 4;
              _this5.prpsTest = result.item.score;
            }
          });
        }
      }, {
        key: "hover",
        value: function hover(image) {
          if (image.id == 'button1') {
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
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]])],
      decls: 25,
      vars: 0,
      consts: [[1, "header-hover"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-down"], [1, "row", "my-3"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body", "text-center"], [3, "click"], ["id", "button1", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/01.png", 2, "cursor", "pointer"], [1, "card-footer"], [1, "card-text"], ["id", "button2", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/02.png"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E40\u0E21\u0E19\u0E39\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 ");

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
            return ctx.onClickPreTest("PRE-TEST");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E13 \u0E40\u0E27\u0E25\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

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
            return ctx.onClickPrPS("PRPS-TEST");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E41\u0E1C\u0E19\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E42\u0E14\u0E22\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E27\u0E48\u0E32\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css'],
          providers: [_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]]
        }]
      }], function () {
        return [{
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]
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


    var _services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/level.service */
    "./src/app/authentication/services/level.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_grade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/grade.service */
    "./src/app/authentication/services/grade.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @cloudinary/angular-5.x */
    "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");

    var _c0 = function _c0() {
      return ["/auth/member"];
    };

    function InformationComponent_nav_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07 & \u0E41\u0E01\u0E49\u0E44\u0E02 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function InformationComponent_cl_image_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cl-image", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("public-idChange", function InformationComponent_cl_image_52_Template_cl_image_public_idChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.image_name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("public-id", ctx_r1.image_name);
      }
    }

    function InformationComponent_img_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 39);
      }
    }

    function InformationComponent_span_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r6 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("tooltip", "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01 : \u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 ", data_r6, " \u0E40\u0E01\u0E34\u0E19 80 %");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.setPath(data_r6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var InformationComponent = /*#__PURE__*/function () {
      function InformationComponent(router, grade, alert, builder, authen, member, account, level_service, activateRouter) {
        var _this6 = this;

        _classCallCheck(this, InformationComponent);

        this.router = router;
        this.grade = grade;
        this.alert = alert;
        this.builder = builder;
        this.authen = authen;
        this.member = member;
        this.account = account;
        this.level_service = level_service;
        this.activateRouter = activateRouter;
        this.year = new Date().getFullYear() + 543;
        this.x = 'user/image/olqpjyoomeqmsfmvjww3';
        this.badge = ["Design", "Device", "Final_City", "Internet", "IP", "LAN", "Monitor", "NOS", "Novice", "Overview", "Security", "Transmission", "WLAN"];
        this.activateRouter.queryParams.forEach(function (params) {
          _this6.mem_id = params.item;
        });
        if (!this.UserLogin) this.initialLoadUserLogin();
        this.inititalCreateFormData();
        this.initialLoadUpdateFormData();
      }

      _createClass(InformationComponent, [{
        key: "setPath",
        value: function setPath(path) {
          // console.log(path);
          return "../../../../assets/image/badge/" + path + ".png";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // เปิดดูคะแนนรายหัวข้อ

      }, {
        key: "onOpenScore",
        value: function onOpenScore(title) {
          var _this7 = this;

          this.grade.getScoreExercise(title).then(function (result) {
            if (result.total_items > 0) return _this7.alert.showScore(result.item.name, result.item.score);

            _this7.alert.notify("ยังไม่มีคะแนนส่วนดังกล่าว!");
          })["catch"](function (err) {
            _this7.alert.notify("ยังไม่มีคะแนนส่วนดังกล่าว!");
          });
        } // โหลด UserLogin

      }, {
        key: "initialLoadUserLogin",
        value: function initialLoadUserLogin() {
          var _this8 = this;

          var data = this.authen.getAuthenticated();

          if (!data) {
            return;
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (userLogin) {
            _this8.UserLogin = userLogin;
          })["catch"](function (err) {
            _this8.alert.notify(err.message);

            _this8.authen.clearAuthenticated();

            _this8.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
          });
        } // สร้าง ฟอร์มครั้งแรก

      }, {
        key: "inititalCreateFormData",
        value: function inititalCreateFormData() {
          this.form = this.builder.group({
            sid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            "class": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            etc: ['']
          });
        } // โหลดฟอร์มครั้งแรก

      }, {
        key: "initialLoadUpdateFormData",
        value: function initialLoadUpdateFormData() {
          var _this9 = this;

          // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
          if (this.mem_id) {
            return this.account.getUserByID(this.mem_id, this.authen.getAuthenticated()).then(function (result) {
              // console.log(result);
              _this9.form.controls['email'].setValue(result.items[0].email);

              _this9.form.controls['phone'].setValue(result.items[0].phone);

              _this9.form.controls['firstname'].setValue(result.items[0].firstname);

              _this9.form.controls['sid'].setValue(result.items[0].sid);

              _this9.form.controls['lastname'].setValue(result.items[0].lastname);

              _this9.member.returnClassroom(result.items[0]["class"]).then(function (res) {
                _this9.form.controls['class'].setValue(res.items._id);

                _this9.classroom = res.items.name;
              });

              _this9.exp = result.items[0].exp;
              _this9.level = _this9.level_service.calculateLevel(_this9.exp);

              if (result.items[0].image) {
                _this9.image_name = result.items[0].image;
              }
            });
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
            _this9.form.controls['email'].setValue(result.email);

            _this9.form.controls['phone'].setValue(result.phone);

            _this9.form.controls['firstname'].setValue(result.firstname);

            _this9.form.controls['sid'].setValue(result.sid);

            _this9.form.controls['lastname'].setValue(result.lastname);

            _this9.member.returnClassroom(result["class"]).then(function (res) {
              _this9.form.controls['class'].setValue(res.items._id);

              _this9.classroom = res.items.name;
            });

            _this9.exp = result.exp;
            _this9.level = _this9.level_service.calculateLevel(_this9.exp);

            if (result.image) {
              _this9.image_name = result.image;
            }
          });
        }
      }, {
        key: "getClassroom",
        value: function getClassroom(_id) {
          this.member.returnClassroom(_id).then(function (result) {
            console.log(result);
            return result.items.name;
          });
        } // ปุ่มแก้ไขข้อมูลผู้ใช้

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ถูกต้อง และครบถ้วน');
          }

          if (this.mem_id) {
            return this.member.updateMember(this.mem_id, this.form.value).then(function (result) {
              _this10.alert.success(result.message);
            });
          }

          this.member.updateMember(this.UserLogin._id, this.form.value).then(function (result) {
            _this10.alert.success(result.message);
          });
        }
      }]);

      return InformationComponent;
    }();

    InformationComponent.ɵfac = function InformationComponent_Factory(t) {
      return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InformationComponent,
      selectors: [["app-information"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]])],
      decls: 99,
      vars: 10,
      consts: [[1, "col-md-12"], ["class", "breadcrumb", 4, "ngIf"], ["src", "../../../../assets/image/Crown4.png"], [1, "row", "py-2"], [1, "col-lg-2", "mt-2"], [1, "jumbotron", "text-center", 2, "padding", "8px 16px", "margin", "0 0 8px 0"], [1, "mt-1", "pl-2", "pr-2", 2, "border", "1px solid lightgray", "border-radius", "5px"], [2, "list-style", "none", "padding-left", "0"], [1, "py-2"], [3, "click"], [1, "col-lg-7", "mt-2", 2, "padding-right", "8px"], [1, "row"], [1, "col-md-3"], ["class", "avatar-image", "crop", "fit", 3, "public-id", "public-idChange", 4, "ngIf"], ["src", "../../../../assets/image/no-image.png", "class", "avatar-image", 4, "ngIf"], [1, "col-md-9"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "text", "formControlName", "firstname", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", 1, "form-control"], ["type", "text", "formControlName", "lastname", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", 1, "form-control", "mt-2"], ["type", "text", "formControlName", "phone", "placeholder", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23", 1, "form-control"], ["type", "text", "formControlName", "email", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C", 1, "form-control"], ["type", "hidden", "formControlName", "class", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "etc", "readonly", "", 1, "form-control", 3, "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-success"], [1, "col-md-3", "mt-4", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "mt-4", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C", "readonly", "", 1, "form-control", 3, "value", "valueChange"], [1, "col-md-3", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E40\u0E25\u0E40\u0E27\u0E25", "readonly", "", 1, "form-control", 3, "value", "valueChange"], [1, "col-lg-3", "jumbotron", "text-center", "mt-2", "py-4", 2, "border", "1px solid white", "background-color", "rgb(209, 209, 209)", "border-radius", "15px"], [1, "show-badge"], ["class", "pointer", 3, "tooltip", 4, "ngFor", "ngForOf"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["crop", "fit", 1, "avatar-image", 3, "public-id", "public-idChange"], ["src", "../../../../assets/image/no-image.png", 1, "avatar-image"], [1, "pointer", 3, "tooltip"], [2, "max-width", "65px", 3, "src"]],
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
            return ctx.onOpenScore("PRE-TEST");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pre-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_17_listener() {
            return ctx.onOpenScore("PRPS-TEST");
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, InformationComponent_cl_image_52_Template, 1, 1, "cl-image", 13);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " \u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "(Experience) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function InformationComponent_Template_input_valueChange_86_listener($event) {
            return ctx.exp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " \u0E23\u0E30\u0E14\u0E31\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "(Level) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function InformationComponent_Template_input_valueChange_93_listener($event) {
            return ctx.level = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E15\u0E23\u0E32\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, InformationComponent_span_98_Template, 2, 2, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mem_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.image_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.classroom)("placeholder", ctx.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.exp);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.badge);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_12__["CloudinaryImage"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"]],
      styles: [".ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border-color:orangered;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjpvcmFuZ2VyZWQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-information',
          templateUrl: './information.component.html',
          styleUrls: ['./information.component.css'],
          providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
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


    var src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/share/services/member.service */
    "./src/app/share/services/member.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
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
      function LeaderboardComponent(level, member, authen, account) {
        _classCallCheck(this, LeaderboardComponent);

        this.level = level;
        this.member = member;
        this.authen = authen;
        this.account = account; // ภาพ มงกุฎ

        this.crown_image = ['../../../../assets/image/Crown4.png', '../../../../assets/image/Crown3.png', '../../../../assets/image/Crown2.png', '../../../../assets/image/Crown5.png', '../../../../assets/image/Crown5.png'];

        if (!this.UserLogin) {
          this.loadUserLogin();
        }

        this.loadTopPlayer();
      }

      _createClass(LeaderboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // ดึงข้อมูล UserLogin

      }, {
        key: "loadUserLogin",
        value: function loadUserLogin() {
          var _this11 = this;

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (result) {
            _this11.UserLogin = result;
          });
        } // ดึงข้อมูล Top 5 Player

      }, {
        key: "loadTopPlayer",
        value: function loadTopPlayer() {
          var _this12 = this;

          this.member.getTopPlayer().then(function (result) {
            _this12.Leaderboard = result.items;
          });
        } // คำนวณ Level

      }, {
        key: "calLevel",
        value: function calLevel(exp) {
          return this.level.calculateLevel(exp);
        }
      }]);

      return LeaderboardComponent;
    }();

    LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) {
      return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]));
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
          type: _services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]
        }, {
          type: src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/resource.service */
    "./src/app/authentication/services/resource.service.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2/src/sweetalert2.scss */
    "./node_modules/sweetalert2/src/sweetalert2.scss");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageResourceComponent_button_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_button_51_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.onPopText();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManageResourceComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E25\u0E34\u0E07\u0E01\u0E4C Video \u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_52_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var i_r5 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.url[i_r5] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E04\u0E25\u0E34\u0E1B Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_52_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var i_r5 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.text[i_r5] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0E41\u0E19\u0E1A\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D : ", i_r5 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.url[i_r5]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.text[i_r5]);
      }
    }

    var ManageResourceComponent = /*#__PURE__*/function () {
      function ManageResourceComponent(router, alert, sanitizer, resource) {
        _classCallCheck(this, ManageResourceComponent);

        this.router = router;
        this.alert = alert;
        this.sanitizer = sanitizer;
        this.resource = resource;
        this.hyperText = "";
        this.pdf = ['', '', ''];
        this.url = ['', ''];
        this.text = [''];
        this.file = [''];
        this.title = [''];
        this.page = 1;
        this.status_button = 0;
        this.number_title = [1];
        this.isCollapsed = true;
        this.switch_display = 'pdf';
        this.url_type = true; // true is youtube && false is edupuzzle

        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
      }

      _createClass(ManageResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // change page up

      }, {
        key: "onAddText",
        value: function onAddText(number) {
          if (number) {
            this.number_title.push(number + 1);
            return;
          }

          this.status_button += 1;
        } // change page down

      }, {
        key: "onMinusText",
        value: function onMinusText() {
          this.status_button -= 1;
        } // pop data from array

      }, {
        key: "onPopText",
        value: function onPopText() {
          this.number_title.pop();
          this.url.pop();
          this.text.pop();
        } // return url to display Youtube

      }, {
        key: "onShowYoutube",
        value: function onShowYoutube(url) {
          if (url == 'switch') {
            return this.switch_display = 'pdf';
          } // https://www.youtube.com/watch?v=zx7ndQFt7i8


          url = url.substring(32);
          this.switch_display = 'youtube';
          this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/' + url);
        } // return url to display PDF

      }, {
        key: "onShowPDF",
        value: function onShowPDF(url) {
          var pdf;
          if (!url) return;

          if (url.substring(url.length - 5) == '/view') {
            url = url.substring(0, url.length - 4) + 'preview';
          } else {
            pdf = "https://drive.google.com/file/d/" + url.substr(33) + "/preview";
          }

          try {
            this.url_file = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          } catch (err) {
            this.alert.showWarning('เกิดข้อผิดพลาดกับลิงก์ PDF', err);
          }
        } // CKeditor1

      }, {
        key: "onChange",
        value: function onChange(_ref) {
          var _this13 = this;

          var editor = _ref.editor;
          var data = editor.getData();
          setTimeout(function () {
            _this13.data = data;
          }, 1000); // console.log( data );
        } // CKeditor2

      }, {
        key: "onChange2",
        value: function onChange2(_ref2) {
          var _this14 = this;

          var editor = _ref2.editor;
          var data = editor.getData();
          setTimeout(function () {
            _this14.data2 = data;
          }, 1000); // console.log( data );
        } // Check before submit

      }, {
        key: "onPreview",
        value: function onPreview(text) {
          if (!this.name) {
            return this.alert.notify('== กรุณากรอกหน่วยที่ ==', 'กรุณากรอกข้อมูลให้ครบถ้วน!', 'info');
          }

          if (this.title.length < 3) {
            return this.alert.notify('== หัวข้อให้ครบถ้วนทั้ง 3 หัวข้อ ==', 'กรุณากรอกข้อมูลให้ครบถ้วน!', 'info');
          }

          if (this.file[0] == '') {
            return this.alert.notify('== กรุณาแนบไฟล์ PDF ด้วย ==', 'กรุณากรอกข้อมูลให้ครบถ้วน!', 'info');
          }

          this.text[0] = this.data;

          if (this.data2) {
            this.text[this.text.length] = this.data2;
          }

          var obj = {
            name: this.name,
            title: this.title,
            file: this.file,
            text: this.text,
            url: this.url
          };

          if (this.file[0]) {
            this.onShowPDF(this.file[0]);
          }

          if (text) {
            return obj;
          }
        }
      }, {
        key: "urlTypeClick",
        value: function urlTypeClick() {
          this.url_type = !this.url_type;
        } // Submit

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'คุณแน่ใจหรือไม่ ?',
            text: "คุณต้องการจะเพิ่มแหล่งข้อมูลใช่หรือไม่!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'เพิ่มข้อมูล!'
          }).then(function (result) {
            if (result.value) {
              var model = {
                name: _this15.name,
                pdf: {
                  title: _this15.pdf[0],
                  url: _this15.pdf[1],
                  text: _this15.pdf[2]
                },
                youtube: {
                  title: _this15.youtube_title,
                  video: {
                    text: _this15.text,
                    url: _this15.url
                  }
                },
                hypertext: {
                  title: _this15.hyperText_title,
                  text: _this15.hyperText
                }
              };

              _this15.resource.onCreateChapter(model).then(function () {
                _this15.alert.success('เพิ่มข้อมูลเรียบร้อยแล้ว !');

                _this15.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Home]);
              });
            }
          });
        }
      }]);

      return ManageResourceComponent;
    }();

    ManageResourceComponent.ɵfac = function ManageResourceComponent_Factory(t) {
      return new (t || ManageResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]));
    };

    ManageResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ManageResourceComponent,
      selectors: [["app-manage-resource"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])],
      decls: 75,
      vars: 12,
      consts: [[1, "row", "py-4"], [1, "col-md-12"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap"], [1, "col-md-9", "py-3"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 01", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-3"], [3, "justified"], ["heading", "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF"], [1, "card", "mt-3"], ["for", "ccnumber"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF", "required", "", 1, "form-control", "my-1", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) ./assets/pdf/document.pdf", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-12"], ["for", "ccmonth"], ["data", "<p>:: \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 ::</p><ul><li>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C</li></ul>", 3, "editor", "ngModel", "ngModelChange", "change"], ["heading", "\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E04\u0E25\u0E34\u0E1B\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19", "required", "", 1, "form-control", "my-1", 3, "ngModel", "ngModelChange"], [1, "pb-2", 2, "display", "block", "width", "100%", "text-align", "right"], [1, "btn", "btn-outline-primary", "mr-1", 3, "click"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], ["heading", "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Hypertext"], ["type", "text", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E2D\u0E48\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", "required", "", 1, "form-control", "my-1", 3, "ngModel", "ngModelChange"], ["data", "", 3, "editor", "ngModel", "ngModelChange", "change"], [1, "col-md-3", "py-3"], [1, "btn", "btn-primary", "col-md-12", 3, "click"], [1, "btn", "btn-success", "col-md-12", "my-2", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "card", "mb-1"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) https://www.youtube.com/watch?v=WBU5oHRrTUo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function ManageResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 & \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tabset", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tab", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.pdf[0] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.pdf[1] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ckeditor", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_ckeditor_ngModelChange_38_listener($event) {
            return ctx.pdf[2] = $event;
          })("change", function ManageResourceComponent_Template_ckeditor_change_38_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tab", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u0E04\u0E25\u0E34\u0E1B \u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.youtube_title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_Template_button_click_49_listener() {
            return ctx.onAddText(ctx.number_title.length);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " + \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ManageResourceComponent_button_51_Template, 2, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ManageResourceComponent_div_52_Template, 12, 3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tab", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E40\u0E27\u0E47\u0E1A (Hypertext) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_input_ngModelChange_61_listener($event) {
            return ctx.hyperText_title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ckeditor", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_Template_ckeditor_ngModelChange_65_listener($event) {
            return ctx.hyperText = $event;
          })("change", function ManageResourceComponent_Template_ckeditor_change_65_listener($event) {
            return ctx.onChange2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_Template_button_click_71_listener() {
            return ctx.onPreview();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_Template_button_click_73_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("justified", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pdf[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pdf[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("ngModel", ctx.pdf[2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.youtube_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_title.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.number_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.hyperText_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("ngModel", ctx.hyperText);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabDirective"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWFuYWdlLXJlc291cmNlL21hbmFnZS1yZXNvdXJjZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-manage-resource',
          templateUrl: './manage-resource.component.html',
          styleUrls: ['./manage-resource.component.css'],
          providers: [_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }, {
          type: _services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/member/classroom/classroom.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/authentication/components/member/classroom/classroom.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ClassroomComponent */

  /***/
  function srcAppAuthenticationComponentsMemberClassroomClassroomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassroomComponent", function () {
      return ClassroomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/authentication/services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClassroomComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E14\u0E39\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_tr_26_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var data_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onDelete(data_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E25\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
      }
    }

    var ClassroomComponent = /*#__PURE__*/function () {
      function ClassroomComponent(member, alert) {
        _classCallCheck(this, ClassroomComponent);

        this.member = member;
        this.alert = alert;
        this.option = {
          sp: 0,
          lp: 5,
          keySearch: null,
          valueData: null
        };
        this.room = "5eca83a411df253bb42f2eee";
        this.loadDataClassroom();
      }

      _createClass(ClassroomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          console.log("Working");
          this.member.addClassroom({
            name: this.classroom_name
          }).then(function (result) {
            _this16.alert.success(result.message);

            _this16.loadDataClassroom();
          })["catch"](function (err) {
            console.log(err);
            if (err.Message == "ValidationError") _this16.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
          });
        }
      }, {
        key: "loadDataClassroom",
        value: function loadDataClassroom() {
          var _this17 = this;

          this.member.loadClassroom(this.option).then(function (result) {
            _this17.Classroom_item = result.items;
            _this17.total_classroom = result.total_items;
          });
          this.classroom_name = null;
        }
      }, {
        key: "onDelete",
        value: function onDelete(model) {
          var _this18 = this;

          this.member.deleteClassroom(model).then(function (result) {
            _this18.alert.success(result.message);

            _this18.loadDataClassroom();
          });
        }
      }]);

      return ClassroomComponent;
    }();

    ClassroomComponent.ɵfac = function ClassroomComponent_Factory(t) {
      return new (t || ClassroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]));
    };

    ClassroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClassroomComponent,
      selectors: [["app-classroom"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]])],
      decls: 29,
      vars: 3,
      consts: [[1, "card", "mt-3", 2, "border-top", "5px solid black", "border-radius", "5"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-11"], ["type", "text", "placeholder", "\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-1"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click"], [1, "table-responsive-md"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-dark", "py-1", 2, "float", "right"], [1, "pointer", "text-info", 2, "text-decoration", "underline"], [1, "pointer", "text-danger", 2, "text-decoration", "underline", 3, "click"]],
      template: function ClassroomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClassroomComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.classroom_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_Template_button_click_12_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClassroomComponent_tr_26_Template, 11, 2, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.classroom_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Classroom_item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ", ctx.total_classroom, "");
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_3__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL2NsYXNzcm9vbS9jbGFzc3Jvb20uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-classroom',
          templateUrl: './classroom.component.html',
          styleUrls: ['./classroom.component.css'],
          providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]]
        }]
      }], function () {
        return [{
          type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }];
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2/src/sweetalert2.scss */
    "./node_modules/sweetalert2/src/sweetalert2.scss");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/level.service */
    "./src/app/authentication/services/level.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @cloudinary/angular-5.x */
    "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../services/pipes/date-ago.pipe */
    "./src/app/services/pipes/date-ago.pipe.ts");

    function MemberComponent_tr_27_cl_image_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cl-image", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("public-idChange", function MemberComponent_tr_27_cl_image_3_Template_cl_image_public_idChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

          var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          return data_r2.image = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("public-id", data_r2.image);
      }
    }

    function MemberComponent_tr_27_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
      }
    }

    function MemberComponent_tr_27_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r5.calNextLevel(data_r2.exp), "1.2-2"), " %");
      }
    }

    function MemberComponent_tr_27_strong_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "dateAgo");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, data_r2.activity));
      }
    }

    function MemberComponent_tr_27_strong_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MemberComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MemberComponent_tr_27_cl_image_3_Template, 1, 1, "cl-image", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MemberComponent_tr_27_img_4_Template, 1, 0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " lvl: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "small", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "progressbar", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MemberComponent_tr_27_span_26_Template, 3, 4, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Last login");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, MemberComponent_tr_27_strong_30_Template, 3, 3, "strong", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MemberComponent_tr_27_strong_31_Template, 2, 0, "strong", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

          var data_r2 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r14.openMember(data_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

          var data_r2 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r16.openMember(data_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

          var data_r2 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r17.onDeleteClick(data_r2._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r2.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !data_r2.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r2.firstname, " ", data_r2.lastname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" | ", data_r2.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.calLevel(data_r2.exp));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 11, ctx_r0.calNextLevel(data_r2.exp), "1.2-2"), "/100");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.calNextLevel(data_r2.exp));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.calNextLevel(data_r2.exp) > 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r2.activity);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !data_r2.activity);
      }
    }

    function MemberComponent_pagination_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pagination", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChanged", function MemberComponent_pagination_29_Template_pagination_pageChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r18.pageChanged($event);
        })("ngModelChange", function MemberComponent_pagination_29_Template_pagination_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r20.cp = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsPerPage", ctx_r1.option.lp)("ngModel", ctx_r1.cp)("totalItems", ctx_r1.total_items);
      }
    }

    var MemberComponent = /*#__PURE__*/function () {
      function MemberComponent(router, alert, level, member, account) {
        _classCallCheck(this, MemberComponent);

        this.router = router;
        this.alert = alert;
        this.level = level;
        this.member = member;
        this.account = account;
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
        value: function ngOnInit() {} // เรียกดูสมาชิก onInit

      }, {
        key: "onLoadMember",
        value: function onLoadMember() {
          var _this19 = this;

          this.member.loadMember(this.option).then(function (result) {
            _this19.total_items = result.total_items;
            _this19.items = result.items;
            _this19.size_pagination = Math.round(Number(_this19.total_items) / Number(_this19.option.lp));
            _this19.cp = Number(_this19.option.sp) + 1;
          });
        } // PageChanged

      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.option.sp = event.page - 1;
          this.onLoadMember();
        } // คำนวณเลเวล

      }, {
        key: "calLevel",
        value: function calLevel(exp) {
          return this.level.calculateLevel(exp);
        } // คำนวณ % ที่เหลือ

      }, {
        key: "calNextLevel",
        value: function calNextLevel(exp) {
          return this.level.calExpLeftToNextLevel(exp);
        } // ค้นหา User

      }, {
        key: "onSearch",
        value: function onSearch() {
          var _this20 = this;

          if (!this.searchText) {
            this.onLoadMember();
          }

          this.option.sp = 0;
          this.option.valueData = this.searchText;
          this.member.loadMember(this.option).then(function (result) {
            _this20.total_items = result.total_items;
            _this20.items = result.items;
            _this20.size_pagination = Math.round(Number(_this20.total_items) / Number(_this20.option.lp));
            _this20.cp = Number(_this20.option.sp) + 1;
          });
        } // click View User

      }, {
        key: "openMember",
        value: function openMember(item) {
          this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Information], {
            queryParams: {
              item: item
            }
          });
        } // Click Delete User

      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(_id) {
          var _this21 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'แจ้งเตือน',
            text: 'คุณต้องการจะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่, ลบเดี๋ยวนี้'
          }).then(function (result) {
            if (result.value) {
              _this21.member.deleteMember(_id).then(function () {
                _this21.alert.success('ข้อมูลดังกล่าวถูกลบเรียบร้อยแล้ว', 'Deleted!');

                _this21.option.valueData = null;
                _this21.option.sp = 0;

                _this21.onLoadMember();
              })["catch"](function (err) {
                _this21.alert.notify(err.message);
              });
            }
          });
        }
      }]);

      return MemberComponent;
    }();

    MemberComponent.ɵfac = function MemberComponent_Factory(t) {
      return new (t || MemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]));
    };

    MemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MemberComponent,
      selectors: [["app-member"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]])],
      decls: 30,
      vars: 4,
      consts: [[1, "row", "py-4"], [2, "display", "block", "width", "100%"], ["aria-hidden", "true", 1, "fa", "fa-id-card-o"], [1, "col-md-12", "my-3"], [1, "input-group"], ["id", "input2-group2", "name", "input2-group2", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C, \u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07, \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", "table-responsive-sm", "table-hover", "table-outline", "mb-0"], [1, "thead-light"], [1, "text-center"], [1, "icon-people"], [4, "ngFor", "ngForOf"], ["directionLinks", "true", "previousText", "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", "nextText", "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B", 3, "itemsPerPage", "ngModel", "totalItems", "pageChanged", "ngModelChange", 4, "ngIf"], [1, "avatar"], ["style", "max-width: 36px; height: 36px;", "class", "avatar-image avatar-image-member", "crop", "fit", 3, "public-id", "public-idChange", 4, "ngIf"], ["style", "max-width: 36px;", "class", "avatar-image avatar-image-member", "src", "../../../../assets/image/no-image.png", 4, "ngIf"], [1, "avatar-status", "badge-danger"], [1, "small", "text-muted"], [1, "clearfix"], [1, "float-left"], [1, "float-right"], [1, "text-muted"], ["max", "100", "type", "warning", "striped", "true", "animate", "true", 3, "value"], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["btnRadioGroup", "", 1, "btn-group"], ["btnRadio", "A", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-eye"], ["btnRadio", "B", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-pencil-square-o"], ["btnRadio", "C", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-trash"], ["crop", "fit", 1, "avatar-image", "avatar-image-member", 2, "max-width", "36px", "height", "36px", 3, "public-id", "public-idChange"], ["src", "../../../../assets/image/no-image.png", 1, "avatar-image", "avatar-image-member", 2, "max-width", "36px"], [1, "text-danger"], ["directionLinks", "true", "previousText", "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", "nextText", "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B", 3, "itemsPerPage", "ngModel", "totalItems", "pageChanged", "ngModelChange"]],
      template: function MemberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_Template_button_click_12_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \u0E04\u0E49\u0E19\u0E2B\u0E32 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "thead", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MemberComponent_tr_27_Template, 40, 14, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MemberComponent_pagination_29_Template, 1, 3, "pagination", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E34\u0E49\u0E19 ", ctx.total_items, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total_items);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressbarComponent"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_14__["CloudinaryImage"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_16__["DateAgoPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-member',
          templateUrl: './member.component.html',
          styleUrls: ['./member.component.css'],
          providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/components/quiz/quiz.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/authentication/components/quiz/quiz.component.ts ***!
    \******************************************************************/

  /*! exports provided: QuizComponent */

  /***/
  function srcAppAuthenticationComponentsQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/quiz.service */
    "./src/app/authentication/services/quiz.service.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["scrollMe"];

    function QuizComponent_div_21_span_7_button_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0E02\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuizComponent_div_21_span_7_input_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_21_span_7_input_6_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var sub_data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return sub_data_r8.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var j_r9 = ctx_r15.index;
        var sub_data_r8 = ctx_r15.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 ", j_r9 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", sub_data_r8.name);
      }
    }

    function QuizComponent_div_21_span_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_21_span_7_Template_input_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var j_r9 = ctx.index;

          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.choose($event, i_r4, j_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_21_span_7_button_5_Template, 3, 0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuizComponent_div_21_span_7_input_6_Template, 1, 2, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_data_r8 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_data_r8.correct);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_data_r8.correct == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.switchInput == 0);
      }
    }

    function QuizComponent_div_21_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_21_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onAddSubArticle(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuizComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_21_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var data_r3 = ctx.$implicit;
          return data_r3.question = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuizComponent_div_21_span_7_Template, 7, 3, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuizComponent_div_21_a_8_Template, 3, 0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r3.question);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.article[i_r4].answer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.switchInput == 0);
      }
    }

    function QuizComponent_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onAddArticle(ctx_r24.article.length - 1, "minus");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuizComponent_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_button_25_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/auth/menu"];
    };

    var QuizComponent = /*#__PURE__*/function () {
      function QuizComponent(alert, quiz) {
        var _this22 = this;

        _classCallCheck(this, QuizComponent);

        this.alert = alert;
        this.quiz = quiz;
        this.states = [{
          id: 1,
          name: 'Pre-test',
          _id: 'PRE-TEST'
        }];
        this.article = [];
        this.switchInput = 0;
        this.quiz.getAllChapter().then(function (result) {
          var data = _this22.states.concat(result.items);

          _this22.states = data;
        });
      }

      _createClass(QuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          this.selectedOption = event.item; // console.log(this.selectedOption.ref);
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }, {
        key: "onAddArticle",
        value: function onAddArticle(index, minus) {
          if (minus) {
            if (this.article.length > 1) {
              return this.article.pop();
            }
          }

          this.article.push({
            _id: index,
            question: ""
          });
        }
      }, {
        key: "onAddSubArticle",
        value: function onAddSubArticle(index, minus) {
          if (!this.article[index].answer) {
            this.article[index].answer = [{
              _id: index + 1,
              name: "",
              correct: 0
            }];
          } else {
            this.article[index].answer.push({
              _id: index + 1,
              name: "",
              correct: 0
            });
          }
        }
      }, {
        key: "onSwitchInput",
        value: function onSwitchInput() {
          if (this.switchInput == 0) {
            return this.switchInput = 1;
          }

          this.switchInput = 0;
        }
      }, {
        key: "choose",
        value: function choose(event, main, index) {
          if (this.stack_main == main) {
            this.article[main].answer[this.stack_index].correct = 0;
          }

          this.article[main].answer[index].correct = 1;
          this.stack_main = main;
          this.stack_index = index;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this23 = this;

          if (!this.selectedOption) {
            return this.alert.notify("กรุณาเลือก แบบฝึกหัด", "แจ้งเตือน", "warning");
          }

          var obj = {
            name: this.selectedOption.name,
            detail: this.selectedOption.region,
            choice: this.article,
            ref: this.selectedOption._id
          };
          this.quiz.addQuiz(obj).then(function (result) {
            _this23.alert.success(result.message);
          })["catch"](function (err) {
            _this23.alert.notify(err.message);
          });
        }
      }]);

      return QuizComponent;
    }();

    QuizComponent.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]));
    };

    QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      viewQuery: function QuizComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])],
      decls: 30,
      vars: 10,
      consts: [[1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "border-aqua", "border-bottom", "mb-4"], [1, "container"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], [1, "card", "mb-2"], [1, "card-header"], ["for", ""], ["typeaheadOptionsLimit", "5", "typeaheadOptionField", "name", "placeholder", "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48 1,2,3", "required", "", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadMinLength", "isAnimated", "ngModelChange", "typeaheadOnSelect"], [1, "card-body", "form-group"], ["type", "text", "placeholder", "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21", 1, "form-control", 2, "background-color", "rgb(245, 245, 245)", "border", "0px", "border-bottom", "1px thick darkgray"], ["class", "card my-4 text-black", "style", "border:1px solid rgb(90,156,255);border-left: 10px solid rgb(90, 156, 255);", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 2, "background-color", "rgb(90, 156, 255)", "border", "0px", "height", "100%", 3, "click"], ["class", "btn btn-info ml-1", "style", "background-color: rgb(165, 165, 165);border:0px;height: 100%;", 3, "click", 4, "ngIf"], ["class", "btn btn-info text-white", "style", "border:1px solid darkgreen;background-color: rgb(44, 194, 94);float: right;", 3, "click", 4, "ngIf"], [1, "border-top", "text-right", "my-2"], [1, "card", "my-4", "text-black", 2, "border", "1px solid rgb(90,156,255)", "border-left", "10px solid rgb(90, 156, 255)"], ["scrollMe", ""], [1, "row"], [1, "col-md-12", 2, "padding-left", "10"], ["type", "text", "placeholder", "\u0E04\u0E33\u0E16\u0E32\u0E21 ?", "required", "", 2, "display", "block", "width", "100%", "background-color", "rgba(0, 0, 0, 0)", "border", "0px", "border-bottom", "2px solid rgb(212, 212, 212)", "font-size", "xx-large", 3, "ngModel", "ngModelChange"], [1, "card-body"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "radio", "name", "data._id", "aria-label", "Radio button for following text input", 3, "value", "click"], ["class", "btn btn-blue text-white", 4, "ngIf"], ["type", "text", "class", "form-control", "aria-label", "Text input with radio button", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], [1, "btn", "btn-blue", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-hand-o-right"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [3, "click"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "ml-1", 2, "background-color", "rgb(165, 165, 165)", "border", "0px", "height", "100%", 3, "click"], ["aria-hidden", "true"], [1, "btn", "btn-info", "text-white", 2, "border", "1px solid darkgreen", "background-color", "rgb(44, 194, 94)", "float", "right", 3, "click"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0E40\u0E21\u0E19\u0E39\u0E2B\u0E25\u0E31\u0E01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E01\u0E48\u0E2D\u0E19-\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E2B\u0E23\u0E37\u0E2D \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E01\u0E48\u0E2D\u0E19-\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E2B\u0E23\u0E37\u0E2D \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E2D\u0E14\u0E04\u0E25\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E43\u0E0A\u0E49\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E19\u0E35\u0E49\u0E01\u0E31\u0E1A\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.selectedValue = $event;
          })("typeaheadOnSelect", function QuizComponent_Template_input_typeaheadOnSelect_18_listener($event) {
            return ctx.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuizComponent_div_21_Template, 9, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_Template_button_click_22_listener() {
            return ctx.onAddArticle(ctx.article.length);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuizComponent_button_24_Template, 3, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, QuizComponent_button_25_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E49\u0E2D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue)("typeahead", ctx.states)("typeaheadMinLength", 0)("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.article);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.article.length, " ");
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_3__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_6__["TypeaheadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quiz',
          templateUrl: './quiz.component.html',
          styleUrls: ['./quiz.component.css'],
          providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]]
        }]
      }], function () {
        return [{
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]
        }];
      }, {
        myScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollMe']
        }]
      });
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.item.name, " ");
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

    function ContentComponent_li_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_li_31_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.showPDF(ctx_r10.item.pdf.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.item.pdf.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r2.item.pdf.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function ContentComponent_li_32_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.item.youtube.title);
      }
    }

    function ContentComponent_li_32_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_li_32_li_3_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var i_r15 = ctx.index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r16.showYoutube(ctx_r16.item.youtube.video.url[i_r15]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r15 = ctx.index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.item.youtube.video.text[i_r15]);
      }
    }

    function ContentComponent_li_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentComponent_li_32_span_1_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContentComponent_li_32_li_3_Template, 3, 1, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.item.youtube.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.item.youtube.video.text);
      }
    }

    function ContentComponent_li_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.hypertext.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r4.item.hypertext.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function ContentComponent_button_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_button_34_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.startQuiz(ctx_r18.item._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContentComponent_button_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContentComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.url_pdf, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function ContentComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.url_youtube, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function ContentComponent_div_38_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r21 = ctx.$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r20.quiz_item.items[0]._id)("value", data_r21.point);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r21.answer);
      }
    }

    function ContentComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContentComponent_div_38_div_6_Template, 5, 3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_div_38_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 1 \u0E08\u0E32\u0E01 ", ctx_r9.quiz_item.total_items, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.quiz_item.items[0].question, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.quiz_item.items[0].choice);
      }
    }

    var _c0 = function _c0() {
      return ["/auth/resource"];
    };

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(activateRouter, resource, router, alert, quiz, sanitizer) {
        var _this24 = this;

        _classCallCheck(this, ContentComponent);

        this.activateRouter = activateRouter;
        this.resource = resource;
        this.router = router;
        this.alert = alert;
        this.quiz = quiz;
        this.sanitizer = sanitizer;
        this.isCollapsed = false;
        this.switch_display = 'PDF';
        this.activateRouter.queryParams.forEach(function (params) {
          _this24.chapter_id = params.item;
        });
        this.quiz.getChapterByID(this.chapter_id).then(function (result) {
          if (result.item.length > 0) {
            _this24.total_item = 1;
          }
        });
        this.resource.onShowOneChapter(this.chapter_id).then(function (result) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                      this.alert.something_wrong('เกิดข้อผิดพลาก');
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
        key: "showPDF",
        value: function showPDF(url) {
          console.log(url);
          var pdf;
          if (!url) return;

          if (url.substring(url.length - 5) == '/view') {
            pdf = url.substring(0, url.length - 4) + 'preview';
          } else {
            pdf = 'https://drive.google.com/file/d/' + url.substr(33) + '/preview';
          }

          if (this.isCollapsed == false) {
            this.isCollapsed = true;
          }

          try {
            this.url_pdf = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
          } catch (err) {
            this.alert.showWarning('เกิดข้อผิดพลาดกับลิงก์ PDF', err);
          }

          this.switch_display = 'PDF';
        }
      }, {
        key: "showYoutube",
        value: function showYoutube(url) {
          url = url.substring(32);

          if (this.isCollapsed == false) {
            this.isCollapsed = true;
          }

          this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/' + url);
          this.switch_display = 'youtube';
        }
      }, {
        key: "startQuiz",
        value: function startQuiz(id) {
          if (this.isCollapsed == false) {
            this.isCollapsed = true;
          } // this.quiz.getAllQuiz(id).then(result=>{
          //   this.quiz_item=result;
          // })


          this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Exercise], {
            queryParams: {
              id: id
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]])],
      decls: 39,
      vars: 15,
      consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 1, "col-md-5", "my-3", 3, "collapse", "isAnimated"], [1, "well", "well-lg", "card", "card-block", "card-header"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "mt-2", "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium", 2, "text-indent", "20px", "text-align", "justify"], [1, "col-md-7", "my-3"], [4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-seccondary", "disabled", "", 4, "ngIf"], ["class", "col-md-5", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [3, "click"], [3, "innerHtml"], [4, "ngFor", "ngForOf"], [1, "pointer", 3, "click"], [2, "max-width", "100%", 3, "innerHtml"], [1, "btn", "btn-primary", 3, "click"], ["disabled", "", 1, "btn", "btn-seccondary"], [1, "col-md-5"], ["width", "100%", "height", "480", 3, "src"], ["width", "100%", "height", "400px", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "avatar-image", 3, "src"], [1, "badge", "badge-dark", 2, "font-size", "smaller"], [1, "my-3", 2, "font-weight", "bold"], ["class", "input-group my-1", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "input-group", "my-1"], [1, "input-group-prepend", "pointer"], [1, "input-group-text"], ["type", "radio", "aria-label", "Radio button for following text input", 3, "name", "value"], ["type", "text", "readonly", "", "aria-label", "Text input with radio button", 1, "form-control", "pointer", 3, "value"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ol", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u0E23\u0E39\u0E49\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \u0E21\u0E35\u0E01\u0E34\u0E08\u0E19\u0E34\u0E2A\u0E31\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " \u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E15\u0E48\u0E2D\u0E1E\u0E48\u0E27\u0E07 \u0E2A\u0E37\u0E48\u0E2D\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ContentComponent_h1_29_Template, 2, 1, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ContentComponent_li_31_Template, 5, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ContentComponent_li_32_Template, 4, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ContentComponent_li_33_Template, 4, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ContentComponent_button_34_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ContentComponent_button_35_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ContentComponent_div_36_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ContentComponent_div_37_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ContentComponent_div_38_Template, 9, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.isCollapsed)("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.pdf.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.youtube.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.hypertext.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.total_item);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.total_item);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.url_pdf && ctx.isCollapsed && ctx.switch_display == "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.url_youtube && ctx.isCollapsed && ctx.switch_display == "youtube");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCollapsed == true && ctx.quiz_item);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]],
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
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResourceComponent_div_22_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var data_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.openContent(data_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");
      }
    }

    var ResourceComponent = /*#__PURE__*/function () {
      function ResourceComponent(router, resource) {
        var _this25 = this;

        _classCallCheck(this, ResourceComponent);

        this.router = router;
        this.resource = resource; // โหลดหน่วยที่

        this.resource.onShowAllChapter().then(function (result) {
          _this25.items = result.items;
        });
      }

      _createClass(ResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // load Menu Content

      }, {
        key: "openContent",
        value: function openContent(item) {
          this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Content], {
            queryParams: {
              item: item
            }
          });
        }
      }]);

      return ResourceComponent;
    }();

    ResourceComponent.ɵfac = function ResourceComponent_Factory(t) {
      return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]));
    };

    ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResourceComponent,
      selectors: [["app-resource"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])],
      decls: 23,
      vars: 1,
      consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-5"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "col-md-7"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "action-button", "shadow", "animate", "button-blue", 2, "text-decoration", "none", "width", "100%", 3, "click"]],
      template: function ResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u0E23\u0E39\u0E49\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0E21\u0E35\u0E17\u0E31\u0E01\u0E29\u0E30\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49\u0E44\u0E14\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u0E21\u0E35\u0E01\u0E34\u0E08\u0E19\u0E34\u0E2A\u0E31\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ResourceComponent_div_22_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
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
  "./src/app/authentication/components/sub-menu/sub-menu.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/authentication/components/sub-menu/sub-menu.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SubMenuComponent */

  /***/
  function srcAppAuthenticationComponentsSubMenuSubMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubMenuComponent", function () {
      return SubMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../share/components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/auth/quiz"];
    };

    var SubMenuComponent = /*#__PURE__*/function () {
      function SubMenuComponent() {
        _classCallCheck(this, SubMenuComponent);
      }

      _createClass(SubMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubMenuComponent;
    }();

    SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) {
      return new (t || SubMenuComponent)();
    };

    SubMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubMenuComponent,
      selectors: [["app-sub-menu"]],
      decls: 18,
      vars: 2,
      consts: [["aria-hidden", "true", 1, "fa", "fa-list"], [1, "d-flex", "justify-content-around", "pr-2", 2, "height", "160px"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-warning", "text-white"], [2, "color", "black"]],
      template: function SubMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E2D\u0E14\u0E04\u0E25\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19-\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E2B\u0E23\u0E37\u0E2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(\u0E22\u0E31\u0E07\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sub-menu',
          templateUrl: './sub-menu.component.html',
          styleUrls: ['./sub-menu.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/services/grade.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authentication/services/grade.service.ts ***!
    \**********************************************************/

  /*! exports provided: GradeService */

  /***/
  function srcAppAuthenticationServicesGradeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GradeService", function () {
      return GradeService;
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


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");

    var GradeService = /*#__PURE__*/function () {
      function GradeService(http, account) {
        _classCallCheck(this, GradeService);

        this.http = http;
        this.account = account;
      }

      _createClass(GradeService, [{
        key: "addScoreExercise",
        value: function addScoreExercise(model) {
          return this.http.requestPost('grade', model).toPromise();
        }
      }, {
        key: "getScoreExercise",
        value: function getScoreExercise(exercise) {
          return this.http.requestGet("grade/".concat(this.account.UserLogin._id, "/").concat(exercise)).toPromise();
        }
      }]);

      return GradeService;
    }();

    GradeService.ɵfac = function GradeService_Factory(t) {
      return new (t || GradeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    GradeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GradeService,
      factory: GradeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
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

    var LevelService = /*#__PURE__*/function () {
      function LevelService() {
        _classCallCheck(this, LevelService);
      } // คำนวณ Level


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
        } // คำนวณจาก % Level

      }, {
        key: "calExpLeftToNextLevel",
        value: function calExpLeftToNextLevel(exp) {
          var level;

          if (exp || exp == 0) {
            if (exp < 30) {
              level = exp * 100 / 29;
            } else if (exp < 50) {
              level = (exp - 30) * 100 / 19;
            } else if (exp < 100) {
              level = (exp - 50) * 100 / 49;
            } else if (exp < 130) {
              level = (exp - 100) * 100 / 29;
            } else if (exp < 150) {
              level = (exp - 130) * 100 / 19;
            } else if (exp < 200) {
              level = (exp - 150) * 100 / 49;
            } else if (exp < 230) {
              level = (exp - 200) * 100 / 29;
            } else if (exp < 250) {
              level = (exp - 230) * 100 / 19;
            } else if (exp < 300) {
              level = (exp - 250) * 100 / 49;
            } else if (exp < 330) {
              level = (exp - 300) * 100 / 29;
            } else if (exp < 350) {
              level = (exp - 330) * 100 / 19;
            } else if (exp < 400) {
              level = (exp - 350) * 100 / 49;
            } else if (exp < 430) {
              level = (exp - 400) * 100 / 29;
            } else if (exp < 450) {
              level = (exp - 430) * 100 / 19;
            } else if (exp < 500) {
              level = (exp - 450) * 100 / 49;
            } else if (exp < 530) {
              level = (exp - 500) * 100 / 29;
            } else if (exp < 550) {
              level = (exp - 530) * 100 / 19;
            } else if (exp < 600) {
              level = (exp - 650) * 100 / 49;
            } else if (exp < 630) {
              level = (exp - 600) * 100 / 29;
            } else if (exp < 650) {
              level = (exp - 630) * 100 / 19;
            } else if (exp < 700) {
              level = (exp - 650) * 100 / 49;
            } else if (exp < 730) {
              level = (exp - 700) * 100 / 29;
            } else if (exp < 750) {
              level = (exp - 730) * 100 / 19;
            } else if (exp < 800) {
              level = (exp - 750) * 100 / 49;
            } else if (exp < 830) {
              level = (exp - 800) * 100 / 29;
            } else if (exp < 850) {
              level = (exp - 830) * 100 / 19;
            } else if (exp < 900) {
              level = (exp - 850) * 100 / 49;
            } else if (exp < 930) {
              level = (exp - 900) * 100 / 29;
            } else if (exp < 950) {
              level = (exp - 930) * 100 / 19;
            } else if (exp < 1000) {
              level = (exp - 950) * 100 / 49;
            } else if (exp >= 1000) {
              level = 100;
            }
          }

          if (level == 100) {
            level = 99.99;
          }

          return Number(level); // return Number(level)/10;
        }
      }]);

      return LevelService;
    }();

    LevelService.ɵfac = function LevelService_Factory(t) {
      return new (t || LevelService)();
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
        return [];
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
        } // โหลดสมาชิก

      }, {
        key: "loadMember",
        value: function loadMember(option) {
          if (option.valueData) {
            return this.http.requestGet("user/search?sp=".concat(option.sp, "&lp=").concat(option.lp, "&search=").concat(option.valueData), this.authen.getAuthenticated()).toPromise();
          }

          return this.http.requestGet("user?sp=".concat(option.sp, "&lp=").concat(option.lp), this.authen.getAuthenticated()).toPromise();
        } // เพิ่มชั้นเรียน

      }, {
        key: "addClassroom",
        value: function addClassroom(model) {
          return this.http.requestPost('classroom', model).toPromise();
        }
      }, {
        key: "returnClassroom",
        value: function returnClassroom(model) {
          return this.http.requestGet("classroom/".concat(model), this.authen.getAuthenticated()).toPromise();
        } // ลบชั้นเรียน

      }, {
        key: "deleteClassroom",
        value: function deleteClassroom(id) {
          return this.http.requestDelete("classroom/".concat(id), this.authen.getAuthenticated()).toPromise();
        } // โหลดห้องเรียนทั้งหมด

      }, {
        key: "loadClassroom",
        value: function loadClassroom(option) {
          if (!option) return this.http.requestGet("classroom?sp=0&lp=10", this.authen.getAuthenticated()).toPromise();
          return this.http.requestGet("classroom?sp=".concat(option.sp, "&lp=").concat(option.lp), this.authen.getAuthenticated()).toPromise();
        } // โหลดสมาชิกในห้องเรียนทั้งหมด

      }, {
        key: "loadMemberFromClassroom",
        value: function loadMemberFromClassroom(model) {
          return this.http.requestGet("classroom/student/".concat(model), this.authen.getAuthenticated()).toPromise();
        }
      }, {
        key: "onChangePassword",
        value: function onChangePassword(model) {
          return this.http.requestPost('user/changePassword', model).toPromise();
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
      }, {
        key: "getAllChapter",
        value: function getAllChapter() {
          return this.http.requestGet('chapter', this.authen.getAuthenticated()).toPromise();
        }
      }, {
        key: "getChapterByID",
        value: function getChapterByID(_id) {
          return this.http.requestGet("chapter/".concat(_id), this.authen.getAuthenticated()).toPromise();
        }
      }, {
        key: "addQuiz",
        value: function addQuiz(model) {
          return this.http.requestPost("quiz/", model).toPromise();
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
      } // แสดงทุกแหล่งเรียนรู้


      _createClass(ResourceService, [{
        key: "onShowAllChapter",
        value: function onShowAllChapter() {
          return this.http.requestGet('chapter', this.authen.getAuthenticated()).toPromise();
        } // แสดงแหล่งเรียนรู้จาก ID

      }, {
        key: "onShowOneChapter",
        value: function onShowOneChapter(_id) {
          return this.http.requestGet("chapter/".concat(_id), this.authen.getAuthenticated()).toPromise();
        } // สร้างแหล่งเรียนรู้

      }, {
        key: "onCreateChapter",
        value: function onCreateChapter(model) {
          return this.http.requestPost("chapter", model).toPromise();
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/authentication/authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/authentication/services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");

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
      function SigninComponent(builder, alert, router, authen, account, activateRoute, member) {
        var _this26 = this;

        _classCallCheck(this, SigninComponent);

        this.builder = builder;
        this.alert = alert;
        this.router = router;
        this.authen = authen;
        this.account = account;
        this.activateRoute = activateRoute;
        this.member = member;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"]; //ย้อนกลับไปหน้า LOGIN กรณี Redirect

        this.activateRoute.params.forEach(function (params) {
          _this26.returnURL = params.returnURL || "/".concat(src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, "/").concat(src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Home);
        });
        this.redirectPage();
        this.alert.announce("อัพเดท &nbsp; <span style='color:orange'> 12 พค 2020, 14:28:51 PM</span>", '1) เพิ่มแหล่งเรียนรู้ได้ <br>2) แสดงผลแหล่งเรียนรู้ได้');
        this.createFormData();
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // สร้างฟอร์ม

      }, {
        key: "createFormData",
        value: function createFormData() {
          this.form = this.builder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        } // ฟังก์ชั่นเปลี่ยนหน้า ล๊อกอินสำเร็จ

      }, {
        key: "redirectPage",
        value: function redirectPage() {
          var data = this.authen.getAuthenticated();

          if (data) {
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Home]);
          }
        } // ปุ่มล๊อกอิน

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this27 = this;

          if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ถูกต้อง');
          }

          this.account.onLogin(this.form.value).then(function (res) {
            // เก็บ AccessToken
            _this27.authen.setAuthenticated(res.accessToken);

            _this27.alert.success('ยินดีต้อนรับเข้าสู่ระบบ');

            _this27.account.getUserLogin(_this27.authen.getAuthenticated());

            _this27.router.navigateByUrl(_this27.returnURL);
          })["catch"](function (err) {
            console.log(err);

            _this27.alert.notify(err.Message);
          });
        }
      }, {
        key: "onChangePassword",
        value: function onChangePassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this28 = this;

            var Time, data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    Time = 9000;
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                      input: 'text',
                      confirmButtonText: 'Next &rarr;',
                      showCancelButton: true,
                      progressSteps: ['1', '2', '3'],
                      // timer: timer,
                      timerProgressBar: true
                    }).queue([{
                      title: 'เปลี่ยนรหัสผ่าน',
                      text: 'กรุรณากรอกยูซเซอร์เนม'
                    }, {
                      title: 'เปลี่ยนรหัสผ่าน',
                      text: 'กรุณากรอกรหัสผ่านเดิม'
                    }, {
                      title: 'เปลี่ยนรหัสผ่าน',
                      text: 'กรุณากรอกรหัสผ่านใหม่'
                    }]).then(function (result) {
                      if (result.value) {
                        var answers = JSON.stringify(result.value); // this.email = answers;
                        // this.email = this.email.substring(1,this.email.length-1);

                        var username = result.value[0];
                        var old_pass = result.value[1];
                        var new_pass = result.value[2];
                        var obj = {
                          username: username,
                          old_password: old_pass,
                          new_password: new_pass
                        };

                        _this28.member.onChangePassword(obj).then(function () {
                          _this28.alert.success("แก้ไขรหัสผ่านเรียบร้อยแล้ว!");
                        })["catch"](function (err) {
                          _this28.alert.success(err);
                        }); // return answers;

                      }
                    }); // var data = this.alert.showChangePassword()
                    // console.log(data[0]);
                    // console.log(data[1]);
                    // console.log(data[2]);
                    // setTimeout(()=> {
                    //     if(this.alert.email){
                    //         this.member.onForgetPassword({email : this.alert.email})
                    //         .then(result=>{
                    //             this.alert.notify(result.message,"ลืมรหัสผ่าน","success");
                    //         })
                    //         .catch(err=>{
                    //             console.log(err)
                    //             this.alert.notify(err.Message);
                    //         })
                    //     }
                    // }, Time)

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]])],
      decls: 51,
      vars: 9,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app", "sidebar-mini", "rtl"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "username", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"], [3, "routerLink"], [3, "click"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "main", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "PBLGPS-LMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_33_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Username :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Password :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_48_listener() {
            return ctx.onChangePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.css'],
          providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__["AuthenService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]
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


    var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/authentication/services/member.service */
    "./src/app/authentication/services/member.service.ts");
    /* harmony import */


    var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/share/services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/share/services/account.service */
    "./src/app/share/services/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/share/services/validator.service */
    "./src/app/share/services/validator.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");

    function SignupComponent_img_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 36);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

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
      function SignupComponent(builder, alert, account, router, validator, member_service) {
        var _this29 = this;

        _classCallCheck(this, SignupComponent);

        this.builder = builder;
        this.alert = alert;
        this.account = account;
        this.router = router;
        this.validator = validator;
        this.member_service = member_service;
        this.selectedFile = null;
        this.year = new Date().getFullYear() + 543;
        this.createFormData();
        this.member_service.loadClassroom().then(function (result) {
          _this29.states = result.items;
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          this.selectedOption = event.item;
        } // สร้างฟอร์ม

      }, {
        key: "createFormData",
        value: function createFormData() {
          this.form = this.builder.group({
            sid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validator.isPassword]],
            // c_password: ['',[Validators.required, this.validator.comparePassword('password')]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "class": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: ['']
          });
        } // ปุ่มแก้ไข

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this30 = this;

          if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ครบถ้วน!');
          }

          var formdata = new FormData();
          var public_id;

          if (this.image) {
            formdata.append('file', this.selectedFile);
            this.account.onUploadImage(formdata).then(function (result) {
              public_id = result.public_id;
              var obj = _this30.form.value;
              obj.image = public_id;
              obj["class"] = _this30.selectedOption._id;
              setTimeout(function () {
                _this30.account.onRegister(obj).then(function (result) {
                  _this30.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');

                  setTimeout(function () {
                    _this30.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
                  }, 400);
                });
              }, 1000);
            });
            return;
          }

          var obj = this.form.value;
          obj["class"] = this.selectedOption._id;
          this.account.onRegister(obj).then(function () {
            _this30.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');

            setTimeout(function () {
              //<<<---    using ()=> syntax
              _this30.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
            }, 1500);
          });
        } // เลือกไฟล์

      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this31 = this;

          this.selectedFile = event.target.files[0];
          var reader = new FileReader();

          reader.onload = function (event) {
            _this31.image = event.target.result;
          };

          reader.readAsDataURL(event.target.files[0]);
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]])],
      decls: 74,
      vars: 12,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [1, "col-md-12", "text-center"], ["class", "avatar-image my-2 mx-auto", "style", "max-height: 180px;", 3, "src", 4, "ngIf"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "firstname", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", 1, "form-control"], ["formControlName", "lastname", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", 1, "form-control"], ["formControlName", "username", "placeholder", "\u0E22\u0E39\u0E0B\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E21", 1, "form-control"], ["formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", "type", "password", 1, "form-control"], ["formControlName", "phone", "placeholder", "09x-xxx-xxxx", 1, "form-control"], ["formControlName", "email", "placeholder", "email@email.com", 1, "form-control"], ["formControlName", "class", "typeaheadOptionsLimit", "5", "typeaheadOptionField", "name", "placeholder", "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48 1,2,3", "required", "", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadMinLength", "isAnimated", "ngModelChange", "typeaheadOnSelect"], ["type", "file", "formControlName", "image", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"], [1, "avatar-image", "my-2", "mx-auto", 2, "max-height", "180px", 3, "src"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "main", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Create your account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, SignupComponent_img_33_Template, 1, 1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_34_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0E22\u0E39\u0E0B\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E21 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_66_listener($event) {
            return ctx.selectedValue = $event;
          })("typeaheadOnSelect", function SignupComponent_Template_input_typeaheadOnSelect_66_listener($event) {
            return ctx.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SignupComponent_Template_input_change_70_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedValue)("typeahead", ctx.states)("typeaheadMinLength", 0)("isAnimated", true);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__["TypeaheadDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    SignupComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SignupComponent,
      factory: SignupComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css'],
          providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorsService"]
        }, {
          type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.address = 'https://backend-pblgps.herokuapp.com/';
      } // private address : string = "http://localhost:3000/"
      //Request GET method


      _createClass(HttpService, [{
        key: "requestGet",
        value: function requestGet(url, accessToken) {
          var _this32 = this;

          return this.http.get("".concat(this.address).concat(url), {
            headers: this.appendHeaders(accessToken)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return _this32.handelError(err);
          }));
        } // ส่งข้อมูลแบบ Post method

      }, {
        key: "requestPost",
        value: function requestPost(url, body) {
          var _this33 = this;

          return this.http.post("".concat(this.address).concat(url), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return _this33.handelError(err);
          }));
        } //Request Patch method

      }, {
        key: "requestPatch",
        value: function requestPatch(url, accessToken, model) {
          var _this34 = this;

          return this.http.patch("".concat(this.address).concat(url), model, {
            headers: this.appendHeaders(accessToken)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return _this34.handelError(err);
          }));
        } //Request Delete method

      }, {
        key: "requestDelete",
        value: function requestDelete(url, accessToken) {
          var _this35 = this;

          return this.http["delete"]("".concat(this.address).concat(url), {
            headers: this.appendHeaders(accessToken)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return _this35.handelError(err);
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
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers);
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
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
  "./src/app/services/pipes/youtube.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/services/pipes/youtube.pipe.ts ***!
    \************************************************/

  /*! exports provided: Youtube */

  /***/
  function srcAppServicesPipesYoutubePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Youtube", function () {
      return Youtube;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * Generated class for the Youtube pipe.
     *
     * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
     * Angular Pipes.
     */


    var Youtube = /*#__PURE__*/function () {
      function Youtube(dom) {
        _classCallCheck(this, Youtube);

        this.dom = dom;
      }

      _createClass(Youtube, [{
        key: "transform",
        value: function transform(value, args) {
          return this.dom.bypassSecurityTrustHtml(value);
        }
      }]);

      return Youtube;
    }();

    Youtube.ɵfac = function Youtube_Factory(t) {
      return new (t || Youtube)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    Youtube.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "youtube",
      type: Youtube,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Youtube, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'youtube'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
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
        value: function ngOnInit() {} // load user login

      }, {
        key: "initialLoadUserLogin",
        value: function initialLoadUserLogin() {
          var _this36 = this;

          var data = this.authen.getAuthenticated();

          if (!data) {
            return;
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (userLogin) {
            _this36.UserLogin = userLogin;
          })["catch"](function (err) {
            _this36.alert.notify(err.message);

            _this36.authen.clearAuthenticated();

            _this36.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
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


    var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.url */
    "./src/app/app.url.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authentication/authentication.url */
    "./src/app/authentication/authentication.url.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/account.service */
    "./src/app/share/services/account.service.ts");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E14\u0E48\u0E32\u0E19");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "(STAGE) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "(QUEST)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "(QUIZ)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "(RESOURCE)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E19\u0E33");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "(LEADERBOARD)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "(INFORMATION)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0E41\u0E19\u0E30\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "(GUIDE)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
      }
    }

    var _c4 = function _c4() {
      return ["/auth/member"];
    };

    var _c5 = function _c5() {
      return ["/auth/manage-resource"];
    };

    var _c6 = function _c6() {
      return ["/auth/menu"];
    };

    var _c7 = function _c7() {
      return ["/auth/classroom"];
    };

    function NavBarComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c7));
      }
    }

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(router, alert, authen, account) {
        _classCallCheck(this, NavBarComponent);

        this.router = router;
        this.alert = alert;
        this.authen = authen;
        this.account = account;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"];
        this.UserLogin = {};
        this.initialLoadUserLogin();
        this.UserLogin = this.account.UserLogin;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // โหลด User Login

      }, {
        key: "initialLoadUserLogin",
        value: function initialLoadUserLogin() {
          var _this37 = this;

          var data = this.authen.getAuthenticated();

          if (!data) {
            return;
          }

          this.account.getUserLogin(this.authen.getAuthenticated()).then(function (userLogin) {
            _this37.UserLogin = userLogin;
            _this37.login = 1;
          })["catch"](function (err) {
            _this37.alert.notify(err.message);

            _this37.authen.clearAuthenticated();

            _this37.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
          });
        } // ออกจากระบบ

      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authen.clearAuthenticated();
          this.account.onLogout();
          this.login = null;
          this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 20,
      vars: 2,
      consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [1, "app-nav"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", "aria-label", "Open Profile Menu", 1, "app-nav__item"], [1, "fa", "fa-sort-desc", "fa-lg"], [1, "dropdown-menu", "settings-menu", "dropdown-menu-right"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out", "fa-lg"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav text-center", 4, "ngIf"], [1, "navbar-nav", "text-center"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home", "fa-lg"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4"], [1, "sr-only"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4", 3, "routerLink"], ["href", "#", 1, "nav-item", "nav-link", "px-4"], [1, "fa", "fa-address-card"], [1, "fa", "fa-graduation-cap"], [1, "fa", "fa-newspaper-o"], [1, "fa", "fa-address-book-o"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_9_listener() {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nav", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavBarComponent_div_18_Template, 35, 8, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NavBarComponent_div_19_Template, 21, 10, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "student");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "admin");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
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
          this.UserLogin.email = UserLogin.email;
          this.UserLogin.phone = UserLogin.phone;
          this.UserLogin.firstname = UserLogin.firstname;
          this.UserLogin.lastname = UserLogin.lastname;
          this.UserLogin.username = UserLogin.username;
          this.UserLogin.password = UserLogin.password;

          if (UserLogin.image) {
            this.UserLogin.image = UserLogin.image;
          }

          this.UserLogin.sid = UserLogin.sid;
          this.UserLogin.role = UserLogin.role;
          this.UserLogin.exp = UserLogin.exp;
          this.UserLogin["class"] = UserLogin["class"]; // console.log(this.UserLogin);

          return this.UserLogin;
        } // เซตค่า UserLogin

      }, {
        key: "getUserLogin",
        value: function getUserLogin(accessToken) {
          var _this38 = this;

          return this.http.requestGet('user/data', accessToken).toPromise().then(function (result) {
            return _this38.setUserLogin(result);
          });
        } // ข้อมูล User จาก _id

      }, {
        key: "getUserByID",
        value: function getUserByID(_id, accessToken) {
          return this.http.requestGet("user/userid/".concat(_id), accessToken).toPromise();
        } // ล๊อกอิน

      }, {
        key: "onLogin",
        value: function onLogin(model) {
          return this.http.requestPost('user/login', model).toPromise();
        } // ล๊อกเอาท์

      }, {
        key: "onLogout",
        value: function onLogout() {
          this.alert.notify('ขอบคุณที่ใช้งาน');
        } // สมัครสมาชิก

      }, {
        key: "onRegister",
        value: function onRegister(model) {
          console.log(model);
          return this.http.requestPost('user/signup', model).toPromise();
        } // อัพโหลดรูปภาพ

      }, {
        key: "onUploadImage",
        value: function onUploadImage(model) {
          return this.http.requestPost('user/uploadImage', model).toPromise();
        } // เปลี่ยนรหัสผ่าน

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


    var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! sweetalert2/src/sweetalert2.scss */
    "./node_modules/sweetalert2/src/sweetalert2.scss");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);

    var AlertService = /*#__PURE__*/function () {
      function AlertService() {
        _classCallCheck(this, AlertService);
      } // แจ้งเตือนปกติ


      _createClass(AlertService, [{
        key: "notify",
        value: function notify(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error!';
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'error';
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: 'ยืนยัน',
            timer: 1500,
            timerProgressBar: true
          });
        } // แก้ไขข้อมูลสำเร็จ

      }, {
        key: "success",
        value: function success(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Success!';
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: type,
            timer: 1500,
            timerProgressBar: true
          });
        } // เกิด error

      }, {
        key: "something_wrong",
        value: function something_wrong() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';
          this.notify(message);
        } // แสดงผลคะแนน

      }, {
        key: "showScore",
        value: function showScore() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No data';
          var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var timerInterval;
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            html: 'Your score is ' + score,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            onClose: function onClose() {
              clearInterval(timerInterval);
            }
          }).then(function (result) {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
        } // ตัดสินใจ yes or no

      }, {
        key: "showWarning",
        value: function showWarning() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'คำเตือน';
          var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง';
          var confirmButtonText = arguments.length > 2 ? arguments[2] : undefined;
          var cancelButtonText = arguments.length > 3 ? arguments[3] : undefined;
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: text,
            icon: 'danger',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
          }).then(function (result) {
            if (result.value) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your file has been deleted.', 'info');
            }
          });
        } // ฟังก์ชันประกาศมี timelap

      }, {
        key: "announce",
        value: function announce() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'หัวข้อ';
          var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ข้อความ';
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/share/services/alert.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/member.service */
    "./src/app/share/services/member.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/validator.service */
    "./src/app/share/services/validator.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/share/components/footer/footer.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/share/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/auth-content/auth-content.component */
    "./src/app/share/components/auth-content/auth-content.component.ts");

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
      providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedsModule, {
        declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]],
          providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"]]
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
    /*! D:\ketar\PBLGPS_Hero-1\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!**********************!*\
    !*** zlib (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** http (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!***********************!*\
    !*** https (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!*********************!*\
    !*** url (ignored) ***!
    \*********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map