import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {List1Page } from '../list1/list1';
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
})
export class Pregunta1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pregunta1Page');
  }
  backPage(){
    console.log("perro");
    this.navCtrl.pop();
  }

  list1question(){
    this.navCtrl.push(List1Page);
  }
}
