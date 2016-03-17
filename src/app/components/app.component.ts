import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES,  RouteConfig} from 'angular2/router';
//
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';
import {ManageComponent} from '../../manage/components/manage.component';
import {ViewRadarComponent} from '../../radar/view-radar.component';
import {NameListService} from '../../shared/services/name-list.service';
import {ManageService} from '../../shared/services/manage.service';
import {RadarService} from '../../shared/services/radar.service';
import {RadarComponent3} from '../../radar/components/radar3.component';
import {RadarComponent2} from '../../radar/components/radar2.component';
import {RadarRouterComponent} from '../../radar/radar-router.component';


@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [ManageService, RadarService]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent ,useAsDefault: true },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/manage/...', name: 'Manage', component: ManageComponent },
  { path: '/radar/...', name: 'RadarRouter', component: RadarRouterComponent },
//  { path: '/radar2', name: 'ViewRadar2', component: ViewRadarComponent },
  { path: '/radar3', name: 'ViewRadar3', component: RadarComponent3}
])
export class AppComponent {}
