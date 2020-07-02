import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService} from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employee_id= Number(`${environment.employee_id}`);
  designation= `${environment.designation}`;
  team_id  = Number(`${environment.team_id}`);

  teamMemberList=[{
    "employee_id": 693313,
    "name": "Amit Bhandari",
    "dob": "2020-06-08",
    "email": "amit777bhandari@gmail.com",
    "team_id": 33,
    "balance": 0,
    "password": "1234",
    "designation": "manager"
}];

  teams =[{
    "team_id": 33,"team_name": "Amit","project_id": "1",'employee_id': 693313},
    {  "team_id": 36,  "team_name": "Bhandari",  "project_id": "1"}];

    

  addTeam: FormGroup;
  public createTeam = true;
  public createForm = false;
  teamCreated =false;
  addMember =false;
  showTeam= false
  

  employeeList: [];
  projects: [];
  data:any;
  amount=100;
  comment="paid 100";
  colsEmployee = [
    { field: 'employee_id', header: 'Employee ID' },
    { field: 'name', header: 'Employee Name' },
    { field: 'dob', header: 'DOB' },
    { field: 'project', header: 'Add/Remove' },
    ]

    colsMember = [
      { field: 'employee_id', header: 'Employee ID' },
      { field: 'name', header: 'Employee Name' },
      { field: 'dob', header: 'DOB' },
      { field: 'anniversary_date', header: 'Anniversity' },
      { field: 'balance', header: 'Balance' },
      { field: 'role', header: 'Role'}
      ]

  constructor(private appService: AppService) { }

  ngOnInit() {

    // this.appService.getMyTeam(this.team_id).subscribe(res => {
    //   console.log('teamMemberList RESPONSE >>>>>', res);
    //   this.teamMemberList = res;
    // });

    this.addTeam = new FormGroup({
      team_name: new FormControl('', []),
      project_id: new FormControl('', []),
      
    });
  }
  onSubmit() {
    this.appService.createTeam(this.addTeam.value).subscribe(res => {
      console.log('Team created RESPONSE >>>>>', res);
      this.data=res;
      if(res){
        console.log("cccccccccccccccccccccccc>>>>>> "+this.data.team_id);
        this.team_id=this.data.team_id;
        environment.team_id=this.data.team_id;

        this.appService.updateTeam(this.employee_id,this.team_id).subscribe(res => {
          console.log('ProjectsList RESPONSE >>>>>', res);
          this.projects = res;
        });

      }
    });
    
    

   //this.team_id=1
 this.teamCreated =true;
 this.createForm = false;
 
  }

  onCreateTeam(){
    this.appService.getProjects().subscribe(res => {
      console.log('ProjectsList RESPONSE >>>>>', res);
      this.projects = res;
    });
    this.createTeam= false;
    this.createForm = true;
    
  }

  onAddMember(){
    this.addMember=true;
    this.showTeam=false;
    this.teamCreated=false;
    this.appService.getEmployees().subscribe(res => {
      console.log('employeeList RESPONSE >>>>>', res);
      this.employeeList = res;
    });
  }
  
  onMyTeam(){
    this.showTeam=true;
    this.addMember =false;
    this.teamCreated=true;
    this.appService.getMyTeam(this.team_id).subscribe(res => {
      console.log('teamMemberList RESPONSE >>>>>', res);
      this.teamMemberList = res;
    });
  }
onPay(data){
  if(data.role=="spoc"){
    this.appService.teamExpenditure(data.employee_id,this.team_id, this.amount,this.comment).subscribe(res => {
      console.log('ProjectsList RESPONSE >>>>>', res);
     
    });

  }
  else{
  console.log(data);
  this.appService.updatePayment(data.employee_id,this.team_id,data.balance,this.comment).subscribe(res => {
    console.log('ProjectsList RESPONSE >>>>>', res);
    
  });
}
}

onAddToTeam(data){
  console.log(data);
  this.appService.updateTeam(data.employee_id,this.team_id).subscribe(res => {
    console.log('ProjectsList RESPONSE >>>>>', res);
    
  });
}

onTabOpen(event) {
  console.log("clicked>>>>>>>>>>>>>>>>>>"+this.teams[event.index].team_id);
  this.appService.getMyTeam(this.teams[event.index].team_id).subscribe(res => {
      console.log('teamMemberList RESPONSE >>>>>', res);
      this.teamMemberList = res;
     });
}

}
