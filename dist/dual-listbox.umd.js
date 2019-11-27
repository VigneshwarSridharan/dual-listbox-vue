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

/***/ "7d05":
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9aab5f5a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DualListBox.vue?vue&type=template&id=202ae8c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-box-wrapper"},[_c('div',{staticClass:"list-box-item"},[_c('div',{staticClass:"search-box"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchSource),expression:"searchSource"}],attrs:{"type":"text","placeholder":"Search"},domProps:{"value":(_vm.searchSource)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchSource=$event.target.value}}}),(_vm.searchSource)?_c('div',{staticClass:"clear-search",attrs:{"title":"Clear Search"},on:{"click":function($event){_vm.searchSource=''}}},[_vm._v("×")]):_vm._e()]),_c('ul',{staticClass:"list-box"},[_vm._l((_vm.source.map(function (item,inx) { return (Object.assign({}, {inx: inx},item)); }).filter(function (item) { return item[_vm.label in item ? _vm.label : 'label'].toLowerCase().includes(_vm.searchSource.toLowerCase()); })),function(item,key){return _c('li',{key:key,class:'list-item'+ (item.selected ? ' active':''),on:{"click":function($event){return _vm.selectSource(_vm.searchSource?item.inx:key)}}},[_vm._v(_vm._s(item[_vm.label in item ? _vm.label : 'label']))])}),(_vm.source.filter(function (item) { return item[_vm.label in item ? _vm.label : 'label'].toLowerCase().includes(_vm.searchSource.toLowerCase()); }).length == 0 && _vm.source.length)?_c('li',{staticClass:"list-item"},[_vm._v("No results found")]):_vm._e()],2),_c('div',{staticClass:"bulk-action"},[_c('div',{staticClass:"select-all",on:{"click":_vm.selectAllSource}},[_vm._v("Select All")]),_c('div',{staticClass:"deselect-all",on:{"click":_vm.deSelectAllSource}},[_vm._v("None")])])]),_c('div',{staticClass:"actions"},[_c('div',{staticClass:"btn-action",on:{"click":_vm.moveDestination}},[_c('svg',{attrs:{"height":"18","viewBox":"0 0 256 512"}},[_c('path',{attrs:{"fill":"#ffffff","d":"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}})])]),_c('div',{staticClass:"btn-action",on:{"click":_vm.moveAllDestination}},[_c('svg',{attrs:{"height":"18","viewBox":"0 0 448 512"}},[_c('path',{attrs:{"fill":"#ffffff","d":"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"}})])]),_c('div',{staticClass:"btn-action",on:{"click":_vm.moveSource}},[_c('svg',{attrs:{"height":"18","viewBox":"0 0 256 512"}},[_c('path',{attrs:{"fill":"#ffffff","d":"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}})])]),_c('div',{staticClass:"btn-action",on:{"click":_vm.moveAllSource}},[_c('svg',{attrs:{"height":"18","viewBox":"0 0 448 512"}},[_c('path',{attrs:{"fill":"#ffffff","d":"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"}})])])]),_c('div',{staticClass:"list-box-item"},[_c('div',{staticClass:"search-box"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchDestination),expression:"searchDestination"}],attrs:{"type":"text","placeholder":"Search"},domProps:{"value":(_vm.searchDestination)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchDestination=$event.target.value}}}),(_vm.searchDestination)?_c('div',{staticClass:"clear-search",attrs:{"title":"Clear Search"},on:{"click":function($event){_vm.searchDestination=''}}},[_vm._v("×")]):_vm._e()]),_c('ul',{staticClass:"list-group list-group-flush border rounded list-box"},[_vm._l((_vm.destination.map(function (item,inx) { return (Object.assign({}, {inx: inx},item)); }).filter(function (item) { return item[_vm.label in item ? _vm.label : 'label'].toLowerCase().includes(_vm.searchDestination.toLowerCase()); })),function(item,key){return _c('li',{key:key,class:'list-item'+ (item.selected ? ' active':''),on:{"click":function($event){return _vm.selectDestination(_vm.searchDestination?item.inx:key)}}},[_vm._v(_vm._s(item[_vm.label in item ? _vm.label : 'label']))])}),(_vm.destination.filter(function (item) { return item[_vm.label in item ? _vm.label : 'label'].toLowerCase().includes(_vm.searchDestination.toLowerCase()); }).length == 0 && _vm.destination.length)?_c('li',{staticClass:"list-item"},[_vm._v("No results found")]):_vm._e()],2),_c('div',{staticClass:"bulk-action"},[_c('div',{staticClass:"select-all",on:{"click":_vm.selectAllDestination}},[_vm._v("Select All")]),_c('div',{staticClass:"deselect-all",on:{"click":_vm.deSelectAllDestination}},[_vm._v("None")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DualListBox.vue?vue&type=template&id=202ae8c0&

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

// EXTERNAL MODULE: ./src/assets/style.css
var style = __webpack_require__("7d05");

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    destination: Array,
    label: String
  },
  data: function () {
    return {
      angleRight: angle_right_solid_default.a,
      angleLeft: angle_left_solid_default.a,
      angleDoubleLeft: angle_double_left_solid_default.a,
      angleDoubleRight: angle_double_right_solid_default.a,
      searchSource: "",
      searchDestination: ""
    };
  },
  methods: {
    moveDestination: function () {
      let selected = this.source.filter(f => f.selected);
      if (!selected.length) return;
      selected = selected.map(item => ({ ...item,
        selected: false
      }));
      let destination = [...selected, ...this.destination];
      let source = this.source.filter(f => !f.selected);
      this.searchSource = "";
      this.searchDestination = "";
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveSource: function () {
      let selected = this.destination.filter(f => f.selected);
      if (!selected.length) return;
      selected = selected.map(item => ({ ...item,
        selected: false
      }));
      let source = [...selected, ...this.source];
      let destination = this.destination.filter(f => !f.selected);
      this.searchSource = "";
      this.searchDestination = "";
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
      this.searchSource = "";
      this.searchDestination = "";
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
      this.searchSource = "";
      this.searchDestination = "";
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