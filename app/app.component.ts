import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: './app.component.html'
})

export class AppComponent {
  titulo = 'Mis héroes';
  private opciones: MenuItem[];

  ngOnInit() {
    this.opciones = [
      {label: 'Tablón', icon: 'fa-book'},
      {label: 'Heroes', icon: 'fa-support'},
    ];
  }
}