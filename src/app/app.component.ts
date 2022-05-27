import { Component } from '@angular/core';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hbo-max-official';

  constructor(private movieService: MovieService) {
    this.movieService.fetchMovies();
  }
}
