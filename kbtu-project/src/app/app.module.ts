import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomePageComponent } from './home-page/home-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AccountComponent } from './account/account.component';
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
import {AuthInterceptor} from "./AuthInterceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    HomePageComponent,
    TopbarComponent,
    AccountComponent,
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
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

 export class AppModule {
}
