import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.scss']
})

export class PLoginComponent implements OnInit {
  items;
  checkoutForm;
  submitted;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthServiceService, private router: Router,
    private toastrService: NbToastrService) {
    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid){
      return;
    }
    this.authService.login(this.checkoutForm.value).subscribe((response: any) => {
      if (response.password === this.checkoutForm.value.password) {
        this.router.navigateByUrl('/pages');
        localStorage.setItem('isUserLoggedIn', 'true');
      }else{
        this.toastrService.show('Please enter correct username or password', 'Error!', { status: 'danger' });
      }
    }, error => { this.loginError(error); } );

    // stop here if form is invalid
    // if (this.checkoutForm.invalid) {
    //     return;
    // }
  }

  loginError(error) {
   switch (error.error.error.code) {
     case 'MODEL_NOT_FOUND':
      this.toastrService.show('Please enter correct username or password', 'Error!', { status: 'danger' });
       break;
     default:
      this.toastrService.show('Some Error occurred please try after sometime', 'Error!', { status: 'danger' });
       break;
   }
  }
  get email() { return this.checkoutForm.get('email'); }
  get password() { return this.checkoutForm.get('password'); }
  ngOnInit() {
  }

}
