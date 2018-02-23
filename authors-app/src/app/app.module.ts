import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorNewComponent,
    QuotesComponent,
    QuoteNewComponent,
    AuthorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
