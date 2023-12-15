"use strict";
(() => {
var exports = {};
exports.id = 4480;
exports.ids = [4480];
exports.modules = {

/***/ 83518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 23284:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 78690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23284);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94851);
/* harmony import */ var _backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32777);
/* harmony import */ var _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17996);




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
    onError: _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
});
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
handler.get(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__/* .getProduct */ .wv);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2573,9785,2777], () => (__webpack_exec__(78690)));
module.exports = __webpack_exports__;

})();