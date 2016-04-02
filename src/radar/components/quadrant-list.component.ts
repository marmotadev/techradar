/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Input, Component, OnInit, AfterViewInit, OnChanges, SimpleChange} from 'angular2/core';
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
import {Embracement} from '../../shared/model/embracement';

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

export class QuadrantListComponent implements OnInit, AfterViewInit, OnChanges {

    @Input() area: string;
    @Input() data: any[] = [];


    constructor(private manageService: ManageService, private radarService: RadarService) {
        console.log('quadrant-list constructor');
    };

    ngOnInit() {
        console.log('quadrant-list area', this.area);
        console.log('quadrant-list data', this.data);
    }
    /**
     * Transforms array of blips to partitions of blips.
     */
    partitionByLevel(data: Initiative[]) {
        let rawData = data;
        let ret = [];
        let idx = 1;
        console.trace('size of raw data to partition', rawData.length, data);
        for (let level of [Embracement.adopt, Embracement.trial, Embracement.assess, Embracement.hold]) {
            let blips: any[] = rawData
                .filter(x => {
                    //console.trace('filtered item level', x.level,'and', level);
                    return x.level === level;
                })
                .map(i => {
                    i.order = idx++; return i;
                });
            let title = Embracement[level];
            console.trace('blips filtered', blips.length, title);
            ret.push({ title: title, blips: blips });
        }
        return ret;
    }
    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        console.debug('quadrant-list: ngOnChanges - myProp = ' + changes['data'].currentValue);

        if (this.data !== null && typeof (this.data) !== 'undefined') {
            console.log('data is set for quadrant, proceeding to partition');
            this.data = this.partitionByLevel(this.data);

        }
        //        console.log('change recieved by quadrant-list', changeRecord);

    }
    ngAfterViewInit() {
        //        console.log('after view init', this.quadrant);
        ;
        //        console.log('quadrant-list data', this.data);
    }
}
