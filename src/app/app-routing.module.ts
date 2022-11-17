import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AColumnsComponent } from './features/component-a/a-columns.component';
import { ADetailsComponent } from './features/component-a/a-details/a-details.component';
import { AListComponent } from './features/component-a/a-list/a-list.component';
import { BListComponent } from './features/component-b/b-list/b-list.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'component-a', pathMatch: "full"},
  {path: 'component-a', component: AListComponent},
  {path: 'component-b', component: BListComponent},
  {path: 'user', component: UserListComponent, children:[
    {path: 'userAdd', component: UserEditComponent},
    
  ]},
  {path: 'UserAdd' , component: UserEditComponent}
  ,
  {path: 'user/:name/Edit', pathMatch: "full", component: UserEditComponent},
  {path: 'user/:name', component: UserDetailComponent, children: [
    {path: 'Edit',pathMatch: "full", component: UserEditComponent} ]},
  {path: 'component-a/:userId',pathMatch: "full", component: ADetailsComponent},
  {path: 'a-columns', component: AColumnsComponent, children: [
    {path: ":userId", component: ADetailsComponent}
  ]},
  
  //User lijst zelf toevoegen.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
