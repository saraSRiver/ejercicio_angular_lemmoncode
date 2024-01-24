import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { AboutComponent } from './layout/about/about.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CrudComponent } from './layout/crud/crud.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { GalleryComponent } from './layout/gallery/gallery.component';


const routes: Routes = [

{path: 'login', component: LoginComponent},
{path: '', component: WelcomeComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'about', component: AboutComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'crud', component: CrudComponent},
{path: 'profile', component: ProfileComponent},
{path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
