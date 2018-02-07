import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  constructor() {
    //this.article = new Article('angular is the best TypeScript Framework in the world','http://www.google.be',30);

   }

  ngOnInit() {
  }
  voteUp() {
    this.article.voteUp();
    
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
}
