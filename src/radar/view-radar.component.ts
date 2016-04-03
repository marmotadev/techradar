import {Component, OnInit} from 'angular2/core';
//import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {RouteParams, Router, RouteConfig} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

//import {OrganizationUnit} from '../shared/model/organization-unit';
import {ManageService} from '../shared/services/manage.service';
import {RadarService} from '../shared/services/radar.service';
import {Areas} from '../shared/model/areas';
import {RadarComponent2} from './components/radar2.component';
import {SelectAreaComponent} from './components/select-area/select-area.component';
import {QuadrantListComponent} from './components/quadrant-list.component';


@Component({
    selector: 'view-radar',
    moduleId: module.id,
    template: `
<select-area (onSelected)="onAreaSelected($event)"></select-area>
Radar view for {{selectedArea}}
<radar2 *ngIf="selectedArea" [area]="selectedArea" [data]="areaData">adddddddddddddd</radar2>
<quadrant-list [area]="selectedArea" [data]="areaData"></quadrant-list>`,

    styleUrls: ['./view-radar.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent2, SelectAreaComponent, QuadrantListComponent]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])
export class ViewRadarComponent implements OnInit {

    selectedArea: string = Areas[Areas.techniques];
    areaData: any[];
    radarId: number;

    onAreaSelected(event) {
        console.log('ViewRadarComponent: Area selected in landing page', event);
        this.selectedArea = Areas[Areas[event]];
        console.log('ViewRadarComponent: route to ', this.selectedArea);
        this._router.navigate(['ViewRadar', { area: event, radarId: this.radarId }]);
    }

    constructor(private _radarService: RadarService,
        private _heroService: ManageService, private _router: Router,
        private _routeParams: RouteParams) {
        this.radarId = Number(this._routeParams.get('radarId'));
        this.selectedArea = this._routeParams.get('area');
        console.log('selected ', this.selectedArea);
        if (this.selectedArea !== null && this.selectedArea.length !== 0) {
            let area: Areas = Areas[this.selectedArea];
            let ob = _radarService.getRadarData(area, this.radarId)
                .then(returnedData => {
                    console.log('data from service:', returnedData);
                    this.areaData = returnedData;
                });
//            console.log('observer/promise', ob);
        }
    }

    ngOnInit() {
        ;
    }
}

