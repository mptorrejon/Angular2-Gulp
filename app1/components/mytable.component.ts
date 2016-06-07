import {Component} from '@angular/core';
import {DataTableDirectives as dtdir} from 'angular2-datatable/datatable';
import * as _ from 'lodash';
@Component({
	selector: 'my-table',
	templateUrl: '../templates/mytable.template.html',
	directives: [dtdir]
})export class MyTable{
	data: any = [ "first", 'Second', 'Third' ];
}