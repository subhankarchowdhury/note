import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnoteComponent } from './addnote/addnote.component';
import { ListnoteComponent } from './listnote/listnote.component';

const routes: Routes = [
  {path:'', component: ListnoteComponent},
  {path:'add', component: AddnoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
