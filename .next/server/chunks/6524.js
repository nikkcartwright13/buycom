"use strict";
exports.id = 6524;
exports.ids = [6524];
exports.modules = {

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

/***/ 47459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);

const storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + "-" + file.originalname);
    }
});
const fileFilter = (req, file, cb)=>{
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        cb(null, true);
    } else ({
        "error": "Unsupported file format. Upload only JPEG/JPG or PNG"
    }), false;
};
const upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({
    storage,
    limits: {
        fieldSize: 1024 * 1024
    },
    fileFilter
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upload);


/***/ })

};
;