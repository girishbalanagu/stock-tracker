
import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';
import { Title } from '@angular/platform-browser';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Tracter Application';
  message: string | undefined;
  currentUser: any;
  users: any[];

  constructor(
    private authService: MsalService,
    private helloService: HelloService,
    private usersService: UsersService,
    private titleService: Title) {
    this.users = [];

  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.authService.instance.handleRedirectPromise().then(res => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account)
      }
    })
    this.getHello();
    this.getUsers();
  }

  isLoggedIn(): boolean {
    // const user = "girishbalanagu@outlook.com"
    // return this.authService.instance.getActiveAccount() != null;
    const user = this.users.find(user => user.email === this.authService.instance.getActiveAccount()?.username)
    this.currentUser = user;
    return user ? true : false;
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

  getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }
}
