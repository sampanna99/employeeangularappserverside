import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model'

@Injectable()
export class EmployeeService {

  selectedEmployee : Employee;
  employeeList : Employee[];

  constructor(private http : Http) { }

  postEmployee(emp : Employee){
    var body = JSON.stringify(emp)
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers: headerOptions});
    return this.http.post('http://localhost:60042/api/Employee',body,requestOptions).map(x => x.json());
  }

putEmployee(id, emp){
    var body = JSON.stringify(emp)
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put,headers: headerOptions});
    var url = 'http://localhost:60042/api/Employee/' + id;
    return this.http.put(url,body,requestOptions).map(x => x.json());
  }
  deleteEmloyee(id: number){
    return this.http.delete('http://localhost:60042/api/Employee/' + id).map(a => a.json());
  }

  getEmployeelist(){
    this.http.get('http://localhost:60042/api/Employee').map((data: Response) => {
      return data.json() as Employee[];
    }).toPromise().then(a => {this.employeeList = a;})
  }

}
