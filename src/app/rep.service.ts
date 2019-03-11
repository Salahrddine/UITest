import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


let headers = new HttpHeaders().set('content-type', 'application/json') 
                               .set('User-Agent', 'salahrddine');


@Injectable()
export class RepService {

  constructor(private http: HttpClient) { }

  Items: any;
  dateMinsTherteen() {

    const date = new Date;
    date.setDate(date.getDate() - 30);
    return date.toISOString().slice(0, 10);
  }

  getRepository() {
    return this.http.get('https://api.github.com/search/repositories',
       {
        headers: headers,
        params : new HttpParams().set('q=created:>',this.dateMinsTherteen())
                                 .set('sort','stars')
                                 .set('order','desc') 
                                 .set('page', '1')
      });
  }

 }
