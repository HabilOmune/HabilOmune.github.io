webpackJsonp([0,3],{

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = (function () {
    function MainComponent(af, snackBar, http) {
        this.af = af;
        this.snackBar = snackBar;
        this.http = http;
        this.projects = af.database.list('/projects');
        this.testimonials = af.database.list('/testimonials');
        this.qouteRequests = af.database.list('/quoteRequests');
        this.contactUs = af.database.list('/contactUs');
    }
    MainComponent.prototype.ngOnInit = function () {
        this.quote = {
            name: "",
            email: "",
            message: ""
        };
        this.loading = false;
    };
    MainComponent.prototype.quoteRequest = function (model, isValid) {
        this.loading = true;
        var self = this;
        var body = {
            email: model.email,
            message: model.name,
            name: model.message
        };
        var url = 'https://habilomune-1dbf5.firebaseio.com/quoteRequests.json';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (res) {
            self.loading = false;
            // console.log(this.loading)
        })
            .catch(function (err) {
            self.loading = false;
            // console.log(this.loading)
        });
    };
    MainComponent.prototype.feedback = function (frm) {
        this.loading = true;
        var self = this;
        var body = {
            email: frm.email,
            message: frm.name,
            name: frm.feedback
        };
        var url = 'https://habilomune-1dbf5.firebaseio.com/feedbackforms.json';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (res) {
            self.loading = false;
        })
            .catch(function (err) {
            self.loading = false;
        });
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(830),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === 'function' && _c) || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/dev/io/io/projectManager/src/main.component.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__(831),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=D:/dev/io/io/projectManager/src/portfolio.component.js.map

/***/ },

/***/ 496:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 496;


/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(655);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/dev/io/io/projectManager/src/main.js.map

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app worn ks!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(829),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/dev/io/io/projectManager/src/app.component.js.map

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_router__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__portfolio_portfolio_component__ = __webpack_require__(436);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var firebaseConfig = {
    apiKey: "AIzaSyDF7bjGpr5LxYTjA0HYYqOb-d8Mu9iolB4",
    authDomain: "habilomune-1dbf5.firebaseapp.com",
    databaseURL: "https://habilomune-1dbf5.firebaseio.com",
    storageBucket: "habilomune-1dbf5.appspot.com",
    messagingSenderId: "462411241060"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__portfolio_portfolio_component__["a" /* PortfolioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["f" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_router__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/dev/io/io/projectManager/src/app.module.js.map

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_portfolio_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__(435);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });



var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_1__portfolio_portfolio_component__["a" /* PortfolioComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forRoot(router);
//# sourceMappingURL=D:/dev/io/io/projectManager/src/app.router.js.map

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/dev/io/io/projectManager/src/environment.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/dev/io/io/projectManager/src/polyfills.js.map

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = ".navbar .navbar-brand {\r\n    margin: 1px 0px;\r\n    padding: 5px 15px;\r\n}"

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = ".sk-fading-circle {\r\n  margin: 40px auto;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative; }\r\n  .sk-fading-circle .sk-circle {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0; }\r\n  .sk-fading-circle .sk-circle:before {\r\n    content: '';\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 15%;\r\n    height: 15%;\r\n    background-color: #333;\r\n    border-radius: 100%;\r\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\r\n            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\r\n  .sk-fading-circle .sk-circle2 {\r\n    -webkit-transform: rotate(30deg);\r\n            transform: rotate(30deg); }\r\n  .sk-fading-circle .sk-circle3 {\r\n    -webkit-transform: rotate(60deg);\r\n            transform: rotate(60deg); }\r\n  .sk-fading-circle .sk-circle4 {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg); }\r\n  .sk-fading-circle .sk-circle5 {\r\n    -webkit-transform: rotate(120deg);\r\n            transform: rotate(120deg); }\r\n  .sk-fading-circle .sk-circle6 {\r\n    -webkit-transform: rotate(150deg);\r\n            transform: rotate(150deg); }\r\n  .sk-fading-circle .sk-circle7 {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg); }\r\n  .sk-fading-circle .sk-circle8 {\r\n    -webkit-transform: rotate(210deg);\r\n            transform: rotate(210deg); }\r\n  .sk-fading-circle .sk-circle9 {\r\n    -webkit-transform: rotate(240deg);\r\n            transform: rotate(240deg); }\r\n  .sk-fading-circle .sk-circle10 {\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg); }\r\n  .sk-fading-circle .sk-circle11 {\r\n    -webkit-transform: rotate(300deg);\r\n            transform: rotate(300deg); }\r\n  .sk-fading-circle .sk-circle12 {\r\n    -webkit-transform: rotate(330deg);\r\n            transform: rotate(330deg); }\r\n  .sk-fading-circle .sk-circle2:before {\r\n    -webkit-animation-delay: -1.1s;\r\n            animation-delay: -1.1s; }\r\n  .sk-fading-circle .sk-circle3:before {\r\n    -webkit-animation-delay: -1s;\r\n            animation-delay: -1s; }\r\n  .sk-fading-circle .sk-circle4:before {\r\n    -webkit-animation-delay: -0.9s;\r\n            animation-delay: -0.9s; }\r\n  .sk-fading-circle .sk-circle5:before {\r\n    -webkit-animation-delay: -0.8s;\r\n            animation-delay: -0.8s; }\r\n  .sk-fading-circle .sk-circle6:before {\r\n    -webkit-animation-delay: -0.7s;\r\n            animation-delay: -0.7s; }\r\n  .sk-fading-circle .sk-circle7:before {\r\n    -webkit-animation-delay: -0.6s;\r\n            animation-delay: -0.6s; }\r\n  .sk-fading-circle .sk-circle8:before {\r\n    -webkit-animation-delay: -0.5s;\r\n            animation-delay: -0.5s; }\r\n  .sk-fading-circle .sk-circle9:before {\r\n    -webkit-animation-delay: -0.4s;\r\n            animation-delay: -0.4s; }\r\n  .sk-fading-circle .sk-circle10:before {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s; }\r\n  .sk-fading-circle .sk-circle11:before {\r\n    -webkit-animation-delay: -0.2s;\r\n            animation-delay: -0.2s; }\r\n  .sk-fading-circle .sk-circle12:before {\r\n    -webkit-animation-delay: -0.1s;\r\n            animation-delay: -0.1s; }\r\n@-webkit-keyframes sk-circleFadeDelay {\r\n  0%, 39%, 100% {\r\n    opacity: 0; }\r\n  40% {\r\n    opacity: 1; } }\r\n@keyframes sk-circleFadeDelay {\r\n  0%, 39%, 100% {\r\n    opacity: 0; }\r\n  40% {\r\n    opacity: 1; } }\r\n"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = ".navbar-default {\r\n     background-color: green; \r\n     border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n}"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-transparent navbar-fixed-top\" color-on-scroll=\"200\">\n    <!-- if you want to keep the navbar hidden you can add this class to the navbar \"navbar-burger\"-->\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button id=\"menu-toggle\" type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar bar1\"></span>\n                    <span class=\"icon-bar bar2\"></span>\n                    <span class=\"icon-bar bar3\"></span>\n                </button>\n            <a class=\"navbar-brand\" href=\"#\"><img class=\"img-responsive\" src=\"assets/img/logo.png\" style=\"width: 60px;\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right navbar-uppercase\">\n                <li>\n                    <a pageScroll href=\"#main\"><i class=\"fa fa-home\"></i>Home</a>\n                </li>\n\n                <li>\n                    <a pageScroll href=\"#services\"><i class=\"fa fa-cog\"></i>Services</a>\n                </li>\n                <li>\n                    <a pageScroll href=\"#projects\"><i class=\"fa fa-folder-open\"></i>Projects</a>\n                </li>\n                <li class=\"hidden\">\n                    <a pageScroll href=\"#testimonials\"><i class=\"fa fa-thumbs-o-up\"></i>Testimonials</a>\n                </li>\n                <li>\n                    <a pageScroll href=\"#contact\"><i class=\"fa fa-address-book-o\"></i>Contact</a>\n                </li>\n                <li>\n                    <a class=\"hidden\" routerLink=\"/portfolio\"><i class=\"fa fa-paint-brush\"></i> Portfolio</a>\n                </li>\n                <li class=\"dropdown hidden\">\n                    <a href=\"#gaia\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-share-alt\"></i> Share\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-danger\">\n                        <li>\n                            <a href=\"#\"><i class=\"fa fa-facebook-square\"></i> Facebook</a>\n                        </li>\n                        <li>\n                            <a href=\"#\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n                        </li>\n                        <li>\n                            <a href=\"#\"><i class=\"fa fa-instagram\"></i> Instagram</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n</nav>\n\n<router-outlet>\n</router-outlet>"

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = "<div class=\"section section-header\" id=\"main\">\r\n\t<div class=\"parallax filter filter-color-purple\">\r\n\t\t<div class=\"image\" style=\"background-image: url('assets/img/header-1.jpeg')\"></div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"content hidden-xs\">\r\n\t\t\t\t<div class=\"title-area\">\r\n\t\t\t\t\t<h2 class=\"title-modern morton\">HABIL OMUNE</h2>\r\n\t\t\t\t\t<h3 class=\"morton\">DEVELOPER . CONSULTANT . DESIGNER</h3>\r\n\t\t\t\t\t<div class=\"separator line-separator\">♦</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"button-get-started\">\r\n\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-white btn-outline btn-round btn-lg\">\r\n                        Request A Quote\r\n                    </a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"content hidden-sm hidden-md hidden-lg\">\r\n\t\t\t\t<div class=\"title-area\">\r\n\t\t\t\t\t<h3 class=\"title-modern morton\">HABIL OMUNE</h3>\r\n\t\t\t\t\t<h5 class=\"morton\">DEVELOPER . CONSULTANT . DESIGNER</h5>\r\n\t\t\t\t\t<div class=\"separator line-separator\">♦</div>\r\n\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-white btn-outline btn-round\">\r\n                        Request A Quote\r\n                    </a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"section\" id=\"services\">\r\n\t<div class=\"content\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"title-area\">\r\n\t\t\t\t\t<h2 class=\"morton\">Our Services</h2>\r\n\t\t\t\t\t<div class=\"separator separator-danger\">✻</div>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tEverything we do is designed to help you as a business owner succeed online. We are passionate about sharing our experience,\r\n\t\t\t\t\t\twisdom and love for the internet to help you have the best website possible.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<div class=\"info-icon\">\r\n\t\t\t\t\t\t<div class=\"icon text-danger\">\r\n\t\t\t\t\t\t\t<i class=\"pe-7s-browser\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h3 class=\"morton\" >Web Development</h3>\r\n\t\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\t\tWe will design an online strategy to suit your business needs starting from design, to website development and then the ongoing\r\n\t\t\t\t\t\t\tmarketing,With CMS options for clients looking to manage their owner websites to managed options where clients are\r\n\t\t\t\t\t\t\tcharged on a monthly basis for management and maintainance of the websites.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<div class=\"info-icon\">\r\n\t\t\t\t\t\t<div class=\"icon text-danger\">\r\n\t\t\t\t\t\t\t<i class=\"pe-7s-way\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h3 class=\"morton\">Consultancy</h3>\r\n\t\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\t\tThrough in-depth conversations about your business we will understand what needs to change. Your overall strategies for growth\r\n\t\t\t\t\t\t\tand your business processes become clear through the software development consultancy process.Our software consultancy\r\n\t\t\t\t\t\t\tservices include the creation of technical and business strategy documentation.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<div class=\"info-icon\">\r\n\t\t\t\t\t\t<div class=\"icon text-danger\">\r\n\t\t\t\t\t\t\t<i class=\"pe-7s-plugin\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h3 class=\"morton\">Prototype Deign</h3>\r\n\t\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\t\tAfter the scope of a project is properly defined,through a process of research and consultation, we are able to put together\r\n\t\t\t\t\t\t\tworking prototypes or simple <strong>UX/UI</strong> wireframes that act as proof of a client's concept.This\r\n\t\t\t\t\t\t\thelps the client visualize their plans before moving forward with more detailed execution.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"section section-our-team-freebie\" id=\"projects\">\r\n\t<div class=\"content\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"title-area\">\r\n\t\t\t\t\t\t<h2 class=\"morton\">Some of the projects we have done</h2>\r\n\t\t\t\t\t\t<div class=\"separator separator-danger\">✻</div>\r\n\t\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\t\tHere, you can take a look at some of the work we have done for previous Clients.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"team\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-4\" *ngFor=\"let project of projects | async\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"max-height: 15rem; overflow: hidden ;scroll-behavior: unset\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{project.img}}\" class=\"img-responsive\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"content text-center\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-center morton\">{{project.title}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"description hidden\">Here can be a description about the application that is for download. I feel like this app is what I need.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"footer btn-center\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"{{project.url}}\" class=\"btn btn-default btn-round btn-outline btn-info btn-modern\">\r\n                                         Preview <i class=\"fa fa-chevron-right\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"section section-our-clients-freebie hidden\" id=\"testimonials\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"title-area\">\r\n\t\t\t\t<h5 class=\"subtitle text-gray\">Here are some</h5>\r\n\t\t\t\t<h2>Clients Testimonials</h2>\r\n\t\t\t\t<div class=\"separator separator-danger\">∎</div>\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"nav nav-text\" role=\"tablist\">\r\n\t\t\t\t<li *ngFor=\"let testimonial of testimonials | async;let i = index; let isFirst = first\" [class.active]=\"isFirst\">\r\n\t\t\t\t\t<a href=\"#{{i}}\" role=\"tab\" data-toggle=\"tab\">\r\n\t\t\t\t\t\t<div class=\"image-clients\">\r\n\t\t\t\t\t\t\t<img alt=\"...\" class=\"img-circle\" src=\"assets/img/faces/face_5.jpg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t<div class=\"tab-pane\" *ngFor=\"let testimonial of testimonials | async;let i = index; let isFirst = first\" [class.active]=\"isFirst\"\r\n\t\t\t\t\tid=\"{{i}}\">\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\t<h2>{{testimonial.company}}</h2>\r\n\t\t\t\t\t\t<h3>{{testimonial.name}}</h3>\r\n\t\t\t\t\t\t<p>{{testimonial.testimonial}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"section section-small section-get-started\" id=\"contact\">\r\n\t<div class=\"parallax filter\">\r\n\t\t<div class=\"image\" style=\"background-image: url('assets/img/office-1.jpeg')\"></div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"title-area\">\r\n\t\t\t\t<h2 class=\"text-white morton\">Do you want to work with us?</h2>\r\n\t\t\t\t<div class=\"separator line-separator\">♦</div>\r\n\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\tIn adition to producing results for our current clients, we are keen to create relationships with new clients that will mutually\r\n\t\t\t\t\tbeneficial and long lasting.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-offset-3 col-md-5\">\r\n\t\t\t\t\t<form class=\"form-horizontal\" #g=\"ngForm\" (ngSubmit)=\"feedback(g.value)\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label col-sm-2\" for=\"name\">Name*</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Who are ya?\" ngModel required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label col-sm-2\" for=\"email\">Email*:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"How can we reach you?\" ngModel required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label col-sm-2\" for=\"comment\">Message*:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" name=\"feedback\" placeholder=\"Talk To Us...\" ngModel required></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"sk-fading-circle\" *ngIf=\"loading == true\">\r\n\t\t\t\t\t\t\t<div class=\"sk-circle1 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle2 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle3 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle4 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle5 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle6 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle7 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle8 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle9 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle10 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle11 sk-circle\"></div>\r\n\t\t\t\t\t\t\t<div class=\"sk-circle12 sk-circle\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"loading == false\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"!g.valid\" type=\"submit\" md-raised-button class=\"btn btn-success btn-fill\">Submit</button>\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"!g.valid\" type=\"reset\" md-raised-button class=\"btn btn-success btn-fill\">Clear</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<footer class=\"footer footer-big footer-color-black\" data-color=\"black\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-2 col-sm-3\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3 col-md-offset-1 col-sm-3\">\r\n\t\t\t\t<div class=\"info\">\r\n\r\n\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a><i class=\"fa fa-phone\"></i> 0717-819111</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-email\"></i> habilhm@gmail.com</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3 col-sm-3\">\r\n\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/HABILOMUNE\" class=\"btn btn-social btn-facebook btn-simple\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i> Facebook\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/habil_js\" class=\"btn btn-social btn-twitter btn-simple\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Twitter\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"https://plus.google.com/112344229859411611506\" class=\"btn btn-social btn-reddit btn-simple\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus-square\"></i> Google+\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-md-offset-1 col-sm-3\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<hr>\r\n\t</div>\r\n</footer>\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title morton\">So you'd like a quotation...</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"quoteRequest(f.value, f.valid)\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-sm-2\" for=\"name\">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"quote.name\" name=\"name\" placeholder=\"Who are ya?\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t<input required type=\"email\" class=\"form-control\" [(ngModel)]=\"quote.email\" name=\"email\" placeholder=\"How can we reach you?\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-sm-2\" for=\"message\">Message:</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t<textarea required class=\"form-control\" rows=\"5\" [(ngModel)]=\"quote.message\" name=\"message\" placeholder=\"Describe the service you would like us to offer you...\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"sk-fading-circle\" *ngIf=\"loading == true\">\r\n\t\t\t\t\t\t<div class=\"sk-circle1 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle2 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle3 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle4 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle5 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle6 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle7 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle8 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle9 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle10 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle11 sk-circle\"></div>\r\n\t\t\t\t\t\t<div class=\"sk-circle12 sk-circle\"></div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\" *ngIf=\"loading == false\">\r\n\t\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t\t\t\t\t<button [disabled]=\"!f.valid\" type=\"submit\" md-raised-button class=\"btn btn-success btn-fill\">Submit</button>\r\n\t\t\t\t\t\t\t<button [disabled]=\"!f.valid\" type=\"reset\" md-raised-button class=\"btn btn-success btn-fill\">Clear</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "<p>\n  portfolio works!\n</p>\n"

/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(497);


/***/ }

},[867]);
//# sourceMappingURL=main.bundle.map