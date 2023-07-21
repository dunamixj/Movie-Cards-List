import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Card } from './../../models/element.model';
@Injectable()
export class MoviesService {
  private cardsSubject = new BehaviorSubject<Card[]>([]);
  constructor(private http: HttpClient) {}
  cards: Card[];

  getData(query): Observable<Card[]> {
    this.cardsSubject.next(this.getMovieBySearchTerm(query));

    return this.cardsSubject.asObservable();
  }

  getMovieBySearchTerm(query) {
    let url = `https://www.omdbapi.com/?apikey=b9b69043&s=${query}`;
    const elements = [];
    fetch(url)
      .then((response) => response.json())
      .then(function (allMovies) {
        //console.log(allMovies.Search);
        allMovies.Search.forEach(function (movie) {
          let card = {
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster,
            Type: movie.Type,
          };
          console.log(JSON.stringify(card));
          elements.push(card);
        });
      });

    return elements;
  }
}
