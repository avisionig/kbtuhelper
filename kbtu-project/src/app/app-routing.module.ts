import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountPageComponent} from "./account-page/account-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BlogComponent} from "./blog/blog.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path:'home-page', component: HomePageComponent},
  {path:'account-page', component: AccountPageComponent},
  {path:'blog', component:BlogComponent},
  {path:'', redirectTo:'/home-page',pathMatch:"full"},
  {path:'home', redirectTo:'/home-page',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
