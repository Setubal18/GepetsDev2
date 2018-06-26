import {Component} from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {AvaliacaoPage} from "../avaliacao/avaliacao";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  public cadastroForm: FormGroup;
  // Ira receber os valores do form;
  nome : string;
  genero = 'f';
  dtnascimento: any;
  hoje = Date.now();
  idade = this.hoje - this.dtnascimento;
  altura : number;
  peso : number;

  //Variaveis para validação do form;
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
              public formBuilder:FormBuilder,
              // public dataService:DataProvider,
              public view:ViewController){

  this.cadastroForm = this.formBuilder.group({
    nome:["",Validators.required],
    peso:["",Validators.required],
    altura:["",Validators.required],
    dtnascimento:["",Validators.required]})

    // this.dataService.getData().then()


  }


  Validator() {
    let {nome, peso, altura, dtnascimento} = this.cadastroForm.controls;

    if (!this.cadastroForm.valid) {
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
  savePaciente(){
    let pacientes = {
      nome: this.nome,
      sexo: this.genero,
      dtnascimento: this.dtnascimento,
      idade: this.idade,
      peso: this.peso,
      altura: this.altura,
      image: '../../assets/user.png'
    };
    this.view.dismiss(pacientes);

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  chamadaAvaliacao(){
    this.navCtrl.push('AvaliacaoPage',{genero:this.genero});

  }

}
