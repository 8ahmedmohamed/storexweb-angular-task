import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/_model/movies';
import { MoviesService } from 'src/app/_Service/Movies.service';

@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html',
  styleUrls: ['./movies-update.component.css']
})
export class MoviesUpdateComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm
  movies:Movie
  constructor(private router:ActivatedRoute,private MovieService:MoviesService) { }

  ngOnInit(): void {
    this.router.data.subscribe(
      data=>{this.movies=data["Movie"].message}
    );
    console.log(this.movies);
  }
  updateMovie(id:number){
    this.movies.updated_at=new Date();
    this.MovieService.updateMovie(id,this.movies)
  }

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = '../../assets/img/download1.jpg';
  }

}
