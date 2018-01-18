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

var _index = require('../../../index.js');

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Link = function Link(props) {
  var _cx;

  var active = props.active,
      className = props.className,
      color = props.color,
      font = props.font,
      linkRef = props.linkRef,
      size = props.size,
      tag = props.tag,
      text = props.text,
      type = props.type;

  var linkClass = (0, _classnames2.default)((_cx = {
    'link': true
  }, _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'link-active', active), _defineProperty(_cx, 'link-type-' + type, type), _defineProperty(_cx, '' + className, className), _cx));
  var ElementTag = '' + props.tag;
  return _react2.default.createElement(
    ElementTag,
    { href: linkRef, className: linkClass },
    text
  );
};

Link.propTypes = {
  /* Set For Active Link */
  active: _propTypes2.default.bool,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Set The Font Type */
  font: _propTypes2.default.string,

  /* Create The Link Location */
  linkRef: _propTypes2.default.string,

  /* Set The Size Of The Font */
  size: _propTypes2.default.string,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string,

  /* Set The Content For Text Message */
  text: _propTypes2.default.string,

  /* Set The Link Type */
  type: _propTypes2.default.string
};

Link.defaultProps = {
  active: false,
  font: 'body',
  linkRef: '#',
  size: 'h4',
  tag: 'a'
};

exports.default = Link;