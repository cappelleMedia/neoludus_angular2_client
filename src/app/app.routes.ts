import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './views/home';
// import { AboutComponent } from './about';
import {NoContentComponent} from './views/no-content';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: NoContentComponent
    },
];
