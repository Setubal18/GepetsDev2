import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';
import {AvaliacaoPage} from "../avaliacao/avaliacao";

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  altura;
  nome;
  dtnascimento;
  genero;
  peso;
  avaliacao;

  constructor(public navParams: NavParams,public navCtrl : NavController){

  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('item').nome;
    this.dtnascimento = this.navParams.get('item').dtnascimento;
    this.genero = this.navParams.get('item').genero;
    this.peso = this.navParams.get('item').peso;
    this.altura= this.navParams.get('item').altura;
    this.avaliacao = this.navParams.get('item').avaliacoes;
    // this.qtdAvaliacoes = this.avaliacao.length;

    console.log(this.avaliacao);
  }
  chamadaAvaliacao(){
    this.navCtrl.push(AvaliacaoPage,{paciente : this.navParams.get('item')});
  }
}
