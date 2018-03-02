import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  postAuthor(authorObj){
    console.log('service.postAuthor');
    console.log(authorObj);
    return this._http.post('/api/authors', authorObj);
  }

  getAuthors(){
    console.log('service.getAuthors');
    return this._http.get('/api/authors');
  }

  showAuthor(id){
    console.log('service.showAuthor');
    return this._http.get('/api/authors/'+id);
  }

  putQuote(quoteObj, id){
    console.log('service.postQuote');
    quoteObj.authId = id;
    return this._http.put('/api/quote', quoteObj);
  }

  putUpVote(quoteObj, id){
    console.log('service.putUpVote');
    quoteObj.authorId = id;
    console.log('quoteObj: ', quoteObj)
    return this._http.put('/api/upVote', quoteObj);
  }

  putDownVote(quoteObj, id){
    console.log('service.putDownVote');
    quoteObj.authorId = id;
    console.log('quoteObj: ', quoteObj)
    return this._http.put('/api/downVote', quoteObj);
  }

  removeQuote(quoteObj, id){
    console.log('service.removeQuote');
    quoteObj.authorId = id;
    return this._http.put('/api/delete/quote', quoteObj);
  }

  updateAuthor(authorObj){
    console.log('service.updateAuthor');
    return this._http.put('/api/authors', authorObj)
  }

  deleteAuthor(id){
    console.log('service.deleteAuthor');
    return this._http.delete('/api/authors/'+id);
  }
}
