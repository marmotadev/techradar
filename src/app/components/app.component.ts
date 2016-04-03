import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES,  RouteConfig} from 'angular2/router';
import {JSONP_PROVIDERS, HTTP_PROVIDERS}  from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {ManageComponent} from '../../manage/components/manage.component';
import {ViewRadarComponent} from '../../radar/view-radar.component';
import {ManageService} from '../../shared/services/manage.service';
import {RadarService} from '../../shared/services/radar.service';
import {RadarComponent3} from '../../radar/components/radar3.component';
import {RadarComponent2} from '../../radar/components/radar2.component';
import {RadarRouterComponent} from '../../radar/radar-router.component';


@Component({
  selector: 'sd-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [ManageService, RadarService, JSONP_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig([
//  { path: '/',      name: 'Home',  component: HomeComponent , },
//  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/manage/...', name: 'Manage', component: ManageComponent, useAsDefault: true },
  { path: '/radar/...', name: 'RadarRouter', component: RadarRouterComponent },
//  { path: '/radar3', name: 'ViewRadar3', component: RadarComponent3}
])
export class AppComponent {}
