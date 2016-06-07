import {Component, Directive, HostBinding, HostListener} from '@angular/core';
import {WikiService} from '../services/wiki.service';
import { HTTP_PROVIDERS, JSONP_PROVIDERS, Jsonp } from '@angular/http';

@Directive({
	selector: 'button[counting]'
})class CountClicks{
	numberOfClicks = 0;
	
	@HostListener('click', ['$event.target'])
	onClick(btn){
		console.log('button', btn, "number of clicks: " + this.numberOfClicks++);
	}
}

@Directive({
	selector: '[myinput]'
}) class InputDetector{
	// @hotlistener takes two parameters
	//	+ the event to bind it
	//	+ the value to pass to the fucntion
	@HostListener('keyup', ['$event.target.value'])
	keyUp(val){
		console.log("Text entered: "+val);
	}
}

@Component({
	selector: 'my-input',
	templateUrl: '../templates/myInput.template.html',
	directives: [CountClicks, InputDetector ],
	providers: [WikiService, HTTP_PROVIDERS, JSONP_PROVIDERS]
}) export class SearchInput {
	inputValue: any = "";
	
	constructor(private wikiservice: WikiService){}
	
	getValue = (value) =>{
		this.inputValue = value.target.value;
		
		value = this.wikiservice.getResults(this.inputValue).subscribe(resp=>{
			// console.log( resp );
		});
	}
	//this will hit the service method to call API	
}