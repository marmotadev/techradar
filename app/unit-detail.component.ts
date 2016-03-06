import {Component, OnInit, Input, Output} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {RadarService} from './radar.service';
import {OrganizationUnit} from './OrganizationUnit';
import {ItemFormComponent} from './item-form-component';
import {Initiative} from './initiative';
import {Areas} from './mock-heroes';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'unit-detail',
  templateUrl: 'app/unit-detail.component.html',
  styleUrls: ['app/unit-detail.component.css'],
  inputs: ['unit', 'showAddNew'],
//  directives: [ItemFormComponent],
    directives: [ItemFormComponent, Dragula],
  viewProviders: [DragulaService]
})
export class UnitDetailComponent implements OnInit {
  public areasEnum = Areas;
  unit: OrganizationUnit;
  category: string;
  initiatives: Initiative[];
  showAddNew: boolean;
  selectedArea: Areas;


  constructor(private _heroService: HeroService, private _radarService: RadarService,
    private _routeParams: RouteParams, private _router: Router) {
  }
  public showAddNewForm() {
    this.showAddNew = true;
  }
  catToArea(cat: string): Areas {
    return Areas[cat];
  }
  reloadInitiatives(category: string) {
    console.log("Will reload initiatives");
    this._radarService.getInitiatives(this.catToArea(category)).then(initiatives => {this.initiatives = initiatives});
  }
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.category = this._routeParams.get('category');
    this.selectedArea = Areas[this.category];
    console.log("Now current:", this.selectedArea);

    if (this.category != 'undefined' && this.category != null)
        this.reloadInitiatives(this.category);
    this._heroService.getUnit(id).then(hero => this.unit = hero);

  }
  openCategory(id:number, areaStr: string)
  {
    this._router.navigate(['ItemsInCategoryDetail', { id: this.unit.id, category: areaStr }]);
  }
  isCategorySelected(): boolean {
   //console.log("Category selected: " + this.category);
    if (this.category)
        return true;
    else
        return false;
  }
  isCategorySelected2(c: Areas): boolean {
     return !this.isCategorySelected() || this.isCategorySelected() && this.selectedArea == c;
    }
  goBack() {
    window.history.back();
  }
  closeAddNewForm() {
    console.log("Parent component closes form");
    this.showAddNew = false;
  }
  initiativeAdded(event) {
    console.log("Got event:", event);
    this.reloadInitiatives(this.category);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/