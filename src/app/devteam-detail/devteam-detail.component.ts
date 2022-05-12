import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../team.service";
import {Location} from '@angular/common'

@Component({
  selector: 'app-devteam-detail',
  templateUrl: './devteam-detail.component.html',
  styleUrls: ['./devteam-detail.component.css']
})
export class DevteamDetailComponent implements OnInit {
  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.team) {
      this.teamService.updateTeam(this.team).subscribe(() => this.goBack())
    }
  }

}
