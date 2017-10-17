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

var Panel = function Panel(props) {
  var color = props.color,
      heading = props.heading,
      link = props.link,
      side = props.side;

  var linkData = link.maps(function (link, key) {
    _react2.default.createElement(_index.Link, {
      key: key,
      text: link.text,
      ref: link.text,
      active: link.active
    });
  });
  if (side === true) {
    return _react2.default.createElement(
      _index.Grid,
      { compact: true, color: color },
      _react2.default.createElement(
        _index.Grid.Column,
        null,
        _react2.default.createElement(
          _index.Grid,
          { compact: true, color: color },
          _react2.default.createElement(
            _index.Grid.Column,
            { textAlign: 'middle' },
            _react2.default.createElement(
              _index.Heading,
              { font: 'body' },
              props.heading
            )
          )
        ),
        _react2.default.createElement(
          _index.Grid,
          { compact: true, color: color },
          _react2.default.createElement(
            _index.Grid.Column,
            { textAlign: 'right' },
            linkData
          )
        )
      ),
      _react2.default.createElement(
        _index.Grid.Column,
        null,
        props.children
      )
    );
  } else {
    return _react2.default.createElement(
      _index.Grid,
      { compact: true, color: color, hover: true },
      _react2.default.createElement(
        _index.Grid.Column,
        { textAlign: 'middle' },
        _react2.default.createElement(
          _index.Heading,
          { font: 'body' },
          props.heading
        )
      ),
      _react2.default.createElement(_index.Grid.Column, null),
      _react2.default.createElement(
        _index.Grid.Column,
        { textAlign: 'right' },
        linkData
      )
    );
  }
};

Panel.propTypes = {
  color: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  link: _propTypes2.default.array,
  side: _propTypes2.default.bool
};

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title',
  link: "[[text: 'Link1', ref: '#'],[text: 'Link2', ref: '#']]",
  side: false
};

exports.default = Panel;