'use strict';
module.exports = (sequelize, DataTypes) => {
  var event = sequelize.define('event', {
    date: DataTypes.DATE,
    event: DataTypes.STRING,
    time: DataTypes.TIME
  }, {});
  event.associate = function(models) {
    // associations can be defined here
  };
  return event;
};