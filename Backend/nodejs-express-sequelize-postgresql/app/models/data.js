'use strict';
module.exports = (sequelize, DataTypes) => {
var Data = sequelize.define('Data',  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoincrement: true
    },
    name:DataTypes.STRING,
    address:DataTypes.STRING,
    phone_number:DataTypes.INTEGER
  }, {
    underscored: true,
    timestamps: false
  });
  Data.associate = function(models) {
    // associations can be defined here
  };
  return Data;
};
// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// class Data extends Model {}
// Data.init({
//   id: {
//     type: DataTypes.UUID,
//     primaryKey: true
//   },
//   name:DataTypes.STRING,
//   address:DataTypes.STRING,
//   phone_number:DataTypes.INTEGER
// }, { sequelize, modelName: 'Data' });

// (async () => {
//   await sequelize.sync();
//   const jane = await Data.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();