/*this file will hit Wikipedia API and return results*/
// import { HTTP_PROVIDERS } from '@angular/http';
import { Injectable } from '@angular/core';
import {Jsonp, Headers, RequestOptions, URLSearchParams, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

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
export class CompanySearch {
	constructor(private jsonp: Jsonp, private http: Http) { }

	getCompany(name: string) {
		let headers = new Headers();
		// headers.append('Authorization' , 'Bearer 5677ecf5dc2ff38d1c1df319d3e6ae32');
		// headers.append('Access-Control-Allow-Origin' , '*');
		// headers.append('Content-Type' , 'application/xhtml+xml');
		
		// let params = new URLSearchParams();
		// params.set('name', name);
	
		return this.http
			/*company logo & name lookup*/
			.get('https://autocomplete.clearbit.com/v1/companies/suggest?query='+name, {headers:headers})
			/*HRSA Solr current DB*/
			// .get('http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*%3A*&version=2.2&start=0&rows=10&indent=on&wt=json', {headers: headers });
	}
}