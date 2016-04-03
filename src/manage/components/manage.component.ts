import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ManageService} from '../../shared/services/manage.service';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
import {ManageRadarComponent} from './manage-radar/manage-radar.component';
import {UnitListComponent} from './unit-list.component';

@Component({
  selector: 'sd-manage',
  moduleId: module.id,
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES,Dragula],
  viewProviders: [DragulaService]

})
@RouteConfig([
    
  { path: './', name: 'Home',  component: UnitListComponent, useAsDefault: true},
  { path: '/radar/:id', name: 'ManageRadar',  component: ManageRadarComponent},
])
export class ManageComponent /* implements OnInit */ {
  constructor(private _manageService: ManageService, private _router: Router) {}
}

