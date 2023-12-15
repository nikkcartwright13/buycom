"use strict";
(() => {
var exports = {};
exports.id = 6110;
exports.ids = [6110];
exports.modules = {

/***/ 83518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 23284:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 88284:
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
/* harmony import */ var _backend_utils_multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47459);
/* harmony import */ var _backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48672);
/* harmony import */ var _backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32777);






const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
    onError: _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
});
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
const config = {
    api: {
        bodyParser: false
    }
};
const uploadMiddleware = _backend_utils_multer__WEBPACK_IMPORTED_MODULE_3__/* ["default"].array */ .Z.array("image");
handler.use(uploadMiddleware, _backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuthenticatedUser */ .P, (0,_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_4__/* .authorizeRoles */ .T)("admin")).post(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_5__/* .uploadProductImages */ .hA);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2573,9785,2777,6524], () => (__webpack_exec__(88284)));
module.exports = __webpack_exports__;

})();