(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-map-map-module"],{

/***/ "./node_modules/angular2-baidu-map/__ivy_ngcc__/fesm2015/angular2-baidu-map.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular2-baidu-map/__ivy_ngcc__/fesm2015/angular2-baidu-map.js ***!
  \*************************************************************************************/
/*! exports provided: Animation, BaiduMapModule, ControlAnchor, LengthUnit, MapTypeControlType, MapTypeEnum, NavigationControlType, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaiduMapModule", function() { return BaiduMapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlAnchor", function() { return ControlAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthUnit", function() { return LengthUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeControlType", function() { return MapTypeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeEnum", function() { return MapTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationControlType", function() { return NavigationControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ScriptLoaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ScriptLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MarkerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PolylineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PolygonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return HeatmapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return TileLayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TrafficLayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return CanvasLayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return MarkerClustererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */


const _c0 = ["mapinstance"];
const _c1 = ["*"];
function isNull(obj) {
    return obj === null || obj === undefined;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isUndefined(obj) {
    return obj === undefined;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}
/**
 * @template T
 * @param {?} obj
 * @param {...?} keys
 * @return {?}
 */
function omit(obj, ...keys) {
    /** @type {?} */
    const rawKeys = Object.keys(obj);
    /** @type {?} */
    const finalKeys = rawKeys.filter((/**
     * @param {?} k
     * @return {?}
     */
    k => keys.indexOf(k) < 0));
    return finalKeys.reduce((/**
     * @param {?} p
     * @param {?} v
     * @return {?}
     */
    (p, v) => {
        p[v] = obj[v];
        return p;
    }), (/** @type {?} */ ({})));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BMapConstructor() { }
/**
 * @record
 */
function BMapInstance() { }
if (false) {}
/**
 * @record
 */
function MapOptions() { }
if (false) {}
/**
 * @record
 */
function CenterAndZoom() { }
if (false) {}
/**
 * @record
 */
function BPanOptions() { }
if (false) {}
/** @enum {string} */
const MapTypeEnum = {
    BMAP_NORMAL_MAP: 'BMAP_NORMAL_MAP',
    BMAP_PERSPECTIVE_MAP: 'BMAP_PERSPECTIVE_MAP',
    BMAP_SATELLITE_MAP: 'BMAP_SATELLITE_MAP',
    BMAP_HYBRID_MAP: 'BMAP_HYBRID_MAP',
};
/**
 * @param {?} maptype
 * @return {?}
 */
function isMapTypeEnum(maptype) {
    return !isFunction(((/** @type {?} */ (maptype))).getTileLayer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} opts
 * @return {?}
 */
function toPoint(opts) {
    if (!opts) {
        return new window.BMap.Point();
    }
    return new window.BMap.Point(opts.lng, opts.lat);
}
/**
 * @param {?} opts
 * @return {?}
 */
function toPoints(opts) {
    if (!opts) {
        return [];
    }
    return opts.map((/**
     * @param {?} p
     * @return {?}
     */
    p => {
        return new window.BMap.Point(p.lng, p.lat);
    }));
}
/**
 * @param {?} opts
 * @return {?}
 */
function toSize(opts) {
    if (!opts) {
        return new window.BMap.Size();
    }
    return new window.BMap.Size(opts.width, opts.height);
}
/**
 * @param {?} url
 * @param {?} size
 * @param {?} options
 * @return {?}
 */
function toIcon(url, size, options) {
    if (!size && !options) {
        return new window.BMap.Icon(url);
    }
    if (!size) {
        return new window.BMap.Icon(url, toSize(size));
    }
    /** @type {?} */
    const iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    /** @type {?} */
    const icon = new window.BMap.Icon(url, toSize(size), iconOptions);
    if (options.imageSize) {
        icon.setImageSize(toSize(options.imageSize));
    }
    return icon;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMarkerOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (options.offset) {
        opts.offset = toSize(options.offset);
    }
    if (options.icon) {
        opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon);
    }
    if (!isNull(options.enableMassClear)) {
        opts.enableMassClear = options.enableMassClear;
    }
    if (!isNull(options.enableDragging)) {
        opts.enableDragging = options.enableDragging;
    }
    if (!isNull(options.enableClicking)) {
        opts.enableClicking = options.enableClicking;
    }
    if (!isNull(options.raiseOnDrag)) {
        opts.raiseOnDrag = options.raiseOnDrag;
    }
    if (!isNull(options.draggingCursor)) {
        opts.draggingCursor = options.draggingCursor;
    }
    if (!isNull(options.rotation)) {
        opts.rotation = options.rotation;
    }
    if (!isNull(options.title)) {
        opts.title = options.title;
    }
    if (!isNull(options.shadow)) {
        opts.shadow = toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow);
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toNavigationControlOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.enableGeolocation)) {
        opts.enableGeolocation = options.enableGeolocation;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.showZoomInfo)) {
        opts.showZoomInfo = options.showZoomInfo;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toOverviewMapControlOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.isOpen)) {
        opts.isOpen = options.isOpen;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.size)) {
        opts.size = toSize(options.size);
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toScaleControlOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMapTypeControlOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    if (!isNull(options.mapTypes)) {
        opts.mapTypes = options.mapTypes.map((/**
         * @param {?} mapType
         * @return {?}
         */
        mapType => {
            return isMapTypeEnum(mapType) ? window[mapType] : mapType;
        }));
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toGeolocationOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.enableAutoLocation)) {
        opts.enableAutoLocation = options.enableAutoLocation;
    }
    if (!isNull(options.locationIcon)) {
        opts.locationIcon = toIcon(options.locationIcon.imageUrl, options.locationIcon.size, options.locationIcon);
    }
    if (!isNull(options.showAddressBar)) {
        opts.showAddressBar = options.showAddressBar;
    }
    return opts;
}
/**
 * @param {?} style
 * @return {?}
 */
function toTextIconStyle(style) {
    /** @type {?} */
    const realStyle = {
        url: style.url,
        size: toSize(style.size)
    };
    if (style.anchor) {
        realStyle.anchor = toSize(style.anchor);
    }
    if (style.offset) {
        realStyle.offset = toSize(style.offset);
    }
    if (!isNull(style.textSize)) {
        realStyle.textSize = style.textSize;
    }
    if (!isNull(style.textColor)) {
        realStyle.textColor = style.textColor;
    }
    return realStyle;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMarkerClustererOptions(options) {
    /** @type {?} */
    const opts = {};
    if (!options) {
        return opts;
    }
    if (options.markers) {
        opts.markers = options.markers.map((/**
         * @param {?} m
         * @return {?}
         */
        m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options))));
    }
    if (!isNull(options.girdSize)) {
        opts.girdSize = options.girdSize;
    }
    if (!isNull(options.maxZoom)) {
        opts.maxZoom = options.maxZoom;
    }
    if (!isNull(options.minClusterSize)) {
        opts.minClusterSize = options.minClusterSize;
    }
    if (!isNull(options.isAverangeCenter)) {
        opts.isAverangeCenter = options.isAverangeCenter;
    }
    if (options.styles) {
        opts.styles = options.styles.filter((/**
         * @param {?} s
         * @return {?}
         */
        s => s)).map((/**
         * @param {?} s
         * @return {?}
         */
        s => toTextIconStyle(s)));
    }
    return opts;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @param {?} msg
 * @return {?}
 */
function nullCheck(obj, msg) {
    if (isNull(obj)) {
        throw new Error(msg);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LOADING_STATE = {
    NON: 0,
    LOADED: 1,
    LOADING: 2,
};
LOADING_STATE[LOADING_STATE.NON] = 'NON';
LOADING_STATE[LOADING_STATE.LOADED] = 'LOADED';
LOADING_STATE[LOADING_STATE.LOADING] = 'LOADING';
class ScriptLoaderConfig {
    constructor() {
        this.ak = '';
    }
}
if (false) {}
class ScriptLoader {
    constructor() {
        window._scriptLoadState = {};
        window._loadingCallbacks = {};
    }
    /**
     * @param {?} url
     * @param {?=} isMain
     * @param {?=} cb
     * @return {?}
     */
    load(url, isMain = false, cb) {
        // tslint:disable: no-string-literal
        /** @type {?} */
        const scriptKey = isString(url) ? url : url['key'];
        /** @type {?} */
        const scriptUrls = isString(url) ? [url] : url['scripts']
        // tslint:enable: no-string-literal
        ;
        // tslint:enable: no-string-literal
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADED) {
            if (isMain) {
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
            }
            return cb();
        }
        if (!window._loadingCallbacks[scriptKey]) {
            window._loadingCallbacks[scriptKey] = [];
        }
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADING) {
            window._loadingCallbacks[scriptKey].push(cb);
            return;
        }
        window._scriptLoadState[scriptKey] = LOADING_STATE.LOADING;
        window._loadingCallbacks[scriptKey].push(cb);
        if (isMain) {
            window.baidumapinit = (/**
             * @return {?}
             */
            () => {
                window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
                window._loadingCallbacks[scriptKey].forEach((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => {
                    c();
                }));
            });
        }
        appendScriptsTag(scriptKey, scriptUrls, isMain);
    }
}
ScriptLoader.ɵfac = function ScriptLoader_Factory(t) { return new (t || ScriptLoader)(); };
ScriptLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScriptLoader, factory: ScriptLoader.ɵfac });
/** @nocollapse */
ScriptLoader.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/**
 * @param {?} scriptKey
 * @param {?} urls
 * @param {?} isMain
 * @return {?}
 */
function appendScriptsTag(scriptKey, urls, isMain) {
    /** @type {?} */
    const leftObj = {
        count: urls.length
    };
    urls.forEach((/**
     * @param {?} url
     * @return {?}
     */
    url => {
        appendScriptTag(scriptKey, url, isMain, leftObj);
    }));
}
/**
 * @param {?} scriptKey
 * @param {?} url
 * @param {?} isMain
 * @param {?} leftObj
 * @return {?}
 */
function appendScriptTag(scriptKey, url, isMain, leftObj) {
    /** @type {?} */
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = (/**
     * @return {?}
     */
    () => {
        if (isMain) {
            switchDisplay('baidu-map .baidu-map-offline', 'block');
            switchDisplay('baidu-map .baidu-map-instance', 'none');
        }
        document.body.removeChild(script);
        setTimeout((/**
         * @return {?}
         */
        () => {
            appendScriptTag(scriptKey, url, isMain, leftObj);
        }), 30000);
    });
    if (!isMain) {
        script.onload = (/**
         * @return {?}
         */
        () => {
            leftObj.count--;
            if (leftObj.count) {
                return;
            }
            window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
            window._loadingCallbacks[scriptKey].forEach((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                c();
            }));
        });
    }
    document.body.appendChild(script);
}
/**
 * @param {?} selector
 * @param {?} state
 * @return {?}
 */
function switchDisplay(selector, state) {
    Array.prototype.slice
        .call(document.querySelectorAll(selector))
        .forEach((/**
     * @param {?} node
     * @return {?}
     */
    (node) => {
        node.style.display = state;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MapService {
    /**
     * @param {?} config
     * @param {?} loader
     */
    constructor(config, loader) {
        this.loader = loader;
        nullCheck(config.ak, 'ak must be provided');
        this.config = config;
        this.map = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this.mapResolver = resolve;
        }));
    }
    /**
     * @param {?} el
     * @param {?} mapOptions
     * @return {?}
     */
    createMap(el, mapOptions) {
        /** @type {?} */
        const URL = `https://api.map.baidu.com/api?v=3.0&ak=${this.config.ak}&callback=baidumapinit`;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.loader.load(URL, true, (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                this.setOptions(mapOptions);
                this.mapResolver(map);
                resolve(map);
            }));
        }));
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    setOptions(opts) {
        const { disableDragging, enableScrollWheelZoom, disableDoubleClickZoom, enableKeyboard, enableInertialDragging, enableAutoResize, enableContinuousZoom, disablePinchToZoom } = opts;
        if (isBoolean(disableDragging)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(disableDragging ? 'disable' : 'enable') + 'Dragging']()));
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']()));
        }
        if (isBoolean(enableAutoResize)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']()));
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']()));
        }
        if (isBoolean(enableKeyboard)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']()));
        }
        if (isBoolean(enableInertialDragging)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']()));
        }
        if (isBoolean(enableContinuousZoom)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']()));
        }
        if (isBoolean(disablePinchToZoom)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']()));
        }
        if (!isNull(opts.cursor)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map.setDefaultCursor(opts.cursor)));
        }
        if (!isNull(opts.draggingCursor)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map.setDraggingCursor(opts.draggingCursor)));
        }
        if (!isNull(opts.currentCity)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => map.setCurrentCity(opts.currentCity)));
        }
        if (!isNull(opts.centerAndZoom)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            }));
        }
        if (!isNull(opts.mapType)) {
            this.map.then((/**
             * @param {?} map
             * @return {?}
             */
            map => {
                /** @type {?} */
                const realType = isMapTypeEnum(opts.mapType)
                    ? window[opts.mapType]
                    : opts.mapType;
                map.setMapType(realType);
            }));
        }
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    addOverlay(cb) {
        return this.map.then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            /** @type {?} */
            const overlay = cb(map);
            map.addOverlay(overlay);
            return { map, overlay };
        }));
    }
    /**
     * @param {?} overlay
     * @return {?}
     */
    removeOverlay(overlay) {
        return this.map.then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            map.removeOverlay(overlay);
        }));
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    addTileLayer(cb) {
        return this.map.then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            /** @type {?} */
            const tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map, tilelayer };
        }));
    }
    /**
     * @param {?} tilelayer
     * @return {?}
     */
    removeTileLayer(tilelayer) {
        return this.map.then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            map.removeOverlay(tilelayer);
        }));
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    addControl(cb) {
        return this.map.then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            /** @type {?} */
            const control = cb(map);
            map.addControl(control);
            return { map, control };
        }));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    removeControl(control) {
        return this.map.then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            map.removeControl(control);
        }));
    }
    /**
     * @return {?}
     */
    getNativeMap() {
        return this.map;
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScriptLoaderConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScriptLoader)); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac });
/** @nocollapse */
MapService.ctorParameters = () => [
    { type: ScriptLoaderConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ScriptLoaderConfig,] }] },
    { type: ScriptLoader }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ScriptLoaderConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ScriptLoaderConfig]
            }] }, { type: ScriptLoader }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.type, 'type is required for <control>');
        this.service
            .addControl((/**
         * @return {?}
         */
        () => {
            this.control = this.createControl(this.type, this.options);
            return this.control;
        }))
            .then((/**
         * @param {?} __0
         * @return {?}
         */
        ({ control }) => {
            this.loaded.emit(control);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeControl(this.control);
    }
    /**
     * @private
     * @param {?} type
     * @param {?} options
     * @return {?}
     */
    createControl(type, options) {
        if (type === 'navigation') {
            return new window.BMap.NavigationControl(toNavigationControlOptions(options));
        }
        if (type === 'overviewmap') {
            return new window.BMap.OverviewMapControl(toOverviewMapControlOptions(options));
        }
        if (type === 'scale') {
            return new window.BMap.ScaleControl(toScaleControlOptions(options));
        }
        if (type === 'maptype') {
            return new window.BMap.MapTypeControl(toMapTypeControlOptions(options));
        }
        if (type === 'geolocation') {
            return new window.BMap.GeolocationControl(toGeolocationOptions(options));
        }
        if (type === 'panorama') {
            return new window.BMap.PanoramaControl();
        }
        throw new Error(`Unsupported type:${type} of control`);
    }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
ControlComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ControlComponent, selectors: [["control"]], inputs: { type: "type", options: "options" }, outputs: { loaded: "loaded" } });
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: MapService }
];
ControlComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'control'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MapComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // do nothing
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this.service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then((/**
         * @param {?} map
         * @return {?}
         */
        map => {
            this.loaded.emit(map);
            return map;
        }))
            .then((/**
         * @param {?} map
         * @return {?}
         */
        map => {
            this.addListener(map);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const opts = (/** @type {?} */ (changes.options.currentValue));
        if (!opts) {
            return console.warn('MapOptions change was ignored since you are passing empty value');
        }
        this.service.setOptions(opts);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log('on map destroy');
    }
    /**
     * @private
     * @param {?} map
     * @return {?}
     */
    addListener(map) {
        map.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.clicked.emit(e);
        }));
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["baidu-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapInstance = _t.first);
    } }, inputs: { options: "options" }, outputs: { loaded: "loaded", clicked: "clicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MapService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 7, vars: 1, consts: [[1, "baidu-map-instance"], ["mapinstance", ""], [1, "baidu-map-offline"], [1, "tranclude-content"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("NO_NETWORK");
    } }, styles: [".baidu-map-instance[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: none;\n      }\n      .baidu-map-offline[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-color: #e6e6e6;\n        position: relative;\n        display: none;\n      }\n      .baidu-map-offline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        fontsize: 30px;\n        margin: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-right: -50%;\n        transform: translate(-50%, -50%);\n      }\n      .tranclude-content[_ngcontent-%COMP%] {\n        display: none;\n      }"] });
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: MapService }
];
MapComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapInstance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mapinstance', { static: false },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [MapService],
                selector: 'baidu-map',
                template: `
    <div #mapinstance class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
      <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
      <ng-content></ng-content>
    </div>
  `,
                styles: [`
      .baidu-map-instance {
        width: 100%;
        height: 100%;
        display: none;
      }
      .baidu-map-offline {
        width: 100%;
        height: 100%;
        background-color: #e6e6e6;
        position: relative;
        display: none;
      }
      .baidu-map-offline label {
        fontsize: 30px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
      .tranclude-content {
        display: none;
      }
    `]
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapInstance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapinstance', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MarkerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.point, 'point is required for <marker>');
        this.service
            .addOverlay((/**
         * @return {?}
         */
        () => {
            return (this.marker = new window.BMap.Marker(toPoint(this.point), toMarkerOptions(this.options)));
        }))
            .then((/**
         * @param {?} __0
         * @return {?}
         */
        ({ map }) => {
            this.loaded.emit(this.marker);
            this.addListener(this.marker, map);
        }))
            .then((/**
         * @return {?}
         */
        () => {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            this.marker.setPosition(new window.BMap.Point(this.point.lng, this.point.lat));
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.point && !changes.point.isFirstChange()) {
            this.marker.setPosition(toPoint(changes.point.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeOverlay(this.marker);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isNull(options.offset)) {
            this.marker.setOffset(toSize(options.offset));
        }
        if (!isNull(options.icon)) {
            this.marker.setIcon(toIcon(options.icon.imageUrl, options.icon.size, options.icon));
        }
        if (!isNull(options.enableMassClear)) {
            this.marker[(options.enableMassClear ? 'enable' : 'disable') + 'MassClear']();
        }
        if (!isNull(options.enableDragging)) {
            this.marker[(options.enableDragging ? 'enable' : 'disable') + 'Dragging']();
        }
        if (!isNull(options.rotation)) {
            this.marker.setRotation(options.rotation);
        }
        if (!isNull(options.shadow)) {
            this.marker.setShadow(toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow));
        }
        if (!isNull(options.title)) {
            this.marker.setTitle(options.title);
        }
    }
    /**
     * @private
     * @param {?} marker
     * @param {?} map
     * @return {?}
     */
    addListener(marker, map) {
        marker.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.clicked.emit({
                e,
                map,
                marker
            });
        }));
    }
}
MarkerComponent.ɵfac = function MarkerComponent_Factory(t) { return new (t || MarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
MarkerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MarkerComponent, selectors: [["marker"]], inputs: { point: "point", options: "options" }, outputs: { loaded: "loaded", clicked: "clicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MarkerComponent.ctorParameters = () => [
    { type: MapService }
];
MarkerComponent.propDecorators = {
    point: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'marker'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], point: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolylineComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polyline>');
        this.service
            .addOverlay((/**
         * @return {?}
         */
        () => {
            return (this.polyline = new window.BMap.Polyline(toPoints(this.points), this.options));
        }))
            .then((/**
         * @param {?} __0
         * @return {?}
         */
        ({ map }) => {
            this.loaded.emit(this.polyline);
            this.addListener(this.polyline, map);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polyline.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeOverlay(this.polyline);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polyline.enableEditing();
            }
            else {
                this.polyline.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polyline.enableMassClear();
            }
            else {
                this.polyline.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polyline.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polyline.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polyline.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polyline.setStrokeWeight(options.strokeWeight);
        }
    }
    /**
     * @private
     * @param {?} polyline
     * @param {?} map
     * @return {?}
     */
    addListener(polyline, map) {
        polyline.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            console.log('sfdsfdsfds');
            this.clicked.emit({
                e,
                map,
                polyline
            });
        }));
    }
}
PolylineComponent.ɵfac = function PolylineComponent_Factory(t) { return new (t || PolylineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
PolylineComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PolylineComponent, selectors: [["polyline"]], inputs: { points: "points", options: "options" }, outputs: { loaded: "loaded", clicked: "clicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
PolylineComponent.ctorParameters = () => [
    { type: MapService }
];
PolylineComponent.propDecorators = {
    points: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolylineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'polyline'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], points: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CircleComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this.service
            .addOverlay((/**
         * @return {?}
         */
        () => {
            return (this.circle = new window.BMap.Circle(toPoint(this.center), this.radius, this.options));
        }))
            .then((/**
         * @return {?}
         */
        () => {
            this.loaded.emit(this.circle);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.center && !changes.center.isFirstChange()) {
            this.circle.setCenter(toPoint(changes.center.currentValue));
        }
        if (changes.radius && !changes.radius.isFirstChange()) {
            this.circle.setRadius(changes.radius.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeOverlay(this.circle);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.circle.enableEditing();
            }
            else {
                this.circle.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.circle.enableMassClear();
            }
            else {
                this.circle.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.circle.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.circle.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.circle.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.circle.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.circle.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.circle.setStrokeWeight(options.strokeWeight);
        }
    }
}
CircleComponent.ɵfac = function CircleComponent_Factory(t) { return new (t || CircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
CircleComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CircleComponent, selectors: [["circle"]], inputs: { center: "center", radius: "radius", options: "options" }, outputs: { loaded: "loaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CircleComponent.ctorParameters = () => [
    { type: MapService }
];
CircleComponent.propDecorators = {
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'circle'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolygonComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polygon>');
        this.service
            .addOverlay((/**
         * @return {?}
         */
        () => {
            return (this.polygon = new window.BMap.Polygon(toPoints(this.points), this.options));
        }))
            .then((/**
         * @return {?}
         */
        () => {
            this.loaded.emit(this.polygon);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polygon.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeOverlay(this.polygon);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polygon.enableEditing();
            }
            else {
                this.polygon.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polygon.enableMassClear();
            }
            else {
                this.polygon.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polygon.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.polygon.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polygon.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.polygon.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polygon.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polygon.setStrokeWeight(options.strokeWeight);
        }
    }
}
PolygonComponent.ɵfac = function PolygonComponent_Factory(t) { return new (t || PolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
PolygonComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PolygonComponent, selectors: [["polygon"]], inputs: { points: "points", options: "options" }, outputs: { loaded: "loaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
PolygonComponent.ctorParameters = () => [
    { type: MapService }
];
PolygonComponent.propDecorators = {
    points: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolygonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'polygon'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], points: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LIB_URL = `https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js`;
class HeatmapComponent {
    /**
     * @param {?} service
     * @param {?} scriptLoader
     */
    constructor(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this.service.getNativeMap().then((/**
         * @return {?}
         */
        () => {
            return this.scriptLoader.load(LIB_URL, false, (/**
             * @return {?}
             */
            () => {
                this.service
                    .addOverlay((/**
                 * @return {?}
                 */
                () => {
                    return (this.heatmap = new window.BMapLib.HeatmapOverlay(this.options));
                }))
                    .then((/**
                 * @return {?}
                 */
                () => {
                    this.loaded.emit(this.heatmap);
                    if (this.dataset) {
                        this.heatmap.setDataSet(this.dataset);
                    }
                }));
            }));
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dataset && !changes.dataset.isFirstChange()) {
            this.heatmap.setDataSet(changes.dataset.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.heatmap.setOptions(changes.options.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeOverlay(this.heatmap);
    }
}
HeatmapComponent.ɵfac = function HeatmapComponent_Factory(t) { return new (t || HeatmapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptLoader)); };
HeatmapComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HeatmapComponent, selectors: [["heatmap"]], inputs: { dataset: "dataset", options: "options" }, outputs: { loaded: "loaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
HeatmapComponent.ctorParameters = () => [
    { type: MapService },
    { type: ScriptLoader }
];
HeatmapComponent.propDecorators = {
    dataset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeatmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'heatmap'
            }]
    }], function () { return [{ type: MapService }, { type: ScriptLoader }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dataset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TileLayerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const func = this.getTilesUrl;
        this.service
            .addTileLayer((/**
         * @return {?}
         */
        () => {
            this.tilelayer = new window.BMap.TileLayer(this.options);
            if (this.getTilesUrl) {
                this.tilelayer.getTilesUrl = (/**
                 * @param {?} tileCoord
                 * @param {?} zoom
                 * @return {?}
                 */
                (tileCoord, zoom) => {
                    return func(tileCoord, zoom);
                });
            }
            return this.tilelayer;
        }))
            .then((/**
         * @return {?}
         */
        () => {
            this.loaded.emit(this.tilelayer);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeTileLayer(this.tilelayer);
    }
}
TileLayerComponent.ɵfac = function TileLayerComponent_Factory(t) { return new (t || TileLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
TileLayerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TileLayerComponent, selectors: [["tilelayer"]], inputs: { getTilesUrl: "getTilesUrl", options: "options" }, outputs: { loaded: "loaded" } });
/** @nocollapse */
TileLayerComponent.ctorParameters = () => [
    { type: MapService }
];
TileLayerComponent.propDecorators = {
    getTilesUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'tilelayer'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getTilesUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrafficLayerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service
            .addTileLayer((/**
         * @return {?}
         */
        () => {
            this.trafficlayer = new window.BMap.TrafficLayer(this.options);
            return this.trafficlayer;
        }))
            .then((/**
         * @return {?}
         */
        () => {
            this.loaded.emit(this.trafficlayer);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeTileLayer(this.trafficlayer);
    }
}
TrafficLayerComponent.ɵfac = function TrafficLayerComponent_Factory(t) { return new (t || TrafficLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
TrafficLayerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TrafficLayerComponent, selectors: [["trafficlayer"]], inputs: { options: "options" }, outputs: { loaded: "loaded" } });
/** @nocollapse */
TrafficLayerComponent.ctorParameters = () => [
    { type: MapService }
];
TrafficLayerComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'trafficlayer'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CanvasLayerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service
            .addOverlay((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            this.canvaslayer = new window.BMap.CanvasLayer(this.getOptions(this.options, map));
            return this.canvaslayer;
        }))
            .then((/**
         * @return {?}
         */
        () => {
            this.loaded.emit(this.canvaslayer);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.service.removeOverlay(this.canvaslayer);
    }
    /**
     * @private
     * @param {?} options
     * @param {?} map
     * @return {?}
     */
    getOptions(options, map) {
        if (!options) {
            return;
        }
        /** @type {?} */
        const opts = {};
        if (isNumber(options.zIndex)) {
            opts.zIndex = options.zIndex;
        }
        if (options.paneName) {
            opts.paneName = options.paneName;
        }
        if (options.update) {
            opts.update = (/**
             * @return {?}
             */
            function () {
                return options.update(map, this.canvas);
            });
        }
        return opts;
    }
}
CanvasLayerComponent.ɵfac = function CanvasLayerComponent_Factory(t) { return new (t || CanvasLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService)); };
CanvasLayerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CanvasLayerComponent, selectors: [["canvaslayer"]], inputs: { options: "options" }, outputs: { loaded: "loaded" } });
/** @nocollapse */
CanvasLayerComponent.ctorParameters = () => [
    { type: MapService }
];
CanvasLayerComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'canvaslayer'
            }]
    }], function () { return [{ type: MapService }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
class MarkerClustererComponent {
    /**
     * @param {?} service
     * @param {?} scriptLoader
     */
    constructor(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this.service.getNativeMap().then((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return this.scriptLoader.load(LIB_URLS, false, (/**
             * @return {?}
             */
            () => {
                this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(this.options));
                this.loaded.emit(this.markerClusterer);
            }));
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.options && !changes.options.isFirstChange()) {
            this.resetOptions(changes.options.currentValue);
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    resetOptions(options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map((/**
             * @param {?} m
             * @return {?}
             */
            m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)))));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter((/**
             * @param {?} s
             * @return {?}
             */
            s => s)).map((/**
             * @param {?} s
             * @return {?}
             */
            s => toTextIconStyle(s))));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.markerClusterer.clearMarkers();
    }
}
MarkerClustererComponent.ɵfac = function MarkerClustererComponent_Factory(t) { return new (t || MarkerClustererComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptLoader)); };
MarkerClustererComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MarkerClustererComponent, selectors: [["marker-clusterer"]], inputs: { options: "options" }, outputs: { loaded: "loaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MarkerClustererComponent.ctorParameters = () => [
    { type: MapService },
    { type: ScriptLoader }
];
MarkerClustererComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkerClustererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'marker-clusterer'
            }]
    }], function () { return [{ type: MapService }, { type: ScriptLoader }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BControlConstructor() { }
/**
 * @record
 */
function BControl() { }
/**
 * @record
 */
function BNavigationControlConstructor() { }
/**
 * @record
 */
function BOverviewMapControlConstructor() { }
/**
 * @record
 */
function BScaleControlConstructor() { }
/**
 * @record
 */
function BMapTypeControlConstructor() { }
/**
 * @record
 */
function BGeolocationConstructor() { }
/**
 * @record
 */
function BPanoramaControlConstructor() { }
/**
 * @record
 */
function BNavigationControl() { }
if (false) {}
/**
 * @record
 */
function BOverviewMapControl() { }
if (false) {}
/**
 * @record
 */
function BScaleControl() { }
if (false) {}
/**
 * @record
 */
function BMapTypeControl() { }
/**
 * @record
 */
function BGeolocationControl() { }
if (false) {}
/**
 * @record
 */
function BPanoramaControlControl() { }
/**
 * @record
 */
function ControlOptions() { }
if (false) {}
/**
 * @record
 */
function BControlOptions() { }
if (false) {}
/**
 * @record
 */
function NavigationControlOptions() { }
if (false) {}
/**
 * @record
 */
function BNavigationControlOptions() { }
if (false) {}
/**
 * @record
 */
function OverviewMapControlOptions() { }
if (false) {}
/**
 * @record
 */
function BOverviewMapControlOptions() { }
if (false) {}
/**
 * @record
 */
function ScaleControlOptions() { }
/**
 * @record
 */
function BScaleControlOptions() { }
/**
 * @record
 */
function MapTypeControlOptions() { }
if (false) {}
/**
 * @record
 */
function BMapTypeControlOptions() { }
if (false) {}
/**
 * @record
 */
function GeolocationControlOptions() { }
if (false) {}
/**
 * @record
 */
function BGeolocationControlOptions() { }
if (false) {}
/** @enum {number} */
const ControlAnchor = {
    BMAP_ANCHOR_TOP_LEFT: 0,
    BMAP_ANCHOR_TOP_RIGHT: 1,
    BMAP_ANCHOR_BOTTOM_LEFT: 2,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
};
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_LEFT] = 'BMAP_ANCHOR_TOP_LEFT';
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_RIGHT] = 'BMAP_ANCHOR_TOP_RIGHT';
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT] = 'BMAP_ANCHOR_BOTTOM_LEFT';
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT] = 'BMAP_ANCHOR_BOTTOM_RIGHT';
/** @enum {number} */
const NavigationControlType = {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
};
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE] = 'BMAP_NAVIGATION_CONTROL_LARGE';
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL] = 'BMAP_NAVIGATION_CONTROL_SMALL';
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_PAN] = 'BMAP_NAVIGATION_CONTROL_PAN';
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_ZOOM] = 'BMAP_NAVIGATION_CONTROL_ZOOM';
/** @enum {number} */
const MapTypeControlType = {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: 0,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
};
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL] = 'BMAP_MAPTYPE_CONTROL_HORIZONTAL';
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_DROPDOWN] = 'BMAP_MAPTYPE_CONTROL_DROPDOWN';
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP] = 'BMAP_MAPTYPE_CONTROL_MAP';
/** @enum {string} */
const LengthUnit = {
    BMAP_UNIT_METRIC: 'metric',
    BMAP_UNIT_IMPERIAL: 'us',
};
/**
 * @record
 */
function AddressComponent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Animation = {
    BMAP_ANIMATION_DROP: 1,
    BMAP_ANIMATION_BOUNCE: 2,
};
Animation[Animation.BMAP_ANIMATION_DROP] = 'BMAP_ANIMATION_DROP';
Animation[Animation.BMAP_ANIMATION_BOUNCE] = 'BMAP_ANIMATION_BOUNCE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaiduMapModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: BaiduMapModule,
            providers: [
                { provide: ScriptLoaderConfig, useValue: config },
                ScriptLoader
            ]
        };
    }
}
BaiduMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaiduMapModule });
BaiduMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaiduMapModule_Factory(t) { return new (t || BaiduMapModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaiduMapModule, { declarations: [MapComponent,
        MarkerComponent,
        ControlComponent,
        PolylineComponent,
        CircleComponent,
        PolygonComponent,
        HeatmapComponent,
        TileLayerComponent,
        TrafficLayerComponent,
        CanvasLayerComponent,
        MarkerClustererComponent], exports: [MapComponent,
        MarkerComponent,
        ControlComponent,
        PolylineComponent,
        CircleComponent,
        PolygonComponent,
        HeatmapComponent,
        TileLayerComponent,
        TrafficLayerComponent,
        CanvasLayerComponent,
        MarkerClustererComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaiduMapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    MapComponent,
                    MarkerComponent,
                    ControlComponent,
                    PolylineComponent,
                    CircleComponent,
                    PolygonComponent,
                    HeatmapComponent,
                    TileLayerComponent,
                    TrafficLayerComponent,
                    CanvasLayerComponent,
                    MarkerClustererComponent
                ],
                exports: [
                    MapComponent,
                    MarkerComponent,
                    ControlComponent,
                    PolylineComponent,
                    CircleComponent,
                    PolygonComponent,
                    HeatmapComponent,
                    TileLayerComponent,
                    TrafficLayerComponent,
                    CanvasLayerComponent,
                    MarkerClustererComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular2-baidu-map.js.map

/***/ }),

/***/ "./src/app/components/map/map-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/map/map-routing.module.ts ***!
  \******************************************************/
/*! exports provided: MapRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutes", function() { return MapRoutes; });
/* harmony import */ var _shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/userService/auth/auth.guard */ "./src/app/shared/userService/auth/auth.guard.ts");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/components/map/monitor/monitor.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report/report.component */ "./src/app/components/map/report/report.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/components/map/routing/routing.component.ts");
/* harmony import */ var _replay_replay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./replay/replay.component */ "./src/app/components/map/replay/replay.component.ts");





const MapRoutes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'monitor', pathMatch: 'full' },
            { path: 'monitor', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MonitorComponent"] },
            { path: 'routing', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_3__["RoutingComponent"] },
            { path: 'replay', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _replay_replay_component__WEBPACK_IMPORTED_MODULE_4__["ReplayComponent"] },
            { path: 'report', canActivate: [_shared_userService_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _report_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"] },
        ]
    }
];


/***/ }),

/***/ "./src/app/components/map/map.module.ts":
/*!**********************************************!*\
  !*** ./src/app/components/map/map.module.ts ***!
  \**********************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-baidu-map */ "./node_modules/angular2-baidu-map/__ivy_ngcc__/fesm2015/angular2-baidu-map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/components/map/monitor/monitor.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report/report.component */ "./src/app/components/map/report/report.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/components/map/routing/routing.component.ts");
/* harmony import */ var _replay_replay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./replay/replay.component */ "./src/app/components/map/replay/replay.component.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/components/map/map-routing.module.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/layouts.module */ "./src/app/components/layouts/layouts.module.ts");
/* harmony import */ var src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/Datatable/DataTableModule */ "./src/app/shared/Datatable/DataTableModule.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















class MapModule {
}
MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapModule_Factory(t) { return new (t || MapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_map_routing_module__WEBPACK_IMPORTED_MODULE_8__["MapRoutes"]),
            angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["BaiduMapModule"].forRoot({ ak: 'qad8aIephigVOp8wW7ppY9SLaWQClGpv' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__["MonitorComponent"],
        _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"],
        _routing_routing_component__WEBPACK_IMPORTED_MODULE_6__["RoutingComponent"],
        _replay_replay_component__WEBPACK_IMPORTED_MODULE_7__["ReplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
        src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["BaiduMapModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__["MonitorComponent"],
                    _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"],
                    _routing_routing_component__WEBPACK_IMPORTED_MODULE_6__["RoutingComponent"],
                    _replay_replay_component__WEBPACK_IMPORTED_MODULE_7__["ReplayComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                    src_app_shared_Datatable_DataTableModule__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_map_routing_module__WEBPACK_IMPORTED_MODULE_8__["MapRoutes"]),
                    angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["BaiduMapModule"].forRoot({ ak: 'qad8aIephigVOp8wW7ppY9SLaWQClGpv' }),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/map/monitor/monitor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/map/monitor/monitor.component.ts ***!
  \*************************************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-baidu-map */ "./node_modules/angular2-baidu-map/__ivy_ngcc__/fesm2015/angular2-baidu-map.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/mapService/map.service */ "./src/app/shared/mapService/map.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");
/* harmony import */ var _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/Datatable/DataTable */ "./src/app/shared/Datatable/DataTable.ts");
/* harmony import */ var _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/Datatable/DefaultSorter */ "./src/app/shared/Datatable/DefaultSorter.ts");
/* harmony import */ var _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/Datatable/BootstrapPaginator */ "./src/app/shared/Datatable/BootstrapPaginator.ts");

















function MonitorComponent_ng_container_7_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.VehicleNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.status);
} }
const _c0 = function () { return [5, 10, 25]; };
function MonitorComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sv-default-sorter", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "VehicleNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sv-default-sorter", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MonitorComponent_ng_container_7_tr_13_Template, 5, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "sv-bootstrap-paginator", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svData", ctx_r0.vehicleList)("svRowsOnPage", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r3.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowsOnPageSet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
function MonitorComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvaslayer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const marker_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", marker_r7.canvaslayerOptions);
} }
function MonitorComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonitorComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectionStatus[i_r8] === true);
} }
function MonitorComponent_ng_container_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonitorComponent_ng_container_26_ng_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r14.selectionStatus[i_r12] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r11 = ctx_r17.$implicit;
    const i_r12 = ctx_r17.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r11.status == "stop" ? "ms-checkbox-wrap ms-checkbox-danger" : "ms-checkbox-wrap ms-checkbox-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r12)("ngModel", ctx_r13.selectionStatus[i_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.VehicleNumber, " ");
} }
function MonitorComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonitorComponent_ng_container_26_ng_container_1_Template, 7, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checkKey(ctx_r2.key, item_r11.VehicleNumber));
} }
class MonitorComponent {
    constructor(userService, router, _formBuilder, toastr, mapService) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.mapService = mapService;
        //user
        this.user = '';
        //Map_Settings
        this.markers = [];
        this.title = 'angular5 Baidu-Map example';
        this.mapcenter = {
            lat: 39.915,
            lng: 116.404,
        };
        this.sight = 400;
        this.mapzoom = 17;
        //selectionTable_Settings.
        this.foundedItem = [];
        this.selectionStatus = [];
        this.selectAll = true;
        //forMouseMoveIntroduce
        this.showIntroduction = false;
        this.showPosition = { x: "100px", y: "100px" };
        //for table vehicle
        this.tableStatus = false;
        this.vehicleList = [];
        this.infos = [];
        this.tableVal = [];
    }
    ngOnInit() {
        //user
        this.user = this.userService.getToken()['userInfo'];
        //map
        this.optionsMap = {
            centerAndZoom: {
                lat: this.mapcenter.lat,
                lng: this.mapcenter.lng,
                zoom: this.mapzoom,
            },
            enableKeyboard: true,
            enableScrollWheelZoom: true,
        };
        this.navOptionsMap = {
            anchor: angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ControlAnchor"].BMAP_ANCHOR_TOP_RIGHT,
            type: angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["NavigationControlType"].BMAP_NAVIGATION_CONTROL_ZOOM,
        };
    }
    //user
    getAll() {
        const vehicleInfo = [
            { VehicleNumber: 'qwer', status: 'stop' },
            { VehicleNumber: '123', status: 'start' },
        ];
        this.vehicleList = vehicleInfo;
        this.setCheckBox(vehicleInfo);
        this.setTrackInfo(vehicleInfo);
        // this.mapService.getVehicleInfo(this.user).subscribe(
        //   res => {
        //     this.vehicleList = res['result'];
        //     this.setCheckBox(res['result']);
        //     this.setTrackInfo(res['result']);
        //   },
        //   err => {
        //     // alert(err.error.message);
        //   }
        // );
    }
    //For trackInfo
    setTrackInfo(data) {
        const info = [
            {
                VehicleNumber: 'qwer',
                lat: 127,
                lng: 68,
            },
            {
                VehicleNumber: '123',
                lat: 126,
                lng: 68,
            }
        ];
        this.setMap(info);
        this.infos = info;
        // this.mapService.getTrackInfoLast({ data: data }).subscribe(
        //   res => {
        //     this.setMap(res["result"]);
        //     this.infos = res["result"];
        //   },
        //   err => {
        //     // alert(err.error.message);
        //   }
        // );
    }
    //for VehicleInfo
    showInfo() {
        this.tableStatus = true;
    }
    tableClose() {
        this.tableStatus = false;
    }
    //For selection table
    setCheckBox(data) {
        console.log(data);
        this.foundedItem = data;
        for (let i = 0; i < data.length; i++)
            this.selectionStatus.push(true);
    }
    checkBoxall() {
        this.checkSetAll(this.selectAll);
    }
    checkSetAll(status) {
        for (let i = 0; i < this.selectionStatus.length; i++) {
            this.selectionStatus[i] = status;
        }
    }
    checkKey(key, string) {
        if (!key)
            return true;
        if (string.indexOf(key) != -1)
            return true;
        else
            return false;
    }
    //For Maps
    mapLoaded(e) {
        this.mapControl = e;
        this.getAll();
    }
    setMap(opt) {
        if (opt.length == 0)
            return;
        this.setZoomAndCenter(opt);
        for (let i = 0; i < opt.length; i++) {
            const newMarker = {
                canvaslayerOptions: this.getCanvasLayer(opt[i]),
            };
            this.markers.push(newMarker);
        }
    }
    getCanvasLayer(opt) {
        const layer = {
            update(map, canvas) {
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return;
                }
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                var data = new window.BMap.Point(opt.lng, opt.lat);
                var pixel = map.pointToPixel(data);
                //set
                const radius = 30;
                const textsize = 15;
                const circleLineWidth = 5;
                const textLineWidth = 0.5;
                const name = opt.VehicleNumber;
                const text = name.substr(0, Math.floor(1.5 * radius / textsize));
                //circle
                ctx.beginPath();
                ctx.save();
                ctx.fillStyle = "rgba(34, 25, 25, 0.63)";
                ctx.arc(pixel.x, pixel.y, radius, 0, 2 * Math.PI);
                ctx.strokeStyle = 'red';
                ctx.lineWidth = circleLineWidth;
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                //text
                ctx.beginPath();
                ctx.save();
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.strokeStyle = 'white';
                ctx.lineWidth = textLineWidth;
                ctx.font = "" + (textsize) + "px Arial";
                // ctx.strokeText(text, pixel.x, pixel.y);
                ctx.stroke();
                ctx.font = "" + textsize + "px Arial";
                ctx.fillStyle = "white";
                ctx.fillText(text, pixel.x, pixel.y);
                ctx.fill();
                ctx.restore();
            }
        };
        return layer;
    }
    setZoomAndCenter(opt) {
        const CZ = this.getCenter(opt);
        const center = {
            lat: CZ.lat,
            lng: CZ.lng,
            equals: Boolean,
        };
        const centerCritical = {
            lat: this.mapControl.getCenter().lat,
            lng: this.mapControl.getCenter().lng,
            equals: Boolean,
        };
        const x = (this.mapControl.pointToPixel(centerCritical).x - this.mapControl.pointToPixel(center).x);
        const y = (this.mapControl.pointToPixel(centerCritical).y - this.mapControl.pointToPixel(center).y);
        const zoom = CZ.zoom;
        this.mapControl.panBy(x, y, { noAnimation: false });
        this.mapControl.setZoom(zoom);
        this.mapcenter = { lat: CZ.lat, lng: CZ.lng };
    }
    getCenter(opt) {
        if (opt.length == 0)
            return;
        if (opt.length == 1)
            return { lat: opt[0].lat, lng: opt[0].lng, zoom: this.mapControl.getZoom() };
        let minLat, maxLat, minLng, maxLng, avgLat, avgLng;
        minLat = Number(opt[0].lat);
        maxLat = Number(opt[0].lat);
        minLng = Number(opt[0].lng);
        maxLng = Number(opt[0].lng);
        for (let i = 0; i < opt.length; i++) {
            if (opt[i].lat < minLat)
                minLat = Number(opt[i].lat);
            if (opt[i].lat > maxLat)
                maxLat = Number(opt[i].lat);
            if (opt[i].lng < minLng)
                minLng = Number(opt[i].lng);
            if (opt[i].lng > maxLng)
                maxLng = Number(opt[i].lng);
        }
        avgLat = minLat + (maxLat - minLat) / 2;
        avgLng = minLng + (maxLng - minLng) / 2;
        const min = {
            lat: minLat,
            lng: minLng,
            equals: Boolean,
        };
        const max = {
            lat: maxLat,
            lng: maxLng,
            equals: Boolean,
        };
        const width = Math.abs(this.mapControl.pointToPixel(min).x - this.mapControl.pointToPixel(max).x);
        const height = Math.abs(this.mapControl.pointToPixel(min).y - this.mapControl.pointToPixel(max).y);
        const critera = Math.max(width, height);
        const zoom = this.mapControl.getZoom() - Math.log2(critera / this.sight);
        return { lat: avgLat, lng: avgLng, zoom: zoom };
    }
    setAnimation(marker) {
        // marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
    }
    showWindow({ marker, map }) {
        map.openInfoWindow(new window.BMap.InfoWindow('地址：浦东南路360号', {
            offset: new window.BMap.Size(0, -30),
            title: '新上海国际大厦'
        }), marker.getPosition());
    }
}
MonitorComponent.ɵfac = function MonitorComponent_Factory(t) { return new (t || MonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"])); };
MonitorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonitorComponent, selectors: [["app-monitor"]], decls: 32, vars: 7, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "mapDiv"], [4, "ngIf"], [3, "options", "loaded"], ["type", "navigation", 3, "options"], [4, "ngFor", "ngForOf"], [1, "leftsideDiv"], [1, "ms-panel-body"], [1, "ms-list", "d-flex"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], [1, "ms-checkbox-wrap", "ms-checkbox-success"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "ms-checkbox-check"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", "searchInput", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled"], [1, "col-md-12"], [1, "ms-list", "ms-list-display"], [1, "buttonDiv", 2, "text-align", "center", "margin-top", "15px"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "vehicleTable", "table-responsive"], ["svSortBy", "name", "svSortOrder", "asc", 1, "table", "table-striped", 3, "svData", "svRowsOnPage"], ["sv", "svDataTable"], ["by", "VehicleNumber"], ["by", "status"], ["colspan", "4"], [3, "rowsOnPageSet"], [3, "options"], ["type", "checkbox", 3, "value", "ngModel", "ngModelChange"]], template: function MonitorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonitorComponent_ng_container_7_Template, 18, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "baidu-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loaded", function MonitorComponent_Template_baidu_map_loaded_8_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MonitorComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonitorComponent_Template_input_change_17_listener() { return ctx.checkBoxall(); })("ngModelChange", function MonitorComponent_Template_input_ngModelChange_17_listener($event) { return ctx.selectAll = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonitorComponent_Template_input_ngModelChange_20_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MonitorComponent_ng_container_26_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonitorComponent_Template_button_click_28_listener() { return ctx.showInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Show Vehicle Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.optionsMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.navOptionsMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foundedItem);
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_7__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__["TopNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ɵa"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ɵf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_10__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_11__["QuickBarComponent"], _shared_Datatable_DataTable__WEBPACK_IMPORTED_MODULE_12__["DataTable"], _shared_Datatable_DefaultSorter__WEBPACK_IMPORTED_MODULE_13__["DefaultSorter"], _shared_Datatable_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_14__["BootstrapPaginator"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ɵm"]], styles: [".searchInput[_ngcontent-%COMP%]{   \r\n    border: solid 1px sandybrown;\r\n}\r\nbaidu-map[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n.baidu-map-instance[_ngcontent-%COMP%]{\r\n  height: 700px !important;\r\n}\r\n.mapDiv[_ngcontent-%COMP%]{\r\n  float: left;\r\n  width: calc(100% - 300px);\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: table-cell;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  background-color: cornsilk;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n.vehicleIntro[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 100px;\r\n  border: solid;\r\n  position: absolute;\r\n  z-index: 1000;\r\n}\r\n.leftsideDiv[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  float: left;\r\n  overflow: auto;\r\n  padding: 0px;\r\n  border-left: 2px solid rgb(221, 221, 221);\r\n  \r\n}\r\n.introductionStatus[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: -71px;\r\n  right: 5px;\r\n  float: right;\r\n  background-color: white;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.vehicleTable[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 29px;\r\n  left: 30px;\r\n  z-index: 1000;\r\n}\r\n.addDiv[_ngcontent-%COMP%]{\r\n  width:50%;\r\n  float: right;\r\n  text-align: right;\r\n  vertical-align: bottom;\r\n  padding-right: 33px;\r\n  margin-top:18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbW9uaXRvci9tb25pdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXAvbW9uaXRvci9tb25pdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoSW5wdXR7ICAgXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBzYW5keWJyb3duO1xyXG59XHJcbmJhaWR1LW1hcHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5iYWlkdS1tYXAtaW5zdGFuY2V7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXBEaXZ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnZlaGljbGVJbnRyb3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IHNvbGlkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5sZWZ0c2lkZURpdntcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIC8qIGhlaWdodDogNjkwcHg7ICovXHJcbn1cclxuLmludHJvZHVjdGlvblN0YXR1cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTcxcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi52ZWhpY2xlVGFibGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjlweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLmFkZERpdntcclxuICB3aWR0aDo1MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgcGFkZGluZy1yaWdodDogMzNweDtcclxuICBtYXJnaW4tdG9wOjE4cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonitorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monitor',
                templateUrl: './monitor.component.html',
                styleUrls: ['./monitor.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }, { type: _shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/map/replay/replay.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/map/replay/replay.component.ts ***!
  \***********************************************************/
/*! exports provided: ReplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayComponent", function() { return ReplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-baidu-map */ "./node_modules/angular2-baidu-map/__ivy_ngcc__/fesm2015/angular2-baidu-map.js");
/* harmony import */ var _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/userService/user.service */ "./src/app/shared/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/toastrService/toaster.service */ "./src/app/shared/toastrService/toaster.service.ts");
/* harmony import */ var _shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/mapService/map.service */ "./src/app/shared/mapService/map.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");














function ReplayComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvaslayer", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const marker_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", marker_r4.layerCanvas);
} }
function ReplayComponent_ng_container_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReplayComponent_ng_container_20_ng_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.vehicleNumber = $event; })("change", function ReplayComponent_ng_container_20_ng_container_1_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.radioChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r6.status == "stop" ? "ms-checkbox-wrap ms-checkbox-danger" : "ms-checkbox-wrap ms-checkbox-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6.VehicleNumber)("ngModel", ctx_r8.vehicleNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.VehicleNumber, " ");
} }
function ReplayComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReplayComponent_ng_container_20_ng_container_1_Template, 7, 5, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checkKey(ctx_r1.key, item_r6.VehicleNumber));
} }
function ReplayComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Result is ", ctx_r2.trip.length, " ");
} }
function ReplayComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.time);
} }
class ReplayComponent {
    constructor(userService, router, _formBuilder, toastr, mapService) {
        this.userService = userService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.mapService = mapService;
        //user
        this.user = '';
        //Map_Settings
        this.mapstatus = false;
        this.markers = [];
        this.title = 'angular5 Baidu-Map example';
        this.mapcenter = {
            lat: 39.915,
            lng: 116.404,
        };
        this.sight = 400;
        this.mapzoom = 17;
        this.foundedItem = [];
        //for Trip
        this.progress = 0;
        this.trip = [];
        this.start = false;
        this.curPoint = 0;
        this.routes = [];
        this.time = "";
    }
    ngOnInit() {
        this.user = this.userService.getToken()['userInfo'];
        //data
        this.date = this.getDateString(new Date());
        //map
        this.optionsMap = {
            centerAndZoom: {
                lat: this.mapcenter.lat,
                lng: this.mapcenter.lng,
                zoom: this.mapzoom,
            },
            enableKeyboard: true,
            enableScrollWheelZoom: true,
        };
        this.navOptionsMap = {
            anchor: angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ControlAnchor"].BMAP_ANCHOR_TOP_RIGHT,
            type: angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["NavigationControlType"].BMAP_NAVIGATION_CONTROL_ZOOM,
        };
    }
    //user
    getAll() {
        const vehicleInfo = [
            { VehicleNumber: 'qwer', status: 'stop' },
            { VehicleNumber: '123', status: 'start' },
        ];
        this.vehicleNumber = 123;
        this.foundedItem = vehicleInfo;
        // this.mapService.getVehicleInfo(this.user).subscribe(
        //   res => {
        //     this.foundedItem = res['result'];
        //     if (this.foundedItem.length > 0) {
        //       this.vehicleNumber = this.foundedItem[0].VehicleNumber;
        //       this.getTripInfo();
        //     }
        //   },
        //   err => {
        //     console.log(err);
        //   }
        // );
    }
    //for trip info
    getTripInfo() {
        this.refreshTrip();
        this.mapService.getTripInfo({
            VehicleNumber: this.vehicleNumber,
            TrackTime: new Date(this.date),
        }).subscribe(res => {
            this.trip = res['result'];
            this.setMap(this.trip);
        }, err => {
            console.log(err);
            this.trip = [];
        });
    }
    refreshTrip() {
        this.progress = 0;
        this.trip = [];
        this.start = false;
        this.curPoint = 0;
        this.routes = [];
        this.time = "";
    }
    //for Radious
    checkKey(key, string) {
        if (!key)
            return true;
        if (string.indexOf(key) != -1)
            return true;
        else
            return false;
    }
    radioChange() {
        console.log(this.vehicleNumber);
        if (this.mapstatus == false)
            return;
        this.getTripInfo();
    }
    //for movie
    tripSet() {
        this.progress = (100 / (this.trip.length - 1)) * this.curPoint;
        const t = new Date(this.trip[this.curPoint].track_time);
        this.time = '' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
        const newMarker = {
            layerCanvas: this.getCanvasLayer(this.curPoint, this.routes)
        };
        this.markers = [];
        this.markers.push(newMarker);
    }
    tripIntervals() {
        this.timeInterval = setInterval(() => {
            if (this.trip.length > (this.curPoint + 1)) {
                this.curPoint++;
                this.tripSet();
            }
            else {
                this.start = false;
                this.curPoint = 0;
                this.tripSet();
                clearInterval(this.timeInterval);
            }
        }, 1000);
    }
    startTrip() {
        if (this.mapstatus == false || this.trip.length == 0)
            return;
        if (this.start == false) {
            this.start = true;
            if (this.progress == 100) {
                this.progress = 0;
            }
            this.tripIntervals();
        }
    }
    pauseTrip() {
        if (this.mapstatus == false || this.trip.length == 0)
            return;
        if (this.start == true) {
            this.start = false;
            clearInterval(this.timeInterval);
        }
    }
    nextDate() {
        if (this.mapstatus == false)
            return;
        const dd = new Date(this.date);
        dd.setDate(dd.getDate() + 1);
        this.date = this.getDateString(new Date(dd));
        this.getTripInfo();
    }
    prevDate() {
        if (this.mapstatus == false)
            return;
        const dd = new Date(this.date);
        dd.setDate(dd.getDate() - 1);
        this.date = this.getDateString(dd);
        this.getTripInfo();
    }
    nextFrame() {
        if (this.mapstatus == false || this.start == false)
            return;
        if (this.trip.length > (this.curPoint + 1)) {
            clearInterval(this.timeInterval);
            this.curPoint++;
            this.tripSet();
            this.tripIntervals();
        }
    }
    prevFrame() {
        if (this.mapstatus == false || this.start == false)
            return;
        if (0 < this.curPoint) {
            clearInterval(this.timeInterval);
            this.curPoint--;
            this.tripSet();
            this.tripIntervals();
        }
    }
    datechange() {
        if (this.mapstatus == false || this.ValidateDate(this.date))
            return;
        this.getTripInfo();
    }
    getDateString(ss) {
        const d = new Date(ss);
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    }
    ValidateDate(testdate) {
        var date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        return date_regex.test(testdate);
    }
    //For Maps
    mapLoaded(e) {
        this.mapstatus = true;
        this.mapControl = e;
        this.getAll();
    }
    setAnimation(marker) {
        // marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
    }
    showWindow({ marker, map }) {
        map.openInfoWindow(new window.BMap.InfoWindow('地址：浦东南路360号', {
            offset: new window.BMap.Size(0, -30),
            title: '新上海国际大厦'
        }), marker.getPosition());
    }
    setMap(opt) {
        this.setZoomAndCenter(opt);
        this.setRoute(opt);
        const newMarker = {
            layerCanvas: this.getCanvasLayer(this.curPoint, this.routes)
        };
        this.markers = [];
        this.markers.push(newMarker);
    }
    //for canvas
    getCanvasLayer(cur, routes) {
        console.log(cur, routes);
        const layer = {
            update(map, canvas) {
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return;
                }
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                if (routes.length == 0)
                    return;
                //set
                const radiusStart = 10;
                //routes
                if (routes.length > 1) {
                    let s = routes[0];
                    for (let i = 1; i < routes.length; i++) {
                        let e = routes[i];
                        let ps = map.pointToPixel(new window.BMap.Point(s.y, s.x));
                        let pe = map.pointToPixel(new window.BMap.Point(e.y, e.x));
                        ctx.beginPath();
                        ctx.save();
                        ctx.lineWidth = 3;
                        if (i % 2 == 0) {
                            ctx.strokeStyle = "DarkGray";
                        }
                        else {
                            ctx.strokeStyle = "yellow";
                        }
                        ctx.moveTo(ps.x, ps.y);
                        ctx.lineTo(pe.x, pe.y);
                        ctx.stroke();
                        ctx.restore();
                        s = routes[i];
                    }
                }
                //cur
                let dataCur = new window.BMap.Point(routes[cur].y, routes[cur].x);
                let pixelCur = map.pointToPixel(dataCur);
                ctx.beginPath();
                ctx.save();
                ctx.fillStyle = "black";
                ctx.arc(pixelCur.x, pixelCur.y, radiusStart, 0, 2 * Math.PI);
                ctx.fill();
                ctx.restore();
            }
        };
        return layer;
    }
    setRoute(opt) {
        if (opt.length == 0)
            return;
        const CZ = this.getCenter(opt);
        this.startPoint = {
            x: CZ.min.lat,
            y: CZ.min.lng
        };
        this.endPoint = {
            x: CZ.max.lat,
            y: CZ.max.lng
        };
        this.routes = [];
        for (let i = 0; i < opt.length; i++) {
            this.routes.push({
                x: opt[i].lat,
                y: opt[i].lng
            });
        }
    }
    setZoomAndCenter(opt) {
        const CZ = this.getCenter(opt);
        const center = {
            lat: CZ.lat,
            lng: CZ.lng,
            equals: Boolean,
        };
        const centerCritical = {
            lat: this.mapControl.getCenter().lat,
            lng: this.mapControl.getCenter().lng,
            equals: Boolean,
        };
        const x = (this.mapControl.pointToPixel(centerCritical).x - this.mapControl.pointToPixel(center).x);
        const y = (this.mapControl.pointToPixel(centerCritical).y - this.mapControl.pointToPixel(center).y);
        const zoom = CZ.zoom;
        this.mapControl.panBy(x, y, { noAnimation: false });
        this.mapControl.setZoom(zoom);
        this.mapcenter = { lat: CZ.lat, lng: CZ.lng };
    }
    getCenter(opt) {
        if (opt.length == 0) {
            return { lat: 39, lng: 111, zoom: 10 };
        }
        if (opt.length == 1) {
            return { lat: opt[0].lat, lng: opt[0].lng, zoom: 15 };
        }
        let minLat, maxLat, minLng, maxLng, avgLat, avgLng;
        minLat = Number(opt[0].lat);
        maxLat = Number(opt[0].lat);
        minLng = Number(opt[0].lng);
        maxLng = Number(opt[0].lng);
        for (let i = 0; i < opt.length; i++) {
            if (opt[i].lat < minLat)
                minLat = Number(opt[i].lat);
            if (opt[i].lat > maxLat)
                maxLat = Number(opt[i].lat);
            if (opt[i].lng < minLng)
                minLng = Number(opt[i].lng);
            if (opt[i].lng > maxLng)
                maxLng = Number(opt[i].lng);
        }
        avgLat = (maxLat + minLat) / 2;
        avgLng = (maxLng + minLng) / 2;
        const min = {
            lat: minLat,
            lng: minLng,
            equals: Boolean,
        };
        const max = {
            lat: maxLat,
            lng: maxLng,
            equals: Boolean,
        };
        const width = Math.abs(this.mapControl.pointToPixel(min).x - this.mapControl.pointToPixel(max).x);
        const height = Math.abs(this.mapControl.pointToPixel(min).y - this.mapControl.pointToPixel(max).y);
        const critera = Math.max(width, height);
        const zoom = this.mapControl.getZoom() - Math.log2(critera / this.sight);
        return { lat: avgLat, lng: avgLng, zoom: zoom, min: min, max: max };
    }
    changePointToPixel(lat, lng) {
        const center = {
            lat: lat,
            lng: lng,
            equals: Boolean,
        };
        const x = this.mapControl.pointToPixel(center).x;
        const y = this.mapControl.pointToPixel(center).y;
        return { x: x, y: y };
    }
}
ReplayComponent.ɵfac = function ReplayComponent_Factory(t) { return new (t || ReplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"])); };
ReplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReplayComponent, selectors: [["app-replay"]], decls: 49, vars: 11, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "mapDiv"], [3, "options", "loaded"], [4, "ngFor", "ngForOf"], [1, "leftsideDiv"], [1, "ms-panel-body"], [1, "ms-list", "d-flex"], [1, "ms-form-group", "my-0", "mb-0", "has-icon", "fs-14"], ["type", "search", "name", "search", "placeholder", "Search here...", 1, "ms-form-input", "searchInput", 3, "ngModel", "ngModelChange"], [1, "flaticon-search", "text-disabled"], [1, "col-md-12", "listDiv"], [1, "ms-list", "ms-list-display"], [1, "replayDIV"], [1, "dateDIV"], [1, "input-group"], ["type", "text", "placeholder", "MM/DD/YYYY", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], [1, "progressDIV"], [1, "progress", "progress-tiny"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger"], [1, "timeDIV"], [4, "ngIf"], [1, "row", "controlDIV"], [1, "prevDate"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-primary", 3, "click"], [1, "fa", "fa-step-backward"], [1, "prevRoute"], [1, "fa", "fa-backward"], [1, "play"], [1, "nextRoute"], [1, "fa", "fa-forward"], [1, "nextDate"], [1, "fa", "fa-step-forward"], [3, "options"], ["type", "radio", "name", "radioExample", 3, "value", "ngModel", "ngModelChange", "change"], [1, "ms-checkbox-check"], [1, "invalid-feedback", 2, "display", "block"]], template: function ReplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "baidu-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loaded", function ReplayComponent_Template_baidu_map_loaded_7_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReplayComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReplayComponent_Template_input_ngModelChange_14_listener($event) { return ctx.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReplayComponent_ng_container_20_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReplayComponent_Template_input_ngModelChange_24_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReplayComponent_div_25_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReplayComponent_ng_container_30_Template, 3, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplayComponent_Template_button_click_33_listener() { return ctx.prevDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplayComponent_Template_button_click_36_listener() { return ctx.prevFrame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplayComponent_Template_button_click_39_listener() { return ctx.start == false ? ctx.startTrip() : ctx.pauseTrip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplayComponent_Template_button_click_42_listener() { return ctx.nextFrame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplayComponent_Template_button_click_45_listener() { return ctx.nextDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.optionsMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foundedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ValidateDate(ctx.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progress + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trip.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.start == false ? "fa fa-play" : "fa fa-pause");
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_7__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__["TopNavbarComponent"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_10__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_11__["QuickBarComponent"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ɵm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]], styles: [".searchInput[_ngcontent-%COMP%]{   \r\n    border: solid 1px sandybrown;\r\n}\r\nbaidu-map[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n.baidu-map-instance[_ngcontent-%COMP%]{\r\n  height: 700px !important;\r\n}\r\n.mapDiv[_ngcontent-%COMP%]{\r\n  float: left;\r\n  width: calc(100% - 300px);\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: table-cell;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  background-color: cornsilk;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n.vehicleIntro[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 100px;\r\n  border: solid;\r\n  position: absolute;\r\n  z-index: 1000;\r\n}\r\n.leftsideDiv[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  float: left;\r\n  overflow: auto;\r\n  padding: 0px;\r\n  border-left: 2px solid rgb(221, 221, 221);\r\n  \r\n}\r\n.introductionStatus[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: -71px;\r\n  right: 5px;\r\n  float: right;\r\n  background-color: white;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.vehicleTable[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 29px;\r\n  left: 30px;\r\n  z-index: 1000;\r\n}\r\n.addDiv[_ngcontent-%COMP%]{\r\n  width:50%;\r\n  float: right;\r\n  text-align: right;\r\n  vertical-align: bottom;\r\n  padding-right: 33px;\r\n  margin-top:18px;\r\n}\r\n.listDiv[_ngcontent-%COMP%]{\r\n  height: 300px;\r\n}\r\n.replayDIV[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n }\r\n.timeDIV[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n }\r\n.controlDIV[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  width: 100%;\r\n }\r\n.prevDate[_ngcontent-%COMP%]{\r\n   width: 20%;\r\n   padding: 3px 5px;\r\n }\r\n.prevRoute[_ngcontent-%COMP%]{\r\n   width: 20%;\r\n   padding: 3px 5px;\r\n }\r\n.play[_ngcontent-%COMP%]{\r\n   width: 20%;\r\n   padding: 3px 5px;\r\n }\r\n.nextRoute[_ngcontent-%COMP%]{\r\n   width: 20%;\r\n   padding: 3px 5px;\r\n }\r\n.nextDate[_ngcontent-%COMP%]{\r\n   width: 20%;\r\n   padding: 3px 5px;\r\n }\r\n.progress[_ngcontent-%COMP%]{\r\n  background-color: burlywood;\r\n}\r\n.labelMiddle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\nposition: relative;\r\ntop: 24px;\r\nfont-size: 12px;\r\nleft: 10px;\r\nz-index: 1000;\r\nfont-weight: 800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvcmVwbGF5L3JlcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0NBQ1o7QUFDQTtHQUNFLGtCQUFrQjtDQUNwQjtBQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FDWjtBQUNBO0dBQ0UsVUFBVTtHQUNWLGdCQUFnQjtDQUNsQjtBQUNBO0dBQ0UsVUFBVTtHQUNWLGdCQUFnQjtDQUNsQjtBQUNBO0dBQ0UsVUFBVTtHQUNWLGdCQUFnQjtDQUNsQjtBQUNBO0dBQ0UsVUFBVTtHQUNWLGdCQUFnQjtDQUNsQjtBQUNBO0dBQ0UsVUFBVTtHQUNWLGdCQUFnQjtDQUNsQjtBQUNBO0VBQ0MsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxlQUFlO0FBQ2YsVUFBVTtBQUNWLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9yZXBsYXkvcmVwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoSW5wdXR7ICAgXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBzYW5keWJyb3duO1xyXG59XHJcbmJhaWR1LW1hcHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5iYWlkdS1tYXAtaW5zdGFuY2V7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXBEaXZ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnZlaGljbGVJbnRyb3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IHNvbGlkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5sZWZ0c2lkZURpdntcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIC8qIGhlaWdodDogNjkwcHg7ICovXHJcbn1cclxuLmludHJvZHVjdGlvblN0YXR1cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTcxcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi52ZWhpY2xlVGFibGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjlweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLmFkZERpdntcclxuICB3aWR0aDo1MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgcGFkZGluZy1yaWdodDogMzNweDtcclxuICBtYXJnaW4tdG9wOjE4cHg7XHJcbn1cclxuLmxpc3REaXZ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4ucmVwbGF5RElWe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gLnRpbWVESVZ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIC5jb250cm9sRElWe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAucHJldkRhdGV7XHJcbiAgIHdpZHRoOiAyMCU7XHJcbiAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiB9XHJcbiAucHJldlJvdXRle1xyXG4gICB3aWR0aDogMjAlO1xyXG4gICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gfVxyXG4gLnBsYXl7XHJcbiAgIHdpZHRoOiAyMCU7XHJcbiAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiB9XHJcbiAubmV4dFJvdXRle1xyXG4gICB3aWR0aDogMjAlO1xyXG4gICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gfVxyXG4gLm5leHREYXRle1xyXG4gICB3aWR0aDogMjAlO1xyXG4gICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gfVxyXG4gLnByb2dyZXNze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxufVxyXG4ubGFiZWxNaWRkbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAyNHB4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxlZnQ6IDEwcHg7XHJcbnotaW5kZXg6IDEwMDA7XHJcbmZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-replay',
                templateUrl: './replay.component.html',
                styleUrls: ['./replay.component.css']
            }]
    }], function () { return [{ type: _shared_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _shared_toastrService_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }, { type: _shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/map/report/report.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/map/report/report.component.ts ***!
  \***********************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");







class ReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 25, vars: 0, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "col-md-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "pl-0"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "material-icons"], [1, "ms-panel"], [1, "ms-panel-header"], [1, "ms-panel-body"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Report List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " no data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_4__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_5__["QuickBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/map/routing/routing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/map/routing/routing.component.ts ***!
  \*************************************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-baidu-map */ "./node_modules/angular2-baidu-map/__ivy_ngcc__/fesm2015/angular2-baidu-map.js");
/* harmony import */ var _shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/mapService/map.service */ "./src/app/shared/mapService/map.service.ts");
/* harmony import */ var _layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/side-navbar/side-navbar.component */ "./src/app/components/layouts/side-navbar/side-navbar.component.ts");
/* harmony import */ var _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/top-navbar/top-navbar.component */ "./src/app/components/layouts/top-navbar/top-navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/footbar/footbar.component */ "./src/app/components/layouts/footbar/footbar.component.ts");
/* harmony import */ var _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/quick-bar/quick-bar.component */ "./src/app/components/layouts/quick-bar/quick-bar.component.ts");











function RoutingComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please valid key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoutingComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function RoutingComponent_ng_container_19_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please valid key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoutingComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoutingComponent_ng_container_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.plusWay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoutingComponent_ng_container_19_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const way_r7 = ctx.$implicit; return way_r7.query = $event; })("keyup", function RoutingComponent_ng_container_19_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r8 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.getLocationlist("way", i_r8); })("change", function RoutingComponent_ng_container_19_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r8 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.confirmLocation("way", i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoutingComponent_ng_container_19_div_7_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const way_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.enablePlus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", way_r7.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.enableWay[i_r8]);
} }
function RoutingComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.name);
} }
function RoutingComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please valid key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoutingComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.name);
} }
class RoutingComponent {
    constructor(mapService) {
        this.mapService = mapService;
        //Map_Settings
        this.region = 'the whole country';
        this.enableMap = false;
        this.markerOption = {
            icon: {
                imageUrl: `assets/images/markericon.png`,
                size: {
                    height: 25,
                    width: 25
                },
                imageSize: {
                    height: 25,
                    width: 25
                }
            }
        };
        //SearchBar_Settings
        this.searchResultFrom = [];
        this.searchResultWay = [];
        this.searchResultTo = [];
        this.numberOfWay = [];
        this.enablePlus = true;
        this.enableCaculate = false;
        this.enableFrom = false;
        this.enableWay = [];
        this.enableTo = false;
        this.queryFrom = {
            query: '',
            region: '',
        };
        this.queryWay = [];
        this.queryTo = {
            query: '',
            region: '',
        };
        this.routeFrom = {
            lat: '',
            lng: '',
        };
        this.routeWay = [];
        this.routeTo = {
            lat: '',
            lng: '',
        };
        this.queryFrom.region = this.region;
        this.queryTo.region = this.region;
        this.optionsMap = {
            centerAndZoom: {
                lat: 39.912695,
                lng: 116.502814,
                zoom: 10,
            },
            enableKeyboard: true,
            enableScrollWheelZoom: true,
        };
        this.markers = [];
        this.navOptionsMap = {
            anchor: angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ControlAnchor"].BMAP_ANCHOR_TOP_RIGHT,
            type: angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["NavigationControlType"].BMAP_NAVIGATION_CONTROL_ZOOM,
        };
    }
    ngOnInit() {
    }
    //For searchResult
    plusWay() {
        this.queryWay.push({
            query: '',
            region: this.region
        });
        this.enableWay.push(false);
        if (this.queryWay.length > 2)
            this.enablePlus = false;
        this.enableCaculate = this.checkStatus();
    }
    minusWay(id) {
        this.queryWay.splice(id, 1);
        this.routeWay.splice(id, 1);
        this.enableWay.splice(id, 1);
        this.enablePlus = true;
    }
    caculateWay() {
        console.log([this.routeFrom, this.routeWay, this.routeTo]);
        const query = {
            origin: this.routeFrom,
            waypoints: this.routeWay,
            destination: this.routeTo,
        };
        this.mapService.routeSearchTruck(query).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
    getLocationlist(where, id) {
        let query;
        switch (where) {
            case ('from'):
                query = this.queryFrom;
                break;
            case ('way'):
                query = this.queryWay[id];
                break;
            case ('to'):
                query = this.queryTo;
                break;
        }
        this.mapService.locationSearch(query).subscribe(res => {
            if (res["results"]) {
                const result = this.filterLocation(res["results"]);
                switch (where) {
                    case ('from'):
                        this.searchResultFrom = result;
                        break;
                    case ('way'):
                        this.searchResultWay = result;
                        break;
                    case ('to'):
                        this.searchResultTo = result;
                        break;
                }
            }
        }, err => {
            console.log(err);
        });
    }
    confirmLocation(where, id) {
        let result = [];
        switch (where) {
            case ('from'):
                result = this.getMathLocation(this.queryFrom.query, this.searchResultFrom);
                if (result.length == 0) {
                    //for enableFromFalse
                    this.enableFrom = false;
                }
                else {
                    this.routeFrom = {
                        lat: result[0].location.lat,
                        lng: result[0].location.lng,
                    };
                    //for enableFrom
                    this.enableFrom = true;
                    this.enableCaculate = this.checkStatus();
                }
                break;
            case ('way'):
                result = this.getMathLocation(this.queryWay[id].query, this.searchResultWay);
                if (result.length == 0) {
                    //for enableWay[id]False
                    this.enableWay[id] = false;
                }
                else {
                    this.routeWay.push({
                        lat: result[0].location.lat,
                        lng: result[0].location.lng,
                    });
                    //for enableWay[id]True
                    this.enableWay[id] = true;
                    this.enableCaculate = this.checkStatus();
                }
                break;
            case ('to'):
                result = this.getMathLocation(this.queryTo.query, this.searchResultTo);
                if (result.length == 0) {
                    this.enableTo = false;
                }
                else {
                    this.routeTo = {
                        lat: result[0].location.lat,
                        lng: result[0].location.lng,
                    };
                    this.enableTo = true;
                    this.enableCaculate = this.checkStatus();
                }
                break;
        }
    }
    filterLocation(arr) {
        let loc = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]['location'] !== undefined)
                loc.push(arr[i]);
        }
        return loc;
    }
    getMathLocation(key, arr) {
        let loc = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]['name'] == key)
                loc.push(arr[i]);
        }
        return loc;
    }
    checkStatus() {
        if (this.enableFrom && this.enableTo) {
            for (let i = 0; i < this.enableWay.length; i++) {
                if (!this.enableWay[i])
                    return false;
            }
            return true;
        }
        else
            return false;
    }
    //For selection table
    //For Maps
    mapLoaded(e) {
        this.enableMap = true;
        this.mapControl = e;
    }
    setMap(opt) {
        const newMarker = {
            options: this.markerOption,
            point: {
                lat: opt.location.lat,
                lng: opt.location.lng,
            }
        };
    }
    setZoomAndCenter(opt) {
        if (this.markers.length == 0)
            return;
        const center = {
            lat: opt.location.lat,
            lng: opt.location.lng,
            equals: Boolean,
        };
        const x = this.mapControl.pointToPixel(center).x / this.optionsMap.centerAndZoom.zoom;
        const y = this.mapControl.pointToPixel(center).y / this.optionsMap.centerAndZoom.zoom;
    }
}
RoutingComponent.ɵfac = function RoutingComponent_Factory(t) { return new (t || RoutingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"])); };
RoutingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoutingComponent, selectors: [["app-routing"]], decls: 33, vars: 11, consts: [[1, "ms-body", "ms-aside-left-open", "ms-primary-theme", "ms-has-quickbar"], [1, "body-content"], [1, "ms-content-wrapper"], [1, "row"], [1, "mapDiv"], [3, "options", "loaded"], [1, "leftsideDiv"], [1, "ms-panel-body"], [1, "div1"], ["type", "button", 1, "ms-btn-icon", "btn-pill", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-plus"], [1, "div2"], ["list", "id-From", "placeholder", "From where?", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup", "change"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["id", "id-From"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "id-way"], [1, "fa", "fa-search"], ["list", "id-To", "placeholder", "Target place?", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup", "change"], ["id", "id-To"], [1, "invalid-feedback", 2, "display", "block"], [3, "value"], [1, "fa", "fa-minus"], ["list", "id-way", "placeholder", "middle ways?", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup", "change"]], template: function RoutingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "baidu-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loaded", function RoutingComponent_Template_baidu_map_loaded_7_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoutingComponent_Template_button_click_12_listener() { return ctx.plusWay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoutingComponent_Template_input_ngModelChange_15_listener($event) { return ctx.queryFrom.query = $event; })("keyup", function RoutingComponent_Template_input_keyup_15_listener() { return ctx.getLocationlist("from", 0); })("change", function RoutingComponent_Template_input_change_15_listener() { return ctx.confirmLocation("from", 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoutingComponent_div_16_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "datalist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoutingComponent_option_18_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoutingComponent_ng_container_19_Template, 8, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "datalist", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoutingComponent_option_21_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoutingComponent_Template_button_click_24_listener() { return ctx.caculateWay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoutingComponent_Template_input_ngModelChange_27_listener($event) { return ctx.queryTo.query = $event; })("keyup", function RoutingComponent_Template_input_keyup_27_listener() { return ctx.getLocationlist("to", 0); })("change", function RoutingComponent_Template_input_change_27_listener() { return ctx.confirmLocation("to", 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RoutingComponent_div_28_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "datalist", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RoutingComponent_option_30_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-footbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-quick-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.optionsMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enablePlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.queryFrom.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enableFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResultFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.queryWay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResultWay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enableCaculate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.queryTo.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enableTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResultTo);
    } }, directives: [_layouts_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_3__["SideNavbarComponent"], _layouts_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_4__["TopNavbarComponent"], angular2_baidu_map__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _layouts_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_7__["FootbarComponent"], _layouts_quick_bar_quick_bar_component__WEBPACK_IMPORTED_MODULE_8__["QuickBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".div1[_ngcontent-%COMP%]{\r\n    width:20%;\r\n}\r\n.div2[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\nbaidu-map[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 600px;\r\n  }\r\n.baidu-map-instance[_ngcontent-%COMP%]{\r\n    height: 700px !important;\r\n  }\r\n.mapDiv[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: calc(100% - 300px);\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: table-cell;\r\n  }\r\ntable[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    background-color: cornsilk;\r\n  }\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n.vehicleIntro[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n    border: solid;\r\n    position: absolute;\r\n    z-index: 1000;\r\n  }\r\n.leftsideDiv[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    float: left;\r\n    overflow: auto;\r\n    padding: 0px;\r\n    border-left: 2px solid rgb(221, 221, 221);\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2MXtcclxuICAgIHdpZHRoOjIwJTtcclxufVxyXG4uZGl2MntcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLnJvd3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmJhaWR1LW1hcHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH1cclxuICAuYmFpZHUtbWFwLWluc3RhbmNle1xyXG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWFwRGl2e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC52ZWhpY2xlSW50cm97XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG4gIC5sZWZ0c2lkZURpdntcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICAgIC8qIGhlaWdodDogNjkwcHg7ICovXHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-routing',
                templateUrl: './routing.component.html',
                styleUrls: ['./routing.component.css']
            }]
    }], function () { return [{ type: _shared_mapService_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/mapService/map.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/mapService/map.service.ts ***!
  \**************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MapService {
    constructor(http) {
        this.http = http;
        this.baiduBaseUrlLocation = "/baidu/place/search?";
        this.baiduBaseUrlRouteTruck = "/baidu/route/truck?";
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        this.ak = 'z45YihwOQtgSEbUBnlx2gmVXCaGW7RPs';
    }
    //getVehiclInfo
    getVehicleInfo(data) {
        return this.http.post("/api/vehicle/get", data);
    }
    addVehicleInfo(data) {
        return this.http.post("/api/vehicle/add", data);
    }
    editVehicleInfo(data) {
        return this.http.post("/api/vehicle/edit", data);
    }
    delVehicleInfo(data) {
        return this.http.post("/api/vehicle/del", data);
    }
    //getTrackInfo
    getTrackInfoLast(data) {
        return this.http.post("/api/track/getTrackInfoLast", data);
    }
    //getTrackInfo
    getReportInfoAll(data) {
        return this.http.post("/api/report/getAll", data);
    }
    getTripInfo(data) {
        return this.http.post("/api/track/getTripInfo", data);
    }
    //Location Search
    locationSearch(data) {
        return this.http.get(this.baiduBaseUrlLocation
            + "query=" + data.query + "&"
            + "region=" + data.region + "&"
            + "ak=" + this.ak + "&output=json");
    }
    //Route Search
    routeSearchTruck(data) {
        const origin = "origin=" + data.origin.lat + "," + data.origin.lng;
        const destination = "&destination=" + data.destination.lat + "," + data.destination.lng;
        let waypoints = "";
        for (let i = 0; i < data.waypoints.length; i++) {
            if (i == 0)
                waypoints += "&waypoints=" + data.waypoints[i].lat + "," + data.waypoints[i].lng;
            else
                waypoints += "|" + data.waypoints[i].lat + "," + data.waypoints[i].lng;
        }
        const query = this.baiduBaseUrlRouteTruck + origin + waypoints + destination + "&ak=" + this.ak + "&output=json";
        return this.http.get(query);
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-map-map-module-es2015.js.map