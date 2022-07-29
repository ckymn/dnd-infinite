"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SortableList = /*#__PURE__*/function (_Component) {
  _inherits(SortableList, _Component);

  var _super = _createSuper(SortableList);

  function SortableList(props) {
    var _this;

    _classCallCheck(this, SortableList);

    _this = _super.call(this, props);
    var placeholder = document.createElement("li");
    placeholder.className = "placeholder";
    _this.state = {
      data: _this.props.data,
      placeholder: placeholder
    };
    return _this;
  }
  /**
   * On drag start, set data.
   **/


  _createClass(SortableList, [{
    key: "dragStart",
    value: function dragStart(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.currentTarget);
    }
    /**
     * On drag end, update the data state.
     **/

  }, {
    key: "dragEnd",
    value: function dragEnd(e) {
      this.dragged.style.display = "block";
      this.dragged.parentNode.removeChild(this.state.placeholder);
      var data = this.state.data;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if (from < to) to--;
      if (this.nodePlacement == "after") to++;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({
        data: data
      });
    }
    /**
     * On drag over, update items.
     **/

  }, {
    key: "dragOver",
    value: function dragOver(e) {
      e.preventDefault();
      this.dragged.style.display = "none";
      if (e.target.className == "placeholder") return;
      this.over = e.target;
      var relY = e.clientY - this.over.offsetTop;
      var height = this.over.offsetHeight / 2;
      var parent = e.target.parentNode;

      if (relY > height) {
        this.nodePlacement = "after";
        parent.insertBefore(this.state.placeholder, e.target.nextElementSibling);
      } else if (relY < height) {
        this.nodePlacement = "before";
        parent.insertBefore(this.state.placeholder, e.target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      var listItems = data.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement("li", {
          "data-id": i,
          key: i,
          draggable: "true",
          onDragEnd: _this2.dragEnd.bind(_this2),
          onDragStart: _this2.dragStart.bind(_this2)
        }, item);
      });
      return /*#__PURE__*/_react.default.createElement(SortableWrapper, null, /*#__PURE__*/_react.default.createElement("ul", {
        onDragOver: this.dragOver.bind(this)
      }, listItems));
    }
  }]);

  return SortableList;
}(_react.Component);

exports.default = SortableList;

var SortableWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  ul li {\n    background: #eee;\n    color: #666;\n    margin: 0;\n    padding: 10px;\n    line-height: 1;\n    .placeholder {\n      background: #03cc85;\n    }\n    .placeholder:before {\n      content: \"Drop here\";\n      color: #666;\n    }\n  }\n"])));