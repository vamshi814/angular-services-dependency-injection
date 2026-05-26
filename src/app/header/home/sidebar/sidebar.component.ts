import { Component } from "@angular/core";
import { SubscribeService } from "src/app/Services/subscribe.service";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent {

    onSubscribe() {

        // console.log('Subscribe clicked');
        // alert('Subscribed yearly successfully!');


        let subService = new SubscribeService();
        subService.OnSubscribeClicked('Yearly');
    }
}