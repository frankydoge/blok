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

var Link = function Link(props) {
  var _cx;

  var active = props.active,
      font = props.font,
      ref = props.ref,
      size = props.size,
      text = props.text;

  var linkClass = (0, _classnames2.default)((_cx = {
    'link': true
  }, _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'link-active', active), _cx));
  return _react2.default.createElement(
    'a',
    { href: ref, className: linkClass },
    text
  );
};

Link.propTypes = {
  active: _propTypes2.default.bool,
  font: _propTypes2.default.string,
  ref: _propTypes2.default.string,
  size: _propTypes2.default.string,
  text: _propTypes2.default.string
};

Link.defaultProps = {
  active: false,
  font: 'body',
  ref: '#',
  size: 'regular',
  text: 'Link Text'
};

exports.default = Link;