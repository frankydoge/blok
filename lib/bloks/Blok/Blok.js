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

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Blok = function Blok(props) {
  var className = props.className,
      tag = props.tag;

  var blokClass = (0, _classnames2.default)(_defineProperty({
    'blok': true
  }, '' + className, className));
  var ElementTag = '' + props.tag;
  return _react2.default.createElement(
    ElementTag,
    { className: blokClass },
    props.children
  );
};

Blok.propTypes = {
  className: _propTypes2.default.string,
  tag: _propTypes2.default.string
};

Blok.defaultProps = {
  tag: 'div'
};

Blok.Content = _Content2.default;
Blok.Footer = _Footer2.default;
Blok.Header = _Header2.default;

exports.default = Blok;