import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OtherPage } from '../pages/otherPage/otherPage';
import { MateriaPage } from '../pages/materia/materia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any,tabIndex: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        { title: 'Inicio', component: OtherPage, tabIndex:0 },
        { title: 'Materias', component: MateriaPage, tabIndex:1 },
      ];
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
