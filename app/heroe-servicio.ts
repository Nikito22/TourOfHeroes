import { Injectable } from '@angular/core';

import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroeServicio {
    getHeroes(): Promise<Heroe[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Heroe[]> {
        return new Promise<Heroe[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
}
