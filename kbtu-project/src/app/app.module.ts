import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AccountComponent } from './account/account.component';
import { LeftComponent } from './left/left.component';
import { NewsComponent } from './news/news.component';
import { PostComponent } from './post/post.component';
import {MatIconModule} from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PostBlogComponent } from './post-blog/post-blog.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { IdeasComponent } from './ideas/ideas.component';

import { JwtModule } from '@auth0/angular-jwt';
import {MatSnackBarModule} from "@angular/material/snack-bar";
// specify the key where the token is stored in the local storage
export const LOCALSTORAGE_TOKEN_KEY = 'kbtu-helper';

// specify tokenGetter for the angular jwt package
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    AccountPageComponent,
    HomePageComponent,
    TopbarComponent,
    AccountComponent,
    LeftComponent,
    NewsComponent,
    PostComponent,
    SignUpComponent,
    SignInComponent,
    PostBlogComponent,
    OrganizationsComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

 export class AppModule {
}
