import { Component,ViewChild } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
  @ViewChild('slide') slide: any;
  imgs=[
    {
      id: 1,
      img: 'assets/imgs/Adult_Mulher1.png"',
      title: 'Imagem1',
      imc: '',
    },
    {
      id: 2,
      img: 'assets/imgs/Adult_Mulher2.png"',
      title: 'Imagem2',
      imc: '',
    },
    {
      id: 3,
      img: 'assets/imgs/Adult_Mulher3.png"',
      title: 'Imagem3',
      imc: '',
    },
    {
      id: 4,
      img: 'assets/imgs/Adult_Mulher4.png"',
      title: 'Imagem4',
      imc: '',
    },
    {
      id: 5,
      img: 'assets/imgs/Adult_Mulher5.png"',
      title: 'Imagem5',
      imc: '',
    },
    {
      id: 6,
      img: 'assets/imgs/Adult_Mulher6.png"',
      title: 'Imagem6',
      imc: '',
    },
    {
      id: 7,
      img: 'assets/imgs/Adult_Mulher7.png"',
      title: 'Imagem7',
      imc: '',
    },
    {
      id: 8,
      img: 'assets/imgs/Adult_Mulher8.png"',
      title: 'Imagem8',
      imc: '',
    },
    {
      id: 9,
      img: 'assets/imgs/Adult_Mulher9.png"',
      title: 'Imagem9',
      imc: '',
    },
    {
      id: 10,
      img: 'assets/imgs/Adult_Mulher10.png"',
      title: 'Imagem10',
      imc: '',
    },
    {
      id: 11,
      img: 'assets/imgs/Adult_Mulher11.png"',
      title: 'Imagem11',
      imc: '',
    }, {
      id: 12,
      img: 'assets/imgs/Adult_Mulher12.png"',
      title: 'Imagem12',
      imc: '',
    },
    {
      id: 13,
      img: 'assets/imgs/Adult_Mulher13.png"',
      title: 'Imagem13',
      imc: '',
    },
    {
      id: 14,
      img: 'assets/imgs/Adult_Mulher14.png"',
      title: 'Imagem14',
      imc: '',
    },
    {
      id: 15,
      img: 'assets/imgs/Adult_Mulher15.png"',
      title: 'Imagem15',
      imc: '',
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AvaliacaoPage');
  // }
  slideNext(){
    this.slide.slideNext();
  }

  slidePrev(){
    this.slide.slidePrev();
  }
}
