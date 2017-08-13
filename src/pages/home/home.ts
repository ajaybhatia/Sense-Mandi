import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MandiProvider } from '../../providers/mandi/mandi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  records: any[];

  constructor(public navCtrl: NavController, private mandi: MandiProvider) {
    this.mandi.getAllMandisInfo().subscribe(mandi => {
      this.records = mandi.records;
    });
  }

}
