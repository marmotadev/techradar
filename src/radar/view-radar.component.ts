import {Component, OnInit} from 'angular2/core';
//import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../shared/services/name-list.service';
import {OrganizationUnit} from '../shared/model/organization-unit';
import {ManageService} from '../shared/services/manage.service';
//import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
//import {UnitDetailComponent} from './unit-detail/unit-detail.component';
//import {UnitListComponent} from './unit-list.component';

@Component({
  selector: 'view-radar',
  moduleId: module.id,
  templateUrl: './view-radar.component.html',
  styleUrls: ['./view-radar.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])
export class ViewRadarComponent implements OnInit {
  newName: string;
  public units: OrganizationUnit[] = [];
  constructor(public nameListService: NameListService, private _heroService: ManageService, private _router: Router) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
  ngOnInit() {
    this._heroService.getOrganizationUnits().then(units => this.units = units);
  }

  gotoOrganizationUnit(unit: OrganizationUnit) {
    let link = ['UnitDetail', { id: unit.id }];
    this._router.navigate(link);
  }
}

