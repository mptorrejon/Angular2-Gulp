var ADD_ITEM = 'ADD_ITEM';

import { ReflectiveInjector, EventEmitter } from '@angular/core';
import { Dispatcher } from '../dispatcher/dispatcher';

var injector = ReflectiveInjector.resolveAndCreate([
	Dispatcher
]);

export class cartActions extends EventEmitter<string>{

	dispatch = injector.get(Dispatcher);

	addItem(item){
		console.log('into cart.actions');
		console.log(item);
		this.dispatch.emit({
			actionType: ADD_ITEM,
			item: item,
			name: "Mauricio"
		});
	}
}