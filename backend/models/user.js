
module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            generated: true,
            allowNull : false,
        },
        name : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        email : {
            type: DataTypes.STRING,
            allowNull : false,
            unique : true, 
        },
        password : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        isAdmin : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });
    User.associate = function(models){
        User.hasMany(models.Post,{ onDelete: "cascade"});
        User.hasMany(models.Comment, { onDelete: "cascade"});
    }
    return User;
}