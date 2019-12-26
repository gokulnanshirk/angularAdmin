import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(private service: DataService) {}
  name: any;
  age: any;
  place: any;
  ngOnInit() {}

  submit() {
    console.log(this.name, this.age, this.place);
    let obj = {
      name: this.name,
      age: this.age,
      place: this.place
    };
    this.service.set(obj)
  }
}
