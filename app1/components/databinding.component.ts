import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'data-binding',
	templateUrl: '../templates/databinding.template.html'
})export class DataBinding{

	@Input() myname:string = 'Mauricio';
	
}