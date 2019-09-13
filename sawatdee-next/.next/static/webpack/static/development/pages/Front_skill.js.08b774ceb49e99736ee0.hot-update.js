webpackHotUpdate("static\\development\\pages\\Front_skill.js",{

/***/ "./pages/Front_skill.js":
/*!******************************!*\
  !*** ./pages/Front_skill.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Front_skill; });
/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layouts */ "./components/Layouts.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Option = antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"].Option;
var OptGroup = antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"].OptGroup;
var dataSource = [{
  title: 'test1',
  children: [{
    title: 'AntDesign',
    count: 10000
  }, {
    title: 'AntDesign UI',
    count: 10600
  }]
}, {
  title: 'palm',
  children: [{
    title: 'AntDesign UI palm',
    count: 60100
  }, {
    title: 'AntDesign palm',
    count: 30010
  }]
}, {
  title: 'pop',
  children: [{
    title: 'AntDesign pop',
    count: 100000
  }]
}];

function renderTitle(title) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      "float": 'right'
    },
    href: "https://www.google.com/search?q=antd",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "company"));
}

var options = dataSource.map(function (group) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptGroup, {
    key: group.title,
    label: renderTitle(group.title)
  }, group.children.map(function (opt) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
      key: opt.title,
      value: opt.title
    }, opt.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "certain-search-item-count"
    }, opt.count, " data 1"));
  }));
}).concat([react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
  disabled: true,
  key: "all",
  className: "show-all"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.google.com/search?q=antd",
  target: "_blank",
  rel: "noopener noreferrer"
}, "\u67E5\u770B\u6240\u6709\u7ED3\u679C"))]);

var Front_skill =
/*#__PURE__*/
function (_Component) {
  _inherits(Front_skill, _Component);

  function Front_skill() {
    _classCallCheck(this, Front_skill);

    return _possibleConstructorReturn(this, _getPrototypeOf(Front_skill).apply(this, arguments));
  }

  _createClass(Front_skill, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layouts__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Front_skill .page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "certain-category-search-wrapper",
        style: {
          width: 250
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], {
        className: "certain-category-search",
        dropdownClassName: "certain-category-search-dropdown",
        dropdownMatchSelectWidth: false,
        dropdownStyle: {
          width: 300
        },
        size: "large",
        style: {
          width: '100%'
        },
        dataSource: options,
        placeholder: "input here",
        optionLabelProp: "value"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        suffix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "search",
          className: "certain-category-icon"
        })
      }))))));
    }
  }]);

  return Front_skill;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=Front_skill.js.08b774ceb49e99736ee0.hot-update.js.map