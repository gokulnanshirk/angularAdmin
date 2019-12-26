import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  items: any;
  constructor(private service: DataService) {
    this.items = service.data;
  }
  ngOnInit() {
    
  }
}
