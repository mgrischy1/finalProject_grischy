import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2Page } from '../study/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
  public data: any = {myToggle: true};
  checked : boolean;
  checked2 : boolean;
  checked3 : boolean;
  checked4 : boolean;
  checked5 : boolean;
  finalCount: any = 0;
  count: any = 0;
  count2: any = 0;
  count3: any = 0;
  count4: any = 0;
  count5: any = 0;
  

  updateChecked() {
    console.log('Cucumbers new state:' + this.checked );
   if(this.checked == true ){
    this.count++
    
   }else if(this.checked == false){
     this.count =0;
   }
   
  
  
  }
  updateChecked2() {
    if(this.checked2 == true ){
      this.count2++
      
     }else if(this.checked2 == false){
       this.count2 =0;
     } 
  }
 // finalCount = this.count + this.count2;
  //console.log(  this.checked + " " +  this.finalCount);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

    goAnOtherPage2(){this.navCtrl.push(Page2Page);}
    isClicked(val){
      console.log(' ' + val);
    }
}
