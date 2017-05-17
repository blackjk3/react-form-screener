'use strict';

var Reflux = require('reflux');
var ScreenerActions = require('../actions/ScreenerActions');

var _data;

var ScreenerStore = Reflux.createStore({
  init: function init() {
    this.listenTo(ScreenerActions.createElement, this._create);
    this.listenTo(ScreenerActions.deleteElement, this._delete);
    this.listenTo(ScreenerActions.save, this.save);
    this.listenTo(ScreenerActions.updateOrder, this._updateOrder);
  },

  load: function load(urlOrData) {
    var self = this;

    if (typeof urlOrData == 'string' || urlOrData instanceof String) {
      $.ajax({
        url: urlOrData,
        success: function success(data) {
          _data = data;
          self.trigger(_data);
        }
      });
    } else {
      _data = urlOrData;
      self.trigger(_data);
    }
  },

  _create: function _create(element) {
    _data.push(element);
    this.trigger(_data);
    this.save();
  },

  _delete: function _delete(element) {
    var index = _data.indexOf(element);
    _data.splice(index, 1);
    this.trigger(_data);
    this.save();
  },

  _updateOrder: function _updateOrder(elements) {
    _data = elements;
    this.trigger(_data);
    this.save();
  },

  save: function save() {
    $.ajax({
      type: 'POST',
      url: SAVE_URL,
      data: {
        task_data: JSON.stringify(_data)
      },
      dataType: 'json',
      success: function success(data) {
        console.log('Saved... ', arguments);
        //$this.html('<i class="fa fa-check-circle"></i> Save Complete');

        // setTimeout(function() {
        //   $this.html('Save Progress');
        // }, 3000);
      }
    });
  }

});

module.exports = ScreenerStore;