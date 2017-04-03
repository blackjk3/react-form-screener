/**
  * <QuestionInput />
  */

import React from 'react';
import ID from './UUID';
import ScreenerActions from './actions/ScreenerActions';

export default class QuestionInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      answer: 'true',
      question: ''
    };
  }

  addQuestion() {
    ScreenerActions.createElement({ question: this.state.question, answer: this.state.answer, id: ID.uuid() });
    // reset values
    this.setState({ question: '', answer: 'true' });
    React.findDOMNode(this.refs.answer).value = 'true';
    React.findDOMNode(this.refs.question).value = '';
    React.findDOMNode(this.refs.question).focus();
  }

  questionChange(e) {
    this.setState({ question: e.target.value });
  }

  answerChange(e) {
    this.setState({ answer: e.target.value });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'question-input' },
      React.createElement(
        'h3',
        null,
        'Add Question'
      ),
      React.createElement(
        'div',
        { className: 'clearfix' },
        React.createElement(
          'div',
          { className: 'form-group pull-left' },
          React.createElement(
            'div',
            { className: 'form-group-column' },
            React.createElement(
              'label',
              { className: 'control-label' },
              'Question'
            ),
            React.createElement('input', { ref: 'question', type: 'text', name: 'question', id: 'question', className: 'form-control', onChange: this.questionChange.bind(this) })
          ),
          React.createElement(
            'div',
            { className: 'form-group-column' },
            React.createElement(
              'label',
              { className: 'control-label' },
              'Correct Answer'
            ),
            React.createElement(
              'select',
              { ref: 'answer', className: 'form-control', onChange: this.answerChange.bind(this) },
              React.createElement(
                'option',
                { value: 'true' },
                'Yes'
              ),
              React.createElement(
                'option',
                { value: 'false' },
                'No'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group-column' },
            React.createElement(
              'button',
              { id: 'add-question', className: 'btn btn-school', onClick: this.addQuestion.bind(this) },
              'Add'
            )
          )
        )
      )
    );
  }
}