import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Team} from "./team";

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {id: 1, name: 'ray', guild: 'front-end'},
      {id: 2, name: 'sunny', guild: 'front-end'},
      {id: 3, name: 'unknown1', guild: 'back-end'},
      {id: 4, name: 'unknown2', guild: 'back-end'},
      {id: 5, name: 'unknown3', guild: 'back-end'},
    ];
    return {teams}
  }

  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(hero => hero.id)) + 1 : 1
  }
}
