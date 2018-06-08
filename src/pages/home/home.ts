import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadastroPage } from "../cadastro/cadastro";
import {ConsultaPage} from "../consulta/consulta";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //consultaOk = false;

  constructor(public navCtrl: NavController) {  }

  chamadaNovaAvaliacao(){
    this.navCtrl.push('CadastroPage');
    return CadastroPage;
  }
  chamadaConsulta(){
   this.navCtrl.push('ConsultaPage');
    return ConsultaPage;
  }
}
