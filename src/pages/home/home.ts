import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pregunta1Page } from '../pregunta1/pregunta1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents:[ Pregunta1Page ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  pregunta1(){
    this.navCtrl.push(Pregunta1Page);

  }
}
