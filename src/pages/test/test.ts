import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Test2Page } from '../test2/test2';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  checked : boolean;
  checked2 : boolean = false;
  checked3 : boolean;
  checked4 : boolean;
  checked5 : boolean = false;
  checked6 : boolean;
  checked7 : boolean;

  finalCount: any = 0;
  count: any = 0;
  count2: any = 0;
  count3: any = 0;
  count4: any = 0;
  count5: any = 0;
  count6: any = 0;
  count7: any = 0;

  //e: any = 0;
  

  goAnOtherPage2() {
   
   if(this.checked == true ){
    this.count =1;
    
   }else if(this.checked == false){
     this.count =0;
   }
   
   

    if(this.checked2 == true ){
      this.count2=0;
      
     }else if(this.checked2 == false){
       this.count2 =1;
     }

     if(this.checked3 == true ){
      this.count3=1;
      
     }else if(this.checked3 == false){
       this.count3 =0;
     }
     if(this.checked4 == true ){
      this.count4=1;
      
     }else if(this.checked4 == false){
       this.count4 =0;
     }
     if(this.checked5 == true ){
      this.count5=0;
      
     }else if(this.checked5 == false){
       this.count5 =1;
     }
     if(this.checked6 == true ){
      this.count6=1;
      
     }else if(this.checked2 == false){
       this.count6 =0;
     }
     if(this.checked7 == true ){
      this.count7=1;
      
     }else if(this.checked7 == false){
       this.count7 =0;
     }
      this.finalCount = this.count + this.count2 + this.count3 + this.count4 + this.count5 + this.count6+ this.count7;
      this.navCtrl.push(Test2Page,{
        data: this.finalCount
      });
  }
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
