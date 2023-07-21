import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MoviesService } from '../../core/services/movies.service';
import { Card } from '../../models/element.model';
import { KeyValue } from '../../models/key-value.model';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.scss'],
})
export class CardsDashboardComponent {
  cards: Card[];
  movies: Observable<any[]>;
  searchControl: FormControl;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.searchControl = new FormControl();
    this.movies = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchString) =>
        this.moviesService.getMovieBySearchTerm(searchString)
      ),
      map((res: any) => res.Search)
    );
  }
}
