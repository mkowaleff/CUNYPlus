
module.exports = (sequelize) =>  {
  var school = sequelize.define('school', {
  schoolId:{
      type:Sequelize.SERIAL,
      autoIncrement:true, 
      primaryKey : true, 
      unique : true
  },
   schoolName:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    schoolMajor: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    schoolYear: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    SchoolAddress: {
      type: Sequelize.STRING,
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.school.hasMany(user, {foreignKey:'school_ID', targetKey:'id', as:'School'});
      }
    }
  });
  return school;
};