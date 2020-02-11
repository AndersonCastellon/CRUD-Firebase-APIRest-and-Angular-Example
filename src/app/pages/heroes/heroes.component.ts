import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  public heroeList: HeroeModel[] = [];
  public loading: boolean;
  public hasContent: boolean;

  constructor(private heroeService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.loading = true;
    this.hasContent = false;
    this.heroeService.getHeroes().subscribe((resp) => {
      this.heroeList = resp;
      this.loading = false;
      if (this.heroeList.length > 0) {
        this.hasContent = true;
      }
    });
  }

  editHeroe(id: string) {
    this.router.navigate(['heroe', id]);
  }
  deleteHeroe(params: any) {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Esto no ce puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.heroeService.deleteHeroe(params.firebaseId).subscribe(() => {
          Swal.fire({
            title: 'Héroe eliminado',
            icon: 'success'
          });
          this.heroeList.splice(params.arrayIndex, 1);
        });
      }
    });
  }
}
