const { turtlesData } = require('../data');

module.exports = {
  getTurtleData,
}

function getTurtleData() {
  return Promise.resolve(turtlesData);
}
