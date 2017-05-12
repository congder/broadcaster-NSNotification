import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetCameraPhoto } from '../pages/get-camera-photo/get-camera-photo'
import { Broadcaster } from '@ionic-native/broadcaster';
import { Camera, CameraOptions } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GetCameraPhoto
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GetCameraPhoto
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Broadcaster,
    Camera
  ]
})
export class AppModule {}
