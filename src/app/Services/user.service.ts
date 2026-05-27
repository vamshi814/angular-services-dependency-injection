import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {
    users: User[] = [
        new User('John', 'Male', 'Yearly', 'Active'),
        new User('Jane', 'Female', 'Monthly', 'Inactive'),
        new User('Doe', 'Male', 'Yearly', 'Active'),
    ];

    constructor(private logger: LoggerService) {

    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User) {
        this.OnUserDetailsClicked.emit(user);
    }

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let newUser = new User(name, gender, subType, status);
        this.users.push(newUser);
        this.logger.LogMessage(name, status);
    }
    
}