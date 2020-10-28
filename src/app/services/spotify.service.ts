import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log('servicio listo');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDphj8VCeCY1KflOUU58Y6O6tM0Cu2qVO6ch9qiORpMKhf4fj5y6O1kIZjps1oBrvX8xZ-tNaTcuVxlk_s'
    });

    return this.http.get(url, { headers });
  }



  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                    .pipe(map(data => data['albums'].items));

  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                    .pipe(map(data => data['artists'].items ));

  }
}
