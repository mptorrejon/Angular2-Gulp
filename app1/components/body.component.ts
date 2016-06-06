import {Component} from '@angular/core';
import {SearchInput} from './searchInput.component';
import {ShowResults} from './showResults.component';
import {MyForm} from './myform.component';
import {MyTable} from './mytable.component';

@Component({
	selector: 'my-body',
	templateUrl: '../templates/body.template.html',
	directives: [SearchInput, ShowResults, MyForm, MyTable],
	styles: [`
		.panel{
			display:inline-block;
			vertical-align: top;
			margin: 0px 10px;
		}
	`]
}) export class Body { };