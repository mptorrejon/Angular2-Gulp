import {Component} from '@angular/core';

@Component({
	selector: 'linkedin',
	template: '<h1>This is LinkedIn API</h1>'
})export class LinkedIn{
// test function to be called after API script has been called
    onload(){
      alert('has loaded');
    }
}