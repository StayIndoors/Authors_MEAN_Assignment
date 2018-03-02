import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  newQuote: any = {content: ""};
  author: any;
  authorId: any;
  errors = [];
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      this.authorId = params.get('id');
      this._httpService.showAuthor(this.authorId)
      .subscribe((responseData: any)=>{
        console.log('author object: ', responseData);
        if (!responseData || responseData.stringValue){
          this.errors = ['CANNOT FIND'];
        } else {
          this.author = responseData;
        }
      })  
    })
  }

  submitQuote(){
    console.log(this.newQuote);
    this._httpService.putQuote(this.newQuote, this.authorId)
    .subscribe((responseData: any)=>{
      console.log(responseData);
      if(responseData.errors){
        this.errors = [];
        for(var key in responseData.errors){
          this.errors.push(responseData.errors[key].message);
        }
      } else {
        this._router.navigate(['/quotes', this.authorId]);
      }
    })
  }

}
