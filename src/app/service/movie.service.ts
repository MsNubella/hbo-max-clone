import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: BehaviorSubject<any> = new BehaviorSubject('');
  private baseUrl = 'https://api.themoviedb.org/3';
  private api = 'a446c81fbf035bca18fe72886ddd1031';
  // /movie/popular
  //?api_key=a446c81fbf035bca18fe72886ddd1031&language=en-US&page=1

  //https://api.themoviedb.org/3/movie/popular?api_key=a446c81fbf035bca18fe72886ddd1031&language=en-US&page=1

  constructor(private http: HttpClient) {}

  // this.fetchMovies('/movie/popular')
  // this.fetchMovies('/movie/now_playing')

  public fetchMovies(endpoint: string) {
    // Get Movies
    const url = `${this.baseUrl}${endpoint}?api_key=${this.api}&language=en-US&page=1`;
    return this.http.get(url).subscribe((res) => {
      this.movies.next(res);
    });
  }
}
