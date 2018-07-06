//Imports de Componentes Angular e Ionic;
import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';//Controller de Navegação;
// import {FormBuilder,FormGroup,Validators} from "@angular/forms";

//Import de Pages;
import {HomePage} from "../home/home";
import {SobrePage} from "../sobre/sobre";


//Componetes da pagina;
@Component({
  selector: 'page-main', //Seletor da pagina;
  templateUrl: 'main.html', //URL do template associdado a pagina;
})
export class MainPage { //Classe Principal;

  // validacao:FormGroup;
  // input: string;

  constructor(public navCtrl: NavController ){} //Instanciando o controller de navegação;

//Metodo que ira puxar a pagina de Consulta da Pacientes;
  pushConsulta(){
    this.navCtrl.push(HomePage);
  }


//Metodo que ira puxar a pagina de About Us ;
  pushAboutUs(){
    this.navCtrl.push(SobrePage);
  }
  // doLogin() {
  //   let alert = this.alert.create({
  //     title: 'Login',
  //     message: 'Enter a name for this new album you\'re so keen on adding',
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'Title'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Verificar',
  //         handler: (data) => {
  //           let validador = new Validators();
  //           let formBuilder = new FormBuilder();
  //
  //
  //           this.validacao = formBuilder.group({
  //             input:['',Validators.required]
  //             }
  //           );
  //           let input = this.validacao.controls;
  //             if (input.valid) {
  //               console.log('entroi');
  //               this.navCtrl.push(HomePage);
  //             }
  //             else {
  //               this.doLogin();
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   });
  //
  //   alert.present();
  // }


}
