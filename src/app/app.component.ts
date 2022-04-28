
import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Microsoft Login- Example';
  message: string | undefined;

  constructor(private authService: MsalService, private helloService: HelloService) {

  }
  ngOnInit(): void {
    this.authService.instance.handleRedirectPromise().then(res => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account)
      }
    })
    this.getHello();
  }

  isLoggedIn(): boolean {
    const user = "girishbalanagu@outlook.com"
    // return this.authService.instance.getActiveAccount() != null
    return this.authService.instance.getActiveAccount()?.username == user;
  }

  login() {
    // this.authService.loginRedirect();

    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);
      });
  }

  logout() {
    this.authService.logout()
  }

  getHello() {
    this.helloService.getHello().subscribe((res) => {
      this.message = res.message;
    })
  }
}
