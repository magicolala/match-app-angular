import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../../common/services/match.service';
import {Match} from '../../../common/interfaces/match';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
  providers: [MatchService]
})
export class MatchDetailComponent implements OnInit {
  match: Match;

  constructor(private matchService: MatchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;

    this.matchService.show(id).subscribe((res: Match) => {
      this.match = res;
    });
  }

}
