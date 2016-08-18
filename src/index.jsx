/**
  * <ReactFormScreener />
  */

import React from 'react';
import QuestionInput from './question_input'
import QuestionList from './question_list'

export default class ReactFormScreener extends React.Component {

  constructor(props) {
    super(props);
  }

  // saveProgress() {
  //   ElementActions.save();
  // }

  render() {
    return (
      <div>
        <div className="react-form-screener clearfix">
          <QuestionInput />
          <QuestionList url={this.props.url} />
        </div>
      </div>
    );
  }

}