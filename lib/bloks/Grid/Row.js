'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Row = function Row(props) {
  var _cx;

  var children = props.children,
      className = props.className,
      color = props.color,
      font = props.font,
      size = props.size,
      tag = props.tag,
      textAlign = props.textAlign;

  var rowClass = (0, _classnames2.default)((_cx = {
    'row': true
  }, _defineProperty(_cx, '' + className, className), _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _cx));
  var ElementTag = '' + props.tag;
  return _react2.default.createElement(
    ElementTag,
    { className: rowClass },
    props.children
  );
};

Row.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  font: _propTypes2.default.string,
  size: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  textAlign: _propTypes2.default.string
};

Row.defaultProps = {
  tag: 'div'
};

exports.default = Row;