var ADD_ITEM = 'ADD_ITEM';

import { Injectable, ReflectiveInjector } from '@angular/core';
import { Dispatcher } from '../dispatcher/dispatcher';

var injector = ReflectiveInjector.resolveAndCreate([
	Dispatcher
]);

@Injectable( )
export class cartActions{
	dispatch = injector.get(Dispatcher);
	addItem(item){
		this.dispatch.emit({
			actionType: ADD_ITEM,
			item: item
		});
	}
}