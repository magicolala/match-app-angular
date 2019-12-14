import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../../common/services/match.service';
import {Match} from '../../../common/interfaces/match';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  providers: [MatchService]
})
export class MatchListComponent implements OnInit {
  matches;
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.list().subscribe((res) => {
      this.matches = res.matches.reverse();
      this.matches.forEach((match) => {
        console.log(match);
      });
    });
  }

}
