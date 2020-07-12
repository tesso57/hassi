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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst app = new PIXI.Application({\r\n    height: 600, //動的に変えたい\r\n    width: 1000,//動的に変えたい\r\n    backgroundColor: 0x888888,\r\n});\r\n//index.htmlのappタグと紐づけ(mainタグ)\r\ndocument.getElementById('app').appendChild(app.view);\r\napp.stage.interactive = true;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n//背景\r\nlet seaBackground = new PIXI.Sprite.from('src/img/bg_natural_ocean.jpg');\r\nseaBackground.width = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screen.width;//無理やり引き延ばす。\r\nseaBackground.height = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screen.height;//無理やり引き延ばす。\r\nconsole.log(seaBackground.height,seaBackground.width);\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(seaBackground);\r\n\r\nlet hassiTexture = new PIXI.Texture.from('src/img/chinanago.png');\r\nlet hassiSprite = new PIXI.Sprite(hassiTexture);\r\nconsole.log(hassiSprite.height,hassiSprite._height);\r\nhassiSprite.anchor.x = 0.5;//こうすることによって画像の真ん中で考えることができる。\r\nhassiSprite.anchor.y = 0.5;\r\n\r\nhassiSprite.x = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screen.width / 2;\r\nhassiSprite.y = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screen.height - 100;\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(hassiSprite);\r\n\r\n//filterのテクスチャを呼ぶ,filterにする。\r\nconst displacementSprite = new PIXI.Sprite.from('src/img/displacement_map_repeat.jpg');\r\ndisplacementSprite.anchor.x = 0.5;\r\ndisplacementSprite.anchor.y = 0.5;\r\n// Make sure the sprite is wrapping.\r\ndisplacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;\r\nconst displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\r\ndisplacementFilter.padding = 10;\r\n//初期値を合わせる。\r\ndisplacementSprite.position = hassiSprite.position;\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(displacementSprite);\r\n\r\nhassiSprite.filters = [displacementFilter];\r\n\r\ndisplacementFilter.scale.x = 30;\r\ndisplacementFilter.scale.y = 60;\r\n//関数の短い書き方\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ticker.add(() => {\r\n    // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.\r\n    displacementSprite.x++;\r\n    // Reset x to 0 when it's over width to keep values from going to very huge numbers.\r\n    if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }\r\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });