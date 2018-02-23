import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author: object = {name: ''};
  errors: any = [];
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      var authorId = params.get('id');
      this._httpService.showAuthor(authorId)
      .subscribe((responseData: any)=>{
        console.log(responseData);
        if (!responseData || responseData.stringValue){
          this.errors = ['CANNOT FIND'];
        } else {
          this.author = responseData;
        }
         
      })  
    })
  }

  submitUpdatedAuthor(){
    this._httpService.updateAuthor(this.author)
    .subscribe((responseData: any)=>{
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
