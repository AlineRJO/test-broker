import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsResource {

  constructor(private http : HttpClient) {}

  getAllBreeds(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }

  getDogImgByName(breed: string): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  }
}
