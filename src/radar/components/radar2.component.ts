/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Component, OnInit, AfterViewInit, OnChanges, Input, Inject, ElementRef} from 'angular2/core';
//import {onChange} from 'angular2/angular2';
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
import {QuadrantListComponent} from './quadrant-list.component';
//import * as d3 from 'd3/selection';
declare var jQuery: JQueryStatic;

@Component({
    selector: 'radar2',
    moduleId: module.id,
    //  template: '',
    templateUrl: './radar2.component.html',
    styleUrls: ['./app.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent2, QuadrantListComponent]

})
export class RadarComponent2 implements OnInit, AfterViewInit {
    radar_data: any;
    _data2: any;
    @Input() area: string;

    constructor(private manageService: ManageService, private radarService: RadarService) { ; };

    public getData2(): any[] {
        return [
            { id: 1, title: 'CSS', quadrant: 'techniques', level: 'trial', newValue: true, number: 1 },
            { id: 2, title: 'Javascript', quadrant: 'tools', level: 'assess', newValue: true, number: 1 },
            { id: 3, title: '.NET', quadrant: 'platforms', level: 'hold', newValue: true, number: 1 },
            { id: 4, title: '.NET 4', quadrant: 'platforms', level: 'hold', newValue: true, number: 2 },
            { id: 5, title: 'Javascript1.5', quadrant: 'tools', level: 'assess', newValue: true, number: 2 },
            { id: 6, title: 'JavascriptES5', quadrant: 'tools', level: 'assess', newValue: true, number: 3 },
            { id: 7, title: 'JavascriptES6', quadrant: 'tools', level: 'assess', newValue: true, number: 4 },
            { id: 8, title: 'CI', quadrant: 'techniques', level: 'adopt', newValue: true, number: 2 },
        ];
    }

    ngOnInit() {
        console.log('on init radarcomp2', this.area);

    }
    buildRadar() {
        //      console.log('building radar');
        //      var tts = require('tooltipster/js/jquery.tooltipster.js');
        //      console.log('tts', tts);
        var RadarChart = require('techradar/lib/radarChart.js');

        var margin = { top: 100, right: 100, bottom: 100, left: 100 },
            width = Math.min(600, window.innerWidth - 10) - margin.left - margin.right,
            height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);


        var axises = ['Techniques', 'Tools', 'Languages and frameworks', 'Platforms'];

        //////////////////////////////////////////////////////////////
        //////////////////// Draw the Chart //////////////////////////
        //////////////////////////////////////////////////////////////
        var color = d3.scale.ordinal()
            .range(['#EDC951', '#CC333F', '#00A0B0']);

        var radarChartOptions = {
            w: width,
            h: height,
            margin: margin,
            maxValue: 4,
            levels: 4,
            levelLabels: ['adopt', 'trial', 'assess', 'hold'],
            axises: axises,
            roundStrokes: true,
            color: color,
            quadrant: 'techniques'
        };
        //Call function to draw the Radar chart
        var fd = this.getData2(); //.filter (d => d.quadrant === 'platforms');
        //        console.log('feed data to radar', fd);
        RadarChart('.radarChart', radarChartOptions, fd);
    }

    tooltiptize(inst: RadarComponent2) {
        for (var sitem of inst.getData2()) {
            jQuery('blip-' + sitem.id).tooltipster({
                animation: 'grow',
                content: sitem.title
            });
        }
        jQuery('#demo-theme').tooltipster({
            animation: 'grow',
            theme: 'tooltipster-punk',
            content: 'This is a new content'
        });
    }
    ngAfterViewInit() {
        //        console.log('after view init');
        this.prepareRadarData();
        this.buildRadar();

        //      jQuery('.tooltip').tooltipster();
        //    jQuery(document).ready(this.tooltiptize(this));

    }

    public prepareRadarData() {
        this._data2 = this.getData2();
        //        console.log('all data prepared');
    }
}
