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

var Grid = function Grid(props) {
  var textAlign = props.textAlign,
      fluid = props.fluid;

  return _react2.default.createElement(
    _Container2.default,
    null,
    _react2.default.createElement(
      _Row2.default,
      { textAlign: props.textAlign, fluid: props.fluid },
      props.children
    )
  );
};

Grid.propTypes = {
  textAlign: _propTypes2.default.string,
  fluid: _propTypes2.default.bool
};

exports.default = Grid;