import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List2Page } from '../list2/list2';

/**
 * Generated class for the List1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list1',
  templateUrl: 'list1.html',
})
export class List1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad List1Page');
  }
  nextList2(){
    this.navCtrl.push(List2Page);
  }

}
