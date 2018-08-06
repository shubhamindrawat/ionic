import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { Home3Page } from '../home3/home3';
import { Home2Page } from '../home2/home2';
import { Home1Page } from '../home1/home1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:string='';
  password:string='';
 
  
  constructor(public navCtrl: NavController) {

  }
  login(){
    console.log("Email : " + this.email);
    console.log("Password : " + this.password);
   if(localStorage.getItem('email') == this.email && localStorage.getItem('password')){
      this.navCtrl.push(LoginPage);
   }
   else{
     alert('Wrong Credentials');
   }
    
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }

}
