import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {AvaliacaoPage} from "../avaliacao/avaliacao";


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
  public formCadastro:FormGroup;
  nome : string;
  genero : string;
  dtnascimento: any;
  hoje = Date.now();
  idade = this.hoje - this.dtnascimento;
  altura : number;
  peso : number;



  erroNome = false;
  erroGenero = false;
  erroPeso = false;
  erroAltura = false;
  erroDtNascimento = false;

	constructor(public nav: NavController,
              public view: ViewController,
              public formBuilder:FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome:["",Validators.required],
      genero:[""],
      peso:["",Validators.required],
      altura:["",Validators.required],
      dtnascimento:["",Validators.required]
    })

  }
  Validator() {
    let {nome, peso, altura, dtnascimento} = this.formCadastro.controls;

    if (!this.formCadastro.valid) {
      if (!nome.valid) {
        this.erroNome = true;

      }
      else {
        this.erroNome;
      }
      if (!peso.valid) {
        this.erroPeso = true;

      }
      else {

        this.erroPeso;
      }
      if (!altura.valid) {
        this.erroAltura = true;
      }
      else {
        this.erroAltura;
      }
      if (!dtnascimento.valid) {
        this.erroDtNascimento = true;

      }
      else {
        this.erroDtNascimento;
      }

    }
  }

	saveItem(){
		let newItem = {
		  nome: this.nome,
		  genero: this.genero,
      dtnascimento: this.dtnascimento,
      altura: this.altura,
      peso: this.peso,
      idade: this.idade,
      avaliacoes : []
		};

    this.nav.push(AvaliacaoPage,{paciente:newItem});
		this.view.dismiss(newItem);


	}

	close(){
		this.view.dismiss();
	}

}
