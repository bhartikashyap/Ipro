import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() countries:any [];
  selectedCountry: any;
  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  selectCountry(event) {
    console.log(event.detail.value);
    for (const item of this.countries) {
      if (item.countryId == event.detail.value) {
        console.log(item);
        this.modalController.dismiss({
          dismissed: false,
          item,
        });
      }
    }
  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
