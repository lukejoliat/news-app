import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';


@Component({
  selector: 'all-articles',
  template: `
<div [ngSwitch]='articles'>
  <div *ngSwitchCase="null" class="loading">
  </div>
  <div *ngSwitchDefault>
    <aside class="col-md-15 aside">
      <div *ngFor="let article of articles?.aside; let i = index" class="col-md-12">
        <article>
          <h3>{{ article.headLine }}</h3>
          <div><span *ngIf="i == 1">{{ article.location | uppercase }} </span>{{ article.snippet }}</div>
        </article>
      </div>
    </aside>

    <main class="col-md-30">
      <div *ngFor="let article of articles?.main" class="col-md-12">
        <article>
          <div *ngIf="article.hasVideoPlaceholder" class="videoPlaceHolder col-md-12">[ VIDEO ]</div>
          <div *ngIf="article.numberOfImages" class="main-image"> [ PHOTO ]</div>
          <h3>{{ article.headLine }}</h3>
          <div [innerHtml]="article.snippet"></div>
        </article>
      </div>
    </main>

    <aside class="col-md-30">
    <div class="row opinion">
        <div class="col-md-12 opinion-container"><em class="opinion-label">The Opinion Pages</em></div>
        <div *ngFor="let article of articles?.opinion" class="col-md-6">
          <article>
            <h3>{{ article.headLine }}</h3>

            <div *ngIf="article.numberOfImages">
              <div *ngFor="let item of createRange(article.numberOfImages)" class="col-md-12 photo">
                [ PHOTO ]
              </div>
            </div>

            <div [innerHtml]="article.fullStory"></div>
          </article>
        </div>
      </div>
      <div class="row travel">
        <div class="col-md-12"><div class="travel-label"><strong class="text">TRAVEL</strong></div></div>
        <div *ngFor="let article of articles?.travel" class="col-md-6">

          <article>
            <h3>{{ article.headLine }}</h3>

            <div *ngIf="article.numberOfImages">
              <div *ngFor="let item of createRange(article.numberOfImages)" class="col-md-12 photo">
                [ PHOTO ]
              </div>
            </div>

            <div [innerHtml]="article.snippet"></div>
          </article>
        </div>
      </div>
    </aside>
  </div>
  `,
  providers: [ArticleService],
  styleUrls: ['./app/articles/all-articles.css'],
}) 

export class AllArticlesComponent {

  articles: any;
  
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
    this._articleService.getFeaturedArticles()
      .subscribe(articles => {
        this.articles = articles.json(); 
        console.log(this.articles);
      });
  }

}