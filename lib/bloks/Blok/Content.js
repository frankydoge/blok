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

var Content = function Content(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      container = props.container,
      divide = props.divide,
      kicker = props.kicker,
      offset = props.offset,
      padded = props.padded,
      text = props.text,
      textType = props.textType,
      title = props.title,
      type = props.type,
      width = props.width;

  var blokContentClass = (0, _classnames2.default)({
    'blok-content': true,
    'blok-content-padded': padded
  });
  var blokContentTextClass = (0, _classnames2.default)(_defineProperty({}, '' + className, className));
  var blokContentDivideClass = (0, _classnames2.default)({
    'blok-content-divide': divide
  });
  if (type == "article") {
    var _textData = text.map(function (data, key) {
      if (data.textType == 'title') {
        _react2.default.createElement(_index.Text, {
          key: key,
          text: data.text,
          className: blokContentTextClass,
          font: 'heading',
          size: 'h1',
          tag: 'h1',
          textAlign: 'left',
          type: data.textType
        });
      } else if (data.textType == 'sub') {
        _react2.default.createElement(_index.Text, {
          key: key,
          text: data.text,
          className: blokContentTextClass,
          font: 'heading',
          size: 'h3',
          tag: 'h2',
          textAlign: 'left',
          type: data.textType
        });
      } else {
        _react2.default.createElement(_index.Text, {
          key: key,
          text: data.text,
          className: blokContentTextClass,
          font: 'body',
          size: 'text',
          tag: 'p',
          textAlign: 'left',
          type: data.textType
        });
      }
    });
  } else {
    var _textData2 = '';
  }
  if (container) {
    return _react2.default.createElement(
      _index.Grid,
      { color: color, className: blokContentClass },
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        props.children
      )
    );
  } else if (type == "article") {
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left', className: blokContentDivideClass },
      textData
    );
  } else {
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left', className: blokContentDivideClass },
      'No Content Type'
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

  /* Add A Container to Contain Content */
  container: _propTypes2.default.bool,

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
  width: _propTypes2.default.number
};

Content.defaultProps = {
  textType: 'paragraph'
};

exports.default = Content;