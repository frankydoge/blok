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

require('../../assets//Panel.css');

var _import = require('../../import');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Panel = function Panel(props) {
  var position = props.position;

  var panelClass = (0, _classnames2.default)(_defineProperty({
    'panel': true
  }, 'panel-' + position, position));
  return _react2.default.createElement(
    'div',
    { className: panelClass },
    _react2.default.createElement(
      _import.Container,
      { textAlign: 'middle' },
      _react2.default.createElement(
        'h1',
        null,
        'jmart.io'
      )
    ),
    _react2.default.createElement(
      _import.Container,
      null,
      _react2.default.createElement(
        'p',
        { className: 'text' },
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
      )
    )
  );
};

Panel.defaultProps = {
  position: 'top'
};

Panel.propTypes = {
  position: _propTypes2.default.string
};

exports.default = Panel;