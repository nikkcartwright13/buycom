"use strict";
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 37358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_N": () => (/* binding */ deleteAddress),
  "Kn": () => (/* binding */ getAddress),
  "ZK": () => (/* binding */ getAddresses),
  "VN": () => (/* binding */ newAddress),
  "y3": () => (/* binding */ updateAddress)
});

// EXTERNAL MODULE: external "next/dist/lib/import-next-warning"
var import_next_warning_ = __webpack_require__(43160);
var import_next_warning_default = /*#__PURE__*/__webpack_require__.n(import_next_warning_);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/address.js

const addressSchema = new (external_mongoose_default()).Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    user: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
/* harmony default export */ const models_address = ((external_mongoose_default()).models.Address || external_mongoose_default().model("Address", addressSchema));

// EXTERNAL MODULE: ./backend/utils/errorHandler.js
var errorHandler = __webpack_require__(76687);
;// CONCATENATED MODULE: ./backend/controllers/addressControllers.js



const newAddress = async (req, res)=>{
    req.body.user = req.user._id;
    const address = await models_address.create(req.body);
    res.status(200).json({
        address
    });
};
const getAddresses = async (req, res)=>{
    const addresses = await models_address.find({
        user: req.user._id
    });
    res.status(200).json({
        addresses
    });
};
const getAddress = async (req, res)=>{
    const address = await models_address.findById(req.query.id);
    if (!address) {
        return import_next_warning_default()(new errorHandler/* default */.Z("Address not found", 404));
    }
    res.status(200).json({
        address
    });
};
const updateAddress = async (req, res)=>{
    let address = await models_address.findById(req.query.id);
    if (!address) {
        return import_next_warning_default()(new errorHandler/* default */.Z("Address not found", 404));
    }
    address = await models_address.findByIdAndUpdate(req.query.id, req.body);
    res.status(200).json({
        address
    });
};
const deleteAddress = async (req, res)=>{
    let address = await models_address.findById(req.query.id);
    if (!address) {
        return import_next_warning_default()(new errorHandler/* default */.Z("Address not found", 404));
    }
    await address.remove();
    res.status(200).json({
        success: true
    });
};


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



/***/ })

};
;