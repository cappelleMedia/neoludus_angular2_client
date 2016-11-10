import {
    Component,
    ViewEncapsulation, OnInit,
} from '@angular/core';

import {AppState} from './app.service';
import {Router} from '@angular/router';
import {
    loaderAnimation,
    mainContentAnimation
} from './utils/animations/app.animations'

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ],
    animations: [
        loaderAnimation,
        mainContentAnimation,
    ]
})
export class AppComponent implements OnInit{
    name = 'Neoludus';
    loaded = false;
    readyState = 'notReady';

    constructor(public appState: AppState, public router: Router) {
        setTimeout(() => {
            this.loaded = true;
            this.readyState = 'ready';
        }, 1000);
    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}

