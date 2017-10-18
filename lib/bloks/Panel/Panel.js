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

var _PanelPage = require('./PanelPage');

var _PanelPage2 = _interopRequireDefault(_PanelPage);

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Panel = function Panel(props) {
  var _cx, _cx2;

  var className = props.className,
      color = props.color,
      heading = props.heading,
      link = props.link,
      side = props.side;

  var panelTopClass = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, '' + className, className), _defineProperty(_cx, 'panel-side-' + side, side), _cx));
  var panelSideClass = (0, _classnames2.default)((_cx2 = {}, _defineProperty(_cx2, '' + className, className), _defineProperty(_cx2, 'panel-side-' + side, side), _cx2));
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active
    });
  });
  if (side === 'top') {
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
          { width: 6, textAlign: 'right', className: panelTopClass },
          linkData
        )
      )
    );
  } else if (side === 'right') {
    return _react2.default.createElement(
      _index.Grid,
      null,
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 7 },
          props.children
        ),
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 1, textAlign: 'middle', color: color, className: panelSideClass },
          _react2.default.createElement(
            _index.Grid,
            null,
            _react2.default.createElement(
              _index.Grid.Row,
              null,
              _react2.default.createElement(
                _index.Grid.Column,
                { width: 8 },
                _react2.default.createElement(_index.Heading, { font: 'body', size: 'regular', text: props.heading })
              )
            ),
            _react2.default.createElement(
              _index.Grid.Row,
              null,
              _react2.default.createElement(
                _index.Grid.Column,
                { width: 8, textAlign: 'left' },
                linkData
              )
            )
          )
        )
      )
    );
  } else {
    return _react2.default.createElement(
      _index.Grid,
      null,
      _react2.default.createElement(
        _index.Grid.Row,
        null,
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 1, textAlign: 'middle', color: color, className: panelSideClass },
          _react2.default.createElement(
            _index.Grid,
            null,
            _react2.default.createElement(
              _index.Grid.Row,
              null,
              _react2.default.createElement(
                _index.Grid.Column,
                { width: 7 },
                _react2.default.createElement(_index.Heading, { font: 'body', size: 'regular', text: props.heading })
              )
            ),
            _react2.default.createElement(
              _index.Grid.Row,
              null,
              _react2.default.createElement(
                _index.Grid.Column,
                { width: 8, textAlign: 'right' },
                linkData
              )
            )
          )
        ),
        _react2.default.createElement(
          _index.Grid.Column,
          { width: 6 },
          props.children
        )
      )
    );
  }
};

Panel.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  link: _propTypes2.default.array,
  side: _propTypes2.default.string
};

Panel.defaultProps = {
  color: 'white',
  heading: 'Title',
  link: [{ text: 'Link1', ref: '#', active: 'active' }],
  side: 'top'
};

Panel.Page = _PanelPage2.default;

exports.default = Panel;