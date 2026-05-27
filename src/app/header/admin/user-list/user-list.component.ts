import { Component, Inject } from "@angular/core";
import { USER_TOKEN } from "src/app/app.module";
import { UserService } from "src/app/Services/user.service";


@Component({    
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    
})  

export class UserListComponent {
    constructor(@Inject(USER_TOKEN) private userService: UserService) {

    }

    userList = this.userService.GetAllUsers();
}