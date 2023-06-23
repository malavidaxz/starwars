import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './dashboard/people/people.component';
import { FilmsComponent } from './dashboard/films/films.component';
import { PlanetsComponent } from './dashboard/planets/planets.component';
import { SpeciesComponent } from './dashboard/species/species.component';
import { StarshipsComponent } from './dashboard/starships/starships.component';
import { VehiclesComponent } from './dashboard/vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PeopleComponent,
    FilmsComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
