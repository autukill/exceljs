// for the benefit of browserify, include browser friendly promise
var setConfigValue = require('./config/set-value');
setConfigValue('promise', require('promish/dist/promish-node'), false);

var ExcelJS = {
  Workbook: require("./doc/workbook")
};

Object.assign(ExcelJS, require("./doc/enums"));

module.exports = ExcelJS;