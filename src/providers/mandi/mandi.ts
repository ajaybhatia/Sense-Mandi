import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { config } from './configuration';
import 'rxjs/add/operator/map';

/*
  Generated class for the MandiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MandiProvider {
  url: string;

  constructor(public http: Http) {
    this.url = `http://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=${config.key}`;
  }

  getAllMandisInfo() {
    return this.http.get(this.url).map(mandi => mandi.json());
  }
}
