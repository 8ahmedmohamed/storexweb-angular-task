import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './moveis/movies-list/movies-list.component';
import { MoviesCardComponent } from './moveis/movies-card/movies-card.component';
import { MoviesResolver } from './_resolver/Movies.resolver';
import { AuthService } from './_Service/auth.service';
import { MoviesService } from './_Service/Movies.service';
import { MoviesUpdateComponent } from './moveis/movies-update/movies-update.component';
import { MovieEditResolver } from './_resolver/MoviesUpdate.resolver';
import { MoviesCreateComponent } from './moveis/movies-create/movies-create.component';
import { AuthGuard } from './_Guards/AuthGuard';
import { AlertifyService } from './_Service/alertify.service';
import { MoviesCatogryResolver } from './_resolver/MoviesCatogry.resolver';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesListComponent,
    MoviesCardComponent,
    MoviesUpdateComponent,
    MoviesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    MoviesResolver,
    AuthService,
    MoviesService,
    MovieEditResolver,
    AuthGuard,
    AlertifyService,
    MoviesCatogryResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
