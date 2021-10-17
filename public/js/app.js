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

var coverPageAnimated;
var coverPage;
var coverPage_logo;
var coverPage_title;
var coverPage_text;
var coverPage_startButton;
var servicesAnimated;
var services;
var services_title;
var services_items;
var aboutUsAnimated;
var aboutUs;
var aboutUs_title;
var aboutUs_items;
var technologiesAnimated;
var technologies;
var technologies_title;
var technologies_items;
var ourProjectsAnimated;
var ourProjects;
var ourProjects_title;
var ourProjects_items;
var workflowAnimated;
var workflow;
var workflow_title;
var workflow_items;
var contactAnimated;
var contact;
var contact_title;
var contact_text;

var currentPage = __webpack_require__(/*! ./page */ "./resources/js/page.js").currentPage();

function init() {
  console.log("animationsHandler");

  if (currentPage.isHomePage) {
    coverPageAnimated = false;
    coverPage = document.getElementById("coverPage");
    coverPage_logo = document.querySelector('#coverPageText > img');
    coverPage_title = document.querySelector('#coverPageText > h1');
    coverPage_text = document.querySelector('#coverPageText > p');
    coverPage_startButton = document.getElementById('startButton');
    coverPage_startButton.addEventListener('click', start);
    servicesAnimated = false;
    services = document.getElementById('services');
    services_title = document.getElementById('servicesTitle');
    services_items = document.querySelectorAll('.services .service');
    aboutUsAnimated = false;
    aboutUs = document.getElementById('aboutUs');
    aboutUs_title = document.getElementById('aboutUsTitle');
    aboutUs_items = document.querySelectorAll('#aboutUs .blocks .block');
    technologiesAnimated = false;
    technologies = document.getElementById('technologies');
    technologies_title = document.querySelector('#technologies > h3');
    technologies_items = document.querySelectorAll('#technologies > ul > li');
    ourProjectsAnimated = false;
    ourProjects = document.getElementById('ourProjects');
    ourProjects_title = document.getElementById('ourProjectsTitle');
    ourProjects_items = document.querySelectorAll('#ourProjects .projects .project');
    workflowAnimated = false;
    workflow = document.getElementById('workflow');
    workflow_title = document.getElementById('workflowTitle');
    workflow_items = document.querySelectorAll('#workflow ul li');
    contactAnimated = false;
    contact = document.getElementById('contact');
    contact_title = document.getElementById('contactTitle');
    contact_text = document.querySelector('#contact > p');
    coverPageAnim();
  } else if (currentPage.isDevsPage) {
    coverPageAnimated = false;
    coverPage = document.getElementById("coverPage");
    coverPage_logo = document.querySelector('#coverPageText > img');
    coverPage_title = document.querySelector('#coverPageText > h1');
    coverPage_text = document.querySelector('#coverPageText > p');
    coverPage_startButton = document.getElementById('startButton');
    coverPage_startButton.addEventListener('click', start);
    coverPageAnim();
  }

  window.addEventListener("scroll", scrollEventsHandler);
}

function scrollEventsHandler() {
  var y = window.scrollY; //Current 'Y' location.

  var anticipation = 250;

  if (currentPage.isHomePage) {
    //Scroll events in the home page.
    try {
      if (!coverPageAnimated && y >= coverPage.offsetTop - anticipation) {
        coverPageAnim();
      } else if (!servicesAnimated && y >= services.offsetTop - anticipation) {
        servicesAnim();
      } else if (!aboutUsAnimated && y >= aboutUs.offsetTop - anticipation) {
        aboutUsAnim();
      } else if (!technologiesAnimated && y >= technologies.offsetTop - anticipation) {
        technologiesAnim();
      } else if (!ourProjectsAnimated && y >= ourProjects.offsetTop - anticipation) {
        ourProjectsAnim();
      } else if (!workflowAnimated && y >= workflow.offsetTop - anticipation) {
        workflowAnim();
      } else if (!contactAnimated && y >= contact.offsetTop - anticipation) {
        contactAnim();
      }
    } catch (error) {
      console.warn(error);
    }
  } else if (currentPage.isDevsPage) {
    //Scroll events in the devs page.
    try {
      if (!coverPageAnimated && y >= coverPage.offsetTop - anticipation) {
        coverPageAnim();
      }
    } catch (error) {
      console.warn(error);
    }
  } else {
    console.warn("no animations");
  }
}

function start() {
  window.location.hash = '#_hello';
  setTimeout(function () {
    return location.hash = "_";
  }, 1000);
}

function coverPageAnim() {
  var counter = 1;
  var interval = setInterval(function () {
    if (counter > 4) {
      clearInterval(interval);
    } else {
      switch (counter) {
        case 1:
          coverPage_logo.classList.add('animate__fadeIn');
          coverPage_logo.style.opacity = 1;
          break;

        case 2:
          coverPage_title.classList.add('animate__fadeIn');
          coverPage_title.style.opacity = 1;
          break;

        case 3:
          coverPage_text.classList.add('animate__fadeIn');
          coverPage_text.style.opacity = 1;
          break;

        case 4:
          coverPage_startButton.classList.add('animate__fadeIn');
          coverPage_startButton.style.opacity = 1;
          break;

        default:
          break;
      }
    }

    counter++;
  }, 300);
  coverPageAnimated = true;
}

function servicesAnim() {
  services_title.style.opacity = 1;
  services_title.classList.add('animate__fadeIn');
  var counter = 0;
  var interval = setInterval(function () {
    if (counter >= services_items.length) {
      clearInterval(interval);
      return;
    }

    services_items[counter].style.opacity = 1;
    services_items[counter].classList.add('animate__fadeIn');
    counter++;
  }, 500);
  servicesAnimated = true;
}

function aboutUsAnim() {
  aboutUs_title.style.opacity = 1;
  aboutUs_title.classList.add('animate__fadeIn');
  var counter = 0;
  var interval = setInterval(function () {
    if (counter >= aboutUs_items.length) {
      clearInterval(interval);
      return;
    }

    aboutUs_items[counter].style.opacity = 1;
    aboutUs_items[counter].classList.add('animate__flipInY');
    counter++;
  }, 500);
  aboutUsAnimated = true;
}

function technologiesAnim() {
  technologies_title.style.opacity = 1;
  technologies_title.classList.add('animate__fadeIn');
  var counter = 0;
  var interval = setInterval(function () {
    if (counter >= technologies_items.length) {
      clearInterval(interval);
      return;
    }

    technologies_items[counter].style.opacity = 1;
    technologies_items[counter].classList.add('animate__flipInX');
    counter++;
  }, 150);
  technologiesAnimated = true;
}

function ourProjectsAnim() {
  ourProjects_title.style.opacity = 1;
  ourProjects_title.classList.add('animate__fadeIn', 'animate__slower');
  var counter = 0;
  var interval = setInterval(function () {
    if (counter >= ourProjects_items.length) {
      clearInterval(interval);
      return;
    }

    ourProjects_items[counter].style.opacity = 1;
    ourProjects_items[counter].classList.add('animate__fadeIn', 'animate__slow');
    counter++;
  }, 500);
  ourProjectsAnimated = true;
}

function workflowAnim() {
  workflow_title.style.opacity = 1;
  workflow_title.classList.add('animate__fadeIn');
  var counter = 0;
  var interval = setInterval(function () {
    if (counter >= workflow_items.length) {
      clearInterval(interval);
      return;
    }

    var animation = counter === 0 || counter === 2 ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig';
    workflow_items[counter].style.opacity = 1;
    workflow_items[counter].classList.add(animation);
    counter++;
  }, 500);
  workflowAnimated = true;
}

function contactAnim() {
  contact_title.style.opacity = 1;
  contact_title.classList.add('animate__fadeIn');
  setTimeout(function () {
    contact_text.style.opacity = 1;
    contact_text.classList.add('animate__fadeIn');
  }, 750);
  contactAnimated = true;
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

particlesJS({
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 750
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

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
    case '#_hello':
      element = document.getElementById('hello');
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_aboutUs":
      element = document.getElementById("aboutUs");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_services":
      element = document.getElementById("services");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_projects":
      element = document.getElementById("ourProjects");
      elementY = element.offsetTop;
      y = elementY - 100;
      break;

    case "#_contact":
      element = document.getElementById("contact");
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
/***/ ((module) => {

function init() {
  console.log("screenAdaptations");
  coverPage();
}

function coverPage() {
  var header = document.getElementById("header");
  var headerHeight = header.offsetHeight;
  var coverPage = document.getElementById("coverPage");
  coverPage.style.height = window.screen.height - headerHeight + "px"; //Margin for the coverPage equal to header height since the header has position:fixed.

  coverPage.style.marginTop = headerHeight + "px";
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