import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {CadastroPage} from "../cadastro/cadastro";





/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {
  items;
  constructor(public navCtrl: NavController,
              public params: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
    this.initializeItems();
  }
//   openModal(characterNum) {
//
//     let modal = this.modalCtrl.create(ModalContentPage, characterNum);
//     modal.present();
//   }
// @Component({
//   template: `
//     <ion-header>
//       <ion-toolbar color="secondary">
//         <ion-title>
//           Descrição
//         </ion-title>
//         <ion-buttons start>
//           <button ion-button (click)="dismiss()">
//             <span ion-text color="primary" showWhen="ios">Cancel</span>
//             <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//           </button>
//         </ion-buttons>
//       </ion-toolbar>
//     </ion-header>
//     <ion-content>
//       <ion-list>
//         <ion-item>
//           <ion-avatar item-start>
//             <img src="{{items.image}}">
//           </ion-avatar>
//           <h2>{{items.name}}</h2>
//           <p>{{items.atividade}}</p>
//         </ion-item>
//         <ion-item *ngFor="let item of character['items']">
//           {{item.title}}
//           <ion-note item-end>
//             {{item.note}}
//           </ion-note>
//         </ion-item>
//       </ion-list>
//     </ion-content>
//   `})

  initializeItems() {
    this.items = [
      {
        nome: 'Katia',
        atividade: 'Crossfit',
        image : "assets/imgs/user.png"
      },
      {
        nome: 'Wanderlay',
        atividade: 'Crossfit',
        image : "assets/imgs/user.png"
      },
      {
        nome:'Irineu',
        atividade: 'Body building',
        image : "assets/imgs/user.png"
      },
      {
        nome: 'Fernanda',
        atividade: 'Croosfit',
        image : "assets/imgs/user.png"
      }
    ];
    // this.items = this.items[this.params.get('charNum')];
  }

  getItems(ev) {

    this.initializeItems();
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaPage');
  }
  chamadaNovaAvaliacao(){
    this.navCtrl.push('CadastroPage');
    return CadastroPage;
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

