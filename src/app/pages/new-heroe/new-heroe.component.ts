import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-heroe',
  templateUrl: './new-heroe.component.html',
  styles: []
})
export class NewHeroeComponent implements OnInit {
  constructor(private heroeService: HeroesService, private router: Router) {}

  ngOnInit() {}

  createHeroe(heroe: HeroeModel) {
    this.heroeService.create(heroe).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Héroe creado correctamente',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['heroes']);
      });
    });
  }
}
