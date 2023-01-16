const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_age: {
        type: Number,
    }
})

module.exports = mongoose.model('User', Schema);