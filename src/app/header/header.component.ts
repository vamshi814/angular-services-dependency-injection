import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService]
})
export class HeaderComponent {

  selctedTab: string = 'home';

  onHomeClick() {
    console.log('Home clicked');
  }

  onAdminClick() {
    console.log('Admin clicked');
  }


  constructor(private subService: SubscribeService) {

  }
  onSubscribe() {
    // let subService = new SubscribeService();

    this.subService.OnSubscribeClicked('Today');
  }

}
