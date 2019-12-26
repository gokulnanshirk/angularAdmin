import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  data: any;
  constructor() {
    this.data = [{ name: "gokul", age: "25", place: "blore" }];
  }
  set(item) {
    this.data.push(item);
    console.log(item, this.data);
  }
  get() {
    return this.data;
  }
}
