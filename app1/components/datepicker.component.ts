import {Component} from '@angular/core';
import {DatePicker} from './datepicker';

@Component({
	selector: '<date>',
    template: `
	   	<h3>Angular 2  DatePicker</h3>
    	<input #dateText type='text' value={{selDate}} (change)="setInputDate($event)"/>
    	<date-picker 
            [value]="value"
            [minDate]="minDate" 
            [maxDate]="maxDate"
            [disableDays]="disableDays"
            [toContainPrevMonth]="toContainPrevMonth"
            [toContainNextMonth]="toContainNextMonth"
            (selectedDate)='setDate($event)'>
        </date-picker>`,
	directives: [DatePicker]
})export class DatePickerComponent{

	private selDate:string='MM/DD/YYYY';
    private minDate:string='01/01/2016';
    private maxDate:string='12/31/2017';
    private disableDays:Array<number>=[0,6];    //For Sunday and Saturday
    private toContainPrevMonth:boolean = false;
    private toContainNextMonth:boolean = false;
    private value:string='';
	
    setInputDate(event) {
        this.value = event.target.value;
    }
	setDate(date){
		this.selDate = date;
	}
}