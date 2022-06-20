import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/_model/movies';
import { MoviesService } from 'src/app/_Service/Movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies:Movie[];
  constructor(private router:ActivatedRoute,private movieservice:MoviesService) { }

  ngOnInit(): void {
    if(this.router.snapshot.params['id']){
      this.router.data.subscribe(
        data=>{this.movies=data["MovieCatogry"].message}
      );
    }else
    {
      this.router.data.subscribe(
        data=>{this.movies=data["Movies"].message}
      );
    }
  }

  addItem(newItem: number) {

    this.movieservice.DeleteMovies(newItem);
    if(newItem!=null){
      this.movies = this.movies.filter(obj => obj.id != newItem);
    }
  }
}
