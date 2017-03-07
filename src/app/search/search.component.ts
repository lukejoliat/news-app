import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../articles/article.service';
@Component({
    selector: 'search',
    template: `
        <h3><strong>Search Results for: </strong>"{{ searchTerm }}"</h3>
        <div *ngFor="let article of articles | ArticleFilter:searchTerm">
            <article>
                <div>{{article.headLine}}</div>
                <div>{{article.snippet}}</div>
            </article>
        </div>
    `,
    providers: [ArticleService],
    styles: [`
        article { border-bottom: 1px solid #333; margin-bottom: 20px; padding-bottom: 10px; }
        .banner { display: none; }
    `]
})

export class SearchComponent {

    searchTerm = '';
    articles: any[];

    constructor(private _route: ActivatedRoute, private _router: Router, private _articleservice: ArticleService) {
    }

    ngOnInit() {
        this.searchTerm = this._route.snapshot.params['id'];
        this._articleservice.getAllArticles()
        .subscribe(response => this.articles = response.json()
        );
    }
}