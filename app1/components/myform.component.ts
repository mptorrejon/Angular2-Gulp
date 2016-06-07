import {Component} from '@angular/core';
/*
	Imports all component needed from ng2-formly/lib/core.d.ts
	***Templates and Formly* components are hosted in two different
	files, hence the two different imports***
*/
import {FormlyForm, FormlyConfig, FormlyMessages, FormlyProviders} from 'ng2-formly';
/*
	paths should be link to the file location, but in this case
	but in this case, since we have linked it using systemJS
	we only need to reference the file itself withint its hosting folder
	TODO: try to fix Sublime-error while referencing file
*/
import {TemplateDirectives} from 'ng2-formly/templates';

@Component({
	selector: 'my-form',
	templateUrl: '../templates/myform.template.html',
	directives: [FormlyForm],
	providers: [FormlyConfig, FormlyMessages]
}) export class MyForm{
	user = {};
	userFields;
	/*
		initializes setup for formly-fields
		In html there should be a data binding key name 'userFields'
	*/
	constructor(fc: FormlyConfig){
			
		['input', 'checkbox','radio'].forEach((field) => {
			fc.setType({
				name: field,
				component: TemplateDirectives[field]
			});
		});
		//sets each field already initialized configuration settings
		this.userFields = [{
			// INPUT
			key: 'nameOfPerson',
			type: 'input',
			templateOptions: {
				label: 'Full Name:'
			}
		},{
			// CHECKBOX
			type:'checkbox',
			key: 'title',
			templateOptions:{
				label: 'Agree Terms',
				description: 'This should be a link for Terms of Use.'
			}
		}, {
			//RADIO
			type: 'radio',
			key: 'Select',
			templateOptions: {
				options: [{
					key: "mr",
					value: "Mr."
				}, {
					key: "mrs",
					value: "Mrs"
				}],
				label: "Title",
				description: "Select a title that suits your description"
			}
		}]
	}
}