import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocentiService {
  constructor(private http: HttpClient) { }

  getListaDocenti() {
    return this.http.get('http://localhost:8080/api/corsi/docenti-titoli');
  }
}
