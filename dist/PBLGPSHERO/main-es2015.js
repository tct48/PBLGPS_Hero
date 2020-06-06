(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": "./src/app/authentication/authentication.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
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
        this.title = 'PBLGPS-HERO';
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
                styleUrls: ['./app.component.css'],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share/shareds.module */ "./src/app/share/shareds.module.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/sortable/fesm2015/ngx-bootstrap-sortable.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/haha/haha.component */ "./src/app/components/haha/haha.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./authentication/components/home/home.component */ "./src/app/authentication/components/home/home.component.ts");
/* harmony import */ var _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./authentication/components/member/member.component */ "./src/app/authentication/components/member/member.component.ts");
/* harmony import */ var _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./authentication/components/resource/resource.component */ "./src/app/authentication/components/resource/resource.component.ts");
/* harmony import */ var _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./authentication/components/resource/content/content.component */ "./src/app/authentication/components/resource/content/content.component.ts");
/* harmony import */ var _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./authentication/components/leaderboard/leaderboard.component */ "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./authentication/components/information/information.component */ "./src/app/authentication/components/information/information.component.ts");
/* harmony import */ var _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./authentication/components/manage-resource/manage-resource.component */ "./src/app/authentication/components/manage-resource/manage-resource.component.ts");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");
/* harmony import */ var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/pipes/date-ago.pipe */ "./src/app/services/pipes/date-ago.pipe.ts");
/* harmony import */ var _services_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/pipes/youtube.pipe */ "./src/app/services/pipes/youtube.pipe.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _authentication_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./authentication/components/quiz/quiz.component */ "./src/app/authentication/components/quiz/quiz.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _authentication_components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./authentication/components/exercise/exercise.component */ "./src/app/authentication/components/exercise/exercise.component.ts");
/* harmony import */ var _authentication_components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./authentication/components/sub-menu/sub-menu.component */ "./src/app/authentication/components/sub-menu/sub-menu.component.ts");
/* harmony import */ var _authentication_components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./authentication/components/member/classroom/classroom.component */ "./src/app/authentication/components/member/classroom/classroom.component.ts");
/* harmony import */ var _authentication_components_member_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./authentication/components/member/attendence/attendence.component */ "./src/app/authentication/components/member/attendence/attendence.component.ts");
/* harmony import */ var _authentication_components_quiz_prps_quiz_prps_quiz_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./authentication/components/quiz/prps-quiz/prps-quiz.component */ "./src/app/authentication/components/quiz/prps-quiz/prps-quiz.component.ts");
/* harmony import */ var _authentication_components_exercise_exercise_prps_exercise_prps_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./authentication/components/exercise/exercise-prps/exercise-prps.component */ "./src/app/authentication/components/exercise/exercise-prps/exercise-prps.component.ts");
/* harmony import */ var _authentication_components_quiz_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./authentication/components/quiz/dynamic-form/dynamic-form.component */ "./src/app/authentication/components/quiz/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _authentication_components_member_guild_guild_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./authentication/components/member/guild/guild.component */ "./src/app/authentication/components/member/guild/guild.component.ts");
/* harmony import */ var _authentication_components_member_guild_create_create_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./authentication/components/member/guild/create/create.component */ "./src/app/authentication/components/member/guild/create/create.component.ts");
/* harmony import */ var _authentication_components_stage_stage_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./authentication/components/stage/stage.component */ "./src/app/authentication/components/stage/stage.component.ts");
/* harmony import */ var _authentication_components_exercise_exercise_stage_exercise_stage_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./authentication/components/exercise/exercise-stage/exercise-stage.component */ "./src/app/authentication/components/exercise/exercise-stage/exercise-stage.component.ts");
/* harmony import */ var _authentication_components_quest_quest_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./authentication/components/quest/quest.component */ "./src/app/authentication/components/quest/quest.component.ts");
/* harmony import */ var _authentication_components_quizgame_quizgame_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./authentication/components/quizgame/quizgame.component */ "./src/app/authentication/components/quizgame/quizgame.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
// common



// module














// component














// pipe































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_33__["AuthenticationModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
            ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_14__["SortableModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_34__["TypeaheadModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
            _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_30__["CloudinaryModule"].forRoot({ Cloudinary: cloudinary_core__WEBPACK_IMPORTED_MODULE_17__["Cloudinary"] }, {
                cloud_name: 'hgflnfcwf',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_services_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_32__["Youtube"],
        _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_31__["DateAgoPipe"],
        _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
        _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
        _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_19__["HahaComponent"],
        _authentication_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_35__["QuizComponent"],
        _authentication_components_quest_quest_component__WEBPACK_IMPORTED_MODULE_48__["QuestComponent"],
        _authentication_components_stage_stage_component__WEBPACK_IMPORTED_MODULE_46__["StageComponent"],
        _authentication_components_member_guild_guild_component__WEBPACK_IMPORTED_MODULE_44__["GuildComponent"],
        _authentication_components_member_guild_create_create_component__WEBPACK_IMPORTED_MODULE_45__["CreateComponent"],
        _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_24__["MemberComponent"],
        _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
        _authentication_components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_38__["SubMenuComponent"],
        _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_26__["ContentComponent"],
        _authentication_components_quizgame_quizgame_component__WEBPACK_IMPORTED_MODULE_49__["QuizgameComponent"],
        _authentication_components_quiz_prps_quiz_prps_quiz_component__WEBPACK_IMPORTED_MODULE_41__["PrpsQuizComponent"],
        _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_25__["ResourceComponent"],
        _authentication_components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_37__["ExerciseComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__["HomepageComponent"],
        _authentication_components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_39__["ClassroomComponent"],
        _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_28__["InformationComponent"],
        _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_27__["LeaderboardComponent"],
        _authentication_components_quiz_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_43__["DynamicFormComponent"],
        _authentication_components_exercise_exercise_prps_exercise_prps_component__WEBPACK_IMPORTED_MODULE_42__["ExercisePrpsComponent"],
        _authentication_components_member_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_40__["AttendenceComponent"],
        _authentication_components_exercise_exercise_stage_exercise_stage_component__WEBPACK_IMPORTED_MODULE_47__["ExerciseStageComponent"],
        _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_29__["ManageResourceComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_50__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_33__["AuthenticationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_14__["SortableModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_34__["TypeaheadModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_30__["CloudinaryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _services_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_32__["Youtube"],
                    _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_31__["DateAgoPipe"],
                    _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                    _authentication_components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                    _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_19__["HahaComponent"],
                    _authentication_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_35__["QuizComponent"],
                    _authentication_components_quest_quest_component__WEBPACK_IMPORTED_MODULE_48__["QuestComponent"],
                    _authentication_components_stage_stage_component__WEBPACK_IMPORTED_MODULE_46__["StageComponent"],
                    _authentication_components_member_guild_guild_component__WEBPACK_IMPORTED_MODULE_44__["GuildComponent"],
                    _authentication_components_member_guild_create_create_component__WEBPACK_IMPORTED_MODULE_45__["CreateComponent"],
                    _authentication_components_member_member_component__WEBPACK_IMPORTED_MODULE_24__["MemberComponent"],
                    _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                    _authentication_components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_38__["SubMenuComponent"],
                    _authentication_components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_26__["ContentComponent"],
                    _authentication_components_quizgame_quizgame_component__WEBPACK_IMPORTED_MODULE_49__["QuizgameComponent"],
                    _authentication_components_quiz_prps_quiz_prps_quiz_component__WEBPACK_IMPORTED_MODULE_41__["PrpsQuizComponent"],
                    _authentication_components_resource_resource_component__WEBPACK_IMPORTED_MODULE_25__["ResourceComponent"],
                    _authentication_components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_37__["ExerciseComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__["HomepageComponent"],
                    _authentication_components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_39__["ClassroomComponent"],
                    _authentication_components_information_information_component__WEBPACK_IMPORTED_MODULE_28__["InformationComponent"],
                    _authentication_components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_27__["LeaderboardComponent"],
                    _authentication_components_quiz_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_43__["DynamicFormComponent"],
                    _authentication_components_exercise_exercise_prps_exercise_prps_component__WEBPACK_IMPORTED_MODULE_42__["ExercisePrpsComponent"],
                    _authentication_components_member_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_40__["AttendenceComponent"],
                    _authentication_components_exercise_exercise_stage_exercise_stage_component__WEBPACK_IMPORTED_MODULE_47__["ExerciseStageComponent"],
                    _authentication_components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_29__["ManageResourceComponent"],
                ],
                imports: [
                    _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _share_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_33__["AuthenticationModule"],
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
                    ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_14__["SortableModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_34__["TypeaheadModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                    _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_30__["CloudinaryModule"].forRoot({ Cloudinary: cloudinary_core__WEBPACK_IMPORTED_MODULE_17__["Cloudinary"] }, {
                        cloud_name: 'hgflnfcwf',
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]],
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
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/haha/haha.component */ "./src/app/components/haha/haha.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");






const RouterLists = [
    { path: '', redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login, pathMatch: 'full' },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login, component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Home, component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Register, component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Haha, component: _components_haha_haha_component__WEBPACK_IMPORTED_MODULE_2__["HahaComponent"] },
    {
        path: _app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen,
        loadChildren: './authentication/authentication.module#AuthenticationModule',
    },
];
const AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(RouterLists);


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
    Haha: 'haha',
    Authen: 'auth',
    Login: 'signin',
    Home: 'homepage',
    Register: 'signup',
};


/***/ }),

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
/* harmony import */ var _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/shareds.module */ "./src/app/share/shareds.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthenticationModule {
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__["SharedsModule"],
            _authentication_routing__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__["SharedsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _share_shareds_module__WEBPACK_IMPORTED_MODULE_3__["SharedsModule"],
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
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/authentication/components/home/home.component.ts");
/* harmony import */ var _components_member_member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/member/member.component */ "./src/app/authentication/components/member/member.component.ts");
/* harmony import */ var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resource/resource.component */ "./src/app/authentication/components/resource/resource.component.ts");
/* harmony import */ var _components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/resource/content/content.component */ "./src/app/authentication/components/resource/content/content.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/authentication/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _components_information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/information/information.component */ "./src/app/authentication/components/information/information.component.ts");
/* harmony import */ var _components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manage-resource/manage-resource.component */ "./src/app/authentication/components/manage-resource/manage-resource.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/authentication/components/quiz/quiz.component.ts");
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.url */ "./src/app/app.url.ts");
/* harmony import */ var _components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/exercise/exercise.component */ "./src/app/authentication/components/exercise/exercise.component.ts");
/* harmony import */ var _components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sub-menu/sub-menu.component */ "./src/app/authentication/components/sub-menu/sub-menu.component.ts");
/* harmony import */ var _components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/member/classroom/classroom.component */ "./src/app/authentication/components/member/classroom/classroom.component.ts");
/* harmony import */ var _components_member_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/member/attendence/attendence.component */ "./src/app/authentication/components/member/attendence/attendence.component.ts");
/* harmony import */ var _components_quiz_prps_quiz_prps_quiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/quiz/prps-quiz/prps-quiz.component */ "./src/app/authentication/components/quiz/prps-quiz/prps-quiz.component.ts");
/* harmony import */ var _components_exercise_exercise_prps_exercise_prps_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/exercise/exercise-prps/exercise-prps.component */ "./src/app/authentication/components/exercise/exercise-prps/exercise-prps.component.ts");
/* harmony import */ var _components_member_guild_guild_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/member/guild/guild.component */ "./src/app/authentication/components/member/guild/guild.component.ts");
/* harmony import */ var _components_member_guild_create_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/member/guild/create/create.component */ "./src/app/authentication/components/member/guild/create/create.component.ts");
/* harmony import */ var _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/stage/stage.component */ "./src/app/authentication/components/stage/stage.component.ts");
/* harmony import */ var _components_exercise_exercise_stage_exercise_stage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/exercise/exercise-stage/exercise-stage.component */ "./src/app/authentication/components/exercise/exercise-stage/exercise-stage.component.ts");
/* harmony import */ var _components_quest_quest_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/quest/quest.component */ "./src/app/authentication/components/quest/quest.component.ts");
/* harmony import */ var _components_quizgame_quizgame_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/quizgame/quizgame.component */ "./src/app/authentication/components/quizgame/quizgame.component.ts");























const RouterLists = [
    { path: '', redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_10__["AppURL"].Login, pathMatch: 'full' },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Home, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Leaderboard, component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__["LeaderboardComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Information, component: _components_information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Resource, component: _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_4__["ResourceComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Content, component: _components_resource_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Member, component: _components_member_member_component__WEBPACK_IMPORTED_MODULE_3__["MemberComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Quiz, component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__["QuizComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].ManageResource, component: _components_manage_resource_manage_resource_component__WEBPACK_IMPORTED_MODULE_8__["ManageResourceComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Exercise, component: _components_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_11__["ExerciseComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Menu, component: _components_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_12__["SubMenuComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Classroom, component: _components_member_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_13__["ClassroomComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Attendence, component: _components_member_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_14__["AttendenceComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].QuizPrPs, component: _components_quiz_prps_quiz_prps_quiz_component__WEBPACK_IMPORTED_MODULE_15__["PrpsQuizComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].ExercisePrps, component: _components_exercise_exercise_prps_exercise_prps_component__WEBPACK_IMPORTED_MODULE_16__["ExercisePrpsComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Guild, component: _components_member_guild_guild_component__WEBPACK_IMPORTED_MODULE_17__["GuildComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].CreateGroup, component: _components_member_guild_create_create_component__WEBPACK_IMPORTED_MODULE_18__["CreateComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Stage, component: _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_19__["StageComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].ExerciseStage, component: _components_exercise_exercise_stage_exercise_stage_component__WEBPACK_IMPORTED_MODULE_20__["ExerciseStageComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].Quest, component: _components_quest_quest_component__WEBPACK_IMPORTED_MODULE_21__["QuestComponent"] },
    { path: _authentication_url__WEBPACK_IMPORTED_MODULE_0__["AuthURL"].QuizGame, component: _components_quizgame_quizgame_component__WEBPACK_IMPORTED_MODULE_22__["QuizgameComponent"] }
    // { path: AuthURL.Signin , component:SigninComponent }
];
const AuthenticationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(RouterLists);


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
    Classroom: 'classroom',
    Attendence: 'attendence',
    Guild: 'guild',
    QuizPrPs: 'prps-test',
    ExercisePrps: 'exercise-prps',
    CreateGroup: 'group-create',
    Stage: 'stage',
    ExerciseStage: 'exercise-stage',
    Quest: 'quest',
    QuizGame: 'Quiz'
};


/***/ }),

/***/ "./src/app/authentication/components/exercise/exercise-prps/exercise-prps.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/authentication/components/exercise/exercise-prps/exercise-prps.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExercisePrpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisePrpsComponent", function() { return ExercisePrpsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/services/quiz.service */ "./src/app/authentication/services/quiz.service.ts");
/* harmony import */ var src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
















function ExercisePrpsComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.items[ctx_r0.progress_page].situation, " ");
} }
function ExercisePrpsComponent_div_18_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6);
} }
function ExercisePrpsComponent_div_18_div_1_div_5_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExercisePrpsComponent_div_18_div_1_div_5_input_3_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const sub_data_r11 = ctx_r16.$implicit; const x_r12 = ctx_r16.index; const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.choose(sub_data_r11[b_r7].score, b_r7, x_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r13.onSelect(b_r7, x_r12));
} }
function ExercisePrpsComponent_div_18_div_1_div_5_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExercisePrpsComponent_div_18_div_1_div_5_input_4_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const sub_data_r11 = ctx_r22.$implicit; const x_r12 = ctx_r22.index; const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.choose(sub_data_r11[x_r12].score, ctx_r21.progress_page * 4 + b_r7, x_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r14.onSelect(ctx_r14.progress_page * 4 + b_r7, x_r12));
} }
function ExercisePrpsComponent_div_18_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExercisePrpsComponent_div_18_div_1_div_5_input_3_Template, 1, 1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExercisePrpsComponent_div_18_div_1_div_5_input_4_Template, 1, 1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_data_r11 = ctx.$implicit;
    const x_r12 = ctx.index;
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.progress_page == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.progress_page > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("name", "[", b_r7, "][", x_r12, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_data_r11[x_r12].name);
} }
function ExercisePrpsComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExercisePrpsComponent_div_18_div_1_p_3_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExercisePrpsComponent_div_18_div_1_div_5_Template, 6, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question: ", b_r7 + 1, " (1 point)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.items[ctx_r5.progress_page].answers);
} }
function ExercisePrpsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExercisePrpsComponent_div_18_div_1_Template, 6, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items[ctx_r1.progress_page].questions);
} }
function ExercisePrpsComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E17\u0E33\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExercisePrpsComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExercisePrpsComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExercisePrpsComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExercisePrpsComponent {
    constructor(activateRouter, quiz, alert, account, grade, router, level) {
        this.activateRouter = activateRouter;
        this.quiz = quiz;
        this.alert = alert;
        this.account = account;
        this.grade = grade;
        this.router = router;
        this.level = level;
        this.your_answer = [];
        this.page = 1;
        this.progress_page = 0;
        this.progress_length = 0;
        this.your_score = 0;
        this.section = 0;
        this.sub_section = 0;
        this.format = ['1', '2', '3', '4'];
        this.activateRouter.queryParams.forEach((params) => {
            this._id = params.id;
        });
        this.quiz.getAllPrPsbyRef(this._id).then((result) => {
            this.items = result.items;
        });
    }
    ngOnInit() { }
    choose(score, index, j) {
        this.your_answer[index] = {
            select: j,
            score: score,
        };
        // console.log(this.calculateScore())
        this.progress_length = this.countAnswer(this.your_answer);
    }
    calculateScore() {
        var total_score = 0;
        for (var i = 0; i < this.your_answer.length; i++) {
            // console.log(this.your_answer[i].score)
            total_score += Number(this.your_answer[i].score);
        }
        return total_score;
    }
    onSelect(index, j) {
        // index = ข้อ
        if (this.your_answer[index]) {
            if (this.your_answer[index].select == j) {
                return true;
            }
        }
        return false;
    }
    countAnswer(data) {
        let counter = 0;
        for (const input of data) {
            if (input)
                counter += 1;
        }
        return counter;
    }
    onNext() {
        var counter = this.countAnswer(this.your_answer);
        if (this.progress_length == 9) {
            return;
        }
        if (this.progress_page == 0) {
            if (counter < 4) {
                return this.alert.notify('กรุณาตอบให้ครบทุกข้อ');
            }
        }
        if (counter < (this.progress_page + 1) * 4) {
            return this.alert.notify('กรุณาตอบให้ครบทุกข้อ');
        }
        this.progress_page += 1;
    }
    onPrevious() {
        if (this.progress_page > 0)
            this.progress_page -= 1;
    }
    onSubmit() {
        this.your_score = this.calculateScore();
        var obj = {
            ref: this._id,
            name: this._id,
            score: this.your_score,
            user: this.account.UserLogin._id,
        };
        this.grade.addScoreExercise(obj).then(() => {
            this.alert.success('คะแนนของคุณคือ ' + this.your_score + '/40', 'แบบทดสอบ ' + this._id);
            if (this._id == "PRE-PRPS-TEST") {
                var B = Number(this.your_score);
                var C = 40;
                var D = 10;
                var A = B / C * D;
                this.level.addExptoUser(this.account.UserLogin._id, A).then(() => {
                    this.alert.success("คุณได้รับค่าประสบการณ์เพิ่มขึ้น " + A + " แต้ม");
                    this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Home]);
                });
            }
        });
    }
}
ExercisePrpsComponent.ɵfac = function ExercisePrpsComponent_Factory(t) { return new (t || ExercisePrpsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"])); };
ExercisePrpsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExercisePrpsComponent, selectors: [["app-exercise-prps"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"], src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]])], decls: 32, vars: 9, consts: [[1, "border-aqua", "border-bottom", "my-3", "pb-2"], [1, "container"], [1, "text-center"], [1, "mt-3"], [2, "font-weight", "bold"], [1, "row"], [1, "col-md-4", 2, "border", "1px solid lightgray", "border-radius", "10px"], [1, "my-1"], [1, "text-center", "mb-2", 2, "font-weight", "bold"], ["style", "text-align: justify;text-indent: 30px;", 4, "ngIf"], ["class", "col-md-8", 4, "ngIf"], [1, "mt-3", "mr-3"], ["class", "text-success mt-3", "style", "text-decoration: underline;", 4, "ngIf"], ["class", "text-danger mt-3", 4, "ngIf"], ["max", "40", "type", "success", "striped", "true", "animate", "true", 3, "value"], [1, "col-md-12", "text-center", "my-3"], [1, "btn", "btn-primary", "mr-3", 3, "click"], [1, "fa", "fa-arrow-left"], ["class", "btn btn-primary mr-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-arrow-right"], [2, "text-align", "justify", "text-indent", "30px"], [1, "col-md-8"], [4, "ngFor", "ngForOf"], [2, "font-size", "large", "font-weight", "bold"], ["class", "mb-3", 4, "ngIf"], ["class", "input-group mb-2", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "radio", "aria-label", "Radio button for following text input", 3, "checked", "click", 4, "ngIf"], ["type", "text", "aria-label", "Text input with radio button", "readonly", "true", 1, "form-control", 3, "value", "name"], ["type", "radio", "aria-label", "Radio button for following text input", 3, "checked", "click"], [1, "text-success", "mt-3", 2, "text-decoration", "underline"], [1, "text-danger", "mt-3"]], template: function ExercisePrpsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0E04\u0E33\u0E0A\u0E35\u0E49\u0E41\u0E08\u0E07 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49 \u0E08\u0E30\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E21\u0E32\u0E43\u0E2B\u0E49 10 \u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C \u0E46 \u0E25\u0E30 4 \u0E04\u0E33\u0E16\u0E32\u0E21 \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A 4 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E08\u0E33\u0E19\u0E27\u0E19 40 \u0E02\u0E49\u0E2D \u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E02\u0E49\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E40\u0E27\u0E25\u0E32\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A 60 \u0E19\u0E32\u0E17\u0E35 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0E43\u0E0A\u0E49\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E19\u0E35\u0E49\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D 1 \u2013 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExercisePrpsComponent_p_17_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExercisePrpsComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExercisePrpsComponent_span_21_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExercisePrpsComponent_span_22_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "progressbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExercisePrpsComponent_Template_button_click_25_listener() { return ctx.onPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExercisePrpsComponent_button_28_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExercisePrpsComponent_Template_button_click_29_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0E16\u0E31\u0E14\u0E44\u0E1B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 ", ctx.progress_page + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 ", ctx.progress_length, "/40 | page ", ctx.progress_page + 1, "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress_length == 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress_length == 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.progress_length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress_length == 40);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvZXhlcmNpc2UvZXhlcmNpc2UtcHJwcy9leGVyY2lzZS1wcnBzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercisePrpsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exercise-prps',
                templateUrl: './exercise-prps.component.html',
                styleUrls: ['./exercise-prps.component.css'],
                providers: [src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"], src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] }, { type: src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/exercise/exercise-stage/exercise-stage.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/authentication/components/exercise/exercise-stage/exercise-stage.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExerciseStageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseStageComponent", function() { return ExerciseStageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ExerciseStageComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 ", ctx_r0.stage, " ");
} }
function ExerciseStageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setStage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_div_5_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onDisable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 12 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExerciseStageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Stage is available on Google Docs and mindmeister.com. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ex File Name: U1_SP1_G1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "www.mindmeister.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E35\u0E48 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0E2D\u0E19\u0E38\u0E0A\u0E34\u0E15\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B\u0E27\u0E0A. 1 \u0E41\u0E25\u0E30\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E2D\u0E32\u0E08\u0E32\u0E23\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19\u0E44\u0E14\u0E49\u0E2A\u0E31\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E2B\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E32\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E1A\u0E1A\u0E43\u0E0A\u0E49\u0E2A\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E49\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E07\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E15\u0E48\u0E2D\u0E19\u0E38\u0E0A\u0E34\u0E15\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E07\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E2D\u0E30\u0E44\u0E23\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0E17\u0E33\u0E01\u0E32\u0E23 upload \u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E17\u0E33\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E14\u0E48\u0E32\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExerciseStageComponent {
    constructor(alert) {
        this.alert = alert;
        this.menu = false;
    }
    ngOnInit() {
    }
    setStage(status) {
        if (status == 0) {
            this.stage = null;
            this.menu = false;
            return;
        }
        this.stage = "1";
        this.menu = true;
    }
    onDisable() {
        this.alert.notify("ยังไม่สามารถใช้งานได้ในขณะนี้", "แจ้งเตือน", "warning");
    }
}
ExerciseStageComponent.ɵfac = function ExerciseStageComponent_Factory(t) { return new (t || ExerciseStageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
ExerciseStageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExerciseStageComponent, selectors: [["app-exercise-stage"]], decls: 7, vars: 3, consts: [[1, "breadcrumb", "my-2"], [1, "breadcrumb-item", 3, "click"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-2"], ["src", "../../../../assets/image/stage.png", "alt", ""], [1, "col-md-10"], [1, "row", "px-5", "py-3", "my-3", "text-center"], [1, "col-md-6"], [1, "btn", "btn-primary", "col-md-12", "my-2", 3, "click"], [1, "btn", "btn-secondary", "col-md-12", "my-2", 3, "click"], [1, "fa", "fa-lock"], [1, "row", "mt-3"], [1, "col-md-3", "text-center"], [1, "jumbotron", "py-2", "px-3"], ["src", "../../../../../assets/image/google doc.jpg", 2, "max-width", "100px"], [1, "my-2", "mb-4", 2, "font-weight", "bold"], ["src", "../../../../../assets/image/mind_meister.png", 2, "max-width", "100px"], ["href", "https://www.mindmeister.com/", "target", "_blank", 1, "text-warning"], [1, "col-md-9", "px-4"], [1, "text-justify", "py-2", "px-2", 2, "text-indent", "30px"], ["type", "file"], [1, "btn", "btn-info"], [1, "small", "text-muted"]], template: function ExerciseStageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseStageComponent_Template_a_click_2_listener() { return ctx.setStage(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E14\u0E48\u0E32\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExerciseStageComponent_li_4_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExerciseStageComponent_div_5_Template, 43, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExerciseStageComponent_div_6_Template, 21, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == true);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvZXhlcmNpc2UvZXhlcmNpc2Utc3RhZ2UvZXhlcmNpc2Utc3RhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseStageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exercise-stage',
                templateUrl: './exercise-stage.component.html',
                styleUrls: ['./exercise-stage.component.css']
            }]
    }], function () { return [{ type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/exercise/exercise.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/exercise/exercise.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseComponent", function() { return ExerciseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quiz.service */ "./src/app/authentication/services/quiz.service.ts");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");

















function ExerciseComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.name, " ");
} }
function ExerciseComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A ", ctx_r1.item.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E2D\u0E14\u0E04\u0E25\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 ", ctx_r1.item.detail, " ");
} }
function ExerciseComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0E04\u0E33\u0E0A\u0E35\u0E49\u0E41\u0E08\u0E07 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E41\u0E1A\u0E1A 4 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r2.total_items, " \u0E02\u0E49\u0E2D ");
} }
function ExerciseComponent_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_div_13_div_6_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const j_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.choose(data_r8.correct, ctx_r10.index, j_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const j_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r7.onSelect(ctx_r7.index, j_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r8.name);
} }
function ExerciseComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExerciseComponent_div_13_div_6_Template, 5, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.item.choice[ctx_r3.index].question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.item.choice[ctx_r3.index].answer);
} }
function ExerciseComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onPreviousExercise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " << \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExerciseComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onNextExercise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E15\u0E48\u0E2D\u0E44\u0E1B >> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExerciseComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciseComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/auth/resource"]; };
class ExerciseComponent {
    constructor(activateRouter, alert, quiz, account, router, grade, authen, level) {
        this.activateRouter = activateRouter;
        this.alert = alert;
        this.quiz = quiz;
        this.account = account;
        this.router = router;
        this.grade = grade;
        this.authen = authen;
        this.level = level;
        this.index = 0;
        this.your_answer = [];
        this.activateRouter.queryParams.forEach((params) => {
            this._id = params.id;
        });
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
            // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
            this.grade
                .getScoreExercise(this._id)
                .then((result) => {
                if (result.total_items > 0) {
                    this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' +
                        result.item.score);
                    this.router.navigate([
                        '',
                        src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen,
                        _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home,
                    ]);
                }
            });
        });
        // โหลดข้อมูลแบบฝึกหัด
        this.quiz
            .getAllQuiz(this._id)
            .then((result) => {
            this.item = result.items;
            this.total_items = result.total_items;
            if (!this.item) {
                this.alert.something_wrong();
                this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
            }
            // console.log(result);
        })
            .catch(() => {
            this.alert.something_wrong();
            this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
        });
    }
    ngOnInit() { }
    choose(score, index, j) {
        this.your_answer[index] = {
            select: j,
            score: score,
        };
    }
    onSelect(index, j) {
        // index = ข้อ
        if (this.your_answer[index]) {
            if (this.your_answer[index].select == j) {
                return true;
            }
        }
        return false;
    }
    onSubmit() {
        this.total_score = 0;
        // Array of numbers
        for (var i = 0; i < this.total_items; i++) {
            this.total_score += this.your_answer[i].score;
        }
        var obj = {
            ref: this._id,
            name: this.item.name,
            score: this.total_score,
            user: this.account.UserLogin._id,
        };
        this.grade.addScoreExercise(obj).then(() => {
            this.alert.success('คะแนน PRE-TEST ของคุณ คือ ' + this.total_score);
            if (this._id == "PRE-TEST") {
                var B = this.total_score;
                var C = 40;
                var D = 10;
                var A = B / C * D;
                this.level.addExptoUser(this.account.UserLogin._id, A).then(() => {
                    this.alert.success("คุณได้รับค่าประสบการณ์เพิ่มขึ้น " + A + " แต้ม");
                    this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].Home]);
                });
            }
        });
    }
    onNextExercise() {
        if (this.index == this.total_items - 1) {
            return;
        }
        this.index += 1;
    }
    onPreviousExercise() {
        if (this.index == 0) {
            return;
        }
        this.index -= 1;
    }
}
ExerciseComponent.ɵfac = function ExerciseComponent_Factory(t) { return new (t || ExerciseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"])); };
ExerciseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExerciseComponent, selectors: [["app-exercise"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"], _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]])], decls: 22, vars: 14, consts: [[1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["class", "border-aqua border-bottom mb-4", 4, "ngIf"], [1, "text-center"], [4, "ngIf"], [1, "row"], [1, "col-md-10"], ["class", "card my-4 text-black", "style", "\n                    border: 1px solid rgb(90, 156, 255);\n                    border-left: 10px solid rgb(90, 156, 255);\n                ", 4, "ngIf"], [1, "col-md-2", "mt-4"], ["max", "2", "type", "success", "striped", "true", "animate", "true", 3, "value"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary button-next", 3, "click", 4, "ngIf"], ["class", "btn btn-primary button-next ml-2", "style", "border: 1px solid darkgreen; background-color: rgb(44, 194, 94);", 3, "click", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "border-aqua", "border-bottom", "mb-4"], [1, "container"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], [1, "card", "my-4", "text-black", 2, "border", "1px solid rgb(90, 156, 255)", "border-left", "10px solid rgb(90, 156, 255)"], [1, "card-header"], [2, "font-size", "x-large", "margin", "0px"], [1, "card-body"], ["class", "input-group mb-2", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "radio", "value", "data.correct", "name", "item.choice[index]._id", "aria-label", "Radio button for following text input", 3, "checked", "click"], ["type", "text", "aria-label", "Text input with radio button", "readonly", "true", 1, "form-control", 3, "value"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "button-next", 3, "click"], [1, "btn", "btn-primary", "button-next", "ml-2", 2, "border", "1px solid darkgreen", "background-color", "rgb(44, 194, 94)", 3, "click"]], template: function ExerciseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExerciseComponent_li_4_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExerciseComponent_div_5_Template, 7, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExerciseComponent_p_10_Template, 4, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExerciseComponent_div_13_Template, 7, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "progressbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExerciseComponent_button_18_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExerciseComponent_button_20_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExerciseComponent_button_21_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item == null ? null : ctx.item.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" \u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 ", ctx.index + 1, "/2 | page ", ctx.index + 1, "/", ctx.total_items, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.your_answer.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index != ctx.total_items - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.your_answer.length == ctx.total_items);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvZXhlcmNpc2UvZXhlcmNpc2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exercise',
                templateUrl: './exercise.component.html',
                styleUrls: ['./exercise.component.css'],
                providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"], _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__["AuthenService"] }, { type: _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"] }]; }, null); })();


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
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");












class HomeComponent {
    constructor(alert, authen, account, sanitizer, router, grade) {
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
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
            this.UserLogin = result;
        });
    }
    ngOnInit() { }
    onClickPreTest(id) {
        if (this.status == 1) {
            return this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
        }
        this.grade.getScoreExerciseById(this.account.UserLogin._id, 'PRE-TEST').then(result => {
            if (result.total_items == 0) {
                this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Exercise], {
                    queryParams: { id },
                });
            }
            else {
                this.status = 1;
                this.preTest = result.item.score;
                return this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
            }
        });
    }
    onClickPrPS(id) {
        if (this.status == 2) {
            return this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!');
        }
        console.log(this.account.UserLogin.guild);
        if (!this.account.UserLogin.guild) {
            return this.alert.notify("ยังไม่มีกิล์ด ไม่สามารถดำเนินงานต่อได้ !");
        }
        this.grade.getScoreExerciseById(this.account.UserLogin._id, 'PRE-TEST').then(result => {
            if (result.total_items == 0) {
                this.status = 2;
                this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!');
                return;
            }
            if (result.total_items > 0) {
                this.grade.getScoreExerciseById(this.account.UserLogin._id, 'PRE-PRPS-TEST').then(result => {
                    if (result.total_items == 0) {
                        this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].ExercisePrps], {
                            queryParams: { id },
                        });
                    }
                    else {
                        this.prpsTest = result.item.score;
                        return this.alert.success('คะแนน "แบบประเมินทักษะการแก้ปัญหาก่อนเรียน" ของคุณคือ ' + this.prpsTest);
                    }
                });
            }
        });
    }
    hover(image) {
        if (image.id == 'button1') {
            return image.setAttribute('src', '../../../../assets/image/01-2.gif');
        }
        return image.setAttribute('src', '../../../../assets/image/02-2.gif');
    }
    unhover(image) { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]])], decls: 25, vars: 0, consts: [[1, "header-hover"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-down"], [1, "row", "my-3"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body", "text-center"], [3, "click"], ["id", "button1", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/01.png", 2, "cursor", "pointer"], [1, "card-footer"], [1, "card-text"], ["id", "button2", "onmouseout", "unhover(this)", "onmouseover", "hover(this)", "src", "../../../../assets/image/02.png"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0E40\u0E21\u0E19\u0E39\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() { return ctx.onClickPreTest("PRE-TEST"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_20_listener() { return ctx.onClickPrPS("PRE-PRPS-TEST"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E41\u0E1C\u0E19\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E42\u0E14\u0E22\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                providers: [_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]]
            }]
    }], function () { return [{ type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"] }]; }, null); })();


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
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");


















const _c0 = function () { return ["/auth/member"]; };
function InformationComponent_nav_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07 & \u0E41\u0E01\u0E49\u0E44\u0E02 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function InformationComponent_cl_image_52_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cl-image", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("public-idChange", function InformationComponent_cl_image_52_Template_cl_image_public_idChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.image_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("public-id", ctx_r1.image_name);
} }
function InformationComponent_img_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
class InformationComponent {
    constructor(router, grade, alert, builder, authen, member, account, level_service, activateRouter) {
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
        this.activateRouter.queryParams.forEach((params) => {
            this.mem_id = params.item;
        });
        if (!this.UserLogin)
            this.initialLoadUserLogin();
        this.inititalCreateFormData();
        this.initialLoadUpdateFormData();
    }
    setPath(path) {
        // console.log(path);
        return "../../../../assets/image/badge/" + path + ".png";
    }
    ngOnInit() { }
    // เปิดดูคะแนนรายหัวข้อ
    onOpenScore(title) {
        this.grade.getScoreExercise(title).then(result => {
            if (result.total_items > 0)
                return this.alert.showScore(result.item.name, result.item.score);
            this.alert.notify("ยังไม่มีคะแนนส่วนดังกล่าว!");
        })
            .catch(err => {
            this.alert.notify("ยังไม่มีคะแนนส่วนดังกล่าว!");
        });
    }
    // โหลด UserLogin
    initialLoadUserLogin() {
        var data = this.authen.getAuthenticated();
        if (!data) {
            return;
        }
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((userLogin) => {
            this.UserLogin = userLogin;
        })
            .catch((err) => {
            this.alert.notify(err.message);
            this.authen.clearAuthenticated();
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
        });
    }
    // สร้าง ฟอร์มครั้งแรก
    inititalCreateFormData() {
        this.form = this.builder.group({
            sid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            class: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            etc: ['']
        });
    }
    // โหลดฟอร์มครั้งแรก
    initialLoadUpdateFormData() {
        // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
        if (this.mem_id) {
            return this.account
                .getUserByID(this.mem_id, this.authen.getAuthenticated())
                .then((result) => {
                // console.log(result);
                this.form.controls['email'].setValue(result.items[0].email);
                this.form.controls['phone'].setValue(result.items[0].phone);
                this.form.controls['firstname'].setValue(result.items[0].firstname);
                this.form.controls['sid'].setValue(result.items[0].sid);
                this.form.controls['lastname'].setValue(result.items[0].lastname);
                this.member.returnClassroom(result.items[0].class).then(res => {
                    this.form.controls['class'].setValue(res.items._id);
                    this.classroom = res.items.name;
                });
                this.exp = result.items[0].exp;
                this.level = this.level_service.calculateLevel(this.exp);
                if (result.items[0].image) {
                    this.image_name = result.items[0].image;
                }
            });
        }
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
            this.form.controls['email'].setValue(result.email);
            this.form.controls['phone'].setValue(result.phone);
            this.form.controls['firstname'].setValue(result.firstname);
            this.form.controls['sid'].setValue(result.sid);
            this.form.controls['lastname'].setValue(result.lastname);
            this.member.returnClassroom(result.class).then(res => {
                this.form.controls['class'].setValue(res.items._id);
                this.classroom = res.items.name;
            });
            this.exp = result.exp;
            this.level = this.level_service.calculateLevel(this.exp);
            if (result.image) {
                this.image_name = result.image;
            }
        });
    }
    getClassroom(_id) {
        this.member.returnClassroom(_id).then(result => {
            console.log(result);
            return result.items.name;
        });
    }
    // ปุ่มแก้ไขข้อมูลผู้ใช้
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ถูกต้อง และครบถ้วน');
        }
        if (this.mem_id) {
            return this.member
                .updateMember(this.mem_id, this.form.value)
                .then((result) => {
                this.alert.success(result.message);
            });
        }
        this.member
            .updateMember(this.UserLogin._id, this.form.value)
            .then((result) => {
            this.alert.success(result.message);
        });
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]])], decls: 98, vars: 9, consts: [[1, "col-md-12"], ["class", "breadcrumb", 4, "ngIf"], ["src", "../../../../assets/image/Crown4.png"], [1, "row", "py-2"], [1, "col-lg-2", "mt-2"], [1, "jumbotron", "text-center", 2, "padding", "8px 16px", "margin", "0 0 8px 0"], [1, "mt-1", "pl-2", "pr-2", 2, "border", "1px solid lightgray", "border-radius", "5px"], [2, "list-style", "none", "padding-left", "0"], [1, "py-2"], [3, "click"], [1, "col-lg-7", "mt-2", 2, "padding-right", "8px"], [1, "row"], [1, "col-md-3"], ["class", "avatar-image", "crop", "fit", 3, "public-id", "public-idChange", 4, "ngIf"], ["src", "../../../../assets/image/no-image.png", "class", "avatar-image", 4, "ngIf"], [1, "col-md-9"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["type", "text", "formControlName", "firstname", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", 1, "form-control"], ["type", "text", "formControlName", "lastname", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", 1, "form-control", "mt-2"], ["type", "text", "formControlName", "phone", "placeholder", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23", 1, "form-control"], ["type", "text", "formControlName", "email", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C", 1, "form-control"], ["type", "hidden", "formControlName", "class", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "etc", "readonly", "", 1, "form-control", 3, "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-success"], [1, "col-md-3", "mt-4", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "mt-4", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C", "readonly", "", 1, "form-control", 3, "value", "valueChange"], [1, "col-md-3", "py-3", "text-center", 2, "border-top", "1px solid lightgray"], [1, "col-md-9", "py-3", 2, "border-top", "1px solid lightgray"], ["type", "text", "placeholder", "\u0E40\u0E25\u0E40\u0E27\u0E25", "readonly", "", 1, "form-control", 3, "value", "valueChange"], [1, "col-lg-3", "jumbotron", "text-center", "mt-2", "py-4", 2, "border", "1px solid white", "background-color", "rgb(209, 209, 209)", "border-radius", "15px"], [1, "show-badge"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["crop", "fit", 1, "avatar-image", 3, "public-id", "public-idChange"], ["src", "../../../../assets/image/no-image.png", 1, "avatar-image"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_14_listener() { return ctx.onOpenScore("PRE-TEST"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pre-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_17_listener() { return ctx.onOpenScore("PRE-PRPS-TEST"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "PrPS Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_20_listener() { return ctx.onOpenScore("Stage"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_23_listener() { return ctx.onOpenScore("Quiz"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_26_listener() { return ctx.onOpenScore("Quest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Quest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_29_listener() { return ctx.onOpenScore("Badges"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_32_listener() { return ctx.onOpenScore("ATTENDENCE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_35_listener() { return ctx.onOpenScore("Resource"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_38_listener() { return ctx.onOpenScore("Workshop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Workshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_41_listener() { return ctx.onOpenScore("Guild"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Guild");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_44_listener() { return ctx.onOpenScore("PoPS Test"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "PoPS Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InformationComponent_Template_a_click_47_listener() { return ctx.onOpenScore("Post-test"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function InformationComponent_Template_form_submit_55_listener() { return ctx.onSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function InformationComponent_Template_input_valueChange_86_listener($event) { return ctx.exp = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function InformationComponent_Template_input_valueChange_93_listener($event) { return ctx.level = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E15\u0E23\u0E32\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_12__["CloudinaryImage"]], styles: [".ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border-color:orangered;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjpvcmFuZ2VyZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-information',
                templateUrl: './information.component.html',
                styleUrls: ['./information.component.css'],
                providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"] }, { type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }, { type: _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/member.service */ "./src/app/share/services/member.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calLevel(data_r1.exp));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.exp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.badge.length);
} }
class LeaderboardComponent {
    constructor(level, member, authen, account) {
        this.level = level;
        this.member = member;
        this.authen = authen;
        this.account = account;
        // ภาพ มงกุฎ
        this.crown_image = [
            '../../../../assets/image/Crown4.png',
            '../../../../assets/image/Crown3.png',
            '../../../../assets/image/Crown2.png',
            '../../../../assets/image/Crown5.png',
            '../../../../assets/image/Crown5.png',
        ];
        if (!this.UserLogin) {
            this.loadUserLogin();
        }
        this.loadTopPlayer();
    }
    ngOnInit() { }
    // ดึงข้อมูล UserLogin
    loadUserLogin() {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
            this.UserLogin = result;
        });
    }
    // ดึงข้อมูล Top 5 Player
    loadTopPlayer() {
        this.member.getTopPlayer().then((result) => {
            this.Leaderboard = result.items;
        });
    }
    // คำนวณ Level
    calLevel(exp) {
        return this.level.calculateLevel(exp);
    }
}
LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) { return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderboardComponent, selectors: [["app-leaderboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]])], decls: 19, vars: 1, consts: [["src", "../../../../assets/image/Crown4.png"], [1, "lead"], [1, "leaderboard"], [2, "font-family", "'Press Start 2P', cursive", "color", "white", "text-shadow", "black"], ["cellpadding", "0", "cellspacing", "0", 2, "width", "100%"], [2, "font-size", "small", "font-weight", "bold"], ["class", "data", "style", "font-size:smaller;", 4, "ngFor", "ngForOf"], [1, "data", 2, "font-size", "smaller"], [2, "text-align", "left"], [3, "src"]], template: function LeaderboardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leaderboard',
                templateUrl: './leaderboard.component.html',
                styleUrls: ['./leaderboard.component.css'],
                providers: [_services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"]],
            }]
    }], function () { return [{ type: _services_level_service__WEBPACK_IMPORTED_MODULE_1__["LevelService"] }, { type: src_app_share_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/manage-resource/manage-resource.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/components/manage-resource/manage-resource.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManageResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageResourceComponent", function() { return ManageResourceComponent; });
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/resource.service */ "./src/app/authentication/services/resource.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");

















function ManageResourceComponent_div_8_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_8_tr_10_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onLoadUpdate(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_8_tr_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onDelete(data_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.name);
} }
function ManageResourceComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManageResourceComponent_div_8_tr_10_Template, 10, 2, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_8_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.switchToogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function ManageResourceComponent_div_9_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_9_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.onPopText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManageResourceComponent_div_9_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E25\u0E34\u0E07\u0E01\u0E4C Video \u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_div_44_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r17.url[i_r16] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E04\u0E25\u0E34\u0E1B Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_div_44_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r19.text[i_r16] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0E41\u0E19\u0E1A\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D : ", i_r16 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.url[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.text[i_r16]);
} }
function ManageResourceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tabset", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tab", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r22.pdf[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r23.pdf[1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ckeditor", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_ckeditor_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r24.pdf[2] = $event); })("change", function ManageResourceComponent_div_9_Template_ckeditor_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tab", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u0E04\u0E25\u0E34\u0E1B \u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.youtube_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_9_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onAddText(ctx_r27.number_title.length); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " + \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ManageResourceComponent_div_9_button_43_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ManageResourceComponent_div_9_div_44_Template, 12, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E40\u0E27\u0E47\u0E1A (Hypertext) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_input_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.hyperText_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ckeditor", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageResourceComponent_div_9_Template_ckeditor_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.hyperText = $event; })("change", function ManageResourceComponent_div_9_Template_ckeditor_change_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.onChange2($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("justified", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.pdf[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.pdf[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx_r1.Editor)("ngModel", ctx_r1.pdf[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.youtube_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.number_title.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.number_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.hyperText_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx_r1.Editor)("ngModel", ctx_r1.hyperText);
} }
function ManageResourceComponent_div_10_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_10_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.onUpdate(ctx_r33.items._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E25\u0E30\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManageResourceComponent_div_10_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_10_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManageResourceComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageResourceComponent_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.switchToogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManageResourceComponent_div_10_button_7_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManageResourceComponent_div_10_button_8_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.update == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.update == false);
} }
class ManageResourceComponent {
    constructor(router, alert, sanitizer, resource) {
        this.router = router;
        this.alert = alert;
        this.sanitizer = sanitizer;
        this.resource = resource;
        this.toogle = false;
        this.update = false;
        this.hyperText = '';
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
        this.onLoadChapter();
    }
    ngOnInit() { }
    // change page up
    onAddText(number) {
        if (number) {
            this.number_title.push(number + 1);
            return;
        }
        this.status_button += 1;
    }
    // change page down
    onMinusText() {
        this.status_button -= 1;
    }
    switchToogle() {
        if (this.toogle == true) {
            if (this.update == true)
                this.update = true;
            return (this.toogle = false);
        }
        this.toogle = true;
        this.update = false;
    }
    // pop data from array
    onPopText() {
        this.number_title.pop();
        this.url.pop();
        this.text.pop();
    }
    onLoadUpdate(data) {
        this.switchToogle();
        this.update = true;
        this.resource.onShowOneChapter(data._id).then((result) => {
            console.log(result.item[0]);
            var item = result.item[0];
            this.update_id = item._id;
            this.name = item.name;
            this.pdf[0] = item.pdf.title;
            this.pdf[1] = item.pdf.url;
            this.pdf[2] = item.pdf.text;
            this.youtube_title = item.youtube.title;
            var round = item.youtube.video.text.length;
            for (var i = 0; i < round; i++) {
                this.text[i] = item.youtube.video.text[i];
                this.url[i] = item.youtube.video.url[i];
            }
            this.hyperText_title = item.hypertext.title;
            this.hyperText = item.hypertext.title;
        });
    }
    // return url to display Youtube
    onShowYoutube(url) {
        if (url == 'switch') {
            return (this.switch_display = 'pdf');
        }
        // https://www.youtube.com/watch?v=zx7ndQFt7i8
        url = url.substring(32);
        this.switch_display = 'youtube';
        this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/' + url);
    }
    // return url to display PDF
    onShowPDF(url) {
        var pdf;
        if (!url)
            return;
        if (url.substring(url.length - 5) == '/view') {
            url = url.substring(0, url.length - 4) + 'preview';
        }
        else {
            pdf =
                'https://drive.google.com/file/d/' + url.substr(33) + '/preview';
        }
        try {
            this.url_file = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        catch (err) {
            this.alert.showWarning('เกิดข้อผิดพลาดกับลิงก์ PDF', err);
        }
    }
    // CKeditor1
    onChange({ editor }) {
        const data = editor.getData();
        setTimeout(() => {
            this.data = data;
        }, 1000);
        // console.log( data );
    }
    // CKeditor2
    onChange2({ editor }) {
        const data = editor.getData();
        setTimeout(() => {
            this.data2 = data;
        }, 1000);
        // console.log( data );
    }
    // Check before submit
    onPreview(text) { }
    urlTypeClick() {
        this.url_type = !this.url_type;
    }
    onDelete(_id) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'ลบข้อมูล ?',
            text: 'คุณต้องการที่จะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            confirmButtonColor: '#6D3B47',
            confirmButtonText: 'ลบข้อมูล!',
        }).then((res) => {
            if (res.value) {
                this.resource.onDeleteChapter(_id).then((result) => {
                    this.alert.success('ลบแหล่งการเรียนรู้สำเร็จ !');
                    this.onLoadChapter();
                });
            }
        });
    }
    onLoadChapter() {
        this.resource.onShowAllChapter().then((result) => {
            this.total_items = result.total_items;
            this.items = result.items;
        });
    }
    onUpdate(_id) {
        var model = {
            name: this.name,
            pdf: {
                title: this.pdf[0],
                url: this.pdf[1],
                text: this.pdf[2],
            },
            youtube: {
                title: this.youtube_title,
                video: {
                    text: this.text,
                    url: this.url,
                },
            },
            hypertext: {
                title: this.hyperText_title,
                text: this.hyperText,
            },
        };
        this.resource.onUpdateChapter(this.update_id, model).then((result) => {
            this.alert.success('เพิ่มข้อมูลเรียบร้อยแล้ว !');
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Home]);
        });
    }
    // Submit
    onSubmit() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'คุณแน่ใจหรือไม่ ?',
            text: 'คุณต้องการจะเพิ่มแหล่งข้อมูลใช่หรือไม่!',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'เพิ่มข้อมูล!',
        }).then((result) => {
            if (result.value) {
                var model = {
                    name: this.name,
                    pdf: {
                        title: this.pdf[0],
                        url: this.pdf[1],
                        text: this.pdf[2],
                    },
                    youtube: {
                        title: this.youtube_title,
                        video: {
                            text: this.text,
                            url: this.url,
                        },
                    },
                    hypertext: {
                        title: this.hyperText_title,
                        text: this.hyperText,
                    },
                };
                this.resource.onCreateChapter(model).then(() => {
                    this.alert.success('เพิ่มข้อมูลเรียบร้อยแล้ว !');
                    this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Home]);
                });
            }
        });
    }
}
ManageResourceComponent.ɵfac = function ManageResourceComponent_Factory(t) { return new (t || ManageResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"])); };
ManageResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageResourceComponent, selectors: [["app-manage-resource"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])], decls: 11, vars: 3, consts: [[1, "row", "py-4"], [1, "col-md-12"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap"], ["class", "table-responsive my-3", 4, "ngIf"], ["class", "col-md-9 py-3", 4, "ngIf"], ["class", "col-md-3 py-3", 4, "ngIf"], [1, "table-responsive", "my-3"], [1, "table", "table-bordered", "table-hover"], [1, "thead-dark", "text-center"], [4, "ngFor", "ngForOf"], [1, "my-2", "text-right"], [1, "btn", "btn-info", 3, "click"], [3, "click"], [1, "fa", "fa-pencil-square-o", "text-warning", "mx-2"], [1, "fa", "fa-trash-o", "text-danger"], [1, "col-md-9", "py-3"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E2B\u0E19\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48 01", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-3"], [3, "justified"], ["heading", "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF"], [1, "card", "mt-3"], ["for", "ccnumber"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C PDF", "required", "", 1, "form-control", "my-1", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) ./assets/pdf/document.pdf", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-12"], ["for", "ccmonth"], ["data", "<p>:: \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 ::</p><ul><li>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C</li></ul>", 3, "editor", "ngModel", "ngModelChange", "change"], ["heading", "\u0E27\u0E35\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E04\u0E25\u0E34\u0E1B\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19", "required", "", 1, "form-control", "my-1", 3, "ngModel", "ngModelChange"], [1, "pb-2", 2, "display", "block", "width", "100%", "text-align", "right"], [1, "btn", "btn-outline-primary", "mr-1", 3, "click"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], ["heading", "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Hypertext"], ["type", "text", "type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) \u0E2D\u0E48\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", "required", "", 1, "form-control", "my-1", 3, "ngModel", "ngModelChange"], ["data", "", 3, "editor", "ngModel", "ngModelChange", "change"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "card", "mb-1"], ["type", "text", "placeholder", "(\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07) https://www.youtube.com/watch?v=WBU5oHRrTUo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3", "py-3"], [1, "btn", "btn-danger", "col-md-12", "mb-2", 3, "click"], ["class", "btn btn-warning text-white col-md-12 border", 3, "click", 4, "ngIf"], ["class", "btn btn-success col-md-12 my-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", "text-white", "col-md-12", "border", 3, "click"], [1, "btn", "btn-success", "col-md-12", "my-2", 3, "click"]], template: function ManageResourceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManageResourceComponent_div_8_Template, 14, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ManageResourceComponent_div_9_Template, 58, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManageResourceComponent_div_10_Template, 9, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toogle == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toogle == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toogle == true);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__["TabDirective"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWFuYWdlLXJlc291cmNlL21hbmFnZS1yZXNvdXJjZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-manage-resource',
                templateUrl: './manage-resource.component.html',
                styleUrls: ['./manage-resource.component.css'],
                providers: [_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }, { type: _services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/member/attendence/attendence.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/authentication/components/member/attendence/attendence.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AttendenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceComponent", function() { return AttendenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/pipes/date-ago.pipe */ "./src/app/services/pipes/date-ago.pipe.ts");













function AttendenceComponent_tr_56_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttendenceComponent_tr_56_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onCheckIn(data_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttendenceComponent_tr_56_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49\u0E41\u0E25\u0E49\u0E27 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttendenceComponent_tr_56_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22/\u0E25\u0E32\u0E01\u0E34\u0E08 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttendenceComponent_tr_56_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E21\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttendenceComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AttendenceComponent_tr_56_a_11_Template, 2, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AttendenceComponent_tr_56_a_13_Template, 2, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AttendenceComponent_tr_56_a_14_Template, 2, 0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AttendenceComponent_tr_56_span_15_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0E27\u0E31\u0E19 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, data_r1.date, "EEEE"), " \u0E17\u0E35\u0E48 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 11, data_r1.date, "dd MMMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, data_r1.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.onCheckUser(data_r1) == false && data_r1.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.onCheckUser(data_r1) == false && data_r1.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.onCheckUser(data_r1) == "sick");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.onCheckUser(data_r1) == true);
} }
class AttendenceComponent {
    constructor(account, member, alert, level, grade) {
        this.account = account;
        this.member = member;
        this.alert = alert;
        this.level = level;
        this.grade = grade;
        this.assign = 0;
        this.absent = 0;
        // console.log(this.account.UserLogin)
        this.loadAttendence();
        this.loadTimeAttended();
    }
    ngOnInit() { }
    onCheckIn(_id) {
        this.member.checkInAttendence(_id, { user: this.account.UserLogin._id }).then(result => {
            if (result.code == "500") {
                return this.alert.notify("ลงชื่อเข้าเรียนไปแล้ว..!", "แจ้งเตือน", "warning");
            }
            this.alert.success(result.message);
            var A = 1;
            this.grade.getScoreExerciseById(this.account.UserLogin._id, 'ATTENDENCE').then(sub_result => {
                console.log(sub_result);
                // พึ่งเข้าเรียนครั้งแรกเพิ่มคะแนนมาเรียน
                if (sub_result.total_items == 0) {
                    var obj = {
                        name: 'คะแนนมาเรียน (Attendence)',
                        score: A,
                        ref: 'ATTENDENCE',
                        user: this.account.UserLogin._id
                    };
                    setTimeout(() => {
                        this.grade.addScoreExercise(obj).then(() => {
                            this.level.addExptoUser(this.account.UserLogin._id, A * 10).then(result => {
                                this.alert.success("คุณได้รับแต้ม Exp เพิ่มขึ้น " + A * 10 + " แต้ม");
                            });
                        });
                    }, 1000);
                }
                if (sub_result.total_items > 0 && sub_result.total_items <= 17) {
                    this.grade.updateScoreExcerciseById(sub_result.item._id, { score: sub_result.item.score + 1 }).then(sub => {
                        this.level.addExptoUser(this.account.UserLogin._id, A * 10).then(result => {
                            this.alert.success("คุณได้รับแต้ม Exp เพิ่มขึ้น " + A * 10 + " แต้ม");
                        });
                    });
                }
            });
            this.loadAttendence();
            this.loadTimeAttended();
            this.absent = this.total_numbers - this.atteneded;
        });
    }
    loadTimeAttended() {
        this.member.getTimeAttended(this.account.UserLogin._id).then(result => {
            this.atteneded = result.total_items;
            this.absent = this.total_numbers - this.atteneded;
        });
    }
    loadAttendence() {
        this.member.loadAttendence(this.account.UserLogin.class).then(result => {
            this.items = result.items;
            // console.log(this.items)
            this.total_numbers = result.total_items;
            this.absent = this.total_numbers - this.atteneded;
        });
    }
    onCheckUser(data) {
        var dumb = data.user.includes(this.account.UserLogin._id);
        if (dumb == false) {
            var sick = data.sick.includes(this.account.UserLogin._id);
            if (sick == true) {
                return "sick";
            }
        }
        return dumb;
    }
}
AttendenceComponent.ɵfac = function AttendenceComponent_Factory(t) { return new (t || AttendenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"])); };
AttendenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttendenceComponent, selectors: [["app-attendence"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]])], decls: 57, vars: 4, consts: [[1, "card", "mt-3", "mb-5", 2, "border-top", "5px solid orangered", "border-radius", "3px", "border-top-left-radius", "3px", "border-top-right-radius", "3px"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-4"], [1, "card", "mb-3"], [1, "card-body", "py-3"], [1, "col-md-6"], [1, "text-center", "mt-2", 2, "color", "#00a1ab", "padding", "0px"], [2, "padding", "0px", "margin", "0px"], [1, "card-footer", "text-white", 2, "background-color", "#00a1ab"], [1, "text-center", "mt-2", 2, "color", "#00263b", "padding", "0px"], [1, "card-footer", "text-white", 2, "background-color", "#00263b"], [1, "text-center", "mt-2", 2, "color", "#ff5200", "padding", "0px"], [1, "card-footer", "text-white", 2, "background-color", "#ff5200"], [1, "table-responsive-md"], [1, "table", "table-hover"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "text-success", "style", "border-bottom: 1px dotted;", 3, "click", 4, "ngIf"], ["class", "text-secondary", "style", "border-bottom: 1px dotted;", 4, "ngIf"], ["class", "text-warning", "style", "border-bottom: 1px dotted;", 4, "ngIf"], ["class", "text-info", 4, "ngIf"], [1, "text-success", 2, "border-bottom", "1px dotted", 3, "click"], [1, "text-secondary", 2, "border-bottom", "1px dotted"], [1, "text-warning", 2, "border-bottom", "1px dotted"], [1, "text-info"]], template: function AttendenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0E01\u0E32\u0E23\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total number of studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " % \u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Number of times attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " % \u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Number of absences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " % \u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E02\u0E32\u0E14\u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0E40\u0E27\u0E25\u0E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AttendenceComponent_tr_56_Template, 16, 16, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_numbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.atteneded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.absent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_6__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL2F0dGVuZGVuY2UvYXR0ZW5kZW5jZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttendenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attendence',
                templateUrl: './attendence.component.html',
                styleUrls: ['./attendence.component.css'],
                providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]]
            }]
    }], function () { return [{ type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"] }, { type: src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/member/classroom/classroom.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/components/member/classroom/classroom.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomComponent", function() { return ClassroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/pipes/date-ago.pipe */ "./src/app/services/pipes/date-ago.pipe.ts");














function ClassroomComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_tr_26_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLoadStudent(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E14\u0E39\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_tr_26_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onGroupCreate(data_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E41\u0E1A\u0E48\u0E07\u0E01\u0E34\u0E25\u0E4C\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_tr_26_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onDelete(data_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E25\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
} }
function ClassroomComponent_div_29_tr_26_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_div_29_tr_26_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const data_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.statusAttendence(data_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E34\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClassroomComponent_div_29_tr_26_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_div_29_tr_26_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const data_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.statusAttendence(data_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E34\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClassroomComponent_div_29_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClassroomComponent_div_29_tr_26_a_10_Template, 2, 0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClassroomComponent_div_29_tr_26_a_11_Template, 2, 0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_div_29_tr_26_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const data_r10 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.deleteAttendence(data_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, data_r10.date, "EEEE. dd/MMMM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, data_r10.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r10.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r10.status == 0);
} }
function ClassroomComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClassroomComponent_div_29_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.dateAdd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_div_29_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.addAttendence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E0A\u0E47\u0E04\u0E0A\u0E37\u0E48\u0E2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0E2A\u0E16\u0E32\u0E19\u0E30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClassroomComponent_div_29_tr_26_Template, 17, 10, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E47\u0E04\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C (", ctx_r1.title, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.dateAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.attendence_item);
} }
function ClassroomComponent_div_30_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r28 + 1, " ");
} }
function ClassroomComponent_div_30_tr_22_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_div_30_tr_22_td_5_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const data_r32 = ctx.$implicit; const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.updateAttendence(data_r32, item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = ctx.$implicit;
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, data_r32.date, "dd-MMMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r31.getAttended(item_r29._id, data_r32.user) == true ? "bg-success" : data_r32.sick == item_r29._id ? "bg-warning" : "bg-danger");
} }
function ClassroomComponent_div_30_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClassroomComponent_div_30_tr_22_td_5_Template, 2, 5, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const j_r30 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r30 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r29.firstname, " ", item_r29.lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.attendence_item);
} }
function ClassroomComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E21\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22/\u0E25\u0E32\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0E02\u0E32\u0E14\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07 - \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClassroomComponent_div_30_td_20_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ClassroomComponent_div_30_tr_22_Template, 6, 4, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 ", ctx_r2.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.attendence_item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r2.colspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.total_items, " \u0E04\u0E19");
} }
class ClassroomComponent {
    constructor(member, alert, router) {
        this.member = member;
        this.alert = alert;
        this.router = router;
        this.option = {
            sp: 0,
            lp: 5,
            keySearch: null,
            valueData: null,
        };
        this.dateAdd = null;
        this.colspan = 0;
        this.attendence_sick = [];
        this.room = "5eca83a411df253bb42f2eee";
        this.loadDataClassroom();
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log("Working");
        this.member.addClassroom({ name: this.classroom_name }).then(result => {
            this.alert.success(result.message);
            this.loadDataClassroom();
        })
            .catch(err => {
            console.log(err);
            if (err.Message == "ValidationError")
                this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
        });
    }
    onLoadStudent(model) {
        if (this.classroom_id == model._id) {
            return;
        }
        this.classroom_id = model._id;
        this.title = model.name;
        // โหลดเข้าเรียนด้วย
        this.attendence_id = model._id;
        this.loadAttendence(model._id);
        this.member.loadMemberFromClassroom(model._id).then(result => {
            this.items = result.items;
            this.total_items = result.total_items;
        });
    }
    loadDataClassroom() {
        this.member.loadClassroom(this.option).then(result => {
            this.Classroom_item = result.items;
            this.total_classroom = result.total_items;
        });
        this.classroom_name = null;
    }
    loadAttendence(_id) {
        this.member.loadAttendence(_id).then(result => {
            this.attendence_item = result.items;
            this.attendence_sick = result.items.sick;
            this.colspan = result.total_items;
            console.log(result);
        });
    }
    addAttendence() {
        if (!this.dateAdd) {
            return this.alert.notify("กรุณาระบุวันที่เช็คชื่อ");
        }
        var obj = {
            date: this.dateAdd,
            ref: this.classroom_id,
            status: 1
        };
        this.member.addAttendence(obj).then(result => {
            this.loadAttendence(this.attendence_id);
            this.dateAdd = null;
        });
    }
    deleteAttendence(_id) {
        this.member.deleteAttendence(_id).then(result => {
            this.alert.success("ลบข้อมูลเรียบร้อยแล้ว !");
            this.loadAttendence(this.attendence_id);
        });
    }
    statusAttendence(model) {
        var status = !model.status;
        if (model.status == 1) {
            this.member.patchAttendence(model._id, { status: status }).then(result => {
            });
            this.alert.success("ไม่อนุญาติให้นักศึกษาเข้าห้องเรียน", "แจ้งเตือน", "success");
            return this.loadAttendence(this.attendence_id);
        }
        this.member.patchAttendence(model._id, { status: status }).then(result => {
            this.alert.success("อนุญาติให้นักศึกษาเข้าห้องเรียน");
        });
        return this.loadAttendence(this.attendence_id);
    }
    getAttended(model, attend) {
        var data = attend;
        var result = data.includes(model);
        return result;
    }
    updateAttendence(attendence, user) {
        var data = attendence.user;
        var result = data.includes(user._id);
        if (result == true) {
            return;
        }
        this.member.patchAttendenceSick(attendence._id, { sick: user._id }).then(result => {
            this.alert.success("ดำเนินการสำเร็จ");
            this.loadAttendence(this.attendence_id);
        });
    }
    onGroupCreate(_id) {
        this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"].CreateGroup], {
            queryParams: { _id },
        });
    }
    onDelete(model) {
        if (!this.total_items) {
            return this.alert.notify("กรุณาลบนักศึกษาในชั้นเรียนก่อน", "ไม่สามารถลบชั้นเรียนได้", "error");
        }
        if (this.total_items > 0) {
            return this.alert.notify("กรุณาลบนักศึกษาในชั้นเรียนก่อน", "ไม่สามารถลบชั้นเรียนได้", "error");
        }
        this.member.deleteClassroom(model).then(result => {
            this.alert.success(result.message);
            this.loadDataClassroom();
        });
    }
}
ClassroomComponent.ɵfac = function ClassroomComponent_Factory(t) { return new (t || ClassroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ClassroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassroomComponent, selectors: [["app-classroom"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]])], decls: 31, vars: 5, consts: [[1, "card", "mt-3", 2, "border-top", "5px solid black", "border-radius", "5"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-11"], ["type", "text", "placeholder", "\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-1"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click"], [1, "table-responsive-md"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-dark", "py-1", 2, "float", "right"], ["class", "card mt-3", "style", "border-top:5px solid orangered;border-radius:3px;border-top-left-radius: 3px; border-top-right-radius: 3px;", 4, "ngIf"], ["class", "card my-3", "style", "padding: 0px;border-top:5px solid #e5e5e5;", 4, "ngIf"], [1, "pointer", "text-info", 2, "text-decoration", "underline", 3, "click"], [1, "pointer", "text-primary", 2, "text-decoration", "underline", 3, "click"], [1, "pointer", "text-danger", 2, "text-decoration", "underline", 3, "click"], [1, "card", "mt-3", 2, "border-top", "5px solid orangered", "border-radius", "3px", "border-top-left-radius", "3px", "border-top-right-radius", "3px"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E0A\u0E47\u0E04\u0E0A\u0E37\u0E48\u0E2D ...", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "text-info", "style", " border-bottom: 1px dotted;", 3, "click", 4, "ngIf"], ["class", "text-danger", "style", "border-bottom: 1px dotted orangered;", 3, "click", 4, "ngIf"], [3, "click"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "text-info", 2, "border-bottom", "1px dotted", 3, "click"], [1, "text-danger", 2, "border-bottom", "1px dotted orangered", 3, "click"], [1, "card", "my-3", 2, "padding", "0px", "border-top", "5px solid #e5e5e5"], [1, "px-2", 2, "padding", "0px"], [1, "my-3", "text-right"], [1, "badge", "badge-pill", "badge-success", "mx-2"], [1, "badge", "badge-pill", "badge-warning", "mx-2"], [1, "badge", "badge-pill", "badge-danger"], [1, "table", "table-hover", "table-outline", 2, "border-top", "0px"], [1, "thead-light", 2, "border-top", "0px"], [1, "text-center"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-right", "mr-2"], ["class", "border pointer text-center", 3, "tooltip", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "border", "pointer", "text-center", 3, "tooltip", "ngClass", "click"]], template: function ClassroomComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClassroomComponent_Template_input_ngModelChange_10_listener($event) { return ctx.classroom_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassroomComponent_Template_button_click_12_listener() { return ctx.onSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClassroomComponent_tr_26_Template, 14, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClassroomComponent_div_29_Template, 27, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClassroomComponent_div_30_Template, 30, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.classroom_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Classroom_item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ", ctx.total_classroom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_6__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerDirective"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_11__["DateAgoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL2NsYXNzcm9vbS9jbGFzc3Jvb20uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-classroom',
                templateUrl: './classroom.component.html',
                styleUrls: ['./classroom.component.css'],
                providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]]
            }]
    }], function () { return [{ type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/member/guild/create/create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/components/member/guild/create/create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/sortable/fesm2015/ngx-bootstrap-sortable.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function CreateComponent_tr_19_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E34\u0E25\u0E4C\u0E14\u0E2D\u0E22\u0E39\u0E48");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_tr_19_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_tr_19_span_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cancelGroup(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r7.guild, " ");
} }
function CreateComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateComponent_tr_19_span_6_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateComponent_tr_19_span_7_Template, 5, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r7.firstname, " ", data_r7.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.score[i_r8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r7.guild);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r7.guild);
} }
function CreateComponent_bs_sortable_24_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bs-sortable", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_bs_sortable_24_Template_bs_sortable_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholderItem", "\u0E25\u0E32\u0E01\u0E21\u0E32\u0E27\u0E32\u0E07\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 \u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E34\u0E25\u0E4C\u0E14\u0E2D\u0E22\u0E39\u0E48 ", ctx_r1.items.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.items);
} }
function CreateComponent_div_33_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r17.itemObjectsTop.length, " \u0E04\u0E19");
} }
function CreateComponent_div_33_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_33_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onSubmit("\u0E40\u0E14\u0E47\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E01\u0E48\u0E07"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_33_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_33_button_2_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.itemObjectsTop.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.itemObjectsTop.length > 0);
} }
function CreateComponent_div_44_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r21.itemObjectsMiddleTop.length, " \u0E04\u0E19");
} }
function CreateComponent_div_44_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_44_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onSubmit("\u0E04\u0E48\u0E2D\u0E19\u0E02\u0E49\u0E32\u0E07\u0E14\u0E35"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_44_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_44_button_2_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.itemObjectsMiddleTop.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.itemObjectsMiddleTop.length > 0);
} }
function CreateComponent_div_55_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r25.itemObjectsMiddle.length, " \u0E04\u0E19");
} }
function CreateComponent_div_55_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_55_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.onSubmit("\u0E1B\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_55_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_55_button_2_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.itemObjectsMiddle.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.itemObjectsMiddle.length > 0);
} }
function CreateComponent_div_65_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r29.itemObjectsSoSo.length, " \u0E04\u0E19");
} }
function CreateComponent_div_65_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_65_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onSubmit("\u0E1E\u0E2D\u0E43\u0E0A\u0E49"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_65_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_65_button_2_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.itemObjectsSoSo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.itemObjectsSoSo.length > 0);
} }
function CreateComponent_div_75_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0E08\u0E33\u0E19\u0E27\u0E19 ", ctx_r33.itemObjectsBottom.length, " \u0E04\u0E19");
} }
function CreateComponent_div_75_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_75_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.onSubmit("\u0E40\u0E14\u0E47\u0E01\u0E2D\u0E48\u0E2D\u0E19"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_75_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_75_button_2_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.itemObjectsBottom.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.itemObjectsBottom.length > 0);
} }
class CreateComponent {
    constructor(activateRoute, member, grade, alert) {
        this.activateRoute = activateRoute;
        this.member = member;
        this.grade = grade;
        this.alert = alert;
        this.score = [];
        this.activateRoute.queryParams.forEach((params) => {
            this.classroom = params._id;
        });
        this.loadMember();
    }
    ngOnInit() {
    }
    getPreTest(_id) {
        var res;
        this.grade.getScoreExerciseById(_id, 'PRE-TEST').then(result => {
            try {
                this.score.push(result.item.score);
            }
            catch (_a) {
                this.score.push("ยังไม่ได้ทำแบบทดสอบ Pre-Test!");
            }
        });
    }
    loadMember() {
        this.member.loadMemberFromClassroom(this.classroom).then(result => {
            this.items = result.items;
            this.display_data = this.items;
            var round;
            for (var i = 0; i < result.total_items; i++) {
                this.getPreTest(result.items[i]._id);
            }
        });
    }
    cancelGroup(member) {
        member.guild = '';
        this.member.updateMember(member._id, member).then(result => {
            this.alert.success("ยกเลิกกิล์ดผู้เรียนสำเร็จ", "สำเร็จ");
            this.loadMember();
        });
    }
    onSubmit(model, range_case) {
        var data = null;
        if (model == "เด็กเรียนเก่ง") {
            data = this.itemObjectsTop;
        }
        else if (model == "ค่อนข้างดี") {
            data = this.itemObjectsMiddleTop;
        }
        else if (model == "ปานกลาง") {
            data = this.itemObjectsMiddle;
        }
        else if (model == "พอใช้") {
            data = this.itemObjectsSoSo;
        }
        else if (model == "เด็กอ่อน") {
            data = this.itemObjectsBottom;
        }
        for (var i = 0; i < data.length; i++) {
            data[i].guild = model;
        }
        var fullName = '';
        for (var i = 0; i < data.length; i++) {
            fullName = data[i].firstname + " " + data[i].lastname;
            this.member.updateMember(data[i]._id, data[i]).then(result => {
                this.alert.success("เพิ่มนักเรียน " + data.length + " คนลงในกลุ่ม " + model + "สำเร็จ", "สำเร็จ");
            });
        }
        if (model == "เด็กเรียนเก่ง") {
            this.itemObjectsTop = [];
        }
        else if (model == "ค่อนข้างดี") {
            this.itemObjectsMiddleTop = [];
        }
        else if (model == "ปานกลาง") {
            this.itemObjectsMiddle = [];
        }
        else if (model == "พอใช้") {
            this.itemObjectsSoSo = [];
        }
        else if (model == "เด็กอ่อน") {
            this.itemObjectsBottom = [];
        }
        this.loadMember();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"]])], decls: 76, vars: 12, consts: [[1, "my-3", "py-3"], [1, "row", "mb-5"], [1, "col-md-12"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "thead-dark", "text-center"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], ["role", "group", 1, "list-group"], ["fieldName", "firstname", "itemClass", "list-group-item list-group-item-action pointer", "itemActiveClass", "list-group-item-active", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "placeholderItem", "ngModelChange", 4, "ngIf"], [1, "col-md-6", "my-2"], [1, "card"], [1, "card-header"], ["src", "../../../../../../assets/image/Crown4.png", 1, "pointer"], [1, "card-body"], ["itemClass", "list-group-item list-group-item-action pointer", "itemActiveClass", "list-group-item-active", "placeholderItem", "\u0E25\u0E32\u0E01\u0E21\u0E32\u0E27\u0E32\u0E07\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "ngModelChange"], ["class", "card-footer text-right", 4, "ngIf"], ["src", "../../../../../../assets/image/Crown3.png", 1, "pointer"], ["src", "../../../../../../assets/image/Crown2.png", 1, "pointer"], [1, "text-center"], ["class", "font-weight-bold", 4, "ngIf"], [4, "ngIf"], [1, "font-weight-bold"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["fieldName", "firstname", "itemClass", "list-group-item list-group-item-action pointer", "itemActiveClass", "list-group-item-active", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "placeholderItem", "ngModelChange"], [1, "card-footer", "text-right"], ["class", "mr-2", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "mr-2"], [1, "btn", "btn-primary", 3, "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0E08\u0E31\u0E14\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07 - \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0E04\u0E30\u0E41\u0E19\u0E19 PRE-TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E01\u0E34\u0E25\u0E4C\u0E14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateComponent_tr_19_Template, 8, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_bs_sortable_24_Template, 1, 2, "bs-sortable", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0E40\u0E14\u0E47\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E01\u0E48\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "bs-sortable", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_bs_sortable_ngModelChange_32_listener($event) { return ctx.itemObjectsTop = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateComponent_div_33_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0E04\u0E48\u0E2D\u0E19\u0E02\u0E49\u0E32\u0E07\u0E14\u0E35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "bs-sortable", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_bs_sortable_ngModelChange_43_listener($event) { return ctx.itemObjectsMiddleTop = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CreateComponent_div_44_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0E1B\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "bs-sortable", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_bs_sortable_ngModelChange_54_listener($event) { return ctx.itemObjectsMiddle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CreateComponent_div_55_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0E1E\u0E2D\u0E43\u0E0A\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "bs-sortable", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_bs_sortable_ngModelChange_64_listener($event) { return ctx.itemObjectsSoSo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CreateComponent_div_65_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u0E40\u0E14\u0E47\u0E01\u0E2D\u0E48\u0E2D\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "bs-sortable", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_bs_sortable_ngModelChange_74_listener($event) { return ctx.itemObjectsBottom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CreateComponent_div_75_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.display_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObjectsTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemObjectsTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObjectsMiddleTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemObjectsMiddleTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObjectsMiddle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemObjectsMiddle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObjectsSoSo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemObjectsSoSo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObjectsBottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemObjectsBottom);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL2d1aWxkL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css'],
                providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"] }, { type: src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/member/guild/guild.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/components/member/guild/guild.component.ts ***!
  \***************************************************************************/
/*! exports provided: GuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildComponent", function() { return GuildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function GuildComponent_tbody_51_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r2.firstname, " ", data_r2.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getLevel(data_r2.exp));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.PRETEST[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.PrePRPS[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ATTENDENCE[i_r3]);
} }
function GuildComponent_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuildComponent_tbody_51_tr_1_Template, 20, 6, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class GuildComponent {
    constructor(member, level, account, grade) {
        this.member = member;
        this.level = level;
        this.account = account;
        this.grade = grade;
        this.description = ["The strongest guild.", "Famous guild", "Guild that loves peace", "Guild hiding in the dark.", "Guilds who like to war more than use the brain."];
        this.guild_image = [
            "../../../../../assets/image/guild/guild4.png",
            "../../../../../assets/image/guild/guild1.png",
            "../../../../../assets/image/guild/guild3.jpg",
            "../../../../../assets/image/guild/skull.png",
            "../../../../../assets/image/guild/guild2.png",
        ];
        this.PRETEST = [];
        this.PrePRPS = [];
        this.ATTENDENCE = [];
        this.member.loadUserbyGuild(this.account.UserLogin._id).then(result => {
            this.total_user = result.items.length;
            this.items = result.items;
            this.setGuildName(this.items[0].guild);
            for (var i = 0; i < this.total_user; i++) {
                this.grade.getScoreExerciseById(result.items[i]._id, 'PRE-TEST').then(result => {
                    if (result.total_items == 0) {
                        this.PRETEST.push("-");
                    }
                    else {
                        this.PRETEST.push(result.item.score);
                    }
                });
                this.grade.getScoreExerciseById(result.items[i]._id, 'PRE-PRPS-TEST').then(result => {
                    if (result.total_items == 0) {
                        this.PrePRPS.push("-");
                    }
                    else {
                        this.PrePRPS.push(Math.ceil(result.item.score / 40 * 10));
                    }
                });
                this.grade.getScoreExerciseById(result.items[i]._id, 'ATTENDENCE').then(result => {
                    if (result.total_items == 0) {
                        this.ATTENDENCE.push("-");
                    }
                    else {
                        this.ATTENDENCE.push(Math.round(result.item.score / 18 * 10));
                    }
                });
            }
            console.log(result);
        });
    }
    ngOnInit() { }
    getLevel(exp) {
        return this.level.calculateLevel(exp);
    }
    setGuildName(model) {
        if (model == "เด็กเรียนเก่ง") {
            this.guild_name = 1;
        }
        else if (model == "ค่อนข้างดี") {
            this.guild_name = 2;
        }
        else if (model == "ปานกลาง") {
            this.guild_name = 3;
        }
        else if (model == "พอใช้") {
            this.guild_name = 4;
        }
        else {
            this.guild_name = 5;
        }
    }
}
GuildComponent.ɵfac = function GuildComponent_Factory(t) { return new (t || GuildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"])); };
GuildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuildComponent, selectors: [["app-guild"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]])], decls: 52, vars: 4, consts: [[1, "my-3", "p-2", 2, "border", "1px solid lightgray", "border-bottom", "5px solid lightgray", "border-radius", "10px"], [1, "row", "no-gutters"], [1, "col-md-1", 2, "display", "flex", "align-items", "center"], ["alt", "...", 1, "card-img", 2, "margin", "auto", 3, "src"], [1, "col-md-11", 2, "display", "flex", "align-items", "center"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "p-2", "table-responsive"], [1, "table", "table-hover"], ["rowspan", "2", 2, "vertical-align", "middle"], ["colspan", "12", 1, "text-center"], [1, "text-center"], ["tooltip", "PRETEST (\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 10)"], ["tooltip", "Pre-PrPs (\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 10)"], ["tooltip", "\u0E40\u0E02\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19 (\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 10)"], [4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-left"]], template: function GuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E0A\u0E37\u0E48\u0E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(Name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0E23\u0E30\u0E14\u0E31\u0E1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(Levels)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E14\u0E48\u0E32\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, GuildComponent_tbody_51_Template, 2, 1, "tbody", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.guild_image[ctx.guild_name - 1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E01\u0E34\u0E25\u0E4C\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A ", ctx.guild_name, " (Guild)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description[ctx.guild_name - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL2d1aWxkL2d1aWxkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guild',
                templateUrl: './guild.component.html',
                styleUrls: ['./guild.component.css'],
                providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]],
            }]
    }], function () { return [{ type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"] }, { type: src_app_authentication_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/member/member.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/member/member.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/pipes/date-ago.pipe */ "./src/app/services/pipes/date-ago.pipe.ts");




















function MemberComponent_tr_27_cl_image_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cl-image", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("public-idChange", function MemberComponent_tr_27_cl_image_3_Template_cl_image_public_idChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return data_r2.image = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("public-id", data_r2.image);
} }
function MemberComponent_tr_27_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} }
function MemberComponent_tr_27_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r5.calNextLevel(data_r2.exp), "1.2-2"), " %");
} }
function MemberComponent_tr_27_strong_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, data_r2.activity));
} }
function MemberComponent_tr_27_strong_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MemberComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const data_r2 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.openMember(data_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const data_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.openMember(data_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_tr_27_Template_label_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const data_r2 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.onDeleteClick(data_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
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
} }
function MemberComponent_pagination_29_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pagination", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChanged", function MemberComponent_pagination_29_Template_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.pageChanged($event); })("ngModelChange", function MemberComponent_pagination_29_Template_pagination_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.cp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsPerPage", ctx_r1.option.lp)("ngModel", ctx_r1.cp)("totalItems", ctx_r1.total_items);
} }
class MemberComponent {
    constructor(router, alert, level, member, account) {
        this.router = router;
        this.alert = alert;
        this.level = level;
        this.member = member;
        this.account = account;
        this.option = {
            sp: 0,
            lp: 5,
            keySearch: null,
            valueData: null,
        };
        this.UserLogin = this.account.UserLogin;
        this.onLoadMember();
    }
    ngOnInit() { }
    // เรียกดูสมาชิก onInit
    onLoadMember() {
        this.member.loadMember(this.option).then((result) => {
            this.total_items = result.total_items;
            this.items = result.items;
            this.size_pagination = Math.round(Number(this.total_items) / Number(this.option.lp));
            this.cp = Number(this.option.sp) + 1;
        });
    }
    // PageChanged
    pageChanged(event) {
        this.option.sp = event.page - 1;
        this.onLoadMember();
    }
    // คำนวณเลเวล
    calLevel(exp) {
        return this.level.calculateLevel(exp);
    }
    // คำนวณ % ที่เหลือ
    calNextLevel(exp) {
        return this.level.calExpLeftToNextLevel(exp);
    }
    // ค้นหา User
    onSearch() {
        if (!this.searchText) {
            this.onLoadMember();
        }
        this.option.sp = 0;
        this.option.valueData = this.searchText;
        this.member.loadMember(this.option).then((result) => {
            this.total_items = result.total_items;
            this.items = result.items;
            this.size_pagination = Math.round(Number(this.total_items) / Number(this.option.lp));
            this.cp = Number(this.option.sp) + 1;
        });
    }
    // click View User
    openMember(item) {
        this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Information], {
            queryParams: { item },
        });
    }
    // Click Delete User
    onDeleteClick(_id) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'แจ้งเตือน',
            text: 'คุณต้องการจะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่, ลบเดี๋ยวนี้',
        }).then((result) => {
            if (result.value) {
                this.member
                    .deleteMember(_id)
                    .then(() => {
                    this.alert.success('ข้อมูลดังกล่าวถูกลบเรียบร้อยแล้ว', 'Deleted!');
                    this.option.valueData = null;
                    this.option.sp = 0;
                    this.onLoadMember();
                })
                    .catch((err) => {
                    this.alert.notify(err.message);
                });
            }
        });
    }
}
MemberComponent.ɵfac = function MemberComponent_Factory(t) { return new (t || MemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"])); };
MemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MemberComponent, selectors: [["app-member"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]])], decls: 30, vars: 4, consts: [[1, "row", "py-4"], [2, "display", "block", "width", "100%"], ["aria-hidden", "true", 1, "fa", "fa-id-card-o"], [1, "col-md-12", "my-3"], [1, "input-group"], ["id", "input2-group2", "name", "input2-group2", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C, \u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07, \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", "table-responsive-sm", "table-hover", "table-outline", "mb-0"], [1, "thead-light"], [1, "text-center"], [1, "icon-people"], [4, "ngFor", "ngForOf"], ["directionLinks", "true", "previousText", "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", "nextText", "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B", 3, "itemsPerPage", "ngModel", "totalItems", "pageChanged", "ngModelChange", 4, "ngIf"], [1, "avatar"], ["style", "max-width: 36px; height: 36px;", "class", "avatar-image avatar-image-member", "crop", "fit", 3, "public-id", "public-idChange", 4, "ngIf"], ["style", "max-width: 36px;", "class", "avatar-image avatar-image-member", "src", "../../../../assets/image/no-image.png", 4, "ngIf"], [1, "avatar-status", "badge-danger"], [1, "small", "text-muted"], [1, "clearfix"], [1, "float-left"], [1, "float-right"], [1, "text-muted"], ["max", "100", "type", "warning", "striped", "true", "animate", "true", 3, "value"], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["btnRadioGroup", "", 1, "btn-group"], ["btnRadio", "A", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-eye"], ["btnRadio", "B", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-pencil-square-o"], ["btnRadio", "C", "tabindex", "0", "role", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-trash"], ["crop", "fit", 1, "avatar-image", "avatar-image-member", 2, "max-width", "36px", "height", "36px", 3, "public-id", "public-idChange"], ["src", "../../../../assets/image/no-image.png", 1, "avatar-image", "avatar-image-member", 2, "max-width", "36px"], [1, "text-danger"], ["directionLinks", "true", "previousText", "\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", "nextText", "\u0E2B\u0E19\u0E49\u0E32\u0E16\u0E31\u0E14\u0E44\u0E1B", 3, "itemsPerPage", "ngModel", "totalItems", "pageChanged", "ngModelChange"]], template: function MemberComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberComponent_Template_input_ngModelChange_10_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberComponent_Template_button_click_12_listener() { return ctx.onSearch(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E34\u0E49\u0E19 ", ctx.total_items, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total_items);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_10__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressbarComponent"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_14__["CloudinaryImage"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _services_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_16__["DateAgoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-member',
                templateUrl: './member.component.html',
                styleUrls: ['./member.component.css'],
                providers: [_services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"], _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }, { type: _services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"] }, { type: _services_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/quest/quest.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/quest/quest.component.ts ***!
  \********************************************************************/
/*! exports provided: QuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestComponent", function() { return QuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");



class QuestComponent {
    constructor() {
        this.title = "Quest";
    }
    ngOnInit() {
    }
}
QuestComponent.ɵfac = function QuestComponent_Factory(t) { return new (t || QuestComponent)(); };
QuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestComponent, selectors: [["app-quest"]], decls: 7, vars: 1, consts: [[1, "row", "my-3"], [1, "col-md-4", "p-3", "border"], [1, "jumbotron", "py-2", "px-3"], [1, "col-md-8"], ["src", "../../../../assets/image/map.png", "alt", "", 1, "border", "rounded", "p-1", 2, "max-width", "100%"]], template: function QuestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " is available on Mobile ");
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__["AuthContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcXVlc3QvcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quest',
                templateUrl: './quest.component.html',
                styleUrls: ['./quest.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/quiz/dynamic-form/dynamic-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/authentication/components/quiz/dynamic-form/dynamic-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DynamicFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mobile ", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r5);
} }
function DynamicFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48 ", j_r7 + 1, "");
} }
function DynamicFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 ", k_r9 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", k_r9);
} }
function DynamicFormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 ", l_r11 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", l_r11);
} }
class DynamicFormComponent {
    constructor(_builder) {
        this._builder = _builder;
        this.dynamicForm = this._builder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: [''],
            address: this._builder.group({
                address1: [''],
                address2: [''],
                state: [''],
                zip: ['']
            }),
            mobiles: this._builder.array([
                this._builder.control('')
            ])
        });
        this.form = this._builder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            questions: this._builder.array([
                this._builder.control('')
            ])
        });
    }
    ngOnInit() {
    }
    get mobiles() {
        return this.dynamicForm.get('mobiles');
    }
    get situations() {
        return this.form.get('situations');
    }
    get questions() {
        return this.form.get('questions');
    }
    get answers() {
        return this.form.get('answers');
    }
    addNewSituation() {
        this.situations.push(this._builder.control(''));
    }
    addNewQuestion() {
        this.questions.push(this._builder.control(''));
    }
    addNewAnswer() {
        this.answers.push(this._builder.control(''));
    }
    addNewMobile() {
        this.mobiles.push(this._builder.control(''));
    }
    onSubmit() {
        console.log(this.form.value);
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], decls: 25, vars: 6, consts: [[3, "formGroup", "submit"], ["formArrayName", "mobiles"], [3, "click"], [4, "ngFor", "ngForOf"], ["type", "submit"], ["formArrayName", "situations"], ["formArrayName", "questions"], ["formArrayName", "answers"], ["type", "text", 3, "formControlName"], ["type", "text", "formControlName", "j", 1, "form-control"], ["type", "text", 1, "form-control", 3, "formControlName"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DynamicFormComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_5_listener() { return ctx.addNewMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicFormComponent_div_7_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E19\u0E48\u0E2D\u0E22\u0E14\u0E34\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DynamicFormComponent_Template_form_submit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Make Sure Situation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_14_listener() { return ctx.addNewSituation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_16_listener() { return ctx.addNewQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_18_listener() { return ctx.addNewAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DynamicFormComponent_div_20_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DynamicFormComponent_div_22_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DynamicFormComponent_div_24_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dynamicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mobiles.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.situations.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answers.controls);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_2__["AuthContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcXVpei9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-form',
                templateUrl: './dynamic-form.component.html',
                styleUrls: ['./dynamic-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/quiz/prps-quiz/prps-quiz.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/authentication/components/quiz/prps-quiz/prps-quiz.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PrpsQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrpsQuizComponent", function() { return PrpsQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/quiz.service */ "./src/app/authentication/services/quiz.service.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");













function PrpsQuizComponent_div_14_tr_13_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_14_tr_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_14_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrpsQuizComponent_div_14_tr_13_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrpsQuizComponent_div_14_tr_13_span_5_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrpsQuizComponent_div_14_tr_13_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onLoadUpdate(data_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrpsQuizComponent_div_14_tr_13_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onDelete(data_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r3.ref == "PRE-PRPS-TEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r3.ref == "POST-PRPS-TEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, data_r3.situation, 0, 65), "....");
} }
function PrpsQuizComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PrpsQuizComponent_div_14_tr_13_Template, 14, 8, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list_item);
} }
function PrpsQuizComponent_div_15_div_14_div_4_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrpsQuizComponent_div_15_div_14_div_4_input_3_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.choose($event, j_r15, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", j_r15);
} }
function PrpsQuizComponent_div_15_div_14_div_4_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrpsQuizComponent_div_15_div_14_div_4_input_4_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.choose($event, j_r15, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", j_r15);
} }
function PrpsQuizComponent_div_15_div_14_div_4_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0E02\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_15_div_14_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrpsQuizComponent_div_15_div_14_div_4_div_5_button_1_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.score[i_r18] == 1);
} }
function PrpsQuizComponent_div_15_div_14_div_4_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0E02\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_15_div_14_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrpsQuizComponent_div_15_div_14_div_4_div_6_button_1_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.score[3 * j_r15 + j_r15 + i_r18] == 1);
} }
function PrpsQuizComponent_div_15_div_14_div_4_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrpsQuizComponent_div_15_div_14_div_4_input_7_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r40.answer[i_r18] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("name", "", j_r15, "", i_r18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 ", i_r18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.answer[i_r18]);
} }
function PrpsQuizComponent_div_15_div_14_div_4_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrpsQuizComponent_div_15_div_14_div_4_input_8_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r45.answer[3 * j_r15 + j_r15 + i_r18] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("name", "", j_r15, "", i_r18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 ", i_r18 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.answer[3 * j_r15 + j_r15 + i_r18]);
} }
function PrpsQuizComponent_div_15_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PrpsQuizComponent_div_15_div_14_div_4_input_3_Template, 1, 1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrpsQuizComponent_div_15_div_14_div_4_input_4_Template, 1, 1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrpsQuizComponent_div_15_div_14_div_4_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PrpsQuizComponent_div_15_div_14_div_4_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PrpsQuizComponent_div_15_div_14_div_4_input_7_Template, 1, 4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PrpsQuizComponent_div_15_div_14_div_4_input_8_Template, 1, 4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r15 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r15 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r15 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r15 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r15 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r15 > 0);
} }
function PrpsQuizComponent_div_15_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrpsQuizComponent_div_15_div_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const j_r15 = ctx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r52.question[j_r15] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrpsQuizComponent_div_15_div_14_div_4_Template, 9, 6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r15 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 : ", j_r15 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", j_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 ", j_r15 + 1, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.question[j_r15]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.interfaceFormat);
} }
function PrpsQuizComponent_div_15_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrpsQuizComponent_div_15_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_15_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrpsQuizComponent_div_15_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.onUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_15_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrpsQuizComponent_div_15_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrpsQuizComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrpsQuizComponent_div_15_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.selectedValue = $event; })("typeaheadOnSelect", function PrpsQuizComponent_div_15_Template_input_typeaheadOnSelect_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrpsQuizComponent_div_15_Template_textarea_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PrpsQuizComponent_div_15_div_14_Template, 5, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PrpsQuizComponent_div_15_button_16_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PrpsQuizComponent_div_15_button_17_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PrpsQuizComponent_div_15_button_18_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedValue)("typeahead", ctx_r1.states)("typeaheadMinLength", 0)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.interfaceFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._id);
} }
const _c0 = function () { return ["/auth/menu"]; };
class PrpsQuizComponent {
    constructor(alert, quiz, router) {
        this.alert = alert;
        this.quiz = quiz;
        this.router = router;
        this.number_of_form = {
            situation: 0,
            question: 0,
            answer: 0,
        };
        this.interfaceFormat = ['1', '2', '3', '4'];
        // OnOffMenu
        this.menu = false;
        this.question = ['', '', '', ''];
        this.answer = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        this.score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.formTemplate = PrpsQuizComponent;
        this.states = [
            { id: 1, name: 'ก่อนเรียน', _id: 'PRE-PRPS-TEST' },
            { id: 2, name: 'หลังเรียน', _id: 'POST-PRPS-TEST' },
        ];
        this.formLength = 0;
        this.model = [];
        this.onLoadListItem();
    }
    ngOnInit() { }
    onSelect(event) {
        this.selectedOption = event.item;
    }
    onLoadListItem() {
        this.quiz.getAllPrpsList().then(result => {
            this.list_item = result.items;
            console.log(result);
        });
    }
    onLoadUpdate(_id) {
        this.menu = true;
        this.quiz.getPrpstoUpdate(_id).then(result => {
            this._id = result.items._id;
            this.name = result.items.situation;
            this.question = result.items.questions;
            this.answer[0] = result.items.answers[0][0].name;
            this.answer[1] = result.items.answers[0][1].name;
            this.answer[2] = result.items.answers[0][2].name;
            this.answer[3] = result.items.answers[0][3].name;
            this.answer[4] = result.items.answers[0][0].name;
            this.answer[5] = result.items.answers[0][1].name;
            this.answer[6] = result.items.answers[0][2].name;
            this.answer[7] = result.items.answers[0][3].name;
            this.answer[8] = result.items.answers[0][0].name;
            this.answer[9] = result.items.answers[0][1].name;
            this.answer[10] = result.items.answers[0][2].name;
            this.answer[11] = result.items.answers[0][3].name;
            this.answer[12] = result.items.answers[0][0].name;
            this.answer[13] = result.items.answers[0][1].name;
            this.answer[14] = result.items.answers[0][2].name;
            this.answer[15] = result.items.answers[0][3].name;
            this.score[0] = result.items.answers[0][0].score;
            this.score[1] = result.items.answers[0][1].score;
            this.score[2] = result.items.answers[0][2].score;
            this.score[3] = result.items.answers[0][3].score;
            this.score[4] = result.items.answers[0][0].score;
            this.score[5] = result.items.answers[0][1].score;
            this.score[6] = result.items.answers[0][2].score;
            this.score[7] = result.items.answers[0][3].score;
            this.score[8] = result.items.answers[0][0].score;
            this.score[9] = result.items.answers[0][1].score;
            this.score[10] = result.items.answers[0][2].score;
            this.score[11] = result.items.answers[0][3].score;
            this.score[12] = result.items.answers[0][0].score;
            this.score[13] = result.items.answers[0][1].score;
            this.score[14] = result.items.answers[0][2].score;
            this.score[15] = result.items.answers[0][3].score;
        });
    }
    onDelete(_id) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'ลบข้อมูล ?',
            text: 'คุณต้องการที่จะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            confirmButtonColor: '#6D3B47',
            confirmButtonText: 'ลบข้อมูล!',
        }).then((res) => {
            if (res.value) {
                this.quiz.deletePrps(_id).then(() => {
                    this.alert.success("ลบข้อมูลเรียบร้อยแล้ว !");
                    this.onLoadListItem();
                });
                this.onLoadListItem();
            }
        });
    }
    choose(event, j, i) {
        var dumb = 3;
        if (j == 0) {
            this.score[0] = 0;
            this.score[1] = 0;
            this.score[2] = 0;
            this.score[3] = 0;
            return (this.score[i] = 1);
        }
        else if (j == 1) {
            this.score[4] = 0;
            this.score[5] = 0;
            this.score[6] = 0;
            this.score[7] = 0;
        }
        else if (j == 2) {
            this.score[8] = 0;
            this.score[9] = 0;
            this.score[10] = 0;
            this.score[11] = 0;
        }
        else if (j == 3) {
            this.score[12] = 0;
            this.score[13] = 0;
            this.score[14] = 0;
            this.score[15] = 0;
        }
        this.score[3 * j + j + i] = 1;
    }
    onSubmit() {
        if (!this.selectedOption) {
            return this.alert.notify('กรุณาเลือกประเภทบททดสอบ');
        }
        var dummy = 0;
        for (var i = 0; i < 16; i++) {
            if (this.score[i] == 1)
                dummy += 1;
        }
        if (dummy < 4) {
            return this.alert.notify('กรุณาระบุคำตอบให้ครบทุกข้อ!');
        }
        var dumb = [];
        var obj = {
            ref: this.selectedOption._id,
            situation: this.name,
            questions: this.question,
            answers: []
        };
        // section1
        for (var i = 0; i < 4; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        for (var i = 4; i < 8; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        for (var i = 8; i < 12; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        for (var i = 12; i < 16; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        this.quiz.addPrPs(obj).then(result => {
            this.alert.success(result.message);
            this.router.navigate(['', src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Home]);
        });
    }
    onUpdate() {
        if (!this._id) {
            return this.alert.notify("เกิดข้อผิดพลาด !");
        }
        if (!this.selectedOption) {
            return this.alert.notify('กรุณาเลือกประเภทบททดสอบ');
        }
        var dummy = 0;
        for (var i = 0; i < 16; i++) {
            if (this.score[i] == 1)
                dummy += 1;
        }
        if (dummy < 4) {
            return this.alert.notify('กรุณาระบุคำตอบให้ครบทุกข้อ!');
        }
        var dumb = [];
        var obj = {
            ref: this.selectedOption._id,
            situation: this.name,
            questions: this.question,
            answers: []
        };
        // section1
        for (var i = 0; i < 4; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        for (var i = 4; i < 8; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        for (var i = 8; i < 12; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        for (var i = 12; i < 16; i++) {
            dumb.push({
                name: this.answer[i],
                score: this.score[i]
            });
        }
        obj.answers.push(dumb);
        dumb = [];
        this.quiz.updatePrps(this._id, obj).then(result => {
            this.alert.success("แก้ไขข้อมูลสำเร็จ !");
            this.onCancel();
        });
    }
    onCancel() {
        this._id = null;
        this.menu = false;
    }
}
PrpsQuizComponent.ɵfac = function PrpsQuizComponent_Factory(t) { return new (t || PrpsQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PrpsQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrpsQuizComponent, selectors: [["app-prps-quiz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])], decls: 16, vars: 4, consts: [[1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "border-aqua", "border-bottom"], [1, "container"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover"], [1, "thead-dark", "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 2, "float", "right"], [1, "text-center"], ["class", "text-info", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [3, "click"], [1, "fa", "fa-pencil-square-o", "text-warning", "mx-2"], [1, "fa", "fa-trash-o", "text-danger"], [1, "text-info"], [1, "text-danger"], [1, "bg-light", "px-3", "py-3", "my-3", 2, "border", "1px solid lightgray", "border-radius", "5px"], ["typeaheadOptionsLimit", "5", "typeaheadOptionField", "name", "placeholder", "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48 1,2,3", "required", "", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadMinLength", "isAnimated", "ngModelChange", "typeaheadOnSelect"], [1, "card", "my-3", 2, "border-top", "5px solid darkgray"], [1, "card-body"], [1, "form-group"], ["for", "disabledTextInput"], ["name", "name", "id", "", "cols", "30", "rows", "7", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group mt-2", 4, "ngFor", "ngForOf"], [1, "mx-5", "mb-4"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-warning text-white mx-2", 3, "click", 4, "ngIf"], ["class", "btn btn-danger text-white", 3, "click", 4, "ngIf"], [1, "form-group", "mt-2"], ["type", "text", 1, "form-control", 3, "ngModel", "name", "placeholder", "ngModelChange"], ["class", "input-group m-1", 4, "ngFor", "ngForOf"], [1, "input-group", "m-1"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "radio", "value", "score[i]", 3, "name", "change", 4, "ngIf"], ["type", "radio", "value", "score[3*j+j+i]", 3, "name", "change", 4, "ngIf"], ["type", "text", "class", "form-control", 3, "ngModel", "name", "placeholder", "ngModelChange", 4, "ngIf"], ["type", "radio", "value", "score[i]", 3, "name", "change"], ["type", "radio", "value", "score[3*j+j+i]", 3, "name", "change"], ["class", "btn btn-blue text-white", 4, "ngIf"], [1, "btn", "btn-blue", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-hand-o-right"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-warning", "text-white", "mx-2", 3, "click"], [1, "btn", "btn-danger", "text-white", 3, "click"]], template: function PrpsQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0E40\u0E21\u0E19\u0E39\u0E2B\u0E25\u0E31\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E01\u0E48\u0E2D\u0E19 - \u0E2B\u0E25\u0E31\u0E07 \u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E01\u0E48\u0E2D\u0E19 - \u0E2B\u0E25\u0E31\u0E07 \u0E40\u0E23\u0E35\u0E22\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E2D\u0E14\u0E04\u0E25\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PrpsQuizComponent_div_14_Template, 16, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PrpsQuizComponent_div_15_Template, 19, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == true);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_10__["TypeaheadDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcXVpei9wcnBzLXF1aXovcHJwcy1xdWl6LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrpsQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prps-quiz',
                templateUrl: './prps-quiz.component.html',
                styleUrls: ['./prps-quiz.component.css'],
                providers: [src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]]
            }]
    }], function () { return [{ type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/quiz/quiz.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/components/quiz/quiz.component.ts ***!
  \******************************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/quiz.service */ "./src/app/authentication/services/quiz.service.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");












const _c0 = ["scrollMe"];
function QuizComponent_div_14_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_14_tr_11_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onLoadUpdate(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_14_tr_11_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onDelete(data_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
} }
function QuizComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizComponent_div_14_tr_11_Template, 10, 2, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_14_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addQuizItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list_item);
} }
function QuizComponent_div_15_div_8_span_7_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0E02\u0E49\u0E2D\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_15_div_8_span_7_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_15_div_8_span_7_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const sub_data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return sub_data_r20.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const j_r21 = ctx_r27.index;
    const sub_data_r20 = ctx_r27.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 ", j_r21 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", sub_data_r20.name);
} }
function QuizComponent_div_15_div_8_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_div_8_span_7_Template_input_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const j_r21 = ctx.index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.choose($event, i_r16, j_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_15_div_8_span_7_button_5_Template, 3, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuizComponent_div_15_div_8_span_7_input_6_Template, 1, 2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_data_r20 = ctx.$implicit;
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", data_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_data_r20.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_data_r20.correct == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.switchInput == 0);
} }
function QuizComponent_div_15_div_8_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_div_8_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.onAddSubArticle(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_15_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_15_div_8_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const data_r15 = ctx.$implicit; return data_r15.question = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuizComponent_div_15_div_8_span_7_Template, 7, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuizComponent_div_15_div_8_a_8_Template, 3, 0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r15.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.article[i_r16].answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.switchInput == 0);
} }
function QuizComponent_div_15_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.onAddArticle(ctx_r37.article.length - 1, "minus"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_15_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_15_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_15_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.updateSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0E43\u0E0A\u0E49\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E19\u0E35\u0E49\u0E01\u0E31\u0E1A\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_15_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.selectedValue = $event; })("typeaheadOnSelect", function QuizComponent_div_15_Template_input_typeaheadOnSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuizComponent_div_15_div_8_Template, 9, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_15_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.onAddArticle(ctx_r48.article.length); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizComponent_div_15_button_11_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuizComponent_div_15_button_12_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuizComponent_div_15_button_13_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuizComponent_div_15_button_14_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E49\u0E2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedValue)("typeahead", ctx_r1.states)("typeaheadMinLength", 0)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.article);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.article.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.fix_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.fix_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.fix_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.article.length, " ");
} }
const _c1 = function () { return ["/auth/menu"]; };
class QuizComponent {
    constructor(alert, quiz) {
        this.alert = alert;
        this.quiz = quiz;
        this.menu = false;
        this.states = [{ id: 1, name: 'Pre-test', _id: 'PRE-TEST' }];
        this.article = [];
        this.switchInput = 0;
        this.quiz.getAllChapter().then((result) => {
            var data = this.states.concat(result.items);
            this.states = data;
        });
        this.loadQuizList();
    }
    ngOnInit() { }
    onSelect(event) {
        this.selectedOption = event.item;
        // console.log(this.selectedOption.ref);
    }
    loadQuizList() {
        this.quiz.getAllQuizList().then((result) => {
            this.list_item = result.items;
        });
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    onAddArticle(index, minus) {
        if (minus) {
            if (this.article.length > 1) {
                return this.article.pop();
            }
        }
        this.article.push({
            _id: index,
            question: '',
        });
    }
    onAddSubArticle(index, minus) {
        if (!this.article[index].answer) {
            this.article[index].answer = [
                {
                    _id: index + 1,
                    name: '',
                    correct: 0,
                },
            ];
        }
        else {
            this.article[index].answer.push({
                _id: index + 1,
                name: '',
                correct: 0,
            });
        }
    }
    onSwitchInput() {
        if (this.switchInput == 0) {
            return (this.switchInput = 1);
        }
        this.switchInput = 0;
    }
    choose(event, main, index) {
        if (this.stack_main == main) {
            this.article[main].answer[this.stack_index].correct = 0;
        }
        this.article[main].answer[index].correct = 1;
        this.stack_main = main;
        this.stack_index = index;
    }
    onLoadUpdate(data) {
        this.menu = true;
        // console.log(data)
        this.quiz.getAllQuiz(data._id).then((result) => {
            // console.log("BBE")
            console.log(result);
            this.fix_id = result.items._id;
            this.selectedValue = result.items.name;
            this.article = result.items.choice;
            this.ref = result.items.ref;
        });
    }
    onDelete(_id) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'ลบข้อมูล ?',
            text: 'คุณต้องการที่จะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            confirmButtonColor: '#6D3B47',
            confirmButtonText: 'ลบข้อมูล!',
        }).then((res) => {
            if (res.value) {
                this.quiz.deleteQuiz(_id).then((result) => {
                    this.alert.success('ลบข้อมูลสำเร็จ');
                });
                this.loadQuizList();
            }
        });
    }
    submit() {
        if (!this.selectedOption) {
            return this.alert.notify('กรุณาเลือก แบบฝึกหัด', 'แจ้งเตือน', 'warning');
        }
        var obj = {
            name: this.selectedOption.name,
            detail: this.selectedOption.region,
            choice: this.article,
            ref: this.selectedOption._id,
        };
        this.quiz
            .addQuiz(obj)
            .then((result) => {
            this.alert.success(result.message);
        })
            .catch((err) => {
            this.alert.notify(err.message);
        });
    }
    addQuizItem() {
        this.onCancel();
        this.menu = true;
    }
    updateSubmit() {
        var obj = {
            name: this.selectedValue,
            choice: this.article,
            ref: this.ref,
        };
        this.quiz.updateQuiz(this.fix_id, obj).then((result) => {
            this.alert.success('แก้ไขข้อมูลสำเร็จ!');
            this.article = [];
            this.menu = false;
            this.fix_id = null;
        });
    }
    onCancel() {
        this.article = [];
        this.menu = false;
        this.fix_id = null;
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], viewQuery: function QuizComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])], decls: 16, vars: 4, consts: [[1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "border-aqua", "border-bottom", "mb-4"], [1, "container"], ["aria-hidden", "true", 1, "fa", "fa-newspaper-o"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover"], [1, "thead-dark", "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 2, "float", "right", 3, "click"], [3, "click"], [1, "fa", "fa-pencil-square-o", "text-warning", "mx-2"], [1, "fa", "fa-trash-o", "text-danger"], [1, "card", "mb-2"], [1, "card-header"], ["for", ""], ["typeaheadOptionsLimit", "5", "typeaheadOptionField", "name", "placeholder", "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48 1,2,3", "required", "", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadMinLength", "isAnimated", "ngModelChange", "typeaheadOnSelect"], [1, "card-body", "form-group"], ["type", "text", "placeholder", "\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21", 1, "form-control", 2, "background-color", "rgb(245, 245, 245)", "border", "0px", "border-bottom", "1px thick darkgray"], ["class", "card my-4 text-black", "style", "border:1px solid rgb(90,156,255);border-left: 10px solid rgb(90, 156, 255);", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 2, "background-color", "rgb(90, 156, 255)", "border", "0px", "height", "100%", 3, "click"], ["class", "btn btn-info ml-1", "style", "background-color: rgb(165, 165, 165);border:0px;height: 100%;", 3, "click", 4, "ngIf"], ["class", "btn btn-info text-white", "style", "border:1px solid darkgreen;background-color: rgb(44, 194, 94);float: right;", 3, "click", 4, "ngIf"], ["class", "btn btn-danger text-white", "style", "float: right;", 3, "click", 4, "ngIf"], ["class", "btn btn-warning text-white mx-2", "style", "float:right;", 3, "click", 4, "ngIf"], [1, "border-top", "text-right", "my-2"], [1, "card", "my-4", "text-black", 2, "border", "1px solid rgb(90,156,255)", "border-left", "10px solid rgb(90, 156, 255)"], ["scrollMe", ""], [1, "row"], [1, "col-md-12", 2, "padding-left", "10"], ["type", "text", "placeholder", "\u0E04\u0E33\u0E16\u0E32\u0E21 ?", "required", "", 2, "display", "block", "width", "100%", "background-color", "rgba(0, 0, 0, 0)", "border", "0px", "border-bottom", "2px solid rgb(212, 212, 212)", "font-size", "xx-large", 3, "ngModel", "ngModelChange"], [1, "card-body"], [3, "click", 4, "ngIf"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "radio", "aria-label", "Radio button for following text input", 3, "name", "value", "click"], ["class", "btn btn-blue text-white", 4, "ngIf"], ["type", "text", "class", "form-control", "aria-label", "Text input with radio button", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], [1, "btn", "btn-blue", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-hand-o-right"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "ml-1", 2, "background-color", "rgb(165, 165, 165)", "border", "0px", "height", "100%", 3, "click"], ["aria-hidden", "true"], [1, "btn", "btn-info", "text-white", 2, "border", "1px solid darkgreen", "background-color", "rgb(44, 194, 94)", "float", "right", 3, "click"], [1, "btn", "btn-danger", "text-white", 2, "float", "right", 3, "click"], [1, "btn", "btn-warning", "text-white", "mx-2", 2, "float", "right", 3, "click"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuizComponent_div_14_Template, 14, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuizComponent_div_15_Template, 19, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == true);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__["TypeaheadDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.css'],
                providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]],
            }]
    }], function () { return [{ type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"] }]; }, { myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollMe']
        }] }); })();


/***/ }),

/***/ "./src/app/authentication/components/quizgame/quizgame.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/quizgame/quizgame.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuizgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizgameComponent", function() { return QuizgameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");



class QuizgameComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuizgameComponent.ɵfac = function QuizgameComponent_Factory(t) { return new (t || QuizgameComponent)(); };
QuizgameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizgameComponent, selectors: [["app-quizgame"]], decls: 7, vars: 0, consts: [[1, "row", "my-3"], [1, "col-md-4", "p-3", "border"], [1, "jumbotron", "py-2", "px-3"], [1, "col-md-8"], ["src", "../../../../assets/image/map.png", "alt", "", 1, "border", "rounded", "p-1", 2, "max-width", "100%"]], template: function QuizgameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Quiz is available on Mobile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__["AuthContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcXVpemdhbWUvcXVpemdhbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizgameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quizgame',
                templateUrl: './quizgame.component.html',
                styleUrls: ['./quizgame.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/services/resource.service */ "./src/app/authentication/services/resource.service.ts");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/services/quiz.service */ "./src/app/authentication/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















function ContentComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.item.name, " ");
} }
function ContentComponent_h1_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.item.name);
} }
function ContentComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_li_31_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.showPDF(ctx_r10.item.pdf.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.item.pdf.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r2.item.pdf.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ContentComponent_li_32_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.item.youtube.title);
} }
function ContentComponent_li_32_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_li_32_li_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const i_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.showYoutube(ctx_r16.item.youtube.video.url[i_r15]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.item.youtube.video.text[i_r15]);
} }
function ContentComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentComponent_li_32_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContentComponent_li_32_li_3_Template, 3, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.item.youtube.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.item.youtube.video.text);
} }
function ContentComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.hypertext.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r4.item.hypertext.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ContentComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.startQuiz(ctx_r18.item._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContentComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContentComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.url_pdf, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function ContentComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.url_youtube, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function ContentComponent_div_38_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r20.quiz_item.items[0]._id)("value", data_r21.point);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r21.answer);
} }
function ContentComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_div_38_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0E04\u0E33\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 1 \u0E08\u0E32\u0E01 ", ctx_r9.quiz_item.total_items, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.quiz_item.items[0].question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.quiz_item.items[0].choice);
} }
const _c0 = function () { return ["/auth/resource"]; };
class ContentComponent {
    constructor(activateRouter, resource, router, alert, quiz, sanitizer) {
        this.activateRouter = activateRouter;
        this.resource = resource;
        this.router = router;
        this.alert = alert;
        this.quiz = quiz;
        this.sanitizer = sanitizer;
        this.isCollapsed = false;
        this.switch_display = 'PDF';
        this.activateRouter.queryParams.forEach((params) => {
            this.chapter_id = params.item;
        });
        this.quiz.getChapterByID(this.chapter_id).then((result) => {
            if (result.item.length > 0) {
                this.total_item = 1;
            }
        });
        this.resource.onShowOneChapter(this.chapter_id).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.item = yield result.item[0];
            if (!this.item) {
                this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Resource]);
                this.alert.something_wrong('เกิดข้อผิดพลาก');
            }
        }));
    }
    ngOnInit() { }
    showPDF(url) {
        console.log(url);
        var pdf;
        if (!url)
            return;
        if (url.substring(url.length - 5) == '/view') {
            pdf = url.substring(0, url.length - 4) + 'preview';
        }
        else {
            pdf =
                'https://drive.google.com/file/d/' + url.substr(33) + '/preview';
        }
        if (this.isCollapsed == false) {
            this.isCollapsed = true;
        }
        try {
            this.url_pdf = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
        }
        catch (err) {
            this.alert.showWarning('เกิดข้อผิดพลาดกับลิงก์ PDF', err);
        }
        this.switch_display = 'PDF';
    }
    showYoutube(url) {
        url = url.substring(32);
        if (this.isCollapsed == false) {
            this.isCollapsed = true;
        }
        this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/' + url);
        this.switch_display = 'youtube';
    }
    startQuiz(id) {
        if (this.isCollapsed == false) {
            this.isCollapsed = true;
        }
        // this.quiz.getAllQuiz(id).then(result=>{
        //   this.quiz_item=result;
        // })
        this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Exercise], {
            queryParams: { id },
        });
    }
    onSubmit() { }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]])], decls: 39, vars: 15, consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "routerLink"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 1, "col-md-5", "my-3", 3, "collapse", "isAnimated"], [1, "well", "well-lg", "card", "card-block", "card-header"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "mt-2", "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium", 2, "text-indent", "20px", "text-align", "justify"], [1, "col-md-7", "my-3"], [4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-seccondary", "disabled", "", 4, "ngIf"], ["class", "col-md-5", 4, "ngIf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [3, "click"], [3, "innerHtml"], [4, "ngFor", "ngForOf"], [1, "pointer", 3, "click"], [2, "max-width", "100%", 3, "innerHtml"], [1, "btn", "btn-primary", 3, "click"], ["disabled", "", 1, "btn", "btn-seccondary"], [1, "col-md-5"], ["width", "100%", "height", "480", 3, "src"], ["width", "100%", "height", "400px", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "avatar-image", 3, "src"], [1, "badge", "badge-dark", 2, "font-size", "smaller"], [1, "my-3", 2, "font-weight", "bold"], ["class", "input-group my-1", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "input-group", "my-1"], [1, "input-group-prepend", "pointer"], [1, "input-group-text"], ["type", "radio", "aria-label", "Radio button for following text input", 3, "name", "value"], ["type", "text", "readonly", "", "aria-label", "Text input with radio button", 1, "form-control", "pointer", 3, "value"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19 ");
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
    } if (rf & 2) {
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
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css'],
                providers: [src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_authentication_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: src_app_authentication_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }]; }, null); })();


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
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/resource.service */ "./src/app/authentication/services/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ResourceComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResourceComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const data_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openContent(data_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");
} }
class ResourceComponent {
    constructor(router, resource) {
        this.router = router;
        this.resource = resource;
        // โหลดหน่วยที่
        this.resource.onShowAllChapter().then((result) => {
            this.items = result.items;
        });
    }
    ngOnInit() { }
    // load Menu Content
    openContent(item) {
        this.router.navigate(['', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"].Content], {
            queryParams: { item },
        });
    }
}
ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"])); };
ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["app-resource"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])], decls: 23, vars: 1, consts: [[1, "row", "my-4"], [1, "col-md-12"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-5"], [1, "px-2", "py-1", "text-center", "pointer", 2, "background-color", "lightgray", "border", "1px solid lightgray", "border-radius", "15px"], [1, "text-muted", "medium"], [1, "col-md-7"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "action-button", "shadow", "animate", "button-blue", 2, "text-decoration", "none", "width", "100%", 3, "click"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_5__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resource',
                templateUrl: './resource.component.html',
                styleUrls: ['./resource.component.css'],
                providers: [_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/stage/stage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/stage/stage.component.ts ***!
  \********************************************************************/
/*! exports provided: StageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageComponent", function() { return StageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/authentication/services/level.service.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _authentication_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function StageComponent_tbody_29_tr_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OFF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StageComponent_tbody_29_tr_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StageComponent_tbody_29_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StageComponent_tbody_29_tr_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onReady(data_r2._id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StageComponent_tbody_29_tr_1_span_9_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StageComponent_tbody_29_tr_1_span_10_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r2.firstname, " ", data_r2.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.guild_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.ready[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ready[i_r3]);
} }
function StageComponent_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StageComponent_tbody_29_tr_1_Template, 11, 5, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class StageComponent {
    constructor(member, level, account, grade, alert, router) {
        this.member = member;
        this.level = level;
        this.account = account;
        this.grade = grade;
        this.alert = alert;
        this.router = router;
        this.description = [
            'The strongest guild.',
            'Famous guild',
            'Guild that loves peace',
            'Guild hiding in the dark.',
            'Guilds who like to war more than use the brain.',
        ];
        this.guild_image = [
            '../../../../../assets/image/guild/guild4.png',
            '../../../../../assets/image/guild/guild1.png',
            '../../../../../assets/image/guild/guild3.jpg',
            '../../../../../assets/image/guild/skull.png',
            '../../../../../assets/image/guild/guild2.png',
        ];
        this.ready = [];
        this.member
            .loadUserbyGuild(this.account.UserLogin._id)
            .then((result) => {
            this.total_user = result.items.length;
            this.items = result.items;
            this.setGuildName(this.items[0].guild);
            console.log(this.items);
        });
    }
    setGuildName(model) {
        if (model == 'เด็กเรียนเก่ง') {
            this.guild_name = 1;
        }
        else if (model == 'ค่อนข้างดี') {
            this.guild_name = 2;
        }
        else if (model == 'ปานกลาง') {
            this.guild_name = 3;
        }
        else if (model == 'พอใช้') {
            this.guild_name = 4;
        }
        else {
            this.guild_name = 5;
        }
    }
    onReady(_id, i) {
        if (!this.ready.includes(_id) == true) {
            this.ready[i] = _id;
        }
    }
    onSubmit() {
        console.log(this.ready);
        if (this.ready.length != this.total_user) {
            return this.alert.notify('ทีมของคุณยังไม่พร้อม !', 'แจ้งเตือน', 'warning');
        }
        this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_4__["AppURL"].Authen, _authentication_url__WEBPACK_IMPORTED_MODULE_5__["AuthURL"].ExerciseStage]);
    }
    ngOnInit() { }
}
StageComponent.ɵfac = function StageComponent_Factory(t) { return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
StageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StageComponent, selectors: [["app-stage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], _services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]])], decls: 34, vars: 4, consts: [[1, "my-3", "p-2", 2, "border", "1px solid lightgray", "border-bottom", "5px solid lightgray", "border-radius", "10px"], [1, "row", "no-gutters"], [1, "col-md-1", 2, "display", "flex", "align-items", "center"], ["alt", "...", 1, "card-img", 2, "margin", "auto", 3, "src"], [1, "col-md-11", 2, "display", "flex", "align-items", "center"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "row"], [1, "col-md-10"], [1, "p-2", "table-responsive"], [1, "table", "table-hover", "table-border"], [1, "text-center"], ["rowspan", "2", 2, "vertical-align", "middle"], [4, "ngIf"], [1, "col-md-2", "text-center"], ["src", "../../../../assets/image/stage.png", "alt", ""], [1, "btn", "btn-info", 3, "click"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], ["class", "text-danger", "style", "border-bottom: 1px dotted black;", 4, "ngIf"], ["class", "text-info", "style", "border-bottom: 1px dotted black;", 4, "ngIf"], [1, "text-danger", 2, "border-bottom", "1px dotted black"], [1, "text-info", 2, "border-bottom", "1px dotted black"]], template: function StageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0E0A\u0E37\u0E48\u0E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0E23\u0E2B\u0E31\u0E2A\u0E01\u0E34\u0E25\u0E4C\u0E14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " (GUILD ID)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0E2A\u0E16\u0E32\u0E19\u0E30 (STATUS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, StageComponent_tbody_29_Template, 2, 1, "tbody", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StageComponent_Template_button_click_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.guild_image[ctx.guild_name - 1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0E01\u0E34\u0E25\u0E4C\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A ", ctx.guild_name, " (Guild)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description[ctx.guild_name - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_9__["AuthContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc3RhZ2Uvc3RhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stage',
                templateUrl: './stage.component.html',
                styleUrls: ['./stage.component.css'],
                providers: [_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"], _services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], _services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]],
            }]
    }], function () { return [{ type: _services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"] }, { type: _services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: _services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/components/sub-menu/sub-menu.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/sub-menu/sub-menu.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuComponent", function() { return SubMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/auth/quiz"]; };
const _c1 = function () { return ["/auth/prps-test"]; };
class SubMenuComponent {
    constructor() {
        this.text = "สุดขอบฟ้าหัวใจพี่จะไปถึง";
    }
    ngOnInit() {
    }
}
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(); };
SubMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubMenuComponent, selectors: [["app-sub-menu"]], decls: 17, vars: 4, consts: [["aria-hidden", "true", 1, "fa", "fa-list"], [1, "d-flex", "justify-content-around", "pr-2", 2, "height", "160px"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-warning", "text-white", 3, "routerLink"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0E01\u0E48\u0E2D\u0E19 - \u0E2B\u0E25\u0E31\u0E07 \u0E40\u0E23\u0E35\u0E22\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_share_components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_1__["AuthContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-menu',
                templateUrl: './sub-menu.component.html',
                styleUrls: ['./sub-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/grade.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/services/grade.service.ts ***!
  \**********************************************************/
/*! exports provided: GradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeService", function() { return GradeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");





class GradeService {
    constructor(http, account, authen) {
        this.http = http;
        this.account = account;
        this.authen = authen;
    }
    addScoreExercise(model) {
        return this.http.requestPost('grade', model)
            .toPromise();
    }
    getScoreExercise(exercise) {
        return this.http.requestGet(`grade/${this.account.UserLogin._id}/${exercise}`)
            .toPromise();
    }
    getScoreExerciseById(id, exercise) {
        return this.http.requestGet(`grade/${id}/${exercise}`)
            .toPromise();
    }
    updateScoreExcerciseById(exercise_id, model) {
        return this.http.requestPatch(`grade/${exercise_id}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
}
GradeService.ɵfac = function GradeService_Factory(t) { return new (t || GradeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"])); };
GradeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GradeService, factory: GradeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"] }]; }, null); })();


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
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");




class LevelService {
    constructor(http, authen) {
        this.http = http;
        this.authen = authen;
    }
    // คำนวณ Level
    calculateLevel(exp) {
        var level;
        if (exp || exp == 0) {
            if (exp < 30) {
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
        }
        return level;
    }
    // คำนวณจาก % Level
    calExpLeftToNextLevel(exp) {
        var level;
        if (exp || exp == 0) {
            if (exp < 30) {
                level = (exp * 100) / 29;
            }
            else if (exp < 50) {
                level = ((exp - 30) * 100) / 19;
            }
            else if (exp < 100) {
                level = ((exp - 50) * 100) / 49;
            }
            else if (exp < 130) {
                level = ((exp - 100) * 100) / 29;
            }
            else if (exp < 150) {
                level = ((exp - 130) * 100) / 19;
            }
            else if (exp < 200) {
                level = ((exp - 150) * 100) / 49;
            }
            else if (exp < 230) {
                level = ((exp - 200) * 100) / 29;
            }
            else if (exp < 250) {
                level = ((exp - 230) * 100) / 19;
            }
            else if (exp < 300) {
                level = ((exp - 250) * 100) / 49;
            }
            else if (exp < 330) {
                level = ((exp - 300) * 100) / 29;
            }
            else if (exp < 350) {
                level = ((exp - 330) * 100) / 19;
            }
            else if (exp < 400) {
                level = ((exp - 350) * 100) / 49;
            }
            else if (exp < 430) {
                level = ((exp - 400) * 100) / 29;
            }
            else if (exp < 450) {
                level = ((exp - 430) * 100) / 19;
            }
            else if (exp < 500) {
                level = ((exp - 450) * 100) / 49;
            }
            else if (exp < 530) {
                level = ((exp - 500) * 100) / 29;
            }
            else if (exp < 550) {
                level = ((exp - 530) * 100) / 19;
            }
            else if (exp < 600) {
                level = ((exp - 650) * 100) / 49;
            }
            else if (exp < 630) {
                level = ((exp - 600) * 100) / 29;
            }
            else if (exp < 650) {
                level = ((exp - 630) * 100) / 19;
            }
            else if (exp < 700) {
                level = ((exp - 650) * 100) / 49;
            }
            else if (exp < 730) {
                level = ((exp - 700) * 100) / 29;
            }
            else if (exp < 750) {
                level = ((exp - 730) * 100) / 19;
            }
            else if (exp < 800) {
                level = ((exp - 750) * 100) / 49;
            }
            else if (exp < 830) {
                level = ((exp - 800) * 100) / 29;
            }
            else if (exp < 850) {
                level = ((exp - 830) * 100) / 19;
            }
            else if (exp < 900) {
                level = ((exp - 850) * 100) / 49;
            }
            else if (exp < 930) {
                level = ((exp - 900) * 100) / 29;
            }
            else if (exp < 950) {
                level = ((exp - 930) * 100) / 19;
            }
            else if (exp < 1000) {
                level = ((exp - 950) * 100) / 49;
            }
            else if (exp >= 1000) {
                level = 100;
            }
        }
        if (level == 100) {
            level = 99.99;
        }
        return Number(level);
        // return Number(level)/10;
    }
    // เพิ่ม exp
    addExptoUser(_id, exp) {
        // id is userId
        return this.http.requestPatch(`user/exp/${_id}`, this.authen.getAuthenticated(), { exp: exp })
            .toPromise();
    }
}
LevelService.ɵfac = function LevelService_Factory(t) { return new (t || LevelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"])); };
LevelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LevelService, factory: LevelService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");





class MemberService {
    constructor(http, https, authen) {
        this.http = http;
        this.https = https;
        this.authen = authen;
    }
    // service แก้ไขสมาชิก
    updateMember(uid, model) {
        return this.http
            .requestPatch(`user/${uid}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
    // โหลดสมาชิก
    loadMember(option) {
        if (option.valueData) {
            return this.http
                .requestGet(`user/search?sp=${option.sp}&lp=${option.lp}&search=${option.valueData}`, this.authen.getAuthenticated())
                .toPromise();
        }
        return this.http
            .requestGet(`user?sp=${option.sp}&lp=${option.lp}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // เพิ่มการเข้าเรียน
    addAttendence(model) {
        return this.http.requestPost('attendence', model)
            .toPromise();
    }
    // get ครั้งที่มาเรียนของนักเรียน
    getTimeAttended(userId) {
        return this.http.requestGet(`attendence/${userId}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // เปิดให้นักศึกษาเซ็นชื่อเข้าเรียน
    patchAttendence(_id, model) {
        return this.http.requestPatch(`attendence/switch/${_id}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
    patchAttendenceSick(_id, model) {
        return this.http.requestPatch(`attendence/sick/${_id}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
    // นักศึกษาลงชื่อเข้าเรียน
    checkInAttendence(_id, model) {
        return this.http.requestPatch(`attendence/${_id}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
    // get ครั้งที่ วันที่เรียนของห้องห้องนั้น
    loadAttendence(ref) {
        return this.http.requestGet(`attendence?ref=${ref}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // ลบครั้งที่เรียนนั้น ๆ
    deleteAttendence(_id) {
        return this.http.requestDelete(`attendence/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // เพิ่มชั้นเรียน
    addClassroom(model) {
        return this.http.requestPost('classroom', model)
            .toPromise();
    }
    //คืนค่าห้องเรียน
    returnClassroom(model) {
        return this.http.requestGet(`classroom/${model}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // ลบชั้นเรียน
    deleteClassroom(id) {
        return this.http.requestDelete(`classroom/${id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // โหลดห้องเรียนทั้งหมด
    loadClassroom(option) {
        if (!option)
            return this.http.requestGet(`classroom?sp=0&lp=10`, this.authen.getAuthenticated())
                .toPromise();
        return this.http.requestGet(`classroom?sp=${option.sp}&lp=${option.lp}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // guild
    loadUserbyGuild(_id) {
        return this.http.requestGet(`guild/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // โหลดสมาชิกในห้องเรียนทั้งหมด
    loadMemberFromClassroom(model) {
        return this.http.requestGet(`classroom/student/${model}`, this.authen.getAuthenticated())
            .toPromise();
    }
    getUserByID(id) {
        return this.http.requestGet(`user/userid/${id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    onChangePassword(model) {
        return this.http.requestPost('user/changePassword', model)
            .toPromise();
    }
    deleteMember(_id) {
        return this.http
            .requestDelete(`user/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/quiz.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/quiz.service.ts ***!
  \*********************************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");




class QuizService {
    constructor(http, authen) {
        this.http = http;
        this.authen = authen;
    }
    getAllQuiz(ref) {
        return this.http
            .requestGet(`quiz/${ref}`, this.authen.getAuthenticated())
            .toPromise();
    }
    deleteQuiz(_id) {
        return this.http.requestDelete(`quiz/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    deletePrps(_id) {
        return this.http.requestDelete(`prps/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    updateQuiz(_id, model) {
        return this.http.requestPatch(`quiz/${_id}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
    updatePrps(_id, model) {
        return this.http.requestPatch(`prps/${_id}`, this.authen.getAuthenticated(), model)
            .toPromise();
    }
    getAllQuizList() {
        return this.http.requestGet('quiz', this.authen.getAuthenticated())
            .toPromise();
    }
    getAllPrpsList() {
        return this.http.requestGet('prps', this.authen.getAuthenticated())
            .toPromise();
    }
    getPrpstoUpdate(_id) {
        return this.http.requestGet(`prps/list/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    getAllChapter() {
        return this.http.requestGet('chapter', this.authen.getAuthenticated())
            .toPromise();
    }
    getChapterByID(_id) {
        return this.http.requestGet(`chapter/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    addQuiz(model) {
        return this.http
            .requestPost(`quiz/`, model)
            .toPromise();
    }
    addPrPs(model) {
        return this.http.requestPost('prps/', model)
            .toPromise();
    }
    getAllPrPsbyRef(ref) {
        // ref="PRE-PRPS-TEST OR POST-PRPS-TEST"
        return this.http.requestGet(`prps/${ref}`, this.authen.getAuthenticated())
            .toPromise();
    }
    getPrpsByRef(ref) {
        return this.http.requestGet(`prps/${ref}`, this.authen.getAuthenticated())
            .toPromise();
    }
}
QuizService.ɵfac = function QuizService_Factory(t) { return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"])); };
QuizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuizService, factory: QuizService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/services/resource.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/services/resource.service.ts ***!
  \*************************************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");




class ResourceService {
    constructor(http, authen) {
        this.http = http;
        this.authen = authen;
    }
    // แสดงทุกแหล่งเรียนรู้
    onShowAllChapter() {
        return this.http
            .requestGet('chapter', this.authen.getAuthenticated())
            .toPromise();
    }
    // แสดงแหล่งเรียนรู้จาก ID
    onShowOneChapter(_id) {
        return this.http
            .requestGet(`chapter/${_id}`, this.authen.getAuthenticated())
            .toPromise();
    }
    // สร้างแหล่งเรียนรู้
    onCreateChapter(model) {
        return this.http.requestPost(`chapter`, model).toPromise();
    }
    onUpdateChapter(_id, model) {
        return this.http.requestPatch(`chapter/${_id}`, this.authen.getAuthenticated(), model).toPromise();
    }
    onDeleteChapter(_id) {
        return this.http.requestDelete(`chapter/${_id}`, this.authen.getAuthenticated()).toPromise();
    }
}
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"])); };
ResourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourceService, factory: ResourceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceService, [{
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
    ngOnInit() { }
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
                styleUrls: ['./homepage.component.css'],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");














const _c0 = function () { return ["/homepage"]; };
const _c1 = function () { return ["/signup"]; };
const _c2 = function () { return ["/signin"]; };
class SigninComponent {
    constructor(builder, alert, router, authen, account, activateRoute, member) {
        this.builder = builder;
        this.alert = alert;
        this.router = router;
        this.authen = authen;
        this.account = account;
        this.activateRoute = activateRoute;
        this.member = member;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"];
        //ย้อนกลับไปหน้า LOGIN กรณี Redirect
        this.activateRoute.params.forEach((params) => {
            this.returnURL =
                params.returnURL || `/${src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen}/${src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Home}`;
        });
        this.redirectPage();
        this.alert.announce("อัพเดท &nbsp; <span style='color:orange'> 12 พค 2020, 14:28:51 PM</span>", '1) เพิ่มแหล่งเรียนรู้ได้ <br>2) แสดงผลแหล่งเรียนรู้ได้');
        this.createFormData();
    }
    ngOnInit() { }
    // สร้างฟอร์ม
    createFormData() {
        this.form = this.builder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    // ฟังก์ชั่นเปลี่ยนหน้า ล๊อกอินสำเร็จ
    redirectPage() {
        var data = this.authen.getAuthenticated();
        if (data) {
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"].Authen, src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"].Home]);
        }
    }
    // ปุ่มล๊อกอิน
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ถูกต้อง');
        }
        this.account
            .onLogin(this.form.value)
            .then((res) => {
            // เก็บ AccessToken
            this.authen.setAuthenticated(res.accessToken);
            this.alert.success('ยินดีต้อนรับเข้าสู่ระบบ');
            this.account.getUserLogin(this.authen.getAuthenticated());
            this.router.navigateByUrl(this.returnURL);
        })
            .catch((err) => {
            console.log(err);
            this.alert.notify(err.Message);
        });
    }
    onChangePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var Time = 9000;
            var data;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3'],
                // timer: timer,
                timerProgressBar: true,
            }).queue([
                {
                    title: 'เปลี่ยนรหัสผ่าน',
                    text: 'กรุรณากรอกยูซเซอร์เนม'
                },
                {
                    title: 'เปลี่ยนรหัสผ่าน',
                    text: 'กรุณากรอกรหัสผ่านเดิม'
                },
                {
                    title: 'เปลี่ยนรหัสผ่าน',
                    text: 'กรุณากรอกรหัสผ่านใหม่'
                }
            ]).then((result) => {
                if (result.value) {
                    const answers = JSON.stringify(result.value);
                    // this.email = answers;
                    // this.email = this.email.substring(1,this.email.length-1);
                    var username = result.value[0];
                    var old_pass = result.value[1];
                    var new_pass = result.value[2];
                    var obj = {
                        username: username,
                        old_password: old_pass,
                        new_password: new_pass
                    };
                    this.member.onChangePassword(obj).then(() => {
                        this.alert.success("แก้ไขรหัสผ่านเรียบร้อยแล้ว!");
                    }).catch(err => {
                        this.alert.success(err);
                    });
                    // return answers;
                }
            });
            // var data = this.alert.showChangePassword()
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
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]])], decls: 51, vars: 9, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app", "sidebar-mini", "rtl"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "username", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"], [3, "routerLink"], [3, "click"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_33_listener() { return ctx.onSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_48_listener() { return ctx.onChangePassword(); });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css'],
                providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_9__["AuthenService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"] }]; }, null); })();


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
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/member.service */ "./src/app/authentication/services/member.service.ts");
/* harmony import */ var src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/services/validator.service */ "./src/app/share/services/validator.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");













function SignupComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 36);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/homepage"]; };
const _c1 = function () { return ["/signup"]; };
const _c2 = function () { return ["/signin"]; };
class SignupComponent {
    constructor(builder, alert, account, router, validator, member_service) {
        this.builder = builder;
        this.alert = alert;
        this.account = account;
        this.router = router;
        this.validator = validator;
        this.member_service = member_service;
        this.selectedFile = null;
        this.year = new Date().getFullYear() + 543;
        this.createFormData();
        this.member_service.loadClassroom().then((result) => {
            this.states = result.items;
        });
    }
    ngOnInit() { }
    onSelect(event) {
        this.selectedOption = event.item;
    }
    // สร้างฟอร์ม
    createFormData() {
        this.form = this.builder.group({
            sid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validator.isPassword]],
            // c_password: ['',[Validators.required, this.validator.comparePassword('password')]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [''],
        });
    }
    // ปุ่มแก้ไข
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ครบถ้วน!');
        }
        var formdata = new FormData();
        var public_id;
        if (this.image) {
            formdata.append('file', this.selectedFile);
            this.account.onUploadImage(formdata).then((result) => {
                public_id = result.public_id;
                var obj = this.form.value;
                obj.image = public_id;
                obj.class = this.selectedOption._id;
                setTimeout(() => {
                    this.account.onRegister(obj).then((result) => {
                        this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');
                        setTimeout(() => {
                            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
                        }, 400);
                    });
                }, 1000);
            });
            return;
        }
        var obj = this.form.value;
        obj.class = this.selectedOption._id;
        this.account.onRegister(obj).then(() => {
            this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');
            setTimeout(() => {
                //<<<---    using ()=> syntax
                this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
            }, 1500);
        });
    }
    // เลือกไฟล์
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = (event) => {
            this.image = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]])], decls: 74, vars: 12, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [2, "border", "1px 0 1px 0 solid black", "display", "block"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-center", "px-5"], ["href", "#home", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home"], [1, "fa", "fa-address-book"], ["href", "#news", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-key"], [1, "app-content"], [1, "row"], [1, "col-md-4"], [1, "tile"], [1, "text-center", "py-2"], [1, "lead"], [1, "col-md-12", "text-center"], ["class", "avatar-image my-2 mx-auto", "style", "max-height: 180px;", 3, "src", 4, "ngIf"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "disabledTextInput"], ["formControlName", "sid", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32", 1, "form-control"], ["formControlName", "firstname", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", 1, "form-control"], ["formControlName", "lastname", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", 1, "form-control"], ["formControlName", "username", "placeholder", "\u0E22\u0E39\u0E0B\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E21", 1, "form-control"], ["formControlName", "password", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", "type", "password", 1, "form-control"], ["formControlName", "phone", "placeholder", "09x-xxx-xxxx", 1, "form-control"], ["formControlName", "email", "placeholder", "email@email.com", 1, "form-control"], ["formControlName", "class", "typeaheadOptionsLimit", "5", "typeaheadOptionField", "name", "placeholder", "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48 1,2,3", "required", "", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadMinLength", "isAnimated", "ngModelChange", "typeaheadOnSelect"], ["type", "file", "formControlName", "image", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "my-2"], [1, "avatar-image", "my-2", "mx-auto", 2, "max-height", "180px", 3, "src"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_34_listener() { return ctx.onSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_66_listener($event) { return ctx.selectedValue = $event; })("typeaheadOnSelect", function SignupComponent_Template_input_typeaheadOnSelect_66_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SignupComponent_Template_input_change_70_listener($event) { return ctx.onFileSelected($event); });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__["TypeaheadDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });
SignupComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignupComponent, factory: SignupComponent.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css'],
                providers: [src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]],
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_share_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_share_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_share_services_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorsService"] }, { type: src_app_authentication_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] }]; }, null); })();


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
                providedIn: 'root',
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class HttpService {
    constructor(http) {
        this.http = http;
        this.address = 'https://backend-pblgps.herokuapp.com/';
    }
    // private address : string = "http://localhost:3000/"
    //Request GET method
    requestGet(url, accessToken) {
        return this.http
            .get(`${this.address}${url}`, {
            headers: this.appendHeaders(accessToken),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => this.handelError(err)));
    }
    // ส่งข้อมูลแบบ Post method
    requestPost(url, body) {
        return this.http
            .post(`${this.address}${url}`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => this.handelError(err)));
    }
    //Request Patch method
    requestPatch(url, accessToken, model) {
        return this.http
            .patch(`${this.address}${url}`, model, {
            headers: this.appendHeaders(accessToken),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => this.handelError(err)));
    }
    //Request Delete method
    requestDelete(url, accessToken) {
        return this.http
            .delete(`${this.address}${url}`, {
            headers: this.appendHeaders(accessToken),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => this.handelError(err)));
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
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pipes/date-ago.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/services/pipes/date-ago.pipe.ts ***!
  \*************************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateAgo',
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/pipes/youtube.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/services/pipes/youtube.pipe.ts ***!
  \************************************************/
/*! exports provided: Youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



/**
 * Generated class for the Youtube pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
class Youtube {
    constructor(dom) {
        this.dom = dom;
    }
    transform(value, args) {
        return this.dom.bypassSecurityTrustHtml(value);
    }
}
Youtube.ɵfac = function Youtube_Factory(t) { return new (t || Youtube)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
Youtube.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "youtube", type: Youtube, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Youtube, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'youtube',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


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
    ngOnInit() { }
    // load user login
    initialLoadUserLogin() {
        var data = this.authen.getAuthenticated();
        if (!data) {
            return;
        }
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((userLogin) => {
            this.UserLogin = userLogin;
        })
            .catch((err) => {
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
                styleUrls: ['./auth-content.component.css'],
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
    ngOnInit() { }
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
                styleUrls: ['./footer.component.css'],
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
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/authentication.url */ "./src/app/authentication/authentication.url.ts");
/* harmony import */ var src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/grade.service */ "./src/app/authentication/services/grade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authen.service */ "./src/app/services/authen.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/share/services/account.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function () { return ["/auth/guild"]; };
function NavBarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0E01\u0E34\u0E25\u0E4C\u0E14\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/auth/stage"]; };
function NavBarComponent_div_20_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E14\u0E48\u0E32\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(STAGE) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/auth/quest"]; };
function NavBarComponent_div_20_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(QUEST)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/auth/Quiz"]; };
function NavBarComponent_div_20_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(QUIZ)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["/auth/resource"]; };
function NavBarComponent_div_20_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(RESOURCE)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return ["/auth/home"]; };
const _c6 = function () { return ["/auth/leaderboard"]; };
const _c7 = function () { return ["/auth/information"]; };
const _c8 = function () { return ["/auth/attendence"]; };
function NavBarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NavBarComponent_div_20_a_5_Template, 6, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NavBarComponent_div_20_a_6_Template, 4, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavBarComponent_div_20_a_7_Template, 4, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavBarComponent_div_20_a_8_Template, 4, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E19\u0E33");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "(LEADERBOARD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "(INFORMATION)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0E41\u0E19\u0E30\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "(GUIDE)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u0E40\u0E0A\u0E47\u0E04\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " (ATTENDENCE) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.menu == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.menu == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.menu == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.menu == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c8));
} }
const _c9 = function () { return ["/auth/member"]; };
const _c10 = function () { return ["/auth/manage-resource"]; };
const _c11 = function () { return ["/auth/menu"]; };
const _c12 = function () { return ["/auth/classroom"]; };
function NavBarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c12));
} }
class NavBarComponent {
    constructor(router, alert, authen, account, grade) {
        this.router = router;
        this.alert = alert;
        this.authen = authen;
        this.account = account;
        this.grade = grade;
        this.menu = false;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"];
        this.AuthURL = src_app_authentication_authentication_url__WEBPACK_IMPORTED_MODULE_2__["AuthURL"];
        this.UserLogin = {};
        this.initialLoadUserLogin();
        this.UserLogin = this.account.UserLogin;
        this.UserLogin;
    }
    ngOnInit() { }
    // โหลด User Login
    initialLoadUserLogin() {
        var data = this.authen.getAuthenticated();
        if (!data) {
            return;
        }
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((userLogin) => {
            this.UserLogin = userLogin;
            this.login = 1;
            this.grade.getScoreExerciseById(this.UserLogin._id, "PRE-PRPS-TEST").then(result => {
                if (result.total_items > 0) {
                    this.menu = true;
                }
            });
        })
            .catch((err) => {
            this.alert.notify(err.message);
            this.authen.clearAuthenticated();
            this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
        });
    }
    // ออกจากระบบ
    onLogout() {
        this.authen.clearAuthenticated();
        this.account.onLogout();
        this.login = null;
        this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_0__["AppURL"].Login]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]])], decls: 22, vars: 3, consts: [[1, "app-header", "pt-2", "pb-2", 2, "display", "block"], ["href", "index.html", 1, "app-header__logo"], ["src", "../../assets/image/logo2.png"], [1, "app-nav", 2, "z-index", "10"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", "aria-label", "Open Profile Menu", 1, "app-nav__item"], [1, "fa", "fa-sort-desc", "fa-lg"], [1, "dropdown-menu", "settings-menu", "dropdown-menu-right"], ["class", "dropdown-item", "style", "cursor: pointer;", 3, "routerLink", 4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out", "fa-lg"], [2, "border", "1px 0 1px 0 solid black", "display", "block", "position", "relative", "z-index", "1"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-5"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav text-center", 4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "routerLink"], [1, "fa", "fa-users"], [1, "navbar-nav", "text-center"], ["routerLinkActive", "active", 1, "nav-item", "border-right", "nav-link", "px-4", 3, "routerLink"], [1, "fa", "fa-home", "fa-lg"], ["class", "nav-item border-right nav-link px-4", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "nav-item nav-link border-right px-4", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "border-right", "px-4", 3, "routerLink"], ["href", "#", 1, "nav-item", "nav-link", "border-right", "px-4"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", "px-4", 3, "routerLink"], [1, "sr-only"], [1, "fa", "fa-address-card"], [1, "fa", "fa-graduation-cap"], [1, "fa", "fa-newspaper-o"], [1, "fa", "fa-address-book-o"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavBarComponent_a_9_Template, 3, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_11_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavBarComponent_div_20_Template, 25, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavBarComponent_div_21_Template, 21, 10, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserLogin.role == "admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css'],
                providers: [src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }, { type: src_app_authentication_services_grade_service__WEBPACK_IMPORTED_MODULE_3__["GradeService"] }]; }, null); })();


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
        this.UserLogin.class = UserLogin.class;
        this.UserLogin.guild = UserLogin.guild;
        // console.log(this.UserLogin);
        return this.UserLogin;
    }
    // เซตค่า UserLogin
    getUserLogin(accessToken) {
        return this.http
            .requestGet('user/data', accessToken)
            .toPromise().then((result) => this.setUserLogin(result));
    }
    // ข้อมูล User จาก _id
    getUserByID(_id, accessToken) {
        return this.http
            .requestGet(`user/userid/${_id}`, accessToken)
            .toPromise();
    }
    // ล๊อกอิน
    onLogin(model) {
        return this.http
            .requestPost('user/login', model)
            .toPromise();
    }
    // ล๊อกเอาท์
    onLogout() {
        this.alert.notify('ขอบคุณที่ใช้งาน');
    }
    // สมัครสมาชิก
    onRegister(model) {
        console.log(model);
        return this.http
            .requestPost('user/signup', model)
            .toPromise();
    }
    // อัพโหลดรูปภาพ
    onUploadImage(model) {
        return this.http
            .requestPost('user/uploadImage', model)
            .toPromise();
    }
    // เปลี่ยนรหัสผ่าน
    onChangePassword(accessToken, model) {
        return this.http
            .requestPatch('user/change_password', accessToken, model)
            .toPromise();
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
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
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);




class AlertService {
    constructor() { }
    // แจ้งเตือนปกติ
    notify(message, title = 'Error!', type = 'error') {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: 'ยืนยัน',
            timer: 1500,
            timerProgressBar: true,
        });
    }
    // แก้ไขข้อมูลสำเร็จ
    success(message, title = 'Success!', type = 'success') {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: type,
            timer: 1500,
            timerProgressBar: true,
        });
    }
    // เกิด error
    something_wrong(message = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง') {
        this.notify(message);
    }
    // แสดงผลคะแนน
    showScore(title = 'No data', score = 0) {
        let timerInterval;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            html: 'Your score is ' + score,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            onClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }
    // ตัดสินใจ yes or no
    showWarning(title = 'คำเตือน', text = 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง', confirmButtonText, cancelButtonText) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: text,
            icon: 'danger',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your file has been deleted.', 'info');
            }
        });
    }
    // ฟังก์ชันประกาศมี timelap
    announce(title = 'หัวข้อ', text = 'ข้อความ') {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            html: text,
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/281856448671146419/530EBDE21052E60163E2D890F1F78AA154F13F01/',
            imageWidth: 390,
            imageHeight: 240,
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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
    showMember() {
        return this.member;
    }
    getTopPlayer() {
        return this.http
            .requestGet('user/leaderboard', this.authen.getAuthenticated())
            .toPromise();
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/share/services/alert.service.ts");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/member.service */ "./src/app/share/services/member.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/validator.service */ "./src/app/share/services/validator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/share/components/footer/footer.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/share/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth-content/auth-content.component */ "./src/app/share/components/auth-content/auth-content.component.ts");













class SharedsModule {
}
SharedsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedsModule });
SharedsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedsModule_Factory(t) { return new (t || SharedsModule)(); }, providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedsModule, { declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_11__["AuthContentComponent"],
                ],
                providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"]],
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


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map