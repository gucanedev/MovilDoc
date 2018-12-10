import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Resultado3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado3',
  templateUrl: 'resultado3.html',
})
export class Resultado3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Resultado3Page');
  }
  home(){
    this.navCtrl.setRoot(HomePage);
  }
  backPage(){
    this.navCtrl.pop();
  }
}
