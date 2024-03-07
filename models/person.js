const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const Person = mongoose.model("Person", PersonSchema);
module.exports = Person;
