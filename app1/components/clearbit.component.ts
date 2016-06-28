import {Component} from '@angular/core';
import {CompanySearch} from '../services/wiki.service';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'clearbit',
	template: ` <h1>Search for Companies</h1>
				<input (keyup)="getResults($event)" placeholder="Where do you work?" />
				<div *ngFor="let item of mydata | async" >
				</div>
				<p>{{name}}</p>
	`,
	providers: [CompanySearch]
}) export class ClearBit{
	input: any = "";
	mydata: Observable<string>;

	constructor(private cSearch: CompanySearch ){}

	getResults(name){
		this.input = name.target.value;
		
		this.cSearch.getCompany( this.input ).subscribe(function(data){
			 // this.mydata = JSON.parse(data._body).results;
			console.log(data);
		});
	}
}