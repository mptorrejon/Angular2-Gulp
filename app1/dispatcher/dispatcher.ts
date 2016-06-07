import {Injectable} from '@angular/core';

@Injectable()
export class Dispatcher{
	listeners = [];
	constructor(){
		this.listeners = [];
	}
	
	emit(event) {
		console.warn('inside dispatcher');
		console.log('emitting event...');
		this.listeners.forEach((listener) => {
			console.log('looping...');
			listener(event);
			console.log(this.listeners);
		});

	}
	addListener(listener) {
		 // this.listeners.push(listener);
		 // return this.listeners.length - 1;
	}
}
