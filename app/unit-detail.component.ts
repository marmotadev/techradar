import {Component, OnInit} from 'angular2/core';
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
//import {DragulaService,Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'unit-detail',
  templateUrl: 'app/unit-detail.component.html',
  styleUrls: ['app/unit-detail.component.css'],
  inputs: ['unit'],
  directives: [ItemFormComponent],
//    directives: [ItemFormComponent, Dragula],
//  viewProviders: [DragulaService]
})
export class UnitDetailComponent implements OnInit {
  public unit: OrganizationUnit;
  public category: string;
  public initiatives: Initiative[];
  public showAddNew: boolean;

  constructor(private _heroService: HeroService, private _radarService: RadarService,
    private _routeParams: RouteParams, private _router: Router) {
  }
  public showAddNewForm() {
    this.showAddNew = true;
  }
  catToArea(cat: string): Areas {
    console.log("Cat ", cat);
    if (cat == "techniques")
        return Areas.techniques;
    if (cat == "tools")
            return Areas.tools;
    if (cat == "platforms")
                return Areas.platforms;
    if (cat == "frameworks")
                    return Areas.languagesAndFrameworks;
//    if (cat == "")
  }
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.category = this._routeParams.get('category');

    if (this.category != 'undefined' && this.category != null)
        this._radarService.getInitiatives(this.catToArea(this.category)).then(initiatives => {this.initiatives = initiatives});
    this._heroService.getUnit(id).then(hero => this.unit = hero);

  }
  openCategory(id:number, category: string)
  {
    this._router.navigate(['ItemsInCategoryDetail', { id: this.unit.id, category: category }]);
  }
  isCategorySelected(): boolean {
   //console.log("Category selected: " + this.category);
    if (this.category)
        return true;
    else
        return false;
  }
  isCategorySelected2(c: string): boolean {
     return !this.isCategorySelected() || this.isCategorySelected() && this.category == c;
    }
  goBack() {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/