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
  formdata:any = new FormData();
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

  onFileChange(event:any) {
    if (event.target.files && event.target.files.length) {
        const file = event.target.files[0];
           this.movieForm.patchValue({
              image: file
      });
    }
  }
  public createmove(){
    if (this.movieForm.valid) {
      this.formdata.append("name", this.movieForm.get('name')?.value);
      this.formdata.append("description", this.movieForm.get('description')?.value);
      this.formdata.append("image",this.movieForm.get('image')?.value);
      this.formdata.append("category_id", this.movieForm.get('category_id')?.value);
      // this.movie = Object.assign({}, this.movieForm.value);
      this.movieService.createmovie(this.formdata)
    }
    this.router.navigate(['/Movies']);
  }

}
