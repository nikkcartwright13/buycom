"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 98432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

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

/***/ 15152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: ./backend/models/user.js
var models_user = __webpack_require__(2474);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(98432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
// EXTERNAL MODULE: ./backend/config/dbConnect.js
var dbConnect = __webpack_require__(94851);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js





async function auth(req, res) {
    return await external_next_auth_default()(req, res, {
        session: {
            strategy: "jwt"
        },
        providers: [
            credentials_default()({
                async authorize (credentials, req) {
                    (0,dbConnect/* default */.Z)();
                    const { email , password  } = credentials;
                    const user = await models_user/* default.findOne */.Z.findOne({
                        email
                    }).select("+password");
                    if (!user) {
                        throw new Error("Invalid Email or Password");
                    }
                    const isPasswordMatched = await external_bcryptjs_default().compare(password, user.password);
                    if (!isPasswordMatched) {
                        throw new Error("Invalid Email or Password");
                    }
                    return user;
                }
            })
        ],
        callbacks: {
            jwt: async ({ token , user  })=>{
                user && (token.user = user);
                if (req.url === "/api/auth/session?update") {
                    //hit the db and return the updated user
                    const updatedUser = await models_user/* default.findById */.Z.findById(token.user._id);
                    token.user = updatedUser;
                }
                return token;
            },
            session: async ({ session , token  })=>{
                session.user = token.user;
                // delete password from session
                delete session?.user?.password;
                return session;
            }
        },
        pages: {
            signIn: "/login",
            error: "/login/error"
        },
        secret: "codingwithabbas"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2474], () => (__webpack_exec__(15152)));
module.exports = __webpack_exports__;

})();