import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Pregunta1Page } from '../pages/pregunta1/pregunta1';
import { List1Page } from '../pages/list1/list1';
import { Pregunta2Page } from '../pages/pregunta2/pregunta2';
import { Pregunta3Page } from '../pages/pregunta3/pregunta3';
import { Pregunta4Page } from '../pages/pregunta4/pregunta4';
import { Resultado1Page } from '../pages/resultado1/resultado1';
import { Resultado2Page } from '../pages/resultado2/resultado2';
import { Resultado3Page } from '../pages/resultado3/resultado3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Pregunta1Page
    ,List1Page
    ,Pregunta2Page
    ,Pregunta3Page
    ,Pregunta4Page
    ,Resultado1Page
    ,Resultado2Page
    ,Resultado3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Pregunta1Page,
    List1Page
    ,Pregunta2Page
    ,Pregunta3Page
    ,Pregunta4Page
    ,Resultado1Page
    ,Resultado2Page
    ,Resultado3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
