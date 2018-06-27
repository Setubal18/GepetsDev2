import {Component} from '@angular/core';
import {ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {DetalhePacientePage} from "../detalhe-paciente/detalhe-paciente";


/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {
  public items = [];
  constructor(public navCtrl: NavController,
              public params: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController
  ) {

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ConsultaPage');
  // }

  addPaciente() {
    let addPaciente = this.modalCtrl.create(Paciente);
    addPaciente.onDidDismiss((paciente) => {

      if (paciente) {
        this.savePaciente(paciente);
      }

    });

    addPaciente.present();

  }

  savePaciente(paciente) {
    this.items.push(paciente) // a lista itens q contem os pacientes cadastrasdos esta puxando o paciente recem cadastrado
  }

  viewPacinete(paciente) {
    this.navCtrl.push(DetalhePacientePage, {
      paciente: paciente
    });
  }
}

@Component({
    selector: 'page-detalhe-paciente',
    templateUrl: 'detalhe-paciente.html',
  }
)

class Paciente {

  constructor(params: NavParams) {
    console.log('Paciente', params.get('nome'));
  }

}

