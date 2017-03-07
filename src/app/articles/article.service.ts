import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ArticleService {

  constructor(private _http: Http) {}

   private _featArticleUrl = 'http://html5news.herokuapp.com/articles/featured';
   private _articleUrl = 'http://html5news.herokuapp.com/articles/all';
   private _categoryUrl = 'http://html5news.herokuapp.com/category/';
   private _categoriesUrl = 'http://html5news.herokuapp.com/articles/categories';

    getAllArticles() {
    return this._http.get(this._articleUrl)
        .map((response: Response) => response)
        //.do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    getFeaturedArticles() {
    return this._http.get(this._featArticleUrl)
        .map((response: Response) => response)
        //.do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    getArticleCategory(id: number) {
      return this._http.get(this._categoryUrl + id)
        .map((response: Response) => response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    getCategories() {
        return this._http.get(this._categoriesUrl)
        .map((response: Response) => response.json())
        .do(data => console.log('Categories: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}