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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
  var compact = props.compact;

  var containerClass = (0, _classnames2.default)({
    'container': true,
    'container-compact': compact
  });
  return _react2.default.createElement(
    'div',
    { className: containerClass },
    props.children
  );
};

Container.defaultProps = {
  compact: false
};

Container.propTypes = {
  compact: _propTypes2.default.bool
};

exports.default = Container;