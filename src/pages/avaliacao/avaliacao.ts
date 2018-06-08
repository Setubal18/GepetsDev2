import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {replaceTemplateUrl} from "@ionic/app-scripts/dist/template";

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {
  sexo :any;
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams
  ) {
    this.sexo = this.navParams.get('genero');
  }
  slides = [];

if(sexo == 'f') {
  this.slides = [
    {
      title: "Imagem 1",
      description: "",
      image: "assets/imgs/Adult_Mulher1.png",
      imc: 1
    },
    {
      title: "Imagem 2",
      description: "",
      image: "assets/imgs/Adult_Mulher2.png",
      imc: 2
    },
    {
      title: "Imagem 3",
      description: "",
      image: "assets/imgs/Adult_Mulher3.png",
      imc: 3
    },
    {
      title: "Imagem 4",
      description: "",
      image: "assets/imgs/Adult_Mulher4.png",
      imc: 4
    },
    {
      title: "Imagem 5",
      description: "",
      image: "assets/imgs/Adult_Mulher5.png",
      imc: 5
    },
    {
      title: "Imagem 6",
      description: "",
      image: "assets/imgs/Adult_Mulher6.png",
      imc: 6
    },
    {
      title: "Imagem 7",
      description: "",
      image: "assets/imgs/Adult_Mulher7.png",
      imc: 7
    }, {
      title: "Imagem 8",
      description: "",
      image: "assets/imgs/Adult_Mulher8.png",
      imc: 8
    },
    {
      title: "Imagem 9",
      description: "",
      image: "assets/imgs/Adult_Mulher9.png",
      imc: 9
    },
    {
      title: "Imagem 10",
      description: "",
      image: "assets/imgs/Adult_Mulher10.png",
      imc: 10
    },
    {
      title: "Imagem 11",
      description: "",
      image: "assets/imgs/Adult_Mulher11.png",
      imc: 11
    },
    {
      title: "Imagem 12",
      description: "",
      image: "assets/imgs/Adult_Mulher12.png",
      imc: 12
    },
    {
      title: "Imagem 13",
      description: "",
      image: "assets/imgs/Adult_Mulher13.png",
      imc: 13
    },
    {
      title: "Imagem 14",
      description: "",
      image: "assets/imgs/Adult_Mulher14.png",
      imc: 14
    },
    {
      title: "Imagem 15",
      description: "",
      image: "assets/imgs/Adult_Mulher15.png",
      imc: 15
    },

  ];
}
else{
  return null;
}


}
