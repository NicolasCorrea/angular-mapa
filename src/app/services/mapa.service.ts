import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  constructor(private http: HttpClient) { }

  getMarkers(nombre: string = "") {
    return this.http.get(`http://localhost:3000/markers/${nombre}`);
  }
}
