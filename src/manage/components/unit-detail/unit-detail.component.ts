import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
//import {Hero} from './hero';
import {ManageService} from '../../../shared/services/manage.service';
import {RadarService} from '../../../shared/services/radar.service';
import {OrganizationUnit} from '../../../shared/model/organization-unit';
import {ItemFormComponent} from '../item-form/item-form-component';
import {Initiative} from '../../../shared/model/initiative';
import {Areas} from '../../../shared/model/areas';
import {Embracement} from '../../../shared/model/embracement';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
import {EmbracementComponent} from '../embracement.component';
@Component({
  selector: 'unit-detail',
  templateUrl: '/manage/components/unit-detail/unit-detail.component.html',
  styleUrls: [ '/manage/components/unit-detail/unit-detail.component.css'],
//  inputs: ['unit', 'showAddNew'],
//  directives: [ItemFormComponent],
    directives: [ItemFormComponent, Dragula, EmbracementComponent],
  viewProviders: [DragulaService]
})


export class UnitDetailComponent implements OnInit {
  public areasEnum = Areas;
  public embracementEnum = Embracement;
  @Input() unit: OrganizationUnit;
  category: string;
  initiatives: Initiative[];
  @Input() showAddNew: boolean;
  selectedArea: Areas;


  constructor(private _heroService: ManageService, private _radarService: RadarService,
    private _routeParams: RouteParams, private _router: Router, private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
          console.log(`drag: ${value[0]}`);
          this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value) => {
          console.log(`drop: ${value[0]}`);
          this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe((value) => {
          console.log(`over: ${value[0]}`);
          this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe((value) => {
          console.log(`out: ${value[0]}`);
          this.onOut(value.slice(1));
        });
  }

  public showAddNewForm() {
    this.showAddNew = true;
  }
  catToArea(cat: string): Areas {
    return Areas[cat];
  }
  reloadInitiatives(category: string) {
    console.log('Will reload initiatives');
    this._radarService.getInitiatives(this.catToArea(category)).then(initiatives => {this.initiatives = initiatives;});
  }
  filteredInitiatives(embracement: Embracement) {
//    console.log('FIltering initiatives for: ', embracement);
    return this.initiatives.filter( (x) => { return x.embracement === embracement; });
  }
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.category = this._routeParams.get('category');
    this.selectedArea = Areas[this.category];
    console.log('Now current:', this.selectedArea);

    if (this.category !== 'undefined' && this.category !== null)
        this.reloadInitiatives(this.category);
    this._heroService.getUnit(id).then(hero => this.unit = hero);

  }
  openCategory(id:number, areaStr: string) {
    this._router.navigate(['ItemsInCategoryDetail', { id: this.unit.id, category: areaStr }]);
  }
  isCategorySelected(): boolean {
   //console.log('Category selected: ' + this.category);
    if (this.category) {

        return true;
    } else {

        return false;
    }
  }
  isCategorySelected2(c: Areas): boolean {
     return !this.isCategorySelected() || this.isCategorySelected() && this.selectedArea === c;
    }
  goBack() {
    window.history.back();
  }
  closeAddNewForm() {
    console.log('Parent component closes form');
    this.showAddNew = false;
  }
  initiativeAdded(event) {
    console.log('Got event:', event);
    this.reloadInitiatives(this.category);
  }
  // drag & drop callbacks
    private onDrag(args) {
  //      let [e, el] = args;
        // do something
      }

      private onDrop(args) {
        let [e, target, source] = args;
        e = 0;
        source = null;
        console.log('Shit got dropped:', args[0].getAttribute('data-embr-id'), target.getAttribute('data-container-id'));
        var embracementId:string = target.getAttribute('data-container-id');
        var embr: Embracement = Embracement[embracementId];
        this._radarService.moveInitiative(args[0].getAttribute('data-embr-id'), embr);
      }

      private onOver(args) {
  //      let [e, el, container] = args;
        // do something
      }

      private onOut(args) {
  //      let [e, el, container] = args;
        // do something
      }
    ///
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
