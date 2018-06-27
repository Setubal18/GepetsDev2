import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {FormsModule} from "@angular/forms";
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {DataProvider} from '../providers/data/data';
import {ConsultaPage} from "../pages/consulta/consulta";
import {CadastroPage} from "../pages/cadastro/cadastro";
import {AvaliacaoPage} from "../pages/avaliacao/avaliacao";
import {DetalhePacientePage} from "../pages/detalhe-paciente/detalhe-paciente";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultaPage,
    CadastroPage,
    DetalhePacientePage,
    AvaliacaoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConsultaPage,
    CadastroPage,
    DetalhePacientePage,
    AvaliacaoPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
