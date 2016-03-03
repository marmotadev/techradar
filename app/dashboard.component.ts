import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {OrganizationUnit} from './OrganizationUnit';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  public units: OrganizationUnit[] = [];

  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    this._heroService.getOrganizationUnits().then(units => this.units = units);
    this._heroService.getHeroes().then(units => this.heroes = units);
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
  gotoOrganizationUnit(unit: OrganizationUnit) {
      let link = ['UnitDetail', { id: unit.id }];
      this._router.navigate(link);
    }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/