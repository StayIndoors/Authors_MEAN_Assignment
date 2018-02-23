import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:any = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(){
    this._httpService.getAuthors()
    .subscribe((responseData: any)=>{
      this.authors = responseData;
    })
  }

  delete(id){
    console.log('delete this author');
    this._httpService.deleteAuthor(id)
    .subscribe((responseData)=>{
      this.getAllAuthors();
    })
  }
}
