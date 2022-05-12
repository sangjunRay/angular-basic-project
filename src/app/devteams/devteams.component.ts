import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-devteams',
  templateUrl: './devteams.component.html',
  styleUrls: ['./devteams.component.css']
})
export class DevteamsComponent implements OnInit {
  teams: Team[] | undefined

  constructor(
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.getTeams()
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams)
  }


}
