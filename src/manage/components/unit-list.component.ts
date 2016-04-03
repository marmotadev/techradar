import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RadarService} from '../../shared/services/radar.service';
import {Radar} from '../../shared/model/radar';
import {ManageService} from '../../shared/services/manage.service';
import {DragulaService, Dragula} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'unit-list',
    moduleId: module.id,
    templateUrl: './unit-list.component.html',
    styleUrls: ['./unit-list.component.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, Dragula],
    viewProviders: [DragulaService]

})

export class UnitListComponent implements OnInit {
    newName: string;
    public userRadars: any[] = [];

    constructor(private _radarService: RadarService,
        private _heroService: ManageService, private _router: Router) { }

    ngOnInit() {
        let user = 'user1'; //XXX replace from global context
        this._radarService.findRadars(user)
            .then(radars => this.userRadars = radars);
    }
    manageRadar(radar: Radar) {
        let link = ['ManageRadar', { id: radar.id }];
        this._router.navigate(link);            
    }
}
