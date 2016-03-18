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
//import {Embracement} from '../../../shared/model/embracement';
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
    @Input() selectedArea: string;
    @Output() onSelected: EventEmitter<any> = new EventEmitter();

    constructor(private _heroService: ManageService, private _radarService: RadarService,
        private _routeParams: RouteParams, private _router: Router) {
        ;
    }
    ngOnInit() {
//        this.selectedArea = Areas[this.category];
        console.log('Now current:', this.selectedArea);

//        if (this.category !== 'undefined' && this.category !== null)

    }
    openCategory(areaStr: string) {
        this.selectedArea = areaStr;
        console.log('Now current:', this.selectedArea);
        this.onSelected.emit(areaStr);
    }
    isCategorySelected(): boolean {
        //console.log('Category selected: ' + this.category);
        return (this.selectedArea !== null);
    }
    isCategorySelected2(c: Areas): boolean {
        return !this.isCategorySelected() || this.isCategorySelected() && Areas[this.selectedArea] === c;
    }
}

