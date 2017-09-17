/**
 * Created by Jens on 10-Nov-16.
 */
import {
    Component,
    ViewEncapsulation,
} from '@angular/core';

import {Router} from '@angular/router';

import{
    subMenuAnimation,
    socialContentAnimationLove,
    socialContentAnimationMsg,
    socialContentAnimationUser
} from '../../utils/animations/app.animations'
import {User} from '../../models/users/user/model';
import {UserController} from "../../controllers/UserController";

@Component({
    selector: 'navigation',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.css'
    ],
    animations: [
        subMenuAnimation,
        socialContentAnimationLove,
        socialContentAnimationMsg,
        socialContentAnimationUser
    ]
})
export class NavigationComponent {
    showSub = false;
    activeSocial = 'none';
    loggedInUser: User = null;
    currentPage: string;
    errorMsg: any;

    constructor(public router: Router, private _userController: UserController) {
        this.currentPage = this.router.url;
        if (this.currentPage.indexOf('video') === 1) {
            this.showSub = true;
        }
    }

    ngOnInit() {
        //FIXME code below is for testing purposes
        // this._userController.getUser('5829ab96b8f06e33748cbc99').subscribe(
        //     user => {
        //         this.loggedInUser = <User>user;
        //         console.log(this.loggedInUser);
        //
        //     }
        //     ,
        //     error => this.errorMsg = <any>error.json().errMsg
        // );
    }

    toggleShowSub() {
        this.showSub = !this.showSub;
    }

    setActiveSocial(activeSocial) {
        if (this.activeSocial === activeSocial) {
            this.activeSocial = 'none';
        } else {
            this.activeSocial = activeSocial;
        }
    }
}
