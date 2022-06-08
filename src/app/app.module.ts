// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Creados
import { AppComponent } from './app.component';

//Paginas
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComicBannerComponent } from './components/comic-banner/comic-banner.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { ComicSectionComponent } from './components/comic-section/comic-section.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { chevronDoubleRight, checkCircleFill, power,
  gearFill, boxes, cloudArrowUpFill, heartFill,
  bookmarkCheckFill, newspaper } from 'ngx-bootstrap-icons';


// Select some icons (use an object, not an array)
const icons = {
  chevronDoubleRight,
  checkCircleFill,
  power,
  gearFill,
  boxes,
  cloudArrowUpFill,
  heartFill,
  bookmarkCheckFill,
  newspaper
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComicBannerComponent,
    ComicCardComponent,
    CardPageComponent,
    ComicSectionComponent,
    CategoryBannerComponent,
    NewsComponent
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
