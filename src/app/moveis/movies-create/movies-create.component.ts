import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/_model/movies';
import { MoviesService } from 'src/app/_Service/Movies.service';

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {
  movieForm: FormGroup;
  movie: Movie;
  constructor(private fb: FormBuilder,public movieService:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.createmovieForm();
  }

  createmovieForm() {
    this.movieForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
      category_id: ["", Validators.required],
    });
  }

  createmove(){
    if (this.movieForm.valid) {
      this.movie = Object.assign({}, this.movieForm.value);
      console.log(this.movie);
      this.movieService.createmovie(this.movie)
    }
  }

}
