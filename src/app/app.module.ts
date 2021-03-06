import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
    ReactiveFormsModule
} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer
} from '@angularclass/hmr';

//providers
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
import {Configuration} from './app.constants';
import {
    UserController
} from './controllers';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {UsersFactory} from './utils/factories';

//components
import {AppComponent} from './app.component';
import {
    AppState,
    InternalStateType
} from './app.service';
import {
    HomeComponent,
    NoContentComponent,
    NavigationComponent,
    AuthForms
} from './views';

//directives
import {NeoOffClick} from './utils/directives/off-click-directive';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        NeoOffClick,
        AppComponent,
        HomeComponent,
        NavigationComponent,
        AuthForms,
        NoContentComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS,
        Configuration,
       UserController,
        UsersFactory
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) {
    }

    hmrOnInit(store: StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}

