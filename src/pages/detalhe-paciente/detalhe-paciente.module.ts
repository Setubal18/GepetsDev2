import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DetalhePacientePage} from './detalhe-paciente';

@NgModule({
  declarations: [
    DetalhePacientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePacientePage),
  ],
})
export class DetalhePacientePageModule {
}
