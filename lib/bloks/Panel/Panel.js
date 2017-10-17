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

var Panel = function Panel(props) {
  var className = props.className,
      color = props.color,
      heading = props.heading,
      link = props.link;

  var panelClass = (0, _classnames2.default)(_defineProperty({
    'panel-top-nav': true
  }, '' + className, className));
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active
    });
  });
  return _react2.default.createElement(
    _index.Grid,
    { color: color, raised: true },
    _react2.default.createElement(
      _index.Grid.Row,
      null,
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 2, textAlign: 'middle' },
        _react2.default.createElement(_index.Heading, { font: 'body', size: 'regular', text: props.heading })
      ),
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 6, textAlign: 'right', className: panelClass },
        linkData
      )
    )
  );
};

Panel.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  link: _propTypes2.default.array
};

Panel.defaultProps = {
  color: 'white',
  heading: 'Title',
  link: [{ text: 'Link1', ref: '#', active: 'active' }]
};

exports.default = Panel;