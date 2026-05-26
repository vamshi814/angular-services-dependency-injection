import { Component } from "@angular/core";
import { SubscribeService } from "src/app/Services/subscribe.service";


@Component({  
    selector: "app-hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.css"],
    
})



export class HeroComponent {

    constructor(private subService: SubscribeService) {

    }

    onSubscribe() {
        // console.log('Subscribe clicked');   this is redudant code 
        // alert('Subscribed monthly successfully!');

        //so we use service here
        // let subService = new SubscribeService();
        this.subService.OnSubscribeClicked('Monthly');
    }
}