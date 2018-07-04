//Imports de componetes Ionic e Angular;
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
//Imports das paginas utilizadas;
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import {ResultadoPage} from "../resultado/resultado";
//Import do Providers utilizado no app;
import { Data } from '../../providers/data';


//Componentes da pagina;
@Component({
  selector: 'page-home', //Seletor da pagina;
  templateUrl: 'home.html' //URL do template associado a pagina;
})
export class HomePage { //Classe principal;

  public items = []; //Array de Pacientes ;

  constructor(public navCtrl: NavController, //Instanciação do controller de navegação;
              public modalCtrl: ModalController, //Instanciação do controller de Modais;
              public dataService: Data) { //Instanciação do Provider;

    this.dataService.getData().then((todos) => { // Pega todos os itens e armazena localmente;
      if(todos){
        this.items = todos; //Coloca os itens armazenados no array de Pacientes;
      }

    });

  }

  addItem(){ //Metodo que adiciona pagientes ao modal de Paciente;

    let addModal = this.modalCtrl.create(AddItemPage); //Cria a Pagina AddItem como um modal;

    addModal.onDidDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
  chamadaResultado(){
    this.navCtrl.push(ResultadoPage);
  }

}
