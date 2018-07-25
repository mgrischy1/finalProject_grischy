import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignInPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import firebase from 'firebase';
import { AuthService } from '../services/auth';
import { HomePage } from '../pages/home/home';
import { Page2Page } from '../pages/study/page2';
import { TestPage } from '../pages/test/test';
//import { DisplayPage } from '../pages/display/display';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController;
  [x: string]: any;
  rootPage: any =  SignInPage;
  signinPage = SignInPage;
  isAuthenticated = false;
 
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService: AuthService) {
     
     
      firebase.initializeApp({
       
        apiKey: "AIzaSyB5J0SswSg98DAdy0uIMRe7I9NoIVV-ti8",
    authDomain: "p5grischy.firebaseapp.com"
       
      })
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;
          this.rootPage = SignInPage;
        } else {
          this.isAuthenticated = false;
          this.rootPage = SignInPage;
        }
      });
    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page){
    this.nav.setRoot(page.component)
  }
  onLoad(){
    this.nav.setRoot( TestPage);
  }

  study(){
   
    this.nav.setRoot( HomePage);
  }
  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SignInPage);
  }
}

