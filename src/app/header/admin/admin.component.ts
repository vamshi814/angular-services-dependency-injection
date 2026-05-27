import { Component, Inject } from "@angular/core";
import { USER_TOKEN } from "src/app/app.module";
import { UserService } from "src/app/Services/user.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})

export class AdminComponent {
    //default values for form fields
    name: string = '';
    gender: string = 'Male';
    subType: string = 'Yearly';
    status: string = 'Active';

    constructor(@Inject(USER_TOKEN) private userService: UserService) { 

    }
    CreateNewUser() {
      this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
      // console.log(this.userService.GetAllUsers());
      
    }

}
