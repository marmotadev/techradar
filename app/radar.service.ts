import {Injectable} from 'angular2/core';
import {Initiative} from './initiative';
import {Areas, ORG_UNITS, INITIATIVES, INITIATIVES_TECH, INITIATIVES_TOOL, INITIATIVES_PLATF, INITIATIVES_LAN, HEROES} from './mock-heroes';


@Injectable()
export class RadarService {

  public addInitiative(i: Initiative, area: Areas) {
    console.log("Saving initiative", i, area);
    if (area == Areas.techniques)
            INITIATIVES_TECH = INITIATIVES_TECH.push(i);
    console.log("New:", INITIATIVES_TECH);
  }
  public getInitiatives(area: Areas) {
    console.log("Retrieving initiatives for ", area);
    if (area == Areas.techniques)
        return Promise.resolve(INITIATIVES_TECH);
    if (area == Areas.tools)
        return Promise.resolve(INITIATIVES_TOOL);
    if (area == Areas.languagesAndFrameworks)
        return Promise.resolve(INITIATIVES_LAN);
    if (area == Areas.platforms)
        return Promise.resolve(INITIATIVES_PLATF);

  }
}