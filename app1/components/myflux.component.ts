let catalogItems = [
	{ id: 1, title: 'Item #1', cost: 1 },
	{ id: 2, title: 'Item #2', cost: 2 },
	{ id: 3, title: 'Item #3', cost: 3 }
];

import {Component} from '@angular/core';
import {cartActions} from '../actions/cart.actions';

@Component({
	selector: 'flux-arch',
	templateUrl: '../templates/myflux.templates.html',
	providers: [cartActions]
}) export class MyFlux {
	
	constructor(private action: cartActions){}
	
	addToCart(){
		console.log('adding new item...');
		this.action.addItem('new item');
	}
}