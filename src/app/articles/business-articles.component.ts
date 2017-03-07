import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  template: 
  `<div *ngFor="let article of articles" class="row category-page">
      <main class="col-md-8">
        <h2><strong [innerHTML]="article.main.headLine"></strong></h2>
        <div [innerHTML]="article.main.fullStory"></div>
      </main>
      <aside class="col-md-4">
        <h3 [innerHTML]="article.aside.headLine"></h3>
        <div [innerHTML]="article.aside.fullStory"></div>
      </aside>
    </div>
  `,
  providers: [ArticleService],
  styleUrls: ['./app/articles/category.css']
})

export class BusinessArticlesComponent {
    id: number = 2;
    articles: any[] = [];
    constructor(private _articleService: ArticleService) {}

    ngOnInit() {
        this._articleService.getArticleCategory(this.id)
          .subscribe(articles => { if (articles.length) {
            articles.forEach((article: any) => this.articles.push(article))
          } else {
            this.articles.push(articles)
          }
        });
    }
}
