import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesCreateComponent } from './moveis/movies-create/movies-create.component';
import { MoviesListComponent } from './moveis/movies-list/movies-list.component';
import { MoviesUpdateComponent } from './moveis/movies-update/movies-update.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_Guards/AuthGuard';
import { MoviesResolver } from './_resolver/Movies.resolver';
import { MoviesCatogryResolver } from './_resolver/MoviesCatogry.resolver';
import { MovieEditResolver } from './_resolver/MoviesUpdate.resolver';

const routes: Routes = [
  {
  path: 'Movies', canActivate: [AuthGuard], component: MoviesListComponent, resolve: {
    Movies: MoviesResolver
   }
  },
  {
    path: 'Movies/:id', canActivate: [AuthGuard], component: MoviesListComponent, resolve: {
        MovieCatogry:MoviesCatogryResolver
     }
    },
  {
    path: 'Register', component: RegisterComponent
  },  
  {
    path: 'Login', component: LoginComponent
  }, 
  {
    path: 'MoviesUpdate/:id', canActivate: [AuthGuard], component: MoviesUpdateComponent,resolve:{
      Movie:MovieEditResolver
    }
  },
  {
    path: 'MoviesCreate',canActivate: [AuthGuard], component: MoviesCreateComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 


}
