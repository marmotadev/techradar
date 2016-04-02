import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

//import {NameListService} from '../../shared/services/name-list.service';
//import {OrganizationUnit} from '../../shared/model/organization-unit';
//import {ManageService} from '../../shared/services/manage.service';
//import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
//import {UnitDetailComponent} from './unit-detail/unit-detail.component';
import {SelectAreaComponent} from './components/select-area/select-area.component';
import {ViewRadarComponent} from './view-radar.component';


@Component({
  selector: 'radar-router',
  moduleId: module.id,
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
})
    //todo: we need to route to the same component here, and control just internally when to go deeper
@RouteConfig([
  { path: '/', name: 'RadarLandingPage', component: ViewRadarComponent, useAsDefault: true},
  { path: '/:radarId', name: 'ViewRadarAreas',  component: ViewRadarComponent},
  { path: '/:radarId/:area', name: 'ViewRadar',  component: ViewRadarComponent},
])
export class RadarRouterComponent {
  constructor(private _router: Router) {;}
}

