import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {TvSeriesResponse} from "../models/tv-series-response";
import {TvSeries} from "../models/TvSeries";

@Injectable()
export class TvdbService {

  private url_prefix = 'https://api.themoviedb.org/3/tv';
  private apiKey=environment.tvdb.key;

  constructor(private http:Http) { }

  getPopular(page:number=1):Observable<TvSeriesResponse>{
    let url = this.buildUrl('popular');

    return this.http.get(url)
      .map(res=>res.json());
  }

  getTvSeries(id:number):Observable<TvSeries>{
    let url = this.buildUrl(id);

    return this.http.get(url)
      .map(res=>res.json());
  }

  private buildUrl(path){
    return  `${this.url_prefix}/${path}?api_key=${this.apiKey}`;
  }

}
