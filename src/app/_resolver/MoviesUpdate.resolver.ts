import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Movie } from "../_model/movies";
import { MoviesService } from "../_Service/Movies.service";

@Injectable()
export class MovieEditResolver implements Resolve<Movie|null>{
    constructor(private moviesservice:MoviesService,private router:Router){}
    resolve(route:ActivatedRouteSnapshot):Observable<Movie|null>{
        return this.moviesservice.GetOneMovies(route.params['id']).pipe(
          catchError(error => {
              return of(null);
          })  
        )
    }
}