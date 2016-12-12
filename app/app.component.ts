import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';
import { HeroeServicio } from './heroe-servicio';


@Component({
  selector: 'my-app',
  template: `<h1>{{titulo}}</h1>
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
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [HeroeServicio]
})

export class AppComponent implements OnInit {
  titulo = 'Mis héroes';
  heroes: Heroe[];
  heroeSeleccionado: Heroe;

  constructor(private heroeServicio: HeroeServicio) { }

  getHeroes(): void {
    this.heroeServicio.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
  }
}
