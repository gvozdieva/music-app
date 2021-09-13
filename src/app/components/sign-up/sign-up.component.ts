import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  onSignUp(form: NgForm) {
    const username = form.value.username
    const password = form.value.password
    console.log(username, password)
  }

}
