import { Component, OnInit} from '@angular/core';
import { Heroe } from './heroe';
import { HeroesServicio } from './heroes.servicio';
import { HEROES } from './mock-heroes';

@Component({
  moduleId: module.id,
  selector: 'tablon',
  template: `
  <div *ngIf="mejoresHeroes">
    <h3>Tablon de los Mejores Héroes</h3>
    <div class="grid grid-pad">
      <div *ngFor="let heroe of mejoresHeroes" class="col-1-4">
        <div class="module heroe">
          <h4>{{heroe.nombre}}</h4>
        </div>
      </div>
    </div>
  </div>
  `,
})

export class TablonComponent implements OnInit {

  mejoresHeroes: Heroe[];

  constructor(private heroesServicio: HeroesServicio) { }

  getHeroes(): void {
    this.heroesServicio.getHeroes().then(heroes => this.mejoresHeroes = heroes.slice(0,3));
  }
  ngOnInit(): void {
    this.getHeroes();   
  }

}
