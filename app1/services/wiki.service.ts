/*this file will hit Wikipedia API and return results*/
// import { HTTP_PROVIDERS } from '@angular/http';
import { Injectable } from '@angular/core';
import {URLSearchParams, Http, Response} from '@angular/http';
import {Jsonp} from '@angular/http';

@Injectable()
export class WikiService{
	constructor(/*private http: Http,*/ private jsonp: Jsonp){}
	
	getResults (name:string){
		// console.log(name);
		var search = new URLSearchParams();
		search.set('action', "opensearch");
		search.set('search', name); //replace 'ma' for variable
		search.set('format', 'json');
		return this.jsonp
					.get(
						'http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', 
						{ search }
					)
					.map(this.extractData);
	}
	//formats response into a json object
	extractData (res: Response){
		let body = res.json();
		return body || {};
	}
}