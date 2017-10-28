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

var Content = function Content(props) {
  var color = props.color,
      description = props.description,
      heading = props.heading,
      kicker = props.kicker,
      padded = props.padded;

  var blokContentClass = (0, _classnames2.default)({
    'blok-content': true,
    'blok-content-padded': padded
  });
  var blokContentHeadingClass = (0, _classnames2.default)({
    'blok-content-heading': true
  });
  var blokContentKickerClass = (0, _classnames2.default)({
    'blok-content-kicker': true
  });
  var blokContentDescClass = (0, _classnames2.default)({
    'blok-content-description': true
  });
  return _react2.default.createElement(
    _index.Grid,
    { color: color, className: blokContentClass },
    _react2.default.createElement(
      _index.Grid.Row,
      null,
      _react2.default.createElement(_index.Grid.Column, { width: 1 }),
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 6, textAlign: 'middle' },
        _react2.default.createElement(_index.Heading, { font: 'body', size: 'huge', text: props.heading, className: blokContentHeadingClass }),
        _react2.default.createElement(_index.Heading, { font: 'body', size: 'small', text: props.kicker, className: blokContentKickerClass }),
        _react2.default.createElement(_index.Line, null),
        _react2.default.createElement(_index.Heading, { font: 'body', size: 'small', textAlign: 'left', text: props.description, className: blokContentDescClass })
      ),
      _react2.default.createElement(_index.Grid.Column, { width: 1 })
    )
  );
};

Content.propTypes = {
  color: _propTypes2.default.string,
  description: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  kicker: _propTypes2.default.string,
  padded: _propTypes2.default.bool
};

exports.default = Content;