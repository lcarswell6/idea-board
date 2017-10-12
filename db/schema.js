const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        default: "New Title"
    },
    description: {
        type: String
    },
    created: {
        type: Date, default: Date.now
    },

})

const UserSchema = new Schema({
    id: {},
    userName: {
        type: String,

    },
    password: {
        type: String,
    },
    ideas: [IdeaSchema]
})

const IdeaModel = mongoose.model('Idea', IdeaSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
IdeaModel, UserModel
}