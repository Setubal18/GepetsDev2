import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';

/**
 * Generated class for the DetalhePacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-paciente',
  templateUrl: 'detalhe-paciente.html',
})
export class DetalhePacientePage {
  nome;
  genero;
  dtnascimento;
  altura;
  peso;


  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('paciente').nome;
    this.genero = this.navParams.get('paciente').genero;
    this.dtnascimento = this.navParams.get('paciente').dtnascimento;
    this.altura = this.navParams.get('paciente').altura;
    this.peso = this.navParams.get('paciente').peso;


  }

}
