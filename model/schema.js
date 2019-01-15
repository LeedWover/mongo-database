const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trySchema = new Schema({
  title: String,
  message: String
});

const mySchema = mongoose.model("try", trySchema);

module.exports = mySchema;