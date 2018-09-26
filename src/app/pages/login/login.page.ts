import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterPage } from '../register/register.page';
import { UserServiceService } from '../../services/user-service.service';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  constructor(
    public router: Router,
    // public navCtrl: NavController,
    public userServiceService: UserServiceService,
    public loading: LoadingController,
    private appComponent: AppComponent
  ) {
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

  clearLocalStorage() {
    localStorage.removeItem('userlogin')
    localStorage.removeItem('api_token')
  }

  async login() {
    let loading = await this.loading.create({
      message: 'กรุณารอสักครู่..',
      spinner: 'dots'
    });

    await loading.present();
    let login: any = await this.userServiceService.login(this.loginForm.value);
    if (login.status == 'success') {
      console.log(login);
      this.clearLocalStorage();
      let jsonLogin = JSON.stringify(login.data);
      localStorage.setItem('api_token', login.data.api_token);
      localStorage.setItem('userlogin', jsonLogin);
      this.appComponent.setPageRoot();
    }
    loading.dismiss();
  }

}
