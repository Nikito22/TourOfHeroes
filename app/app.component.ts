import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{titulo}}</h1>
    <nav>
     <a routerLink="/tablon">Tablon</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
  `
})

export class AppComponent {
  titulo = 'Mis héroes';
}
