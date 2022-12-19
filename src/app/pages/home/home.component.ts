import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies("popular").subscribe((movie) => {
      this.popularMovies = movie;
    });
    this.moviesService.getMovies("upcoming").subscribe((movie) => {
      this.upcomingMovies = movie;
    });
    this.moviesService.getMovies("top_rated").subscribe((movie) => {
      this.topRatedMovies = movie;
    });
  }
}
