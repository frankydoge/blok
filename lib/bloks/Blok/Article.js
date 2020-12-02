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

var Article = function Article(props) {
  var children = props.children,
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

  var blokContentTextClass = (0, _classnames2.default)({
    'blok-content-text': true,
    'blok-content-text-padded': padded
  });
  if (title && kicker && text) {
    var textData = text.map(function (data, key) {
      return _react2.default.createElement(_index.Text, {
        key: key,
        text: data.text,
        className: blokContentTextClass,
        font: 'body',
        size: 'text',
        tag: 'p',
        textAlign: 'left',
        type: data.type,
        padded: props.padded
      });
    });
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'title', size: 'h1', text: props.title }),
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'sub', size: 'h3', tag: 'h2', text: props.kicker }),
      textData,
      props.children
    );
  } else if (title && kicker) {
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'title', size: 'h1', text: props.title }),
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'sub', size: 'h3', tag: 'h2', text: props.kicker }),
      props.children
    );
  } else if (title && text) {
    var _textData = text.map(function (data, key) {
      return _react2.default.createElement(_index.Text, {
        key: key,
        text: data.text,
        className: blokContentTextClass,
        font: 'body',
        size: 'text',
        tag: 'p',
        textAlign: 'left',
        type: data.type,
        padded: props.padded
      });
    });
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'title', size: 'h1', text: props.title }),
      _textData,
      props.children
    );
  } else if (title) {
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'title', size: 'h1', text: props.title }),
      props.children
    );
  } else if (kicker && text) {
    var _textData2 = text.map(function (data, key) {
      return _react2.default.createElement(_index.Text, {
        key: key,
        text: data.text,
        className: blokContentTextClass,
        font: 'body',
        size: 'text',
        tag: 'p',
        textAlign: 'left',
        type: data.type,
        padded: props.padded
      });
    });
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'sub', size: 'h3', tag: 'h2', text: props.kicker }),
      _textData2,
      props.children
    );
  } else if (kicker) {
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _react2.default.createElement(_index.Text, { font: 'heading', type: 'sub', size: 'h3', tag: 'h2', text: props.kicker }),
      props.children
    );
  } else if (text) {
    var _textData3 = text.map(function (data, key) {
      return _react2.default.createElement(_index.Text, {
        key: key,
        text: data.text,
        className: blokContentTextClass,
        font: 'body',
        size: 'text',
        tag: 'p',
        textAlign: 'left',
        type: data.type,
        padded: props.padded
      });
    });
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      _textData3,
      props.children
    );
  } else {
    return _react2.default.createElement(
      _index.Grid.Column,
      { width: width, offset: offset, textAlign: 'left' },
      props.children
    );
  }
};

Article.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

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

Article.defaultProps = {
  width: 12
};

exports.default = Article;