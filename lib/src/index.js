/**
  * <ReactFormScreener />
  */

import React from 'react';
import QuestionInput from './question_input';
import QuestionList from './question_list';

export default class ReactFormScreener extends React.Component {

  constructor(props) {
    super(props);
  }

  // saveProgress() {
  //   ElementActions.save();
  // }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'react-form-screener clearfix' },
        React.createElement(QuestionInput, null),
        React.createElement(QuestionList, { url: this.props.url })
      )
    );
  }

}