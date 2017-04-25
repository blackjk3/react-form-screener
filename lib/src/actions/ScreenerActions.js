'use strict';

var Reflux = require('reflux');

var ScreenerActions = Reflux.createActions(['createElement', 'editElement', 'deleteElement', 'updateOrder', 'save']);

module.exports = ScreenerActions;