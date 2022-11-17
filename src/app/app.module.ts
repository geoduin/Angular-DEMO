import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AListComponent } from './features/component-a/a-list/a-list.component';
import { BListComponent } from './features/component-b/b-list/b-list.component';
import { BDetailsComponent } from './features/component-b/b-details/b-details.component';
import { AColumnsComponent } from './features/component-a/a-columns.component';
import { ADetailsComponent } from './features/component-a/a-details/a-details.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserCacheDB } from './services/UserService.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AListComponent,
    BListComponent,
    BDetailsComponent,
    AColumnsComponent,
    ADetailsComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserCacheDB],
  bootstrap: [AppComponent]
})
export class AppModule { }
