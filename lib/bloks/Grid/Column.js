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

var Column = function Column(props) {
  var _cx;

  var children = props.children,
      className = props.className,
      color = props.color,
      font = props.font,
      offset = props.offset,
      size = props.size,
      tag = props.tag,
      textAlign = props.textAlign,
      width = props.width;

  var columnClass = (0, _classnames2.default)((_cx = {
    'column': true
  }, _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _defineProperty(_cx, 'column-' + width, width), _defineProperty(_cx, 'column-offset-' + offset, offset), _defineProperty(_cx, '' + className, className), _cx));
  var ElementTag = '' + props.tag;
  return _react2.default.createElement(
    ElementTag,
    { className: columnClass },
    props.children
  );
};

Column.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: _propTypes2.default.string,

  /* Set The Font Type */
  font: _propTypes2.default.string,

  /* Set The Column Offset Size */
  offset: _propTypes2.default.number,

  /* Set The Size Of The Font */
  size: _propTypes2.default.string,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string,

  /* Set The Alignment Of The Text */
  textAlign: _propTypes2.default.string,

  /* Set The Column Width Size */
  width: _propTypes2.default.number
};

Column.defaultProps = {
  tag: 'div'
};

exports.default = Column;