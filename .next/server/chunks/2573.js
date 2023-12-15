"use strict";
exports.id = 2573;
exports.ids = [2573];
exports.modules = {

/***/ 94851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const dbConnect = ()=>{
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) >= 1) {
        return;
    }
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set("strictQuery", false);
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://nikkcartwrighttt:nikkcartwright@nikkcartwright.gdblwyh.mongodb.net/test?retryWrites=true&w=majority");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 17996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76687);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((err, req, res, next)=>{
    let error = {
        ...err
    };
    error.statusCode = err.statusCode || 500;
    error.message = err.message || "Internal Server Error";
    if (err.name == "ValidationError") {
        const message = Object.values(err.errors).map((value)=>value.message);
        error = new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(message, 400);
    }
    if (err.code == 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        error = new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(message, 400);
    }
    res.status(error.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    });
});


/***/ }),

/***/ 76687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);


/***/ })

};
;