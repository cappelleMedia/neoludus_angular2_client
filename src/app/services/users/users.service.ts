/**
 * Created by Jens on 09-Nov-16.
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

import {Injectable} from '@angular/core';
import {
    Http,
    Response,
    Headers
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';

import {Configuration} from '../../app.constants';
import {User} from '../../models/users/user/model';

@Injectable()
export class UserService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl + 'users/';

        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    private handleError(error: Response | any) {
        // let errMsg: ApiError;
        // if (error instanceof Response) {
        //     const body = error.json() || '';
        // } else {
        //     errMsg = error.message ? error.message : error.toString();
        // }
        //TODO handle errors for specific targets
        return Observable.throw(error);
    }

    private extractData(response: Response) {
        return response.json();
    }

    public getUsers(): Observable<User> {
        return this._http.get(this.actionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getUser(id: string): Observable<User> {
        return this._http.get(this.actionUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public addUser = (user: User): Observable<User> => {
        let toAdd = {
            username: user.username,
            email: user.email,
            dateTimePref: user.dateTimePref,
            _avatar: user._avatar._id
        };
        return this._http.post(this.actionUrl, toAdd, {headers: this.headers}).map(res => res.json());
    }

}