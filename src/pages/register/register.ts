import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username : string = '';
  email : string = '';
  password : string = '';
  repassword : string = '';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
   console.log(this.username);
   localStorage.setItem('uname',this.username);
   localStorage.setItem('email',this.email);
   localStorage.setItem('password',this.password);
   localStorage.setItem('repassword',this.repassword);
   alert('Register Successs..!');
  }

}
