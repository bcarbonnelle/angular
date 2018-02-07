import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('angular', 'http://angular.io', 30),
      new Article('TypeScript', 'http://www.google.be', 30),
      new Article('C# .NET', 'www.microsoft.com', 30)
    ]

  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    const newArticle = new Article(title.value, link.value);
    this.articles.push(newArticle);
    title.value= '';
    link.value= '';
    this.sortArticles();
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a:Article,b:Article) => b.votes - a.votes);
  }

}


