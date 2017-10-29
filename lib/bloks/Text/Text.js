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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Text = function Text(props) {
  var className = props.className,
      text = props.text;

  var textClass = (0, _classnames2.default)(_defineProperty({
    'text': true
  }, '' + className, className));
  return _react2.default.createElement(_index.Heading, { font: 'body', size: 'text', textAlign: 'middle', text: props.text, className: textClass });
};

Text.propTypes = {
  className: _propTypes2.default.string,
  text: _propTypes2.default.string
};

exports.default = Text;