import React from 'react';
var SortableItemMixin = require('react-sortable-items/SortableItemMixin');

export default React.createClass({
  displayName: 'question',

  mixins: [SortableItemMixin],
  render() {
    return this.renderWithSortable(React.createElement(
      'div',
      { className: 'rfs-item' },
      React.createElement(
        'div',
        { className: 'clearfix' },
        React.createElement(
          'div',
          { className: 'question-column' },
          this.props.item.question
        ),
        React.createElement(
          'div',
          { className: 'clearfix question-column' },
          React.createElement(
            'span',
            { className: 'label answer label-default' },
            this.props.item.answer === 'true' ? 'Yes' : 'No'
          ),
          React.createElement(
            'button',
            { className: 'btn is-isolated btn-link', onClick: this.props._onDestroy.bind(this, this.props.item) },
            React.createElement('i', { className: 'fa fa-trash-o is-isolated' }),
            React.createElement(
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