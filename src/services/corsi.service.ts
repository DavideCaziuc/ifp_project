import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {
  constructor(private http: HttpClient) { }

  getListaCorsi() {
    return this.http.get('http://localhost:8080/api/corsi/lista');
  }
}
