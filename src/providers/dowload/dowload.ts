import { Injectable } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import * as papa from "papaparse";

/*
  Generated class for the DowloadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DowloadProvider {

  constructor(public http: Http,
              public navParams:NavParams) {
      // this.downloadCSV();
      }
  // downloadCSV() {
  //   let csv = papa.unparse({
  //     fields: ['Tipo','Resultado'],
  //     data: [
  //       ["IMC Real:",this.navParams.get('imcReal')],
  //       ["IMC Atual:",this.navParams.get('imcAtual')],
  //       ["IMC Desejado", this.navParams.get('imcDesejado')], //null para testar
  //       ["IMC Ideal para mesmo sexo::",this.navParams.get('imcIdeal')],
  //       ["IMC Ideal para sexo oposto:",this.navParams.get('imcSexoOposto')],
  //       ["Grau de percepção corporal:",null],
  //       ["Grau de satisfação ou insatisfação corporal:",null]
  //     ]
  //   });
  //
  //   //implementação para desktop;
  //   var blob = new Blob([csv]); //Pensar em implemetação para mobile
  //   var a = window.document.createElement("a");
  //   a.href = window.URL.createObjectURL(blob);
  //   a.download = "resultado.csv";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }

}
