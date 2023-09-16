import { Component, OnInit } from '@angular/core';
import { SediService } from 'src/services/sedi.service';
import { CorsiService } from 'src/services/corsi.service';
import { DocentiService } from 'src/services/docenti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IFP';
  sidebarVisible = true; // Inizializza la sidebar come visibile per impostazione predefinita
  categories: string[] = ["Sedi", "Docenti", "Corsi"];
  selectedCategories: string[] = [];
  listaSedi: any[] = [];
  listaCorsi: any[] = [];
  listaDocenti: any[] = [];

  constructor(
    private sediService: SediService,
    private corsiService: CorsiService,
    private docentiService: DocentiService
  ) {}

  ngOnInit(): void {
    // Inizializza le categorie selezionate come vuote
    this.selectedCategories = [];
  }

  openSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  // Funzione per aggiornare i dati in base alle categorie selezionate
  updateDataForSelectedCategories(): void {
    this.listaSedi = [];
    this.listaCorsi = [];
    this.listaDocenti = [];

    if (this.selectedCategories.includes('Sedi')) {
      this.sediService.getListaSedi().subscribe(
        (data: any) => {
          console.log('Sedi:', data);
          this.listaSedi = data;
        },
        (error) => {
          console.error('Errore nella chiamata API Sedi:', error);
        }
      );
    }

    if (this.selectedCategories.includes('Corsi')) {
      this.corsiService.getListaCorsi().subscribe(
        (data: any) => {
          console.log('Corsi:', data);
          this.listaCorsi = data;
        },
        (error) => {
          console.error('Errore nella chiamata API Corsi:', error);
        }
      );
    }

    if (this.selectedCategories.includes('Docenti')) {
      this.docentiService.getListaDocenti().subscribe(
        (data: any) => {
          console.log('Docenti:', data);
          this.listaDocenti = data;
        },
        (error) => {
          console.error('Errore nella chiamata API Docenti:', error);
        }
      );
    }
  }
}
