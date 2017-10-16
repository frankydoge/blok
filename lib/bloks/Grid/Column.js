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

  var color = props.color,
      textAlign = props.textAlign;

  var columnClass = (0, _classnames2.default)((_cx = {
    'column': true
  }, _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _cx));
  return _react2.default.createElement(
    'div',
    { className: columnClass },
    props.children
  );
};

Column.propTypes = {
  color: _propTypes2.default.string,
  textAlign: _propTypes2.default.string
};

exports.default = Column;