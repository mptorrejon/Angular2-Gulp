import {EventEmitter} from "@angular/core";
//dispatcher instance remains the same throughtout the whole app
const dispatcher = new EventEmitter();
//defaults instance to be imported
export default dispatcher;