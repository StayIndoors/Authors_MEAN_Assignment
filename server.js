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
    quotes: [{
        content: { type: String, required: true, minlength: 5},
        votes: { type: Number, default: 0},
    }]
}, { timestamps: true });

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

// Author functions
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

// Quote functions
app.put('/api/quote', function (req,res){
    console.log('put /api/quote, req.body', req.body);
    Author.findOne({_id: req.body.authId}, function(err, foundAuthor){
        console.log('author found to add quote: ', foundAuthor);
        if(err){
            console.log('put /api/quote error: failed to find Author')
            res.json(err);
        } else {
            console.log('rec.body.content: ', req.body.content)
            foundAuthor.quotes.push(req.body);
            foundAuthor.save(function(err){
                if(err){
                    console.log('failed to update quote');
                    res.json(err);
                } else {
                    console.log('author new quote saved');
                    res.json(foundAuthor);
                }
            })
        }
    })
})

app.put('/api/upVote', function (req, res){
    console.log('put /api/upVote', req.body);
    Author.findOne({_id: req.body.authorId}, function(err, foundAuthor){
        if(err){
            console.log('put /api/upVote/quote error: failed to find Author')
            res.json(err);
        } else {
            console.log('found Author: ', foundAuthor);
            for (let i = 0; i < foundAuthor.quotes.length; i++){
                if (foundAuthor.quotes[i]._id == req.body._id){
                    foundAuthor.quotes[i].votes += 1;
                    foundAuthor.save(function(err){
                        if(err){
                            console.log('failed to increase quotes vote');
                            res.json(err);
                        } else {
                            console.log('authors quote vote increased');
                            res.json(foundAuthor);
                        }
                    })
                }
            } 
        }
    })  
})

app.put('/api/DownVote', function (req, res){
    console.log('put /api/downVote', req.body);
    Author.findOne({_id: req.body.authorId}, function(err, foundAuthor){
        if(err){
            console.log('put /api/upVote/quote error: failed to find Author')
            res.json(err);
        } else {
            console.log('found Author: ', foundAuthor);
            for (let i = 0; i < foundAuthor.quotes.length; i++){
                if (foundAuthor.quotes[i]._id == req.body._id){
                    foundAuthor.quotes[i].votes -= 1;
                    foundAuthor.save(function(err){
                        if(err){
                            console.log('failed to increase quotes vote');
                            res.json(err);
                        } else {
                            console.log('authors quote vote increased');
                            res.json(foundAuthor);
                        }
                    })
                }
            } 
        }
    })  
})

app.put('/api/delete/quote', function (req, res){
    console.log('put /api/delete/quote', req.body);
    Author.findOne({_id: req.body.authorId}, function(err, foundAuthor){
        if(err){
            console.log('put /api/delete/quote error: failed to find Author')
            res.json(err);
        } else {
            console.log('found Author: ', foundAuthor);
            for (let i = 0; i < foundAuthor.quotes.length; i++){
                if (foundAuthor.quotes[i]._id == req.body._id){
                    foundAuthor.quotes.splice(i, 1);
                    foundAuthor.save(function(err){
                        if(err){
                            console.log('failed to delete quote');
                            res.json(err);
                        } else {
                            console.log('authors quote deleted');
                            res.json(foundAuthor);
                        }
                    })
                }
            } 
        }
    })  
})

app.all('*', function(req, res) {
    console.log('hit something else');
    res.sendFile(path.resolve(__dirname + '/authors-app/dist/index.html'));
})

app.listen('8000', function () {
    console.log('listening on port 8000');
})