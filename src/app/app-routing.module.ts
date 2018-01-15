import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainMapComponent } from './map/main-map/main-map.component';
import { SearchComponent } from './search/search.component';
import { CommentPeriodComponent } from './comment-period/comment-period.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'map',
    component: MainMapComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'period',
    component: CommentPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
