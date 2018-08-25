// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = {

   formatMoney: function formatMoney(cent) {
      // return cent.parseInt(cent)/100;
      return cent / 100;
   }

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\NavigationBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-67dbf7ff"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(75)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\HomePage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6c6621c4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(76)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\ClassifyPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\TastePage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(78)
)

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(80)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\ShoppingCartPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-565615e7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(83)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\PersonPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32527cd8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global Vue*/

/* weex initialized here, please do not move this line */
var router = __webpack_require__(9);
var App = __webpack_require__(85);
// const mixins = require('@/mixins');

//全局混入http请求
Vue.mixin(_index2.default);

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var stream = weex.requireModule('stream');

var baseUrl1 = "https://shopapi.io.mi.com/";
var baseUrl2 = "http://api.m.mi.com/";
exports.default = {
    methods: {
        post: function post(url, params, callback) {
            return stream.fetch({
                method: "POST",
                type: "json",
                body: params,
                url: baseUrl1 + url,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }, callback);
        },
        recommendPost: function recommendPost(url, callback) {
            return stream.fetch({
                method: "POST",
                type: "json",
                url: baseUrl1 + url,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 8.0.0; MI 6 MIUI/8.8.16) MIOTWeex/1.2.1 (YouPin;2.2.3;DB9E4448612962C4B87B5F5B8E0EBC6C;0.18.0;A;53A0441AA8DCF13BB34917FAC279254E1563CB7A;MI_APP_STORE) MIOTStore/20180406 (YouPin;2.2.3;DB9E4448612962C4B87B5F5B8E0EBC6C;;A;53A0441AA8DCF13BB34917FAC279254E1563CB7A;MI_APP_STORE)"
                }
            }, callback);
        },
        phonePost: function phonePost(url, params, callback) {
            return stream.fetch({
                method: "POST",
                type: "json",
                body: params,
                url: baseUrl2 + url,
                headers: {
                    "Mishop-Client-Id": "180100041079"
                }
            }, callback);
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(10);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _MainPage = __webpack_require__(11);

var _MainPage2 = _interopRequireDefault(_MainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global Vue*/
Vue.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
    routes: [{
        path: '/',
        name: 'MainPage',
        component: _MainPage2.default
    }]
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(84)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\MainPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-310585f8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "app-wrapper": {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "right": "0",
    "left": "0",
    "flexDirection": "column-reverse"
  },
  "r-box_container": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "100"
  },
  "r-box": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _NavigationBar = __webpack_require__(1);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _HomePage = __webpack_require__(2);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _ClassifyPage = __webpack_require__(3);

var _ClassifyPage2 = _interopRequireDefault(_ClassifyPage);

var _TastePage = __webpack_require__(4);

var _TastePage2 = _interopRequireDefault(_TastePage);

var _ShoppingCartPage = __webpack_require__(5);

var _ShoppingCartPage2 = _interopRequireDefault(_ShoppingCartPage);

var _PersonPage = __webpack_require__(6);

var _PersonPage2 = _interopRequireDefault(_PersonPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: 'MainPage',
    data: function data() {
        return {
            selectIndex: 0
        };
    },
    methods: {
        getSelectIndex: function getSelectIndex(index) {
            this.selectIndex = index;
        }
    },
    components: {
        "navigation_bar": _NavigationBar2.default,
        "home_page": _HomePage2.default,
        "classify_page": _ClassifyPage2.default,
        "taste_page": _TastePage2.default,
        "shopping_cart_page": _ShoppingCartPage2.default,
        "person_page": _PersonPage2.default
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "100",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#fafafa"
  },
  "bar-item": {
    "flex": 1
  },
  "bar-active": {
    "color": "#845F3F"
  },
  "bar-noactive": {
    "color": "#9B7E58"
  },
  "bar-ic": {
    "alignSelf": "center",
    "marginTop": "10",
    "width": "48",
    "height": "48"
  },
  "bar-txt": {
    "marginTop": "5",
    "textAlign": "center",
    "fontSize": "24"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "navigationBar",
    data: function data() {
        return {
            selectPosition: 0,
            homeUrl: "src/assets/images/tab_01_0.png",
            classifyUrl: "src/assets/images/tab_02_0.png",
            tasteUrl: "src/assets/images/tab_03_0.png",
            shoppingCartUrl: "src/assets/images/tab_04_0.png",
            personUrl: "src/assets/images/tab_05_0.png"
        };
    },
    methods: {
        isActive: function isActive(flag) {
            return this.selectPosition === flag ? 'bar-active' : 'bar-noactive';
        },
        tabTo: function tabTo(key) {
            if (this.selectPosition === key) {
                return;
            }
            this.selectPosition = key;
            this.homeUrl = 0 === this.selectPosition ? "http://www.lidiwo.com/tab_01_1.png" : "http://www.lidiwo.com/tab_01_0.png";
            this.classifyUrl = 1 === this.selectPosition ? "http://www.lidiwo.com/tab_02_1.png" : "http://www.lidiwo.com/tab_02_0.png";
            this.tasteUrl = 2 === this.selectPosition ? "http://www.lidiwo.com/tab_03_1.png" : "http://www.lidiwo.com/tab_03_0.png";
            this.shoppingCartUrl = 3 === this.selectPosition ? "http://www.lidiwo.com/tab_04_1.png" : "http://www.lidiwo.com/tab_04_0.png";
            this.personUrl = 4 === this.selectPosition ? "http://www.lidiwo.com/tab_05_1.png" : "http://www.lidiwo.com/tab_05_0.png";
            this.$emit('selectIndex', this.selectPosition);
            // this.$router.push('/' + key);
        }
    },
    created: function created() {
        this.homeUrl = 0 === this.selectPosition ? "http://www.lidiwo.com/tab_01_1.png" : "http://www.lidiwo.com/tab_01_0.png";
        this.classifyUrl = 1 === this.selectPosition ? "http://www.lidiwo.com/tab_02_1.png" : "http://www.lidiwo.com/tab_02_0.png";
        this.tasteUrl = 2 === this.selectPosition ? "http://www.lidiwo.com/tab_03_1.png" : "http://www.lidiwo.com/tab_03_0.png";
        this.shoppingCartUrl = 3 === this.selectPosition ? "http://www.lidiwo.com/tab_04_1.png" : "http://www.lidiwo.com/tab_04_0.png";
        this.personUrl = 4 === this.selectPosition ? "http://www.lidiwo.com/tab_05_1.png" : "http://www.lidiwo.com/tab_05_0.png";
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo(0)
      }
    }
  }, [_c('image', {
    staticClass: ["bar-ic"],
    attrs: {
      "src": _vm.homeUrl
    }
  }), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive(0)]
  }, [_vm._v("首页")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo(1)
      }
    }
  }, [_c('image', {
    staticClass: ["bar-ic"],
    attrs: {
      "src": _vm.classifyUrl
    }
  }), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive(1)]
  }, [_vm._v("分类")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo(2)
      }
    }
  }, [_c('image', {
    staticClass: ["bar-ic"],
    attrs: {
      "src": _vm.tasteUrl
    }
  }), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive(2)]
  }, [_vm._v("品味")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo(3)
      }
    }
  }, [_c('image', {
    staticClass: ["bar-ic"],
    attrs: {
      "src": _vm.shoppingCartUrl
    }
  }), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive(3)]
  }, [_vm._v("购物车")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo(4)
      }
    }
  }, [_c('image', {
    staticClass: ["bar-ic"],
    attrs: {
      "src": _vm.personUrl
    }
  }), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive(4)]
  }, [_vm._v("个人")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column",
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "right": "0",
    "left": "0"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HomeTitle = __webpack_require__(19);

var _HomeTitle2 = _interopRequireDefault(_HomeTitle);

var _HomeTabLayout = __webpack_require__(23);

var _HomeTabLayout2 = _interopRequireDefault(_HomeTabLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
    name: "HomePgae",
    data: function data() {
        return {};
    },
    components: {
        "home_title": _HomeTitle2.default,
        "home_tab_layout": _HomeTabLayout2.default
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\HomeTitle.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8315434e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "100",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF"
  },
  "title_logo": {
    "width": "70",
    "height": "70",
    "marginLeft": "20",
    "marginTop": "15",
    "marginRight": "20"
  },
  "title_search": {
    "marginTop": "15",
    "textAlign": "center",
    "flex": 1,
    "height": "70",
    "backgroundColor": "#F4F4F4",
    "borderRadius": "8",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "title_search_icon": {
    "marginTop": "10",
    "width": "50",
    "height": "50",
    "marginLeft": "20"
  },
  "title_search_text": {
    "color": "#CCCCCC",
    "flex": 1,
    "marginLeft": "15",
    "fontSize": "32",
    "lineHeight": "70"
  },
  "title_search_scan": {
    "marginTop": "10",
    "width": "50",
    "height": "50",
    "marginRight": "20"
  },
  "title_notice": {
    "width": "50",
    "height": "50",
    "marginLeft": "20",
    "marginRight": "20",
    "marginTop": "25"
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "HomeTitle"
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', [_c('image', {
    staticClass: ["title_logo"],
    attrs: {
      "src": "http://www.lidiwo.com/logo.png"
    }
  })]), _c('div', {
    staticClass: ["title_search"]
  }, [_c('image', {
    staticClass: ["title_search_icon"],
    attrs: {
      "src": "http://www.lidiwo.com/icon_search.png"
    }
  }), _c('text', {
    staticClass: ["title_search_text"]
  }, [_vm._v("云米超级品牌日")]), _c('image', {
    staticClass: ["title_search_scan"],
    attrs: {
      "src": "http://www.lidiwo.com/icon_scan.png"
    }
  })]), _c('div', [_c('image', {
    staticClass: ["title_notice"],
    attrs: {
      "src": "http://www.lidiwo.com/main_title_notice.png"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\HomeTabLayout.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1b318720"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flexDirection": "column",
    "position": "absolute",
    "marginTop": "100",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "top": "0"
  },
  "wrapper": {
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "position": "absolute",
    "left": 0,
    "right": 0,
    "height": "80",
    "borderBottomWidth": "2",
    "borderBottomColor": "#E6E6E6"
  },
  "scroller": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "marginRight": "80"
  },
  "tb_tag": {
    "textAlign": "center",
    "paddingTop": "15",
    "width": "140",
    "fontSize": "30"
  },
  "tb_tag_select": {
    "color": "#997E66"
  },
  "tb_tag_unselect": {
    "color": "#666666"
  },
  "@TRANSITION": {
    "tb_tag_line": {
      "property": "transform"
    }
  },
  "tb_tag_line": {
    "transitionProperty": "transform",
    "position": "absolute",
    "bottom": "0",
    "left": "0",
    "width": "140"
  },
  "select_line": {
    "width": "110",
    "marginLeft": "15",
    "height": "8",
    "backgroundColor": "#997E66"
  },
  "tb_dropdown": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "width": "80",
    "height": "78",
    "backgroundColor": "#FFFFFF"
  },
  "tb_dropdown_ico": {
    "position": "absolute",
    "top": "20",
    "right": "20",
    "width": "40",
    "height": "40"
  },
  "slider": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "marginTop": "80"
  },
  "web_root": {
    "backgroundColor": "#F4F4F4",
    "position": "absolute",
    "top": "0",
    "right": "0",
    "left": "0",
    "bottom": "0"
  },
  "web_content": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RecommendPage = __webpack_require__(26);

var _RecommendPage2 = _interopRequireDefault(_RecommendPage);

var _CrowdPage = __webpack_require__(66);

var _CrowdPage2 = _interopRequireDefault(_CrowdPage);

var _BrandPage = __webpack_require__(70);

var _BrandPage2 = _interopRequireDefault(_BrandPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var dom = weex.requireModule('dom');

var recommend = [{ name: "推荐" }];
var other = [{ name: "小米众筹" }, { name: "品牌" }];

exports.default = {
    props: ["tabs"],
    name: "HomeTabLayout",
    data: function data() {
        return {
            tabTags: [],
            selectIndex: 0,
            tbTagLineStyle: {
                transform: ""
            },
            lineOffset: 0,
            loadFinish: false //标记是否已经成功加载数据一次
        };
    },
    components: {
        "recommend_page": _RecommendPage2.default,
        "crowd_page": _CrowdPage2.default,
        "brand_page": _BrandPage2.default
    },

    methods: {
        click: function click(index, event) {
            if (this.selectIndex === index) {
                return;
            }
            this.selectIndex = index;
            var el = event.currentTarget;
            dom.scrollToElement(el, {});
            this.tbTagLineStyle.transform = "translateX(" + el.style.width * index + "px)";
        },
        onSliderChange: function onSliderChange(event) {
            this.selectIndex = event.index;
            var el = this.$refs['tag' + this.selectIndex][0];
            dom.scrollToElement(el, {});
        },
        onSliderScroll: function onSliderScroll(event) {
            this.lineOffset = event.offsetXRatio;
            var translateX = this.selectIndex * 140 - this.lineOffset * 140;
            this.tbTagLineStyle.transform = "translateX(" + translateX + "px)";
        }
    },
    created: function created() {
        var _this = this;

        if (this.loadFinish) {
            return;
        }
        this.post("app/shopv3/pipe", "data={\"RNTab\":{\"model\":\"Homepage\",\"action\":\"BuildActClass\",\"parameters\":{\"id\":\"-8\"}}}", function (response) {
            if (response.ok) {
                if (response.data.message === "ok" || response.data.message === "OK") {
                    var _tabTags, _tabTags2, _tabTags3;

                    _this.loadFinish = true;
                    var result = response.data.result.RNTab;
                    (_tabTags = _this.tabTags).push.apply(_tabTags, recommend);
                    (_tabTags2 = _this.tabTags).push.apply(_tabTags2, _toConsumableArray(result['data']));
                    (_tabTags3 = _this.tabTags).push.apply(_tabTags3, other);
                } else {
                    modal.toast({
                        message: "网络请求失败",
                        duration: 0.3
                    });
                }
            } else {
                modal.toast({
                    message: "服务器异常",
                    duration: 0.3
                });
            }
        });
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(65)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-93932bea"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "single_image_container": {
    "width": "750",
    "height": "200",
    "alignItems": "center"
  },
  "single_picture": {
    "position": "absolute",
    "top": "25",
    "width": "750",
    "height": "150"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RecommendModule = __webpack_require__(29);

var _RecommendModule2 = _interopRequireDefault(_RecommendModule);

var _RecommendModule3 = __webpack_require__(33);

var _RecommendModule4 = _interopRequireDefault(_RecommendModule3);

var _RecommendModule5 = __webpack_require__(37);

var _RecommendModule6 = _interopRequireDefault(_RecommendModule5);

var _RecommendModule7 = __webpack_require__(41);

var _RecommendModule8 = _interopRequireDefault(_RecommendModule7);

var _RecommendModule9 = __webpack_require__(45);

var _RecommendModule10 = _interopRequireDefault(_RecommendModule9);

var _RecommendModule11 = __webpack_require__(49);

var _RecommendModule12 = _interopRequireDefault(_RecommendModule11);

var _RecommendModule13 = __webpack_require__(53);

var _RecommendModule14 = _interopRequireDefault(_RecommendModule13);

var _RecommendModule15 = __webpack_require__(57);

var _RecommendModule16 = _interopRequireDefault(_RecommendModule15);

var _RecommendModule17 = __webpack_require__(61);

var _RecommendModule18 = _interopRequireDefault(_RecommendModule17);

var _RecommendModule19 = __webpack_require__(89);

var _RecommendModule20 = _interopRequireDefault(_RecommendModule19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendPage",
    data: function data() {
        return {
            homepageDatas: [],
            isFristLoad: false
        };
    },
    components: {
        "recommend_module1": _RecommendModule2.default,
        "recommend_module2": _RecommendModule4.default,
        "recommend_module3": _RecommendModule6.default,
        "recommend_module4": _RecommendModule8.default,
        "recommend_module5": _RecommendModule10.default,
        "recommend_module6": _RecommendModule12.default,
        "recommend_module7": _RecommendModule14.default,
        "recommend_module8": _RecommendModule16.default,
        "recommend_module9": _RecommendModule18.default,
        "recommend_module10": _RecommendModule20.default
    },
    created: function created() {
        var _this = this;

        if (this.isFristLoad) {
            return;
        }
        this.recommendPost("homepage/main/v1002", function (response) {
            if (response.ok) {
                if (response.data.message === "ok" || response.data.message === "OK") {
                    var _homepageDatas, _homepageDatas2;

                    _this.isFristLoad = true;
                    var result1 = response.data.data.homepage;
                    var result2 = response.data.data.recommend;
                    (_homepageDatas = _this.homepageDatas).push.apply(_homepageDatas, _toConsumableArray(result1['floors']));
                    (_homepageDatas2 = _this.homepageDatas).push.apply(_homepageDatas2, _toConsumableArray(result2['floors']));
                } else {
                    modal.toast({
                        message: "网络请求失败",
                        duration: 0.3
                    });
                }
            } else {
                modal.toast({
                    message: "服务器异常",
                    duration: 0.3
                });
            }
        });
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(32)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53c47079"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "width": "750",
    "height": "313"
  },
  "image_swipebanner": {
    "width": "750",
    "height": "313"
  },
  "banner_indicator": {
    "width": "200",
    "height": "20",
    "itemColor": "#008000",
    "itemSelectedColor": "#FF0000",
    "itemSize": "13",
    "position": "absolute",
    "top": "270",
    "right": "0"
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule1",
    props: ["swipebanner"],
    data: function data() {
        return {};
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('slider', {
    attrs: {
      "autoPlay": "true",
      "interval": "3000",
      "scrollable": "true",
      "infinite": "true",
      "showIndicators": "true"
    }
  }, [_vm._l((_vm.swipebanner['items']), function(item) {
    return _c('div', [_c('image', {
      staticClass: ["image_swipebanner"],
      attrs: {
        "placeholder": "http://www.lidiwo.com/banner_placeholder.png",
        "src": item.pic_url
      }
    })])
  }), _c('indicator', {
    staticClass: ["banner_indicator"]
  })], 2)])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('slider', {
    attrs: {
      "autoPlay": "true",
      "interval": "3000",
      "scrollable": "true",
      "infinite": "true",
      "showIndicators": "true"
    }
  }, [_c('div', {
    attrs: {
      "[[repeat]]": {
        "@expression": "swipebanner['items']",
        "@alias": "item"
      }
    }
  }, [_c('image', {
    staticClass: ["image_swipebanner"],
    attrs: {
      "placeholder": "http://www.lidiwo.com/banner_placeholder.png",
      "src": {
        "@binding": "item.pic_url"
      }
    }
  })]), _c('indicator', {
    staticClass: ["banner_indicator"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(34)
)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(36)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53d287fa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flexDirection": "row",
    "width": "750",
    "height": "175",
    "backgroundColor": "#FFFFFF"
  },
  "pic_item": {
    "alignItems": "center",
    "flex": 1,
    "flexDirection": "column",
    "paddingRight": "15",
    "paddingLeft": "15",
    "paddingTop": "20"
  },
  "item_iamge": {
    "width": "90",
    "height": "90"
  },
  "item_text": {
    "marginTop": "10",
    "fontSize": "25",
    "color": "#5A5B6B"
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule2",
    props: ["menupicture"],
    data: function data() {
        return {};
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, _vm._l((_vm.menupicture['items']), function(item) {
    return _c('div', {
      staticClass: ["pic_item"]
    }, [_c('image', {
      staticClass: ["item_iamge"],
      attrs: {
        "src": item.pic_url
      }
    }), _c('text', {
      staticClass: ["item_text"]
    }, [_vm._v(_vm._s(item.title))])])
  }))
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["pic_item"],
    attrs: {
      "[[repeat]]": {
        "@expression": "menupicture['items']",
        "@alias": "item"
      }
    }
  }, [_c('image', {
    staticClass: ["item_iamge"],
    attrs: {
      "src": {
        "@binding": "item.pic_url"
      }
    }
  }), _c('text', {
    staticClass: ["item_text"],
    attrs: {
      "value": {
        "@binding": "item.title"
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(38)
)

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53e09f7b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flexDirection": "column",
    "width": "750",
    "height": "660",
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "25",
    "paddingRight": "25"
  },
  "nominate_title": {
    "flexDirection": "row",
    "width": "700",
    "height": "104",
    "alignItems": "center"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "35"
  },
  "title_more": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "0",
    "top": "0",
    "bottom": "0",
    "alignItems": "center"
  },
  "more_text": {
    "fontSize": "24",
    "color": "#999999"
  },
  "more_img": {
    "marginLeft": "8",
    "width": "30",
    "height": "30"
  },
  "nominate_large_pic": {
    "flexDirection": "row",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "width": "700",
    "height": "250"
  },
  "large_pic_flag1": {
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "25",
    "paddingLeft": "25"
  },
  "large_pic_flag2": {
    "flex": 1
  },
  "text_title": {
    "fontSize": "30"
  },
  "text_subtitle": {
    "marginTop": "5",
    "fontSize": "25"
  },
  "nominate_main_image": {
    "position": "absolute",
    "top": "25",
    "right": "40",
    "width": "294",
    "height": "196"
  },
  "large_pic_tag_text_container": {
    "marginTop": "15",
    "alignItems": "center",
    "height": "50",
    "width": "150",
    "borderBottomLeftRadius": "3",
    "borderBottomRightRadius": "3",
    "borderTopRightRadius": "3",
    "borderTopLeftRadius": "3",
    "justifyContent": "center"
  },
  "large_pic_tag_text": {
    "fontSize": "25"
  },
  "nominate_small_pic": {
    "flexDirection": "row",
    "marginTop": "4",
    "width": "700",
    "height": "271"
  },
  "small_pic1": {
    "flexDirection": "column",
    "flex": 1,
    "marginRight": "2",
    "borderBottomLeftRadius": "10",
    "paddingTop": "25",
    "paddingLeft": "25"
  },
  "small_pic2": {
    "flexDirection": "column",
    "flex": 1,
    "marginLeft": "2",
    "borderBottomRightRadius": "10",
    "paddingTop": "25",
    "paddingLeft": "25"
  },
  "small_pic_container": {
    "marginRight": "25",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "small_pic": {
    "width": "210",
    "height": "140"
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule3",
    props: ["recommendData"],
    data: function data() {
        return {
            nominate_large_pic_bg: {
                backgroundColor: this.recommendData['items'][0].bg_color
            },
            large_pic_title: {
                color: this.recommendData['items'][0].title_color

            },
            large_pic_subtitle: {
                color: this.recommendData['items'][0].subtitle_color
            },
            large_pic_tag_text: {
                backgroundColor: this.recommendData['items'][0].tag_color
            },

            small_pic1_bg: {
                backgroundColor: this.recommendData['items'][1].bg_color
            },
            small_pic1_title: {
                color: this.recommendData['items'][1].title_color
            },
            small_pic1_subtitle: {
                color: this.recommendData['items'][1].subtitle_color
            },
            small_pic2_bg: {
                backgroundColor: this.recommendData['items'][2].bg_color
            },
            small_pic2_title: {
                color: this.recommendData['items'][2].title_color
            },
            small_pic2_subtitle: {
                color: this.recommendData['items'][2].subtitle_color
            }
        };
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["nominate_title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.recommendData.title))]), _vm._m(0)]), _c('div', {
    staticClass: ["nominate_large_pic"],
    style: _vm.nominate_large_pic_bg
  }, [_c('div', {
    staticClass: ["large_pic_flag1"]
  }, [_c('text', {
    staticClass: ["text_title"],
    style: _vm.large_pic_title
  }, [_vm._v(_vm._s(_vm.recommendData['items'][0].title))]), _c('text', {
    staticClass: ["text_subtitle"],
    style: _vm.large_pic_subtitle
  }, [_vm._v(_vm._s(_vm.recommendData['items'][0].subtitle))]), _c('div', {
    staticClass: ["large_pic_tag_text_container"],
    style: _vm.large_pic_tag_text
  }, [_c('text', {
    staticClass: ["large_pic_tag_text"],
    staticStyle: {
      color: "white"
    }
  }, [_vm._v(_vm._s(_vm.recommendData['items'][0].tag_text))])])]), _c('div', {
    staticClass: ["large_pic_flag2"]
  }, [_c('image', {
    staticClass: ["nominate_main_image"],
    attrs: {
      "src": _vm.recommendData['items'][0].pic_url
    }
  })])]), _c('div', {
    staticClass: ["nominate_small_pic"]
  }, [_c('div', {
    staticClass: ["small_pic1"],
    style: _vm.small_pic1_bg
  }, [_c('text', {
    staticClass: ["text_title"],
    style: _vm.small_pic1_title
  }, [_vm._v(_vm._s(_vm.recommendData['items'][1].title))]), _c('text', {
    staticClass: ["text_subtitle"],
    style: _vm.small_pic1_subtitle
  }, [_vm._v(_vm._s(_vm.recommendData['items'][1].subtitle))]), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": _vm.recommendData['items'][1].pic_url
    }
  })])]), _c('div', {
    staticClass: ["small_pic2"],
    style: _vm.small_pic2_bg
  }, [_c('text', {
    staticClass: ["text_title"],
    style: _vm.small_pic2_title
  }, [_vm._v(_vm._s(_vm.recommendData['items'][2].title))]), _c('text', {
    staticClass: ["text_subtitle"],
    style: _vm.small_pic2_subtitle
  }, [_vm._v(_vm._s(_vm.recommendData['items'][2].subtitle))]), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": _vm.recommendData['items'][2].pic_url
    }
  })])])])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["nominate_title"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "recommendData.title"
      }
    }
  }), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"],
    attrs: {
      "value": " 更多"
    }
  }), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])]), _c('div', {
    staticClass: ["nominate_large_pic"],
    staticStyle: {
      "@binding": "nominate_large_pic_bg"
    }
  }, [_c('div', {
    staticClass: ["large_pic_flag1"]
  }, [_c('text', {
    staticClass: ["text_title"],
    staticStyle: {
      "@binding": "large_pic_title"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][0].title"
      }
    }
  }), _c('text', {
    staticClass: ["text_subtitle"],
    staticStyle: {
      "@binding": "large_pic_subtitle"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][0].subtitle"
      }
    }
  }), _c('div', {
    staticClass: ["large_pic_tag_text_container"],
    staticStyle: {
      "@binding": "large_pic_tag_text"
    }
  }, [_c('text', {
    staticClass: ["large_pic_tag_text"],
    staticStyle: {
      color: "white"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][0].tag_text"
      }
    }
  })])]), _c('div', {
    staticClass: ["large_pic_flag2"]
  }, [_c('image', {
    staticClass: ["nominate_main_image"],
    attrs: {
      "src": {
        "@binding": "recommendData['items'][0].pic_url"
      }
    }
  })])]), _c('div', {
    staticClass: ["nominate_small_pic"]
  }, [_c('div', {
    staticClass: ["small_pic1"],
    staticStyle: {
      "@binding": "small_pic1_bg"
    }
  }, [_c('text', {
    staticClass: ["text_title"],
    staticStyle: {
      "@binding": "small_pic1_title"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][1].title"
      }
    }
  }), _c('text', {
    staticClass: ["text_subtitle"],
    staticStyle: {
      "@binding": "small_pic1_subtitle"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][1].subtitle"
      }
    }
  }), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": {
        "@binding": "recommendData['items'][1].pic_url"
      }
    }
  })])]), _c('div', {
    staticClass: ["small_pic2"],
    staticStyle: {
      "@binding": "small_pic2_bg"
    }
  }, [_c('text', {
    staticClass: ["text_title"],
    staticStyle: {
      "@binding": "small_pic2_title"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][2].title"
      }
    }
  }), _c('text', {
    staticClass: ["text_subtitle"],
    staticStyle: {
      "@binding": "small_pic2_subtitle"
    },
    attrs: {
      "value": {
        "@binding": "recommendData['items'][2].subtitle"
      }
    }
  }), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": {
        "@binding": "recommendData['items'][2].pic_url"
      }
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"]
  }, [_vm._v(" 更多")]), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(42)
)

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53eeb6fc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "marginTop": "20",
    "flexDirection": "column",
    "width": "750",
    "height": "765",
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "25",
    "paddingRight": "25"
  },
  "crowd_funding_title": {
    "flexDirection": "row",
    "width": "700",
    "height": "104",
    "alignItems": "center"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "35"
  },
  "title_more": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "0",
    "top": "0",
    "bottom": "0",
    "alignItems": "center"
  },
  "more_text": {
    "fontSize": "24",
    "color": "#999999"
  },
  "more_img": {
    "marginLeft": "8",
    "width": "30",
    "height": "30"
  },
  "crowd_funding_large_pic": {
    "flexDirection": "row",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "width": "700",
    "height": "310",
    "backgroundColor": "#F8F4EB"
  },
  "large_pic_flag1": {
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "25",
    "paddingLeft": "25"
  },
  "large_pic_flag2": {
    "flex": 1
  },
  "text_title": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "30",
    "color": "#333333"
  },
  "text_subtitle": {
    "marginTop": "5",
    "fontSize": "25",
    "color": "#999999"
  },
  "crowd_funding_main_image": {
    "position": "absolute",
    "top": "25",
    "right": "40",
    "width": "235",
    "height": "235"
  },
  "crowd_funding_small_pic": {
    "flexDirection": "row",
    "marginTop": "4",
    "width": "700",
    "height": "312"
  },
  "small_pic1": {
    "backgroundColor": "#F8F8F8",
    "flexDirection": "column",
    "flex": 1,
    "marginRight": "2",
    "borderBottomLeftRadius": "10",
    "paddingTop": "25",
    "paddingLeft": "25",
    "paddingRight": "25"
  },
  "small_pic2": {
    "backgroundColor": "#F8F8F8",
    "flexDirection": "column",
    "flex": 1,
    "marginLeft": "2",
    "borderBottomRightRadius": "10",
    "paddingTop": "25",
    "paddingLeft": "25",
    "paddingRight": "25"
  },
  "small_pic_container": {
    "flexDirection": "row",
    "width": "293",
    "height": "200"
  },
  "main_goods_price": {
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginTop": "15"
  },
  "goods_price": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "flexDirection": "row",
    "marginTop": "15",
    "alignItems": "flex-end"
  },
  "rmb_symbol": {
    "marginBottom": "5",
    "fontSize": "20",
    "color": "#A92112"
  },
  "price_text": {
    "fontSize": "30",
    "color": "#A92112"
  },
  "small_pic": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "width": "200",
    "height": "200"
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule4",
    props: ["crowdFundingData"],
    data: function data() {
        return {
            exceed_text: {
                visibility: "hidden"
            }
        };
    },
    methods: {
        goodsPrice: function goodsPrice(index) {
            return _util2.default.formatMoney(this.crowdFundingData['items'][index].price_min);
        }
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["crowd_funding_title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.crowdFundingData.title))]), _vm._m(0)]), _c('div', {
    staticClass: ["crowd_funding_large_pic"]
  }, [_c('div', {
    staticClass: ["large_pic_flag1"]
  }, [_c('text', {
    staticClass: ["text_title"]
  }, [_vm._v(_vm._s(_vm.crowdFundingData['items'][0].attr_ext.custom_name))]), _c('text', {
    staticClass: ["text_subtitle"]
  }, [_vm._v(_vm._s(_vm.crowdFundingData['items'][0].attr_ext.custom_summary))]), _c('div', {
    staticClass: ["main_goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"]
  }, [_vm._v("¥")]), _c('text', {
    staticClass: ["price_text"]
  }, [_vm._v(_vm._s(_vm.goodsPrice(0)))]), _c('text', {
    staticClass: ["rmb_symbol"],
    style: _vm.exceed_text
  }, [_vm._v("起")])])]), _c('div', {
    staticClass: ["large_pic_flag2"]
  }, [_c('image', {
    staticClass: ["crowd_funding_main_image"],
    attrs: {
      "src": _vm.crowdFundingData['items'][0].pic_url
    }
  })])]), _c('div', {
    staticClass: ["crowd_funding_small_pic"]
  }, [_c('div', {
    staticClass: ["small_pic1"]
  }, [_c('text', {
    staticClass: ["text_title"]
  }, [_vm._v(_vm._s(_vm.crowdFundingData['items'][1].attr_ext.custom_name))]), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"]
  }, [_vm._v("¥")]), _c('text', {
    staticClass: ["price_text"]
  }, [_vm._v(_vm._s(_vm.goodsPrice(1)))]), _c('text', {
    staticClass: ["rmb_symbol"],
    style: _vm.exceed_text
  }, [_vm._v("起")])]), _c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": _vm.crowdFundingData['items'][1].pic_url
    }
  })])]), _c('div', {
    staticClass: ["small_pic2"]
  }, [_c('text', {
    staticClass: ["text_title"]
  }, [_vm._v(_vm._s(_vm.crowdFundingData['items'][2].attr_ext.custom_name))]), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"]
  }, [_vm._v("¥")]), _c('text', {
    staticClass: ["price_text"]
  }, [_vm._v(_vm._s(_vm.goodsPrice(2)))]), _c('text', {
    staticClass: ["rmb_symbol"],
    style: _vm.exceed_text
  }, [_vm._v("起")])]), _c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": _vm.crowdFundingData['items'][2].pic_url
    }
  })])])])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["crowd_funding_title"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "crowdFundingData.title"
      }
    }
  }), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"],
    attrs: {
      "value": " 更多"
    }
  }), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])]), _c('div', {
    staticClass: ["crowd_funding_large_pic"]
  }, [_c('div', {
    staticClass: ["large_pic_flag1"]
  }, [_c('text', {
    staticClass: ["text_title"],
    attrs: {
      "value": {
        "@binding": "crowdFundingData['items'][0].attr_ext.custom_name"
      }
    }
  }), _c('text', {
    staticClass: ["text_subtitle"],
    attrs: {
      "value": {
        "@binding": "crowdFundingData['items'][0].attr_ext.custom_summary"
      }
    }
  }), _c('div', {
    staticClass: ["main_goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice(0)"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })])]), _c('div', {
    staticClass: ["large_pic_flag2"]
  }, [_c('image', {
    staticClass: ["crowd_funding_main_image"],
    attrs: {
      "src": {
        "@binding": "crowdFundingData['items'][0].pic_url"
      }
    }
  })])]), _c('div', {
    staticClass: ["crowd_funding_small_pic"]
  }, [_c('div', {
    staticClass: ["small_pic1"]
  }, [_c('text', {
    staticClass: ["text_title"],
    attrs: {
      "value": {
        "@binding": "crowdFundingData['items'][1].attr_ext.custom_name"
      }
    }
  }), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice(1)"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })]), _c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": {
        "@binding": "crowdFundingData['items'][1].pic_url"
      }
    }
  })])]), _c('div', {
    staticClass: ["small_pic2"]
  }, [_c('text', {
    staticClass: ["text_title"],
    attrs: {
      "value": {
        "@binding": "crowdFundingData['items'][2].attr_ext.custom_name"
      }
    }
  }), _c('div', {
    staticClass: ["small_pic_container"]
  }, [_c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice(2)"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })]), _c('image', {
    staticClass: ["small_pic"],
    attrs: {
      "src": {
        "@binding": "crowdFundingData['items'][2].pic_url"
      }
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"]
  }, [_vm._v(" 更多")]), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(46)
)

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(48)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule5.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53fcce7d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "width": "750",
    "height": "1007",
    "marginTop": "15",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "column"
  },
  "top_image": {
    "width": "750",
    "height": "163"
  },
  "goods_content": {
    "marginTop": "15",
    "width": "750",
    "flexDirection": "row",
    "height": "400",
    "paddingRight": "25",
    "paddingLeft": "25",
    "justifyContent": "space-between"
  },
  "single_goods": {
    "flexDirection": "column",
    "width": "225",
    "height": "400"
  },
  "goods_image_container": {
    "backgroundColor": "#F8F8F8",
    "width": "225",
    "height": "225",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "goods_image": {
    "width": "180",
    "height": "180"
  },
  "goods_title": {
    "marginTop": "10",
    "lines": 2,
    "fontSize": "28",
    "textOverflow": "ellipsis"
  },
  "goods_price": {
    "flexDirection": "row",
    "marginTop": "15",
    "alignItems": "flex-end"
  },
  "rmb_symbol": {
    "marginBottom": "5",
    "fontSize": "20",
    "color": "#A92112"
  },
  "price_text": {
    "fontSize": "30",
    "color": "#A92112"
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule5",
    props: ["productHotData"],
    data: function data() {
        return {
            exceed_text: {
                visibility: "hidden"
            }
        };
    },
    methods: {
        goodsPrice: function goodsPrice(index) {
            return _util2.default.formatMoney(this.productHotData['items'][index].price_min);
        }
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["top_image"]
  }, [_c('image', {
    staticClass: ["top_image"],
    attrs: {
      "src": _vm.productHotData.pic_url
    }
  })]), _vm._l((_vm.productHotData['items'].length / 3), function(index1) {
    return _c('div', {
      staticClass: ["goods_content"]
    }, _vm._l((3), function(index2) {
      return _c('div', {
        staticClass: ["single_goods"]
      }, [_c('div', {
        staticClass: ["goods_image_container"]
      }, [_c('image', {
        staticClass: ["goods_image"],
        attrs: {
          "src": _vm.productHotData['items'][(index1 - 1) * 3 + (index2 - 1)].pic_url
        }
      })]), _c('text', {
        staticClass: ["goods_title"]
      }, [_vm._v(_vm._s(_vm.productHotData['items'][(index1 - 1) * 3 + (index2 - 1)].name))]), _c('div', {
        staticClass: ["goods_price"]
      }, [_c('text', {
        staticClass: ["rmb_symbol"]
      }, [_vm._v("¥")]), _c('text', {
        staticClass: ["price_text"]
      }, [_vm._v(_vm._s(_vm.goodsPrice((index1 - 1) * 3 + (index2 - 1))))]), _c('text', {
        staticClass: ["rmb_symbol"],
        style: _vm.exceed_text
      }, [_vm._v("起")])])])
    }))
  })], 2)
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["top_image"]
  }, [_c('image', {
    staticClass: ["top_image"],
    attrs: {
      "src": {
        "@binding": "productHotData.pic_url"
      }
    }
  })]), _c('div', {
    staticClass: ["goods_content"],
    attrs: {
      "[[repeat]]": {
        "@expression": "productHotData['items'].length/3",
        "@alias": "index1"
      }
    }
  }, [_c('div', {
    staticClass: ["single_goods"],
    attrs: {
      "[[repeat]]": {
        "@expression": "3",
        "@alias": "index2"
      }
    }
  }, [_c('div', {
    staticClass: ["goods_image_container"]
  }, [_c('image', {
    staticClass: ["goods_image"],
    attrs: {
      "src": {
        "@binding": "productHotData['items'][(index1 - 1) * 3 + (index2 - 1)].pic_url"
      }
    }
  })]), _c('text', {
    staticClass: ["goods_title"],
    attrs: {
      "value": {
        "@binding": "productHotData['items'][(index1-1)*3+(index2-1)].name"
      }
    }
  }), _c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice((index1-1)*3+(index2-1))"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* script */
__vue_exports__ = __webpack_require__(51)

/* template */
var __vue_template__ = __webpack_require__(52)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule6.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-540ae5fe"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "marginTop": "20",
    "width": "750",
    "height": "309",
    "flexDirection": "row",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingLeft": "30",
    "paddingBottom": "30"
  },
  "class_title": {
    "borderBottomColor": "#8B643E",
    "borderTopColor": "#8B643E",
    "borderRightColor": "#8B643E",
    "borderLeftColor": "#8B643E",
    "borderBottomWidth": "2",
    "borderTopWidth": "2",
    "borderRightWidth": "2",
    "borderLeftWidth": "2",
    "borderBottomRightRadius": "5",
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5",
    "borderBottomLeftRadius": "5",
    "textAlign": "center",
    "fontSize": "28",
    "width": "130",
    "color": "#8B643E"
  },
  "main_title": {
    "marginTop": "10",
    "fontSize": "30",
    "color": "#333333"
  },
  "sub_title": {
    "marginTop": "5",
    "fontSize": "25",
    "color": "#B8B7B3"
  },
  "goods_iamge_container": {
    "position": "absolute",
    "top": "30",
    "right": "30",
    "width": "320",
    "height": "249",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "goods_iamge": {
    "width": "220",
    "height": "220"
  },
  "goods_price": {
    "flexDirection": "row",
    "marginTop": "10",
    "alignItems": "flex-end"
  },
  "rmb_symbol": {
    "marginBottom": "5",
    "fontSize": "20",
    "color": "#A92112"
  },
  "price_text": {
    "fontSize": "35",
    "color": "#A92112"
  },
  "saled_count_container": {
    "marginTop": "10",
    "width": "150",
    "justifyContent": "center",
    "paddingBottom": "5",
    "flexDirection": "row",
    "backgroundImage": "linear-gradient(to right,#D1B578,#AF894D)",
    "alignItems": "flex-end",
    "borderBottomRightRadius": "5",
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5",
    "borderBottomLeftRadius": "5"
  },
  "saled_count": {
    "color": "#FFFFFF",
    "fontSize": "33"
  },
  "saled_count_flag": {
    "color": "#FFFFFF",
    "fontSize": "18",
    "marginBottom": "5"
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule6",
    props: ["starProductData"],
    data: function data() {
        return {
            exceed_text: {
                visibility: "visible"
            },
            content_bg: {
                backgroundColor: this.starProductData.config.bg_color
            }
        };
    },
    methods: {
        goodsPrice: function goodsPrice() {
            return _util2.default.formatMoney(this.starProductData['items'][0].price_min);
        }
    }
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    style: _vm.content_bg
  }, [_c('div', {
    staticClass: ["goods_content"]
  }, [_c('text', {
    staticClass: ["class_title"]
  }, [_vm._v("星品驾到")]), _c('text', {
    staticClass: ["main_title"]
  }, [_vm._v(_vm._s(_vm.starProductData['items'][0].attr_ext.custom_name))]), _c('text', {
    staticClass: ["sub_title"]
  }, [_vm._v(_vm._s(_vm.starProductData['items'][0].attr_ext.custom_summary))]), _c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"]
  }, [_vm._v("¥")]), _c('text', {
    staticClass: ["price_text"]
  }, [_vm._v(_vm._s(_vm.goodsPrice()))]), _c('text', {
    staticClass: ["rmb_symbol"],
    style: _vm.exceed_text
  }, [_vm._v("起")])]), _c('div', {
    staticClass: ["saled_count_container"]
  }, [_c('text', {
    staticClass: ["saled_count"]
  }, [_vm._v(_vm._s(_vm.starProductData['items'][0].saled_count))]), _c('text', {
    staticClass: ["saled_count_flag"]
  }, [_vm._v("件已售")])])]), _c('div', {
    staticClass: ["goods_iamge_container"]
  }, [_c('image', {
    staticClass: ["goods_iamge"],
    attrs: {
      "src": _vm.starProductData['items'][0].pic_url
    }
  })])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    staticStyle: {
      "@binding": "content_bg"
    },
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["goods_content"]
  }, [_c('text', {
    staticClass: ["class_title"],
    attrs: {
      "value": "星品驾到"
    }
  }), _c('text', {
    staticClass: ["main_title"],
    attrs: {
      "value": {
        "@binding": "starProductData['items'][0].attr_ext.custom_name"
      }
    }
  }), _c('text', {
    staticClass: ["sub_title"],
    attrs: {
      "value": {
        "@binding": "starProductData['items'][0].attr_ext.custom_summary"
      }
    }
  }), _c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice()"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })]), _c('div', {
    staticClass: ["saled_count_container"]
  }, [_c('text', {
    staticClass: ["saled_count"],
    attrs: {
      "value": {
        "@binding": "starProductData['items'][0].saled_count"
      }
    }
  }), _c('text', {
    staticClass: ["saled_count_flag"],
    attrs: {
      "value": "件已售"
    }
  })])]), _c('div', {
    staticClass: ["goods_iamge_container"]
  }, [_c('image', {
    staticClass: ["goods_iamge"],
    attrs: {
      "src": {
        "@binding": "starProductData['items'][0].pic_url"
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(54)
)

/* script */
__vue_exports__ = __webpack_require__(55)

/* template */
var __vue_template__ = __webpack_require__(56)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule7.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5418fd7f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "marginTop": "20",
    "flexDirection": "column",
    "width": "750",
    "height": "438",
    "backgroundColor": "#FFFFFF"
  },
  "flash_sale_title": {
    "paddingLeft": "25",
    "paddingRight": "25",
    "flexDirection": "row",
    "width": "750",
    "height": "104",
    "alignItems": "center"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "35"
  },
  "title_more": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "25",
    "top": "0",
    "bottom": "0",
    "alignItems": "center"
  },
  "more_text": {
    "fontSize": "24",
    "color": "#999999"
  },
  "more_img": {
    "marginLeft": "8",
    "width": "30",
    "height": "30"
  },
  "content_scroller": {
    "paddingLeft": "20",
    "flexDirection": "row",
    "width": "750",
    "height": "305"
  },
  "flash_sale_content": {
    "backgroundColor": "#FAF6EF",
    "width": "188",
    "height": "305",
    "flexDirection": "column",
    "marginRight": "15",
    "borderBottomRightRadius": "5",
    "borderBottomLeftRadius": "5",
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5"
  },
  "goods_main_image_container": {
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "188",
    "height": "188",
    "backgroundColor": "#FAFAFA"
  },
  "goods_main_image": {
    "width": "140",
    "height": "140"
  },
  "goods_discount": {
    "position": "absolute",
    "left": "0",
    "bottom": "0",
    "backgroundImage": "linear-gradient(to right, #EF6255, #E23959)",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingBottom": "2",
    "paddingTop": "2",
    "borderTopRightRadius": "5",
    "borderBottomRightRadius": "5",
    "color": "#FFFFFF",
    "fontSize": "20"
  },
  "goods_title": {
    "marginTop": "15",
    "paddingLeft": "5",
    "paddingRight": "10",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#333333",
    "fontSize": "28"
  },
  "goods_money_container": {
    "paddingLeft": "5",
    "marginTop": "10"
  },
  "goods_money": {
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "rmb_flag": {
    "color": "#A92112",
    "marginBottom": "5",
    "fontSize": "22"
  },
  "goods_flash_price": {
    "color": "#A92112",
    "fontSize": "32"
  },
  "goods_market_price": {
    "marginLeft": "8",
    "marginBottom": "3",
    "fontSize": "22",
    "color": "#979797",
    "textDecoration": "line-through"
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule7",
    props: ["flashsaleData"],
    data: function data() {
        return {};
    },
    methods: {
        flashPrice: function flashPrice(index) {
            return _util2.default.formatMoney(this.flashsaleData['goods'][index].flash_price);
        },
        marketPrice: function marketPrice(index) {
            return _util2.default.formatMoney(this.flashsaleData['goods'][index].market_price);
        }

    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["flash_sale_title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.flashsaleData.title))]), _vm._m(0)]), _c('scroller', {
    staticClass: ["content_scroller"],
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "horizontal",
      "offsetAccuracy": "5px"
    }
  }, _vm._l((_vm.flashsaleData['goods'].length), function(index) {
    return _c('div', {
      staticClass: ["flash_sale_content"]
    }, [_c('div', {
      staticClass: ["goods_main_image_container"]
    }, [_c('image', {
      staticClass: ["goods_main_image"],
      attrs: {
        "src": _vm.flashsaleData['goods'][index - 1].imgs.img800
      }
    }), _c('text', {
      staticClass: ["goods_discount"]
    }, [_vm._v(_vm._s(_vm.flashsaleData['goods'][index - 1].discount_desc))])]), _c('text', {
      staticClass: ["goods_title"]
    }, [_vm._v(_vm._s(_vm.flashsaleData['goods'][index - 1].name))]), _c('div', {
      staticClass: ["goods_money", "goods_money_container"]
    }, [_c('div', {
      staticClass: ["goods_money"]
    }, [_c('text', {
      staticClass: ["rmb_flag"]
    }, [_vm._v("¥")]), _c('text', {
      staticClass: ["goods_flash_price"]
    }, [_vm._v(_vm._s(_vm.flashPrice(index - 1)))])]), _c('text', {
      staticClass: ["goods_market_price"]
    }, [_vm._v("¥" + _vm._s(_vm.marketPrice(index - 1)))])])])
  }))])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["flash_sale_title"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "flashsaleData.title"
      }
    }
  }), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"],
    attrs: {
      "value": " 更多"
    }
  }), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])]), _c('scroller', {
    staticClass: ["content_scroller"],
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "horizontal",
      "offsetAccuracy": "5px"
    }
  }, [_c('div', {
    staticClass: ["flash_sale_content"],
    attrs: {
      "[[repeat]]": {
        "@expression": "flashsaleData['goods'].length",
        "@alias": "index"
      }
    }
  }, [_c('div', {
    staticClass: ["goods_main_image_container"]
  }, [_c('image', {
    staticClass: ["goods_main_image"],
    attrs: {
      "src": {
        "@binding": "flashsaleData['goods'][index - 1].imgs.img800"
      }
    }
  }), _c('text', {
    staticClass: ["goods_discount"],
    attrs: {
      "value": {
        "@binding": "flashsaleData['goods'][index-1].discount_desc"
      }
    }
  })]), _c('text', {
    staticClass: ["goods_title"],
    attrs: {
      "value": {
        "@binding": "flashsaleData['goods'][index-1].name"
      }
    }
  }), _c('div', {
    staticClass: ["goods_money", "goods_money_container"]
  }, [_c('div', {
    staticClass: ["goods_money"]
  }, [_c('text', {
    staticClass: ["rmb_flag"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["goods_flash_price"],
    attrs: {
      "value": {
        "@binding": "flashPrice(index-1)"
      }
    }
  })]), _c('text', {
    staticClass: ["goods_market_price"],
    attrs: {
      "value": ["¥", {
        "@binding": "marketPrice(index-1)"
      }]
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"]
  }, [_vm._v(" 更多")]), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(58)
)

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule8.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54271500"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "marginTop": "20",
    "flexDirection": "column",
    "width": "750",
    "height": "472",
    "backgroundColor": "#FFFFFF"
  },
  "taste_live_title": {
    "paddingLeft": "25",
    "paddingRight": "25",
    "flexDirection": "row",
    "width": "750",
    "height": "104",
    "alignItems": "center"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "35"
  },
  "title_more": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "25",
    "top": "0",
    "bottom": "0",
    "alignItems": "center"
  },
  "more_text": {
    "fontSize": "24",
    "color": "#999999"
  },
  "more_img": {
    "marginLeft": "8",
    "width": "30",
    "height": "30"
  },
  "content_scroller": {
    "paddingLeft": "20",
    "flexDirection": "row",
    "width": "750",
    "height": "347"
  },
  "taste_live_content": {
    "width": "500",
    "height": "347",
    "flexDirection": "column",
    "marginRight": "15"
  },
  "taste_live_image": {
    "width": "500",
    "height": "250",
    "borderBottomRightRadius": "5",
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5",
    "borderBottomLeftRadius": "5"
  },
  "taste_live_maintitle": {
    "color": "#333333",
    "fontSize": "30",
    "lines": 1,
    "textOverflow": "ellipsis",
    "marginTop": "15"
  },
  "taste_live_summary": {
    "color": "#666666",
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "25",
    "marginTop": "10"
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule8",
    props: ["tasteLiveData"],
    data: function data() {
        return {};
    }
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["taste_live_title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.tasteLiveData.title))]), _vm._m(0)]), _c('scroller', {
    staticClass: ["content_scroller"],
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "horizontal",
      "offsetAccuracy": "5px"
    }
  }, _vm._l((_vm.tasteLiveData['items'].length), function(index) {
    return _c('div', {
      staticClass: ["taste_live_content"]
    }, [_c('image', {
      staticClass: ["taste_live_image"],
      attrs: {
        "src": _vm.tasteLiveData['items'][index - 1].pic_url
      }
    }), _c('text', {
      staticClass: ["taste_live_maintitle"]
    }, [_vm._v(_vm._s(_vm.tasteLiveData['items'][index - 1].title))]), _c('text', {
      staticClass: ["taste_live_summary"]
    }, [_vm._v(_vm._s(_vm.tasteLiveData['items'][index - 1].summary))])])
  }))])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["taste_live_title"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "tasteLiveData.title"
      }
    }
  }), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"],
    attrs: {
      "value": " 更多"
    }
  }), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])]), _c('scroller', {
    staticClass: ["content_scroller"],
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "horizontal",
      "offsetAccuracy": "5px"
    }
  }, [_c('div', {
    staticClass: ["taste_live_content"],
    attrs: {
      "[[repeat]]": {
        "@expression": "tasteLiveData['items'].length",
        "@alias": "index"
      }
    }
  }, [_c('image', {
    staticClass: ["taste_live_image"],
    attrs: {
      "src": {
        "@binding": "tasteLiveData['items'][index - 1].pic_url"
      }
    }
  }), _c('text', {
    staticClass: ["taste_live_maintitle"],
    attrs: {
      "value": {
        "@binding": "tasteLiveData['items'][index-1].title"
      }
    }
  }), _c('text', {
    staticClass: ["taste_live_summary"],
    attrs: {
      "value": {
        "@binding": "tasteLiveData['items'][index-1].summary"
      }
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"]
  }, [_vm._v(" 更多")]), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule9.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54352c81"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flexDirection": "column",
    "width": "750",
    "height": "1115",
    "marginTop": "20",
    "backgroundColor": "#FFFFFF"
  },
  "taste_live_title": {
    "paddingLeft": "25",
    "paddingRight": "25",
    "flexDirection": "row",
    "width": "750",
    "height": "104",
    "alignItems": "center"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "35"
  },
  "title_more": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "25",
    "top": "0",
    "bottom": "0",
    "alignItems": "center"
  },
  "more_text": {
    "fontSize": "24",
    "color": "#999999"
  },
  "more_img": {
    "marginLeft": "8",
    "width": "30",
    "height": "30"
  },
  "main_image_container": {
    "width": "750",
    "height": "170",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "main_image": {
    "width": "700",
    "height": "170"
  },
  "goods_content": {
    "marginTop": "15",
    "width": "750",
    "flexDirection": "row",
    "height": "400",
    "paddingRight": "25",
    "paddingLeft": "25",
    "justifyContent": "space-between"
  },
  "single_goods": {
    "flexDirection": "column",
    "width": "225",
    "height": "400"
  },
  "goods_image_container": {
    "backgroundColor": "#F8F8F8",
    "width": "225",
    "height": "225",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottomLeftRadius": "5",
    "borderBottomRightRadius": "5",
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5"
  },
  "goods_image": {
    "width": "180",
    "height": "180"
  },
  "goods_title": {
    "marginTop": "10",
    "lines": 2,
    "fontSize": "28",
    "textOverflow": "ellipsis"
  },
  "goods_price": {
    "flexDirection": "row",
    "marginTop": "15",
    "alignItems": "flex-end"
  },
  "rmb_symbol": {
    "marginBottom": "5",
    "fontSize": "20",
    "color": "#A92112"
  },
  "price_text": {
    "fontSize": "30",
    "color": "#A92112"
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule9",
    props: ["productCategoryData"],
    data: function data() {
        return {
            exceed_text: {
                visibility: "hidden"
            }
        };
    },
    methods: {
        goodsPrice: function goodsPrice(index) {
            return _util2.default.formatMoney(this.productCategoryData['items'][index].price_min);
        }
    }
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["taste_live_title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.productCategoryData.title))]), _vm._m(0)]), _c('div', {
    staticClass: ["main_image_container"]
  }, [_c('image', {
    staticClass: ["main_image"],
    attrs: {
      "src": _vm.productCategoryData.pic_url
    }
  })]), _vm._l((_vm.productCategoryData['items'].length / 3), function(index1) {
    return _c('div', {
      staticClass: ["goods_content"]
    }, _vm._l((3), function(index2) {
      return _c('div', {
        staticClass: ["single_goods"]
      }, [_c('div', {
        staticClass: ["goods_image_container"]
      }, [_c('image', {
        staticClass: ["goods_image"],
        attrs: {
          "src": _vm.productCategoryData['items'][(index1 - 1) * 3 + (index2 - 1)].pic_url
        }
      })]), _c('text', {
        staticClass: ["goods_title"]
      }, [_vm._v(_vm._s(_vm.productCategoryData['items'][(index1 - 1) * 3 + (index2 - 1)].name))]), _c('div', {
        staticClass: ["goods_price"]
      }, [_c('text', {
        staticClass: ["rmb_symbol"]
      }, [_vm._v("¥")]), _c('text', {
        staticClass: ["price_text"]
      }, [_vm._v(_vm._s(_vm.goodsPrice((index1 - 1) * 3 + (index2 - 1))))]), _c('text', {
        staticClass: ["rmb_symbol"],
        style: _vm.exceed_text
      }, [_vm._v("起")])])])
    }))
  })], 2)
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["taste_live_title"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "productCategoryData.title"
      }
    }
  }), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"],
    attrs: {
      "value": " 更多"
    }
  }), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])]), _c('div', {
    staticClass: ["main_image_container"]
  }, [_c('image', {
    staticClass: ["main_image"],
    attrs: {
      "src": {
        "@binding": "productCategoryData.pic_url"
      }
    }
  })]), _c('div', {
    staticClass: ["goods_content"],
    attrs: {
      "[[repeat]]": {
        "@expression": "productCategoryData['items'].length/3",
        "@alias": "index1"
      }
    }
  }, [_c('div', {
    staticClass: ["single_goods"],
    attrs: {
      "[[repeat]]": {
        "@expression": "3",
        "@alias": "index2"
      }
    }
  }, [_c('div', {
    staticClass: ["goods_image_container"]
  }, [_c('image', {
    staticClass: ["goods_image"],
    attrs: {
      "src": {
        "@binding": "productCategoryData['items'][(index1 - 1) * 3 + (index2 - 1)].pic_url"
      }
    }
  })]), _c('text', {
    staticClass: ["goods_title"],
    attrs: {
      "value": {
        "@binding": "productCategoryData['items'][(index1-1)*3+(index2-1)].name"
      }
    }
  }), _c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice((index1-1)*3+(index2-1))"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"]
  }, [_vm._v(" 更多")]), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list_content"]
  }, _vm._l((_vm.homepageDatas), function(item, index) {
    return _c('cell', {
      staticClass: ["cell_content"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(item.module_key === 'banner') ? _c('div', [_c('recommend_module1', {
      attrs: {
        "swipebanner": item.data
      }
    })], 1) : (item.module_key === 'kingkong') ? _c('div', [_c('recommend_module2', {
      attrs: {
        "menupicture": item.data
      }
    })], 1) : (item.module_key === 'single_image') ? _c('div', {
      staticClass: ["single_image_container"]
    }, [_c('image', {
      staticClass: ["single_picture"],
      attrs: {
        "src": item.data.pic_url
      }
    })]) : (item.module_key === 'recommend') ? _c('div', [_c('recommend_module3', {
      attrs: {
        "recommendData": item.data
      }
    })], 1) : (item.module_key === 'crowd_funding') ? _c('div', [_c('recommend_module4', {
      attrs: {
        "crowdFundingData": item.data
      }
    })], 1) : (item.module_key === 'product_hot') ? _c('div', [_c('recommend_module5', {
      attrs: {
        "productHotData": item.data
      }
    })], 1) : (item.module_key === 'star_product') ? _c('div', [_c('recommend_module6', {
      attrs: {
        "starProductData": item.data
      }
    })], 1) : (item.module_key === 'flashsale') ? _c('div', [_c('recommend_module7', {
      attrs: {
        "flashsaleData": item.data
      }
    })], 1) : (item.module_key === 'taste_live') ? _c('div', [_c('recommend_module8', {
      attrs: {
        "tasteLiveData": item.data
      }
    })], 1) : (item.module_key === 'product_category') ? _c('div', [_c('recommend_module9', {
      attrs: {
        "productCategoryData": item.data
      }
    })], 1) : (item.module_key === '' || item.module_key === null || item.module_key === undefined) ? _c('div', [_c('recommend_module10', {
      attrs: {
        "recommendData": item.data
      }
    })], 1) : _c('div', [_c('text', [_vm._v(_vm._s(item.module_key) + "--" + _vm._s(index))])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\CrowdPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a4cd1608"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    name: "CrowdPage"
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("众筹")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\BrandPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03ffadd6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    name: "BrandPage"
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("品牌")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "showScrollbar": "false",
      "scrollDirection": "horizontal"
    }
  }, [_vm._l((_vm.tabTags), function(item, index) {
    return _c('text', {
      ref: 'tag' + index,
      refInFor: true,
      class: ['tb_tag', index === _vm.selectIndex ? 'tb_tag_select' : 'tb_tag_unselect'],
      on: {
        "click": function($event) {
          _vm.click(index, $event)
        }
      }
    }, [_vm._v(_vm._s(item.name) + "\n            ")])
  }), _c('div', {
    staticClass: ["tb_tag_line"],
    style: _vm.tbTagLineStyle
  }, [_c('div', {
    staticClass: ["select_line"]
  })])], 2), _vm._m(0)]), _c('slider', {
    ref: "slider",
    staticClass: ["slider"],
    attrs: {
      "infinite": "false",
      "offsetXAccuracy": "0.0001px",
      "scrollable": "true",
      "keepIndex": "true",
      "index": _vm.selectIndex
    },
    on: {
      "change": function($event) {
        _vm.onSliderChange($event)
      },
      "scroll": function($event) {
        _vm.onSliderScroll($event)
      }
    }
  }, _vm._l((_vm.tabTags), function(item, index) {
    return _c('div', {
      staticClass: ["web_root"]
    }, [(index == 0) ? _c('recommend_page') : (index == 17) ? _c('crowd_page') : (index == 18) ? _c('brand_page') : (0 < index < 17) ? _c('web', {
      staticClass: ["web_content"],
      attrs: {
        "src": item.link_url
      }
    }) : _vm._e()], 1)
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tb_dropdown"]
  }, [_c('image', {
    staticClass: ["tb_dropdown_ico"],
    attrs: {
      "src": "http://www.lidiwo.com/main_cat_dropdown.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home_title'), _c('home_tab_layout')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("2222222222222")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("333333333333333")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("44444444444444444")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("55555555555555555")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-wrapper"]
  }, [_c('slider', {
    staticClass: ["r-box_container"],
    attrs: {
      "index": this.selectIndex
    }
  }, _vm._l((5), function(flag) {
    return _c('div', {
      staticClass: ["r-box"]
    }, [(flag === 1) ? _c('home_page') : _vm._e(), (flag === 2) ? _c('classify_page') : _vm._e(), (flag === 3) ? _c('taste_page') : _vm._e(), (flag === 4) ? _c('shopping_cart_page') : _vm._e(), (flag === 5) ? _c('person_page') : _vm._e()], 1)
  })), _c('navigation_bar', {
    on: {
      "selectIndex": _vm.getSelectIndex
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(86)
)

/* script */
__vue_exports__ = __webpack_require__(87)

/* template */
var __vue_template__ = __webpack_require__(88)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "right": "0",
    "left": "0"
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _NavigationBar = __webpack_require__(1);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _HomePage = __webpack_require__(2);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _ClassifyPage = __webpack_require__(3);

var _ClassifyPage2 = _interopRequireDefault(_ClassifyPage);

var _TastePage = __webpack_require__(4);

var _TastePage2 = _interopRequireDefault(_TastePage);

var _ShoppingCartPage = __webpack_require__(5);

var _ShoppingCartPage2 = _interopRequireDefault(_ShoppingCartPage);

var _PersonPage = __webpack_require__(6);

var _PersonPage2 = _interopRequireDefault(_PersonPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: 'App',
    data: function data() {
        return {
            selectIndex: 0
        };
    },
    methods: {
        getSelectIndex: function getSelectIndex(index) {
            this.selectIndex = index;
        }
    },
    components: {
        "navigation_bar": _NavigationBar2.default,
        "home_page": _HomePage2.default,
        "classify_page": _ClassifyPage2.default,
        "taste_page": _TastePage2.default,
        "shopping_cart_page": _ShoppingCartPage2.default,
        "person_page": _PersonPage2.default
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(90)
)

/* script */
__vue_exports__ = __webpack_require__(91)

/* template */
var __vue_template__ = __webpack_require__(92)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\webSpace\\weex_youpin\\src\\components\\RecommendModule10.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24c51907"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "marginTop": "20",
    "flexDirection": "column",
    "width": "750",
    "backgroundColor": "#FFFFFF"
  },
  "taste_live_title": {
    "paddingLeft": "25",
    "paddingRight": "25",
    "flexDirection": "row",
    "width": "750",
    "height": "104",
    "alignItems": "center"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "35"
  },
  "title_more": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "25",
    "top": "0",
    "bottom": "0",
    "alignItems": "center"
  },
  "more_text": {
    "fontSize": "24",
    "color": "#999999"
  },
  "more_img": {
    "marginLeft": "8",
    "width": "30",
    "height": "30"
  },
  "goods_content": {
    "width": "750",
    "height": "510",
    "flexDirection": "row",
    "paddingRight": "25",
    "paddingLeft": "25",
    "justifyContent": "space-between"
  },
  "single_goods": {
    "flexDirection": "column",
    "width": "345",
    "height": "510"
  },
  "goods_image_container": {
    "backgroundColor": "#FAFAFA",
    "width": "345",
    "height": "316",
    "alignItems": "center",
    "justifyContent": "center",
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5"
  },
  "goods_image": {
    "width": "250",
    "height": "250"
  },
  "goods_summary_container": {
    "width": "345",
    "height": "63",
    "paddingLeft": "5",
    "paddingRight": "5",
    "backgroundColor": "#F6F2F1",
    "borderBottomLeftRadius": "5",
    "borderBottomRightRadius": "5",
    "justifyContent": "center"
  },
  "goods_summary": {
    "color": "#9F8052",
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "25"
  },
  "goods_title": {
    "color": "#333333",
    "marginTop": "10",
    "paddingRight": "5",
    "paddingLeft": "5",
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "28"
  },
  "goods_price": {
    "paddingLeft": "5",
    "flexDirection": "row",
    "marginTop": "15",
    "alignItems": "flex-end"
  },
  "rmb_symbol": {
    "marginBottom": "5",
    "fontSize": "20",
    "color": "#A92112"
  },
  "price_text": {
    "fontSize": "30",
    "color": "#A92112"
  },
  "bottom_content": {
    "width": "750",
    "height": "333",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#F4F4F4"
  },
  "bottom_line": {
    "fontSize": "22",
    "color": "#999999"
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    name: "RecommendModule10",
    props: ["recommendData"],
    data: function data() {
        return {
            exceed_text: {
                visibility: "hidden"
            }
        };
    },
    methods: {
        goodsPrice: function goodsPrice(index) {
            return _util2.default.formatMoney(this.recommendData[index].price);
        }
    },
    created: function created() {}
};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_vm._m(0), _vm._l((_vm.recommendData.length / 2), function(index1) {
    return _c('div', {
      staticClass: ["goods_content"]
    }, _vm._l((2), function(index2) {
      return _c('div', {
        staticClass: ["single_goods"]
      }, [_c('div', {
        staticClass: ["goods_image_container"]
      }, [_c('image', {
        staticClass: ["goods_image"],
        attrs: {
          "src": _vm.recommendData[(index1 - 1) * 2 + (index2 - 1)].pic_url
        }
      })]), _c('div', {
        staticClass: ["goods_summary_container"]
      }, [_c('text', {
        staticClass: ["goods_summary"]
      }, [_vm._v(_vm._s(_vm.recommendData[(index1 - 1) * 2 + (index2 - 1)].summary))])]), _c('text', {
        staticClass: ["goods_title"]
      }, [_vm._v(_vm._s(_vm.recommendData[(index1 - 1) * 2 + (index2 - 1)].name))]), _c('div', {
        staticClass: ["goods_price"]
      }, [_c('text', {
        staticClass: ["rmb_symbol"]
      }, [_vm._v("¥")]), _c('text', {
        staticClass: ["price_text"]
      }, [_vm._v(_vm._s(_vm.goodsPrice((index1 - 1) * 2 + (index2 - 1))))]), _c('text', {
        staticClass: ["rmb_symbol"],
        style: _vm.exceed_text
      }, [_vm._v("起")])])])
    }))
  }), _vm._m(1)], 2)
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["taste_live_title"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": "专属推荐"
    }
  }), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"],
    attrs: {
      "value": " 更多"
    }
  }), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])]), _c('div', {
    staticClass: ["goods_content"],
    attrs: {
      "[[repeat]]": {
        "@expression": "recommendData.length/2",
        "@alias": "index1"
      }
    }
  }, [_c('div', {
    staticClass: ["single_goods"],
    attrs: {
      "[[repeat]]": {
        "@expression": "2",
        "@alias": "index2"
      }
    }
  }, [_c('div', {
    staticClass: ["goods_image_container"]
  }, [_c('image', {
    staticClass: ["goods_image"],
    attrs: {
      "src": {
        "@binding": "recommendData[(index1 - 1) * 2 + (index2 - 1)].pic_url"
      }
    }
  })]), _c('div', {
    staticClass: ["goods_summary_container"]
  }, [_c('text', {
    staticClass: ["goods_summary"],
    attrs: {
      "value": {
        "@binding": "recommendData[(index1-1)*2+(index2-1)].summary"
      }
    }
  })]), _c('text', {
    staticClass: ["goods_title"],
    attrs: {
      "value": {
        "@binding": "recommendData[(index1-1)*2+(index2-1)].name"
      }
    }
  }), _c('div', {
    staticClass: ["goods_price"]
  }, [_c('text', {
    staticClass: ["rmb_symbol"],
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price_text"],
    attrs: {
      "value": {
        "@binding": "goodsPrice((index1-1)*2+(index2-1))"
      }
    }
  }), _c('text', {
    staticClass: ["rmb_symbol"],
    staticStyle: {
      "@binding": "exceed_text"
    },
    attrs: {
      "value": "起"
    }
  })])])]), _c('div', {
    staticClass: ["bottom_content"]
  }, [_c('text', {
    staticClass: ["bottom_line"],
    attrs: {
      "value": "————   底线在此，不能更低了   ————"
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["taste_live_title"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("专属推荐")]), _c('div', {
    staticClass: ["title_more"]
  }, [_c('text', {
    staticClass: ["more_text"]
  }, [_vm._v(" 更多")]), _c('image', {
    staticClass: ["more_img"],
    attrs: {
      "src": "http://www.lidiwo.com/arrow_rounded.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bottom_content"]
  }, [_c('text', {
    staticClass: ["bottom_line"]
  }, [_vm._v("————   底线在此，不能更低了   ————")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);