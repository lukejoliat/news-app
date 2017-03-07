import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class BannerService {

  constructor(private _http: Http) {}

   private _url = 'http://html5news.herokuapp.com/banners';

    getMessages() {
    return this._http.get(this._url)
        .map((response: Response) => response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}