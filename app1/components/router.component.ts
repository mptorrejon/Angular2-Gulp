// import {ROUTER_DIRECTIVES, Router, Routes} from '@angular/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from '@angular/common';
import {Http} from '@angular/http';
import {Component} from '@angular/core';
import {Home} from './home.component';
import {About} from './about.component';

import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
	selector: 'my-router',
	directives: [ROUTER_DIRECTIVES, Home],
	template: `
		<div id="sidebar">
			<h1>Search github users</h1>
			<input [ngFormControl]="searchTerm" placeholder='Search for Users' />
			<button (click)="getUsers()">Get Users</button>
		</div>
	`
})

export class MyRouter{

	users: Array<Object> = [];
	searchTerm: Control = new Control();

	constructor(public http: Http){}

	getUsers() {
		this.http.get(`https://api.github.com/search/users?q=${this.searchTerm.value}`)
		.map(response => response.json())
		.subscribe(
			data => console.log(data),
			error => console.log(error)
		);
	}
}