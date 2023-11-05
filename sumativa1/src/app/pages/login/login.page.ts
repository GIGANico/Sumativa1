import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user={
    usuario:"",
    password:""
  }

  isFormValid: boolean = false;


  constructor(private router : Router) { }

  ngOnInit() {
  }

  ingresar(){
    let navigationExtras : NavigationExtras ={
      state: {
        user: this.user
      }
    }
    this.router.navigate(['/home'],navigationExtras);
  }

  validateForm() {
    this.isFormValid =
      this.user.usuario.length >= 3 &&
      this.user.usuario.length <= 8 &&
      /^[0-9]{4}$/.test(this.user.password);
  }

}
