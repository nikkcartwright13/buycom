"use strict";
exports.id = 9785;
exports.ids = [9785];
exports.modules = {

/***/ 89785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class APIFilters {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};
        this.query = this.query.find({
            ...keyword
        });
        return this;
    }
    filter() {
        const queryCopy = {
            ...this.queryStr
        };
        const removeFields = [
            "keyword",
            "page"
        ];
        removeFields.forEach((el)=>delete queryCopy[el]);
        let output = {};
        let prop = "";
        for(let key in queryCopy){
            if (!key.match(/\b(gt|gte|lt|lte)/)) {
                output[key] = queryCopy[key];
            } else {
                prop = key.split("[")[0];
                let operator = key.match(/\[(.*)\]/)[1];
                if (!output[prop]) {
                    output[prop] = {};
                }
                output[prop][`$${operator}`] = queryCopy[key];
            }
        }
        // { price: { $gte: 100, $lte: 1000 } }
        this.query = this.query.find(output);
        return this;
    }
    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIFilters);


/***/ })

};
;