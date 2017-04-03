/**
  * <QuestionList />
  */

import React from 'react';
import ScreenerStore from './stores/ScreenerStore';
import ScreenerActions from './actions/ScreenerActions';
import Sortable from 'react-sortable-items';
import Question from './question';

export default class QuestionList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    ScreenerStore.load(this.props.url);
    ScreenerStore.listen(this._onChange.bind(this));
  }

  _onChange(data) {
    this.setState({
      data: data
    });
  }

  _onDestroy(item) {
    // console.log(item);
    ScreenerActions.deleteElement(item);
  }

  handleSort(orderedIds) {
    let sortedArray = [];
    let data = this.state.data;
    let index = 0;

    for (var i = 0, len = data.length; i < len; i++) {
      index = orderedIds.indexOf(data[i].id);
      sortedArray[index] = data[i];
    }

    ScreenerActions.updateOrder(sortedArray);
    this.state.data = sortedArray;
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Question List'
      ),
      React.createElement(
        'div',
        { className: 'question-list' },
        React.createElement(
          Sortable,
          { sensitivity: 0, key: this.state.data.length, onSort: this.handleSort.bind(this) },
          this.state.data.map(item => {
            return React.createElement(Question, { key: item.id, sortData: item.id, item: item, _onDestroy: this._onDestroy });
          })
        )
      )
    );
  }
}