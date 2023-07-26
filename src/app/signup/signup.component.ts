import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      role: ['user', Validators.required]
    });
  }

  signUp(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.http.post<any>('https://supplier-backend2.onrender.com/signup', this.signupForm.value)
      .subscribe(
        res => {
          alert('Signup Successful');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        err => {
          console.error('Error occurred:', err);
          alert('Something went wrong. Please check the console for more details.');
        }
      );
  }
}
