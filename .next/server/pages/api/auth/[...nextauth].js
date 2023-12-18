"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./backend/config/dbConnect.js":
/*!*************************************!*\
  !*** ./backend/config/dbConnect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConnect = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) >= 1) {\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://nikkcartwrighttt:nikkcartwright@nikkcartwright.gdblwyh.mongodb.net/test?retryWrites=true&w=majority\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVksSUFBTTtJQUN0QixJQUFJRCx1RUFBOEIsSUFBSSxHQUFHO1FBQ3ZDO0lBQ0YsQ0FBQztJQUVEQSxtREFBWSxDQUFDLGVBQWUsS0FBSztJQUNqQ0EsdURBQWdCLENBQUNNLG1IQUFrQjtBQUNyQztBQUVBLGlFQUFlTCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnV0aXRub3cvLi9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3QuanM/ZjI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGRiQ29ubmVjdCA9ICgpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgZmFsc2UpO1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX1VSSSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYkNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsInNldCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREJfVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./backend/config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./backend/models/user.js":
/*!********************************!*\
  !*** ./backend/models/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your name\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your password\"\n        ],\n        minLength: [\n            6,\n            \"Your password must be longer than 6 characters\"\n        ],\n        select: false\n    },\n    avatar: {\n        public_id: String,\n        url: String\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nuserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) {\n        next();\n    }\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, 10);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL21vZGVscy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ0Y7QUFFOUIsTUFBTUUsYUFBYSxJQUFJRix3REFBZSxDQUFDO0lBQ3JDSSxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBeUI7SUFDNUM7SUFDQUMsT0FBTztRQUNMSCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDRSxRQUFRLElBQUk7SUFDZDtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBNkI7UUFDOUNJLFdBQVc7WUFBQztZQUFHO1NBQWlEO1FBQ2hFQyxRQUFRLEtBQUs7SUFDZjtJQUNBQyxRQUFRO1FBQ05DLFdBQVdSO1FBQ1hTLEtBQUtUO0lBQ1A7SUFDQVUsTUFBTTtRQUNKWCxNQUFNQztRQUNOVyxTQUFTO0lBQ1g7SUFDQUMsV0FBVztRQUNUYixNQUFNYztRQUNORixTQUFTRSxLQUFLQyxHQUFHO0lBQ25CO0FBQ0Y7QUFFQWxCLFdBQVdtQixHQUFHLENBQUMsUUFBUSxlQUFnQkMsSUFBSSxFQUFFO0lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFhO1FBQ2hDRDtJQUNGLENBQUM7SUFFRCxJQUFJLENBQUNaLFFBQVEsR0FBRyxNQUFNVCxvREFBVyxDQUFDLElBQUksQ0FBQ1MsUUFBUSxFQUFFO0FBQ25EO0FBRUEsaUVBQWVWLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLFFBQVFFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXRpdG5vdy8uL2JhY2tlbmQvbW9kZWxzL3VzZXIuanM/MDAwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIl0sXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbFwiXSxcbiAgICB1bmlxdWU6IHRydWUsXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZFwiXSxcbiAgICBtaW5MZW5ndGg6IFs2LCBcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA2IGNoYXJhY3RlcnNcIl0sXG4gICAgc2VsZWN0OiBmYWxzZSxcbiAgfSxcbiAgYXZhdGFyOiB7XG4gICAgcHVibGljX2lkOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gIH0sXG4gIHJvbGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJ1c2VyXCIsXG4gIH0sXG4gIGNyZWF0ZWRBdDoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gIH0sXG59KTtcblxudXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XG4gIGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHtcbiAgICBuZXh0KCk7XG4gIH1cblxuICB0aGlzLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgMTApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImJjcnlwdCIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIm1pbkxlbmd0aCIsInNlbGVjdCIsImF2YXRhciIsInB1YmxpY19pZCIsInVybCIsInJvbGUiLCJkZWZhdWx0IiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInByZSIsIm5leHQiLCJpc01vZGlmaWVkIiwiaGFzaCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backend_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/backend/models/user */ \"(api)/./backend/models/user.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/backend/config/dbConnect */ \"(api)/./backend/config/dbConnect.js\");\n\n\n\n\n\nasync function auth(req, res) {\n    return await next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {\n        session: {\n            strategy: \"jwt\"\n        },\n        providers: [\n            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n                async authorize (credentials, req) {\n                    (0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                    const { email , password  } = credentials;\n                    const user = await _backend_models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                        email\n                    }).select(\"+password\");\n                    if (!user) {\n                        throw new Error(\"Invalid Email or Password\");\n                    }\n                    const isPasswordMatched = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n                    if (!isPasswordMatched) {\n                        throw new Error(\"Invalid Email or Password\");\n                    }\n                    return user;\n                }\n            })\n        ],\n        callbacks: {\n            jwt: async ({ token , user  })=>{\n                user && (token.user = user);\n                if (req.url === \"/api/auth/session?update\") {\n                    //hit the db and return the updated user\n                    const updatedUser = await _backend_models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(token.user._id);\n                    token.user = updatedUser;\n                }\n                return token;\n            },\n            session: async ({ session , token  })=>{\n                session.user = token.user;\n                // delete password from session\n                delete session?.user?.password;\n                return session;\n            }\n        },\n        pages: {\n            signIn: \"/login\",\n            error: \"/login/error\"\n        },\n        secret: \"codingwithabbas\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUN6QjtBQUNYO0FBQ3FCO0FBRXBDLGVBQWVLLEtBQUtDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNDLE9BQU8sTUFBTVAsZ0RBQVFBLENBQUNNLEtBQUtDLEtBQUs7UUFDOUJDLFNBQVM7WUFDUEMsVUFBVTtRQUNaO1FBQ0FDLFdBQVc7WUFDVFQsc0VBQW1CQSxDQUFDO2dCQUNsQixNQUFNVSxXQUFVQyxXQUFXLEVBQUVOLEdBQUcsRUFBRTtvQkFDaENGLHFFQUFTQTtvQkFDVCxNQUFNLEVBQUVTLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdGO29CQUM1QixNQUFNRyxPQUFPLE1BQU1iLG9FQUFZLENBQUM7d0JBQUVXO29CQUFNLEdBQUdJLE1BQU0sQ0FBQztvQkFDbEQsSUFBSSxDQUFDRixNQUFNO3dCQUNULE1BQU0sSUFBSUcsTUFBTSw2QkFBNkI7b0JBQy9DLENBQUM7b0JBRUQsTUFBTUMsb0JBQW9CLE1BQU1oQix1REFBYyxDQUM1Q1csVUFDQUMsS0FBS0QsUUFBUTtvQkFHZixJQUFJLENBQUNLLG1CQUFtQjt3QkFDdEIsTUFBTSxJQUFJRCxNQUFNLDZCQUE2QjtvQkFDL0MsQ0FBQztvQkFFRCxPQUFPSDtnQkFDVDtZQUNGO1NBQ0Q7UUFDRE0sV0FBVztZQUNUQyxLQUFLLE9BQU8sRUFBRUMsTUFBSyxFQUFFUixLQUFJLEVBQUUsR0FBSztnQkFDOUJBLFFBQVNRLENBQUFBLE1BQU1SLElBQUksR0FBR0EsSUFBRztnQkFDekIsSUFBR1QsSUFBSWtCLEdBQUcsS0FBSyw0QkFBMkI7b0JBQ3hDLHdDQUF3QztvQkFDeEMsTUFBTUMsY0FBYyxNQUFNdkIscUVBQWEsQ0FBQ3FCLE1BQU1SLElBQUksQ0FBQ1ksR0FBRztvQkFDdERKLE1BQU1SLElBQUksR0FBR1U7Z0JBRWYsQ0FBQztnQkFFRCxPQUFPRjtZQUNUO1lBQ0FmLFNBQVMsT0FBTyxFQUFFQSxRQUFPLEVBQUVlLE1BQUssRUFBRSxHQUFLO2dCQUNyQ2YsUUFBUU8sSUFBSSxHQUFHUSxNQUFNUixJQUFJO2dCQUV6QiwrQkFBK0I7Z0JBQy9CLE9BQU9QLFNBQVNPLE1BQU1EO2dCQUV0QixPQUFPTjtZQUNUO1FBQ0Y7UUFDQW9CLE9BQU87WUFDTEMsUUFBUTtZQUNSQyxPQUFPO1FBQ1Q7UUFDQUMsUUFBUUMsaUJBQTJCO0lBQ3JDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1dGl0bm93Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvYmFja2VuZC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvYmFja2VuZC9jb25maWcvZGJDb25uZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMpIHtcbiAgcmV0dXJuIGF3YWl0IE5leHRBdXRoKHJlcSwgcmVzLCB7XG4gICAgc2Vzc2lvbjoge1xuICAgICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICAgIGRiQ29ubmVjdCgpO1xuICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpO1xuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2hlZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICghaXNQYXNzd29yZE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRW1haWwgb3IgUGFzc3dvcmRcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKTtcbiAgICAgICAgaWYocmVxLnVybCA9PT0gJy9hcGkvYXV0aC9zZXNzaW9uP3VwZGF0ZScpe1xuICAgICAgICAgIC8vaGl0IHRoZSBkYiBhbmQgcmV0dXJuIHRoZSB1cGRhdGVkIHVzZXJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQodG9rZW4udXNlci5faWQpXG4gICAgICAgICAgdG9rZW4udXNlciA9IHVwZGF0ZWRVc2VyO1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfSxcbiAgICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcblxuICAgICAgICAvLyBkZWxldGUgcGFzc3dvcmQgZnJvbSBzZXNzaW9uXG4gICAgICAgIGRlbGV0ZSBzZXNzaW9uPy51c2VyPy5wYXNzd29yZDtcblxuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYWdlczoge1xuICAgICAgc2lnbkluOiBcIi9sb2dpblwiLFxuICAgICAgZXJyb3I6IFwiL2xvZ2luL2Vycm9yXCJcbiAgICB9LFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJVc2VyIiwiYmNyeXB0IiwiZGJDb25uZWN0IiwiYXV0aCIsInJlcSIsInJlcyIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJmaW5kT25lIiwic2VsZWN0IiwiRXJyb3IiLCJpc1Bhc3N3b3JkTWF0Y2hlZCIsImNvbXBhcmUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVybCIsInVwZGF0ZWRVc2VyIiwiZmluZEJ5SWQiLCJfaWQiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();