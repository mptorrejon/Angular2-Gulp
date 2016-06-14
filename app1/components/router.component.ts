import {ROUTER_DIRECTIVES, Router, Routes} from '@angular/router';
// import {RouterLink} from '@angular/router/esm/src/directives/router_link'
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from '@angular/common';
import {Http} from '@angular/http';
import {Component} from '@angular/core';

import {Home} from './home.component';

@Component({
	selector: 'my-router',
	directives: [ROUTER_DIRECTIVES, ],
	template: `
		<a [routerLink]="['/']">Home</a>
	  	<a [routerLink]="['/about']">About</a>
		<div id="sidebar">
			<input [ngFormControl]="searchTerm" placeholder='Search for Users' />
			<button (click)="getUsers()">Get Users</button>
		</div>
	`
})export class MyRouter{
	users: Array<Object> = [];
	searchTerm: Control = new Control();

	constructor(public http: Http){
		console.log(this.searchTerm)
	}

	getUsers() {
		console.log( this.users );
		console.log( this.searchTerm.value );
		this.http.get(`https://api.github.com/search/users?q=${this.searchTerm.value}`)
		.map(response => response.json())
		.subscribe(
			data => console.log(data),
			error => console.log(error)
		);
	}
}
@Routes([
	{ path: '/home', component: Home },
	{ path: '/', component: Home }
])
