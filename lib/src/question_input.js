'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UUID = require('./UUID');

var _UUID2 = _interopRequireDefault(_UUID);

var _ScreenerActions = require('./actions/ScreenerActions');

var _ScreenerActions2 = _interopRequireDefault(_ScreenerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * <QuestionInput />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */

var QuestionInput = function (_React$Component) {
  _inherits(QuestionInput, _React$Component);

  function QuestionInput(props) {
    _classCallCheck(this, QuestionInput);

    var _this = _possibleConstructorReturn(this, (QuestionInput.__proto__ || Object.getPrototypeOf(QuestionInput)).call(this, props));

    _this.state = {
      answer: 'true',
      question: ''
    };
    return _this;
  }

  _createClass(QuestionInput, [{
    key: 'addQuestion',
    value: function addQuestion() {
      _ScreenerActions2.default.createElement({ question: this.state.question, answer: this.state.answer, id: _UUID2.default.uuid() });
      // reset values
      this.setState({ question: '', answer: 'true' });
      _react2.default.findDOMNode(this.refs.answer).value = 'true';
      _react2.default.findDOMNode(this.refs.question).value = '';
      _react2.default.findDOMNode(this.refs.question).focus();
    }
  }, {
    key: 'questionChange',
    value: function questionChange(e) {
      this.setState({ question: e.target.value });
    }
  }, {
    key: 'answerChange',
    value: function answerChange(e) {
      this.setState({ answer: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'question-input' },
        _react2.default.createElement(
          'h3',
          null,
          'Add Question'
        ),
        _react2.default.createElement(
          'div',
          { className: 'clearfix' },
          _react2.default.createElement(
            'div',
            { className: 'form-group pull-left' },
            _react2.default.createElement(
              'div',
              { className: 'form-group-column' },
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Question'
              ),
              _react2.default.createElement('input', { ref: 'question', type: 'text', name: 'question', id: 'question', className: 'form-control', onChange: this.questionChange.bind(this) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group-column' },
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Correct Answer'
              ),
              _react2.default.createElement(
                'select',
                { ref: 'answer', className: 'form-control', onChange: this.answerChange.bind(this) },
                _react2.default.createElement(
                  'option',
                  { value: 'true' },
                  'Yes'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'false' },
                  'No'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group-column' },
              _react2.default.createElement(
                'button',
                { id: 'add-question', className: 'btn btn-school', onClick: this.addQuestion.bind(this) },
                'Add'
              )
            )
          )
        )
      );
    }
  }]);

  return QuestionInput;
}(_react2.default.Component);

exports.default = QuestionInput;