/**
 * Created by Jens on 10-Nov-16.
 */
import {
    Component,
    Input,
    Output,
    EventEmitter,
    HostListener,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

import {
    containerToggleAnimation
} from '../../utils';

import {UserService} from '../../services/users/users.service';
import {UserValidator} from '../../utils/validators';
import {UsersFactory} from '../../utils/factories';
import {User} from '../../models/users';

@Component({
    selector: 'auth-forms',
    templateUrl: './auth-forms.component.html',
    styleUrls: [
        './auth-forms.component.css'
    ],
    animation: [
        containerToggleAnimation
    ]
})