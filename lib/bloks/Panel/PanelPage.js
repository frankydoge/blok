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

var PanelPage = function PanelPage(props) {
  var className = props.className,
      link = props.link;

  var panelPageClass = (0, _classnames2.default)(_defineProperty({
    'panel-page': true
  }, '' + className, className));
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active
    });
  });
  var offsetHeight = document.getElementById('panelPageId').offsetHeight;
  console.log(offsetHeight);
  return _react2.default.createElement(_index.Heading, { text: 'Hi' });
};

PanelPage.propTypes = {
  className: _propTypes2.default.string,
  link: _propTypes2.default.array
};

PanelPage.defaultProps = {
  link: [{ text: 'Link1', ref: '#', active: 'active' }]
};

exports.default = PanelPage;