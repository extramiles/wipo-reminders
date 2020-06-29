import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private appService: AppService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get fromValues() {
    return this.loginForm.value;
  }

  onSubmit() {
    debugger;
    const userName = this.fromValues.userName;
    const password = this.fromValues.password;
    this.appService.login(userName, password).subscribe(res => {
      debugger;
      console.log(res);
      this.data=res;
      console.log(this.data);
      environment.token = this.data.token;
      environment.employee_id= this.data.employee_id;
      environment.designation= this.data.designation;
      environment.team_id= this.data.team_id;
      //environment.employeeName = this.data.employeeName;
      //environment.employeeId = this.data.employeeId;

      //this.appService.setLoggedIn(true);
      this.router.navigate(['dashboard']);
    });

    

  }
}

