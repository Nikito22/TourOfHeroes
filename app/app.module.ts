import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroesServicio } from './heroes.servicio';
import { HeroeDetallesComponent } from './heroe-detalles.component';
import { TablonComponent } from './tablon.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/tablon', pathMatch: 'full' },
      { path: 'heroes', component: HeroesComponent },
      { path: 'heroe/:id', component: HeroeDetallesComponent },
      { path: 'tablon', component: TablonComponent }
    ])
  ],
  declarations: [AppComponent, HeroesComponent, HeroeDetallesComponent, TablonComponent],
  providers: [HeroesServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
