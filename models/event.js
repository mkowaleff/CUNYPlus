
module.exports = (sequelize) =>  {
  var event = sequelize.define('event', {
    eventId:{
      type:Sequelize.SERIAL,
      autoIncrement:true, 
      primaryKey : true, 
      unique : true
  },
   eventName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventDate: {
      type: Sequelize.Date,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventPlace: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventHost: {
      type: Sequelize.STRING,
    },
    eventGuests: {
      type: Sequelize.STRING,
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.event.belongsToMany(event, {through: 'user_Event', as:'user_Event'});
      }
    }
  });
  return event;
};