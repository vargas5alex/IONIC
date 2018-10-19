import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OmdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OmdbProvider {
  private key: string;
  private url: string;
  // Inyectar una dependencia se llama http y es de tipo HttpClient
  constructor(public http: HttpClient) {
    this.key = '4b750745';
    this.url = 'http://www.omdbapi.com/'
  }

  public searchMovie(title: string): any {
    // params: QueryParams
    return this.http.get(this.url, {
      params: {
        apiKey: this.key, 
        t: title
      }
    });
  }
}
