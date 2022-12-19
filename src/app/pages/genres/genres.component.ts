import { MoviesService } from './../../services/movies.service';
import { Genre } from './../../models/genre';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = []
  constructor(private MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.MoviesService.getMovieGenres().subscribe(genresData => {

      this.genres = genresData
    })
  }

}
