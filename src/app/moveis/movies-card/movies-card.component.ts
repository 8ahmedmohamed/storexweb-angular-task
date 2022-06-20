import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/_model/movies';
import { MoviesService } from 'src/app/_Service/Movies.service';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  @Input() Movies:Movie;
  @Output() IdDeleted=new EventEmitter<number>();
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
  }

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = '../../assets/img/download1.jpg';
  }

  onClick(id:any){
    this.IdDeleted.emit(id);
  }

}
