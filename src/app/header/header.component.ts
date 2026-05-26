import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  selctedTab: string = 'home';
  
  onHomeClick() {
    console.log('Home clicked');
  }

  onAdminClick() {
    console.log('Admin clicked');
  }

  onSubscribe() {
    console.log('Subscribe clicked');
    //add user to db
    //send email with subscription details
    //access service for user
    alert('Subscribed successfully!');
  }

}
