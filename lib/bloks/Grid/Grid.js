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

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(props) {
  var _cx;

  var children = props.children,
      className = props.className,
      color = props.color,
      font = props.font,
      raised = props.raised,
      size = props.size,
      tag = props.tag,
      textAlign = props.textAlign;

  var gridClass = (0, _classnames2.default)((_cx = {
    'container': true
  }, _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'container-raised', raised), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _defineProperty(_cx, '' + className, className), _cx));
  var ElementTag = '' + props.tag;
  return _react2.default.createElement(
    ElementTag,
    { className: gridClass },
    props.children
  );
};

Grid.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: _propTypes2.default.string,

  /* Set The Font Type */
  font: _propTypes2.default.string,

  /* Add Shadow So Grid 'Floats' */
  raised: _propTypes2.default.bool,

  /* Set The Size Of The Font */
  size: _propTypes2.default.string,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string,

  /* Set The Alignment Of The Text */
  textAlign: _propTypes2.default.string
};

Grid.defaultProps = {
  tag: 'div'
};

Grid.Row = _Row2.default;
Grid.Column = _Column2.default;
Grid.Container = _Container2.default;

exports.default = Grid;