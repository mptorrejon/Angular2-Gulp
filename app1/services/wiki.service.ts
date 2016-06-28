/*this file will hit Wikipedia API and return results*/
// import { HTTP_PROVIDERS } from '@angular/http';
import { Injectable } from '@angular/core';
import {URLSearchParams, Http, Response} from '@angular/http';
import {Jsonp, Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class WikiService{
	constructor(/*private http: Http,*/ private jsonp: Jsonp){}
	
	getResults (name:string){
		var search = new URLSearchParams();
		search.set('action', "opensearch");
		search.set('search', name); //replace 'ma' for variable
		search.set('format', 'json');
		let rs = this.jsonp
					.get(
						'http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', 
						{ search }
					)
					.map(this.extractData);
		console.log(rs);
		return rs;
	}
	//formats response into a json object
	extractData (res: Response){
		console.log(res);
		let body = res.json();
		return body || {};
	}
}

@Injectable()
export class CompanySearch{
	constructor( private jsonp: Jsonp, private http:Http){}
	
	getCompany(name: string) {
		
		let cName = this.http
			.get('http://localhost:5000/search?name='+name );

		// console.log(cName);
		return cName;
	}
