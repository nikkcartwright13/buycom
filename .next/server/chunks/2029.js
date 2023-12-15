"use strict";
exports.id = 2029;
exports.ids = [2029];
exports.modules = {

/***/ 62029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "a$": () => (/* binding */ registerUser),
/* harmony export */   "ck": () => (/* binding */ updateProfile),
/* harmony export */   "gQ": () => (/* binding */ updatePassword),
/* harmony export */   "h8": () => (/* binding */ deleteUser)
/* harmony export */ });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2474);
/* harmony import */ var _utils_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22447);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76687);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_APIFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89785);






const registerUser = async (req, res)=>{
    try {
        const { name , email , password  } = req.body;
        const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
            name,
            email,
            password
        });
        res.status(201).json({
            user
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const updateProfile = async (req, res)=>{
    try {
        const newUserData = {
            name: req.body.name,
            email: req.body.email
        };
        if (req.files.length > 0) {
            const uploader = async (path)=>await (0,_utils_cloudinary__WEBPACK_IMPORTED_MODULE_1__/* .uploads */ .q)(path, "buyitnow/avatars");
            const file = req.files[0];
            const { path  } = file;
            const avatarResponse = await uploader(path);
            fs__WEBPACK_IMPORTED_MODULE_2___default().unlinkSync(path);
            newUserData.avatar = avatarResponse;
        }
        const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(req.user._id, newUserData, {
            new: true
        });
        res.status(200).json({
            user
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const updatePassword = async (req, res, next)=>{
    try {
        const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.user._id).select("+password");
        const isPasswordMatched = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(req.body.currentPassword, user.password);
        if (!isPasswordMatched) {
            return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("Old password is incorrect", 400));
        }
        user.password = req.body.newPassword;
        await user.save();
        res.status(200).json({
            success: true
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const getUsers = async (req, res)=>{
    try {
        const resPerPage = 2;
        const usersCount = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].countDocuments */ .Z.countDocuments();
        const apiFilters = new _utils_APIFilters__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(_models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find(), req.query).pagination(resPerPage);
        const users = await apiFilters.query;
        res.status(200).json({
            usersCount,
            resPerPage,
            users
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const getUser = async (req, res, next)=>{
    try {
        let user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
        if (!user) {
            return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("No user found with this ID", 404));
        }
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const updateUser = async (req, res, next)=>{
    try {
        let user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
        if (!user) {
            return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("No user found with this ID", 404));
        }
        user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(req.query.id, req.body.userData, {
            new: true
        });
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const deleteUser = async (req, res, next)=>{
    try {
        let user = await _models_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
        if (!user) {
            return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("No user found with this ID", 404));
        }
        await user.deleteOne();
        res.status(200).json({
            success: true
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


/***/ }),

/***/ 22447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* reexport default from dynamic */ cloudinary__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "q": () => (/* binding */ uploads)
/* harmony export */ });
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83518);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);

cloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({
    cloud_name: "dwj0vhfrl",
    api_key: "586961345245574",
    api_secret: "qz0UBJyGoBR4QXsdzV8g6Nenaq4"
});
const uploads = (file, folder)=>{
    return new Promise((resolve, reject)=>{
        cloudinary__WEBPACK_IMPORTED_MODULE_0___default().uploader.upload(file, (result)=>{
            resolve({
                public_id: result.public_id,
                url: result.url
            });
        }, {
            resource_type: "auto",
            folder: folder
        });
    });
};



/***/ })

};
;