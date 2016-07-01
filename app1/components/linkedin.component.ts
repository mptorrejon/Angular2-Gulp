import {Component, ElementRef } from '@angular/core';

@Component({
	selector: 'linkedin',
	template: '<h1>This is LinkedIn API</h1>'
})export class LinkedIn{
// test function to be called after API script has been called
    constructor(private elementRef:ElementRef){
		
    }

	// ngAfterContentInit(){
 //    ngOnInit() {
	// // ngAfterViewInit(){
	// 	// var a = document.createElement("script");
	// 	// a.type = "text/javascript";
	// 	// a.async = true;
	// 	// a.src = "https://platform.linkedin.com/in.js?async=true";
	// 	// // console.log(a);
	//  //    a.onload = function(){
	// 	// 	IN.init({ api_key: '77dgleldtmxqfz', authorize: true, lang: 'en_US' });
	// 	// 	// console.log('====');
	// 	// 	// console.log( IN.ENV );
	// 	// 	// console.log(IN.User);
	// 	// };
	// 	// var b = document.getElementsByTagName("script")[0];
	//  //    b.parentNode.insertBefore(a, b)
	// }
}