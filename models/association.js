


school.hasMany(user, {foreignKey:'school_ID', targetKey:'id', as:'School'});

user.belongsToMany(user, {through: 'user_Event', as:'user_Event'});
event.belongsToMany(event, {through: 'user_Event', as:'user_Event'});

user.belongsToMany(group, {through: 'user_Group', as:'user_Group'});
group.belongsToMany(user, {through: 'user_Group', as:'user_Group'});