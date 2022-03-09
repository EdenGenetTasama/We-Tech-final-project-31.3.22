const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Comments = new schema({},{ timestamps: true });

module.exports = mongoose.model('Comment' , Comments)