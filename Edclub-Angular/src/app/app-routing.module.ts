import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccloginComponent } from './acclogin/acclogin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : 'login', component: AccloginComponent },
  {
    path : '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
