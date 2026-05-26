import { Component } from "@angular/core";
import { SubscribeService } from "src/app/Services/subscribe.service";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  providers: [SubscribeService]
})
export class SidebarComponent {
    constructor(private subService: SubscribeService) {

    }

    onSubscribe() {

        // console.log('Subscribe clicked');
        // alert('Subscribed yearly successfully!');


        // let subService = new SubscribeService();
        this.subService.OnSubscribeClicked('Yearly');
    }
}