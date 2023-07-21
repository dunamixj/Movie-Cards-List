// Angular Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';
import { MovieCardsComponent } from './components/movie-cards/movie-cards.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [AppComponent, CardsDashboardComponent, MovieCardsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
