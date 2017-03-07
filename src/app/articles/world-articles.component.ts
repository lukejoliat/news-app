import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  template: 

  `<div class="row category-page">
      <main class="col-md-8">
        <h2><strong [innerHTML]="articles?.main.headLine"></strong></h2>

        <div *ngIf="articles?.main.numberOfImages">
          <div *ngFor="let item of createRange(articles?.main.numberOfImages)" class="col-md-12 photo">
            [ PHOTO ]
          </div>
        </div>

        <div [innerHTML]="articles?.main.fullStory"></div>
      </main>

      <aside class="col-md-4">
        <h3><em [innerHTML]="articles?.aside.headLine"></em></h3>
        
        <div [ngSwitch]="articles?.aside.numberOfImages">
          <div *ngSwitchCase="false">
            {{ articles?.aside.fullStory}}
          </div>
          <div *ngSwitchCase="true" [innerHTML]="insert()">
          </div>
        </div>
      </aside>
    </div>
  `,
  providers: [ArticleService],
  styleUrls: ['./app/articles/category.css']
})

export class WorldArticlesComponent {

    id: number = 1;
    articles: any;
    items: any[];
    switch = false;
    content = '<div class="photo">[ PHOTO ]<div>';
    constructor(private _articleService: ArticleService) {}

    createRange(number: number){
      this.items = [];
      for(var i = 0; i < number; i++){
          this.items.push(i);
      }
      return this.items;
    }

    insert(){
          return this.articles.aside.fullStory.replace('<br>', `<div class="photo">[ PHOTO ]</div>`);
    }

    ngOnInit() {
        this._articleService.getArticleCategory(this.id)
          .subscribe(articles => this.articles = articles);
    }
}
