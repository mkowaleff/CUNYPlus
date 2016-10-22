

module.exports = (sequelize) =>  {
  var user = sequelize.define('user', {
   userId:{
      type:Sequelize.SERIAL,
      autoIncrement:true, 
      primaryKey : true, 
      unique : true
  },
   firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.belongsToMany(user, {through: 'user_Event', as:'user_Event'});
        models.user.belongsToMany(group, {through: 'user_Group', as:'user_Group'});
      }
    }
  });
  return user;
};