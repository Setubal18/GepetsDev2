import { Component,ViewChild } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
// import {ResultadoPage} from "../resultado/resultado";



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

  genero = this.navParams.get('paciente').genero;//recebera o genero de quem esta sendo avaliado
  dtnascimento = this.navParams.get('paciente').dtnascimento;//recebera a idade de quem esta sendo avaliado

  dataNascimento= new Date(this.dtnascimento).getFullYear();
  dataAtual = new Date(Date.now()).getFullYear();

  idade = this.dataAtual - this.dataNascimento;

@ViewChild('slider') slider: any;
  slides = [];
  adultF = [
    {
      title: "Imagem 1",
      description: "",
      id: 1,
      imc:12.5,
      image:"assets/imgs/Adult_Mulher1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:15,
      image: "assets/imgs/Adult_Mulher2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:17.5,
      image: "assets/imgs/Adult_Mulher3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:20,
      image: "assets/imgs/Adult_Mulher4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:22.5,
      image: "assets/imgs/Adult_Mulher5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:25,
      image: "assets/imgs/Adult_Mulher6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:27.5,
      image: "assets/imgs/Adult_Mulher7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:30,
      image: "assets/imgs/Adult_Mulher8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:32.5,
      image: "assets/imgs/Adult_Mulher9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:35,
      image: "assets/imgs/Adult_Mulher10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:37.5,
      image: "assets/imgs/Adult_Mulher11.png",
    },
    {
      title: "Imagem 12",
      description: "",
      id:12,
      imc:40,
      image: "assets/imgs/Adult_Mulher12.png",
    },
    {
      title: "Imagem 13",
      description: "",
      id:13,
      imc:42.5,
      image: "assets/imgs/Adult_Mulher13.png",
    },
    {
      title: "Imagem 14",
      description: "",
      id:14,
      imc:45,
      image: "assets/imgs/Adult_Mulher14.png",
    },
    {
      title: "Imagem 15",
      description: "",
      id:15,
      imc:47.5,
      image: "assets/imgs/Adult_Mulher15.png",
    },

  ];

  adultM =[ {
    title: "Imagem 1",
    description: "",
    id: 1,
    imc:12.5,
    image: "assets/imgs/Adult_Homem1.png",
  },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:15,
      image: "assets/imgs/Adult_Homem2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:17.5,
      image: "assets/imgs/Adult_Homem3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:20,
      image: "assets/imgs/Adult_Homem4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:22.5,
      image: "assets/imgs/Adult_Homem5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:25,
      image: "assets/imgs/Adult_Homem6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:27.5,
      image: "assets/imgs/Adult_Homem7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:30,
      image: "assets/imgs/Adult_Homem8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:32.5,
      image: "assets/imgs/Adult_Homem9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:35,
      image: "assets/imgs/Adult_Homem10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:37.5,
      image: "assets/imgs/Adult_Homem11.png",
    },
    {
      title: "Imagem 12",
      description: "",
      id:12,
      imc:40,
      image: "assets/imgs/Adult_Homem12.png",
    },
    {
      title: "Imagem 13",
      description: "",
      id:13,
      imc:42.5,
      image: "assets/imgs/Adult_Homem13.png",
    },
    {
      title: "Imagem 14",
      description: "",
      id:14,
      imc:45,
      image: "assets/imgs/Adult_Homem14.png",
    },
    {
      title: "Imagem 15",
      description: "",
      id:15,
      imc:47.5,
      image: "assets/imgs/Adult_Homem15.png",
    },

  ];

  kidM = [
    {
      title: "Imagem 1",
      description: "",
      id: 1,
      imc:12,
      image: "assets/imgs/Kid_Homem1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:13.7,
      image: "assets/imgs/Kid_Homem2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:15.4,
      image: "assets/imgs/Kid_Homem3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:17.1,
      image: "assets/imgs/Kid_MHomem4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:18.8,
      image: "assets/imgs/Kid_Homem5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:20.5,
      image: "assets/imgs/Kid_Homem6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:22.2,
      image: "assets/imgs/Kid_Homem7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:23.9,
      image: "assets/imgs/Kid_Homem8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:25.6,
      image: "assets/imgs/Kid_Homem9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:27.3,
      image: "assets/imgs/Kid_Homem10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:29,
      image: "assets/imgs/Kid_Homem11.png",
    },
  ];

  kidF = [
    {
      title: "Imagem 1",
      description: "",
      id: 1,
      imc:12,
      image: "assets/imgs/Kid_Mulher1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:13.7,
      image: "assets/imgs/Kid_Mulher2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:15.4,
      image: "assets/imgs/Kid_Mulher3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:17.1,
      image: "assets/imgs/Kid_Mulher4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:18.8,
      image: "assets/imgs/Kid_Mulher5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:20.5,
      image: "assets/imgs/Kid_Mulher6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:22.2,
      image: "assets/imgs/Kid_Mulher7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:23.9,
      image: "assets/imgs/Kid_Mulher8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:25.6,
      image: "assets/imgs/Kid_Mulher9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:27.3,
      image: "assets/imgs/Kid_Mulher10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:29,
      image: "assets/imgs/Kid_Mulher11.png",
    },
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.genero);
    console.log(this.idade);
    this.question();
    this.showSlides();
    console.log(this.pergunta.length);
    ;

    }

showSlides() {
  if (this.genero == 'masculino') {
    if (this.idade > 7) {
      this.slides = this.kidM
    }
    if (this.idade >= 13) {
      this.slides = this.adultM;
    }
  }
  else {
    if (this.idade < 7) {
      this.slides = this.kidF
    }
    if (this.idade >= 13) {
      this.slides = this.adultF;
    }

  }
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
      console.log(this.selecionado);

      if(this.selecionado.length >= 0 ){
        this.question();
      }
    }
  }
  question() {
      if (this.selecionado.length = 0) {
        this.pergunta = [{
          title: 'Question1'
        }];
        return this.pergunta;
      }
      if (this.selecionado.length = 1) {
        this.pergunta = [{
          title: 'Question2'
        }];
        return this.pergunta;
      }
      if (this.selecionado.length = 2) {
        this.pergunta = [{
          title: 'Question3'
        }];
        return this.pergunta;
      }
      if (this.selecionado.length = 3) {
        this.pergunta = [{
          title: 'Question4'
        }];
        return this.pergunta;
      }
    }



}
