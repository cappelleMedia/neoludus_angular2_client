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

import {Http} from "@angular/http";
import {Injectable} from '@angular/core';
import {UserRoleService} from "../services/users/userroles.service";
import {UserService} from "../services/users/users.service";
import {Configuration} from "../app.constants";
import {Observable} from "rxjs";
import {User} from "../models/users/user/model";

@Injectable()
export class UserController {

    constructor(private _http: Http, private _configuration: Configuration) {
        console.log('controller oké');
        this._userRoleService = new UserRoleService(_http, _configuration);
        this._userService = new UserService(_http, _configuration);
    }

    private _userRoleService: UserRoleService;
    private _userService: UserService;

    getUsers(): Observable<User> {
        return this._userService.getUsers();
    }

    getUser(id: string): Observable<User> {
        return this._userService.getUser(id);
    }
}