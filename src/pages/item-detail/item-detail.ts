import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  nome;
  description;

  constructor(public navParams: NavParams){

  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('item').nome;
    this.description = this.navParams.get('item').dtnascimento;
  }

}
