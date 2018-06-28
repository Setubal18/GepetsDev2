import { Component,ViewChild } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {
  selecionado = [];//Array que recebera os objetos selecionados
  pergunta = [];
  //genero = this.navParams.get('paciente').genero;//recebera o genero de quem esta sendo avaliado
  //idade = this.navParams.get('paciente').idade;//recebera a idade de quem esta sendo avaliado

  @ViewChild('slider') slider: any;
  slides = [
    {
      title: "Imagem 1",
      description: "",
      id: 1,
      imc:"",
      image: "assets/imgs/Adult_Mulher1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:"",
      image: "assets/imgs/Adult_Mulher2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:"",
      image: "assets/imgs/Adult_Mulher3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:"",
      image: "assets/imgs/Adult_Mulher4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:"",
      image: "assets/imgs/Adult_Mulher5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:"",
      image: "assets/imgs/Adult_Mulher6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:"",
      image: "assets/imgs/Adult_Mulher7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:"",
      image: "assets/imgs/Adult_Mulher8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:"",
      image: "assets/imgs/Adult_Mulher9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:"",
      image: "assets/imgs/Adult_Mulher10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:"",
      image: "assets/imgs/Adult_Mulher11.png",
    },
    {
      title: "Imagem 12",
      description: "",
      id:12,
      imc:"",
      image: "assets/imgs/Adult_Mulher12.png",
    },
    {
      title: "Imagem 13",
      description: "",
      id:13,
      imc:"",
      image: "assets/imgs/Adult_Mulher13.png",
    },
    {
      title: "Imagem 14",
      description: "",
      id:14,
      imc:"",
      image: "assets/imgs/Adult_Mulher14.png",
    },
    {
      title: "Imagem 15",
      description: "",
      id:15,
      imc:"",
      image: "assets/imgs/Adult_Mulher15.png",
    },

  ];


  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
       this.question();
      }


    slideNext(){
    this.slider.slideNext();
  }

  slidePrev(){
    this.slider.slidePrev();
  }

  addSlides(slide) { //Método para adiconar o slide a lista de selecionado
    if (this.selecionado.indexOf(slide) === -1) {
      this.selecionado.push(slide);
      console.log('selecionado');
      console.log(this.selecionado.values());

    }
  }
  question() {
    while (this.selecionado.length <= 3) {
      if (this.selecionado.length < 0) {
        this.pergunta = [{
          title: 'Question1'
        }];
        return this.pergunta;
      }
      if (this.selecionado.length = 0) {
        this.pergunta = [{
          title: 'Question2'
        }];
        return this.pergunta;
      }
      if (this.selecionado.length = 1) {
        this.pergunta = [{
          title: 'Question3'
        }];
        return this.pergunta;
      }
      if (this.selecionado.length = 2) {
        this.pergunta = [{
          title: 'Question4'
        }];
        return this.pergunta;
      }
    }

  }

}
