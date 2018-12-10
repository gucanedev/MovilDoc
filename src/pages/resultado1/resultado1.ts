import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Resultado1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado1',
  templateUrl: 'resultado1.html',
})
export class Resultado1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Resultado1Page');
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }
  backPage(){
    this.navCtrl.pop();
  }
}
