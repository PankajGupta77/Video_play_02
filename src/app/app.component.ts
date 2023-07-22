import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private admobFree:AdMobFree) {
    this.showInterstitialAd()
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.showInterstitialAd()
  }

  showInterstitialAd() {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-7954042482936232/4841529761',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      // interstitial ad is ready to be displayed
    }).catch((e) => console.log(e));
  }
}
