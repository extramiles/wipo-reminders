import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  addTeam: FormGroup;
  public createTeam = true;
  public createForm = false;
  teamCreated =false;
  addMember =false;
  showTeam= false
  teamMemberList: [];
  employeeList: [];
  colsEmployee = [
    { field: 'employeeId', header: 'Employee ID' },
    { field: 'employeeName', header: 'Employee Name' },
    { field: 'employeeLevel', header: 'Level' },
    { field: 'employeeDU', header: 'DU' },
    { field: 'project', header: 'Project' },
    { field: 'employeeEmail', header: 'Employee Email' },
    { field: 'certificateValid', header: 'Completion Status'},
    { field: 'certificationName', header: 'Certification Name' }]

    colsMember = [
      { field: 'employeeId', header: 'Employee ID' },
      { field: 'employeeName', header: 'Employee Name' },
      { field: 'employeeLevel', header: 'Level' },
      { field: 'employeeDU', header: 'DU' },
      { field: 'project', header: 'Project' },
      { field: 'employeeEmail', header: 'Employee Email' },
      { field: 'certificateValid', header: 'Completion Status'},
      { field: 'certificationName', header: 'Certification Name' }]

  constructor() { }

  ngOnInit() {
    this.addTeam = new FormGroup({
      employeeId: new FormControl('', []),
      certificationCategory: new FormControl('', []),
      
    });
  }
  onSubmit() {

 this.teamCreated =true;
 this.createForm = false;
  }

  onCreateTeam(){
    this.createTeam= false;
    this.createForm = true;
  }

  onAddMember(){
    this.addMember=true;
    this.showTeam=false;
    this.teamCreated=false;
  }
  
  onMyTeam(){
    this.showTeam=true;
    this.addMember =false;
    this.teamCreated=true;
  }

}
