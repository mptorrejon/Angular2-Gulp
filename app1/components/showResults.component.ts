import {Component} from '@angular/core';
import {WikiService} from '../services/wiki.service';

@Component({
	selector: 'my-results',
	templateUrl: '../templates/showResults.template.html',
	providers: [WikiService]
}) export class ShowResults{
	/*inputValue: any = "";
	value: any = "";
	
	constructor(private wikiservice: WikiService){}
	
	getValue = (value) =>{
		this.inputValue = value.target.value;
		
		value = this.wikiservice.getResults(this.inputValue).subscribe(resp=>{
			console.log( resp );
		});
	}*/
}