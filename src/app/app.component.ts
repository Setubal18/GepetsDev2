import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

//import { HomePage } from '../pages/home/home';
import {MainPage} from "../pages/main/main";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

    });
  }
}
