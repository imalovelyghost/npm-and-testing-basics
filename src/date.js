var moment = require('moment');

/**
 * TODO: all getters, all get method must return a value
 * */

function getFullDate() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

function getWeekDay() {
  // TODO implement
}

function getCurrentMonth() {
  // TODO implement
}

function getCurrentYear() {
  // TODO implement
}

module.exports = {
  getFullDate: getFullDate,
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
