webpackHotUpdate("static\\development\\pages\\back_cert.js",{

/***/ "./Services/Stock.js":
/*!***************************!*\
  !*** ./Services/Stock.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

 // let todos = observable([
//         { title: "Spoil tea" },
//         { title: "Make coffee" }
//     ]);
// test = (data) => {
//     todos.push(data)
// }

var Stock = (_class = (_temp =
/*#__PURE__*/
function () {
  function Stock() {
    _classCallCheck(this, Stock);

    _initializerDefineProperty(this, "data", _descriptor, this);

    _initializerDefineProperty(this, "counter", _descriptor2, this);

    _initializerDefineProperty(this, "rest", _descriptor3, this);
  }

  _createClass(Stock, [{
    key: "increase",
    value: function increase() {
      this.counter = this.counter + 1;
    }
  }, {
    key: "decrease",
    value: function decrease() {
      this.counter = this.counter - 1;
    }
  }, {
    key: "setdata",
    value: function setdata(val) {
      console.log(val);
    }
  }]);

  return Stock;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return ["dragonQuest", "finalFantasy"];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "counter", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rest", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
var stock = new Stock();
/* harmony default export */ __webpack_exports__["default"] = (stock); // autorun(()=>{
// });

/***/ })

})
//# sourceMappingURL=back_cert.js.8a9e26260ca2563e6bfb.hot-update.js.map