import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeRoutingModule } from './heroe-routing.module';
import { FormsModule } from '@angular/forms';

import { HeroeComponent } from './heroe.component';
import { CardHeroeComponent } from '../../components/card-heroe/card-heroe.component';

@NgModule({
  declarations: [HeroeComponent, CardHeroeComponent],
  imports: [CommonModule, HeroeRoutingModule, FormsModule]
})
export class HeroeModule {}
