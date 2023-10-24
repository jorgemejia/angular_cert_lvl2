import {Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {HttpApiService} from '../../services/http-api.service';
import {ActivatedRoute} from '@angular/router';
import { ApiResponse, ResponseData } from '../../interfaces/app.interface';
import {catchError, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy{

  private teamId: number = 0;
  public fixtureResult: ResponseData[] = [];
  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private httpApiService: HttpApiService,
    private location: Location) {
  }

  ngOnInit(){
    const queryParam = this.route.snapshot.paramMap.get('teamId') ? this.route.snapshot.paramMap.get('teamId') : 0;
    this.teamId = Number(queryParam);
    if(this.teamId > 0) {
      this.getResults();
    }
  }

  getResults() {
    try {
      this.httpApiService.getTeamFixture(this.teamId).pipe(
        takeUntil(this.destroy$))
        .subscribe((data: ApiResponse) => {
          if(data.errors?.bug || data.message || !data.response![0]  ){
            alert('Something went wrong');
          } else {
            this.fixtureResult = data.response!;
          }
        });
    } catch (e) {
      alert('Something went wrong');
    }
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
