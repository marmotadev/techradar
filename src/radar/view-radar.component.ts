import {Component, OnInit} from 'angular2/core';
//import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../shared/services/name-list.service';
//import {OrganizationUnit} from '../shared/model/organization-unit';
import {ManageService} from '../shared/services/manage.service';
//import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
//import {UnitDetailComponent} from './unit-detail/unit-detail.component';
//import {UnitListComponent} from './unit-list.component';
import {RadarComponent} from './components/radar.component';
import {RadarComponent2} from './components/radar2.component';


@Component({
  selector: 'view-radar',
  moduleId: module.id,
  templateUrl: './view-radar.component.html',
  styleUrls: ['./view-radar.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent,RadarComponent2]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])
export class ViewRadarComponent implements OnInit {

  constructor(public nameListService: NameListService, private _heroService: ManageService, private _router: Router) {}

  ngOnInit() {
//    console.log('on init');
  }
}

