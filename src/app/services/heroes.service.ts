import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url = 'https://nursy-4f665.firebaseio.com';

  constructor(private http: HttpClient) {}

  create(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe);
  }

  getHeroes(): Observable<HeroeModel[]> {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map((resp) => {
        const arrayHeroes: HeroeModel[] = [];
        // tslint:disable-next-line: forin
        for (const heroe in resp) {
          arrayHeroes.push(this.refactorHeroe(heroe, resp[heroe]));
        }
        return arrayHeroes;
      })
    );
  }

  getHeroe(id: string): Observable<HeroeModel> {
    return this.http.get(`${this.url}/heroes/${id}.json`).pipe(
      map((h) => {
        return this.refactorHeroe(id, h);
      })
    );
  }

  editHeroe(heroe: HeroeModel) {
    const h = { ...heroe };
    delete h.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, h);
  }

  deleteHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  private refactorHeroe(id, heroe) {
    heroe.id = id;
    return heroe;
  }
}
