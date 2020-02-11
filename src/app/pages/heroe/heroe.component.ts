import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';

import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  public id: string;
  public heroe: HeroeModel;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {
    this.heroe = new HeroeModel();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getHeroe();
  }

  getHeroe() {
    this.heroeService.getHeroe(this.id).subscribe((resp) => {
      this.heroe = resp;
    });
  }

  editHeroe(heroe: HeroeModel) {
    this.heroeService.editHeroe(heroe).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Héroe editado correctamente',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['heroes']);
      });
    });
  }
}
