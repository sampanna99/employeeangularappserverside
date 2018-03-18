import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import {Employee} from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice : EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getEmployeelist();
  }
showForEdit(emp: Employee){
  this.employeeservice.selectedEmployee = Object.assign({}, emp);
}
onDelete(id : number){
  if(confirm('Are you sure about deleting the record ? ') == true){
      this.employeeservice.deleteEmloyee(id).subscribe(x => {
        this.employeeservice.getEmployeelist();
      })
  }
}
}
