const mongoose = require('mongoose')

const admin = mongoose.model('admins',{
    username:{
        type: String
    },
    password: {
        type: String
    },
});

module.exports = admin