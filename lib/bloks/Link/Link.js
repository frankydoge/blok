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

var Link = function Link(props) {
  var heading = props.heading;

  return _react2.default.createElement(
    'a',
    { href: '#', className: 'active' },
    'Blok'
  );
};

Link.propTypes = {
  heading: _propTypes2.default.string
};

Link.defaultProps = {
  heading: 'Title'
};

exports.default = Link;