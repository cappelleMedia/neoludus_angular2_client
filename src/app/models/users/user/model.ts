/**
 * Created by Jens on 03-Nov-16.
 */
import{
    Achievement
} from '../achievement/model';
import{
    Avatar
} from '../avatar/model';
import{
    UserRole
} from '../userrole/model';
//need notifications
export class User {
    constructor(public _id: string,
                public username: string,
                public email: string,
                public dateTimePref: string,
                public _avatar: Avatar,
                public _userRole: UserRole,
                public warnings: number,
                public dp: number,
                public kp: number,
                public donated: number,
                public achievements: Array<Achievement>,
                public activeTime: number,
                public lastLogin: Date,
                public creation: Date) {
    }

}