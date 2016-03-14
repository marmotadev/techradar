import {Injectable} from 'angular2/core';
import {Initiative} from '../model/initiative';
import {INITIATIVES_TECH, INITIATIVES_TOOL, INITIATIVES_PLATF, INITIATIVES_LAN} from './mock-heroes';
import {Areas} from '../model/areas';
import {Embracement} from '../model/embracement';
//import catToArea from './mock-heroes';

@Injectable()
export class RadarService {

  public moveInitiative(initiativeId: string, e: Embracement) {
    console.log('Moving initiative',  initiativeId, ' to embracement level ', e);
  }
  public addInitiative(i: Initiative, area: Areas) {
//    console.log('RadarService: Saving initiative', i, area, typeof(area));

    if (area === Areas.techniques)
            INITIATIVES_TECH.push(i);
    if (area === Areas.tools)
            INITIATIVES_TOOL.push(i);
    if (area === Areas.languagesAndFrameworks)
        INITIATIVES_LAN.push(i);
    if (area === Areas.platforms) {
        INITIATIVES_PLATF.push(i);
    } else {

        console.warn('Not saved!', area, typeof(area), Areas.techniques, typeof(Areas.techniques));
    }
  }
  public getInitiatives(area: Areas) {
//    console.log('Retrieving initiatives for ', area);
    if (area === Areas.techniques)
        return Promise.resolve(INITIATIVES_TECH);
    if (area === Areas.tools)
        return Promise.resolve(INITIATIVES_TOOL);
    if (area === Areas.languagesAndFrameworks)
        return Promise.resolve(INITIATIVES_LAN);
    if (area === Areas.platforms)
        return Promise.resolve(INITIATIVES_PLATF);

  }
}
