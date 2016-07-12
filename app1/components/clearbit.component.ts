import {Component} from '@angular/core';
import {CompanySearch} from '../services/wiki.service';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'clearbit',
	template: ` <h1>Search for Companies</h1>
				<input (keyup)="getResults($event)" placeholder="Where do you work?" />
				<ul *ngFor="let item of mydata">
					<li >
						<img width="30" height="30" src={{item.logo}} />
						<span>{{item.name}}</span>
					</li>
				</ul>
			`,
	providers: [CompanySearch]
}) export class ClearBit{
	input: any = "";
	mydata: Array<any> ;

	constructor(private cSearch: CompanySearch ){}

	getResults(name){
		this.input = name.target.value;
		let that = this;
		this.cSearch.getCompany(this.input)
		.subscribe(function(data){
			// that.mydata = JSON.parse(data._body).response.docs;
			that.mydata = JSON.parse(data._body);
		});
	}
}