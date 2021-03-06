import { Component, Inject } from '@angular/core';
import { Body } from './body.component';
// import './rxjs-operators';
import 'rxjs/add/operator/map';
import {Home} from './home.component';
import {About} from './about.component';
import {Router, RouteParams, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
// import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	selector: 'my-app',
	templateUrl: '../templates/app.component.html',
	directives: [Body, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/Home', component: Home, useAsDefault:true, as: 'Home'  },
	{ path: '/About/:id', component: About, as: 'About' }
])
export class AppComponent{
	constructor(){}
	name: string = 'MAURICIO';
};