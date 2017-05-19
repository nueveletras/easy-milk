import { Component, OnInit } from '@angular/core';
import { Potrero } from "app/potreros/shared/potrero.model";
import { PotreroService } from "app/potreros/shared/potrero.service";

@Component({
  selector: 'app-potreros-list',
  templateUrl: './potreros-list.component.html',
  styleUrls: ['./potreros-list.component.css']
})
export class PotrerosListComponent implements OnInit {

  potrero: Potrero;
  potrerosList: Potrero[];
  isEdit: boolean;
  errorMessage: any;

  constructor(private potreroService: PotreroService) { }

  ngOnInit() {
    this.isEdit = false;
    this.potrero = new Potrero();
    this.getAllPotreros();
  }

  save() {
    
    if (this.potreroService.getPotreroById(this.potrero.id)) {
      this.potreroService.updatePotreroById(this.potrero.id, this.potrero);
    } else {
      this.potreroService.addPotrero(this.potrero)
        .subscribe(
        message => console.log(message),
        error => this.errorMessage = <any>error
        );
    }
    this.isEdit = false;
    this.potrero = new Potrero();
    this.getAllPotreros();
  }

  remove(potrero: Potrero) {
    this.potreroService.deletePotreroById(potrero.id);
    this.getAllPotreros();
  }

  onSelect(potrero: Potrero) {
    this.isEdit = true;
    this.potrero = potrero;
  }

  onIdChange() {
    const potrero = this.potreroService.getPotreroById(this.potrero.id);
    if (potrero) {
      this.isEdit = true;
      this.potrero = potrero;
    }
  }

  getAllPotreros() {
    return this.potreroService.getAllPotreros()
      .subscribe(
      potreros => this.potrerosList = potreros,
      error => this.errorMessage = <any>error
      )
  }


}
