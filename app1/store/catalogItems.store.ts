import {EventEmitter} from "@angular/core";
import {Map} from "immutable";
import {UPDATE_COUNTER, RESET_COUNTER} from "../actions/cart.actions";
import dispatcher from "../dispatcher/dispatcher";
//INTERFACE======
declare interface Payload {
    type: string;
    data: any;
}
	
const INITIAL_VALUE = 0;
export class CounterStore extends EventEmitter<string> {
    private store:any = Map({counter: INITIAL_VALUE});

    constructor() {
    	//lets you use all functions/methods from the eventemitter module
        super();
        //catches emit calls from dispatcher and applies correct view update
        dispatcher.subscribe((payload:Payload) => {
        	//init()
            let oldStore = this.store;
            //applies correct update depending on increment/decrement
            switch (payload.type) {
                case UPDATE_COUNTER:
                    this.store = this.store.update("counter", v => v + payload.data);
				break;

                case RESET_COUNTER:
                    this.store = this.store.update("counter", value => INITIAL_VALUE);
				break;
                default:break;
            }
            //quick comparison to check if value has changed
            if (!this.store.equals(oldStore)) {
                this.emit("changed");
            }
        });
    }
    //getter
    getCounter() {
        return this.store.get("counter");
    }
}