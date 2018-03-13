var Authors = require('./../controller/author.js');
module.exports = function(app) {
    app.get('/api/authors', Authors.findAuthors);
    app.post('/api/authors', Authors.createAuthor);
    app.get('/api/authors/:id', Authors.findOneAuthor);
    app.put('/api/authors', Authors.editAuthorName);
    app.delete('/api/authors/:id', Authors.deleteAuthor);

    app.put('/api/quote', Authors.createQuote);
    app.put('/api/upVote', Authors.upVoteQuote);
    app.put('/api/DownVote', Authors.downVoteQuote);
    app.put('/api/delete/quote', Authors.deleteQuote);

    app.all('*', function(req, res) {
        console.log('hit something else');
        res.sendFile(path.resolve(__dirname + '/authors-app/dist/index.html'));
    })
}