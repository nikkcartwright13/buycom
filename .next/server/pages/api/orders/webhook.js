"use strict";
(() => {
var exports = {};
exports.id = 6802;
exports.ids = [6802];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 23284:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ 93665:
/***/ ((module) => {

module.exports = require("raw-body");

/***/ }),

/***/ 18174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 60095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23284);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94851);
/* harmony import */ var _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17996);
/* harmony import */ var _backend_controllers_orderControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4358);




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
    onError: _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
});
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
const config = {
    api: {
        bodyParser: false
    }
};
handler.post(_backend_controllers_orderControllers__WEBPACK_IMPORTED_MODULE_3__/* .webhook */ .PU);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2573,9785,4358], () => (__webpack_exec__(60095)));
module.exports = __webpack_exports__;

})();