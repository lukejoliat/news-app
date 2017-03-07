import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from './navigation.service';


@Component({
    selector: 'navigation',
    template: `
    <nav>
        <ul>
            <li><a href="/">All</a></li>
            <li><a [routerLink]="['/world']" routerLinkActive="active-link">WORLD</a></li>
            <li><a [routerLink]="['/business']" routerLinkActive="active-link">BUSINESS</a></li>
            <li><a [routerLink]="['/sports']" routerLinkActive="active-link">SPORTS</a></li>
            <li><a [routerLink]="['/fashion']" routerLinkActive="active-link">FASHION & STYLE</a></li>
            <li><a [routerLink]="['/video']" routerLinkActive="active-link">VIDEO</a></li>
            <li><a [routerLink]="['/opinion']" routerLinkActive="active-link">OPINION</a></li>
            <li><a [routerLink]="['/travel']" routerLinkActive="active-link">TRAVEL</a></li>
        </ul>
    </nav>
    `, 
    providers: [NavigationService],
    styles: [`
    nav {
        text-align: center;
    }

    nav ul {
        list-style-type: none;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    nav ul li {
        display: inline;
        padding: 25px;
        font-size: 16px;
    }
    nav li a {
        color: #333;
    }
    nav li a.active-link {
        color: #333;
        font-weight: bold;
        text-decoration: underline;
    }
    @media (max-width: 966px) {
        nav {
            display: none;
        }
    }
    `]
})

export class NavigationComponent {

    navLinks: any[];

    constructor(private _navigationService: NavigationService) {}

    ngOnInit() {
    this._navigationService.getNavLinks()
        .subscribe(response => {
        this.navLinks = response; 
        });
    }
}