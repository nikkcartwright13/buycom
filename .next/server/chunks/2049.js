"use strict";
exports.id = 2049;
exports.ids = [2049];
exports.modules = {

/***/ 86014:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.headers = headers;
exports.previewData = previewData;
exports.cookies = cookies;
var _cookies = __webpack_require__(50811);
var _requestAsyncStorage = __webpack_require__(23269);
var _staticGenerationBailout = __webpack_require__(63243);
function headers() {
    if ((0, _staticGenerationBailout).staticGenerationBailout("headers")) {
        return new Headers({});
    }
    const requestStore = _requestAsyncStorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error(`Invariant: Method expects to have requestAsyncStorage, none available`);
    }
    return requestStore.headers;
}
function previewData() {
    const requestStore = _requestAsyncStorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error(`Invariant: Method expects to have requestAsyncStorage, none available`);
    }
    return requestStore.previewData;
}
function cookies() {
    if ((0, _staticGenerationBailout).staticGenerationBailout("cookies")) {
        return new _cookies.RequestCookies(new Headers({}));
    }
    const requestStore = _requestAsyncStorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error(`Invariant: Method expects to have requestAsyncStorage, none available`);
    }
    return requestStore.cookies;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 63243:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationBailout = staticGenerationBailout;
var _hooksServerContext = __webpack_require__(85746);
var _staticGenerationAsyncStorage = __webpack_require__(90683);
function staticGenerationBailout(reason) {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        staticGenerationStore.revalidate = 0;
        const err = new _hooksServerContext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 50811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RequestCookies", ({
    enumerable: true,
    get: function() {
        return _requestCookies.RequestCookies;
    }
}));
Object.defineProperty(exports, "ResponseCookies", ({
    enumerable: true,
    get: function() {
        return _responseCookies.ResponseCookies;
    }
}));
var _requestCookies = __webpack_require__(69427);
var _responseCookies = __webpack_require__(82317); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 69427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _serialize = __webpack_require__(3212);
class RequestCookies {
    _parsed = new Map();
    constructor(requestHeaders){
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = (0, _serialize).parseCookieString(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var ref;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (ref = args[0]) == null ? void 0 : ref.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, v])=>(0, _serialize).serialize(v)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(/** Name or names of the cookies to be deleted  */ names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>(0, _serialize).serialize(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
}
exports.RequestCookies = RequestCookies; //# sourceMappingURL=request-cookies.js.map


/***/ }),

/***/ 82317:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _serialize = __webpack_require__(3212);
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = (0, _serialize).serialize(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1000);
    }
    if (cookie.path === null || cookie.path === undefined) {
        cookie.path = "/";
    }
    return cookie;
}
class ResponseCookies {
    _parsed = new Map();
    constructor(responseHeaders){
        this._headers = responseHeaders;
        // @ts-expect-error See https://github.com/whatwg/fetch/issues/973
        const headers = this._headers.getAll("set-cookie");
        for (const header of headers){
            const parsed = (0, _serialize).parseSetCookieString(header);
            if (parsed) {
                this._parsed.set(parsed.name, parsed);
            }
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var ref;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (ref = args[0]) == null ? void 0 : ref.name;
        return all.filter((c)=>c.name === key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this.set({
            name,
            value: "",
            expires: new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
}
exports.ResponseCookies = ResponseCookies; //# sourceMappingURL=response-cookies.js.map


/***/ }),

/***/ 3212:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serialize = serialize;
exports.parseCookieString = parseCookieString;
exports.parseSetCookieString = parseSetCookieString;
const SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : undefined;
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
function serialize(c) {
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && c.expires && `Expires=${c.expires.toUTCString()}`,
        "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
}
function parseCookieString(cookie) {
    const map = new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitIndex = pair.indexOf("=");
        const key = pair.slice(0, splitIndex);
        const value = pair.slice(splitIndex + 1);
        map.set(key, decodeURIComponent(value ?? "true"));
    }
    return map;
}
function parseSetCookieString(setCookie) {
    if (!setCookie) {
        return undefined;
    }
    const [[name, value], ...attributes] = parseCookieString(setCookie);
    const { domain , expires , httponly , maxage , path , samesite , secure  } = Object.fromEntries(attributes.map(([key, v])=>[
            key.toLowerCase(),
            v
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
} //# sourceMappingURL=serialize.js.map


/***/ }),

/***/ 42049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(86014);


/***/ })

};
;