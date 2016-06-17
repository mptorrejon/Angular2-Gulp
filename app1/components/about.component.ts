import {Component, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';

@Component({
	template: '<h3>This is About Component {{id}}</h3>',
	directives: [ROUTER_DIRECTIVES]
}) export class About { 
	id: any;
	constructor( @Inject(RouteParams) params: RouteParams) {
		this.id = +params.get('id');
	}
}