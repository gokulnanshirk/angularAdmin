import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AdminComponent } from "./admin/admin.component";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from './list/list.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "", component: ListComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  declarations: [AppComponent, AdminComponent, ListComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
