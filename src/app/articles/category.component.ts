import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs/Observable';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  template: 
  `<div *ngIf="articles">
    <div *ngFor="let article of articles" class="row category-page">
      <main class="col-md-8">
        <h2><strong [innerHTML]="article.main.headLine"></strong></h2>

        <div *ngIf="article?.main.numberOfImages">
          <div *ngFor="let item of createRange(article?.main.numberOfImages)" class="col-md-12 photo">
            [ PHOTO ]
          </div>
        </div>

        <div [innerHTML]="article.main.fullStory"></div>
      </main>
      <aside class="col-md-4">
        <h3 [innerHTML]="article.aside.headLine"></h3>

        <div *ngIf="article?.aside.numberOfImages">
          <div *ngFor="let item of createRange(article?.aside.numberOfImages)" class="col-md-12 photo">
            [ PHOTO ]
          </div>
        </div>

        <div [innerHTML]="article.aside.fullStory"></div>
      </aside>
    </div>
  </div>
  `,
  providers: [ArticleService],
  styleUrls: ['./app/articles/category.css']
})

export class CategoryComponent {

  articles: any[] = [];
  categories: any;
  id: number;
  item: string;
  done: boolean;
  categoryName: string;
  counters: any;

  constructor(private route: ActivatedRoute, private router: Router, private _articleService: ArticleService) {}

  ngOnInit() { 
    this.categoryName = this.route.snapshot.params['id'];  
    this._articleService.getCategories()
    .finally(() => { this.id = this.categories.id; this.run(); })
    .subscribe(categories => this.categories = categories.find((x:any) => x.shortName == this.categoryName));

  }

  run() {
      this._articleService.getArticleCategory(this.id)
          .subscribe(articles => { if (articles.length) {
          articles.forEach((article: any) => this.articles.push(article))
          } else {
          this.articles.push(articles)
          }
      });
  }


  createRange(number: number){
    this.counters = [];
    for(var i = 0; i < number; i++){
        this.counters.push(i);
    }
    return this.counters;
  }

}
