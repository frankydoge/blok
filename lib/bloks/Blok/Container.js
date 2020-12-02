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

var _index = require('../../../index.js');

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container = function Container(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      padded = props.padded,
      width = props.width;

  var blokContainerClass = (0, _classnames2.default)(_defineProperty({
    'blok-container-padded': padded
  }, '' + className, className));
  return _react2.default.createElement(
    _index.Grid,
    { color: color, className: blokContainerClass },
    _react2.default.createElement(
      _index.Grid.Row,
      null,
      _react2.default.createElement(
        _index.Grid.Column,
        { width: width },
        props.children
      )
    )
  );
};

Container.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: _propTypes2.default.string,

  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Add Padding To Top */
  padded: _propTypes2.default.bool,

  /* Set The Width Of The Column */
  width: _propTypes2.default.number
};

Container.defaultProps = {
  width: 12
};

exports.default = Container;