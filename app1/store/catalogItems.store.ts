import {Dispatcher} from '../dispatcher/dispatcher';
import {EventEmitter, ReflectiveInjector} from '@angular/core';

// var injector = ReflectiveInjector.resolveAndCreate([
// 	Dispatcher
// ]);

export class cartStore extends EventEmitter<string>{
	// dispatch = injector.get(Dispatcher);
	contructor() {
		super();
		disp = new EventEmitter();
		// console.log(new EventEmitter());
		disp.subscribe(function(payload){
			console.log('hereeeeeee');
		})
	}
}