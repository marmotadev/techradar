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
    template: '<div class="radarChart"></div><content></content>',
    //    templateUrl: './radar2.component.html',
    //    styleUrls: ['./app.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent2, QuadrantListComponent]

})
export class RadarComponent2 implements OnInit, AfterViewInit {
    @Input() area: string;
    _data: any[];

    constructor(private manageService: ManageService, private radarService: RadarService) { ; };

    ngOnInit() {
        console.log('on init radarcomp2', this.area);
    }
    @Input()
    set data(d) {
        this._data = d;
        this.dataOnChanged();
    }
    get data() {
        return this._data;
    }
    dataOnChanged() {
        console.warn('Data changed!');
        this.buildRadar();
    }
    buildRadar() {
        if (this.data === null || typeof (this.data) === 'undefined') {
            console.warn('no data, no radar');
            return null;
        }

        //      console.log('building radar');
        //      var tts = require('tooltipster/js/jquery.tooltipster.js');
        //      console.log('tts', tts);
        var rr3 = require('techradar/lib/lodash.underscore.min.js');
        var rr4 = require('techradar/utils.js');
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
        console.log('Moment before initializing js radar', this.data);
        RadarChart('.radarChart', radarChartOptions, this.data);
        //        RadarChart('.radarChart', radarChartOptions, this.transformDataForRadar(this.data));
    }

    transformDataForRadar(data: any[]) {
        //            { id: 1, title: 'CSS', quadrant: 'techniques', level: 'trial', newValue: true, number: 1 },
        var ret: any[] = [];
        if (this.data !== null && typeof (this.data) !== 'undefined') {
            console.log('will examinate next', this.data);
            for (var lvl of this.data) {
                console.log('transforming level', lvl);
                for (var blip of lvl.blips) {
                    console.log('transforming blip', blip);
                    var retItem = {
                        id: blip.id, title: blip.title, level: lvl.id, newValue: blip.movement === 'c' ? true : false,
                        number: blip.number, description: blip.description
                    };
                    ret.push(retItem);
                }
            }
        }
        return ret;
    }
    tooltiptize(inst: RadarComponent2) {
        for (var sitem of inst.data) {
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
        this.buildRadar();

        //      jQuery('.tooltip').tooltipster();
        //    jQuery(document).ready(this.tooltiptize(this));

    }
}
