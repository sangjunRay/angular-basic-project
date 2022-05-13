import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Team} from "./team";

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {id: 1, name: 'jim', guild: 'CTO'},
      {id: 2, name: 'john', guild: 'back-end'},
      {id: 3, name: 'jerry', guild: 'front-end'},
      {id: 4, name: 'martin', guild: 'front-end'},
      {id: 5, name: 'woody', guild: 'back-end'},
      {id: 6, name: 'mila', guild: 'front-end'},
      {id: 7, name: 'ray', guild: 'front-end'},
      {id: 8, name: 'sunny', guild: 'front-end'},
      {id: 9, name: 'unknown1', guild: 'back-end'},
      {id: 10, name: 'unknown2', guild: 'back-end'},
    ];
    return {teams}
  }

  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(hero => hero.id)) + 1 : 1
  }
}
