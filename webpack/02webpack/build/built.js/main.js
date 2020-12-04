/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! default exports */
/*! export age [provided] [no usage info] [missing usage info prevents renaming] */
/*! export name [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"jack\\\",\\\"age\\\":18}\");\n\n//# sourceURL=webpack://02webpack/./src/data.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n/*\r\n    index.js : webpack入口起点文件\r\n\r\n    1. 运行指令：\r\n        开发环境：webpack ./src/index.js -o ./build/built.js --mode=development\r\n            webpack会以 ./src/index.js 为入口文件开始打包 打包后输出到 ./build/built.js\r\n            整体打包环境，是开发环境\r\n        生产环境：webpack ./src/index.js -o ./build/built.js --mode=production\r\n            webpack会以 ./src/index.js 为入口文件开始打包 打包后输出到 ./build/built.js\r\n            整体打包环境，是生产环境\r\n\r\n    2. 结论\r\n        1. webpack只能处理js/json,不能处理css/img等其它资源（除非应用插件）\r\n        2. 生产环境比开发环境多一个压缩js代码\r\n        3. 生产环境和开发环境将ES6模块化 编译成浏览器能识别的模块化\r\n\r\n            \r\n*/\r\n\r\n\r\nconsole.log(_data_json__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\n// import './index.css';\r\n\r\nfunction add(x,y){\r\n    return x+y;\r\n}\r\n\r\nconsole.log(add(1,2));\n\n//# sourceURL=webpack://02webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;