//Imports de Componentes Angular e Ionic;
import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';//Controller de Navegação;
//Import de Pages;
import {HomePage} from "../home/home";
import {SobrePage} from "../sobre/sobre";

//Componetes da pagina;
@Component({
  selector: 'page-main', //Seletor da pagina;
  templateUrl: 'main.html', //URL do template associdado a pagina;
})
export class MainPage { //Classe Principal;

  constructor(public navCtrl: NavController){} //Instanciando o controller de navegação;

//Metodo que ira puxar a pagina de Consulta da Pacientes;
  pushConsulta(){
    this.navCtrl.push(HomePage);
  }


//Metodo que ira puxar a pagina de About Us ;
  pushAboutUs(){
    this.navCtrl.push(SobrePage);
  }

}
