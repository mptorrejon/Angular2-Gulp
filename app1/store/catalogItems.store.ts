import {Dispatcher} from '../dispatcher/dispatcher';

export class CartStore extends Dispatcher{
	constructor(){
		super();
		this.cartItems = [];
	}

	addItem(catalogItem){
		console.log('inside store additem');
	}
	removeItem(cartItem){
		console.log('inside store removeItem');
	}
}