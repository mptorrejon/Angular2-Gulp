/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { provide } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { AppComponent } from './components/app.component';
import {FormlyProviders} from 'ng2-formly';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ROUTER_PROVIDERS} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


//this resembles angular.module('name', [dependencies])...
bootstrap(AppComponent, [
	HTTP_PROVIDERS, 
	JSONP_PROVIDERS, 
	FormlyProviders,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);