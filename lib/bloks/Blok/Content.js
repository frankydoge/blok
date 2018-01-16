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
  var children = props.children,
      className = props.className,
      color = props.color,
      divide = props.divide,
      kicker = props.kicker,
      offset = props.offset,
      padded = props.padded,
      text = props.text,
      textType = props.textType,
      title = props.title,
      type = props.type,
      width = props.width,
      wrapper = props.wrapper;

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
  var blokContentTextClass = (0, _classnames2.default)({
    'blok-content-text': true
  });
  var blokContentDivideClass = (0, _classnames2.default)({
    'blok-content-divide': divide
  });
  var textData = text.map(function (data, key) {
    return _react2.default.createElement(_index.Text, {
      key: key,
      text: data.text,
      className: blokContentTextClass,
      font: 'body',
      size: 'text',
      tag: 'p'
    });
  });
  if (title && kicker) {
    return _react2.default.createElement(
      _index.Grid,
      { color: color, className: blokContentClass },
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 6, offset: os, textAlign: 'left', className: blokContentDivideClass },
          _react2.default.createElement(_index.Text, { font: 'heading', size: 'h1', text: props.title, className: blokContentTitleClass }),
          _react2.default.createElement(_index.Text, { font: 'heading', size: 'h3', tag: 'h2', text: props.kicker, className: blokContentKickerClass }),
          textData
        )
      )
    );
  } else if (title) {
    return _react2.default.createElement(
      _index.Grid,
      { color: color, className: blokContentClass },
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 6, offset: os, textAlign: 'left', className: blokContentDivideClass },
          _react2.default.createElement(_index.Text, { font: 'heading', size: 'h1', text: props.title, className: blokContentTitleClass }),
          textData
        )
      )
    );
  } else if (kicker) {
    return _react2.default.createElement(
      _index.Grid,
      { color: color, className: blokContentClass },
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 6, offset: os, textAlign: 'left', className: blokContentDivideClass },
          _react2.default.createElement(_index.Text, { font: 'heading', size: 'h3', tag: 'h2', text: props.kicker, className: blokContentKickerClass }),
          textData
        )
      )
    );
  } else {
    return _react2.default.createElement(
      _index.Grid,
      { color: color, className: blokContentClass },
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 6, offset: os, textAlign: 'left', className: blokContentDivideClass },
          textData
        )
      )
    );
  }
};

Content.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: _propTypes2.default.string,

  /* Add A Divider Line */
  divide: _propTypes2.default.bool,

  /* Set Content For Kicker Message */
  kicker: _propTypes2.default.string,

  /* Set if offset is needed */
  offset: _propTypes2.default.number,

  /* Add Padding To Top */
  padded: _propTypes2.default.bool,

  /* Set The Content For Text Message */
  text: _propTypes2.default.array,

  /* Set The Text Type */
  textType: _propTypes2.default.string,

  /* Set The Content For The Title */
  title: _propTypes2.default.string,

  /* Set The Content Type */
  type: _propTypes2.default.string,

  /* Set The Width Of The Column */
  width: _propTypes2.default.number,

  /* Set A Wrapper To Contain Content */
  wrapper: _propTypes2.default.bool
};

exports.default = Content;