/**
 * Created by Jens on 10-Nov-16.
 */
import {
    User
} from '../../models/users'
import {Injectable} from "@angular/core";
import
{
    UserController
}
    from "../../controllers/UserController";
@Injectable()
export class UsersFactory {
    constructor(private _userController: UserController) {

    }

    getDefaultUser() {
        // return new User(
        //     '', '', '', '',
        // );
    }
}