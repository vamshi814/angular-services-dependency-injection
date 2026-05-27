import { Component, inject } from "@angular/core";
import { USER_TOKEN } from "src/app/app.module";
import { User } from "src/app/Models/User";



@Component({
    selector: "app-user-details",
    templateUrl: "./user-detail.component.html",
})

export class UserDetailComponent {
    
    userService = inject(USER_TOKEN);

    selectedUser: User = null as any;

    ngOnInit() {
        this.userService.OnUserDetailsClicked.subscribe(
            (user: User)=>{
                this.selectedUser = user;
                console.log("Selected User: ", this.selectedUser);
            }
        );
    }

}