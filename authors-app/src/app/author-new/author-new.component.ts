import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  newAuthor: object = {name: ""};
  errors= [];
  constructor(private _httpService: HttpService, private _router:Router) { }

  ngOnInit() {
  }

  submitAuthor(){
    console.log(this.newAuthor);
    this._httpService.postAuthor(this.newAuthor)
    .subscribe((responseData: any)=>{
      console.log(responseData);
      if(responseData.errors){
        this.errors = [];
        for(var key in responseData.errors){
          this.errors.push(responseData.errors[key].message);
        }
      } else {
        this._router.navigate(['/']);
      }
    })
  }

  cancel(){
    console.log('cancel');
    this._router.navigate(['/']);
  }
}
