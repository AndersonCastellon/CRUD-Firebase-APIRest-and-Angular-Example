import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewHeroeComponent } from './new-heroe.component';

const routes: Routes = [{ path: '', component: NewHeroeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewHeroeRoutingModule {}
