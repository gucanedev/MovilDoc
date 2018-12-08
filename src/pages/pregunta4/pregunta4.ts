import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Resultado2Page } from '../resultado2/resultado2';
import { Resultado3Page } from '../resultado3/resultado3';

/**
 * Generated class for the Pregunta4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregunta4',
  templateUrl: 'pregunta4.html',
})
export class Pregunta4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  backPage(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pregunta4Page');
  }
  resultado2(){
    this.navCtrl.push(Resultado2Page);
  }
  resultado3(){
    this.navCtrl.push(Resultado3Page);

  }
  
}
