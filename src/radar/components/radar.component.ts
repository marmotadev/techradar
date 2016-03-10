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
declare var jquery:JQueryStatic;


@Component({
  selector: 'radar',
  moduleId: module.id,
//  template: '',
  templateUrl: './radar.component.html',
//  styleUrls: ['./view-radar.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, RadarComponent]

})
//@RouteConfig([
//  { path: 'units', name: 'Home',  component: UnitListComponent, useAsDefault: true},
//])
export class RadarComponent implements OnInit, AfterViewInit {
//  constructor(private _router: Router) {;};
  ngOnInit() {
    console.log('radar componentn init');
  }
  ngAfterViewInit() {
//          if(!NgChosenComponent.chosenInitialized) {
//              jQuery(this.el.nativeElement)
//                  .find('select')
//                  .chosen()
//                  .on('change', (e, args) => {
//                      this.selectedValue = args.selected;
//              });
//              NgChosenComponent.chosenInitialized = true;
//          }

//    var ra = require('../../techradar/radar.js');
//    var jQuery = require('jQuery/lib/node-jquery.js');
//    var r = ra(1000, 1200, jQuery);
//    var aa = require('jquery');
//    console.log('asdfasdf', aa);
//    r.whatevga();
//    console.log('after', ra);
      }
}


