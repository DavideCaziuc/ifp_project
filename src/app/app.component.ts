import { Component, OnInit } from '@angular/core';
import { SediService } from 'src/services/sedi.service'; // Assicurati di utilizzare il percorso corretto verso il tuo servizio


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'IFP';
  sidebarVisible = true;
  categories: string[] = ["Sedi", "Docenti", "Corsi"];
  selectedCategories: any[] = [];
  listaSedi: any[] = [];

  constructor(private sediService: SediService) {}

  ngOnInit(): void {
    this.sediService.getListaSedi().subscribe(
      (data: any) => {
        console.log(data);
        this.listaSedi = data;
      },
      (error) => {
        console.error('Errore nella chiamata API:', error);
      }
    );
  }
  

  openSidebar() {
    this.sidebarVisible = !this.sidebarVisible  ;
  }
}
