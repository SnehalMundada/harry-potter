import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/movies.module').then(m => m.MoviesModule)
  }
];
