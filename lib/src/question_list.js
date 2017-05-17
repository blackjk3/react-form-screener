'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ScreenerStore = require('./stores/ScreenerStore');

var _ScreenerStore2 = _interopRequireDefault(_ScreenerStore);

var _ScreenerActions = require('./actions/ScreenerActions');

var _ScreenerActions2 = _interopRequireDefault(_ScreenerActions);

var _reactSortableItems = require('react-sortable-items');

var _reactSortableItems2 = _interopRequireDefault(_reactSortableItems);

var _question = require('./question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * <QuestionList />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */

var QuestionList = function (_React$Component) {
  _inherits(QuestionList, _React$Component);

  function QuestionList(props) {
    _classCallCheck(this, QuestionList);

    var _this = _possibleConstructorReturn(this, (QuestionList.__proto__ || Object.getPrototypeOf(QuestionList)).call(this, props));

    _this.state = {
      data: []
    };

    _ScreenerStore2.default.load(_this.props.url);
    _ScreenerStore2.default.listen(_this._onChange.bind(_this));
    return _this;
  }

  _createClass(QuestionList, [{
    key: '_onChange',
    value: function _onChange(data) {
      this.setState({
        data: data
      });
    }
  }, {
    key: '_onDestroy',
    value: function _onDestroy(item) {
      // console.log(item);
      _ScreenerActions2.default.deleteElement(item);
    }
  }, {
    key: 'handleSort',
    value: function handleSort(orderedIds) {
      var sortedArray = [];
      var data = this.state.data;
      var index = 0;

      for (var i = 0, len = data.length; i < len; i++) {
        index = orderedIds.indexOf(data[i].id);
        sortedArray[index] = data[i];
      }

      _ScreenerActions2.default.updateOrder(sortedArray);
      this.state.data = sortedArray;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Question List'
        ),
        _react2.default.createElement(
          'div',
          { className: 'question-list' },
          _react2.default.createElement(
            _reactSortableItems2.default,
            { sensitivity: 0, key: this.state.data.length, onSort: this.handleSort.bind(this) },
            this.state.data.map(function (item) {
              return _react2.default.createElement(_question2.default, { key: item.id, sortData: item.id, item: item, _onDestroy: _this2._onDestroy });
            })
          )
        )
      );
    }
  }]);

  return QuestionList;
}(_react2.default.Component);

exports.default = QuestionList;