const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://127.0.0.1:27017/elections',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;

db.once('open', () => {
    console.log('connection successful with database');
})