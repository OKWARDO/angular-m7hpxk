import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({providedIn: 'root'})
export class InMemoryDataService implements InMemoryDbService{

    createDb() {
    const heroes = [
      { id: 11, name: 'Tiger Woods' },
      { id: 12, name: 'Rory McIlroy' },
      { id: 13, name: 'Dustin Johnson' },
      { id: 14, name: 'Jason Day' },
      { id: 15, name: 'John Rahm' },
      { id: 16, name: 'Robert Allenby' },
      { id: 17, name: 'Carl Pettersson' },
      { id: 18, name: 'Darren Clarke' },
      { id: 19, name: 'Martin Laird' },
      { id: 20, name: 'Lucas Glover' }
      
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}