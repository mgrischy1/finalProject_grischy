import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-study2',
  templateUrl: 'study2.html',
})
export class Study2Page {
  video_id: any;
  public text: string;
  public data: any = {myToggle: true};
  checked : boolean = true;
  eventId: string;
 
  answer(){ this.text = " list,item";}
    myvideoid:any;

  constructor(public sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
 
  }
  
  
 

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoSinglePage');
}



}
