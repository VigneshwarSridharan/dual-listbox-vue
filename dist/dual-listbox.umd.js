(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dual-listbox"] = factory();
	else
		root["dual-listbox"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1311":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DualListBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa59");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DualListBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DualListBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DualListBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "27f1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angle-left-solid.b735719b.svg";

/***/ }),

/***/ "3407":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angle-double-right-solid.67a570c7.svg";

/***/ }),

/***/ "667a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angle-right-solid.eef567e9.svg";

/***/ }),

/***/ "aa59":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cf78":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angle-double-left-solid.efde4c1b.svg";

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9aab5f5a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DualListBox.vue?vue&type=template&id=3b6e83c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-box-wrapper"},[_c('div',[_c('ul',{staticClass:"list-box"},_vm._l((_vm.source),function(item,key){return _c('li',{key:key,staticClass:"list-item",style:({backgroundColor: item.selected ? '#eeeeee':''}),on:{"click":function($event){return _vm.selectSource(key)}}},[_vm._v(_vm._s(item.label))])}),0),_c('div',{staticClass:"bulk-action"},[_c('div',{staticClass:"btn-action select-all",on:{"click":_vm.selectAllSource}},[_vm._v("All")]),_c('div',{staticClass:"btn-action deselect-all",on:{"click":_vm.deSelectAllSource}},[_vm._v("None")])])]),_c('div',{staticClass:"actions"},[_c('div',{staticClass:"btn-action",on:{"click":_vm.moveDestination}},[_c('img',{attrs:{"src":_vm.angleRight,"height":"18"}})]),_c('div',{staticClass:"btn-action",on:{"click":_vm.moveAllDestination}},[_c('img',{attrs:{"src":_vm.angleDoubleRight,"height":"18"}})]),_c('div',{staticClass:"btn-action",on:{"click":_vm.moveSource}},[_c('img',{attrs:{"src":_vm.angleLeft,"height":"18"}})]),_c('div',{staticClass:"btn-action",on:{"click":_vm.moveAllSource}},[_c('img',{attrs:{"src":_vm.angleDoubleLeft,"height":"18"}})])]),_c('div',[_c('ul',{staticClass:"list-group list-group-flush border rounded list-box"},_vm._l((_vm.destination),function(item,key){return _c('li',{key:key,staticClass:"list-item",style:({backgroundColor: item.selected ? '#f5f5f5':''}),on:{"click":function($event){return _vm.selectDestination(key)}}},[_vm._v(_vm._s(item.label))])}),0),_c('div',{staticClass:"bulk-action"},[_c('div',{staticClass:"btn-action select-all",on:{"click":_vm.selectAllDestination}},[_vm._v("All")]),_c('div',{staticClass:"btn-action deselect-all",on:{"click":_vm.deSelectAllDestination}},[_vm._v("None")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DualListBox.vue?vue&type=template&id=3b6e83c8&

// EXTERNAL MODULE: ./src/assets/angle-right-solid.svg
var angle_right_solid = __webpack_require__("667a");
var angle_right_solid_default = /*#__PURE__*/__webpack_require__.n(angle_right_solid);

// EXTERNAL MODULE: ./src/assets/angle-left-solid.svg
var angle_left_solid = __webpack_require__("27f1");
var angle_left_solid_default = /*#__PURE__*/__webpack_require__.n(angle_left_solid);

// EXTERNAL MODULE: ./src/assets/angle-double-left-solid.svg
var angle_double_left_solid = __webpack_require__("cf78");
var angle_double_left_solid_default = /*#__PURE__*/__webpack_require__.n(angle_double_left_solid);

// EXTERNAL MODULE: ./src/assets/angle-double-right-solid.svg
var angle_double_right_solid = __webpack_require__("3407");
var angle_double_right_solid_default = /*#__PURE__*/__webpack_require__.n(angle_double_right_solid);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DualListBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DualListBoxvue_type_script_lang_js_ = ({
  props: {
    source: Array,
    destination: Array
  },
  data: function () {
    return {
      angleRight: angle_right_solid_default.a,
      angleLeft: angle_left_solid_default.a,
      angleDoubleLeft: angle_double_left_solid_default.a,
      angleDoubleRight: angle_double_right_solid_default.a
    };
  },
  methods: {
    moveDestination: function () {
      let selected = this.source.filter(f => f.selected);
      selected = selected.map(item => ({ ...item,
        selected: false
      }));
      let destination = [...selected, ...this.destination];
      let source = this.source.filter(f => !f.selected);
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveSource: function () {
      let selected = this.destination.filter(f => f.selected);
      selected = selected.map(item => ({ ...item,
        selected: false
      }));
      let source = [...selected, ...this.source];
      let destination = this.destination.filter(f => !f.selected);
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveAllDestination: function () {
      let destination = [...this.source.map(item => ({ ...item,
        selected: false
      })), ...this.destination];
      let source = [];
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveAllSource: function () {
      let source = [...this.destination.map(item => ({ ...item,
        selected: false
      })), ...this.source];
      let destination = [];
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectDestination: function (key) {
      let source = this.source;
      let destination = this.destination.map((i, k) => {
        if (k === key) {
          i.selected = !i.selected;
        }

        return i;
      });
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectSource: function (key) {
      let destination = this.destination;
      let source = this.source.map((i, k) => {
        if (k === key) {
          i.selected = !i.selected;
        }

        return i;
      });
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectAllSource: function () {
      let source = this.source.map(item => ({ ...item,
        selected: true
      }));
      let destination = this.destination;
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    deSelectAllSource: function () {
      let source = this.source.map(item => ({ ...item,
        selected: false
      }));
      let destination = this.destination;
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectAllDestination: function () {
      let destination = this.destination.map(item => ({ ...item,
        selected: true
      }));
      let source = this.source;
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    deSelectAllDestination: function () {
      let destination = this.destination.map(item => ({ ...item,
        selected: false
      }));
      let source = this.source;
      this.$emit("onChangeList", {
        source,
        destination
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/DualListBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DualListBoxvue_type_script_lang_js_ = (DualListBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DualListBox.vue?vue&type=style&index=0&lang=css&
var DualListBoxvue_type_style_index_0_lang_css_ = __webpack_require__("1311");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/DualListBox.vue






/* normalize component */

var component = normalizeComponent(
  components_DualListBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DualListBox = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (DualListBox);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=dual-listbox.umd.js.map