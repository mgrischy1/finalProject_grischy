import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController, AlertController } from 'ionic-angular';
import { Test3Page } from '../test3/test3';
import {ScoresServices} from '../../services/scores';
import {AuthService} from '../../services/auth';
import { DatabaseOptionsPage } from '../database-options/database-options';
/**
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page {
  [x: string]: any;
  finalCount:string;
  finalCount2:any= 0;

  checked : boolean = true;
  public input: any;
  public input2: any;
  public input3: any;


 public  count:any = 0;
 public  count2:any = 0;
 public  count3:any = 0;

  
  
 // f = this.finalCount + 1;
  
  constructor(public navCtrl: NavController,
    private authService: AuthService,
    private popoverCtrl: PopoverController,
     public navParams: NavParams,
     private ScoresServices:ScoresServices,
     private loadingCtrl: LoadingController,
     private alertCtrl: AlertController) {
    this.finalCount= this.navParams.get('data') ;
  }
 
    answer(){
     
       
        
      
      
     if(this.input == "a"){
    
      this.count = 1 ;
      
    }else{
      this.count = 0;

  }
  if(this.input2 == "b"){
    
    this.count2 = 1 ;
    
  }else{
    this.count2 = 0;

}
if(this.input3 == "b"){
    
  this.count3 = 1 ;
  
}else{
  this.count3 = 0;

}

  
  this.finalCount2 = this.finalCount + this.count + this.count2 + this.count3;  
  this.ScoresServices.addScores(2);
  // const loading = this.loadingCtrl.create({
  //   content: 'Please wait...'
  // });
  // const popover = this.popoverCtrl.create(DatabaseOptionsPage);
  // popover.present({ev: event});
  // popover.onDidDismiss(
  //   data => {
  //     if (!data) {
  //       return;
  //     }
      
  //       loading.present();
  //       this.authService.getActiveUser().getIdToken()
  //         .then(
  //           (token: string) => {
              this.ScoresServices.storeList("")
                // .subscribe(
                //   () => loading.dismiss(),
                //   error => {
                //     loading.dismiss();
                //     this.handleError(error.json().error);
                //   }
                // );
     //       }
      //    );
   //   }
    
 // );



  //this.listItems = this.ScoresServices.getItems();


  this.navCtrl.push(Test3Page,{
  data2: this.finalCount2});  
    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Test2Page');
  }

}
