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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/jquery.teletype.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/jquery.teletype.min.js":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/jquery.teletype.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (e) {
  e.fn.teletype = function (t) {
    var i = e.extend({}, e.fn.teletype.defaults, t),
        n = this,
        o = e(this),
        s = null,
        l = {
      string: "",
      index: 0,
      position: 0,
      loop: 0
    },
        a = function a() {
      return l.index++, l.index >= i.text.length && (l.index = 0, l.loop++, i.loop !== !1 && i.loop == l.loop) ? !1 : (l.position = 0, c(), "function" == typeof i.callbackNext && i.callbackNext(l, n), !0);
    },
        r = function r() {
      i.prefix && 0 === l.position && 0 === l.loop && 0 === l.index && e("<span />").addClass("teletype-prefix").html(i.prefix).prependTo(o);
      var t = l.string.split(""),
          c = t[l.position],
          d = l.position + 1;

      if ("^" == c || "~" == c) {
        var f = l.string.substr(d).search(/[^0-9]/);
        -1 == f && (f = l.string.length);
        var y = l.string.substr(d, f);

        if (e.isNumeric(y)) {
          if (l.string = l.string.replace(c + y, ""), "^" == c) window.setTimeout(function () {
            window.setTimeout(r, u(i.typeDelay));
          }, y);else {
            var h = l.position - y;
            l.string = l.string.substr(0, h - 1) + l.string.substr(l.position - 1), window.setTimeout(function () {
              p(Math.max(h, 0));
            }, u(i.backDelay));
          }
          return;
        }
      } else if ("\\" == c) {
        var m = l.string.substr(d, 1);
        "n" == m && (l.position++, c = "<br />");
      }

      void 0 !== c && s.html(s.html() + c), l.position++, l.position < l.string.length ? window.setTimeout(r, u(i.typeDelay)) : i.preserve === !1 ? window.setTimeout(function () {
        window.setTimeout(p, u(i.backDelay));
      }, i.delay) : (s.html(s.html() + '<span class="teletype-prefix">' + i.prefix + "</span>"), a() ? window.setTimeout(function () {
        window.setTimeout(r, u(i.typeDelay));
      }, i.delay) : "function" == typeof i.callbackFinished && i.callbackFinished(n)), "function" == typeof i.callbackType && i.callbackType(c, l, n);
    },
        p = function p(e) {
      if (e || (e = 0), l.position > e) s.html(s.html().slice(0, -1)), window.setTimeout(function () {
        p(e);
      }, u(i.backDelay)), l.position--;else {
        if (0 === e && a() === !1) return;
        window.setTimeout(r, u(i.typeDelay));
      }
    },
        u = function u(e) {
      var t = parseInt(e);
      return i.humanise && (t += Math.floor(200 * Math.random())), t;
    },
        c = function c() {
      l.string = i.text[l.index].replace(/\n/g, "\\n");
    };

    return this.setCursor = function (t) {
      e(".teletype-cursor", o).text(t);
    }, this.each(function () {
      if (c(), o.addClass("teletype").empty(), s = e("<span />").addClass("teletype-text").appendTo(o), i.cursor) {
        var t = e("<span />").addClass("teletype-cursor").appendTo(o);
        n.setCursor(i.cursor), setInterval(function () {
          t.animate({
            opacity: 0
          }).animate({
            opacity: 1
          });
        }, i.blinkSpeed);
      }

      r();
    });
  }, e.fn.teletype.defaults = {
    text: ["one", "two", "three"],
    typeDelay: 100,
    backDelay: 50,
    blinkSpeed: 1e3,
    delay: 2e3,
    cursor: "|",
    preserve: !1,
    prefix: "",
    loop: 0,
    humanise: !0,
    callbackNext: null,
    callbackType: null,
    callbackFinished: null
  };
}(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=jquery-a5d89c1f99e3a9f204f5.js.map