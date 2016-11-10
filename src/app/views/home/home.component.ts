import {Component} from '@angular/core';

import {AppState} from '../../app.service';


@Component({
    selector: 'home',
    providers: [],
    styleUrls: ['home.component.css'],
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    constructor(public appState: AppState) {

    }

    ngOnInit() {
        console.log('hello `Home` component');
    }

    submitState(value: string) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }
}
