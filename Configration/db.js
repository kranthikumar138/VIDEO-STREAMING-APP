const{MONGO_URI} = require('../env/env')
const mongoose = require('mongoose');


const connectDB = async () => {
mongoose.connect(MONGO_URI, {});
mongoose.connection.on('connected', () => {
  console.log("connected to mongodb succesfully");
})
}
module.exports = connectDB;