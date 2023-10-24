import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {ApiResponse} from '../interfaces/app.interface';
import {Observable, of} from 'rxjs';
import { responseStandings, responseFixtures } from '../mock/standings.mock';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private apiUrl = 'https://v3.football.api-sports.io';
  private cache: boolean = true;
  private responseStandingsCache = responseStandings;
  private responseCacheFixtures = responseFixtures;
  constructor(private http: HttpClient) { }

  getStandings(league: number, season: number): Observable<ApiResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('league', league);
    queryParams = queryParams.append('season', season);
    if(this.cache) {
      return this.getStandingsCache();
    }
    return this.http.get<ApiResponse>(`${this.apiUrl}/standings`, { params: queryParams });
  }

  getTeamFixture(teamId: number): Observable<ApiResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('team', teamId);
    queryParams = queryParams.append('last', 10);
    if(this.cache) {
      return this.getFixturesCache();
    }
    return this.http.get<ApiResponse>(`${this.apiUrl}/fixtures`, { params: queryParams });

  }
  getStandingsCache() : Observable<ApiResponse> {
    return of(this.responseStandingsCache);
  }

  getFixturesCache() : Observable<any> {
    return of(this.responseCacheFixtures);
  }

}
