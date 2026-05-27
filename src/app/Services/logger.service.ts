import { Injectable } from "@angular/core";

//we can provide here only using prividedIn root without adding it to providers array in app.module.ts
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

    LogMessage(name: string, status: string) {
        console.log(`New User with name ${name} with status ${status} has been added.`);
    }

}