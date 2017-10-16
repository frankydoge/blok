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

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(props) {
  var _cx, _cx2;

  // Props
  var color = props.color,
      compact = props.compact,
      fluid = props.fluid,
      textAlign = props.textAlign;

  // Class Name for Container

  var containerClass = (0, _classnames2.default)((_cx = {
    'container': true
  }, _defineProperty(_cx, 'color-background-' + color, color), _defineProperty(_cx, 'container-compact', compact), _cx));

  // Class Name for Row
  var rowClass = (0, _classnames2.default)((_cx2 = {
    'row': true
  }, _defineProperty(_cx2, 'text-align-' + textAlign, textAlign), _defineProperty(_cx2, 'display-fluid', fluid), _cx2));

  return _react2.default.createElement(
    'div',
    { className: containerClass },
    _react2.default.createElement(
      'div',
      { className: rowClass },
      props.children
    )
  );
};

Grid.propTypes = {
  compact: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string
};

Grid.defaultProps = {
  compact: false,
  fluid: false,
  textAlign: 'left'
};

exports.default = Grid;