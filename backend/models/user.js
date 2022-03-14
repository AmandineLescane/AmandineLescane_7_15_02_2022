
module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define("User", {
        nom : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        prenom : {
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
            default: false,
        }
    });
    User.associate = function(models){
        User.hasMany(models.Post);
        User.hasMany(models.Comment);
    }
    return User;
}