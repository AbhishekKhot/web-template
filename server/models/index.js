const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
if (env == 'development') require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
)

const db = {
    User: require('./User')(sequelize, Sequelize.DataTypes),
    Tweet: require('./Tweet')(sequelize, Sequelize.DataTypes),
    Comment: require('./Comment')(sequelize, Sequelize.DataTypes),
    FollowerFollowing: require('./Follower_Following')(sequelize, Sequelize.DataTypes)
}

Object.keys(db).forEach((modelName) => {
    if (db[modelName].hasOwnProperty("associate")) {
        db[modelName].associate(db);
    }
});




db.sequelize = sequelize
db.Sequelize = Sequelize
db.Op = Sequelize.Op

module.exports = db

