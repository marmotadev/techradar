/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Component, OnInit, AfterViewInit, OnChanges, Input, Inject,ElementRef} from 'angular2/core';
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
//import * as d3 from 'd3/selection';
declare var jQuery:JQueryStatic;

@Component({
  selector: 'radar2',
  moduleId: module.id,
//  template: '',
  templateUrl: './radar2.component.html',
  styleUrls: ['./app.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent2]

})
export class RadarComponent2 implements OnInit, AfterViewInit {
  radar_data: any;
  _data2: any;
  constructor(private manageService: ManageService, private radarService: RadarService ) {;};

  public getData2(): any[] {
        return [
                      {id: 1, title: 'CSS', quadrant: 'techniques', level: 'trial', newValue: true, number: 1},
                      {id: 2, title: 'Javascript', quadrant: 'tools', level: 'assess', newValue: true, number: 1},
                      {id: 3, title: '.NET', quadrant: 'platforms', level: 'hold', newValue: true, number: 1},
                      {id: 4, title: '.NET 4', quadrant: 'platforms', level: 'hold', newValue: true, number: 2},
                      {id: 5, title: 'Javascript1.5', quadrant: 'tools', level: 'assess', newValue: true, number: 2},
                      {id: 6, title: 'JavascriptES5', quadrant: 'tools', level: 'assess', newValue: true, number: 3},
                      {id: 7, title: 'JavascriptES6', quadrant: 'tools', level: 'assess', newValue: true, number: 4},
                      {id: 8, title: 'CI', quadrant: 'techniques', level: 'adopt', newValue: true, number: 2},
                    ];
  }

  ngOnInit() {
    console.log('on init radarcomp2');

  }
  buildRadar() {
//      console.log('building radar');
//      var tts = require('tooltipster/js/jquery.tooltipster.js');
//      console.log('tts', tts);
      var RadarChart  = require('techradar/lib/radarChart.js');

//      console.log('rchart:', RadarChart);
      var margin = {top: 100, right: 100, bottom: 100, left: 100},
      				width = Math.min(600, window.innerWidth - 10) - margin.left - margin.right,
      				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);


      var axises = ['Techniques', 'Tools', 'Languages and frameworks', 'Platforms'];
//
//      var data = [
//                  [//iPhone
//                  {axis:'Battery Life',value:0.22},
//                  {axis:'Brand',value:0.28},
//                  {axis:'Contract Cost',value:0.29},
//                  {axis:'Design And Quality',value:0.17},
//                  {axis:'Have Internet Connectivity',value:0.22},
//                  {axis:'Large Screen',value:0.02},
//                  {axis:'Price Of Device',value:0.21},
//                  {axis:'To Be A Smartphone',value:0.50}
//                  ],[//Samsung
//                  {axis:'Battery Life',value:0.27},
//                  {axis:'Brand',value:0.16},
//                  {axis:'Contract Cost',value:0.35},
//                  {axis:'Design And Quality',value:0.13},
//                  {axis:'Have Internet Connectivity',value:0.20},
//                  {axis:'Large Screen',value:0.13},
//                  {axis:'Price Of Device',value:0.35},
//                  {axis:'To Be A Smartphone',value:0.38}
//                  ],[//Nokia Smartphone
//                  {axis:'Battery Life',value:0.26},
//                  {axis:'Brand',value:0.10},
//                  {axis:'Contract Cost',value:0.30},
//                  {axis:'Design And Quality',value:0.14},
//                  {axis:'Have Internet Connectivity',value:0.22},
//                  {axis:'Large Screen',value:0.04},
//                  {axis:'Price Of Device',value:0.41},
//                  {axis:'To Be A Smartphone',value:0.30}
//                  ]
//                ];
//      console.log('data1 ready');
            //////////////////////////////////////////////////////////////
            //////////////////// Draw the Chart //////////////////////////
            //////////////////////////////////////////////////////////////
      var color = d3.scale.ordinal()
        .range(['#EDC951','#CC333F','#00A0B0']);

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
      console.log('feed data to radar', fd);
      RadarChart('.radarChart', radarChartOptions, fd);
      //
      //      var rr  = require('techradar/lib/protovis-3.2/protovis-d3.2.js');
      //      var rr3 = require('techradar/lib/lodash.underscore.min.js');
      //      var rr4 = require('techradar/utils.js');
      //      var rr2 = require('techradar/radars/radarData.js');
      //
      //      console.log('rr2', rr2);
      //
      //      var ra = require('techradar/radar.js');
      ////      console.log('data', this.radar_data);
      //      var r = ra(1000, 1200, jQuery, this.radar_data);
  }
//  buildData() {
//    var h = 1000;
//      var w = 1200;
//    return [
//                            { 'quadrant': 'Techniques',
//                                'left' : 45,
//                                'top' : 18,
//                                'color' : '#8FA227',
//                                'items' : [
//
//                                    {'name':'Build Pipelinsdfsdfes', 'pc':{'r':190,'t':90},'movement':'t'},
//                                    {'name':'sssCoding architects', 'pc':{'r':50,'t':70},'movement':'c'}
//
//                                ]
//                            },
//                            { 'quadrant': 'Tools',
//                                'left': w-200+30,
//                                'top' : 18,
//                                'color' : '#587486',
//                                'items' : [
//
//                        { name: 'Docker', pc: { r: 170, t: 19 }, movement: 't' },
//                          { name: 'bind',    pc: { r: 150, t: 69 },    movement: 'c' },
//                          { name: 'Appium',    pc: { r: 110, t: 70 },    movement: 'c',    domain: 'mobile, front-end' },
//                         { name: 'Android Studio',    pc: { r: 180, t: 66 },    movement: 'c',    domain: 'mobile, dev' },
//                          { name: 'Responsive Android',    pc: { r: 150, t: 14 },    movement: 'c' },
//                          { name: 'AutoLayout - iOS',    pc: { r: 180, t: 55 },    movement: 'c',    domain: '' },
//                          { name: 'Kiwi - iOS unit test',    pc: { r: 120, t: 14 },    movement: 'c',    domain: '' },
//                          { name: 'BEM',    pc: { r: 160, t: 60 },    movement: 'c',    domain: 'front-end' },
//                          { name: 'Crashlytics',    pc: { r: 180, t: 5 },    movement: 'c',    domain: 'mobile' },
//                          { name: 'Consul',    pc: { r: 170, t: 29 },    movement: 't' },
//                           { name: 'Swagger Code-Gen',    pc: { r: 180, t: 82 },    movement: 'c' },
//                           { name: 'PowerMock ^',    pc: { r: 180, t: 46 },    movement: 'c' },
//                           { name: 'Mockito',    pc: { r: 170, t: 84 },    movement: 'c',    domain: 'back-end' },
//                           { name: 'Json Web Tokens (JWT)',    pc: { r: 180, t: 77 },    movement: 'c' },
//                           { name: 'Lemming',    pc: { r: 160, t: 82 },    movement: 'c' },
//                           { name: 'Hystrix',    pc: { r: 150, t: 36 },    movement: 'c' },
//                          { name: 'Git',    pc: { r: 130, t: 73 },    movement: 'c' },
//
//                          { name: 'Ansible',    pc: { r: 280, t: 74 },    movement: 'c' },
//                          { name: 'Hip Chat',    pc: { r: 280, t: 78 },    movement: 'c' },
//                          { name: 'Trello',    pc: { r: 260, t: 75 },    movement: 'c' },
//                          { name: 'Charles HTTP Proxy',    pc: { r: 260, t: 48 },    movement: 'c' },
//                          { name: 'Xamarin', pc: { r: 280, t: 51 }, movement: 'c' },
//                          { name: 'Android Annotations',    pc: { r: 280, t: 25 },    movement: 'c' },
//                          { name: 'GenyMotion',    pc: { r: 210, t: 31 },    movement: 'c' },
//
//                          { name: 'JDBI ^',    pc: { r: 80, t: 56 },    movement: 'c' },
//                          { name: 'Kafka',    pc: { r: 12, t: 25 },    movement: 'c',    domain: 'back-end' },
//                          { name: 'ELK',    pc: { r: 30, t: 72 },    movement: 'c',    domain: 'back-end' },
//                          { name: 'Liquibase',    pc: { r: 80, t: 76 },    movement: 'c' },
//                          { name: 'haproxy',    pc: { r: 80, t: 46 },    movement: 'c' },
//
//                          { name: 'AppManager ^',    pc: { r: 360, t: 82 },    movement: 'c' },
//                          { name: 'Hibernate ^',    pc: { r: 380, t: 56 },    movement: 'c' },
//                          { name: 'mongoDB',    pc: { r: 330, t: 5 },    movement: 'c' },
//                          { name: 'Subversion',    pc: { r: 330, t: 18 },    movement: 'c' }
//                          ]
//                            },
//                            { 'quadrant': 'Platforms',
//                                'left' :45,
//                                 'top' : (h/2 + 18),
//                                'color' : '#DC6F1D',
//                                'items' : [
//
//                                    {'name':'OpenId Connect', 'pc':{'r':130,'t':260},'movement':'t'},
//                                    {'name':'Location based services', 'pc':{'r':130,'t':230},'movement':'c'},
//                                    {'name':'Openstack', 'pc':{'r':190,'t':190},'movement':'c'},
//                                    {'name':'RHEL 7', 'pc':{'r':170,'t':215},'movement':'c'},
//
//                                    {'name':'App containers', 'pc':{'r':250,'t':260},'movement':'c'},
//                                    {'name':'Google Cloud Data Flow', 'pc':{'r':275,'t':260},'movement':'t'},
//                                    { name: 'Postgres as NoSQL',              pc: { r: 220, t: 255 },              movement: 'c' },
//                                    {'name':'AWS 2014 Innovations', 'pc':{'r':270,'t':195},'movement':'c'},
//                                    {'name':'Azure', 'pc':{'r':290,'t':265},'movement':'c'},
//                                    { name: 'Mesos',              pc: { r: 260, t: 265 },              movement: 't' },
//                                    { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
//                                    { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },
//                                    {'name':'Google App Engine', 'pc':{'r':290,'t':255},'movement':'c'},
//                                    {'name':'Google as corporate platform', 'pc':{'r':290,'t':200},'movement':'c'},
//
//
//                                    {'name':'Google Play - (alpha/beta builds)', 'pc':{'r':30,'t':225},'movement':'c'},
//                                    {'name':'JVM as platform', 'pc':{'r':90,'t':265},'movement':'c'},
//                                    {'name':'AWS', 'pc':{'r':90,'t':250},'movement':'c'},
//                                    { name: 'BigIP v11',              pc: { r: 50, t: 257 },              movement: 'c' },
//
//
//
//                                    {'name':'Ruby On Rails', 'pc':{'r':390,'t':215},'movement':'c'},
//                                    {'name':'Everest', 'pc':{'r':390,'t':185},'movement':'c'},
//                                    {'name':'Magnolia CMS', 'pc':{'r':390,'t':235},'movement':'c'},
//                                    {'name':'Java EE - the Bad Parts', 'pc':{'r':390,'t':245},'movement':'c'},
//                                    {'name':'MS SqlServer', 'pc':{'r':390,'t':190},'movement':'c'},
//                                    {'name':'RHEL 5', 'pc':{'r':370,'t':195},'movement':'c'}
//
//                                ]
//                            },
//                            { 'quadrant': 'Languages & Frameworks',
//                                'color' : '#B70062',
//                                'left'  : (w-200+30),
//                                'top' :   (h/2 + 18),
//                                'items' : [
//                                    { name: 'CDI', pc: { r: 60, t: 290 },  movement: 'c' },
//                                    { name: 'Jersey', pc: { r: 60, t: 310 },  movement: 'c' },
//
//                                    { name: 'Guice', pc: { r: 60, t: 278 },  movement: 'c' },
//                                    { name: 'RxJava', pc: { r: 150, t: 298 },              movement: 'c',  domain: 'template' },
//
//                                    {'name':'Java 8', 'pc':{'r':130,'t':355},'movement':'c'},
//                                    {'name':'Groovy ^', 'pc':{'r':190,'t':280},'movement':'c'},
//
//                                    {'name':'Swift', 'pc':{'r':280,'t':300},'movement':'c'},
//                                    {'name':'Scala - the good parts ^', 'pc':{'r':290,'t':320},'movement':'c'},
//                                    {'name':'Serverside Javascript', 'pc':{'r':220,'t':275},'movement':'c'},
//                                    {'name':'Coffeescript', 'pc':{'r':270,'t':282},'movement':'c'},
//                                    {'name':'Functional Reactive Programming', 'pc':{'r':285,'t':330},'movement':'c'},
//                                    {'name':'Clojure', 'pc':{'r':280,'t':310},'movement':'c'},
//                                    { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',
//                                    domain: 'template' },
//                                    { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },
//
//                                    { name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },
//                                    movement: 'c',              domain: 'template' },
//                                    { name: 'Spring ^', pc: { r: 360, t: 330 },  movement: 'c' },
//                                    {'name':'Web Objects', 'pc':{'r':390,'t':290},'movement':'c'},
//                                    {'name':'ASP Classic', 'pc':{'r':375,'t':330},'movement':'c'},
//                                    {'name':'Java 6 and earlier', 'pc':{'r':390,'t':350},'movement':'c'}
//                                ]
//                            }
//                        ];
////               return radaData;??
//  }
  tooltiptize(inst: RadarComponent2) {
//    console.log('data we have is ', this.getData2());
    for (var sitem of inst.getData2())
    {
                jQuery('blip-'+sitem.id).tooltipster({
                          animation: 'grow',
//                          theme: 'tooltipster-punk',
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
    console.log('after view init');
    this.prepareRadarData();
    this.buildRadar();

//      jQuery('.tooltip').tooltipster();
//    jQuery(document).ready(this.tooltiptize(this));

  }

  public prepareRadarData() {
//      var radarData = this.buildData();
//
//      var items = [];
//      var tq = this.radarService.getInitiatives(Areas.techniques).then( res => {
//          for (var item of res)
//          {
//            radarData[0].items.push({name: item.name,  pc: { r: 230, t: 133 }, movement: item.nInitiative?'t':'c' });
//          }

  //         console.log('formed items', items);
  //      console.log('RD', radarData[0].items);
          // radarData[0]['items'] = items;
//               this.radar_data = radarData;
      this._data2 = this.getData2();
  //      console.log('formed radar data',radarData);

          console.log('all data prepared');
      });

  }
}
