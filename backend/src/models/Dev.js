const { Schema, model } = require('mongoose');

const PointSchema = require('./utils/PointSchema');

const DevSchema = new Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        indexes: '2dsphere'
    }
});

module.exports = model('User', DevSchema);