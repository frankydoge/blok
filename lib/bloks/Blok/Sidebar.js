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

var Sidebar = function Sidebar(props) {
  var children = props.children,
      className = props.className,
      link = props.link,
      offset = props.offset,
      tag = props.tag,
      title = props.title,
      type = props.type,
      width = props.width;

  var blokSidebarClass = (0, _classnames2.default)(_defineProperty({
    'blok-sidebar': true
  }, '' + className, className));
  var blokSidebarTitleClass = (0, _classnames2.default)(_defineProperty({
    'blok-sidebar-title': true
  }, '' + className, className));
  var ElementTag = '' + props.tag;
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active,
      type: data.type,
      size: 'text',
      className: 'blok-sidebar-link'
    });
  });
  return _react2.default.createElement(
    _index.Grid.Column,
    { width: width, offset: offset, className: blokSidebarClass },
    _react2.default.createElement(
      _index.Blok.Container,
      null,
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 12 },
        _react2.default.createElement(_index.Text, { font: 'heading', type: 'title-small', size: 'h4', tag: 'h2', text: props.title, className: blokSidebarTitleClass })
      ),
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 12 },
        linkData
      )
    )
  );
};

Sidebar.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Create The Footer Navigation */
  link: _propTypes2.default.array,

  /* Set if offset is needed */
  offset: _propTypes2.default.number,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string,

  /* Set The Content For The Title */
  title: _propTypes2.default.string,

  /* Set The Link Type */
  type: _propTypes2.default.string,

  /* Set The Width Of The Column */
  width: _propTypes2.default.number
};

Sidebar.defaultProps = {
  offset: 1,
  tag: 'div',
  title: 'Website',
  width: 2
};

exports.default = Sidebar;