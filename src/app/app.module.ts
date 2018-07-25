import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2Page } from '../pages/study/page2';
import { SignupPage } from '../pages/signup/signup';
import { SignInPage } from '../pages/signin/signin';
import { AuthService } from '../services/auth';
import { Study2Page } from '../pages/study2/study2';
import { Test2Page } from '../pages/test2/test2';
import { TestPage } from '../pages/test/test';
import { Test3Page } from '../pages/test3/test3';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ScoresServices } from '../services/scores';
import { HttpModule } from '@angular/http';
import { DatabaseOptionsPage } from '../pages/database-options/database-options';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    Page2Page,
    Study2Page,
    Test2Page,
    TestPage,
    Test3Page,
    DatabaseOptionsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   IonicImageViewerModule,
   HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    Page2Page,
    Study2Page,
    Test2Page,
    TestPage,
    Test3Page,
    DatabaseOptionsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
, {provide: Window, useValue: window}, AuthService,ScoresServices
  ]
})
export class AppModule {}

