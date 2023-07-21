import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoviesService } from '../../core/services/movies.service';
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css'],
})
export class MovieCardsComponent implements OnInit {
  searchControl: FormControl;
  movies$: Observable<any>;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.searchControl = new FormControl();

    this.movies$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchString) =>
        this.movieService.getMovieBySearchTerm(searchString)
      ),
      map((res: any) => res.Search)
    );
  }
}
