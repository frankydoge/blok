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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Table = function Table(props) {
  var children = props.children,
      className = props.className,
      tag = props.tag,
      text = props.text,
      type = props.type;

  if (tag == 'table') {
    var tableClass = (0, _classnames2.default)(_defineProperty({
      'table': true
    }, '' + className, className));
  } else if (tag == 'tr') {
    var tableClass = (0, _classnames2.default)(_defineProperty({
      'table-row': true
    }, '' + className, className));
  } else if (tag == 'th') {
    var tableClass = (0, _classnames2.default)(_defineProperty({
      'table-header': true
    }, '' + className, className));
  } else {
    var tableClass = (0, _classnames2.default)(_defineProperty({
      'table-cell': true
    }, '' + className, className));
  }
  var ElementTag = '' + props.tag;
  if (text) {
    var textData = text.map(function (data, key) {
      return _react2.default.createElement(_index.Text, {
        key: key,
        tag: data.tag,
        text: data.text,
        className: data.className
      });
    });
    return _react2.default.createElement(
      ElementTag,
      { className: tableClass },
      textData
    );
  } else {
    return _react2.default.createElement(
      ElementTag,
      { className: tableClass },
      props.children
    );
  }
};

Table.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string,

  /* Set The Content For Text Message */
  text: _propTypes2.default.array,

  /* Set The Text Type */
  type: _propTypes2.default.string
};

Table.defaultProps = {
  tag: 'tr',
  type: 'paragraph'
};

exports.default = Table;