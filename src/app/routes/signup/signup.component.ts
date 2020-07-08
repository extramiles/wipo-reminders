import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../../dialog-body/dialog-body.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  addCert: FormGroup;
  dateToday = new Date();
  
  
  constructor(private appService: AppService,private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    
    this.addCert = new FormGroup({
      employee_id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      dob: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    });
  }

  onSubmit(){
    debugger
    console.log(this.addCert);
    console.log(this.addCert.value);
    if(this.addCert.valid){
      this.appService.employeeSignup(this.addCert.value).subscribe(res => {
        console.log('signup RESPONSE >>>>>', res);
        if(res){
          this.openDialog();
        }
    });
      
    }

  }

  OnClick(){
    this.router.navigate(['login']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogBodyComponent);
    
  }
  
}
