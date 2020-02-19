import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(private service: DataService) { }
  // name: any;
  // age: any;
  // place: any;
  students: any
  currentDepartment: any
  options: any
  checkboxElement: any
  ngOnInit() {
    this.checkboxElement = true
    this.currentDepartment = 'CIVIL'
    this.students = [{ name: 'dinesh', dept: 'CIVIL' }, { name: 'gokul', dept: 'MECH' }, { name: 'mohan', dept: 'CIVIL' }, { name: 'nikhil', dept: 'MECH' }]
    this.change()
  }

  submit() {
    // console.log(this.name, this.age, this.place);
    // let obj = {
    //   name: this.name,
    //   age: this.age,
    //   place: this.place
    // };
    // this.service.set(obj)
  }
  change() {
    this.options = this.students.filter(item => {
      return item.dept != this.currentDepartment
    })
    console.log(this.currentDepartment, this.options, 'changed----')
  }
}
