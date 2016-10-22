
module.exports = (sequelize) =>  {
  var group = sequelize.define('group', {
  groupId:{
      type:Sequelize.SERIAL,
      autoIncrement:true, 
      primaryKey : true, 
      unique : true
  },
   groupName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    groupDescription: {
      type: Sequelize.TEXT,
    },
    groupEvent: {
      type: Sequelize.TEXT,
    },

    classMethods: {
      associate: function(models) {
        // associations can be defined here
        group.belongsToMany(user, {through: 'user_Group', as:'user_Group'});
      }
    }
  });
  return group;
};