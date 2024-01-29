import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  email;
  password;
  errors = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  login() {
    console.log(this.email)
    this.errors = [];
    this.isLoading = true;
    this.authService.login({email: this.email, password: this.password}).subscribe(
      (result) => {
        this.isLoading = false;
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        this.authService.setLoggedIn(true);
        this.router.navigate(['/']);
        console.log(result)
      },
      (error) => {
        this.isLoading = false;
        let errorDetails = error.error.data;
        for (let errorKey in errorDetails)
          this._snackBar.open(errorDetails[errorKey], 'Ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['danger-snackbar']
          });
      }
    )
  }

  ngOnDestroy() {
  }

}
