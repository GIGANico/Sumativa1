import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  token: any = "";

  constructor(private router : Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        console.log(this.data)
      }
    });
  }


  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
  

}
