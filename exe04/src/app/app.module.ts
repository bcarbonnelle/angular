import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ArticleComponent } from './article/article.component';
import { ImgComponent } from './article/img/img.component';
import { PriceComponent } from './article/price/price.component';


@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    ArticleComponent,
    ImgComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
