import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  constructor(private admobFree:AdMobFree) {
    this.showInterstitialAd()
  }

  showInterstitialAd() {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-8867310177954132/2534489681',
      autoShow: true
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      // interstitial ad is ready to be displayed
    }).catch((e) => console.log(e));
  }
}
