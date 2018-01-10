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
      divide = props.divide,
      kicker = props.kicker,
      padded = props.padded,
      text = props.text,
      title = props.title;

  var blokContentClass = (0, _classnames2.default)({
    'blok-content': true,
    'blok-content-padded': padded
  });
  var blokContentTitleClass = (0, _classnames2.default)({
    'blok-content-title': true
  });
  var blokContentKickerClass = (0, _classnames2.default)({
    'blok-content-kicker': true
  });
  var blokContentDivideClass = (0, _classnames2.default)({
    'blok-content-divide': divide
  });
  var textData = text.map(function (data, key) {
    return _react2.default.createElement(_index.Text, {
      key: key,
      text: data.text,
      font: 'body',
      size: 'text',
      tag: 'p',
      textAlign: 'left'
    });
  });
  return _react2.default.createElement(
    _index.Grid,
    { color: color, className: blokContentClass },
    _react2.default.createElement(
      _index.Grid.Row,
      null,
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 8, offset: 2, textAlign: 'middle', className: blokContentDivideClass },
        _react2.default.createElement(_index.Text, { font: 'heading', size: 'h1', textAlign: 'left', text: props.title, className: blokContentTitleClass }),
        _react2.default.createElement(_index.Text, { font: 'secondary', size: 'h3', tag: 'h2', textAlign: 'left', text: props.kicker, className: blokContentKickerClass }),
        textData
      )
    )
  );
};

Content.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: _propTypes2.default.string,

  /* Add A Divider Line */
  divide: _propTypes2.default.bool,

  /* Set Content For Kicker Message */
  kicker: _propTypes2.default.string,

  /* Add Padding To Top */
  padded: _propTypes2.default.bool,

  /* Set The Content For Text Message */
  text: _propTypes2.default.array,

  /* Set The Content For The Title */
  title: _propTypes2.default.string
};

exports.default = Content;