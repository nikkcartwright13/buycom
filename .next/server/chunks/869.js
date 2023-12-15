"use strict";
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 40869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29700);




const CustomPagination = ({ resPerPage , productsCount  })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
    let page = searchParams.get("page") || 1;
    page = Number(page);
    let queryParams;
    const handlePageChange = (currentPage)=>{
        if (false) {}
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex mt-20 justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_js_pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            activePage: page,
            itemsCountPerPage: resPerPage,
            totalItemsCount: productsCount,
            onChange: handlePageChange,
            nextPageText: "Next",
            prevPageText: "Prev",
            firstPageText: "First",
            lastPageText: "Last",
            itemClass: "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
            activeLinkClassName: "z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20",
            activeClass: "z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPagination);


/***/ })

};
;