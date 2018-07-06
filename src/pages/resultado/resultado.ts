import { Component } from '@angular/core';
import {  NavController, NavParams, ActionSheetController } from 'ionic-angular';
import * as papa from 'papaparse';

import { Data } from "../../providers/data";
import {MainPage} from "../main/main";

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  item:any;
  paciente = this.navParams.get('paciente').avaliacao;

  csvData = [
    {
      title: "IMC Real:",
      valor: this.navParams.get('imcReal')
    },
    {
      title: "IMC Atual:",
      valor: this.navParams.get('imcAtual')
    },
    {
      title: "IMC Desejado",
      valor: 3
    },
    {
      title: "IMC Ideal para mesmo sexo:",
      valor: 4
    },
    {
      title: "IMC Ideal para sexo oposto:",
      valor: 5
    },
    {
      title: "Grau de percepção corporal:",
      valor: 6
    },
    {
      title: "Grau de satisfação ou insatisfação corporal:",
      valor: 7
    }
  ];
  headerRow:any[] = [
    {
      title:'Tipo:'
    },
    {
      title:'Resultado:'
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public data : Data,
              private action : ActionSheetController) {

              this.data.getItem().then((item)=>{
                if(item){
                  this.item = item;
                }
    });
  }


  downloadCSV() {
    let csv = papa.unparse({
      fields: ['Tipo','Resultado'],
      data: [
        ["IMC Real:",this.navParams.get('imcReal')],
        ["IMC Atual:",this.navParams.get('imcAtual')],
        ["IMC Desejado", null], //null para testar
        ["IMC Ideal para mesmo sexo::",null],
        ["IMC Ideal para sexo oposto:",null],
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
  actions() {
    const actionSheet = this.action.create({
      buttons: [
        {
          text: 'Download',

          handler: () => {
              this.downloadCSV();
          }
        },
        {
          text: 'Retornar a o menu Principal',
          handler: () => {
            this.navCtrl.push(MainPage);
            this.data.save(this.paciente.push(this.csvData));
            console.log('salvo')
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
