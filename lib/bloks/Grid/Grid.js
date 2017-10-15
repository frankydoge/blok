'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridColumn = exports.GridRow = exports.Grid = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

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

exports.Grid = Grid;
exports.GridRow = _GridRow2.default;
exports.GridColumn = _GridColumn2.default;