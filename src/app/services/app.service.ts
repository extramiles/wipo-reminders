import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    console.log('TOKEN>>>>>>>>>>>>')
    return this.httpClient.get(this.apiUrl + 'getEmployees');
  }
  getMyTeam(team_id:number): Observable<any> {
    console.log('TOKEN>>>>>>>>>>>>')
    return this.httpClient.get(`${this.apiUrl}getMyTeam/${team_id}`);
    //return this.httpClient.get(this.apiUrl + 'getMyTeam');
  }

  getProjects() : Observable<any>{
    console.log('TOKEN>>>>>>>>>>>>')
    return this.httpClient.get(this.apiUrl + 'getProjects');
  }
  createTeam(data) : Observable<any>{
    debugger;
    console.log('TOKEN>>>>>>>>>>>>'+ data)
    return this.httpClient.post(this.apiUrl + 'createTeam',data);
}

login(employee_id, password): Observable<any> {
  debugger;
  return this.httpClient.post(this.apiUrl + 'login', { employee_id, password });

}
updateTeam(employee_id, team_id): Observable<any> {
  debugger;
  return this.httpClient.post(this.apiUrl + 'updateEmployeeTeam', { employee_id, team_id });

}
updatePayment(employee_id, team_id,balance,comments): Observable<any> {
  debugger;
  return this.httpClient.post(this.apiUrl + 'updatePayment', { employee_id, team_id,balance,comments});

}
teamExpenditure(employee_id, team_id,balance,comments): Observable<any> {
  debugger;
  return this.httpClient.post(this.apiUrl + 'teamExpenditure', { employee_id, team_id,balance,comments});
}

employeeSignup(data){
  debugger;
  return this.httpClient.post(this.apiUrl + 'addEmployee', data);
}

}