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

var _index = require('../../../index');

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Need to add ability to style words inline */

var Text = function Text(props) {
  var _cx;

  var className = props.className,
      font = props.font,
      size = props.size,
      tag = props.tag,
      text = props.text,
      textAlign = props.textAlign,
      type = props.type;

  var textClass = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _defineProperty(_cx, 'text-type-' + type, type), _defineProperty(_cx, '' + className, className), _cx));
  var ElementTag = '' + props.tag;
  return _react2.default.createElement(
    ElementTag,
    { className: textClass },
    props.text
  );
};

Text.propTypes = {
  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Set The Font Type */
  font: _propTypes2.default.string,

  /* Set The Size Of The Font */
  size: _propTypes2.default.string,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string,

  /* Set The Content For Text Message */
  text: _propTypes2.default.string,

  /* Set The Alignment Of The Text */
  textAlign: _propTypes2.default.string,

  /* Set The Text Type */
  type: _propTypes2.default.string
};

Text.defaultProps = {
  tag: 'p',
  type: 'paragraph'
};

exports.default = Text;