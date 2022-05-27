import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  public fetchMovies() {
    // Get Movies
    this.http.get('/api/movies').subscribe((res) => {
      this.movies.next(res);
    });
  }
}
