import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-devteams',
  templateUrl: './devteams.component.html',
  styleUrls: ['./devteams.component.css']
})
export class DevteamsComponent implements OnInit {
  teams: Team[] = [];

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

  add(name: string, guild: string): void {
    name = name.trim();
    guild = guild.trim();
    if(!name && guild) {return;}
    this.teamService.addTeam({name, guild} as Team)
      .subscribe(team => {
        this.teams.push(team)
      })
  }


}
