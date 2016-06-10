let catalogItems = [
	{ id: 1, title: 'Item #1', cost: 1 },
	{ id: 2, title: 'Item #2', cost: 2 },
	{ id: 3, title: 'Item #3', cost: 3 }
];

import {Component, Input, Output,} from '@angular/core';
import {cartActions} from '../actions/cart.actions';
import {cartStore} from '../store/catalogItems.store';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'flux-arch',
	templateUrl: '../templates/myflux.templates.html',
	providers: [cartActions, cartStore]
}) export class MyFlux {
	
	@Input() counterValue = 0;
 	public counterChange = new EventEmitter();
 	
	increment() {
		console.log('increment');
		this.counterValue++;
	   	this.counterChange.emit({
      		value: this.counterValue
	   	})
	}
	decrement() {
		console.log('decrement');
		this.counterValue--;
		this.counterChange.emit({
			value: this.counterValue
   		})
  }
}