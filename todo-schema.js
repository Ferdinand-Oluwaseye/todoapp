var mongoose = require("mongoose");


exports.TodoSchema = mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String,
        require: [true, 'Title needed'],
        maxlength: 50
    }
});

exports.TodoModel = mongoose.model('Todo', this.TodoSchema);