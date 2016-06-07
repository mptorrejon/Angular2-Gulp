/// <reference path="../../typings/globals/es6-shim/index.d.ts" />

// import { it, describe, beforeEach, expect } from '../@angular/core/testing';
// import {Component} from '@angular/core';
// import { SearchInput } from '../../../app1/components/searchInput.component';
// import {
// 	it,
// 	describe,
// 	expect,
// 	beforeEachProviders
// } from '../../node_modules/@angular/core/testing';
import { App } from '../../app1/components/myapp.component';

describe('null is not equal to undefined', ()=>{
	let app;
	beforeEach( function(){
		console.log( App );
	});
	
	console.log(app);
	it('should say hello', () => {
		
		console.log( App );
		expect(this.app.hello == "Hello").toBe(true)
	});
});

window.onload();
