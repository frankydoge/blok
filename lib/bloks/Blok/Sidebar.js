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

var Sidebar = function Sidebar(props) {
  var children = props.children,
      className = props.className,
      link = props.link,
      tag = props.tag;

  var sidebarClass = (0, _classnames2.default)(_defineProperty({
    'sidebar': true
  }, '' + className, className));
  var ElementTag = '' + props.tag;
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active
    });
  });
  return _react2.default.createElement(
    ElementTag,
    { className: sidebarClass },
    linkData
  );
};

Sidebar.propTypes = {
  /* Add Custom Content */
  children: _propTypes2.default.node,

  /* Add Custom Classes */
  className: _propTypes2.default.string,

  /* Create The Footer Navigation */
  link: _propTypes2.default.array,

  /* Set The Tag For The Element */
  tag: _propTypes2.default.string
};

Sidebar.defaultProps = {
  tag: 'div'
};

exports.default = Sidebar;