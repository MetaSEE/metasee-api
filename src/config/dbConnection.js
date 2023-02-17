let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://metasee:metasee@metasee.7iyea2q.mongodb.net/metasee");

let db = mongoose.connection;

module.exports = db;