import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieBySearchTerm(query) {
    let url = `https://www.omdbapi.com/?apikey=b9b69043&s=${query}`;
    const elements = [];
    return fetch(`https://www.omdbapi.com/?apikey=b9b69043&s=${query}`)
      .then((response) => response.json())
      .then(function (allMovies) {
        console.log(allMovies);
        allMovies.forEach(function (movie) {
          const card = {
            title: movie.Title,
            year: 2,
            type: '',
            poster: '',
          };
          elements.push(card);
        });
      });

    return fetch(`https://www.omdbapi.com/?apikey=b9b69043&s=${query}`)
      .then((success) => {
        //console.log(success.json());
        return success.json();
      })
      .then((movies) => {
        console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });

    return this.http.get(`https://www.omdbapi.com/?apikey=b9b69043&s=${query}`);
  }
}
