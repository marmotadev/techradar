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

    @Input() quadrant: string;
    adoptionItems: any[] = [];

    constructor(private manageService: ManageService, private radarService: RadarService) { ; };

    ngOnInit() {
//        this.quadrant = 'techniques';
        console.log('selected q', this.quadrant);
        this.adoptionItems = [
            {id:'adopt', 'title':'ADOPT', 'blips':
                [
                {'id': 112, 'movement': 'c', 'number': 1, 'title': 'Consumer-driven contract testing', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'When two ...'}
                },
                {'id': 113, 'movement': 'c', 'number': 2, 'title': 'Consumer2-driven contract testing', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'Op op op ...'}
                }
                ]},
            {id:'trial', 'title':'TRIAL', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': 'Casdfadf', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'Wasdfadfhen two ...'}
                },
                {'id': 115, 'movement': 'c', 'number': 2, 'title': 'C4444444', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'112211Op op op ...'}
                }
                ]},
            {id:'assess', 'title':'ASSESS', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': 'C--=-=asdfadf', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'Wasdfadfhen two ...'}
                },
                {'id': 115, 'movement': 'c', 'number': 2, 'title': '=-=-=-=C4444444', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'112211Op op op ...'}
                }
                ]},
            {id:'hold', 'title':'HOLD', 'blips':
                [
                {'id': 114, 'movement': 'c', 'number': 1, 'title': '33333Casdfadf', 'href':'/radar/view/112',
                    'description':{'id': '9876', 'text':'Wasdfadfhen two ...'}
                },
                {'id': 115, 'movement': 'c', 'number': 2, 'title': 'C5555555555554444444', 'href':'/radar/view/113',
                    'description':{'id': '1234', 'text':'112211Op op op ...'}
                }
                ]}
//            ,
//            {'title':'trial', 'blips': ['b']},
//            {'title':'assess', 'blips': ['c']},
//            {'title':'hold', 'blips': ['d']},
        ];
    }

    ngAfterViewInit() {
//        console.log('after view init', this.quadrant);
        ;
    }
}
