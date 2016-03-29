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
import {Radar} from '../../../shared/model/radar';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';
import {EmbracementComponent} from '../embracement.component';
import {SelectAreaComponent} from '../../../radar/components/select-area/select-area.component';

@Component({
    selector: 'manage-radar',
    templateUrl: '/manage/components/manage-radar/manage-radar.component.html',
    //    styleUrls: ['/manage/components/unit-detail/unit-detail.component.css'],
    //  inputs: ['unit', 'showAddNew'],
    //  directives: [ItemFormComponent],
    directives: [ItemFormComponent, Dragula, EmbracementComponent, SelectAreaComponent],
    viewProviders: [DragulaService]
})


export class ManageRadarComponent implements OnInit {
    public areasEnum = Areas;
    public embracementEnum = Embracement;

    radar: Radar;
    radarId: number;



    @Input() unit: OrganizationUnit;
    category: string;
    initiatives: Initiative[];
    initiatives2: any[] = [];//Initiative[];
    @Input() showAddNew: boolean;
    selectedArea: Areas;


    constructor(private _heroService: ManageService, private _radarService: RadarService,
        private _routeParams: RouteParams, private _router: Router, private dragulaService: DragulaService) {

        this.initiatives2[0] = [];
        this.initiatives2[1] = [];
        this.initiatives2[2] = [];
        this.initiatives2[3] = [];

        dragulaService.drag.subscribe((value1) => {
            console.log(`drag: ${value1[0]}`);
            this.onDrag(value1.slice(1));
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
    loadRadarData() {
        return this._radarService.getRadar(this.radarId).then(r => this.radar = r);
    }
    ngOnInit() {
        this.radarId = +this._routeParams.get('id');

        this.loadRadarData();

        //        this.selectedArea = this._routeParams.get('category');
        //        this.selectedArea = Areas[this.selectedArea];
        //        console.log('current area:', this.selectedArea);

        //        if (this.selectedArea !== 'undefined' && this.selectedArea !== null)
        //            this.reloadInitiatives(this.selectedArea);
        //        this._heroService.getUnit(id).then(u => this.unit = u);

    }

    areaSelected(event) {
        console.log('Area selected', event);
        this.selectedArea = Areas[Areas[event]];
        //        console.log('ViewRadarComponent: route to ', this.selectedArea);
        //        this._router.navigate(['ViewRadar', { area: event }]);
    }

    public showAddNewForm() {
        this.showAddNew = true;
    }
    catToArea(cat: string): Areas {
        return Areas[cat];
    }
    filteredInitiatives(embracement: Embracement, initiatives5: Initiative[]) {
        function strEnum(enumType: any, value: any) {
            let normalized = value;
            if (typeof (normalized) === 'number')
                normalized = enumType[value];
            return normalized;
        }

        //            
        let embNormalized = strEnum(Embracement, embracement);
        //        console.log('FIltering initiatives for: ', embracement, 'size', initiatives5.length);
        if (initiatives5.length > 0) {
            var ret = initiatives5.filter((x) => {
                let test = x.level === embNormalized;
                //                console.debug('x.level', x.level, embracement, test, typeof (embracement), typeof (x.level),
                //                    Embracement[x.level], Embracement[embracement]);
                return test;
            });
            //            console.log('filtered res', ret);
            return ret;
        } else {
            //            console.log('init not loaded');
            return [];
        }
    }
    reloadInitiatives(area: Areas) {
        console.log('Will reload initiatives', area);
        this.loadRadarData().then(r => {
            this.initiatives = r.blips;
            console.log('reached block', r);
        });
        //        this._radarService.getInitiatives(Areas[area]).then(initiatives => {
        ////            this.initiatives = initiatives;
        //            this.initiatives2[Embracement.adopt] = this.filteredInitiatives(Embracement.adopt, initiatives);
        //            this.initiatives2[Embracement.assess] = this.filteredInitiatives(Embracement.assess, initiatives);
        //            this.initiatives2[Embracement.trial] = this.filteredInitiatives(Embracement.trial, initiatives);
        //            this.initiatives2[Embracement.hold] = this.filteredInitiatives(Embracement.hold, initiatives);
        //            console.log('initiatives reloaded', this.initiatives);
        //        });
    }
    isCategorySelected(): boolean {
        //console.log('Category selected: ' + this.selectedArea);
        if (this.selectedArea) {

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
        console.log('initiativeAdded(): Got event:', event);
        this.showAddNew = false;
        this.reloadInitiatives(this.selectedArea);
    }
    initiativeDeleted(event) {
        this.reloadInitiatives(this.selectedArea);
    }
    // drag & drop callbacks
    private onDrag(args) {
        //      let [e, el] = args;
        // do something
    }

    private onDrop(args) {
        let [e, target, source, above] = args;
        //        e = 0;
        //        source = null;
        console.log('target details', target);
        console.log('Shit got dropped:', args[0].getAttribute('data-embr-id'), target.getAttribute('data-container-id'));

        if (target.getAttribute('data-container-id') === 'trash') {
            let id = args[0].getAttribute('data-embr-id');
            console.log('deleting shit');
            this._radarService.deleteBlip(id)
                .subscribe(
                data => {
                    console.log('data', data);
                    this.initiativeDeleted(data);
                },
                err => console.log('err', err),
                () => console.log('say what')
                );
            //                .then (r => console.log('deleted',id));
        } else {
            console.log('dump drop data', args);

            var embracementId: string = target.getAttribute('data-container-id');
            var embr: Embracement = Embracement[embracementId];
            this._radarService.moveInitiative(args[0].getAttribute('data-embr-id'),
                embr,
                above ? above.getAttribute('data-embr-id') : null);
        }
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
