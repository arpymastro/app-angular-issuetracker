import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from './issues/issues.component'
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AddissueComponent } from './addissue/addissue.component'; 
import { EditissueComponent } from './editissue/editissue.component';

const routes: Routes = [
  {path: '', component: IssuesComponent},
  { path: 'detail/:id', component: IssueDetailComponent},
  { path: 'add', component: AddissueComponent},
  { path: 'edit/:id', component: EditissueComponent}   
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
