import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SediService {
  constructor(private http: HttpClient) { }

  getListaSedi() {
    return this.http.get('http://localhost:8080/api/sedi/lista');
  }
}
