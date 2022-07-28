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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Sortable_List(props) {
  var _useState = (0, _react.useState)({
    data: props.data
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var placeholder = document.createElement("li");
  placeholder.className = "placeholder";
  var dragged;
  var over;

  var SortableWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n    }\n    ul li {\n      background: #eee;\n      color: #666;\n      margin: 0;\n      padding: 10px;\n      line-height: 1;\n      .placeholder {\n        background: #03cc85;\n      }\n      .placeholder:before {\n        content: \"Drop here\";\n        color: #666;\n      }\n    }\n  "])));
  /**
   * Kullanıcı bir nesneyi sürüklemeye başladığı anda oluşur.
   **/


  var dragStart = function dragStart(e) {
    dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.currentTarget);
  };
  /**
   * Sürükleme esnasında kullanıcı farenin düğmesini bırakınca oluşur.
   **/


  var dragEnd = function dragEnd(e) {
    dragged.style.display = "block";
    dragged.parentNode.removeChild(placeholder);
    var from = Number(dragged.dataset.id);
    var to = Number(over.dataset.id);
    if (from < to) to--;
    if (nodePlacement === "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    setData({
      data: data
    });
  };
  /**
   * Sürükleme meydana geldiği zaman farenin bir elemanın üzerine hareket ettirilmesiyle tetiklenen olaydır.
   **/


  var dragOver = function dragOver(e) {
    e.preventDefault();
    dragged.style.display = "none";
    if (e.target.className == "placeholder") return;
    over = e.target;
    var relY = e.clientY - over.offsetTop;
    var height = over.offsetHeight / 2;
    var parent = e.target.parentNode;

    if (relY > height) {
      nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    } else if (relY < height) {
      nodePlacement = "before";
      parent.insertBefore(placeholder, e.target);
    }
  };

  var listItems = data.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      id: true,
      "data-id": index,
      key: index,
      draggable: "true",
      onDragEnd: dragEnd,
      onDragStart: dragStart
    }, item);
  });
  return /*#__PURE__*/_react.default.createElement(SortableWrapper, null, /*#__PURE__*/_react.default.createElement("ul", {
    onDragOver: dragOver
  }, listItems));
}

var _default = Sortable_List;
exports.default = _default;