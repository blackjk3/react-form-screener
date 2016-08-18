import React from 'react';
var SortableItemMixin = require('react-sortable-items/SortableItemMixin')

export default React.createClass({
  mixins: [SortableItemMixin],
  render() {
    return this.renderWithSortable(
      <div className="rfs-item">
        <div className="clearfix">
          <div className="question-column">
            {this.props.item.question}
          </div>
          <div className="clearfix question-column">
            <span className="label answer label-default">
              {this.props.item.answer === 'true' ? 'Yes' : 'No'}
            </span>
            <button className="btn is-isolated btn-link" onClick={this.props._onDestroy.bind(this, this.props.item)}>
              <i className="fa fa-trash-o is-isolated"></i>
              <span className="is-isolated"> Delete</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
})