import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
//import { ThanksPage } from '../thanks/thanks';
import { HomePage } from '../home/home';
import { SignInPage } from '../signin/signin';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  [x: string]: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private authService: AuthService,
     private loadingCtrl: LoadingController,
     private alertCtrl: AlertController) {
  }

  // onSignup(form: NgForm, name) {
  //   this.authService.signup(form.value.email, form.value.password)
  //   .then(data => {
  //     console.log(data)
  //     name = name || ""
  //      this.navCtrl.push(HomePage, {data: name})
  //    })
  //   // .catch(error => console.log(error));
  // }
  onSignup(form: NgForm, name) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
      this.navCtrl.push(HomePage, {data: name})

  }
  goToSignIn(){
    this.navCtrl.push(SignInPage);
  }
}
