import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { RegisterPage } from '../register/register.page';
import { UserServiceService } from '../../services/user-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loginForm: FormGroup;
  constructor(
    public router: Router,
    public nav: NavController,
    public userServiceService: UserServiceService) {
    this.loginForm = new FormGroup({
      username: new FormControl(''), //, Validators.required
      password: new FormControl(''),
    });
  }

  ngOnInit() {

  }
  gotopage() {
    // navigateByUrl('/register')

  }


}
