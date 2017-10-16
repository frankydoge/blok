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

  if (side === true) {
    var linkData = link.map(function (link, id) {
      return _react2.default.createElement(_index.Link, { ref: link.ref, text: link.text, key: id, active: link.active });
    });
    return _react2.default.createElement(
      _index.Grid,
      { compact: true, color: color },
      _react2.default.createElement(
        _index.Column,
        null,
        _react2.default.createElement(
          _index.Grid,
          { compact: true, color: color },
          _react2.default.createElement(
            _index.Column,
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
            _index.Column,
            { textAlign: 'right' },
            props.linkData
          )
        )
      ),
      _react2.default.createElement(
        _index.Column,
        null,
        props.children
      )
    );
  } else {
    var _linkData = link.map(function (link, id) {
      return _react2.default.createElement(_index.Link, { ref: link.ref, text: link.text, key: id, active: link.active });
    });
    return _react2.default.createElement(
      _index.Grid,
      { compact: true, color: color, hover: true },
      _react2.default.createElement(
        _index.Column,
        { textAlign: 'middle' },
        _react2.default.createElement(
          _index.Heading,
          { font: 'body' },
          props.heading
        )
      ),
      _react2.default.createElement(_index.Column, null),
      _react2.default.createElement(
        _index.Column,
        { textAlign: 'right' },
        props.linkData
      )
    );
  }
};

Panel.propTypes = {
  color: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  link: _propTypes2.default.object,
  side: _propTypes2.default.bool
};

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title',
  side: false
};

exports.default = Panel;