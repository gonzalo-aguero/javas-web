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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aboutUsAnimated;
var aboutUs;
var aboutUsTitle;
var aboutUsText;
var ourServicesAnimated;
var ourServices;
var ourServicesTitle;
var ourServicesItems;
var whyChooseUsAnimated;
var whyChooseUs;
var whyChooseUsTitle;
var whyChooseUsItems;
var footerAnimated;
var footer;
var footerTitle;
var footerItems;
var warnMsg = "This exception can be thrown simply by not being on the home page. In this case ignore it.\n";

var currentPage = __webpack_require__(/*! ./page */ "./resources/js/page.js").currentPage();

function init() {
  if (currentPage.isHomePage) {
    aboutUsAnimated = false;
    aboutUs = document.getElementById("aboutUs");
    aboutUsTitle = document.querySelector("#aboutUs .text > h2");
    aboutUsText = document.querySelector("#aboutUs .text > p");
    ourServicesAnimated = false;
    ourServices = document.getElementById("ourServices");
    ourServicesTitle = document.querySelector("#ourServices > h2");
    ourServicesItems = document.querySelectorAll("#ourServices .service");
    whyChooseUsAnimated = false;
    whyChooseUs = document.getElementById("whyChooseUs");
    whyChooseUsTitle = document.querySelector("#whyChooseUs .text > h2");
    whyChooseUsItems = document.querySelectorAll("#whyChooseUs .text > p");
    footerAnimated = false;
    footer = document.getElementById("footer");
    footerTitle = document.querySelector("#footer .text h2");
    footerItems = document.querySelectorAll("#footer .text p");
  } else if (currentPage.isDevsPage) {
    footerAnimated = false;
    footer = document.getElementById("footer");
    footerTitle = document.querySelector("#footer .text h2");
    footerItems = document.querySelectorAll("#footer .text p");
  }

  window.addEventListener("scroll", scrollEventsHandler);
}

function scrollEventsHandler() {
  var y = window.scrollY;
  var anticipation = 200;
  var footerCondition = !footerAnimated && y >= footer.offsetTop - 350;

  if (currentPage.isHomePage) {
    //Scroll events in the home page.
    try {
      if (!aboutUsAnimated && y >= aboutUs.offsetTop - anticipation) {
        aboutUsAnimations();
      } else if (!ourServicesAnimated && y >= ourServices.offsetTop - anticipation) {
        ourServicesAnimations();
      } else if (!whyChooseUsAnimated && y >= whyChooseUs.offsetTop - anticipation) {
        whyChooseUsAnimations();
      } else if (footerCondition) {
        footerAnimations();
      }
    } catch (error) {
      console.warn(warnMsg, error);
    }
  } else if (currentPage.isDevsPage) {
    //Scroll events in the devs page.
    try {
      if (footerCondition) {
        footerAnimations();
      }
    } catch (error) {
      console.warn("This exception can be thrown simply by not being on the devs page. In this case ignore it.\n", error);
    }
  } else {
    console.warn("no animations");
  }
}

function aboutUsAnimations() {
  aboutUsTitle.style.display = "block";
  setTimeout(function () {
    aboutUsText.style.display = "block";
  }, 500);
  aboutUsAnimated = true;
}

function ourServicesAnimations() {
  ourServicesTitle.style.display = "block";
  ourServicesItems.forEach(function (item, i) {
    var ms = (i + 1) * 300;
    setTimeout(function () {
      var counter = 0;
      var opacity = 0;
      var interval = setInterval(function () {
        if (opacity < 1) {
          opacity = opacity + counter / 50;
          item.style.opacity = opacity;
          counter++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, ms);
  });
  ourServicesAnimated = true;
}

function whyChooseUsAnimations() {
  whyChooseUsTitle.style.opacity = 1;
  whyChooseUsTitle.classList.add("animate__fadeInLeftBig");
  setTimeout(function () {
    whyChooseUsItems.forEach(function (item, i) {
      var ms = (i + 1) * 300;
      setTimeout(function () {
        item.style.opacity = 1;
        (i + 1) % 2 === 1 ? item.classList.add("animate__fadeInRight") : item.classList.add("animate__fadeInLeft");
      }, ms);
    });
  }, 500);
  whyChooseUsAnimated = true;
}

function footerAnimations() {
  footerTitle.style.opacity = 1;
  footerTitle.classList.add("animate__slow", "animate__fadeIn");
  setTimeout(function () {
    footerItems.forEach(function (item, i) {
      var ms = (i + 1) * 300;
      setTimeout(function () {
        item.style.opacity = 1;
        item.classList.add("animate__slow", "animate__fadeIn");
      }, ms);
    });
  }, 500);
  footerAnimated = true;
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
 // require('./bootstrap');

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mobileMenu;
var mainMenu;
var logoAndTitle;
var openMenuButton;
var closeMenuButton;
var header;
var coverPage;
var hash;

var currentPage = __webpack_require__(/*! ./page */ "./resources/js/page.js").currentPage();

function init() {
  mobileMenu = window.screen.width > 1110 ? false : true;
  mainMenu = document.querySelector("#mainNavigation > ul");
  logoAndTitle = document.querySelectorAll("#siteIdentity > img, #siteIdentity h2");
  openMenuButton = document.getElementById("openMenu");
  closeMenuButton = document.getElementById("closeMenu");
  header = document.getElementById("header");
  coverPage = document.getElementById("coverPage");
  hash = window.location.hash; //Margin for the coverPage equal to header height since the header has position:fixed.

  if (currentPage.isDevsPage) {
    document.querySelector("section.i0").style.marginTop = header.offsetHeight + "px";
  } else if (currentPage.isHomePage) {
    coverPage.style.marginTop = header.offsetHeight + "px";
  } //Only when the mobile menu is applied.


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
  if (currentPage.isHomePage) {
    try {
      aboutUsSVG();
      ourServicesSVG();
      whyChooseUsSVG();
      footerSVG();
    } catch (error) {
      console.warn("This exception can be thrown simply by not being on the home page. In this case ignore it.\n", error);
    }
  } else if (currentPage.isDevsPage) {
    try {
      devSectionsSVG();
      footerSVG();
    } catch (error) {
      console.warn("This exception can be thrown simply by not being on the devs page. In this case ignore it.\n", error);
    }
  }
}
/**
 * Resize the SVG triangles and polygon in the "About Us" section according to the width of the screen.
 */


function aboutUsSVG() {
  var svg1 = document.querySelector("#aboutUs svg.i0"); //Yellow Triangle.

  var svg2 = document.querySelector("#aboutUs svg.i1"); //White Polygon.

  var svg3 = document.querySelector("#aboutUs svg.i2"); //White Triangle.

  var polygon1 = svg1.querySelector("polygon"); //Yellow Triangle.

  var polygon2 = svg2.querySelector("polygon"); //White Polygon.

  var polygon3 = svg3.querySelector("polygon"); //White Triangle.

  var width = window.screen.width;

  if (width > 790) {
    //Yellow Triangle.
    svg1.setAttribute('width', 600);
    svg1.setAttribute('height', 300);
    polygon1.setAttribute('points', '0,0 600,0 300,300'); //White Polygon.

    svg2.setAttribute('width', 900);
    svg2.setAttribute('height', 500);
    polygon2.setAttribute('points', '300,0 900,0 900,500 200,500 0,300'); //White Triangle.

    svg3.setAttribute('width', 250);
    svg3.setAttribute('height', 250);
    polygon3.setAttribute('points', '0,0 250,250 0,250');
  } else {
    //Yellow Triangle.
    svg1.setAttribute('width', 250);
    svg1.setAttribute('height', 250);
    polygon1.setAttribute('points', '50,0 250,0 150,250'); //White Polygon.

    svg2.setAttribute('width', 400);
    svg2.setAttribute('height', 500);
    polygon2.setAttribute('points', '100,0 400,0 400,500 100,500 0,250'); //White Triangle.

    svg3.setAttribute('width', 200);
    svg3.setAttribute('height', 250);
    polygon3.setAttribute('points', '0,0 100,250 0,250');
  }
}
/**
 * Resize the SVG triangles in the "Our services" section according to the width of the screen.
 */


function ourServicesSVG() {
  var svg1 = document.querySelector("#ourServices svg.i0"); //Black triangle

  var polygon1 = svg1.querySelector("polygon");
  var svg2 = document.querySelector("#ourServices svg.i1"); //Yellow triangle

  var polygon2 = svg2.querySelector("polygon");
  var width = window.screen.width;
  var size;

  if (width > 1100) {
    size = 300;
  } else if (width > 850) {
    size = 250;
  } else if (width > 400) {
    size = 200;
  } else {
    size = 150;
  }

  svg1.setAttribute('width', size);
  svg1.setAttribute('height', size);
  polygon1.setAttribute('points', "0,0 ".concat(size, ",").concat(size, " 0,").concat(size));
  svg2.setAttribute('width', size);
  svg2.setAttribute('height', size);
  polygon2.setAttribute('points', "0,0 ".concat(size, ",").concat(size, " ").concat(size, ",0"));
}
/**
 * Resize the SVG triangle and polygon in the "Why choose us" section according to the width of the screen.
 */


function whyChooseUsSVG() {
  var svg1 = document.querySelector("#whyChooseUs svg.i0"); //Yellow polygon

  var polygon1 = svg1.querySelector("polygon");
  var svg2 = document.querySelector("#whyChooseUs svg.i1"); //White triangle

  var polygon2 = svg2.querySelector("polygon");
  var width = window.screen.width;
  var svg2Size;

  if (width > 700) {
    svg1.setAttribute('width', 500);
    svg1.setAttribute('height', 500);
    polygon1.setAttribute('points', '0,0 100,0 500,350 350,500 0,500');
    svg2Size = 300;
  } else {
    svg1.setAttribute('width', 500);
    svg1.setAttribute('height', 700);
    polygon1.setAttribute('points', '0,0 500,650, 500,700 0,700');
    svg2Size = 250;
  }

  svg2.setAttribute('width', svg2Size);
  svg2.setAttribute('height', svg2Size);
  polygon2.setAttribute('points', "".concat(svg2Size, ",0 ").concat(svg2Size, ",").concat(svg2Size, " 0,").concat(svg2Size));
}
/**
 * Resize the SVG triangle in the footer according to the width of the screen.
 */


function footerSVG() {
  var svg = document.querySelector("#footer svg.i0"); //Black triangle

  var polygon1 = svg.querySelector("polygon");
  var width = window.screen.width;
  var svgWidth;

  if (width > 550) {
    svgWidth = 650;
  } else {
    svgWidth = 200;
  }

  svg.setAttribute('width', svgWidth);
  svg.setAttribute('height', '500');
  polygon1.setAttribute('points', "".concat(svgWidth, ",0 ").concat(svgWidth, ",500 0,500"));
}

function devSectionsSVG() {
  var SVGs = document.querySelectorAll("section > svg");
  var originalSize = 300;
  var newSize = 250;
  var width = window.screen.width;

  if (width > 960) {
    newSize = 300;
  } else if (width > 750) {
    newSize = 250;
  } else if (width > 450) {
    newSize = 200;
  } else {
    newSize = 150;
  }

  SVGs.forEach(function (svg) {
    svg.setAttribute('width', newSize);
    svg.setAttribute('height', newSize);
    var polygon = svg.querySelector("polygon");
    var points = polygon.getAttribute('points');
    points = points.replaceAll(originalSize, newSize);
    polygon.setAttribute('points', points);
  });
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