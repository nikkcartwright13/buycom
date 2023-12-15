"use strict";
(() => {
var exports = {};
exports.id = 1358;
exports.ids = [1358];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 23284:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ 43160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 33860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23284);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94851);
/* harmony import */ var _backend_controllers_addressControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37358);
/* harmony import */ var _backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48672);
/* harmony import */ var _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17996);





const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
    onError: _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
});
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
handler.use(_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuthenticatedUser */ .P).get(_backend_controllers_addressControllers__WEBPACK_IMPORTED_MODULE_2__/* .getAddresses */ .ZK);
handler.use(_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuthenticatedUser */ .P).post(_backend_controllers_addressControllers__WEBPACK_IMPORTED_MODULE_2__/* .newAddress */ .VN);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2573,848], () => (__webpack_exec__(33860)));
module.exports = __webpack_exports__;

})();