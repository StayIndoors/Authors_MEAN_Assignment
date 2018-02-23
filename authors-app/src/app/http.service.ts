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

  updateAuthor(authorObj){
    console.log('service.updateAuthor');
    return this._http.put('/api/authors', authorObj)
  }

  deleteAuthor(id){
    console.log('service.deleteAuthor');
    return this._http.delete('/api/authors/'+id);
  }
}
