/**
 * Created by Jens on 09-Nov-16.
 */
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
var socialStyleNone = {display: 'none', 'max-height': 0};
var socialStyleFull = {display: 'block', 'max-height': '1000px'};
var socialAnimationOut = '100ms ease-out';
var socialAnimationIn = '300ms ease-in';
export const loaderAnimation =
    trigger('loader', [
        state('show', style({opacity: 1})),
        transition('* => void', [
            animate(300, style({opacity: 0}))
        ])
    ]);
export const mainContentAnimation =
    trigger('main', [
        state('notReady', style({opacity: 0})),
        state('ready', style({opacity: 1})),
        transition('notReady => ready', animate('500ms ease-in')),
        transition('ready => notReady', animate('500ms ease-out'))
    ]);
export const subMenuAnimation =
    trigger('submenu', [
        state('false', style({maxHeight: 0})),
        state('true', style({maxHeight: 150})),
        transition('0 => 1', animate('300ms')),
        transition('1 => 0', animate('200ms'))
    ]);
export const socialContentAnimationLove =
    trigger('socialContentLove', [
        state('*', style(socialStyleNone)),
        state('love', style(socialStyleFull)),
        transition('love => *', animate(socialAnimationOut)),
        transition('* => love', animate(socialAnimationIn)),
    ]);
export const socialContentAnimationMsg =
    trigger('socialContentMsg', [
        state('*', style(socialStyleNone)),
        state('msg', style(socialStyleFull)),
        transition('msg => *', animate(socialAnimationOut)),
        transition('* => msg', animate(socialAnimationIn))
    ]);
export const socialContentAnimationUser =
    trigger('socialContentUser', [
        state('*', style(socialStyleNone)),
        state('user', style(socialStyleFull)),
        transition('user => *', animate(socialAnimationOut)),
        transition('* => user', animate(socialAnimationIn))
    ]);
export const containerToggleAnimation =
    trigger('showContainer', [
        state('in', style({opacity: 1})),
        transition('void => *', [
            style({opacity: 0}),
            animate(300)
        ]),
        transition('* => void', [
            animate(300, style({opacity: 0}))
        ])
    ]);