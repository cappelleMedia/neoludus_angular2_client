/**
 * Created by Jens on 03-Nov-16.
 */
import{
    Achievement
} from '../achievement/model';
import{
    UserRole
} from '../userrole/model';
//need notifications
export class User {
    private _id: string;
    private username: string;
    private email: string;
    private dateTimePref: string;
    private avatarUrl:string;
    private userRole: UserRole;
    private warnings: number;
    private dp: number;
    private kp: number;
    private donated: number;
    private activeTime: number;
    private lastLogin: Date;
    private creation: Date;

    constructor(
        // _id, username, email, dateTimePref, avatarUrl, accessFlag,
    ) {
    }

}