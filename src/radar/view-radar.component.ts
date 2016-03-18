import {Component, OnInit} from 'angular2/core';
//import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {RouteParams, Router, RouteConfig} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../shared/services/name-list.service';
//import {OrganizationUnit} from '../shared/model/organization-unit';
import {ManageService} from '../shared/services/manage.service';
import {Areas} from '../shared/model/areas';
import {RadarComponent} from './components/radar.component';
import {RadarComponent2} from './components/radar2.component';
import {SelectAreaComponent} from './components/select-area/select-area.component';
import {QuadrantListComponent} from './components/quadrant-list.component';


@Component({
    selector: 'view-radar',
    moduleId: module.id,
    templateUrl: './view-radar.component.html',
    styleUrls: ['./view-radar.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent2, SelectAreaComponent, QuadrantListComponent]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])
export class ViewRadarComponent implements OnInit {

    selectedArea: string;

    areaSelected(event) {
        console.log('ViewRadarComponent: Area selected in landing page', event);
        this.selectedArea = Areas[Areas[event]];
        console.log('ViewRadarComponent: route to ', this.selectedArea);
        this._router.navigate(['ViewRadar', { area: event }]);
    }

    constructor(public nameListService: NameListService, private _heroService: ManageService, private _router: Router,
    private _routeParams: RouteParams) {
        this.selectedArea = this._routeParams.get('area');
        console.log('selected ', this.selectedArea);
    }

    ngOnInit() {
//        let id = +this._routeParams.get('area');
//        console.log('on init', id);
    }
}

