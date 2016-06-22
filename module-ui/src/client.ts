// the polyfills must be the first thing imported
import 'angular2-universal/polyfills';

// Angular 2
import {enableProdMode} from '@angular/core';
// Angular 2 Universal
import {prebootComplete} from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

import {ngApp} from './main.browser';

import {ROUTER_PROVIDERS} from '@angular/router';
// on document ready bootstrap Angular 2
document.addEventListener('DOMContentLoaded', () => {

  ngApp()
    .then(prebootComplete);

});
