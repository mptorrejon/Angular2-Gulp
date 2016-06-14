import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
import {CounterActions} from "../actions/cart.actions";
import {CounterStore} from "../store/catalogItems.store";
@Component({
    selector: "flux-arch",
    providers: [CounterActions, CounterStore],
    templateUrl: "../templates/myflux.templates.html"
})
export class MyFlux implements OnInit, OnDestroy {
    counter:number = 0;

	private counterActions;
	private counterStore;

    constructor( @Inject(CounterActions)counterActions:CounterActions,
        		 @Inject(CounterStore)counterStore:CounterStore) {
       	this.counterActions  = counterActions;
    	this.counterStore = counterStore;
   	}
   	ngOnInit() {
		this.counter = this.counterStore.getCounter();
		this.counterStore.subscribe(() => this.counter = this.counterStore.getCounter());
	}
	ngOnDestroy() {}
	increment() {
		this.counterActions.increment();
	}
	decrement() {
		this.counterActions.decrement();
	}
	reset() {
		this.counterActions.reset();
	}
}