(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'vButton',

  inject: {
    prefix: {
      default: 'vext-'
    }
  },

  props: {
    shape: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return ['normal', 'text', 'warning', 'ghost'].indexOf(value) !== -1;
      }
    },
    level: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return ['normal', 'primary', 'secondary', 'dark', 'light'].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    htmlType: {
      type: String,
      default: 'button',
      validator: function (value) {
        return ['submit', 'reset', 'button'].indexOf(value) !== -1;
      }
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },

  computed: {
    type() {
      const typeMap = {
        normal: {
          primary: 'primary',
          secondary: 'secondary',
          normal: 'normal',
          dark: 'primary',
          light: 'normal'
        },
        ghost: {
          primary: 'dark',
          secondary: 'dark',
          normal: 'light',
          dark: 'dark',
          light: 'light'
        },
        warning: {
          primary: 'primary',
          secondary: 'normal',
          normal: 'normal',
          dark: 'primary',
          light: 'normal'
        },
        text: {
          primary: 'primary',
          secondary: 'secondary',
          normal: 'normal',
          dark: 'primary',
          light: 'normal'
        }
      };

      // console.log(typeMap[this.shape][this.level])
      return typeMap[this.shape][this.level];
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'vButtonGroup',
  inject: {
    prefix: {
      default: 'vext-'
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_button_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_button_group_vue__ = __webpack_require__(6);





__WEBPACK_IMPORTED_MODULE_0__view_button_vue__["a" /* default */].install = function (Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__view_button_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__view_button_vue__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_1__view_button_group_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__view_button_group_vue__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_0__view_button_vue__["a" /* default */].vButtonGroup = __WEBPACK_IMPORTED_MODULE_1__view_button_group_vue__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__view_button_vue__["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_482855a0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(5);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_482855a0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:( _obj = {}, _obj[(_vm.prefix + "button")] = true, _obj[("" + _vm.prefix + _vm.size)] = _vm.size, _obj[(_vm.prefix + "button-" + _vm.shape)] = _vm.shape, _obj[(_vm.prefix + "button-" + _vm.type)] = _vm.type, _obj[(_vm.prefix + "button-loading")] = _vm.loading, _obj[_vm.className] = _vm.className, _obj ),attrs:{"disabled":_vm.disabled,"autofocus":_vm.autofocus},on:{"click":_vm.handleClick}},[(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
var _obj;}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fa9cc864_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(7);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fa9cc864_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_usr_local_lib_node_modules_ali_vext_bin_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vext-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map