// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Creados
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComicBannerComponent } from './comic-banner/comic-banner.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { NewsCardComponent } from './news-card/news-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { chevronDoubleRight, checkCircleFill } from 'ngx-bootstrap-icons';
import { CardPageComponent } from './card-page/card-page.component';
import { ComicSectionComponent } from './comic-section/comic-section.component';

// Select some icons (use an object, not an array)
const icons = {
  chevronDoubleRight,
  checkCircleFill
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComicBannerComponent,
    ComicCardComponent,
    NewsCardComponent,
    CardPageComponent,
    ComicSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
