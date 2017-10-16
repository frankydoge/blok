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

var _index = require('../../../index');

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function Panel(props) {
  var heading = props.heading;

  return _react2.default.createElement(
    _index.Grid,
    { compact: true, color: 'red' },
    _react2.default.createElement(
      _index.Column,
      { textAlign: 'middle' },
      _react2.default.createElement(
        'h1',
        null,
        props.heading
      )
    ),
    _react2.default.createElement(_index.Column, null),
    _react2.default.createElement(
      _index.Column,
      { textAlign: 'right' },
      props.children
    )
  );
};

Panel.propTypes = {
  heading: _propTypes2.default.string
};

Panel.defaultProps = {
  heading: 'Title'
};

exports.default = Panel;