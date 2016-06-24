import {Component} from '@angular/core';
import {SearchInput} from './searchInput.component';
import {ShowResults} from './showResults.component';
import {MyForm} from './myform.component';
import {MyTable} from './mytable.component';
import {MyModal} from './mymodal.component';
import {MyFlux} from './myflux.component';
import {DataBinding} from './databinding.component';
import {MyRouter} from './router.component';
import {DatePickerComponent} from './datepicker.component';
import {LinkedIn} from './linkedin.component';

@Component({
	selector: 'my-body',
	templateUrl: '../templates/body.template.html',

	directives: [
		SearchInput, 
		ShowResults, 
		MyForm, 
		MyTable, 
		MyModal,
		MyFlux,
		DataBinding,
		MyRouter,
		DatePickerComponent,
		LinkedIn
	],

	styles: [`
		.panel{
			display:inline-block;
			vertical-align: top;
			margin: 0px 10px;
		}
	`]
}) export class Body { };