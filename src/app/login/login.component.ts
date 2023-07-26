// import { HttpClient } from '@angular/common/http';
// import { Token } from '@angular/compiler';

// import { Component, OnInit } from '@angular/core';

// import { FormBuilder, FormGroup } from '@angular/forms';

// import { Router } from '@angular/router';

// @Component({

//   selector: 'app-login',

//   templateUrl: './login.component.html',

//   styleUrls: ['./login.component.css']

// })

// export class LoginComponent implements OnInit {

//   public loginForm!: FormGroup;
//   constructor(

//     private formBuilder: FormBuilder,

//     private http: HttpClient,

//     private router: Router

//   ) {}
//   ngOnInit(): void {

//     this.loginForm = this.formBuilder.group({

//       email: [''],

//       password: ['']

//     });

//   }
//   login(): void {

//     const userCredentials = {

//       email: this.loginForm.value.email,

//       password: this.loginForm.value.password

//     };

//     this.http.post<any>('http://localhost:1998/login', userCredentials).subscribe(

//       (res) => {

//         if (res.message === 'Login successful') {

//           localStorage.setItem("token",res.token)
//           localStorage.setItem("role",res.role)
//           console.log(res)

//           alert('Login Successful');
//           this.loginForm.reset();
//           this.router.navigate(['dashboard']);
//         } else {
//           alert('Invalid email or password');
//         }
//       },
//       (err) => {
//         alert('Something went wrong');
//       }
//     );
//   }
// }





import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(): void {
    const userCredentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.loading = true;

    this.http.post<any>('http://localhost:1998/login', userCredentials).subscribe(
      (res) => {
        this.loading = false;
        if (res.message === 'Login successful') {
          localStorage.setItem("token", res.token);
          localStorage.setItem("role", res.role);
          console.log(res);
          alert('Login Successful');
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        } else {
          alert('Invalid email or password');
        }
      },
      (err) => {
        this.loading = false;
        alert('Something went wrong');
      }
    );
  }
}
