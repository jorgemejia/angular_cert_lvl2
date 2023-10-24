import {Component, OnInit, SimpleChanges, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from '../../services/http-api.service';
import {ApiResponse, Standings} from '../../interfaces/app.interface';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  readonly leagues = [
    { id: 39, country: 'England' },
    { id: 140, country: 'Spain' },
    { id: 61, country: 'France' },
    { id: 78, country: 'Germany' },
    { id: 135, country: 'Italy' },
  ];
  public standings: Standings[] = [];
  destroy$ = new Subject<void>();
  constructor(private route: ActivatedRoute, private httpService: HttpApiService) { }

  ngOnInit() {
    this.route.params.pipe(
      takeUntil(this.destroy$)).subscribe(params => {
        const queryParam = Number(params['countryId']);
        if(queryParam){
          this.getLeagueStandings(queryParam);
        }
      });

  }

  getLeagueStandings(leagueId: number) {
    try {
      this.httpService.getStandings(leagueId, new Date().getFullYear()).pipe(
        takeUntil(this.destroy$))
        .subscribe((data: ApiResponse) => {
          if(data.errors?.bug || data.message || !data.response![0]  ){
            alert('Something went wrong');
          } else {
            this.standings = data.response![0].league!.standings![0];
          }
        });
    } catch (e) {
      alert('Something went wrong');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
