import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroesServicio }  from './heroes.servicio';
import { Heroe } from './heroe';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId: module.id,
    selector: 'heroe-detalles',
    template: `
        <div *ngIf="heroe">
        <h2>{{heroe.nombre}} detalles!</h2>
        <div><label>id: </label>{{heroe.id}}</div>
        <div>
        <label>nombre: </label>
        <input [(ngModel)]="heroe.nombre" placeholder="nombre"/>
        </div>
        </div>`,
    styles: [`
        :host > div {
            background-color: #CFD8DC !important;
            border-radius: 4px;
            padding: 5px;
        }
        h2 { text-align: center; }
    `]
})

export class HeroeDetallesComponent implements OnInit {
    @Input()
    heroe: Heroe;

    constructor (
        private heroesServicio: HeroesServicio,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroesServicio.getHeroe(+params['id']))
        .subscribe(heroe => this.heroe = heroe);
    }
}