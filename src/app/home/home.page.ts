import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// currentWeather: any;
export class HomePage {
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'yes', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no',//iOS only
    presentationstyle: 'fullscreen',//iOS only
    fullscreen: 'yes',//Windows only
    toolbarposition: 'top',
    suppressesIncrementalRendering: 'no',
    transitionstyle: 'crossdissolve',
    toolbarcolor: '#D3D3D3'


  };
data: any[]=[];
  currentWeather: any;
  // target: string;
  constructor(private firestore: AngularFirestore,private admobFree: AdMobFree,private iab: InAppBrowser) {
    this.firestore.collection('Hello').snapshotChanges().subscribe((hello:any) => {
      this.data = hello.map((t:any) => {
          return { id: t.payload.doc.id, ...t.payload.doc.data() as {} };
      });
      console.log(this.data);
  });
  this.showBannerAd()



  }
  // ca-app-pub-8867310177954132/7118571292
  
  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8867310177954132/3714929166',
      isTesting: false,
      autoShow: true,
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then(() => {
      console.log('Banner ad is ready');
    });
  }
  openUrl(url: string) {
  
    const options: InAppBrowserOptions = {
      location: 'yes',
      hidden: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no',
      closebuttoncaption: 'Close',
      disallowoverscroll: 'yes',
      toolbar: 'yes',
      enableViewportScale: 'no',
      allowInlineMediaPlayback: 'no',
      presentationstyle: 'fullscreen',
      fullscreen: 'yes',
      toolbarposition: 'top',
      suppressesIncrementalRendering: 'no',
      transitionstyle: 'crossdissolve',
      toolbarcolor: '#D3D3D3',
      hideurlbar:'yes'
    };
  
    let target = '_self';
    this.iab.create(url,target,options);
  }
  // openUrl(url: string) {
  //      const options: InAppBrowserOptions = {
  //     location: 'yes',//Or 'no'
  //     hidden: 'no', //Or  'yes'
  //     clearcache: 'yes',
  //     clearsessioncache: 'yes',
  //     zoom: 'yes',//Android only ,shows browser zoom controls
  //     hardwareback: 'yes',
  //     mediaPlaybackRequiresUserAction: 'no',
  //     shouldPauseOnSuspend: 'no', //Android only
  //     closebuttoncaption: 'Close', //iOS only
  //     disallowoverscroll: 'yes', //iOS only
  //     toolbar: 'yes', //iOS only
  //     enableViewportScale: 'no', //iOS only
  //     allowInlineMediaPlayback: 'no',//iOS only
  //     presentationstyle: 'fullscreen',//iOS only
  //     fullscreen: 'yes',//Windows only
  //     toolbarposition: 'top',
  //     suppressesIncrementalRendering: 'no',
  //     transitionstyle: 'crossdissolve',
  //     toolbarcolor: '#D3D3D3'
  //   };
  //   this.iab.create(url,options).show();
  // }
}
