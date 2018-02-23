var express = require('express');
var app= express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Authors');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/authors-app/dist'));

var AuthorSchema =  new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quotes: { type: [String] },
    votes: { type: Number, default: 0 }
}, { timestamps: true });

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

app.get('/api/authors', function(req,res){
    Author.find({}).sort('name').exec(function(err, authors){
        if(err){
            res.json(err);
        } else {
            res.json(authors);        
        }
    })
})

app.post('/api/authors', function (req,res){
    console.log('post /api/authors, req.body', req.body)
    var newAuthor = new Author({name: req.body.name});
    newAuthor.save(function(err){
        if(err){
            console.log('validation errors');
            res.json(err);
        } else {
            console.log('succussfully added the author: ', newAuthor.name);
            res.json(newAuthor);
        }
    })
})

app.get('/api/authors/:id', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, foundAuthor){
        if(err){
            res.json(err);
        } else {
            res.json(foundAuthor);
        }
    })
})

app.put('/api/authors', function (req,res){
    console.log('put /api/authors, req.body', req.body)
    Author.findOne({_id: req.body._id}, function(err, foundAuthor){
        if(err){
            res.json(err);
        } else {
            foundAuthor.name = req.body.name;
            foundAuthor.save(function(err){
                if(err){
                    res.json(err);
                } else {
                    console.log('author update saved');
                    res.json(foundAuthor);
                }
            })
        }
    })
})

app.delete('/api/authors/:id', function(req, res){
    Author.remove({_id: req.params.id}, function(err){
        if(err){
            res.json(err);
        } else {
            res.json({message: 'deleted'});
        }
    })
})

app.all('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/authors-app/dist/index.html'));
})

app.listen('8000', function () {
    console.log('listening on port 8000');
})