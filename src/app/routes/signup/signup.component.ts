import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  addCert: FormGroup;
  
  constructor(private appService: AppService,private router: Router) { }

  ngOnInit() {
    
    this.addCert = new FormGroup({
      employee_id: new FormControl('', []),
      name: new FormControl('', []),
      dob: new FormControl('', []),
      designation: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', [])
    });
  }

  onSubmit(){
    debugger
    console.log(this.addCert.value);
      this.appService.employeeSignup(this.addCert.value).subscribe(res => {
        console.log('signup RESPONSE >>>>>', res);
    if(res){
      this.router.navigate(['login']);
    }
    });

  }
}
