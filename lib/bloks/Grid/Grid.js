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

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(props) {
  var gridClass = (0, _classnames2.default)({
    'grid': true
  });
  return _react2.default.createElement(
    'div',
    { className: gridClass },
    props.children
  );
};

exports.default = Grid;