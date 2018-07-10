import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';
import {AvaliacaoPage} from "../avaliacao/avaliacao";

import * as papa from 'papaparse';

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

  dowloadAvaliação(){
    let csv = papa.unparse({
      fields: ['Tipo','Resultado'],
      data: [
        ["IMC Real:",this.navParams.get('imcReal')],
        ["IMC Atual:",this.navParams.get('imcAtual')],
        ["IMC Desejado", this.navParams.get('imcDesejado')], //null para testar
        ["IMC Ideal para mesmo sexo::",this.navParams.get('imcIdeal')],
        ["IMC Ideal para sexo oposto:",this.navParams.get('imcSexoOposto')],
        ["Grau de percepção corporal:",null],
        ["Grau de satisfação ou insatisfação corporal:",null]
      ]
    });

    //implementação para desktop;
    var blob = new Blob([csv]); //Pensar em implemetação para mobile
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "resultado.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
