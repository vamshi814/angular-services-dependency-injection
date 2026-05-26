import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
  
})
export class HeaderComponent {

  selectedTab: string = 'admin';

  onHomeClick() {
    this.selectedTab = 'home';
    console.log('Home clicked');
  }

  onAdminClick() {
    this.selectedTab = 'admin';
    console.log('Admin clicked');
  }


  constructor(private subService: SubscribeService) {

  }
  onSubscribe() {
    // let subService = new SubscribeService();

    this.subService.OnSubscribeClicked('Today');
  }

}
