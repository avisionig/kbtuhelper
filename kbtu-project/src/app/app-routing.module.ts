import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountPageComponent} from "./account-page/account-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BlogComponent} from "./blog/blog.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {IdeasComponent} from "./ideas/ideas.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path:'home',component: HomePageComponent},
  {path:'account', component: AccountPageComponent},
  {path:'blog',component:BlogComponent},
  {path:'login', component:SignInComponent},
  {path:'register', component:SignUpComponent},
  {path:'organizations',component:IdeasComponent},
  { path: '**',  redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
