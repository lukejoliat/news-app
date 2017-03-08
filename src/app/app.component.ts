import { Component, Input, OnInit } from '@angular/core';
import { ArticleFilterPipe } from './articles/article-filter.pipe';
import { FormsModule } from '@angular/forms';
import { BannerService } from './banner/banner.service';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
  <md-sidenav-layout fullscreen>
  <md-sidenav #start mode="over">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a [routerLink]="['/world']" routerLinkActive="active-link">WORLD</a></li>
      <li><a [routerLink]="['/business']" routerLinkActive="active-link">BUSINESS</a></li>
      <li><a [routerLink]="['/sports']" routerLinkActive="active-link">SPORTS</a></li>
      <li><a [routerLink]="['/fashion']" routerLinkActive="active-link">FASHION & STYLE</a></li>
      <li><a [routerLink]="['/video']" routerLinkActive="active-link">VIDEO</a></li>
      <li><a [routerLink]="['/opinion']" routerLinkActive="active-link">OPINION</a></li>
      <li><a [routerLink]="['/travel']" routerLinkActive="active-link">TRAVEL</a></li>
    </ul>
  </md-sidenav>

  <div class="demo-sidenav-content">
    <div class="news-app">
          
    <div class="overlay" [ngClass]="{ 'show-overlay' : showOverlay, 'hide-overlay' : !showOverlay }">
      <a class="closebtn" (click)="closeNav()">&times;</a>
      <div class="overlay-content">
      <input type="search" placeholder="{{placeholder}}" (keyup.enter)="search()" (keyup.esc)="esc()" [(ngModel)]="searchValue">
      </div>
    </div>

      <div class="header-above">
        <a (click)="start.toggle()"><fa [name]="'bars'"></fa>SECTIONS</a>
        <a (click)="closeNav()"><fa [name]="'search'"></fa>SEARCH</a>
        <a class="cogs" [routerLink]="['/login']"><fa [name]="'cogs'"></fa></a>
      </div>
      <header>
        <div class="header-section">
          <h1>{{ name | uppercase }}</h1>
          <div>{{ fullDate }}</div>
        </div>
        <div class="navigation"><navigation></navigation></div>
      </header>
      <div class="banner" (click)="slideToggle()"><div *ngIf="messages != null">{{messages[0]?.message}}</div><div class="arrow-container">Click to expand <i class="fa fa-chevron-down" [ngClass]="arrow" aria-hidden="true"></i></div>
        <div class="subtext" [ngClass]='class'><div *ngIf="messages != null">{{messages[1]?.message}}</div></div>
      </div>
      <router-outlet></router-outlet>
    </div>
  </div>
</md-sidenav-layout>`,
  styleUrls: ['./app/app.component.css'],
  providers: [BannerService]
})
export class AppComponent  { 

  name = 'captech.io news';
  class = 'slide-up';
  arrow = 'arrow-down';
  searchValue = '';
  placeholder = 'Search';
  showOverlay: boolean = false;

  //Getting and formatting the current date using the javascript date object
  date =  new Date();
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  day = this.days[this.date.getDay()];
  month = this.months[this.date.getMonth()];
  currentDate = this.date.getDate();
  year = this.date.getFullYear();
  messages: any[];
  things =  [
{
"id": 1,
"message": "Josh Stickles T-Shirts and Temporary Tatoos Now Available in the CapTech Store."
},
]

  //Arrange the fully formatted date into a string for the template to use.
  fullDate = this.day + ', ' + this.month + ' ' + this.currentDate + ' ' + this.year;

  constructor(private _bannerService: BannerService) {}

  ngOnInit() {
    this._bannerService.getMessages().
    subscribe(response => this.messages = response);
  }

  closeNav() {
    this.showOverlay = !this.showOverlay;
  }

  slideToggle() {
    if (this.class == 'slide-up') {
      this.class = 'slide-down';
      this.arrow = 'arrow-up';
    } else {
      this.class = 'slide-up';
      this.arrow = 'arrow-down';
    }
  }

  search(){
    this.closeNav();
    let searchUrl = '/search/' + this.searchValue + '';
    window.location.href = searchUrl;
  }

  replace() {
    var string = 'string laalasdfasfasf<br>asfdasfasfsadfasfsaf';
    string = string.replace(/<br>\\*/g,"<p>test</p>");
    jQuery('div').append(string);
  }

  esc(){
    this.closeNav();
  }
}
