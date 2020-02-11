import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-heroe-form',
  templateUrl: './new-heroe-form.component.html',
  styles: []
})
export class NewHeroeFormComponent implements OnInit {
  public newHeroe: HeroeModel;
  @Output() heroe: EventEmitter<HeroeModel>;

  constructor() {
    this.newHeroe = new HeroeModel();
    this.heroe = new EventEmitter();
  }

  ngOnInit() {}

  createHeroe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.heroe.emit(this.newHeroe);
  }
}
