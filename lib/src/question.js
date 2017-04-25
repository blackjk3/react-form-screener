'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortableItemMixin = require('react-sortable-items/SortableItemMixin');

exports.default = _react2.default.createClass({
  displayName: 'question',

  mixins: [SortableItemMixin],
  render: function render() {
    return this.renderWithSortable(_react2.default.createElement(
      'div',
      { className: 'rfs-item' },
      _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        _react2.default.createElement(
          'div',
          { className: 'question-column' },
          this.props.item.question
        ),
        _react2.default.createElement(
          'div',
          { className: 'clearfix question-column' },
          _react2.default.createElement(
            'span',
            { className: 'label answer label-default' },
            this.props.item.answer === 'true' ? 'Yes' : 'No'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn is-isolated btn-link', onClick: this.props._onDestroy.bind(this, this.props.item) },
            _react2.default.createElement('i', { className: 'fa fa-trash-o is-isolated' }),
            _react2.default.createElement(
              'span',
              { className: 'is-isolated' },
              ' Delete'
            )
          )
        )
      )
    ));
  }
});