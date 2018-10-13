import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { OtherPage } from '../pages/otherPage/otherPage';
import { ApiRest } from "../services/apirest";
import { MateriasRest } from "../services/materiasrest";
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MateriaPage } from '../pages/materia/materia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    MateriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
   
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__tectepic',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    MateriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiRest,
    MateriasRest,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
