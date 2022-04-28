import { MicrosoftLoginGuard } from './microsoft-login.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnalystPageComponent } from './analyst-page/analyst-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '**', component: LoginPageComponent},
  {path: 'admin-page', component: AdminPageComponent, canActivate: [MicrosoftLoginGuard]}];
// {path: '**', component: AnalystPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
