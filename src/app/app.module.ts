import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllArticlesComponent } from './articles/all-articles.component';
import { WorldArticlesComponent } from './articles/world-articles.component';
import { SportsArticlesComponent } from './articles/sports-articles.component';
import { BusinessArticlesComponent } from './articles/business-articles.component';
import { FashionArticlesComponent } from './articles/fashion-articles.component';
import { TravelArticlesComponent } from './articles/travel-articles.component'
import { VideoArticlesComponent } from './articles/video-articles.component'
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './articles/category.component';
import { LoginComponent } from './login/login.component';

import { ArticleFilterPipe } from './articles/article-filter.pipe';
import { SortPipe } from './order-by.filter';
import { ColumnFilter } from './column-filter';

import { OpinionArticlesComponent } from './articles/opinion-articles.component';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

const appRoutes: Routes = [
  { path: 'sports',  component: SportsArticlesComponent },
  { path: 'world',  component: WorldArticlesComponent },
  { path: 'opinion',  component: OpinionArticlesComponent },
  { path: 'business',  component: BusinessArticlesComponent },
  { path: 'fashion',  component: FashionArticlesComponent },
  { path: 'travel',  component: TravelArticlesComponent },
  { path: 'video',  component: VideoArticlesComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'search/:id',  component: SearchComponent },
  { path: 'category/:id',  component: CategoryComponent },
  { path: '',  component: AllArticlesComponent },
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule, MdSidenavModule, MdButtonModule, MdCardModule, Angular2FontawesomeModule ],
  declarations: [ 
    AppComponent, NavigationComponent, AllArticlesComponent, SportsArticlesComponent, ArticleFilterPipe, OpinionArticlesComponent, SortPipe, ColumnFilter, WorldArticlesComponent, BusinessArticlesComponent, FashionArticlesComponent, TravelArticlesComponent, VideoArticlesComponent, SearchComponent, CategoryComponent, LoginComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [MdIconRegistry]
})
export class AppModule { }
