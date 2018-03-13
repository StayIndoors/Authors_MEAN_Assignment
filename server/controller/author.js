var mongoose = require('mongoose');
var Author = mongoose.model('Author');

module.exports = {
    // Author functions
    findAuthors: function(req, res){
        Author.find({}).sort('name').exec(function(err, authors){
            if(err){
                res.json(err);
            } else {
                res.json(authors);        
            }
        })
    },

    createAuthor: function(req, res){
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
    },

    findOneAuthor: function(req, res){
        Author.findOne({_id: req.params.id}, function(err, foundAuthor){
            if(err){
                res.json(err);
            } else {
                res.json(foundAuthor);
            }
        })
    },

    editAuthorName: function(req, res){
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
    },

    deleteAuthor: function(req, res){
        Author.remove({_id: req.params.id}, function(err){
            if(err){
                res.json(err);
            } else {
                res.json({message: 'deleted'});
            }
        })
    },

    // Quote functions
    createQuote: function(req, res){
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
    },

    upVoteQuote: function(req, res){
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
    },

    downVoteQuote: function(req, res){
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
    },

    deleteQuote: function(req, res){
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
    }
}