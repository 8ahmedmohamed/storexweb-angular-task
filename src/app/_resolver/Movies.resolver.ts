import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { Movie } from "../_model/movies";
import { MoviesService } from "../_Service/Movies.service";

@Injectable()
export class MoviesResolver implements Resolve<Movie[]|null>{
    constructor(private moviesService:MoviesService,private router:Router){}
    resolve(route:ActivatedRouteSnapshot):Observable<Movie[]|null>{
        return this.moviesService.getMovies().pipe(
            catchError(error => {
                this.router.navigate(['']);
                return of(null);
            })  
          )
    }
}