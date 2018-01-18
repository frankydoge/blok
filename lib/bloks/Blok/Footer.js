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

var Footer = function Footer(props) {
  var color = props.color,
      link = props.link,
      text = props.text,
      transparent = props.transparent;

  var blokFooterClass = (0, _classnames2.default)({
    'blok-footer': true,
    'transparent': transparent
  });
  var blokFooterLinkClass = (0, _classnames2.default)({
    'blok-footer-link': true
  });
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active,
      type: 'nav'
    });
  });
  return _react2.default.createElement(
    _index.Grid,
    { color: color, className: blokFooterClass },
    _react2.default.createElement(
      _index.Grid.Row,
      null,
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 12, textAlign: 'middle', className: blokFooterLinkClass },
        linkData
      ),
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 12, textAlign: 'middle' },
        _react2.default.createElement(_index.Text, { tag: 'p', font: 'body', size: 'text', text: text })
      )
    )
  );
};

Footer.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: _propTypes2.default.string,

  /* Create The Footer Navigation */
  link: _propTypes2.default.array,

  /* Set The Content For Text Message */
  text: _propTypes2.default.string,

  /* Set Transparency Of Background */
  transparent: _propTypes2.default.bool
};

Footer.defaultProps = {
  color: 'white'
};

exports.default = Footer;