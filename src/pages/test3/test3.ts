import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Test3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test3',
  templateUrl: 'test3.html',
})
export class Test3Page {

  finalCount2:any;
  grade:string;
  percent:string = "0%";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.finalCount2 = this.navParams.get('data2') ;
    if(this.finalCount2 < 6 ){
      this.grade="F";
    }else if(this.finalCount2 ==6){
      this.grade = "D";
      this.percent = "60%";
    }else if(this.finalCount2 ==7){
      this.grade = "C";
      this.percent = "70%";

    }else if(this.finalCount2==8){
      this.grade = "B";
      this.percent = "80%";

    }else if(this.finalCount2 ==9 || this.finalCount2 ==10){
      this.grade = "A";
    }
   if(this.finalCount2 ==9){
    this.percent = "90%";

   }else if(this.finalCount2 ==10){
    this.percent = "100%";

   }
   else if(this.finalCount2 ==1){
    this.percent = "10%";

   }
   else if(this.finalCount2 ==2){
    this.percent = "20%";

   }
   else if(this.finalCount2 ==3){
    this.percent = "30%";

   }
   else if(this.finalCount2 ==4){
    this.percent = "40%";

   }
   else if(this.finalCount2 ==5){
    this.percent = "50%";

   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Test3Page');
  }

}
