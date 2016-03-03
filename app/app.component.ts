import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {UnitDetailComponent} from './unit-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {RadarService} from './radar.service';
import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['Radar', {unit: id}]">Radar</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService, RadarService]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/unitDetail/:id', name: 'UnitDetail', component: UnitDetailComponent},
  {path: '/unitDetail/:id/:category', name: 'ItemsInCategoryDetail', component: UnitDetailComponent},
  {path: '/radar/:unit', name: 'Radar', component: UnitDetailComponent}

])
export class AppComponent {
  public title = 'Technology Radar';
}
//export class ApRequestOptions extends BaseRequestOptions {
//  merge(options?:RequestOptionsArgs):RequestOptions {
//  console.log("URL requested: " + options.url);
//    options.url = 'http://localhost:3000/' + options.url;
//    return super.merge(options);
//  }
//
//}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/