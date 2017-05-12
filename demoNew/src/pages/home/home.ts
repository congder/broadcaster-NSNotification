import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Broadcaster } from '@ionic-native/broadcaster';
import { GetCameraPhoto } from '../get-camera-photo/get-camera-photo'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private broadcaster: Broadcaster) {

  }
    ionViewDidLoad(){
    console.log(HomePage+ '12345666777')

  }
  
    sendData(){
      // 这句代码是 用于传值给 原生的 
     this.broadcaster.fireNativeEvent('jsToNative', {"item":'我是来自ionic的值'}).then(() => console.log('success'));
       // 这句代码 添加了一个监听者, 用于接收原生 传来的值   
     this.broadcaster.addEventListener('eventName').subscribe((event) => console.log('(2) 这句话是在ionic 里面打印的:===='+event['key']));
// 把这两句代码写在一起,是为了 在 传值的 同时,创建了 监听者(其实创建监听者 的操作在 ionViewDidLoad-页面加载 时最合适,但目前实现不了,还有待研究 )

    }
  
    nextPage(){

      this.navCtrl.push(GetCameraPhoto)
    }
}
