import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styles: []
})
export class CardHeroeComponent implements OnInit {
  @Input() heroe: HeroeModel;
  @Output() dirtyHeroe: EventEmitter<HeroeModel>;
  constructor() {
    this.dirtyHeroe = new EventEmitter();
  }

  ngOnInit() {}

  editHeroe(form: NgForm) {
    this.dirtyHeroe.emit(this.heroe);
  }
}
