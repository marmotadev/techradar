import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Initiative} from '../model/initiative';
import {INITIATIVES_TECH, INITIATIVES_TOOL, INITIATIVES_PLATF, INITIATIVES_LAN, RADAR_DATA, RADAR_DATA2} from './mock-heroes';
import {Areas} from '../model/areas';
import {Embracement} from '../model/embracement';
import {Radar} from '../model/radar';
import 'rxjs/Rx';
//import catToArea from './mock-heroes';
//import 'rxjs/add/operator/catch';

@Injectable()
export class RadarService {

    constructor(private http: Http) { }

    //  private _serviceUrl = 'app/heroes';  // URL to web api
    private _serviceRoot = 'http://localhost:8080';
    private _serviceUrl = this._serviceRoot + '/radar';  // URL to web api

    authenticate(username, password) {
        var body = 'username=' + username + '&password=' + password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
            .post(this._serviceUrl,
            body, {
                headers: headers
            })
            .map(response => response.json())
            .subscribe(
            response => this.storeToken(response.id_token),
            () => console.error('shit happend'),
            () => console.log('Authentication Complete')
            );
    }
    storeToken(token: string) {
        console.log('Storing token', token);
    }
    public moveInitiative(initiativeId: string, e: Embracement, aboveId?: number) {
        console.log('Moving initiative', initiativeId, ' to embracement level ', e, aboveId);
        let body = JSON.stringify({ blipId: initiativeId, level: e, aboveId: aboveId });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log('Trying to move', body);
        return this.http.post(this._serviceUrl + '/move', body, options)
            //            .map(res => <Hero>res.json().data)
            .map(res => {
                console.log('we got response from service', res.json());
                return res.json();
            })
            .catch(this.handleError)
            .toPromise()
            ;

    }
    public move(i: Initiative, level: Embracement, aboveId: number): Promise<void> {

        let body = JSON.stringify({ blip: i, level: level, aboveId: aboveId });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log('Trying to move', body);
        return this.http.post(this._serviceUrl + '/move', body, options)
            //            .map(res => <Hero>res.json().data)
            .map(res => {
                console.log('we got response from service', res.json());
                return res.json();
            })
            .catch(this.handleError)
            .toPromise()
            ;
    }
    public addInitiative(i: Initiative, area: Areas, radarId: number): Promise<void> {

        i.area = area;
        let body = JSON.stringify(i);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log('Trying to save(addInitiative)', body);
        return this.http.post(this._serviceUrl + '/save', body, options)
            //            .map(res => <Hero>res.json().data)
            .map(res => {
                console.log('we got response from service', res.json());
                return res.json();
            })
            .catch(this.handleError)
            .toPromise()
            ;
    }

    public deleteBlip(id: number): Observable<void> {

        //        let body = JSON.stringify(id);
        //        let headers = new Headers({ 'Content-Type': 'application/json' });
        //        let options = new RequestOptions({ headers: headers });
        console.log('Trying to del', id);
        return this.http.get(this._serviceUrl + '/delete/' + id)
            //            .map(res => <Hero>res.json().data)
            .map(res => {
                console.log('we got response from service', res.json());
                return res.json();
            })
            //            .catch(this.handleError)
            //            .toPromise()
            ;
    }

    public getInitiatives(area: Areas) {
        console.log('getInitiatives ', area);
        return this.getRadarData(area);
    }
    public getRadarData(area: Areas) {
        console.log('RadarService.getRadarData()', area);
        var authHeader = new Headers();
        //                    authHeader.append('Authorization', 'Basic ' + Base64.fromByteArray('admin' + '                 
        var rr = this.http.get(this._serviceUrl + '/view/' + Areas[area], { headers: authHeader })
            .map(res => { console.log('Returning data from getRadarData()', res, res.json()); return res.json(); })
            .map(s => {
                console.log('secondary', s);
                let len = s.length;
                var idx = 1;
                return s.map(i => { i.order = idx++; console.log('i', i); return i; });
            })
            .catch(this.handleError)
            ;
        return rr.toPromise();
    }

    public findRadars(user: String): Promise<Radar[]> {
        var authHeader = new Headers();
        //                    authHeader.append('Authorization', 'Basic ' + Base64.fromByteArray('admin' + '                 
        var rr = this.http.get(this._serviceRoot + '/users/' + user + '/radars', { headers: authHeader })
            .map(res => {
                console.log('Returning data from findRadras()', res, <Radar[]>res.json());
                return res.json();
            })
            .catch(this.handleError)
            ;
        return rr.toPromise();
    }
    public getRadar(id: number): Promise<Radar> {
        var authHeader = new Headers();
        //                    authHeader.append('Authorization', 'Basic ' + Base64.fromByteArray('admin' + '                 
        var rr = this.http.get(this._serviceRoot + '/radar/' + id, { headers: authHeader })
            .map(res => {
                console.log('Returning data from findRadras()', res, <Radar[]>res.json());
                return res.json();
            })
            .catch(this.handleError)
            ;
        return rr.toPromise();
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error('failed to make http req', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
