const mongoose = require('mongoose');

/*
User name
Email
Gender
*/ 

const UserSchema = new mongoose.Schema({
    name : String,
    email: String,
    gender : String,
});

module.exports = mongoose.model('User', UserSchema);