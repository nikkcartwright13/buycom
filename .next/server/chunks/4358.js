"use strict";
exports.id = 4358;
exports.ids = [4358];
exports.modules = {

/***/ 4358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "en": () => (/* binding */ canReview),
  "co": () => (/* binding */ checkoutSession),
  "wH": () => (/* binding */ deleteOrder),
  "iG": () => (/* binding */ getOrder),
  "AU": () => (/* binding */ getOrders),
  "TG": () => (/* binding */ myOrders),
  "Cs": () => (/* binding */ updateOrder),
  "PU": () => (/* binding */ webhook)
});

// EXTERNAL MODULE: external "raw-body"
var external_raw_body_ = __webpack_require__(93665);
var external_raw_body_default = /*#__PURE__*/__webpack_require__.n(external_raw_body_);
// EXTERNAL MODULE: external "stripe"
var external_stripe_ = __webpack_require__(18174);
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./backend/models/order.js

const orderSchema = external_mongoose_default().Schema({
    shippingInfo: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        required: true,
        ref: "Address"
    },
    user: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderItems: [
        {
            product: {
                type: (external_mongoose_default()).Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    paymentInfo: {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        taxPaid: {
            type: Number,
            required: true
        },
        amountPaid: {
            type: Number,
            required: true
        }
    },
    orderStatus: {
        type: String,
        default: "Processing"
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});
/* harmony default export */ const models_order = ((external_mongoose_default()).models.Order || external_mongoose_default().model("Order", orderSchema));

// EXTERNAL MODULE: ./backend/utils/APIFilters.js
var APIFilters = __webpack_require__(89785);
// EXTERNAL MODULE: ./backend/utils/errorHandler.js
var errorHandler = __webpack_require__(76687);
;// CONCATENATED MODULE: ./backend/controllers/orderControllers.js





const stripe = new (external_stripe_default())("sk_test_51O6w7dDOjQS6A0boeDUVdNmwuuXUircOJmLi73IpTuVxyf5xdQT95w1WPNiv3W1PkhvbrMkBA3u0tYL3IXjPnN6l00LOMLbS2Y");
const getOrders = async (req, res)=>{
    const resPerPage = 2;
    const ordersCount = await models_order.countDocuments();
    const apiFilters = new APIFilters/* default */.Z(models_order.find(), req.query).pagination(resPerPage);
    const orders = await apiFilters.query.find().populate("shippingInfo user");
    res.status(200).json({
        ordersCount,
        resPerPage,
        orders
    });
};
const getOrder = async (req, res)=>{
    const order = await models_order.findById(req.query.id).populate("shippingInfo user");
    if (!order) {
        return next(new errorHandler/* default */.Z("No Order found with this ID", 404));
    }
    res.status(200).json({
        order
    });
};
const myOrders = async (req, res)=>{
    const resPerPage = 2;
    const ordersCount = await models_order.countDocuments();
    const apiFilters = new APIFilters/* default */.Z(models_order.find(), req.query).pagination(resPerPage);
    const orders = await apiFilters.query.find({
        user: req.user._id
    }).populate("shippingInfo user");
    res.status(200).json({
        ordersCount,
        resPerPage,
        orders
    });
};
const updateOrder = async (req, res)=>{
    let order = await models_order.findById(req.query.id);
    if (!order) {
        return next(new errorHandler/* default */.Z("No Order found with this ID", 404));
    }
    order = await models_order.findByIdAndUpdate(req.query.id, {
        orderStatus: req.body.orderStatus
    });
    res.status(200).json({
        success: true,
        order
    });
};
const deleteOrder = async (req, res)=>{
    let order = await models_order.findById(req.query.id);
    if (!order) {
        return next(new errorHandler/* default */.Z("No Order found with this ID", 404));
    }
    await order.deleteOne();
    res.status(200).json({
        success: true
    });
};
const canReview = async (req, res)=>{
    const productId = req.query.productId;
    const orders = await models_order.find({
        user: req?.user?._id,
        "orderItems.product": productId
    });
    let canReview = orders?.length >= 1 ? true : false;
    res.status(200).json({
        canReview
    });
};
const checkoutSession = async (req, res)=>{
    const body = req.body;
    const line_items = body?.items?.map((item)=>{
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [
                        item.image
                    ],
                    metadata: {
                        productId: item.product
                    }
                },
                unit_amount: item.price * 100
            },
            tax_rates: [
                "txr_1MUVJSAlHMiRMt8E2khIxJEi"
            ],
            quantity: item.quantity
        };
    });
    const shippingInfo = body?.shippingInfo;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: [
            "card"
        ],
        success_url: `${"http://localhost:3000"}/me/orders?order_success=true`,
        cancel_url: `${"http://localhost:3000"}`,
        customer_email: req?.user?.email,
        client_reference_id: req?.user?._id,
        mode: "payment",
        metadata: {
            shippingInfo
        },
        shipping_options: [
            {
                shipping_rate: "shr_1MUVKxAlHMiRMt8EmUp4SKxz"
            }
        ],
        line_items
    });
    res.status(200).json({
        url: session.url
    });
};
async function getCartItems(line_items) {
    return new Promise((resolve, reject)=>{
        let cartItems = [];
        line_items?.data?.forEach(async (item)=>{
            const product = await stripe.products.retrieve(item.price.product);
            const productId = product.metadata.productId;
            cartItems.push({
                product: productId,
                name: product.name,
                price: item.price.unit_amount_decimal / 100,
                quantity: item.quantity,
                image: product.images[0]
            });
            if (cartItems.length === line_items?.data.length) {
                resolve(cartItems);
            }
        });
    });
}
const webhook = async (req, res)=>{
    try {
        const rawBody = await external_raw_body_default()(req);
        const signature = req.headers["stripe-signature"];
        const event = stripe.webhooks.constructEvent(rawBody, signature, "whsec_0758d6d05b0889fae95277a5705415a84ce714e60055949213a98d6f6405a523");
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            const line_items = await stripe.checkout.sessions.listLineItems(event.data.object.id);
            const orderItems = await getCartItems(line_items);
            const userId = session.client_reference_id;
            const amountPaid = session.amount_total / 100;
            const paymentInfo = {
                id: session.payment_intent,
                status: session.payment_status,
                amountPaid,
                taxPaid: session.total_details.amount_tax / 100
            };
            const orderData = {
                user: userId,
                shippingInfo: session.metadata.shippingInfo,
                paymentInfo,
                orderItems
            };
            const order = await models_order.create(orderData);
            res.status(201).json({
                success: true
            });
        }
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;