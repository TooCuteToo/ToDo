const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
  },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;

