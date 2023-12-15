"use strict";
exports.id = 6773;
exports.ids = [6773];
exports.modules = {

/***/ 6773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93578);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71943);







const Login = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();
    const callBackUrl = params.get("callbackUrl");
    const submitHandler = async (e)=>{
        e.preventDefault();
        const data = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)("credentials", {
            email,
            password,
            callbackUrl: callBackUrl ? (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__/* .parseCallbackUrl */ .Bp)(callBackUrl) : "/"
        });
        if (data?.error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast.error */ .Am.error(data?.error);
        } else if (!data?.ok) {
            // Show a custom error message when email or password is incorrect
            react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast.error */ .Am.error("Check your email or password and try again.");
        }
        if (data?.ok) {
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            maxWidth: "480px"
        },
        className: "mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: submitHandler,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "mb-5 text-2xl font-semibold",
                    children: "Login"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "block mb-1",
                            children: " Email "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
                            type: "text",
                            placeholder: "Type your email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "block mb-1",
                            children: " Password "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
                            type: "password",
                            placeholder: "Type your password",
                            minLength: 6,
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",
                    children: "Login"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "mt-4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-center mt-5",
                    children: [
                        "Don't have an account?",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/register",
                            className: "text-blue-500",
                            children: "Register"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 71943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bp": () => (/* binding */ parseCallbackUrl),
/* harmony export */   "Eq": () => (/* binding */ getUserReview)
/* harmony export */ });
/* unused harmony export getPriceQueryParams */
const getPriceQueryParams = (queryParams, key, value)=>{
    const hasValueInParam = queryParams.has(key);
    if (value && hasValueInParam) {
        queryParams.set(key, value);
    } else if (value) {
        queryParams.append(key, value);
    } else if (hasValueInParam) {
        queryParams.delete(key);
    }
    return queryParams;
};
const parseCallbackUrl = (url)=>{
    const res = url.replace(/%3A/g, ":").replace(/%2F/g, "/");
    return res;
};
const getUserReview = (reviews, userId)=>{
    let userReview = null;
    reviews.forEach((review)=>{
        if (review?.user?._id === userId) {
            userReview = review;
        }
    });
    return userReview;
};


/***/ })

};
;