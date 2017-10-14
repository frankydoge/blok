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

require('./Grid.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(props) {
  var _cx;

  var column = props.column,
      color = props.color,
      row = props.row;

  var gridClass = (0, _classnames2.default)((_cx = {
    'grid': true
  }, _defineProperty(_cx, 'grid-col-' + column, column), _defineProperty(_cx, 'grid-' + color, color), _defineProperty(_cx, 'row', row), _cx));
  return _react2.default.createElement(
    'div',
    { className: gridClass },
    props.children
  );
};

Grid.defaultProps = {
  column: 0,
  row: false
};

Grid.propTypes = {
  column: _propTypes2.default.number,
  row: _propTypes2.default.bool
};

exports.default = Grid;