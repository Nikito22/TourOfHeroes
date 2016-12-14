import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';
import { HeroesServicio } from './heroes.servicio';


@Component({
  moduleId: module.id,
  selector: 'heroes',
  template: `
  <div *ngIf="heroes">
    <ul class="heroes">
      <li *ngFor="let heroe of heroes" 
      [class.selected]="heroe === heroeSeleccionado"
      (click)="onSelect(heroe)">
      <span class="badge">{{heroe.id}}</span> {{heroe.nombre}}</li>
    </ul>
    <heroe-detalles [heroe]="heroeSeleccionado"></heroe-detalles>
  </div>
  <div *ngIf="!heroes">
     Buscando heroes por el universo ...angular
  </div>
  `,
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  titulo = 'Mis héroes';
  heroes: Heroe[];
  heroeSeleccionado: Heroe;

  constructor(private heroesServicio: HeroesServicio) { }

  getHeroes(): void {
    this.heroesServicio.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
  }
}
