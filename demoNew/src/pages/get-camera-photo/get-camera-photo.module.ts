import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetCameraPhoto } from './get-camera-photo';

@NgModule({
  declarations: [
    GetCameraPhoto,
  ],
  imports: [
    IonicPageModule.forChild(GetCameraPhoto),
  ],
  exports: [
    GetCameraPhoto
  ]
})
export class GetCameraPhotoModule {}
