"use strict";
(() => {
var exports = {};
exports.id = 4373;
exports.ids = [4373];
exports.modules = {

/***/ 83518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

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

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 48672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ isAuthenticatedUser),
/* harmony export */   "T": () => (/* binding */ authorizeRoles)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76687);


const isAuthenticatedUser = async (req, res, next)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session) {
        return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("Login first to access this route", 401));
    }
    req.user = session.user;
    next();
};
const authorizeRoles = (...roles)=>{
    return (req, res, next)=>{
        if (!roles.includes(req.user.role)) {
            return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(`Role (${req.user.role}) is not allowed to access this resource.`));
        }
        next();
    };
};



/***/ }),

/***/ 18625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23284);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94851);
/* harmony import */ var _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17996);
/* harmony import */ var _backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48672);
/* harmony import */ var _backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32777);





const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
    onError: _backend_middlewares_errors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
});
(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
handler.use(_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuthenticatedUser */ .P, (0,_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__/* .authorizeRoles */ .T)("admin")).put(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_4__/* .updateProduct */ .nM);
handler.use(_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuthenticatedUser */ .P, (0,_backend_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__/* .authorizeRoles */ .T)("admin")).delete(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_4__/* .deleteProduct */ .Ir);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2573,9785,2777], () => (__webpack_exec__(18625)));
module.exports = __webpack_exports__;

})();