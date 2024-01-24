import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './utils/search/search.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { LoginComponent } from './layout/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { CrudComponent } from './layout/crud/crud.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './layout/logout/logout.component';
import { ShowUsernamePipe } from './pipes/show-username.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    GalleryComponent,
    ProfileComponent,
    CrudComponent,
    LogoutComponent,
    ShowUsernamePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
