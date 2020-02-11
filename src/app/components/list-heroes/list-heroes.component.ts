import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styles: []
})
export class ListHeroesComponent implements OnInit {
  @Input() heroeList: HeroeModel[];
  @Output() edit: EventEmitter<string>;
  @Output() delete: EventEmitter<any>;

  constructor() {
    this.edit = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit() {}

  editHeroe(id: string) {
    this.edit.emit(id);
  }

  deleteHeroe(id: string, index: number) {
    this.delete.emit({
      firebaseId: id,
      arrayIndex: index
    });
  }
}
