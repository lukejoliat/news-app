import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  template: 
  `<div *ngFor="let article of articles" class="row category-page">
      <main class="col-md-8">
        <h2><strong [innerHTML]="article.main.headLine"></strong></h2>

        <div *ngIf="article.main.numberOfImages">
          <div *ngFor="let item of createRange(article.main.numberOfImages)" class="col-md-12 photo">
            [ PHOTO ]
          </div>
        </div>

        <div [innerHTML]="article.main.fullStory"></div>
      </main>
      <aside class="col-md-4">
        <h3 [innerHTML]="article.aside.headLine"></h3>

        <div *ngIf="article.main.numberOfImages">
          <div *ngFor="let item of createRange(article.aside.numberOfImages)" class="col-md-12 photo">
            [ PHOTO ]
          </div>
        </div>
  
        <div [innerHTML]="article.aside.fullStory"></div>
      </aside>
    </div>
  `,
  providers: [ArticleService],
  styleUrls: ['./app/articles/category.css']
})

export class TravelArticlesComponent {
    id: number = 7;
    articles: any[] = [];
    items: any[];
    constructor(private _articleService: ArticleService) {}

  createRange(number: number){
      this.items = [];
      for(var i = 0; i < number; i++){
          this.items.push(i);
      }
      return this.items;
    }

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
