import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CrimeFighterQueryStorage } from './CrimeFighterQueryStorage';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InMemoryCrimeFightersStorage } from './InMemoryCrimeFightersStorage';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [
		{
			provide: 'CrimeFighterQueryStorage', useClass: InMemoryCrimeFightersStorage
		}
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}
