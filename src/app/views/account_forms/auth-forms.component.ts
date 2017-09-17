/**
 * Created by Jens on 10-Nov-16.
 */
import {
    Component,
    Input,
    Output,
    EventEmitter,
    HostListener,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

import {
    // containerToggleAnimation
} from '../../utils';

import {UserService} from '../../services/users/users.service';
import {UserValidator} from '../../utils/validators';
import {UsersFactory} from '../../utils/factories';
import {User} from '../../models/users';
import {UserController} from "../../controllers/UserController";

@Component({
    selector: 'auth-forms',
    templateUrl: './auth-forms.component.html',
    styleUrls: [
        './auth-forms.component.css'
    ],
    animations: [
        // containerToggleAnimation
    ]
})

export class AuthForms implements OnInit{

    registerForm: FormGroup;

    constructor(private _userController: UserController, private fb: FormBuilder, _userFactory: UsersFactory){
    }

    ngOnInit(): void{
        this.buildForm();
    }

    buildForm(): void {
        this.registerForm = new FormGroup({});
    }

    registerSubmit(){
        console.log('register');
    }
}