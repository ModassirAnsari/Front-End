import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms"; // Import Validators
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
      fullName: [''],
      email: ['', [Validators.required, Validators.email]], // Add email validator
      password: ['', [Validators.required, Validators.minLength(6)]], // Add password validator
      mobile: ['', Validators.required,Validators.minLength(10),Validators.maxLength(10)],
      role: ['user'] // Added role field with default value 'user'
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
          alert('Something went wrong');
        }
      );
  }
}

