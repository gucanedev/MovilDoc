import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pregunta4Page } from '../pregunta4/pregunta4';
import { Resultado1Page } from '../resultado1/resultado1';

/**
 * Generated class for the Pregunta3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregunta3',
  templateUrl: 'pregunta3.html',
})
export class Pregunta3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  backPage(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pregunta3Page');
  }
  resultado1(){
    this.navCtrl.push(Resultado1Page);
  }
  pregunta4(){
    this.navCtrl.push(Pregunta4Page);

  }
}
