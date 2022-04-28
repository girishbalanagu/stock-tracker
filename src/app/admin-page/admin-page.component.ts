import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  username: string | undefined;

  constructor(private authService: MsalService) { }

  getName () : any {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    return this.authService.instance.getActiveAccount()?.username;
  }

  ngOnInit(): void {
    this.username = this.getName();
  }

}
