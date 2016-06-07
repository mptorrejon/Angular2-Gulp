import { Component, ViewChild } from '@angular/core';
import { Body } from './body.component';
// import './rxjs-operators';
import 'rxjs/add/operator/map';
// import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	selector: 'my-app',
	templateUrl: '../templates/app.component.html',
	directives: [Body]
	// providers: [HTTP_PROVIDERS, ]
})export class AppComponent{
	
}; 