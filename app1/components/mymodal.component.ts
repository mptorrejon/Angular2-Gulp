import {Component, ViewChild} from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	selector: 'my-modal',
	templateUrl: '../templates/mymodal.templates.html',
	directives: [MODAL_DIRECTIVES]
}) export class MyModal{
name = "Mauricio.";

	@ViewChild('modal')
	modal: ModalComponent;

	close(){
		console.log('closing...');
		this.modal.close();
	}
	open(){
		console.log('opening...')
		this.modal.open();
	}
}