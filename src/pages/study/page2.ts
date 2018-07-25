import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Study2Page } from '../study2/study2';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
 
  public data: any = {myToggle: true};
  checked : boolean = true;
  public text: string;
  isClicked(val){
    console.log('Vegitarian: ' + val);
  }
  
  
  answer(){ this.text = "*ngif";}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
  }
  goAnOtherPage2(){this.navCtrl.push(Study2Page);};
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
