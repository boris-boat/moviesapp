import { MovieCredits } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = "https://api.themoviedb.org/3/"
  apiKey: string = "8c247ea0b4b56ed2ff7d41c9a833aa77"
  constructor(private http: HttpClient) { }

  getMovies(type: string = "upcoming", count: number = 12) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}movie/${type}?api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results.slice(0, count))
    }));
  }
  searchMovies(page: number = 1, searchValue?: string) {
    const uri = searchValue ? "search/movie" : "movie/popular"
    return this.http.get<MovieDto>(
      `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results)
    }));
  }
  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`
    );
  }
  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}movie/${id}?api_key=${this.apiKey}`
    );
  }
  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`
    );
  }
  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results)
    }));
  }
  getMovieGenres() {
    return this.http.get<GenresDto>(
      `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.genres)
    }));
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results)
    }));
  }
}

