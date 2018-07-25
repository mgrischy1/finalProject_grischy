import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import { LoadingController } from 'ionic-angular';


import firebase from 'firebase';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SignInPage {
  [x: string]: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,private  loadingCtrl: LoadingController,private alertCtrl: AlertController) {
  }
 
//loading.present();


  //
  onSignin(form: NgForm, username) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
      this.navCtrl.push(HomePage, {data: username})

  }
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }
  
}
