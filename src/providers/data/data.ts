import { Storage } from "@ionic/storage";
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public store : Storage) {

  }
  getData() {
    return this.store.get('todos');
  }

  save(data){
    this.store.set('todos', data);
  }

}

