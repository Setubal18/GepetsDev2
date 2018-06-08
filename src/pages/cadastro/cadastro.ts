import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AvaliacaoPage} from "../avaliacao/avaliacao";
import {FormBuilder,Validators} from "@angular/forms";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public CadastroForm: any;
  genero = 'f';
  Message_nome= '';
  Message_peso='';
  Message_altura= '';
  Message_dtnascimento= '';
  erroNome = false;
  erroGenero = false;
  erroPeso = false;
  erroAltura = false;
  erroDtNascimento = false;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public formBuilder:FormBuilder){
  this.CadastroForm = this.formBuilder.group({
    nome:["",Validators.required],
    genero:["",Validators.required],
    peso:["",Validators.required],
    altura:["",Validators.required],
    dtnascimento:["",Validators.required]})}


  Validator() {
    let {nome, peso, altura, dtnascimento} = this.CadastroForm.controls;

    if (!this.CadastroForm.valid) {
      if (!nome.valid) {
        this.erroNome = true;
        this.Message_nome = 'Campo Nome obrigatorio';
      }
      else {
        this.Message_nome = "";
        this.erroNome = false
      }
      if (!peso.valid) {
        this.erroPeso = true;
        this.Message_peso = 'Campo Nome obrigatorio';
      }
      else {
        this.Message_nome = "";
        this.erroNome = true
      }
      if (!altura.valid) {
        this.erroAltura = true;
        this.Message_altura = 'Campo Nome obrigatorio';
      }
      else {
        this.Message_nome = "";
        this.erroNome = true
      }
      if (!dtnascimento.valid) {
        this.erroDtNascimento = true;
        this.Message_dtnascimento = 'Campo Nome obrigatorio';
      }
      else {
        this.Message_dtnascimento = "";
        this.erroDtNascimento = true
      }

    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  chamadaAvaliacao(){
    this.navCtrl.push('AvaliacaoPage',{genero:this.genero});

  }

}
