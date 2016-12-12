import { Component, Input } from '@angular/core';
import { Heroe } from './heroe';

@Component({
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

export class HeroeDetallesComponent {
    @Input()
    heroe: Heroe;
}