/**
  * <QuestionInput />
  */

import React from 'react';
import ID from './UUID';
import ScreenerActions from './actions/ScreenerActions'

export default class QuestionInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      answer: 'true',
      question: ''
    }
  }

  addQuestion() {
    ScreenerActions.createElement({question: this.state.question, answer: this.state.answer, id: ID.uuid()})
    // reset values
    this.setState({question: '', answer: 'true'});
    React.findDOMNode(this.refs.answer).value = 'true';
    React.findDOMNode(this.refs.question).value = '';
    React.findDOMNode(this.refs.question).focus();
  }

  questionChange(e) {
    this.setState({question: e.target.value})
  }

  answerChange(e) {
    this.setState({answer: e.target.value})
  }

  render() {
    return (
      <div className="question-input">
        <h3>Add Question</h3>

        <div className="clearfix">
          <div className="form-group pull-left">
            <div className="form-group-column">
              <label className="control-label">Question</label>
              <input ref="question" type="text" name="question" id="question" className="form-control" onChange={this.questionChange.bind(this)} />
            </div>
            <div className="form-group-column">
              <label className="control-label">Correct Answer</label>
              <select ref="answer" className="form-control" onChange={this.answerChange.bind(this)}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="form-group-column">
              <button id="add-question" className="btn btn-school" onClick={this.addQuestion.bind(this)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}