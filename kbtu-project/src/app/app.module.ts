import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
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
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    BlogComponent,
    AccountPageComponent,
    HomePageComponent,
    TopbarComponent,
    AccountComponent,
    LeftComponent,
    NewsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

 export class AppModule {
}
