/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Input, Component, OnInit, AfterViewInit} from 'angular2/core';
//import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
//import {Router} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
//import {JQueryStatic} from 'jQuery';
//import {NameListService} from '../shared/services/name-list.service';
//import {OrganizationUnit} from '../shared/model/organization-unit';
//import {ManageService} from '../shared/services/manage.service';
//import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
//import {UnitDetailComponent} from './unit-detail/unit-detail.component';
//import {UnitListComponent} from './unit-list.component';
//import {RadarComponent} from './components/radar.component';
//import {JQueryStatic} from  'jquery';
import {ManageService} from '../../shared/services/manage.service';
import {RadarService} from '../../shared/services/radar.service';
import {Areas} from '../../shared/model/areas';
import {Initiative} from '../../shared/model/initiative';

declare var jQuery: JQueryStatic;


@Component({
    selector: 'quadrant-list',
    moduleId: module.id,
    //  template: '',
    templateUrl: './quadrant-list.component.html',
    //  styleUrls: ['./view-radar.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, QuadrantListComponent]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])

export class QuadrantListComponent implements OnInit, AfterViewInit {

    @Input() area: string;
    @Input() data: any[] = [];

    constructor(private manageService: ManageService, private radarService: RadarService) { ; };

    ngOnInit() {
        console.log('selected area', this.area);
        
    }

    ngAfterViewInit() {
//        console.log('after view init', this.quadrant);
        ;
    }
}
