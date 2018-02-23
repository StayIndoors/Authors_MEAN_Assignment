import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const routes: Routes = [
  {path: '', component: AuthorsComponent},
  {path: 'new', component: AuthorNewComponent},
  {path: 'edit/:id', component: AuthorEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
