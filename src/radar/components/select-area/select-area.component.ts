import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';
//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
//import {Hero} from './hero';
import {ManageService} from '../../../shared/services/manage.service';
import {RadarService} from '../../../shared/services/radar.service';
import {OrganizationUnit} from '../../../shared/model/organization-unit';
import {Initiative} from '../../../shared/model/initiative';
import {Areas} from '../../../shared/model/areas';
import {Embracement} from '../../../shared/model/embracement';
import {ItemFormComponent} from '../../../manage/components/item-form/item-form-component';
import {EmbracementComponent} from '../../../manage/components/embracement.component';

@Component({
    selector: 'select-area',
    templateUrl: '/radar/components/select-area/select-area.component.html',
    styleUrls: ['/radar/components/select-area/select-area.component.css'],
    //  directives: [ItemFormComponent],
    directives: [ItemFormComponent, EmbracementComponent]
})


export class SelectAreaComponent implements OnInit {
    public areasEnum = Areas;
    public embracementEnum = Embracement;
    @Input() unit: OrganizationUnit;
    category: string;
    initiatives: Initiative[];
    @Input() showAddNew: boolean;
    selectedArea: Areas;
    @Output() onSelected: EventEmitter<any> = new EventEmitter();

    constructor(private _heroService: ManageService, private _radarService: RadarService,
        private _routeParams: RouteParams, private _router: Router) {
        ;
    }
    public showAddNewForm() {
        this.showAddNew = true;
    }
    catToArea(cat: string): Areas {
        return Areas[cat];
    }
    reloadInitiatives(category: string) {
        console.log('Will reload initiatives');
        this._radarService.getInitiatives(this.catToArea(category)).then(initiatives => { this.initiatives = initiatives; });
    }
    filteredInitiatives(embracement: Embracement) {
        //    console.log('FIltering initiatives for: ', embracement);
        return this.initiatives.filter((x) => { return x.embracement === embracement; });
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
    openCategory(areaStr: string) {
        this._router.navigate(['ViewRadar', { area: areaStr }]);
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
        var embracementId: string = target.getAttribute('data-container-id');
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
