import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {SignInRequest} from "../../model/sign-in.request";
import {MatError } from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatError,
    NgIf,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
    ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid)
      return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
