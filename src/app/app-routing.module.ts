import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/heroes/heroes.module').then((m) => m.HeroesModule)
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./pages/new-heroe/new-heroe.module').then(
            (m) => m.NewHeroeModule
          )
      }
    ]
  },
  {
    path: 'heroe/:id',
    loadChildren: () =>
      import('./pages/heroe/heroe.module').then((m) => m.HeroeModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
