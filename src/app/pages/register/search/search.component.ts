import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() countries: any[];
  tempCountries: any = [];
  selectedCountry: any;
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.tempCountries = JSON.parse(JSON.stringify(this.countries));
  }

  searchCountry(event: any) {
    let val = event.target.value;
    if (val) {
      var search = new RegExp(val, "i");
      this.countries = this.tempCountries.filter((item) =>
        search.test(item.countryName)
      );
    } else {
      this.countries = JSON.parse(JSON.stringify(this.tempCountries));
    }
  }

  selectCountry(event) {
    for (const item of this.countries) {
      if (item.countryId == event.detail.value) {
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
