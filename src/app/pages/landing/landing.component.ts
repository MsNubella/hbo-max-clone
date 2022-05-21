import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public movies: any[] = [];
  public baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this.movieService.movies.subscribe((data) => {
      this.movies = data.results;
      console.log('Movies', this.movies);
    });
  }

  public getImages(imgPath: string) {
    // https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg
    return `${this.baseImgUrl}${imgPath}`;
  }
}
