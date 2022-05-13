import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import {Team} from "../team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-devteam-search',
  templateUrl: './devteam-search.component.html',
  styleUrls: ['./devteam-search.component.css']
})
export class DevteamSearchComponent implements OnInit {
  teams$!: Observable<Team[]>;
  private searchTerms = new Subject<string>();
  constructor(private teamService: TeamService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.teams$ = this.searchTerms.pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((term: string) => this.teamService.searchTeam(term))
      )
  }

}
