import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ResultsComponent} from "./components/results/results.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'standings/:countryId', component: HomeComponent },
  { path: 'results/:teamId', component: ResultsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
