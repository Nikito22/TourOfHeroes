import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';
import { HeroesServicio } from './heroes.servicio';

@Component({
  moduleId: module.id,
  selector: 'tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.css']
})

export class TablonComponent implements OnInit {

  mejoresHeroes: Heroe[];

  constructor(private heroesServicio: HeroesServicio) { }

  getHeroes(): void {
    this.heroesServicio.getHeroes().then(heroes => this.mejoresHeroes = heroes.slice(0, 3));
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
