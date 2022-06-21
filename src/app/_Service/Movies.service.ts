
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_model/user';
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Movie } from '../_model/movies';
import { AlertifyService } from './alertify.service';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  baseUrl = environment.ApiUrl;
  token: any;
  constructor(private http: HttpClient, private aletfiy: AlertifyService) {
  }

  // Get all Movies
  getMovies(): Observable<Movie[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Movie[]>(`${this.baseUrl}api/movies`, { headers: headers });
  }


  //Get Move By gatogry
  getMviesBygategores(idCatogry: number): Observable<Movie[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Movie[]>(`${this.baseUrl}api/moviesByCategory/${idCatogry}`, { headers: headers });
  }


  // Delete Movies
  DeleteMovies(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    console.log(`${this.baseUrl}api/movies/${id}`)
    return this.http.delete(`${this.baseUrl}api/movies/${id}`, { headers: headers }).pipe(
      catchError(error => {
        return of(null);
      })
    ).subscribe(
      next => { this.aletfiy.success("Deleted Success") },
      error => { this.aletfiy.error("Deleted Error") }
    )
  }


  // Get one Movie
  GetOneMovies(id: any): Observable<Movie> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Movie>(`${this.baseUrl}api/movies/${id}`, { headers: headers });

  }

  //Update movie
  updateMovie(id: number, movie: Movie) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Movie>(`${this.baseUrl}api/movies/${id}`, movie, { headers: headers }).subscribe(
      next => { this.aletfiy.success("Movie Updated") },
      error => { this.aletfiy.error("Movie Error") }
    )
  }


  //create new Move
  createmovie(movie:FormData){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${this.baseUrl}api/movies`,movie,{headers:headers}).subscribe(
      ()=>{this.aletfiy.success("Movie Created Success")},
      error=>{this.aletfiy.error("Movie Created Faild")} 
    )
   }

}
