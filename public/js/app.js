/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/WhatsAppButton.js":
/*!****************************************!*\
  !*** ./resources/js/WhatsAppButton.js ***!
  \****************************************/
/***/ ((module) => {

function init() {
  var whatsappButton;
  var message;
  var second = 1000; //1000ms

  var link = "https://api.whatsapp.com/send?phone=5493434258605&text=Hola!%20Quisiera%20realizar%20una%20consulta.%F0%9F%98%81";
  whatsappButton = document.createElement("div");
  whatsappButton.id = "WhatsAppButton";
  document.body.appendChild(whatsappButton);
  whatsappButton.innerHTML = "\n        <img src=\"img/icons/whatsapp.svg\" alt=\"WhatsApp\" class=\"animate__animated animate__delay-2s animate__backInUp\">\n        <span class=\"message animate__animated animate__backInRight\">H\xE1blanos por WhatsApp!</span>\n    ";
  message = document.querySelector("#WhatsAppButton > .message");
  setTimeout(function () {
    message.style.display = "block"; //show message

    setTimeout(function () {
      message.classList.remove("animate__backInRight");
      setInterval(function () {
        message.classList.toggle("animate__bounce");
      }, second * 8);
    }, second);
  }, second * 5);
  whatsappButton.addEventListener('click', function () {
    location.href = link;
  });
}

module.exports = {
  init: init
};

/***/ }),

/***/ "./resources/js/animationsHandler.js":
/*!*******************************************!*\
  !*** ./resources/js/animationsHandler.js ***!
  \*******************************************/
/***/ ((module) => {

function init() {
  console.log("animationsHandler");
}

module.exports = {
  init: init
};

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var screenAdaptations = __webpack_require__(/*! ./screenAdaptations */ "./resources/js/screenAdaptations.js");

var animationsHandler = __webpack_require__(/*! ./animationsHandler */ "./resources/js/animationsHandler.js");

var menu = __webpack_require__(/*! ./menu */ "./resources/js/menu.js");

var whatsappButton = __webpack_require__(/*! ./WhatsAppButton */ "./resources/js/WhatsAppButton.js");

window.onload = function () {
  screenAdaptations.init();
  animationsHandler.init();
  menu.init();
  whatsappButton.init();
};

/***/ }),

/***/ "./resources/js/menu.js":
/*!******************************!*\
  !*** ./resources/js/menu.js ***!
  \******************************/
/***/ ((module) => {

var mobileMenu;
var mainMenu;
var logoAndTitle;
var openMenuButton;
var closeMenuButton;
var header;
var coverPage;
var hash;

function init() {
  mobileMenu = window.screen.width > 960 ? false : true;
  mainMenu = document.querySelector("#mainNavigation > ul");
  logoAndTitle = document.querySelectorAll("#siteIdentity > img, #siteIdentity h2");
  openMenuButton = document.getElementById("openMenu");
  closeMenuButton = document.getElementById("closeMenu");
  header = document.getElementById("header");
  coverPage = document.getElementById("coverPage");
  hash = window.location.hash; //Only when the mobile menu is applied.

  if (mobileMenu) {
    mainMenu.style.display = "none";
    mainMenu.classList.add("animate__fadeOutLeftBig");
    openMenuButton.addEventListener("click", toggleMenu);
    closeMenuButton.addEventListener("click", toggleMenu);
  } //Event on clicking on a item of the main menu (main navigation).


  mainMenu.querySelectorAll("li").forEach(function (li) {
    if (mobileMenu) {
      li.addEventListener("click", toggleMenu);
    }

    li.addEventListener("click", clickOnMenuItemHandler);
  }); //Go to a section when the hash is changed.

  window.addEventListener("hashchange", function () {
    hash = window.location.hash;
    scrollToSection();
  }); //Event on clicking on logo or title in header.

  logoAndTitle.forEach(function (element) {
    return element.addEventListener("click", function () {
      location.hash = "";
      setTimeout(function () {
        return location.hash = "_";
      }, 1000);
    });
  });
  scrollToSection();
}

;
/**
 * Open or close the main menu (only for mobile menu).
 */

function toggleMenu() {
  var currentDisplay = mainMenu.style.display;

  if (currentDisplay === "none") {
    //Open menu
    mainMenu.classList.replace("animate__fadeOutLeftBig", "animate__fadeInLeftBig");
    mainMenu.style.display = "block";
    openMenuButton.style.display = "none";
    closeMenuButton.style.display = "inline-block";
  } else {
    //Close menu
    mainMenu.classList.replace("animate__fadeInLeftBig", "animate__fadeOutLeftBig");
    setTimeout(function () {
      return mainMenu.style.display = "none";
    }, 300);
    closeMenuButton.style.display = "none";
    openMenuButton.style.display = "inline-block";
  }
}

function clickOnMenuItemHandler() {
  setTimeout(function () {
    return location.hash = "_";
  }, 1000);
}
/**
 * Scroll to a section acording to the url hash.
 */


function scrollToSection() {
  var y = 0;
  var doScroll = true;
  var element;
  var elementY;

  switch (hash) {
    case "#_aboutUs":
      element = document.getElementById("aboutUs");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_ourServices":
      element = document.getElementById("ourServices");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_whyChooseUs":
      element = document.getElementById("whyChooseUs");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_footer":
      element = document.getElementById("footer");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_":
      doScroll = false;
      break;
  }

  if (doScroll) {
    scrollTo(0, y);
  }
}

module.exports = {
  init: init
};

/***/ }),

/***/ "./resources/js/page.js":
/*!******************************!*\
  !*** ./resources/js/page.js ***!
  \******************************/
/***/ ((module) => {

"use strict";


function currentPage() {
  var currentPage = {
    isHomePage: true,
    isDevsPage: false
  };

  if (location.pathname.includes("/devs")) {
    currentPage.isHomePage = false;
    currentPage.isDevsPage = true;
  }

  return currentPage;
}

module.exports = {
  currentPage: currentPage
};

/***/ }),

/***/ "./resources/js/screenAdaptations.js":
/*!*******************************************!*\
  !*** ./resources/js/screenAdaptations.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var currentPage = __webpack_require__(/*! ./page */ "./resources/js/page.js").currentPage();

function init() {
  console.log("screenAdaptations");
  coverPage();
}

function coverPage() {
  var header = document.getElementById("header");
  var headerHeight = header.offsetHeight;
  var coverPage = document.getElementById("coverPage");
  coverPage.style.height = window.screen.height - headerHeight + "px"; //Margin for the coverPage equal to header height since the header has position:fixed.

  if (currentPage.isDevsPage) {
    document.querySelector("section.i0").style.marginTop = headerHeight + "px";
  } else if (currentPage.isHomePage) {
    coverPage.style.marginTop = headerHeight + "px";
  }
}

module.exports = {
  init: init
};

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/devs.css":
/*!********************************!*\
  !*** ./resources/css/devs.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/devs": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/devs"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/devs"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/devs"], () => (__webpack_require__("./resources/css/devs.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;