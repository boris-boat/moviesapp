import { IMAGE_SIZES } from './../../constants/images-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null
  movieVideos: MovieVideo[] = []
  movieImages: MovieImages | null = null
  movieCredits: MovieCredits | null = null
  imageSizes = IMAGE_SIZES
  constructor(private route: ActivatedRoute, private MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id)
      this.getMovieVideos(id)
      this.getMovieImages(id)
      this.getMovieCredits(id)
    })
  }
  ngOnDestroy(): void {
    console.log("component destroyed")
  }
  getMovie(id: string) {
    this.MoviesService.getMovie(id).subscribe(movieData => {
      this.movie = movieData
    })
  }
  getMovieVideos(id: string) {
    this.MoviesService.getMovieVideos(id).subscribe(movieVideosData => {
      this.movieVideos = movieVideosData
    })
  }
  getMovieImages(id: string) {
    this.MoviesService.getMovieImages(id).subscribe((movieImagesData) => {
      console.log(movieImagesData)
      this.movieImages = movieImagesData
    })
  }
  getMovieCredits(id: string) {
    this.MoviesService.getMovieCredits(id).subscribe(movieCreditsData => {
      this.movieCredits = movieCreditsData
    })
  }
}