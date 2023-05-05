import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {BlogComponent} from "./blog/blog.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {IdeasComponent} from "./ideas/ideas.component";
import {AuthGuard} from "./auth.guard";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {path:'home', canActivate:[AuthGuard],component: HomePageComponent,},
  {path:'account',  canActivate:[AuthGuard],component: AccountComponent},
  {path:'blog', canActivate:[AuthGuard],component:BlogComponent},
  {path:'login', component:SignInComponent},
  {path:'register', component:SignUpComponent},
  {path:'organizations', canActivate:[AuthGuard],component:IdeasComponent},
  { path: '**',  redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
