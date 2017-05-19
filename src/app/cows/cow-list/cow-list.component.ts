import { Component, OnInit } from '@angular/core';
import { Cow } from "app/cows/shared/cow.model";
import { CowService } from "app/cows/shared/cow.service";
import { GroupCowService } from "app/groups-cows/shared/group-cow.service";
import { GroupCow } from "app/groups-cows/shared/group-cow.model";

@Component({
  selector: 'app-cow-list',
  templateUrl: './cow-list.component.html',
  styleUrls: ['./cow-list.component.css']
})
export class CowListComponent implements OnInit {
  
  cow: Cow;
  cowsList: Cow[];
  groupCowsList: GroupCow[];
  isEdit: boolean;
  errorMessage: any;

  constructor(private cowService: CowService,
    private groupCowService: GroupCowService) { }

  ngOnInit() {
    this.isEdit = false;
    this.cow = new Cow();
    this.getAllCows();
    this.getAllGroupCows();
  }

  save() {
    if(this.cow.birthDate) {
      this.cow.birthDate = new Date(this.cow.birthDate);
    }
    if(this.cow.buyDate) {
      this.cow.buyDate = new Date(this.cow.buyDate);
    }
    if (this.cowService.getCowById(this.cow.id)) {
      this.cowService.updateCowById(this.cow.id, this.cow);
    } else {
      this.cowService.addCow(this.cow)
        .subscribe(
        message => console.log(message),
        error => this.errorMessage = <any>error
        );
    }
    this.isEdit = false;
    this.cow = new Cow();
    this.getAllCows();
  }

  remove(cow: Cow) {
    this.cowService.deleteCowById(cow.id);
    this.getAllCows();
  }

  onSelect(cow: Cow) {
    this.isEdit = true;
    this.cow = cow;
  }

  onIdChange() {
    const cow = this.cowService.getCowById(this.cow.id);
    if (cow) {
      this.isEdit = true;
      this.cow = cow;
    }
  }

  getAllCows() {
    return this.cowService.getAllCows()
      .subscribe(
      cows => this.cowsList = cows,
      error => this.errorMessage = <any>error
      )
  }

  getAllGroupCows() {
    return this.groupCowService.getAllGroupsCows()
      .subscribe(
      groupsCows => this.groupCowsList = groupsCows,
      error => this.errorMessage = <any>error
      )
  }
}
