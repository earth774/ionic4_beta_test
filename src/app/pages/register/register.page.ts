import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formSignup: FormGroup

  constructor(private userServiceService: UserServiceService) {
    this.formSignup = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      username: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  async register() {
    let a = await this.userServiceService.register(this.formSignup.value); //let a = await async
    console.log(a);
  }

}
