(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("alertTextShowHide", [], factory);
	else if(typeof exports === 'object')
		exports["alertTextShowHide"] = factory();
	else
		root["alertTextShowHide"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: element_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_text", function() { return element_text; });
var DEFAULT_LETTER_DURATION = 10;
var DEFAULT_DURATION = 5000;

function element_text(element, text, duration, letter_duration, letter_bound) {
  duration = duration || DEFAULT_DURATION;
  letter_duration = letter_duration || DEFAULT_LETTER_DURATION;
  flash_appear(element, text, 0, letter_duration, letter_bound);
  setTimeout(function(){ flash_dissapear(element, text, text.length, letter_duration, letter_bound); }, duration);
}

function flash_appear(element, text, i, letter_duration, letter_bound) {
  if (i <= text.length) {
    element.innerHTML = text.substring(0, i);
    setTimeout(function(){
      var jump = 1;
      if (letter_bound) {
        jump = text.substring(i + 1).indexOf(letter_bound);
        if (jump == -1) {
          jump = text.length;
        } else {
          jump = jump + 1;
        }
      }
      flash_appear(element, text, i + jump, letter_duration, letter_bound);
    }, letter_duration);
  } else {
    element.innerHTML = text;
  }
}

function flash_dissapear(element, text, i, letter_duration, letter_bound) {
  if (text == undefined)
    text = element.innerHTML;
  if (i == undefined)
    i = text.length-1;
  if (i > 0) {
    element.innerHTML = text.substring(0, i);
    setTimeout(function(){
      var jump = 1;
      if (letter_bound) {
        jump = text.substring(0, i - 1).lastIndexOf(letter_bound);
        if (jump == -1) {
          jump = text.length;
        } else {
          jump = i - jump
        }
      }
      flash_dissapear(element, text, i - jump, letter_duration, letter_bound);
    }, letter_duration);
  } else {
    element.innerHTML = '';
  }
}


/***/ })

/******/ });
});
//# sourceMappingURL=element_text.js.map