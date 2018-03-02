import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  errors = [];
  author: any;
  quotes: any;
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this._route.paramMap.subscribe((params)=>{
      var authorId = params.get('id');
      this._httpService.showAuthor(authorId)
      .subscribe((responseData: any)=>{
        console.log('author object: ', responseData);
        if (!responseData || responseData.stringValue){
          this.errors = ['CANNOT FIND'];
        } else {
          this.author = responseData;
          console.log(this.author);
          this.quotes = this.author.quotes;
        }
      })  
    })
  }

  upVote(quoteObj, authorId){
    console.log('upVote quote:', quoteObj, 'upVote author: ', authorId);
    this._httpService.putUpVote(quoteObj, authorId)
    .subscribe((responseData: any)=>{
      console.log('got response',responseData);
      if(responseData.errors){
        this.errors = [];
        for(var key in responseData.errors){
          this.errors.push(responseData.errors[key].message);
        }
      } else {
        this.fetchData();
      }
    })
  }

  downVote(quoteObj, authorId){
    console.log('upVote quote:', quoteObj, 'upVote author: ', authorId);
    this._httpService.putDownVote(quoteObj, authorId)
    .subscribe((responseData: any)=>{
      console.log('got response',responseData);
      if(responseData.errors){
        this.errors = [];
        for(var key in responseData.errors){
          this.errors.push(responseData.errors[key].message);
        }
      } else {
        this.fetchData();
      }
    })
  }

  deleteQuote(quoteObj, authorId){
    console.log('upVote quote:', quoteObj, 'delete from author: ', authorId);
    this._httpService.removeQuote(quoteObj, authorId)
    .subscribe((responseData: any)=>{
      console.log('got response',responseData);
      if(responseData.errors){
        this.errors = [];
        for(var key in responseData.errors){
          this.errors.push(responseData.errors[key].message);
        }
      } else {
        this.fetchData();
      }
    })
  }
}
