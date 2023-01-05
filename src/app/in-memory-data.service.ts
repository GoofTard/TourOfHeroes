import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Michael Reeves' },
      { id: 2, name: 'Mark Rover' },
      { id: 3, name: 'Motto Motto' },
      { id: 4, name: 'Skiper' },
      { id: 5, name: 'Private' },
      { id: 6, name: 'Rico' },
      { id: 7, name: 'Kovalski' },
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
