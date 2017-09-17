/**
 * Created by Jens on 14-Nov-16.
 */
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import {
    Http,
    Response,
    Headers
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';

import {Configuration} from '../../app.constants';
import {UserRole} from '../../models/users';

export class UserRoleService {
    private userroles: {[accessFlag: number]: UserRole;} = {};
    private actionUrl: string;
    private headers: Headers;
    private _http: Http;
    private _configuration: Configuration;

    constructor(http, config) {
        this._http = http;
        this._configuration = config;
        this.actionUrl = this._configuration.ServerWithApiUrl + 'userroles/';

        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Accept', 'application/json');

        this.init();
    }

    private init() {
        this.getUserRoles().subscribe(
            userRoles => {
                for (let userRole in userRoles) {
                    console.log('userrole init');
                }
            }
        )
        console.log('userrole init');
    }

    private handleError(error: Response | any) {
        //FIXME handle error
        return Observable.throw(error);
    }

    private extractData(response: Response) {
        return response.json();
    }

    private getUserRoles(): Observable<UserRole> {
        return this._http.get(this.actionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private getUserRole(id: string): Observable<UserRole> {
        return this._http.get(this.actionUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

}