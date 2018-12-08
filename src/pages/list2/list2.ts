import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Result1listPage } from '../result1list/result1list';

/**
 * Generated class for the List2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})
export class List2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List2Page');
  }

  backPage(){
    console.log("perro");
    this.navCtrl.pop();
  }

  nextResult1(){
    this.navCtrl.push(Result1listPage);
  }
}
