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

var _index = require('../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(props) {
  var _cx;

  var color = props.color,
      font = props.font,
      raised = props.raised,
      size = props.size,
      textAlign = props.textAlign;

  var gridClass = (0, _classnames2.default)((_cx = {
    'container': true
  }, _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'font-family-' + font, font), _defineProperty(_cx, 'container-raised', raised), _defineProperty(_cx, 'font-size-' + size, size), _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _cx));
  return _react2.default.createElement(
    'div',
    { className: gridClass },
    props.children
  );
};

Grid.propTypes = {
  color: _propTypes2.default.string,
  font: _propTypes2.default.string,
  raised: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  textAlign: _propTypes2.default.string
};

Grid.Row = _index.Row;
Grid.Column = _index.Column;

exports.default = Grid;