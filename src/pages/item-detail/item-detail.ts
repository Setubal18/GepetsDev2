import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';
import {AvaliacaoPage} from "../avaliacao/avaliacao";

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  nome;
  description;

  constructor(public navParams: NavParams,public navCtrl : NavController){

  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('item').nome;
    this.description = this.navParams.get('item').dtnascimento;
  }
  chamadaAvaliacao(){
    this.navCtrl.push(AvaliacaoPage)
  }
}
