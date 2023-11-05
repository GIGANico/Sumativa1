import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;

  constructor(private router : Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        console.log(this.data)
      }else(this.router.navigate(['/login']))
    });
  }

}
