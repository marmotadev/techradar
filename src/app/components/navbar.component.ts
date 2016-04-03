import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {RouterLink} from 'angular2/router';
//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'sd-navbar',
    moduleId: module.id,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {
//    constructor(private _routeParams: RouteParams) {
//        ;
//    }
    ngOnInit() {
//        let rid = this._routeParams.get('radarId');
//        console.log('radar is SELECTED');
    }
    isRadarSelected(): boolean {
        return false;
    }
}
