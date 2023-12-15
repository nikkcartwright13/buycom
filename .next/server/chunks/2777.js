"use strict";
exports.id = 2777;
exports.ids = [2777];
exports.modules = {

/***/ 32777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nE": () => (/* binding */ createProductReview),
  "Ir": () => (/* binding */ deleteProduct),
  "wv": () => (/* binding */ getProduct),
  "Xp": () => (/* binding */ getProducts),
  "AC": () => (/* binding */ newProduct),
  "nM": () => (/* binding */ updateProduct),
  "hA": () => (/* binding */ uploadProductImages)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/product.js

const productSchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: [
            true,
            "Please enter product name"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Please enter product description"
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            "Please enter product price"
        ]
    },
    images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    category: {
        type: String,
        required: [
            true,
            "Please enter product category"
        ],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports"
            ],
            message: "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [
            true,
            "Please enter product seller"
        ]
    },
    stock: {
        type: Number,
        required: [
            true,
            "Please enter product stock"
        ]
    },
    ratings: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: (external_mongoose_default()).Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            username: {
                type: String,
                required: true
            },
            useravatar: {
                public_id: String,
                url: String
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    user: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
/* harmony default export */ const models_product = ((external_mongoose_default()).models.Product || external_mongoose_default().model("Product", productSchema));

// EXTERNAL MODULE: ./backend/utils/APIFilters.js
var APIFilters = __webpack_require__(89785);
// EXTERNAL MODULE: ./backend/utils/cloudinary.js
var cloudinary = __webpack_require__(22447);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(57147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: ./backend/utils/errorHandler.js
var errorHandler = __webpack_require__(76687);
;// CONCATENATED MODULE: ./backend/controllers/productControllers.js





const newProduct = async (req, res, next)=>{
    req.body.user = req.user._id;
    const product = await models_product.create(req.body);
    res.status(201).json({
        product
    });
};
const getProducts = async (req, res, next)=>{
    const resPerPage = 4;
    const productsCount = await models_product.countDocuments();
    const apiFilters = new APIFilters/* default */.Z(models_product.find(), req.query).search().filter();
    let products = await apiFilters.query;
    const filteredProductsCount = products.length;
    apiFilters.pagination(resPerPage);
    products = await apiFilters.query.clone();
    res.status(200).json({
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    });
};
const getProduct = async (req, res, next)=>{
    const product = await models_product.findById(req.query.id);
    if (!product) {
        return next(new errorHandler/* default */.Z("Product not found.", 404));
    }
    res.status(200).json({
        product
    });
};
const uploadProductImages = async (req, res, next)=>{
    let product = await models_product.findById(req.query.id);
    if (!product) {
        return next(new errorHandler/* default */.Z("Product not found.", 404));
    }
    const uploader = async (path)=>await (0,cloudinary/* uploads */.q)(path, "buyitnow/products");
    const urls = [];
    const files = req.files;
    for (const file of files){
        const { path  } = file;
        const imgUrl = await uploader(path);
        urls.push(imgUrl);
        external_fs_default().unlinkSync(path);
    }
    product = await models_product.findByIdAndUpdate(req.query.id, {
        images: urls
    });
    res.status(200).json({
        data: urls,
        product
    });
};
const updateProduct = async (req, res, next)=>{
    let product = await models_product.findById(req.query.id);
    if (!product) {
        return next(new errorHandler/* default */.Z("Product not found.", 404));
    }
    product = await models_product.findByIdAndUpdate(req.query.id, req.body);
    res.status(200).json({
        product
    });
};
const deleteProduct = async (req, res, next)=>{
    let product = await models_product.findById(req.query.id);
    if (!product) {
        return next(new errorHandler/* default */.Z("Product not found.", 404));
    }
    // Deleting images associated with the product
    for(let i = 0; i < product.images.length; i++){
        const res = await cloudinary/* cloudinary.v2.uploader.destroy */.n.v2.uploader.destroy(product.images[i].public_id);
    }
    await product.deleteOne();
    res.status(200).json({
        success: true
    });
};
// export const createProductReview = async (req, res, next) => {
//   const { rating, comment, productId } = req.body;
//   const review = {
//     user: req?.user?._id,
//     rating: Number(rating),
//     comment,
//   };
//   let product = await Product.findById(productId);
//   if (!product) {
//     return next(new ErrorHandler("Product not found.", 404));
//   }
//   const isReviewed = product?.reviews?.find(
//     (r) => r.user.toString() === req.user._id.toString()
//   );
//   if (isReviewed) {
//     product?.reviews.forEach((review) => {
//       if (review.user.toString() === req.user._id.toString()) {
//         review.comment = comment;
//         review.rating = rating;
//       }
//     });
//   } else {
//     product?.reviews.push(review);
//   }
//   product.ratings =
//     product?.reviews?.reduce((acc, item) => item.rating + acc, 0) /
//     product.reviews.length;
//   await product?.save();
//   res.status(200).json({
//     success: true,
//   });
// };
const createProductReview = async (req, res, next)=>{
    const { rating , comment , productId  } = req.body;
    try {
        const product = await models_product.findById(productId);
        if (!product) {
            return next(new errorHandler/* default */.Z("Product not found.", 404));
        }
        const user = req?.user;
        const review = {
            user: user?._id,
            username: user?.name || "defaultUsername",
            useravatar: user?.avatar,
            rating: Number(rating),
            comment,
            createdAt: new Date()
        };
        const isReviewed = product.reviews.find((r)=>r.user && r.user.toString() === user._id.toString() && r.username === user.name.toString() && r.useravatar === user.avatar.toString());
        if (isReviewed) {
            isReviewed.comment = comment;
            isReviewed.rating = rating;
        } else {
            product.reviews.push(review);
        }
        product.ratings = product.reviews.reduce((acc, item)=>item.rating + acc, 0) / product.reviews.length;
        await product.save();
        res.status(200).json({
            success: true
        });
    } catch (error) {
        next(error);
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