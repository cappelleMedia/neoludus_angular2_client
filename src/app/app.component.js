"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Jens on 03-Nov-16.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.loaded = false;
        this.readyState = 'notReady';
        setTimeout(function () {
            _this.loaded = true;
            _this.readyState = 'ready';
        }, 1000);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: [
                './app.styles.css'
            ],
            animations: [
                core_1.trigger('loader', [
                    core_1.state('show', core_1.style({ opacity: 1 })),
                    core_1.transition('* => void', [
                        core_1.animate(300, core_1.style({ opacity: 0 }))
                    ])
                ]),
                core_1.trigger('main', [
                    core_1.state('notReady', core_1.style({ opacity: 0 })),
                    core_1.state('ready', core_1.style({ opacity: 1 })),
                    core_1.transition('notReady => ready', core_1.animate('500ms ease-in')),
                    core_1.transition('ready => notReady', core_1.animate('500ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map