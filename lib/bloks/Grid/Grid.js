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

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(props) {
  var _cx;

  Row: _GridRow2.default;
  Column: _GridColumn2.default;
  var textAlign = props.textAlign,
      fluid = props.fluid;

  var gridClass = (0, _classnames2.default)({
    'grid': true
  });
  var rowClass = (0, _classnames2.default)((_cx = {
    'row': true
  }, _defineProperty(_cx, 'text-align-' + textAlign, textAlign), _defineProperty(_cx, 'display-fluid', fluid), _cx));
  var columnClass = (0, _classnames2.default)({
    'grid': true
  });
  return _react2.default.createElement(
    'div',
    { className: gridClass },
    props.children
  );
};

Grid.defaultProps = {
  textAlign: 'left',
  fluid: false
};

Grid.propTypes = {
  textAlign: _propTypes2.default.string,
  fluid: _propTypes2.default.bool
};

exports.default = Grid;