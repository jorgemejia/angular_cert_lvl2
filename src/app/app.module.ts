import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StandingsComponent } from './components/standings/standings.component';
import { ResultsComponent } from './components/results/results.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpApiInterceptor } from './interceptors/http-api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandingsComponent,
    ResultsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
