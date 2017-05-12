import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the GetCameraPhoto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-camera-photo',
  templateUrl: 'get-camera-photo.html',
})
export class GetCameraPhoto {
  public path;
  /*profilePicture: any = "https://www.gravatar.com/avatar/";*/
  //给image设置默认的图片
  profilePicture: any="assets/img/live.jpg";
  
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetCameraPhoto');
  }

  

  takePhoto() {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery

      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true,
      sourceType:this.camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存

      correctOrientation: true  //Corrects Android orientation quirks
    }
    /**
     * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
     */
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;//给全局的文件路径赋值。
      this.profilePicture=base64Image;//给image设置source。
      alert(this.path);

    /*  this.zone.run(() => this.image = base64Image);*/
    }, (err) => {
      // Handle error，出错后，在此打印出错的信息。
      alert( err.toString());
    });
  }
  choosePhoto() {


    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType:0,//0对应的值为PHOTOLIBRARY ，即打开相册
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks


    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;
      this.profilePicture=base64Image;
      alert(base64Image);
    }, (err) => {
      // Handle error
    });

  }
  chooseVideo() {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType:0,
      mediaType: 1,//为1时允许选择视频文件
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;
      this.profilePicture="assets/img/video.png";//选择视频后，image另外显示一张图片，目前还无法获取视频的第一帧图片。
      alert(this.path);
    }, (err) => {
      // Handle error
    });

  }
}
