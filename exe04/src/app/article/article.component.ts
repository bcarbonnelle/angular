import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { PriceComponent } from './price/price.component';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() onDeleteArticle: EventEmitter<Article>;
  constructor() { 
   this.onDeleteArticle = new EventEmitter();
  }

  ngOnInit() {
  }
  removeItem(article:Article){
    this.onDeleteArticle.emit(article);
    
  }

}
