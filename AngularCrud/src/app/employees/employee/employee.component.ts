import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


import {EmployeeService} from '../shared/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeservice : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.employeeservice.selectedEmployee = {
      EmployeeId : null,
      FirstName : "",
      LastName : "",
      EmpCode : "",
      Position : "",
      Office : "",
    }
  }

onSubmit(form : NgForm){
  if(form.value.EmployeeId == null){
  this.employeeservice.postEmployee(form.value)
  .subscribe(data => {
    this.resetForm(form);
    this.employeeservice.getEmployeelist();
  })
  }
  else{
  this.employeeservice.putEmployee(form.value.EmployeeId, form.value)
  .subscribe(data => {
    this.resetForm(form);
    this.employeeservice.getEmployeelist();
  })
  }
}

}
