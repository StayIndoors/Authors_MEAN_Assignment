var mongoose = require('mongoose');
var AuthorSchema =  new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quotes: [{
        content: { type: String, required: true, minlength: 5},
        votes: { type: Number, default: 0},
    }]
}, { timestamps: true });

mongoose.model('Author', AuthorSchema);
