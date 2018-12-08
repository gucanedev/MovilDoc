import { Component, animate } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {List1Page } from '../list1/list1';
import { Pregunta2Page } from '../pregunta2/pregunta2';

/**
 * Generated class for the Pregunta1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregunta1',
  templateUrl: 'pregunta1.html',
  entryComponents:[ Pregunta2Page ]
})
export class Pregunta1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pregunta1Page');
  }
  backPage(){
    console.log("perro");
    this.navCtrl.pop({duration:150});
  }
  pregunta2(){
    this.navCtrl.push(Pregunta2Page);
  }

  list1question(){
    this.navCtrl.push(List1Page);
  }
}
