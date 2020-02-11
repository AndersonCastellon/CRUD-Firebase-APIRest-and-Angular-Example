import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewHeroeRoutingModule } from './new-heroe-routing.module';

import { NewHeroeComponent } from './new-heroe.component';
import { NewHeroeFormComponent } from '../../components/new-heroe-form/new-heroe-form.component';

@NgModule({
  declarations: [NewHeroeComponent, NewHeroeFormComponent],
  imports: [CommonModule, NewHeroeRoutingModule, FormsModule]
})
export class NewHeroeModule {}
