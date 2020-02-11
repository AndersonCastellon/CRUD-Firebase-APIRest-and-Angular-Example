import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroesComponent } from './heroes.component';
import { ListHeroesComponent } from '../../components/list-heroes/list-heroes.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { NoContentComponent } from '../../shared/no-content/no-content.component';

@NgModule({
  declarations: [
    HeroesComponent,
    ListHeroesComponent,
    LoadingComponent,
    NoContentComponent
  ],
  imports: [CommonModule, HeroesRoutingModule]
})
export class HeroesModule {}
