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
  csvData: any[] = [
    {
      title: "IMC Real:",
      valor: 1
    },
    {
      title: "IMC Atual:",
      valor: 2
    },
    {
      title: "IMC Desejado",
      valor: 3
    },
    {
      title: "IMC Ideal para mesmo sexo::",
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

  }

  downloadCSV() {
    let csv = papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });

    // Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]); //Pensar em implemetação para mobile
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "resultado.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }



  trackByFn(index: any, item: any) {
    return index;
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
          text: 'Retornar a o menu Princapal',
          handler: () => {
            this.navCtrl.push(MainPage);
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
