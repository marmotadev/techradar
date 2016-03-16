/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Component, OnInit, AfterViewInit} from 'angular2/core';
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

declare var jQuery:JQueryStatic;


@Component({
  selector: 'radar3',
  moduleId: module.id,
//  template: '',
  templateUrl: './radar.component.html',
//  styleUrls: ['./view-radar.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent3]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])
export class RadarComponent3 implements OnInit, AfterViewInit {
  radar_data: any;
  constructor(private manageService: ManageService, private radarService: RadarService ) {;};
  ngOnInit() {
    console.log('radar componentn init');
    this.prepareRadarData();
    console.log('radar component init finish');
  }
  buildRadar() {
      console.log('building radar');
      var rr  = require('techradar/lib/protovis-3.2/protovis-d3.2.js');
      var rr3 = require('techradar/lib/lodash.underscore.min.js');
      var rr4 = require('techradar/utils.js');
      var rr2 = require('techradar/radars/radarData.js');

      console.log('rr2', rr2);

      var ra = require('techradar/radar.js');
//      console.log('data', this.radar_data);
      var r = ra(1000, 1200, jQuery, this.radar_data);
  }
  buildData() {
    var h = 1000;
      var w = 1200;
    return [
                            { 'quadrant': 'Techniques',
                                'left' : 45,
                                'top' : 18,
                                'color' : '#8FA227',
                                'items' : [

                                    {'name':'Build Pipelinsdfsdfes', 'pc':{'r':190,'t':90},'movement':'t'},
                                    {'name':'sssCoding architects', 'pc':{'r':50,'t':70},'movement':'c'}

                                ]
                            }
                        ];
//               return radaData;??
  }
  ngAfterViewInit() {
    console.log('after view init');

    }
    public prepareRadarData() {
      var radarData = this.buildData();
      var items = [];
      var tq = this.radarService.getInitiatives(Areas.techniques).then( res => {
         for (var item of res)
         {
           radarData[0].items.push({name: item.name,  pc: { r: 230, t: 133 }, movement: item.nInitiative?'t':'c' });
         }

//         console.log('formed items', items);
      console.log('RD', radarData[0].items);
        // radarData[0]['items'] = items;
             this.radar_data = radarData;
      console.log('formed radar data',radarData);

        console.log('building radar');
        this.buildRadar();
        });

}
}
